exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('things').del().then(function() {
    // Inserts seed entries
    return knex('things').insert([
      { "id": 1, "name": "Trailer", "daily_rate_in_cents": 5000, "owner_member_id": 1, "quantity": 1 },
      { "id": 2, "name": "Backpack", "daily_rate_in_cents": 700, "owner_member_id": 2, "quantity": 2 },
      { "id": 3, "name": "Sleeping Bag", "daily_rate_in_cents": 700, "owner_member_id": 2, "quantity": 4 },
      { "id": 4, "name": "Party light set", "daily_rate_in_cents": 8499, "owner_member_id": 3 },
      { "id": 5, "name": "Outdoor sound system", "daily_rate_in_cents": 7000, "owner_member_id": 3 }
    ]);
  });
};
