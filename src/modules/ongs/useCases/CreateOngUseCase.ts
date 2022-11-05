import { ICreateOngDTO } from "@modules/dtos/ICreateOngDTO";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IOngRepository } from "../repositories/IOngRepository";

@injectable()
class CreateOngUseCase {
    constructor(
        @inject("OngRepository")
        private readonly ongRepository: IOngRepository
    ) {}
    async execute({ name, email, whatsapp, city, uf }: ICreateOngDTO) {
        const isExist = await this.ongRepository.findByEmail(email);

        if (isExist) {
            throw new AppError("Ong already exists!", 401);
        }

        const ong = await this.ongRepository.create({
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return ong;
    }
}

export { CreateOngUseCase };
