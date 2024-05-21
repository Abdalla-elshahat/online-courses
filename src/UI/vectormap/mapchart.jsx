// src/MapComponent.js
import "./mapchart.css"
// src/MapComponent.js
import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: -15, name: "Location", coordinates: [10, 20] }
];

const MapComponent = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    if (zoom >= 4) return;
    setZoom(zoom * 2);
  };

  const handleZoomOut = () => {
    if (zoom <= 1) return;
    setZoom(zoom / 2);
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <button onClick={handleZoomIn} style={zoomButtonStyle}>+</button>
        <button onClick={handleZoomOut} style={zoomButtonStyle}>-</button>
      </div>
      <ComposableMap>
        <ZoomableGroup zoom={zoom}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={10} fill="#007BFF" stroke="#fff" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

const zoomButtonStyle = {
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 1,
  background: '#fff',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer',
};

export default MapComponent;
