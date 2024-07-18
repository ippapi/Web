const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('homepage.ejs');
};

const getUsersPage = (req,res) => {
    connection.query('SELECT * FROM Users', function(err, results, fields){
        res.send(JSON.stringify(results));
    });
};

const postCreateUser = (req, res) => {
    let {email, name} = req.body;

    console.log({email, name});

    connection.query(`INSERT INTO Users (EMAIL, NAME) VALUES (?, ?)`, [email, name], function(err, result, fields){
        console.log(result);
    });
    
    res.send('Creating a new user');
};

module.exports = {
    getHomePage,
    getUsersPage,
    postCreateUser
};