const Model = require('../../Models/UserModel');
const Resource = require('../../Resources/UserResource');
const bcrypt = require('bcrypt');
const {transformValidationErrors} = require("../../Helpers/Helpers");
module.exports = {
    index: async (req, res, next) => {
        return res.send({data: new Resource().toJson(req.user)});
    },
    update: async (req, res) => {
        let row = await Model.query().where('id', req.user.id).findById(req.user.id);
        if (!row) {
            return res.status(404).send({message: 'Record not found'});
        }
        try {
            if (await Model.query().where({id: req.user.id}).update(req.body)) {
                row = await Model.query().findById(req.user.id);
                return res.status(200).send({message: 'Updated successfully', data: new Resource().toJson(row)});
            }
        } catch (err) {
            return res.status(422).send({message: 'Validation error', errors: transformValidationErrors(err.data)});
        }
        return res.send('Failed to save');
    },
}
