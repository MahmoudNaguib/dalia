const {faker} = require('@faker-js/faker');
const {getRandomInteger} = require('../../Helpers/Helpers');

const factory = {
    generate: (data={}) => {
        let row = {};
        row.user_id = (data.user_id!=undefined)?data.user_id:1;
        row.title = faker.lorem.sentence(getRandomInteger(5, 20));
        row.mobile=faker.phone.phoneNumber();
        row.email=faker.internet.exampleEmail();
        return row;
    }
}
module.exports = factory;