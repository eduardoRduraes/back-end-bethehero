/* eslint-disable no-underscore-dangle */
import { ICreateOngDTO } from "@modules/dtos/ICreateOngDTO";
import { IOngModel } from "@modules/ongs/infra/mongodb/entities/ongs";
import { v4 as uuidV4 } from "uuid";

import { IOngRepository } from "../IOngRepository";

class OngRepositoryInMemory implements IOngRepository {
    private ongs: IOngModel[] = [];

    async create({
        name,
        email,
        whatsapp,
        city,
        uf,
    }: ICreateOngDTO): Promise<IOngModel> {
        const data: IOngModel = {
            name,
            email,
            whatsapp,
            city,
            uf,
        } as IOngModel;
        data.id = uuidV4();

        this.ongs = [data, ...this.ongs];

        return data;
    }

    async findById(id: string): Promise<IOngModel> {
        const ong = this.ongs.find((o) => o.id.toString() === id);
        return ong as IOngModel;
    }

    async findByEmail(email: string): Promise<IOngModel> {
        const ong = this.ongs.find((o) => o.email.toString() === email);
        return ong as IOngModel;
    }
}

export { OngRepositoryInMemory };
