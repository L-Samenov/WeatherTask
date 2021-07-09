import React from 'react';
import {Card} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './WeatherCard.css';

const WeatherCard = ({dt, temp_min, temp_max, main, icon, isSelectable}) => {

  const date = new Date(dt);
  const history = useHistory();
  const detailedPreview = (dt) => {
      const paramDate = dt/1000;
    history.push(`/${paramDate}`)
    }
let containerClass = 'card-container';
if(isSelectable){
    containerClass += ' selectable'
}

  return (
    <Card onClick={() => isSelectable && detailedPreview(dt)} className={containerClass}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        <p>Min: {temp_min}</p>
        <p>Max: {temp_max}</p>
      </Card.Body>
    </Card>
  );
};

WeatherCard.propTypes = {
    dt: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
    icon: PropTypes.string,
    isSelectable: PropTypes.bool

};
export default WeatherCard;