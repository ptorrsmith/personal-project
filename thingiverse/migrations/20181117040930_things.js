exports.up = function (knex, Promise) {
    return knex.schema.createTable('things', t => {
        t.increments('id').primary()
        t.string('name')
        t.text('description')
        // t.integer('daily_rate_in_cents')
        t.integer('owner_member_id')
        // t.integer('quantity')
        t.datetime('created_at').defaultTo(knex.fn.now())
    })
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('things')
};
