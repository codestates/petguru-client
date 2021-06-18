import React, { Component, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import postMarker from "./lib/postMarker";
import getMarkers from "./lib/getMarkers";
import { listPosts } from "../../redux/modules/missing_posts";
import { useDispatch, useSelector } from "react-redux";

const MapContents = styled.div`
  width: 100%;
  height: 700px;
`;
/*global kakao*/

const MapContent = () => {
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading,
      user: user.user,
    }),
  );
  // 첫 로드 시에 여러 개의 마커를 가지고 옴
  // useEffect(async () => {
  //   await dispatch(listPosts());
  //   if (error) {
  //     return <div>에러 발생</div>
  //   }
  //   getMarkers(posts);
  // }, [dispatch]);
  useEffect(() => {
    getMarkers();
  }, [])
  return <MapContents id="map" />;
};

export default MapContent;
