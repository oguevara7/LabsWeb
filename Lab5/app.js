
const lab4 = require('./lab5.js')

const nombreCiudad = 'Monterrey, N.L., México'

lab4.ciudad(nombreCiudad, function(error, response) {
  if(error) {
    console.log(error)
  } else {
    console.log(response.name)
    lab4.tiempo(response.lat, response.long, function(error, response) {
      if(error) {
        console.log(error)
      } else {
        console.log(response)
      }
    })
  }
})
