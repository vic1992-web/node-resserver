require('./config/config')
const express = require('express')
const app = express();
const bodyPaerser = require('body-parser');




app.use(bodyPaerser.urlencoded({ extended: false }));

app.use(bodyPaerser.json());

app.get('/usuario', (req, res) => {
  res.json('get Usuario');
});

app.post('/usuario', (req, res) => {

  let body = req.body;
  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es obligatorio'
    })
  } else {
    res.json({
      persona: body
    });
  }

});
app.put('/usuario/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id
  });
});
app.delete('/usuario', (req, res) => {
  res.json('delete Usuario');
});




app.listen(process.env.PORT, () => {

  console.log(`Server on port `, process.env.PORT);

});

//Viene la clase #8