import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOngUseCase } from "./CreateOngUseCase";

class CreateOngController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, whatsapp, city, uf } = request.body;

        const createOngUseCase = container.resolve(CreateOngUseCase);

        const ong = await createOngUseCase.execute({
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.status(201).json(ong);
    }
}

export { CreateOngController };
