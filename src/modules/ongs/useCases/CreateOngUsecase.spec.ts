import { ICreateOngDTO } from "@modules/dtos/ICreateOngDTO";

import { AppError } from "@shared/errors/AppError";

import { OngRepositoryInMemory } from "../repositories/inMemory/OngRepositoryInMemory";
import { CreateOngUseCase } from "./CreateOngUseCase";

describe("Create Ong", () => {
    let ongRepositoryInMemory: OngRepositoryInMemory;
    let createOngUseCase: CreateOngUseCase;

    beforeEach(() => {
        ongRepositoryInMemory = new OngRepositoryInMemory();
        createOngUseCase = new CreateOngUseCase(ongRepositoryInMemory);
    });

    const makeFakeOng = (): ICreateOngDTO => ({
        name: "Mundo Animal",
        email: "mundoanimalong@mail.com.br",
        whatsapp: "38999142447",
        city: "Buritis",
        uf: "MG",
    });

    it("should be able to create a new ong", async () => {
        const response = await createOngUseCase.execute(makeFakeOng());
        expect(response).toBeTruthy();
        expect(response).toHaveProperty("id");
    });

    it("should not be able to create an ong if it already exists with the same data", async () => {
        await createOngUseCase.execute(makeFakeOng());

        await expect(createOngUseCase.execute(makeFakeOng())).rejects.toEqual(
            new AppError("Ong already exists!")
        );
    });
});
