exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('things').del().then(function () {
    // Inserts seed entries
    return knex('things').insert([
      // { "id": 1, "name": "Trailer", "daily_rate_in_cents": 5000, "owner_member_id": 1, "quantity": 1 },
      // { "id": 2, "name": "Backpack", "daily_rate_in_cents": 700, "owner_member_id": 2, "quantity": 2 },
      // { "id": 3, "name": "Sleeping Bag", "daily_rate_in_cents": 700, "owner_member_id": 2, "quantity": 4 },
      // { "id": 4, "name": "Party light set", "daily_rate_in_cents": 8499, "owner_member_id": 3 },
      // { "id": 5, "name": "Outdoor sound system", "daily_rate_in_cents": 7000, "owner_member_id": 3 }
      // { "id": 1, "name": "Trailer", "owner_member_id": 1, "description": "High sided" },
      // { "id": 2, "name": "Backpack", "owner_member_id": 2, "description": "60L" },
      // { "id": 3, "name": "Sleeping Bag", "owner_member_id": 2, "description": "with hood, all season" },
      // { "id": 4, "name": "Party light set", "owner_member_id": 3, "description": "5 different lights on a stand" },
      // { "id": 5, "name": "Outdoor sound system", "owner_member_id": 3, "description": "with battery" }
      { "id": 1, "name": "Life plan", "owner_member_id": 1, "description": "42" },
      { "id": 2, "name": "House build", "owner_member_id": 2, "description": "Reqs, design, contracts, build, live" },
      { "id": 3, "name": "HT V3", "owner_member_id": 2, "description": "The pathway" },
      { "id": 4, "name": "This system", "owner_member_id": 3, "description": "The parts of this" },
      { "id": 5, "name": "EDA stack", "owner_member_id": 3, "description": "DB, Knex,Express/API <> api-client, React app, HTML, CSS, other JS" }

    ]);
  });
};
