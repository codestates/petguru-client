import React, { Component, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import postMarker from "./lib/postMarker";
import submitMarkers from "./lib/submitMarkers";

const MapContents = styled.div`
  width: 100%;
  height: 700px;
`;
/*global kakao*/

const MapContent = () => {

  // 첫 로드 시에 여러 개의 마커를 가지고 옴
  useEffect(() => {
    // postMarker();
    submitMarkers();
  }, []);

  return <MapContents id="map" />;
};

export default MapContent;
