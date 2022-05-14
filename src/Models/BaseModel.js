const {Model} = require('objection');
const knex = require('../Database/knex');
Model.knex(knex);


class BaseModel extends Model {
    static modifiers = {
        active(query) {
            query.where('is_active', 1);
        }
    };

}

module.exports = BaseModel;