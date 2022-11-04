import { ICreateOngDTO } from "@modules/dtos/ICreateOngDTO";

import { AppError } from "@shared/errors/AppError";

import { IOngRepository } from "../repositories/IOngRepository";

class CreateOngUseCase {
    constructor(private readonly ongRepository: IOngRepository) {}
    async execute({ name, email, whatsapp, city, uf }: ICreateOngDTO) {
        const isExist = await this.ongRepository.findByEmail(email);

        if (isExist) {
            throw new AppError("Ong already exists!");
        }

        const ong = this.ongRepository.create({
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
