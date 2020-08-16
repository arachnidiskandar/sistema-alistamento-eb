export enum Perfil {
  ADMIN,
  ENTREVISTADO,
  ENTREVISTADOR,
}
export interface Usuario {
  cpf: number;
  senha: string;
  nome: string;
  email: string;
  tipoUsuario: Perfil;
}
