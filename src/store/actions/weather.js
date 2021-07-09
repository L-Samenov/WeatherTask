import * as actionTypes from './actionTypes';
import axios from 'axios';
import { configApi } from '../../config';

export const setWeather = ( weather ) => {

    return {
        type: actionTypes.SET_WEATHER,
        weather
    };
};

export const fetchWeatherFailed = () => {
    return {
        type: actionTypes.FETCH_WEATHER_FAILED
    };
};


export const loadingStatus = (status) => {
    return {
        type: actionTypes.LOADING,
        payload: status
    }
}
export const initWeather = ({lat, long}) => {
    return dispatch => {
        dispatch(loadingStatus(true))
            axios.get(`${configApi.REACT_APP_API_URL}/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${configApi.REACT_APP_API_KEY}`)
                .then(data => {
                    dispatch(setWeather(data.data.list));
                    dispatch(loadingStatus(false))
                })
                .catch( error => {
                    dispatch(fetchWeatherFailed());
                } );

       ;
    };
};