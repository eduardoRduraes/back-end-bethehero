import { ObjectId } from "mongodb";

interface IOngProps {
    _id: ObjectId;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
}

export { IOngProps };
