import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresRespository } from "../../repositories/implementations/PostgresRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUserCase } from "./CreateUserUseCase";

const postgresRespository = new PostgresRespository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUserCase = new CreateUserUserCase(
    postgresRespository,
    mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUserCase);

export { createUserUserCase, createUserController }