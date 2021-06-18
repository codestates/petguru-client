import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Navbar from "../Navbar.js";
import MissingPage from "../../../styles/MissingPage";


const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
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
  font-size: 1.3125rem;
  color: #343a40;
  margin-bottom: 3rem;
`;

const PostDetail = ({ post, error, loading, user, actionButtons }) => {
  // 에러 발생 시
  // if (error) {
  //   if (error.response && error.response.status === 404) {
  //     return <PostViewerBlock>존재하지 않는 게시물입니다.</PostViewerBlock>
  //   }
  //   return <PostViewerBlock>오류가 발생했습니다.</PostViewerBlock>
  // }

  // 로딩 || 포스트 데이터가 없을 때
  // if (loading || !post) {
  //   return null;
  // }
  // 포스트 데이터가 있을 때
  // const { username, name, title, contents, type, sex, born_year, location, missing_date, image_url, created_at } = post;
  const title = "테스트";
  const username = "손영산";
  const name = "깨비";
  const type = "푸들";
  const sex = "수컷";
  const born_year = 2017;
  const location = "원흥역";
  const missing_date = "3 days ago";
  const contents = "깨비를 찾아주세요 ㅠ";
  return (
    <>
      <Head>
        <title>펫구루 | 실종신고</title>
      </Head>
      <Navbar />
      <MissingPage>
        <section class="first">
          <div class="backgroundImage" />

        </section>
      </MissingPage>

      {/* <PostViewerBlock>
        <PostHead>
          <h1>{title}</h1>
          <SubInfo>
            <span>
              <b>{username}</b>
            </span>
            <span>글 작성일: {new Date().toLocaleDateString()}</span>
          </SubInfo>
        </PostHead>
        {actionButtons}
        <PostContent>
          <div>이미지 공간</div>
          <div>펫 이름: {name}</div>
          <div>품종: {type}</div>
          <div>성별: {sex}</div>
          <div>나이: {born_year}</div>
          <div>실종 장소: {location}</div>
          <div>실종 날짜: {missing_date}</div>
          <p>내용: {contents}</p>
        </PostContent>
      </PostViewerBlock> */}
    </>
  );
};

export default PostDetail;
