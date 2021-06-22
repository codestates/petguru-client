import React, { Component, useEffect } from "react";
import styled from "styled-components";
import getMarkers from "./lib/getMarkers";

const MapContents = styled.div`
  width: 100%;
  height: 500px;
`;
/*global kakao*/

const MapContent = ({post}) => {
  console.log('MapContent', post);

  useEffect(() => {
    getMarkers(post);
  }, [])
  return <MapContents id="map" />;
};

export default MapContent;
