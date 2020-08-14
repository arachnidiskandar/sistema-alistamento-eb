import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
require("dotenv").config();

import User from "../models/User";
class AuthController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { cpf, senha } = req.body;

    const user = await repository.findOne({ where: { cpf } });
    if (!user) {
      return res.sendStatus(401);
    }
    const isValidPassword = bcrypt.compare(senha, user.senha);
    if (!isValidPassword) {
      return res.sendStatus(401);
    }
    delete user.senha;
    const token = jwt.sign({ id: user.cpf }, process.env.SECRET as string, {
      expiresIn: "1d",
    });
    return res.json({
      user,
      token,
    });
  }
}

export default new AuthController();
