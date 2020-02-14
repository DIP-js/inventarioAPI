const router = require ('express').Router();

const Note = require('../models/datos')

router.get('/notes/add', (req, res) =>{
   res.render('notes/newNotes')
})

router.post('/notes/newNotes', async (req, res) => {
   const {producto, tipo, serial, costo, fecha, estado, descripcion} =req.body;
   const errors=[];
   if(!producto){
      errors.push({text: 'porfavor indique producto'})
   }
   if(!tipo){
      errors.push({text: 'porfavor indique tipo de producto'})
   }
   if(!serial){
      errors.push({text: 'porfavor indique el serial del producto'})
   }
   if(!costo){
      errors.push({text: 'porfavor indique el costo del producto'})
   }
   if(!fecha){
      errors.push({text: 'porfavor indique fecha de compra del producto'})
   }
   if(!estado){
      errors.push({text: 'porfavor indique estado del producto'})
   }
   if(errors.length > 0) {
   res.render('notes/newNotes', {
     errors,
     producto,
     tipo,
     serial,
     costo,
     fecha,
     estado

      })
   }else {
      const newNote = new Note({producto, tipo, serial, costo, fecha, estado, descripcion})
      await newNote.save()
          
      res.redirect('/notes')}
})  

router.get('/notes', (req, res) => {
   res.send('notas from databases')
})
module.exports= router