
const express = require('express')
const lab6 = require('./lab6.js')

const app = express()

//const nombreCiudad = 'Monterrey, N.L., México'

app.get('/weather', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(!req.query.search) {
    return res.send({
      error: 'Incluye una ciudad a buscar.'
    })
  }
  lab6.ciudad(req.query.search, function(error, response) {
    if(error) {
      return res.send({
        error: error
      })
    }
    const city = response
    lab6.tiempo(response.lat, response.long, function(error, response) {
      if(error) {
        return res.send({
          error: error
        })
      }
      const clima = `${response.dia}. Actualmente está a ${response.clima}°C. Hay ${response.precipitacion}% de probabilidad de lluvia.`
      return res.send({
        location: city.name,
        weather: clima
      })
    })
  })
})

app.listen('3000', function() {
  console.log('Ya se armó, perro.')
})
