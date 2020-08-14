import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1597424939282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "cpf",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "senha",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
