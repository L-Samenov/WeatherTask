import React from 'react';
import { initWeather } from '../../store/actions/weather';
import { connect } from 'react-redux';
import useGeoLocation from '../../hooks/useGeoLocation';
import './Layout.css';
import {Container} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Layout.css';

const Layout = ({children, ...props}) => {

    // we can use useDispatch() as well (const dispatch = useDispatch())

    const {lat, long} = useGeoLocation();

    React.useEffect(() => {
        props.initWeather({lat, long});
      }, [lat, long, props]);

    return (
        <Container className="layout">
            {children}
        </Container>
)};

Layout.propTypes = {
    children: PropTypes.element
};


export default connect(null, { initWeather })( Layout );