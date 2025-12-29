import { Request, Response, NextFunction } from "express";

export interface AuthenticatedRequest extends Request {
  userEmail?: string;
}

/**
 * Authentication middleware
 * Requires X-API-KEY header to match API_KEY secret
 * Requires X-USER-EMAIL header
 */
export const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const apiKey = req.headers["x-api-key"];
  const userEmail = req.headers["x-user-email"];

  const expectedApiKey = process.env.API_KEY;

  if (!expectedApiKey) {
    res.status(500).json({
      error: "Server configuration error",
      message: "API_KEY secret not configured",
    });
    return;
  }

  if (!apiKey || apiKey !== expectedApiKey) {
    res.status(401).json({
      error: "Unauthorized",
      message: "Invalid or missing X-API-KEY header",
    });
    return;
  }

  if (!userEmail || typeof userEmail !== "string") {
    res.status(401).json({
      error: "Unauthorized",
      message: "Missing or invalid X-USER-EMAIL header",
    });
    return;
  }

  req.userEmail = userEmail;
  next();
};





