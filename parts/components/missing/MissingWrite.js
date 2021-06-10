/*global kakao*/ 
import React, {useEffect} from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  .container {
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
}

  .registerLogo {
    width: 180px;
    height: 90px;
    margin-top: -39px;
    margin-left: 71px;
  }

  .registerTitle {
    text-align: left !important;
    margin-left: 10%;
  }

  .wrapper {
    display: flex;
    position: fixed;
    width: 80%;
    height: 64%;
    margin: auto;
    margin-top: 9rem;
    top: 50px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    justify-content: space-between;
  }

  .petRegister {
    width: 40%;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px 0 rgb(96 96 96 / 16%),
      2px 10px 23px 0 rgb(96 96 96 / 13%);
    padding: 40px;
    padding-bottom: 20px;
  }

  #map {
    width: 40%;
    height: 500px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px 0 rgb(96 96 96 / 16%),
      2px 10px 23px 0 rgb(96 96 96 / 13%);
  }

  .inputTitle,
  .inputName,
  .inputSpecies,
  .inputSex,
  .inputArea,
  .inputDate,
  .inputReward,
  .inputFile,
  .inputDescription {
    width: 95%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  .submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputSubmit:hover {
    background-color: #0076b6;
  }

  label {
    padding: 12px 12px 12px 14px;
    display: inline-block;
  }

  .col25 {
    float: left;
    width: 25%;
    margin-top: 1px;
  }

  .col75 {
    float: left;
    width: 75%;
    margin-top: 7px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .petRegisterText {
    font-size: 14px;
    color: white;
    margin-left: 15px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 50%);
    opacity: 0.8;
  }

  .inputTitle:focus,
  .inputName:focus,
  .inputSpecies:focus,
  .inputSex:focus,
  .inputArea:focus,
  .inputDate:focus,
  .inputFile:focus,
  .inputReward:focus,
  .inputDescription:focus {
    outline: 1px solid #000000;
    box-shadow: 0 0 0 1.8pt #000000;
  }
`;

const MissingWrite = ({ name, title, contents, type, sex, location, missing_date, images, born_year }) => {
  const makeMarker = () => {
    const marker = new window.kakao.amps.Marker({});

    marker.setMap()
  }
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.556225, 126.972448),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.556225, 126.972448);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, []);

  return (
    <StyledContainer>
      <div className="registerTitle">
        <h1>반려동물 정보를 입력해주세요.</h1>
      </div>
      <div clssName="wrapper">
        <div className="petRegister">
          <div className="row">
            <div className="col25">
              <label for="title">제목</label>
            </div>
            <div className="col75">
              <input
                type="text"
                className="inputTitle"
                placeholder="제목을 입력해주세요"
              />
            </div>
          </div>
          <div className="row">
            <div className="col25">
              <label for="title">이름</label>
            </div>
            <div className="col75">
              <input
                type="text"
                className="inputName"
                placeholder="이름을 입력해주세요"
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
                className="inputSpecies"
                placeholder="반려동물 품종을 입력해주세요"
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
                className="inputSex"
                /*onChange*/
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
                type="date"
                className="inputDate"
              />
            </div>
          </div>
          <div className="row">
            <div className="col25">
              <label for="img">사진</label>
            </div>
            <div className="col75">
              <input
                type="file"
                className="inputFile"
                multiple
              />
            </div>
          </div>
          <div className="row">
            <div className="col25">
              <label for="decription">내용</label>
            </div>
            <div className="col75">
              <textarea
                className="inputDescription"
                placeholder="내용을 입력하세요"
              />
            </div>
          </div>
          <div className="submit-button">
          </div>
        </div>
        <div id="map"></div>
      </div>
    </StyledContainer>

  );
}

export default MissingWrite;