const WeatherDisplay = (props) => {
    const { current, forecast, location, perfectTemp } = props

        let today = new Date()
        let now = today.getHours()

        const verbalize = (obj) => {
            let arr = []

            if (obj.maxtemp_f) {
                if (obj.maxtemp_f < perfectTemp - 45) {
                    arr.push("Arctic")
                }
                if (obj.maxtemp_f >= perfectTemp - 45 && obj.maxtemp_f < perfectTemp - 35) {
                    arr.push("Freezing")
                }
                if (obj.maxtemp_f >= perfectTemp - 35 && obj.maxtemp_f < perfectTemp - 25) {
                    arr.push("Really cold")
                }
                if (obj.maxtemp_f >= perfectTemp - 25 && obj.maxtemp_f < perfectTemp - 15) {
                    arr.push("Cold")
                }
                if (obj.maxtemp_f >= perfectTemp -15 && obj.maxtemp_f < perfectTemp - 5) {
                    arr.push("Chilly")
                }
                if (obj.maxtemp_f >= perfectTemp - 5 && obj.maxtemp_f < perfectTemp + 5) {
                    arr.push("Nice")
                }
                if (obj.maxtemp_f >= perfectTemp + 5 && obj.maxtemp_f < perfectTemp + 15) {
                    arr.push("Temperate")
                }
                if (obj.maxtemp_f >= perfectTemp + 15 && obj.maxtemp_f < perfectTemp + 25) {
                    arr.push("Hot")
                }
                if (obj.maxtemp_f >= perfectTemp + 25 && obj.maxtemp_f < perfectTemp + 35) {
                    arr.push("Too hot")
                }
                if (obj.maxtemp_f >= perfectTemp + 35) {
                    arr.push("Scorching")
                }
            }
            if (!obj.maxtemp_f) {
                if (obj.feelslike_f < perfectTemp - 45) {
                    arr.push("Arctic")
                }
                if (obj.feelslike_f >= perfectTemp - 45 && obj.feelslike_f < perfectTemp - 35) {
                    arr.push("Freezing")
                }
                if (obj.feelslike_f >= perfectTemp - 35 && obj.feelslike_f < perfectTemp - 25) {
                    arr.push("Really cold")
                }
                if (obj.feelslike_f >= perfectTemp - 25 && obj.feelslike_f < perfectTemp - 15) {
                    arr.push("Cold")
                }
                if (obj.feelslike_f >= perfectTemp -15 && obj.feelslike_f < perfectTemp - 5) {
                    arr.push("Chilly")
                }
                if (obj.feelslike_f >= perfectTemp - 5 && obj.feelslike_f < perfectTemp + 5) {
                    arr.push("Nice")
                }
                if (obj.feelslike_f >= perfectTemp + 5 && obj.feelslike_f < perfectTemp + 15) {
                    arr.push("Temperate")
                }
                if (obj.feelslike_f >= perfectTemp + 15 && obj.feelslike_f < perfectTemp + 25) {
                    arr.push("Hot")
                }
                if (obj.feelslike_f >= perfectTemp + 25 && obj.feelslike_f < perfectTemp + 35) {
                    arr.push("Too hot")
                }
                if (obj.feelslike_f >= perfectTemp + 35) {
                    arr.push("Scorching")
                }
            }
            if (obj.cloud) {
                if (obj.cloud >= 30 && obj.cloud < 60) {
                    arr.push("partly cloudy")
                }
                if (obj.cloud >= 60 && obj.cloud < 90) {
                    arr.push("cloudy")
                }
                if (obj.cloud >= 90) {
                    arr.push("overcast")
                }
            }
            if (obj.wind_mph) {
                if (obj.wind_mph >= 10 && obj.wind_mph < 15) {
                    arr.push("breezy")
                }
                if (obj.wind_mph >= 15 && obj.wind_mph < 22) {
                    arr.push("windy")
                }
                if (obj.wind_mph >= 22 && obj.wind_mph < 30) {
                    arr.push("gusty")
                }
                if (obj.wind_mph >= 30) {
                    arr.push("tornado-like")
                }
            }
            if (obj.dewpoint_f) {
                if (obj.dewpoint_f >= 60 && obj.dewpoint_f < 65) {
                    arr.push("humid")
                }
                if (obj.dewpoint_f >= 65 && obj.dewpoint_f < 70) {
                    arr.push("muggy")
                }
                if (obj.dewpoint_f >= 70) {
                    arr.push("super-humid")
                }
            }
            if (obj.daily_chance_of_rain > 0) {
                if (obj.daily_chance_of_rain <= 20) {
                    arr.push("probably not gonna rain")
                }
                if (obj.daily_chance_of_rain > 20 && obj.daily_chance_of_rain <= 40) {
                    arr.push("maybe a little misty")
                }
                if (obj.daily_chance_of_rain > 40 && obj.daily_chance_of_rain <= 60) {
                    arr.push("some sprinkles")
                }
                if (obj.daily_chance_of_rain > 60) {
                    arr.push("rainy")
                }
            }
            if (obj.chance_of_rain > 0) {
                if (obj.chance_of_rain <= 20) {
                    arr.push("probably not gonna rain")
                }
                if (obj.chance_of_rain > 20 && obj.chance_of_rain <= 40) {
                    arr.push("maybe a little misty")
                }
                if (obj.chance_of_rain > 40 && obj.chance_of_rain <= 60) {
                    arr.push("some sprinkles")
                }
                if (obj.chance_of_rain > 60) {
                    arr.push("rainy")
                }
            }
            if (obj.daily_chance_of_snow > 0) {
                if (obj.daily_chance_of_snow <= 20) {
                    arr.push("probably not gonna snow")
                }
                if (obj.daily_chance_of_snow > 20 && obj.daily_chance_of_snow <= 40) {
                    arr.push("slightly sleeting")
                }
                if (obj.daily_chance_of_snow > 40 && obj.daily_chance_of_snow <= 60) {
                    arr.push("somewhat snowy")
                }
                if (obj.daily_chance_of_snow > 60) {
                    arr.push("snowy")
                }
            }
            if (obj.chance_of_snow > 0) {
                if (obj.chance_of_snow <= 20) {
                    arr.push("probably not gonna snow")
                }
                if (obj.chance_of_snow > 20 && obj.chance_of_snow <= 40) {
                    arr.push("slighly sleeting")
                }
                if (obj.chance_of_snow > 40 && obj.chance_of_snow <= 60) {
                    arr.push("somewhat snowy")
                }
                if (obj.chance_of_snow > 60) {
                    arr.push("snowy")
                }
            }
            
            if (arr.length > 2) {
                arr.push("and " + arr.pop())
                return arr.join(", ")
            } else return arr.join(" and ")
        }
    
    return(
        <>
        <h1>Weather for {location.name}, {location.region}</h1>
        <h3>Today: {verbalize(forecast.forecastday[0].day)}</h3>
        <h3>Now: {verbalize(forecast.forecastday[0].hour[now])}</h3>
        <h3>Soon: {!forecast.forecastday[0].hour[now + 1]
                    ? verbalize(forecast.forecastday[1].hour[0])
                    : verbalize(forecast.forecastday[0].hour[now + 1])
        }</h3>
        <h3>Later: {!forecast.forecastday[0].hour[now + 4]
                    ? verbalize(forecast.forecastday[1].hour[now - 20])
                    : verbalize(forecast.forecastday[0].hour[now + 4])
        }</h3>
        </>
    )
}

export default WeatherDisplay