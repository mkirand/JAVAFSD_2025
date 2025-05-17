import { useReducer } from "react";

const ActionTypes = {
    SET_CITY: 'SET_CITY',
    FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR: 'FETCH_WEATHER_ERROR'
}

//Reducer function:
const weatherReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_CITY:
            return { ...state, city: action.payload };
        case ActionTypes.FETCH_WEATHER_SUCCESS:
            return { ...state, weatherData: action.payload, error: null };
        case ActionTypes.FETCH_WEATHER_ERROR:
            return { ...state, weatherData: null, error: action.payload }
        default:
            return state;
    }
}

const Weather = () => {

    const [state, dispatch] = useReducer(weatherReducer, {
        city: '',
        weatherData: null,
        error: null
    })

    const apiKey = "ed2c7a1f4c8de0a9a84495bb638cd6ad";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather";

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`${apiURL}?q=${state.city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            // console.log(data)
            if (response.ok) {
                console.log(data)
                dispatch({ type: ActionTypes.FETCH_WEATHER_SUCCESS, payload: data })
            } else {
                dispatch({ type: ActionTypes.FETCH_WEATHER_ERROR, payload: data.message })
            }
        } catch {
            console.log("Error in fetching data", error);
            dispatch({ type: ActionTypes.FETCH_WEATHER_ERROR, payload: 'Something went wrong!' })
        }
    }

    const handleSubmit = (e) => {
        console.log(state.city)
        e.preventDefault();
        if (state.city.trim()) {
            fetchWeatherData()
        } else {
            dispatch({ type: ActionTypes.FETCH_WEATHER_ERROR, payload: "Please enter a city name!" })
        }

    }

    const handleCityChange = (e) => {
        dispatch({ type: ActionTypes.SET_CITY, payload: e.target.value });
    }

    return (
        <div className="container">
            <h2 className="mb-4 text-center">Weather Application</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: "30rem", margin: "10px auto" }}>
                <div className="row justify-content-center">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter City"
                        value={state.city}
                        onChange={handleCityChange} />
                    <button type="submit" className="btn btn-primary mb-2">Get Weather</button>
                </div>
            </form>
            {state.error && <div className="alert alert-danger">{state.error}</div>}
            {state.weatherData && <div className="card" style={{ maxWidth: "18rem", margin: "10px auto" }}>
                <img className="card-img-top" src="public/weather.png" style={{ maxWidth: "10rem", margin: "0px auto" }} />
                <div className="card-body">
                    <h5 className="card-title mb-2">{state.weatherData.name}, {state.weatherData.sys.country}</h5>
                    <p className="card-text text-left">
                        <span class="badge text-bg-warning mt-1">Temp: {(state.weatherData.main.temp).toFixed(2)} C</span>
                        <br />
                        <span class="badge text-bg-warning mt-1">Feels Like: {(state.weatherData.main.feels_like).toFixed(2)} C</span>
                        <br />
                        <span class="badge text-bg-warning mt-1">Humidity: {(state.weatherData.main.humidity)}</span>
                        <br />
                        <span class="badge text-bg-warning mt-1">Weather: {(state.weatherData.weather[0].description.toUpperCase())}</span>

                    </p>
                </div>
            </div>
            }
        </div>
    )
}
export default Weather;