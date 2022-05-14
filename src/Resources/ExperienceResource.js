const {getDate} = require('../Helpers/Helpers');
const BaseResource=require('./BaseResource');

const TinyUserResource=require('./TinyResources/TinyUserResource');
module.exports=class ExperienceResource extends BaseResource{
    toJson(row) {
        if(row){
            return {
                type: 'experiences',
                id: parseInt(row.id.toString()),
                attributes: {
                    user_id:row.user_id,
                    job_title: row.job_title,
                    company_name:row.company_name,
                    company_website:row.company_website,
                    start_date:row.start_date,
                    end_date:row.end_date,
                    created_at: getDate(row.created_at),
                    updated_at: getDate(row.updated_at),
                },
            };
        }
    }
}