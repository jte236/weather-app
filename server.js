if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const WEATHER_BIT_API_KEY = process.env.WEATHER_BIT_API_KEY
const WEATHER_BIT_API_HOST = process.env.WEATHER_BIT_API_HOST

const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
        params: {lat: req.body.latitude, lon: req.body.longitude, units: 'imperial'},
        headers: {
          'x-rapidapi-key': WEATHER_BIT_API_KEY,
          'x-rapidapi-host': WEATHER_BIT_API_HOST
        }
      };
      axios.request(options).then(data => res.json(data.data))
})

app.listen(3000, () => {
    console.log('Server is running')
})