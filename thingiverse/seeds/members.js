
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        { id: 1, name: 'Peter', description: "Live life each day" },
        { id: 2, name: 'Maria', description: "Love to be in nature" },
        { id: 3, name: 'Amy', description: "What is philosophy really?" }
      ]);
    });
};
