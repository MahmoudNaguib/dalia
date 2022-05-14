exports.up = function (knex) {
    return knex.schema.createTable('skills', table => {
        table.bigIncrements('id').index();
        table.bigint('user_id').nullable().index();
        table.string('title').nullable();
        table.integer('years_of_experience').nullable();
        table.enu('proficiency', [1,2,3,4,5]).nullable().defaultTo(1);
        table.timestamps(true,true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('skills');
};
exports.config = { transaction: false };