const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//inicializacion
const app = express();
require('./database')

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultlayout:'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

//midlewares
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('method'))
app.use(session({
    secret: 'clave',
    resave: true,
    saveUninitialized: true

}))


// variables globales

// rutas
app.use(require('./routes/index'))
app.use(require('./routes/notes'))
app.use(require('./routes/users'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//servidor
app.listen(app.get('port'), ()=> {
    console.log('server on port', app.get('port'))
})