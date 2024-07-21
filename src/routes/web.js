const express = require('express');
const {getHomePage, getEditPage, postUserInfo} = require('../controllers/homeController');
const {getCreateUser, postCreateUser} = require('../controllers/createController');

const router = express.Router();

router.get('/', getHomePage);
  
router.get('/editUser/:id', getEditPage);

router.get('/createUser', getCreateUser);

router.post('/postUser', postCreateUser);

router.post('/postInfo', postUserInfo);

module.exports = router;