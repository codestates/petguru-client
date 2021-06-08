import React from 'react';
import Image from 'next/image';
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
  .user-info {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }
  .user-name {
    margin-left: 10px;
  }
`;

const CardItem = ({ id, username, url, title }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/missingpost/${id}`);
  }
  return (
    <ContentsCard onClick={onClick}>
      <div>
        <img src={url} />
      </div>
      <div className="contents">
        <span className="contents-title">{ title }</span>
        <div className="user-info">
          <Image src="/images/avatar.png" width="20px" height="20px" />
          <span className="user-name">{username}</span>
        </div>
      </div>
    </ContentsCard>
  );
}

export default CardItem;
