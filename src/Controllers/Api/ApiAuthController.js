const Model = require('../../Models/UserModel');
const Resource = require('../../Resources/UserResource');
const bcrypt = require('bcrypt');
const {transformValidationErrors} = require("../../Helpers/Helpers");
module.exports = {
    login: async (req, res, next) => {
        if(!req.body.email || !req.body.password){
            let errors={};
            if(!req.body.email){
                errors['email']="required field";
            }
            if(!req.body.password){
                errors['password']="required field";
            }
            return res.status(422).send({message: 'Validation error', errors});
        }
        let row = await Model.query().modify('active').where('email',req.body.email).first();
        if(!row){
            return res.status(403).send({message: 'There is no account with this email'});
        }
        if(! await bcrypt.compare(req.body.password, row.password)){
            return res.status(403).send({message: 'Invalid password'});
        }
        return res.send({data: new Resource().toJson(row)});
    },
    store: async (req, res) => {
        try {
            let row = await Model.query().insert(req.body);
            if (row) {
                return res.status(201).send({message: 'Created successfully', data: new Resource().toJson(row)});
            }
        } catch (err) {
            return res.status(422).send({message: 'Validation error', errors: transformValidationErrors(err.data)});
        }
        return res.send('Failed to save');
    },
}
