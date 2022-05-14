const {Model} = require('objection');
const BaseModel=require('./BaseModel');

class ExperienceModel extends BaseModel {
    static tableName = 'experiences';
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['user_id','job_title','company_name','company_website','start_date','end_date'],
            properties: {
                user_id: { type: 'integer'},
                job_title: { type: 'string', minLength: 5, maxLength: 150},
                company_name: { type: 'string', minLength: 5, maxLength: 150},
                company_website: { type: 'string', minLength: 5, maxLength: 150},
            }
        };
    }
    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./UserModel'),
            join: {
                from: 'experiences.user_id',
                to: 'users.id'
            }
        }
    };
}
module.exports =ExperienceModel;