import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import "../../container";
import express, { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/errors/AppError";

import { appRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(appRouter);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response
                .status(err.statusCode)
                .json({ message: err.message });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

export { app };
