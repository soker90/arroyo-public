import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const ArroyoMap = withScriptjs(
  withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false
      }}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
      loadingElement={<div style={{height: '100%'}}/>}
      containerElement={<div style={{height: '280px'}}/>}
      mapElement={<div style={{height: '100%'}}/>}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap >
  );

export default ArroyoMap;
