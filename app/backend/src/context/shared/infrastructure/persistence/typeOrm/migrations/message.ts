import { MigrationInterface, QueryRunner } from 'typeorm'

export class PostRefactoringTIMESTAMP implements MigrationInterface {
	async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE message (
                id varchar PRIMARY key,
                "name" varchar NULL,
                "text" varchar NULL
            )`,
		)
	}

	async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE message`)
	}
}
