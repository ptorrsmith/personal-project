
exports.up = function (knex, Promise) {
  return knex.schema.createTable('members', t => {
    t.increments('id').primary()
    t.string('name')
    t.text('description')
    t.datetime('created_at').defaultTo(knex.fn.now())
  }
  )
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('members')
}
