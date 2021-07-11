/*global kakao*/
import React, { useEffect, useCallback, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import FormData from "form-data";
import StyledContainer from "./StyledContainer";


const MissingWrite = ({
  pet_name,
  contents,
  type,
  sex,
  missing_location,
  missing_date,
  image_url,
  born_year,
  longitude,
  latitude,
  onChangeField,
  post
}) => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const date = useRef(null);
  const displayMarker = (map) => {
    const marker = new window.kakao.maps.Marker({});

    marker.setMap(map);

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      const latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      // console.log("displayMarker:", mouseEvent.latLng.La);
    });

    kakao.maps.event.addListener(map, "click", (mouseEvent) => {
      axios
        .get(
          `https://dapi.kakao.com//v2/local/geo/coord2address.json?x=${mouseEvent.latLng.La}&y=${mouseEvent.latLng.Ma}`,
          {
            headers: {
              Authorization: "KakaoAK 6f091c3ba04ddedd69dacd02f83da356",
            },
          },
        )
        .then((res) => {
          onChangeField({
            key: "missing_location",
            value: res.data.documents[0].address.address_name,
          });
          onChangeField({ key: "latitude", value: mouseEvent.latLng.La });
          onChangeField({ key: "longitude", value: mouseEvent.latLng.Ma });
        });
    });
  };

  const mapScript = () => {
    let container = document.getElementById("map");

    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.508502, 127.074719), //지도의 중심좌표
      level: 5, //지도의 레벨(확대, 축소 정도)
    };

    //지도 생성 및 객체 리턴
    var map = new kakao.maps.Map(container, options);

    displayMarker(map);
  };

  useEffect(() => {
    mapScript();
  }, []);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return
    mounted.current = true;
    date.current.innerHTML = missing_date;
  })

  const onChangeName = (e) => {
    onChangeField({ key: "pet_name", value: e.target.value });
  };
  const onChangeType = (e) => {
    onChangeField({ key: "type", value: e.target.value });
  };
  const onChangeSex = (e) => {
    onChangeField({ key: "sex", value: e.target.value });
  };
  const onChangeDate = (e) => {
    onChangeField({ key: "missing_date", value: e.target.value });
  };
  const onChangeBorn = (e) => {
    onChangeField({ key: "born_year", value: e.target.value });
  };
  const onChangeContents = (e) => {
    onChangeField({ key: "contents", value: e.target.value });
  };
  const onChangeImage = useCallback( async (e) => {
    console.log('images', e.target.files[0]);
    const imageFormData = new FormData();
    // [].forEach.call(e.target.files, (f) => {
    //   imageFormData.append('image', f);
    // })
    imageFormData.append('image', e.target.files[0]);

    const path = await axios.post('http://localhost:5000/missing/posts/image', imageFormData).then((res) => res.data.image);
    
    // dispatch(uploadImage({ imageFormData }));
    onChangeField({ key: "image_url", value: path[0]["image_url"] });
  }, []);

  return (
    <StyledContainer>
      <div className="registerTitle">반려동물 정보를 입력해주세요.</div>
      <div clssName="wrapper">
        <div className="petRegister">
          <form enctype="multipart/form-data">
            <div className="row">
              <div className="col25">
                <label for="title">이름</label>
              </div>
              <div className="col75">
                <input
                  type="text"
                  value={pet_name}
                  className="inputName"
                  placeholder="반려동물 이름을 입력해주세요"
                  onChange={onChangeName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col25">
                <label for="species">품종</label>
              </div>
              <div className="col75">
                <input
                  type="text"
                  value={type}
                  className="inputSpecies"
                  placeholder="반려동물 품종을 입력해주세요"
                  onChange={onChangeType}
                />
              </div>
            </div>
            <div className="row">
              <div className="col25">
                <label for="sex">성별</label>
              </div>
              <div className="col75">
                <select
                  name="select"
                  value={sex}
                  className="inputSex"
                  onChange={onChangeSex}
                >
                  <option value="">선택</option>
                  <option value="암컷">암컷</option>
                  <option value="수컷">수컷</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col25">
                <label for="">실종 장소</label>
              </div>
              <div className="col75">
                <input
                  type="text"
                  value={missing_location}
                  className="inputArea"
                  placeholder="지도에 마커를 남겨주세요"
                />
              </div>
            </div>
            <div className="row">
              <div className="col25">
                <label for="title">실종 날짜</label>
              </div>
              <div className="col75">
                <input
                  ref={date}
                  type="date"
                  value={missing_date}
                  className="inputDate"
                  onChange={onChangeDate}
                />
              </div>
            </div>
            <div className="row">
              <div className="col25">
                <label for="born">출생 년도</label>
              </div>
              <div className="col75">
                <input
                  type="text"
                  value={born_year}
                  className="inputBorn"
                  placeholder="출생년도를 입력하세요"
                  onChange={onChangeBorn}
                />
              </div>
            </div>
            <div className="row">
              <div className="col25">
                <label for="images">사진</label>
              </div>
              <div className="col75">
                <input
                  type="file"
                  name="image"
                  className="inputFile"
                  multiple
                  onChange={onChangeImage}
                />
              </div>
            </div>
            <div className="row">
              <div className="col25">
                <label for="decription">내용</label>
              </div>
              <div className="col75">
                <textarea
                  value={contents}
                  className="inputDescription"
                  placeholder="내용을 입력하세요"
                  style={{height: "230px"}}
                  onChange={onChangeContents}
                />
              </div>
            </div>
          </form>
        </div>
        <div id="map"></div>
      </div>
    </StyledContainer>
  );
};

export default MissingWrite;
