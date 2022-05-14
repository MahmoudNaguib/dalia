const {getDate} = require('../Helpers/Helpers');
const BaseResource=require('./BaseResource');

const TinyUserResource=require('./TinyResources/TinyUserResource');
module.exports=class CertificateResource extends BaseResource{
    toJson(row) {
        if(row){
            return {
                type: 'certificates',
                id: parseInt(row.id.toString()),
                attributes: {
                    user_id:row.user_id,
                    title: row.title,
                    organization_name:row.organization_name,
                    issue_date:row.issue_date,
                    created_at: getDate(row.created_at),
                    updated_at: getDate(row.updated_at),
                },
            };
        }
    }
}