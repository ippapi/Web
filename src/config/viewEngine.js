const path = require('path');

//config template engine:
const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
};

module.exports = configViewEngine;