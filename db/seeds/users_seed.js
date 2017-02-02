
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({first_name: 'James', last_name: 'Bond', phone: '14165555555'})
      ]);
    });
};