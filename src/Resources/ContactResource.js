const {getDate} = require('../Helpers/Helpers');
const BaseResource=require('./BaseResource');

const TinyUserResource=require('./TinyResources/TinyUserResource');
module.exports=class ContactResource extends BaseResource{
    toJson(row) {
        if(row){
            return {
                type: 'contacts',
                id: parseInt(row.id.toString()),
                attributes: {
                    user_id:row.user_id,
                    title: row.title,
                    mobile:row.mobile,
                    email:row.email,
                    created_at: getDate(row.created_at),
                    updated_at: getDate(row.updated_at),
                },
            };
        }
    }
}