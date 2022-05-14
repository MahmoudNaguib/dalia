const {getDate} = require('../Helpers/Helpers');
const BaseResource=require('./BaseResource');

module.exports=class UserResource extends BaseResource{
    toJson(row) {
        if(row){
            return {
                type: 'users',
                id: parseInt(row.id.toString()),
                attributes: {
                    name:row.name,
                    email: row.email,
                    mobile:row.mobile,
                    gender:row.gender,
                    birth_date:row.birth_date,
                    marital_status:row.marital_status,
                    military_status:row.military_status,
                    bio:row.bio,
                    last_logged_in:row.last_logged_in,
                    token: row.token,
                    created_at: getDate(row.created_at),
                    updated_at: getDate(row.updated_at),
                }
            };
        }
    }
}