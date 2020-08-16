import { Request, Response } from "express";

class UserController {
  async store(req: Request, res: Response) {
    const { cpf, email, nome, senha } = req.body;

    // const userExists = await prisma.uSUARIO.findOne({ where: { cpf } });
    // if (userExists) {
    //   return res.sendStatus(409);
    // }
    // // const user = prisma.create({ cpf, nome, email, senha });
    // // await prisma.save(user);
    // return res.json(user);
  }
}

export default new UserController();
