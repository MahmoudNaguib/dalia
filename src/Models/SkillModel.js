const {Model} = require('objection');
const BaseModel=require('./BaseModel');

class SkillModel extends BaseModel {
    static tableName = 'skills';
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['user_id','title','years_of_experience','proficiency'],
            properties: {
                user_id: { type: 'integer'},
                title: { type: 'string', minLength: 5, maxLength: 150},
            }
        };
    }
    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./UserModel'),
            join: {
                from: 'skills.user_id',
                to: 'users.id'
            }
        }
    };
}
module.exports =SkillModel;