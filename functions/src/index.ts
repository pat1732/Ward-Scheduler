import * as functions from "firebase-functions/v2";
import express from "express";
import { authMiddleware } from "./middleware/auth";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
import healthRouter from "./routes/v1/health";
import v1Router from "./routes/v1";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public routes (no auth)
app.use("/api/v1", healthRouter);

// Protected routes (require auth)
app.use("/api/v1", authMiddleware, v1Router);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Export Firebase Cloud Function v2
export const api = functions.https.onRequest({
  cors: true,
  secrets: ["API_KEY"],
}, app);
