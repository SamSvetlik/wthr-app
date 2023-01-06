const WeatherDisplay = (props) => {
    const { current, forecast, location } = props

        let today = new Date()
        let now = today.getHours()
    
    return(
        <>
        <h3>Today: {forecast.forecastday[0].day.maxtemp_f}</h3>
        <h3>Now: {forecast.forecastday[0].hour[now].feelslike_f}</h3>
        <h3>Later: {forecast.forecastday[0].hour[now + 4].feelslike_f}</h3>
        </>
    )
}

export default WeatherDisplay