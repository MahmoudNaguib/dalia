const BaseResource=require('../BaseResource');

module.exports=class TinyUserResource extends BaseResource{
    toJson(row) {
        if(row){
            return {
                name: row.name,
            };
        }
    }
}
