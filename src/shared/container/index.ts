import { OngRepository } from "@modules/ongs/infra/mongodb/repositories/OngRepository";
import { IOngRepository } from "@modules/ongs/repositories/IOngRepository";
import { container } from "tsyringe";

container.registerSingleton<IOngRepository>("OngRepository", OngRepository);
