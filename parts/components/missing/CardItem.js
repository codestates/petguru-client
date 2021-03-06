import React, {useState} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { readPost } from '../../../redux/modules/missing_post';
import { useDispatch } from 'react-redux';
import PostDetail from './PostDetail';

const ContentsCard = styled.div`
  width: 280px;
  height: 400px;
  color: white;
  background: grey;
  margin: 30px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 12px;
  overflow: hidden;
  &:hover {
    background-color: white;
    color: grey;
  }

  img {
    width: 300px;
    height: 200px;
    align: center;
  }

  .contents {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .contents-title {
    font-size: 16px;
    padding-bottom: 10px;
  }
  .sub-info {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }

  .btn-detail {
    align-items: flex-end;
  }
`;

const CardItem = ({ post }) => {
  const { id, pet_name, type, sex, missing_location, missing_date, born_year, image_url } = post;
  const router = useRouter();
  const dispatch = useDispatch();

  // API 호출 POSTDETAIL
  const onClick = () => {
    dispatch(readPost(id));
    router.push(`/missing/${id}`);
  }
  return (
    <ContentsCard onClick={onClick}>
      <div>
        {/* <img src={require('../img/basic-img.jpeg')} /> */}
        <img src={`${image_url}`} />
      </div>
      <div className="contents">
        <div className="contents-title">이름 : { pet_name }</div>
        <div className="contents-title">품종 : { type }</div>
        <div className="contents-title">성별 : { sex }</div>
        <div className="contents-title">실종장소 : { missing_location }</div>
        <div className="contents-title">실종날짜 : { missing_date }</div>
        <div className="contents-title">출생년도 : { born_year }</div>
      </div>
    </ContentsCard>
  );
}

export default CardItem;
