const express = require('express');
const router = express.Router();
const Controller = require('../../Controllers/Api/ApiAuthController');

router.post('/login', Controller.login);
router.post('/register', Controller.store);

module.exports = router;