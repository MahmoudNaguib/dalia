const {getDate} = require('../Helpers/Helpers');
const BaseResource=require('./BaseResource');

const TinyUserResource=require('./TinyResources/TinyUserResource');
module.exports=class SkillResource extends BaseResource{
    toJson(row) {
        if(row){
            return {
                type: 'skills',
                id: parseInt(row.id.toString()),
                attributes: {
                    user_id:row.user_id,
                    title: row.title,
                    years_of_experience:row.years_of_experience,
                    proficiency:row.proficiency,
                    created_at: getDate(row.created_at),
                    updated_at: getDate(row.updated_at),
                },
            };
        }
    }
}