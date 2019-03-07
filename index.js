const countries = require('i18n-iso-countries')

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
          30 + 12 * y - 90
        ]
      },
      properties: {
        iso3cd: codes[i]
      }
    }
    geojson.features.push(f)
  }
}

console.log(JSON.stringify(geojson, null, 2))
