import { Router } from "express";

const appRouter = Router();

appRouter.get("/", (request, response) => {
    return response.status(201).json({ message: "hello!" });
});

export { appRouter };
