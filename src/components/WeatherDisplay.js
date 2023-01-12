const WeatherDisplay = (props) => {
    const { current, forecast, location } = props

        let today = new Date()
        let now = today.getHours()
        let perfectTemp = 70

        const verbalize = (obj) => {
            let arr = []
            if (obj.feelslike_f) {
                if (obj.feelslike_f < perfectTemp - 45) {
                    arr.push("Arctic")
                }
                if (obj.feelslike_f >= perfectTemp - 45 && obj.feelslike_f <= perfectTemp - 35) {
                    arr.push("Freezing")
                }
                if (obj.feelslike_f >= perfectTemp - 35 && obj.feelslike_f <= perfectTemp - 25) {
                    arr.push("Really cold")
                }
                if (obj.feelslike_f >= perfectTemp - 25 && obj.feelslike_f <= perfectTemp - 15) {
                    arr.push("Cold")
                }
                if (obj.feelslike_f >= perfectTemp -15 && obj.feelslike_f <= perfectTemp - 5) {
                    arr.push("Chilly")
                }
                if (obj.feelslike_f >= perfectTemp - 5 && obj.feelslike_f <= perfectTemp + 5) {
                    arr.push("Nice")
                }
                if (obj.feelslike_f >= perfectTemp + 5 && obj.feelslike_f <= perfectTemp + 15) {
                    arr.push("Temperate")
                }
                if (obj.feelslike_f >= perfectTemp + 15 && obj.feelslike_f <= perfectTemp + 25) {
                    arr.push("Hot")
                }
                if (obj.feelslike_f >= perfectTemp + 25 && obj.feelslike_f <= perfectTemp + 35) {
                    arr.push("Too hot")
                }
                if (obj.feelslike_f > perfectTemp + 35) {
                    arr.push("Scorching")
                }
            }
            return arr.join(",")
        }
    
    return(
        <>
        <h3>Today: {forecast.forecastday[0].day.maxtemp_f}</h3>
        <h3>Now: {verbalize(current)}</h3>
        <h3>Later: {!forecast.forecastday[0].hour[now + 4]
                    ? forecast.forecastday[1].hour[now - 20].feelslike_f
                    : forecast.forecastday[0].hour[now + 4].feelslike_f
        }</h3>
        </>
    )
}

export default WeatherDisplay