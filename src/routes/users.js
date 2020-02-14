const router = require ('express').Router();

//ingreso a ala app
router.get('/users/singnin', (req, res) => {
    res.render('users/singnin')
   
})
//autenticacion
router.get('/users/singnup', (req, res) => {
    res.send('users/singnup')
   
})
module.exports= router