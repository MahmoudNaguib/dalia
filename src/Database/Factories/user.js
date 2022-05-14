const { faker } = require('@faker-js/faker');
const bcrypt = require("bcrypt");
const {getRandomInteger} = require('../../Helpers/Helpers');

const factory = {
    generate: () => {
        const name=faker.name.findName();
        let row={};
        row.name=faker.name.findName();
        row.email=faker.internet.exampleEmail();
        row.mobile=faker.phone.phoneNumber();
        row.password=bcrypt.hashSync('blog@12345', process.env.HASH_SALT);
        row.token=bcrypt.hashSync(name, process.env.HASH_SALT)+bcrypt.hashSync(Math.random().toString(), process.env.HASH_SALT);
        row.is_active=1;
        row.birth_date = getRandomInteger(1900,2010)+'-'+getRandomInteger(1,12)+'-'+getRandomInteger(1,28);
        row.gender = 'm';
        row.marital_status='single';
        row.military_status='not_applicable';
        row.bio='Bio information '+getRandomInteger(1,1000);
    }
}
module.exports = factory;





module.exports=row;