exports.up = function (knex) {
    return knex.schema.createTable('experiences', table => {
        table.bigIncrements('id').index();
        table.bigint('user_id').nullable().index();
        table.string('job_title').nullable();
        table.string('company_name').nullable();
        table.string('company_website').nullable();
        table.date('start_date').nullable();
        table.date('end_date').nullable();
        table.text('content').nullable();
        table.timestamps(true,true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('experiences');
};
exports.config = { transaction: false };