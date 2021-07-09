import React,{ Fragment } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import WeatherCard from './WeatherCard/WeatherCard';
import { findNextMidnightIndex, filtered } from '../../utility';
import './WeatherList.css';
import PropTypes from 'prop-types';



const WeatherList = ({weather, loading}) => {

  // we can use useSelector() as well (const result: any = useSelector(selector: Function, equalityFn?: Function))

  const midnightIndex = findNextMidnightIndex(weather);

  return (
    <Fragment>
      {!loading && <h2>Current Weather</h2>}
        <Row>
            {weather.slice(0, midnightIndex).map(({dt,main, weather}) => (
                  <Col key={dt} xs={12} md={2}>
                      <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon} isSelectable={false}/>
                  </Col>
              ))}
          </Row>

        <Row>
        {!loading && <h2>Next Days Weather</h2>}
          {filtered(weather, midnightIndex).map(({dt,main, weather}) => (
                <Col key={dt} xs={12} md={2}>
                    <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon} isSelectable={true}/>
                </Col>
            ))}
        </Row>
      </Fragment>
  )


}

WeatherList.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool

};

const mapStateToProps = ({weather:{data, loading}}) => {
  return {
    weather: data,
    loading: loading
  };
}


export default connect(mapStateToProps,null)( WeatherList );