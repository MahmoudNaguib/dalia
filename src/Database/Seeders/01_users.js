const bcrypt = require('bcrypt');
const {getRandomInteger} = require("../../Helpers/Helpers");
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex.raw('ALTER TABLE `users` AUTO_INCREMENT = 1');
    await knex('users').insert([
        {
            name: 'user1',
            email: 'user1@dalia.com',
            mobile: '+201228277201',
            password: bcrypt.hashSync('dalia@12345', process.env.HASH_SALT),
            token: bcrypt.hashSync('user1', process.env.HASH_SALT) + bcrypt.hashSync(Math.random().toString(), process.env.HASH_SALT),
            is_active: 1,
            birth_date:getRandomInteger(1900,2010)+'-'+getRandomInteger(1,12)+'-'+getRandomInteger(1,28),
            gender: 'm',
            marital_status:'single',
            military_status:'not_applicable',
            bio:'Bio information '+getRandomInteger(1,1000)
        },
        {
            name: 'user2',
            email: 'user2@dalia.com',
            mobile: '+201228277202',
            password: bcrypt.hashSync('dalia@12345', process.env.HASH_SALT),
            token: bcrypt.hashSync('user2', process.env.HASH_SALT) + bcrypt.hashSync(Math.random().toString(), process.env.HASH_SALT),
            is_active: 1,
            birth_date:getRandomInteger(1900,2010)+'-'+getRandomInteger(1,12)+'-'+getRandomInteger(1,28),
            gender: 'm',
            marital_status:'single',
            military_status:'not_applicable',
            bio:'Bio information '+getRandomInteger(1,1000)
        },
        {
            name: 'user3',
            email: 'user3@dalia.com',
            mobile: '+201228277203',
            password: bcrypt.hashSync('dalia@12345', process.env.HASH_SALT),
            token: bcrypt.hashSync('user3', process.env.HASH_SALT) + bcrypt.hashSync(Math.random().toString(), process.env.HASH_SALT),
            is_active: 1,
            birth_date:getRandomInteger(1900,2010)+'-'+getRandomInteger(1,12)+'-'+getRandomInteger(1,28),
            gender: 'm',
            marital_status:'single',
            military_status:'not_applicable',
            bio:'Bio information '+getRandomInteger(1,1000)
        },
    ]);
};
