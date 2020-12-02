import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1606867355588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'codigo',
                type: 'varchar',
              },
              {
                name: 'descricao',
                type: 'text'
              },
              {
                name: 'altura',
                type: 'decimal'
              },
              {
                name: 'largura',
                type: 'decimal',
              },
              {
                name: 'profundidade',
                type: 'decimal',
              },
              {
                name: 'peso',
                type: 'decimal'
              },
              {
                name: 'valorCompra',
                type: 'decimal'
              },
              {
                name: 'valorVenda',
                type: 'decimal'
              },
            ]
          }))
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
