exports.up = function (knex) {
    return knex.schema.createTable('certificates', table => {
        table.bigIncrements('id').index();
        table.bigint('user_id').nullable().index();
        table.string('title').nullable();
        table.string('organization_name').nullable();
        table.date('issue_date').nullable();
        table.timestamps(true,true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('certificates');
};
exports.config = { transaction: false };