/*global kakao*/

const getMarkers = (posts) => {
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
  var content = `
    <div style="padding: 16px; display:flex; flex-direction:column; justify-content:center;">
      <div>제목</div>
      <div>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</div>
      <div>이미지</div>
      <a href="missing/1">링크</a>
    </div>
  `;
  var positions = [
    {
      content: content,
      latlng: new kakao.maps.LatLng(33.450705, 126.570677),
    },
    {
      content: content,
      latlng: new kakao.maps.LatLng(33.450936, 126.569477),
    },
    {
      content: content,
      latlng: new kakao.maps.LatLng(33.450879, 126.56994),
    },
    {
      content: content,
      latlng: new kakao.maps.LatLng(33.451393, 126.570738),
    },
  ];

  // posts.forEach(post => {
  //   var marker = new kakao.maps.Marker({
  //     map: map,
  //     position: {
  //       latitude: post.latitude,
  //       longitude: post.longitude,
  //     }
  //   })

  //   const content = `
  //     <div style="padding: 16px;">
  //       <div>제목:${post.title}</div>
  //       <div>이미지<img src="${post.images}" /></div>
  //       <div>이름:${post.name}</div>
  //       <div>품종:${post.type}</div>
  //       <div>성별:${post.sex}</div>
  //       <div>상세설명:${post.contents}</div>
  //       <div>실종지역:${location}</div>
  //       <a href="missing/${post.id}">자세히보기</a>
  //     </div>
  //   `;

  //   var infowindow = new kakao.maps.InfoWindow({
  //     content: content,
  //     removable: true,
  //   })
  // })

  for (var i = 0; i < positions.length; i++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: positions[i].content, // 인포윈도우에 표시할 내용
      removable: true,
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(
      marker,
      "click",
      makeOverListener(map, marker, infowindow),
    );
    // kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
  }

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }
};

export default getMarkers;
