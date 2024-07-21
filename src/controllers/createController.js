const connection = require('../config/database');
const { changeOneUser } = require('../services/CRUDService');

const getCreateUser = (req, res) => {
    return res.render('createUser.ejs');
};

const postCreateUser = async (req, res) => {
    let {email, name} = req.body;
    const [results, fields] = await connection.query(`INSERT INTO Users (EMAIL, NAME) VALUES (?, ?)`, [email, name]);

    return res.render('createUser.ejs');
};

module.exports = {
    getCreateUser,
    postCreateUser
};