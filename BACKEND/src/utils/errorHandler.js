
export const errorHandler = (err,req,res,next) => {//Error Handler
  if (err instanceof AppError) { 
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Fallback for unhandled errors
  console.error(err); // Log the full error for debugging
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};


export class AppError extends Error {
  statusCode;//custom properties
  isOperational;

  constructor(message, statusCode = 500, isOperational = true) {//by default the error is operational
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

//Here only specifying Operational errors.We are only handling those
export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}

export class ConflictError extends AppError {
  constructor(message = "Conflict occurred") {
    super(message, 409);
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad request") {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}