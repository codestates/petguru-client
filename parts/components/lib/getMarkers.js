/*global kakao*/

const getMarkers = (post) => {
  const { longitude, latitude } = post.missingInfo;

  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(longitude, latitude), // 지도의 중심좌표
      level: 7, // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  var markerPosition = new kakao.maps.LatLng(longitude, latitude);
  
  var marker = new kakao.maps.Marker({
    position: markerPosition
  })

  marker.setMap(map);
};

export default getMarkers;
