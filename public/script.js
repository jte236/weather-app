const searchElement = document.querySelector('[data-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if (place == null) return
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()
    fetch('/weather', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        setWeatherData(data, place.formatted_address)
    })
})

const locationElement = document.querySelector('[data-location]')
const statusDay1 = document.querySelector('[data-status1]')
const statusDay2= document.querySelector('[data-status2]')
const statusDay3 = document.querySelector('[data-status3]')
const statusDay4 = document.querySelector('[data-status4]')
const statusDay5 = document.querySelector('[data-status5]')
const day1 = document.querySelector('[data-day1]')
const day2 = document.querySelector('[data-day2]')
const day3 = document.querySelector('[data-day3]')
const day4 = document.querySelector('[data-day4]')
const day5 = document.querySelector('[data-day5]')
const weekday1 = document.querySelector('[data-dow1]')
const weekday2 = document.querySelector('[data-dow2]')
const weekday3 = document.querySelector('[data-dow3]')
const weekday4 = document.querySelector('[data-dow4]')
const weekday5 = document.querySelector('[data-dow5]')
const pop1 = document.querySelector(['data-pop'])
const app_temp1 = document.querySelector(['data-app-temp'])


function setWeatherData(data, place){

    const daysOFTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday','Saturday']

    locationElement.textContent = place

    statusDay1.textContent = data.data[0].weather.description
    statusDay2.textContent = data.data[10].weather.description
    statusDay3.textContent = data.data[20].weather.description
    statusDay4.textContent = data.data[27].weather.description
    statusDay5.textContent = data.data[35].weather.description

    day1.textContent = Math.round(data.data[0].temp)
    day2.textContent = Math.round(data.data[10].temp)
    day3.textContent = Math.round(data.data[20].temp)
    day4.textContent = Math.round(data.data[27].temp)
    day5.textContent = Math.round(data.data[35].temp)

    let isoTOdate1 = new Date(data.data[0].timestamp_utc)
    let dateTOday1 = isoTOdate1.getDay()
    weekday1.textContent = daysOFTheWeek[dateTOday1]

    let isoTOdate2 = new Date(data.data[10].timestamp_utc)
    let dateTOday2 = isoTOdate2.getDay()
    weekday2.textContent = daysOFTheWeek[dateTOday2]

    let isoTOdate3 = new Date(data.data[20].timestamp_utc)
    let dateTOday3 = isoTOdate3.getDay()
    weekday3.textContent = daysOFTheWeek[dateTOday3]

    let isoTOdate4 = new Date(data.data[27].timestamp_utc)
    let dateTOday4 = isoTOdate4.getDay()
    weekday4.textContent = daysOFTheWeek[dateTOday4]

    let isoTOdate5 = new Date(data.data[35].timestamp_utc)
    let dateTOday5 = isoTOdate5.getDay()
    weekday5.textContent = daysOFTheWeek[dateTOday5]
}