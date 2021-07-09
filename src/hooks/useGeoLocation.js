import React, { useState, useEffect } from 'react';

const useGeoLocation = () => {
    const [lat, setLat] = useState(null);
    const [long, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    useEffect(()=> {
        const getLocation = () => {
            if (!navigator.geolocation) {
                setStatus('Geolocation is not supported by your browser');
            } else {
                setStatus('Locating...');
                navigator.geolocation.getCurrentPosition((position) => {
                    setStatus(null);
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                }, () => {
                    setStatus('Unable to retrieve your location');
                });
            }
        }

        getLocation();
    },[])



	return ({
        lat,
        long,
        status
    });
}

export default useGeoLocation;