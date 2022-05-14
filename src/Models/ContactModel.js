const {Model} = require('objection');
const BaseModel=require('./BaseModel');

class ContactModel extends BaseModel {
    static tableName = 'contacts';
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['user_id','title','mobile','email'],
            properties: {
                user_id: { type: 'integer'},
                title: { type: 'string', minLength: 5, maxLength: 200},
                mobile: { type: 'string', minLength: 5, maxLength: 150},
                email: { type: 'string', minLength: 5, maxLength: 150},
            }
        };
    }
    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./UserModel'),
            join: {
                from: 'contacts.user_id',
                to: 'users.id'
            }
        }
    };
}
module.exports =ContactModel;