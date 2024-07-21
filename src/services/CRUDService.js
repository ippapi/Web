const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query("SELECT * FROM Users");
    
    return results;
};

const getOneUser = async (id) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users WHERE ID=?`, [id]);

    return results;
};

const changeOneUser = async (id, email, name) => {
    let [results, fields] = await connection.query(`UPDATE Users SET EMAIL=?, NAME=? WHERE ID=?`, [email, name, id]);

    return results;
};

module.exports = {
    getAllUsers,
    getOneUser,
    changeOneUser
};
