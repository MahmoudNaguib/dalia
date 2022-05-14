const BaseModel=require('./BaseModel');
const bcrypt = require('bcrypt');

class UserModel extends BaseModel {
    static tableName = 'users';
    async $beforeInsert() {
        await super.$beforeInsert();
        if(this.hasOwnProperty('password')){
            this.password= bcrypt.hashSync(this.password, process.env.HASH_SALT);
        }
    }
    static modifiers = {
        active(query) {
            query.where('is_active', 1);
        }
    };
    async $beforeUpdate() {
        await super.$beforeUpdate();
        if(this.hasOwnProperty('password')){
            this.password= bcrypt.hashSync(this.password, process.env.HASH_SALT);
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name','email','mobile','password'],
            properties: {
                name: { type: 'string', minLength: 5, maxLength: 255 },
                email: { type: 'string', minLength: 5, maxLength: 255 },
                mobile: { type: 'string', minLength: 5, maxLength: 255 },
                password: { type: 'string', minLength: 5, maxLength: 255 },
            }
        };
    }
}
module.exports =UserModel;