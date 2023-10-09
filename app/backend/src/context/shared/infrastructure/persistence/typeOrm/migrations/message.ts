import { MigrationInterface, QueryRunner } from 'typeorm'

export class PostRefactoringTIMESTAMP implements MigrationInterface {
	async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE message (
                "id" varchar PRIMARY key,
                "name" varchar NULL,
                "text" varchar NULL,
				"created_at" timestamp NOT NULL,
				"updated_at" timestamp  NOT NULL,
				"deleted_at" timestamp  DEFAULT NULL
            )`,
		)
	}

	async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE message`)
	}
}
