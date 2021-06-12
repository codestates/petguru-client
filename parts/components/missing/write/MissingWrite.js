/*global kakao*/ 
import React, {useEffect, useCallback, useRef} from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;

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
    width: 100%;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px 0 rgb(96 96 96 / 16%),
      2px 10px 23px 0 rgb(96 96 96 / 13%);
    padding: 40px;
    padding-bottom: 20px;
  }

  #map {
    width: 100%;
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
  .inputBorn,
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
  .inputBorn:focus,
  .inputDescription:focus {
    outline: 1px solid #000000;
    box-shadow: 0 0 0 1.8pt #000000;
  }
`;

const MissingWrite = ({ name, title, contents, type, sex, location, missing_date, images, born_year, onChangeField }) => {
  
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
  
  const onChangeTitle = useCallback((e) => {
    onChangeField({ key: 'title', value: e.target.value });
  }, []);
  const onChangeName = (e) => {
    onChangeField({ key: 'name', value: e.target.value });
  }
  const onChangeType = (e) => {
    onChangeField({ key: 'type', value: e.target.value });
  }
  const onChangeSex = (e) => {
    onChangeField({ key: 'sex', value: e.target.value });
  }
  const onChangeLocation = (e) => {
    onChangeField({ key: 'location', value: e.target.value });
  }
  const onChangeDate = (e) => {
    onChangeField({ key: 'missing_date', value: e.target.value });
  }
  const onChangeBorn = (e) => {
    onChangeField({ key: 'born_year', value: e.target.value });
  }
  const onChangeContents = (e) => {
    onChangeField({ key: 'contents', value: e.target.value });
  }
  const onChangeImage = (e) => {
    onChangeField({key: 'images', value: [...e.target.files]})
  }

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
                value={title}
                className="inputTitle"
                placeholder="제목을 입력해주세요"
                onChange={onChangeTitle}
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
                value={name}
                className="inputName"
                placeholder="이름을 입력해주세요"
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
                value={location}
                className="inputArea"
                placeholder="지도에 마커를 남겨주세요"
                onChange={onChangeLocation}
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
                  type="number"
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
                onChange={onChangeContents}
              />
            </div>
          </div>
        </div>
        <div id="map"></div>
      </div>
    </StyledContainer>

  );
}

export default MissingWrite;