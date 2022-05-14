const {faker} = require('@faker-js/faker');
const {getRandomInteger} = require('../../Helpers/Helpers');

const factory = {
    generate: (data={}) => {
        let row = {};
        row.user_id = (data.user_id!=undefined)?data.user_id:1;
        row.job_title = faker.lorem.sentence(getRandomInteger(5, 20));
        row.company_name = faker.lorem.sentence(getRandomInteger(5, 20));
        row.company_website = 'https://'+faker.internet.domainName();
        row.start_date = getRandomInteger(2000,2010)+'-'+getRandomInteger(1,12)+'-'+getRandomInteger(1,28);
        row.end_date = getRandomInteger(2011,2022)+'-'+getRandomInteger(1,12)+'-'+getRandomInteger(1,28);
        row.content = faker.lorem.sentence(getRandomInteger(5, 20));
        return row;
    }
}
module.exports = factory;