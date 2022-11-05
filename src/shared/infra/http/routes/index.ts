import { Router } from "express";

import { ongsRoutes } from "./ong.routes";

const appRouter = Router();

appRouter.get("/", (request, response) => {
    return response.status(201).json({ message: "hello!" });
});

appRouter.use("/ongs", ongsRoutes);

export { appRouter };
