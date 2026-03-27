const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../config/Options');
const mongoose = require('mongoose');
const { generateCreateData } = OPTIONS;
const Result = require('../../../../models/result');
const { Student } = require('../../../../models/student');
const Question = require('../../../../models/question');
const User = require('../../../../models/User');
const ResultObject = {
  rankedStudent: async (req, res) => {
    try {
      const questionSetId = req.body.questionSetId;
      const seminarId = req.body.seminarId;
      const top = req.query.top || 3; // Dyamically decide the how much ranked student want to see in list
      let {
        page = 1,
        pageSize = 9999,
        search = null,
        column = 'obtainMarks',
        direction = -1,
      } = req.query;

      page = parseInt(page, 10);
      pageSize = parseInt(pageSize, 10);
      direction = parseInt(direction, 10);
      const skip = Math.max(0, page - 1) * pageSize;
      const matchStage = {
        $match: {
          ...(seminarId && {
            seminarId: new mongoose.Types.ObjectId(seminarId),
          }),
          ...(questionSetId && {
            questionSetId: new mongoose.Types.ObjectId(questionSetId),
          }),
        },
      };
      const facetStage = {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: [
            { $skip: skip },
            { $sort: { obtainMarks: -1 } },
            { $limit: pageSize },
          ],
        },
      };

      const pipeline = [matchStage, facetStage];
      const resp = await Result.aggregate(pipeline);
      let noOfPassStudent = 0;
      let noOfFailStudent = 0;
      let percentageOfPassStudent = 0;
      let percentageOfFailStudent = 0;
      let noOfAttemptedStudent = 0;
      let noOfUnattemptedStudent = 0;
      let topStudent = [];

      resp[0].data.forEach((item, index) => {
        item.rank = index + 1;
        if (item.status == 'PASS') {
          noOfPassStudent++;
        }

        if (index < top) {
          topStudent.push(item);
        }
      });


      const totalStudent = await Student.countDocuments({
        seminarId: seminarId,
      });

      noOfFailStudent = totalStudent - noOfPassStudent;

      noOfAttemptedStudent = await Result.countDocuments({
        seminarId: seminarId,
        questionSetId: questionSetId,
      });
      noOfUnattemptedStudent = totalStudent - noOfAttemptedStudent;

      percentageOfFailStudent = (noOfFailStudent / totalStudent) * 100;
      percentageOfPassStudent = (noOfPassStudent / totalStudent) * 100;

      res.status(200).json({
        totalStudent,
        noOfAttemptedStudent,
        noOfUnattemptedStudent,
        percentageOfPassStudent,
        percentageOfFailStudent,
        noOfPassStudent,
        noOfFailStudent,
        topStudent,
      });
    } catch (error) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },

  getStudentDetailedResult: async (req, res) => {
    try {
      const { seminarId, questionSetId } = req.body;

      const results = await Result.find({
        seminarId: new mongoose.Types.ObjectId(seminarId),
        questionSetId: new mongoose.Types.ObjectId(questionSetId),
      }).lean();

      const studentIds = results.map((r) => r.studentId);

      const users = await User.find({
        _id: { $in: studentIds },
      }).lean();

      const userMap = {};
      users.forEach((user) => {
        userMap[user._id.toString()] = user;
      });

      let questionIds = [];
      results.forEach((student) => {
        student.answers.forEach((ans) => {
          questionIds.push(Object.keys(ans)[0]);
        });
      });

      questionIds = [...new Set(questionIds)];

      const questions = await Question.find({
        _id: { $in: questionIds },
      }).lean();

      const questionMap = {};
      questions.forEach((q) => {
        questionMap[q._id.toString()] = q;
      });

      const finalData = results.map((student, index) => {
        const user = userMap[student.studentId.toString()]; // ✅ correct user

        const detailedAnswers = student.answers.map((ansObj) => {
          const questionId = Object.keys(ansObj)[0];
          const userAnswer = ansObj[questionId];
          const question = questionMap[questionId];

          return {
            questionId,
            question: question?.questionText || '',
            correctAnswer: question?.correctOption || '',
            userAnswer,
            isCorrect: question?.correctOption === userAnswer,
          };
        });

        return {
          studentId: student.studentId,
          studentName: user
            ? `${user.firstName || ''} ${user.lastName || ''}`.trim()
            : 'Unknown',
          obtainMarks: student.obtainMarks,
          totalMarks: student.answers.length,
          status: student.status,
          detailedAnswers,
        };
      });

      // 6. Sort by marks (ranking)
      finalData.sort((a, b) => b.obtainMarks - a.obtainMarks);

      // 7. Add rank
      finalData.forEach((item, index) => {
        item.rank = index + 1;
      });

      res.status(200).json({
        totalStudents: finalData.length,
        students: finalData,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },
};
module.exports = ResultObject;
