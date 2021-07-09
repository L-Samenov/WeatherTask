import moment from 'moment';

export const findNextMidnightIndex = (arrWeather) => {
    return arrWeather.findIndex(({dt}) => {
        let strDate = moment(dt*1000).format("hh:mm a");
        return strDate == '12:00 am';
    });
}

export const filtered = (arrWeather, index) => {
    return arrWeather.slice(index).filter(({dt}) => {
        let str = moment(dt*1000).format("hh:mm a");
        return str == '12:00 pm';
    });
}

export const getHourDetailsWeather = (arrWeather, index) => {
    return arrWeather.slice(index-4, index+4)
}


export const findWeatherItemIndex = (arrWeather, date) => {
    return arrWeather.findIndex( (item) => {
       return item.dt == date
    })
}