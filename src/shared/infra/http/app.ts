import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express";

import { appRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(appRouter);

export { app };
