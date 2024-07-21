const {getAllUsers, getOneUser, changeOneUser} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
    const results = await getAllUsers();

    return res.render('homepage.ejs', {listUsers: results});
};

const getEditPage = async (req,res) => {
    const results = await getOneUser(req.params.id);

    let userInfo = results && results.length > 0 ? results[0] : {};

    return res.render('editUser.ejs', {userInfo: userInfo});
};

const postUserInfo = async (req, res) => {
    let {id, email, name} = req.body;

    const results = await changeOneUser(id, email, name);

    const result = await getOneUser(id);

    let userInfo = result && result.length > 0 ? result[0] : {};

    return res.render('editUser.ejs', {userInfo: userInfo});
}

module.exports = {
    getHomePage,
    getEditPage,
    postUserInfo
};