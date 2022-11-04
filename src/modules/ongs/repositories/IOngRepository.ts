import { ICreateOngDTO } from "@modules/dtos/ICreateOngDTO";

import { IOngModel } from "../infra/mongodb/entities/ongs";

interface IOngRepository {
    create({
        name,
        email,
        whatsapp,
        city,
        uf,
    }: ICreateOngDTO): Promise<IOngModel>;

    findById(id: string): Promise<IOngModel>;

    findByEmail(email: string): Promise<IOngModel>;
}

export { IOngRepository };
