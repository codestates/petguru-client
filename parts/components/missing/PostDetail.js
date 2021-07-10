import React, { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Navbar from "../Navbar.js";
import MissingPage from "../../../styles/MissingPage";
import MapContent from "../MapContent";

/*global kakao*/

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 3rem;
  h1 {
    font-size: 45px;
    line-height: 1.5;
    margin: 0;
  }
`;
const SubInfo = styled.div`
  margin-top: 1rem;
  color: #868e96;

  span + span:before {
    color: #adb5bd;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7"; /* 가운뎃점 */
  }
`;
const PostContent = styled.div`
  img {
    width: 600px;
    height: 480px;
    padding: 50px;
    margin: auto;    
    display: block;
  }

  div{
    margin: 20px auto;
    display: block;
    text-align: center;
  }
  
  display:flex;
  flex-direction:column;
  justify-content: left;
  font-size: 20px;
  font-weight: 600;
  color: #343a40;
`;

const PostDetail = ({ post, error, loading, user, actionButtons }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 게시물입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류가 발생했습니다.</PostViewerBlock>;
  }

  // 로딩 || 포스트 데이터가 없을 때
  // if (loading || !post) {
  //   return null;
  // }
  // 포스트 데이터가 있을 때
  if (!post) {
    return <PostViewerBlock>오류가 발생했습니다.</PostViewerBlock>;
  }

  const {
    pet_name,
    title,
    contents,
    type,
    sex,
    born_year,
    location,
    latitude,
    longitude,
    missing_date,
    image_url,
    created_at,
  } = post.missingInfo;

  return (
    <>
      <Head>
        <title>펫구루 | 실종신고</title>
      </Head>
      <Navbar />
      <MissingPage>
        <section class="first">
          <div class="backgroundImage" />
          <PostViewerBlock>
            <PostHead>
              <h1> 찾습니다! { pet_name }</h1>
            </PostHead>
              {actionButtons}
            <PostContent>
            <div>
              <img src={`http://localhost:5000/${image_url}`} />
              <div>이름: {pet_name}</div>
              <div>품종: {type}</div>
              <div>성별: {sex}</div>
              <div>출생년도: {born_year}</div>
              <div>실종 장소: {location}</div>
              <div>실종 날짜: {missing_date}</div>
              <p>내용: {contents}</p>
            </div>
            </PostContent>
          </PostViewerBlock>
          <MapContent post={post}/>
        </section>
      </MissingPage>
    </>
  );
};

export default PostDetail;
