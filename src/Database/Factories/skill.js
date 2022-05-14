const {faker} = require('@faker-js/faker');
const {getRandomInteger} = require('../../Helpers/Helpers');

const factory = {
    generate: (data={}) => {
        let row = {};
        row.user_id = (data.user_id!=undefined)?data.user_id:1;
        row.title = faker.lorem.sentence(getRandomInteger(2,5));
        row.years_of_experience = getRandomInteger(1,20);
        row.proficiency = getRandomInteger(1,5);
        return row;
    }
}
module.exports = factory;