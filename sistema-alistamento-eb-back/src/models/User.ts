import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import bcrypt from "bcryptjs";
@Entity("users")
class User {
  @PrimaryColumn()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.senha = bcrypt.hashSync(this.senha, 8);
  }
}

export default User;
