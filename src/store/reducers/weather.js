import * as actionTypes from '../actions/actionTypes';

 const initialState = {
    data: [],
    error: false,
    loading: true
};

const setInitialWeather = ( state, action ) => {
    console.log('action', action)
    return {
        ...state,
        data: action.weather,

    }
};

const fetchWeatherFailed = (state, action) => {
    return {
        ...state,
        error:true
    }
};

const loading = ( state, action ) => {
    return {
        ...state,
        loading: action.payload
    }
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_WEATHER: return setInitialWeather( state, action );
        case actionTypes.FETCH_WEATHER_FAILED: return fetchWeatherFailed( state, action );
        case actionTypes.LOADING: return loading( state, action);
        default: return state;
    }
};


export default reducer;