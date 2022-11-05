import { ICreateOngDTO } from "@modules/dtos/ICreateOngDTO";
import { IOngProps } from "@modules/dtos/IOngProps";
import { IOngRepository } from "@modules/ongs/repositories/IOngRepository";
import { Collection } from "mongodb";

import { MongoHelper } from "@shared/infra/mongodb/mongo-helper";

import { IOngModel } from "../entities/ongs";
import { OngMap } from "../mapper/OngMap";

class OngRepository implements IOngRepository {
    private data!: Collection;

    constructor() {
        MongoHelper.getCollection("ongs").then((response) => {
            this.data = response;
        });
    }

    async create({
        name,
        email,
        whatsapp,
        city,
        uf,
    }: ICreateOngDTO): Promise<IOngModel> {
        const ongCollection = await MongoHelper.getCollection("ongs");
        const result = await ongCollection.insertOne({
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return MongoHelper.map(await ongCollection.findOne(result.insertedId));
    }

    async findById(id: string): Promise<IOngModel | null> {
        const ongCollection = await MongoHelper.getCollection("ongs");
        const ong = await ongCollection.findOne({ _id: id });

        if (!ong) return null;

        return OngMap.toDTO(ong as IOngProps);
    }

    async findByEmail(email: string): Promise<IOngModel | null> {
        const ongCollection = await MongoHelper.getCollection("ongs");
        const ong = await ongCollection.findOne({ email });

        if (!ong) return null;

        return OngMap.toDTO(ong as IOngProps);
    }
}

export { OngRepository };
