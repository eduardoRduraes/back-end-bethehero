import { ICreateOngDTO } from "@modules/dtos/ICreateOngDTO";
import { IOngRepository } from "@modules/ongs/repositories/IOngRepository";

import { IOngModel } from "../entities/ongs";

class OngRepository implements IOngRepository {
    async create({
        name,
        email,
        whatsapp,
        city,
        uf,
    }: ICreateOngDTO): Promise<IOngModel> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<IOngModel> {
        throw new Error("Method not implemented.");
    }

    async findByEmail(email: string): Promise<IOngModel> {
        throw new Error("Method not implemented.");
    }
}

export { OngRepository };
