import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";

class UserController {
  index(req: Request, res: Response) {
    return res.send({ userId: req.userId });
  }
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { cpf, email, nome, senha } = req.body;

    const userExists = await repository.findOne({ where: { cpf } });
    if (userExists) {
      return res.sendStatus(409);
    }

    const user = repository.create({ cpf, nome, email, senha });
    await repository.save(user);
    return res.json(user);
  }
}

export default new UserController();
