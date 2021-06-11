import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const ContentsCard = styled.div`
  width: 300px;
  height: 400px;
  color:white;
  background: grey;
  margin-left: 12px;
  margin-bottom: 12px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 12px;
  overflow: hidden;
  &:hover {
    background-color: white;
    color: black;
  }
  .contents {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }
  .contents-title {
    font-size: 24px;
  }
  .sub-info {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }
  span + span:before {
    color: #ced4da;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
  .btn-detail {
    align-items: flex-end;
  }
`;

const CardItem = ({ id, username, url, title }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/missing/${id}`);
  }
  return (
    <ContentsCard onClick={onClick}>
      <div>
        <img src={url} />
      </div>
      <div className="contents">
        <span className="contents-title">{ title }</span>
        <div className="sub-info">
          <span className="user-name">
            <b>{username}</b>
          </span>
          <span>{ new Date().toLocaleDateString() }</span>
        </div>
        <div>펫 이름</div>
        <div>내용</div>
      </div>
    </ContentsCard>
  );
}

export default CardItem;
