import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap'
import WeatherCard from '../WeatherList/WeatherCard/WeatherCard';
import { useParams } from "react-router-dom";
import { getHourDetailsWeather, findWeatherItemIndex } from '../../utility';
import './HourList.css';
import PropTypes from 'prop-types';

const HourList = ({ weather }) =>  {

  // we can use useSelector() as well (const result: any = useSelector(selector: Function, equalityFn?: Function))

let {date} = useParams();
const indexSelectedDay = findWeatherItemIndex(weather, date);
const formatedHours = getHourDetailsWeather(weather, indexSelectedDay)
  return  (
    <Row>
    {formatedHours.map(({dt,main, weather}) => (
         <Col key={dt} xs={12} md={2}>
             <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon} isSelectable={false}/>
         </Col>
     ))}
 </Row>
  )

}

HourList.propTypes = {
    weather: PropTypes.arrayOf(PropTypes.object)

};


const mapStateToProps = (state) => {
    return {
        weather: state.weather.data
    };
  }


export default connect(mapStateToProps,null)( HourList );