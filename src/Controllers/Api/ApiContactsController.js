const Model = require('../../Models/ContactModel');
const Resource = require('../../Resources/ContactResource');
const {transformValidationErrors} = require("../../Helpers/Helpers");
module.exports = {
    index: async (req, res, next) => {
        let rows = Model.query().where('user_id', req.user.id);
        return res.send(await new Resource().paginate(rows, (req.query.page) ? req.query.page : 1));
    },
    show: async (req, res) => {
        let row = await Model.query().where('user_id', req.user.id).findById(req.params.id);
        if (!row) {
            return res.status(404).send({message: 'Record not found'});
        }
        return res.send({data: new Resource().toJson(row)});
    },
    store: async (req, res) => {
        req.body.user_id = req.user.id;
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
    update: async (req, res) => {
        req.body.user_id = req.user.id;
        let row = await Model.query().where('user_id', req.user.id).findById(req.params.id);
        if (!row) {
            return res.status(404).send({message: 'Record not found'});
        }
        try {
            if (await Model.query().where({id: req.params.id}).update(req.body)) {
                row = await Model.query().findById(req.params.id);
                return res.status(200).send({message: 'Updated successfully', data: new Resource().toJson(row)});
            }
        } catch (err) {
            return res.status(422).send({message: 'Validation error', errors: transformValidationErrors(err.data)});
        }
        return res.send('Failed to save');
    },
    delete: async (req, res) => {
        let row = await Model.query().where('user_id', req.user.id).findById(req.params.id);
        if (!row) {
            return res.status(404).send({message: 'Record not found'});
        }
        if (await Model.query().where({id: req.params.id}).delete()) {
            return res.status(200).send({message: 'Delete successfully'});
        }
        return res.send('Failed to save');
    },
}
