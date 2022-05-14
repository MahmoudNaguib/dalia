exports.up = function (knex) {
    return knex.schema.createTable('contacts', table => {
        table.bigIncrements('id').index();
        table.bigint('user_id').nullable().index();
        table.string('title').nullable();
        table.string('mobile').nullable();
        table.string('email').nullable();
        table.timestamps(true,true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('contacts');
};
exports.config = { transaction: false };