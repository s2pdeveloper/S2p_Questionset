const app = require('express')();
const seminaryController = require('./seminar');
// const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

/**
 * @swagger
 * tags:
 *   - name: Seminar
 *     description: Operations related to Seminars
 */


/**
 * @swagger
 * tags:
 *   - name: QuestionSet
 *     description: Operations related to QuesttionSets
 */

app.get('/', seminaryController.getAll);
/**
 * @swagger
 * /api/v1/admin/seminar/:
 *   get:
 *     summary: Retrieve all Seminars
 *     description: Get all Seminars for Testing.
 *     tags: [Seminar]
 *     responses:
 *       '200':
 *         description: A JSON array of Seminars.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 */

app.get('/list', seminaryController.getList);

app.get('/:id', seminaryController.getById);
/**
 * @swagger
 * /api/v1/admin/seminar/{id}:
 *   get:
 *     summary: Retrieve a Seminar by ID
 *     description: Get details of a Seminar by its ID.
 *     tags: [Seminar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Seminar to retrieve.
 *     responses:
 *       '200':
 *         description: Details of the Seminar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 */

app.post('/', seminaryController.create);
/**
 * @swagger
 * /api/v1/admin/seminar:
 *   post:
 *     summary: Create a new Seminar
 *     description: Create a new Seminar.
 *     tags: [Seminar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully created a new Seminar.
 */

app.put('/:id', seminaryController.update);
/**
 * @swagger
 * /api/v1/admin/seminar/{id}:
 *   put:
 *     summary: Update a Seminar
 *     description: Update details of a Seminar by its ID.
 *     tags: [Seminar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Seminar to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully updated the Seminar.
 */

app.delete('/:id', seminaryController.delete);
/**
 * @swagger
 * /api/v1/admin/seminar/{id}:
 *   delete:
 *     summary: Delete a Seminar
 *     description: Delete a Seminar by its ID.
 *     tags: [Seminar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Seminar to delete.
 *     responses:
 *       '200':
 *         description: Successfully deleted the Seminar.
 */

module.exports = app;
