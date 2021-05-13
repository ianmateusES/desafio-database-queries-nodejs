import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrdersGames1620927905642 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'orders_games',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'order_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'game_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'price',
              type: 'decimal',
              precision: 6,
              scale: 2,
            },
            {
              name: 'quantity',
              type: 'int',
              default: 1,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
          foreignKeys: [
            {
              name: 'ordersGamesOrder',
              referencedTableName: 'orders',
              referencedColumnNames: ['id'],
              columnNames: ['order_id'],
              onDelete: 'SET NULL',
            },
            {
              name: 'ordersGamesGame',
              referencedTableName: 'games',
              referencedColumnNames: ['id'],
              columnNames: ['game_id'],
              onDelete: 'SET NULL',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orders_games');
    }

}
