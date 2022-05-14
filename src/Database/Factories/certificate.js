const {faker} = require('@faker-js/faker');
const {getRandomInteger} = require('../../Helpers/Helpers');

const factory = {
    generate: (data={}) => {
        let row = {};
        row.user_id = (data.user_id!=undefined)?data.user_id:1;
        row.title = faker.lorem.sentence(getRandomInteger(5, 20));
        row.organization_name = faker.lorem.sentence(getRandomInteger(5, 20));
        row.issue_date = getRandomInteger(2000,2010)+'-'+getRandomInteger(1,12)+'-'+getRandomInteger(1,28);
        return row;
    }
}
module.exports = factory;