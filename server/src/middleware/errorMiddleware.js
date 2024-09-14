/**
 * @file errorMiddleware.js
 * @description Middleware for handling errors and sending a generic error response.
 * @module middleware/errorMiddleware
 */

/**
 * Middleware function to handle errors.
 * @function errorMiddleware
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} A generic error message.
 */
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
};

module.exports = errorMiddleware;
