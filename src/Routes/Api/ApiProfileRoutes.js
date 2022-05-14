const express = require('express');
const router = express.Router();
const Controller = require('../../Controllers/Api/ApiProfileController');

router.get('/', Controller.index);
router.put('/', Controller.update);

module.exports = router;