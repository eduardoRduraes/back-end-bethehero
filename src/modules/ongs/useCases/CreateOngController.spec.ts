import { ICreateOngDTO } from "@modules/dtos/ICreateOngDTO";
import { Collection } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";

import { app } from "@shared/infra/http/app";
import { MongoHelper } from "@shared/infra/mongodb/mongo-helper";

const makeFakeOng: ICreateOngDTO = {
    name: "Santa Casa de Diadema",
    email: "santacasadiadema@mail.com.br",
    whatsapp: "389999999999",
    city: "Diadema",
    uf: "MG",
};

let ongCollection: Collection;

describe("Create ong account", () => {
    beforeAll(async () => {
        const mongodb = await MongoMemoryServer.create();
        await MongoHelper.connect(mongodb.getUri());
    });

    beforeEach(async () => {
        ongCollection = await MongoHelper.getCollection("ongs");
        await ongCollection.deleteMany({});
    });

    afterAll(async () => {
        await MongoHelper.disconnect();
    });

    it("should return the message `Ong already exists!` if there is already a registered ONG", async () => {
        await request(app).post("/ongs").send(makeFakeOng);
        const response = await request(app).post("/ongs").send(makeFakeOng);

        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Ong already exists!");
    });

    it("should be able to create and save ong account in an repository mongoDB", async () => {
        const response = await request(app).post("/ongs").send(makeFakeOng);

        expect(response.body).toBeTruthy();
        expect(response.body).toHaveProperty("id");
    });
});
