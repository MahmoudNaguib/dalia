const factory = require('../Factories/skill');
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('skills').del();
    await knex.raw('ALTER TABLE `skills` AUTO_INCREMENT = 1');
    let rows = [];
    let users=await knex('users');
    for(let i=0; i<users.length; i++){
        for(let k=0; k<2; k++){
            let row=factory.generate({user_id:users[i].id});
            rows.push(row);
        }
    }
    await knex('skills').insert(rows);
};
