const WeatherDisplay = (props) => {
    const { current, forecast, location } = props
    return(
        <>
        <h3>Today: {forecast.forecastday[0].day.maxtemp_f}</h3>
        <h3>Now: {forecast.forecastday[0].hour[0].feelslike_f}</h3>
        <h3>Later: {forecast.forecastday[0].hour[4].feelslike_f}</h3>
        </>
    )
}

export default WeatherDisplay