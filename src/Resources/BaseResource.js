const {getDate} = require('../Helpers/Helpers');

class BaseResource {
    toArray(rows){
        let output={};
        output.data=[];
        for(let i=0; i<rows.length; i++){
            output['data'].push(this.toJson(rows[i]));
        }
        return output;
    }
    pairs(rows,key,value){
        let output={};
        output.data={};
        for(let i=0; i<rows.length; i++){
            output.data[rows[i][key]]=rows[i][value];
        }
        return output;
    }
    async paginate(query,page=1,limit=process.env.PAGE_LIMIT){
        let rows=await query.page(parseInt(page)-1,limit);
        let output={};
        output.current_page=parseInt(page);
        output.per_page=parseInt(limit);
        output.page_total=rows.results.length;
        output.from=(output.current_page - 1) * output.per_page + 1;
        output.to = output.from + output.page_total - 1;
        output.last_page = Math.ceil(rows.total / output.page_total);
        output.total=rows.total;
        output.data=[];
        for(let i=0; i<rows.results.length; i++){
            output.data.push(this.toJson(rows.results[i]));
        }
        return output;
    }
}

module.exports = BaseResource
