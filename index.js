const countries = require('i18n-iso-countries')
const fs = require('fs')

let geojson = { type: 'FeatureCollection', features: [] }
const codes = Object.keys(countries.getAlpha3Codes())

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 25; x++) {
    const i = y * 25 + x 
    let f = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          30 + 12 * x - 180,
          90 - 30 - 12 * y
        ]
      },
      properties: {
        iso3cd: codes[i],
        name: countries.getName(codes[i], 'en')
      }
    }
    geojson.features.push(f)
  }
}

fs.writeFile(
  'scaffold.geojson',
  JSON.stringify(geojson, null, 2),
  (err) => {
    if (err) throw err
    console.log('scaffold.geojson written')
  }
)
