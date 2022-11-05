import { IOngProps } from "@modules/dtos/IOngProps";
import { instanceToInstance } from "class-transformer";

import { IOngModel } from "../entities/ongs";

class OngMap {
    static toDTO({
        _id,
        name,
        email,
        whatsapp,
        city,
        uf,
    }: IOngProps): IOngModel {
        const ong = instanceToInstance({
            id: _id.toString(),
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return ong as IOngModel;
    }
}

export { OngMap };
