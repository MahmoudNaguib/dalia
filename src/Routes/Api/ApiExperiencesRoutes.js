const express = require('express');
const router = express.Router();
const Controller = require('../../Controllers/Api/ApiExperiencesController');

router.get('/', Controller.index);
router.get('/:id', Controller.show);
router.post('/', Controller.store);
router.delete('/:id', Controller.delete);
router.put('/:id', Controller.update);
module.exports = router;