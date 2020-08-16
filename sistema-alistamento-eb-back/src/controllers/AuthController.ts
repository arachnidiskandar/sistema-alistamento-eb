// import { Request, Response } from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { Usuario } from "../models/Usuario";
// require("dotenv").config();
// const db = require('../database/index');

// class AuthController {
//   async autenticar(req: Request, res: Response) {
//     const { cpf, senha } = req.body;

//     // const user = await db<Usuario>.findOne({ where: { cpf } });
//     if (!user) {
//       return res.sendStatus(401);
//     }
//     const isValidPassword = bcrypt.compare(senha, user.senha);
//     if (!isValidPassword) {
//       return res.sendStatus(401);
//     }
//     delete user.senha;
//     const token = jwt.sign({ id: user.cpf }, process.env.SECRET as string, {
//       expiresIn: "1d",
//     });
//     return res.json({
//       user,
//       token,
//     });
//   }
// }

// export default new AuthController();
