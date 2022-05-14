const {Model} = require('objection');
const BaseModel=require('./BaseModel');

class CertificateModel extends BaseModel {
    static tableName = 'certificates';
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['user_id','title','organization_name','issue_date'],
            properties: {
                user_id: { type: 'integer'},
                title: { type: 'string', minLength: 5, maxLength: 150},
                organization_name: { type: 'string', minLength: 5, maxLength: 150},
            }
        };
    }
    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./UserModel'),
            join: {
                from: 'certificates.user_id',
                to: 'users.id'
            }
        }
    };
}
module.exports =CertificateModel;