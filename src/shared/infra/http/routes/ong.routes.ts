import { CreateOngController } from "@modules/ongs/useCases/CreateOngController";
import { Router } from "express";

const ongsRoutes = Router();

const createOngController = new CreateOngController();

ongsRoutes.post("/", createOngController.handle);

export { ongsRoutes };
