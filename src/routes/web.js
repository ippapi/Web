const express = require('express');
const {getHomePage, getUsersPage, postCreateUser} = require('../controllers/homeController');

const router = express.Router();

router.get('/', getHomePage);
  
router.get('/users', getUsersPage);

router.post('/createUser', postCreateUser);

module.exports = router;