import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const RegularMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

export default function GoogleMaps() {
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_GbvndVQ4cYdI4VQ0w3VAHmYyczZxH5Q"
      loadingElement={<div style={{height: '100%'}}/>}
      containerElement={<div style={{height: '280px'}}/>}
      mapElement={<div style={{height: '100%'}}/>}
    />
  )
}