const app = require('express')();
const QuestionSet = require('./questionSet');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');









/**
 * @swagger
 * /api/v1/admin/questionSet/seminarAllQuestionSet/{id}:
 *   get:
 *     summary: Retrieve all question sets for a seminar by ID
 *     description: Get all question sets associated with a specific seminar based on its ID.
 *      tags: [QuestionSet]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the seminar to retrieve question sets for.
 *     responses:
 *       '200':
 *         description: A JSON array of question sets.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   question:
 *                     type: string
 *                   answer:
 *                     type: string
 */
app.get('/seminarAllQuestionSet/:id', QuestionSet.getAllBySeminaryId);







/**
 * @swagger
 * /api/v1/admin/questionSet/seminarAllQuestionSet/{id}:
 *   get:
 *     summary: Retrieve all question sets for a seminar by ID
 *     description: Get all question sets associated with a specific seminar based on its ID.
 *     tags: [QuestionSet]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the seminar to retrieve question sets for.
 *     responses:
 *       '200':
 *         description: A JSON array of question sets.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   question:
 *                     type: string
 *                   answer:
 *                     type: string
 */













app.post('/:id', QuestionSet.createForSeminar);
/**
 * @swagger
 * components:
 *   schemas:
 *     QuestionSet:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         noOfQuestion:
 *           type: number
 *         duration:
 *           type: number
 *         seminarId:
 *           type: string
 *         serialNumber:
 *           type: number
 *         isVisible:
 *           type: boolean
 *         passingMarks:
 *           type: string
 *         isClose:
 *           type: boolean
 *       required:
 *         - name
 *         - noOfQuestion
 *         - duration
 *         - seminarId
 *         - serialNumber
 *         - passingMarks
 *         - isClose
 */

/**
 * @swagger
 * /api/v1/admin/questionSet/{id}:
 *   post:
 *     summary: Create a Questionset for a seminar
 *     description: Create a Questionset for a specific seminar based on seminarId.
 *     tags: [QuestionSet]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the seminar to create a Questionset for.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Questionset'
 *     responses:
 *       '200':
 *         description: Successfully created a Questionset.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Questionset'
 *       '400':
 *         description: Invalid request payload or seminar ID.
 *       '500':
 *         description: Internal server error.
 */





app.put('/changeVisibility/:id', QuestionSet.changeVisibility);

/**
 * @swagger
 * /api/v1/admin/questionSet/changeVisibility/{id}:
 *   put:
 *     summary: Change the visibility of a particular QuestionSet
 *     description: Update the visibility of a specific QuestionSet based on seminarId.
 *     tags: [QuestionSet]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the QuestionSet to update visibility for.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               seminarId:
 *                 type: string
 *             required:
 *               - seminarId
 *     responses:
 *       '200':
 *         description: Successfully updated visibility of the QuestionSet.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Questionset'
 *       '400':
 *         description: Invalid request payload or seminar ID.
 *       '500':
 *         description: Internal server error.
 */








app.put('/:id', QuestionSet.update);


/**
 * @swagger
 * /api/v1/admin/questionSet/{id}:
 *   put:
 *     summary: Update a QuestionSet
 *     description: Update a QuestionSet based on its ID.
 *     tags: [QuestionSet]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the QuestionSet to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Questionset'
 *     responses:
 *       '200':
 *         description: Successfully updated the QuestionSet.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Questionset'
 *       '400':
 *         description: Invalid request payload or QuestionSet ID.
 *       '500':
 *         description: Internal server error.
 */








app.delete('/:id', QuestionSet.delete);
app.get('/:id', QuestionSet.getById);
app.get('/getAll', QuestionSet.getAll);


module.exports = app;


