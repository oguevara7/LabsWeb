
const credentials = require('./credentials.js')
const request = require('request')

const tiempo = function( latitud, longitud ) {
  const url = 'https://api.darksky.net/forecast/' +
  credentials.DARK_SKY_SECRET_KEY + `/${latitud},${longitud}?units=si&lang=es`
  request({ url: url, json: true }, function(error, response) {
    const data = response.body.currently
    const info = {
      dia: data.summary,
      clima: data.temperature,
      precipitacion: data.precipProbability
    }
    const respuesta = `${info.dia}. Actualmente está a ${info.clima}°C. Hay ${info.precipitacion}% de probabilidad de lluvia.`
    console.log(respuesta)
  })
}

const ciudad = function( nombre ) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${nombre}.json?access_token=` +
  credentials.MAPBOX_TOKEN
  request({ url: url, json: true }, function(error, response) {
    const data = response.body.features[0]
    console.log(data.place_name)
    tiempo(data.center[1], data.center[0])
  })
}

module.exports = {
  tiempo: tiempo,
  ciudad: ciudad
}
