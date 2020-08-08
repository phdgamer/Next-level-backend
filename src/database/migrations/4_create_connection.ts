import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();


        table.string('user_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.dateTime('created_at')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}
