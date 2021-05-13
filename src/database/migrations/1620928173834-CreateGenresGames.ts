import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGenresGames1620928173834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'genres_games',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'genres_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'game_id',
              type: 'uuid',
              isNullable: true,
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
              name: 'genresGamesGenres',
              referencedTableName: 'genres',
              referencedColumnNames: ['id'],
              columnNames: ['genres_id'],
              onDelete: 'SET NULL',
            },
            {
              name: 'genresGamesGame',
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
      await queryRunner.dropTable('genres_games');
    }

}
