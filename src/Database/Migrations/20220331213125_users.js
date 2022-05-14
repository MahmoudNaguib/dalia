exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.bigIncrements('id').index();
        table.string('name').nullable();
        table.string('email').nullable().index();
        table.string('mobile').nullable().index();
        table.string('password').nullable();
        table.string('token').nullable();
        table.string('confirm_token').nullable();
        table.string('password_token').nullable();
        table.enum('gender', ['m', 'f']).nullable().defaultTo('m'); // m:male, f:female
        table.date('birth_date').nullable();
        table.enum('marital_status', ['single', 'married']).nullable().defaultTo('single'); // s:single, m:married
        table.enum('military_status', ['not_applicable', 'exempted','completed','postponed']).nullable();
        table.string('bio').nullable();
        table.timestamp('last_logged_in').nullable();
        table.tinyint('is_active').index().defaultTo(1);
        table.timestamps(true,true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
exports.config = { transaction: false };