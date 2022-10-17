import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.execute(request, response);
});

export { router }