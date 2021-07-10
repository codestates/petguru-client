import { useRouter } from 'next/router';
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/missing/PostList';
import { listPosts } from '../../redux/modules/missing_posts';

const missingList = [
  {
    id: 1,
    url: "/images/mockDogImg/mal.jpeg",
    pet_name: "쫑이",
    type: "말티즈",
    sex: "수컷",
    missing_location: "대구시 북구 칠성동 2가",
    missing_date: "2021-06-03",
    born_year: "2007년"
  },
  {
    id: 2,
    url: "/images/mockDogImg/pome.jpeg",
    pet_name: "축복이",
    type: "포메라니안",
    sex: "수컷",
    missing_location: "서울시 송파구 가락동 913",
    missing_date: "2021-05-31",
    born_year: "2012년"
  },
  {
    id: 3,
    url: "/images/mockDogImg/samo.png",
    pet_name: "복실이",
    type: "사모예드",
    sex: "암컷",
    missing_location: "경기 이천시 진리동 394-1",
    missing_date: "2021-06-18",
    born_year: "2019년"
  },
  {
    id: 4,
    url: "/images/mockDogImg/siba.jpeg",
    pet_name: "사월이",
    type: "시바견",
    sex: "암컷",
    missing_location: "서울 도봉구 쌍문동 659-1",
    missing_date: "2021-06-03",
    born_year: "2009년"
  },
  {
    id: 5,
    url: "/images/mockDogImg/spitz.jpeg",
    pet_name: "피치",
    type: "스피츠",
    sex: "암컷",
    missing_location: "경기 성남시 분당구 야탑동 334",
    missing_date: "2021-05-25",
    born_year: "2005년"
  },
  {
    id: 6,
    url: "/images/mockDogImg/siba.jpeg",
    pet_name: "사월이",
    type: "시바견",
    sex: "암컷",
    missing_location: "서울 도봉구 쌍문동 659-1",
    missing_date: "2021-06-03",
    born_year: "2009년"
  },
  {
    id: 7,
    url: "/images/mockDogImg/samo.png",
    pet_name: "복실이",
    type: "사모예드",
    sex: "암컷",
    missing_location: "경기 이천시 진리동 394-1",
    missing_date: "2021-06-18",
    born_year: "2019년"
  },
  {
    id: 8,
    url: "/images/mockDogImg/mal.jpeg",
    pet_name: "쫑이",
    type: "말티즈",
    sex: "수컷",
    missing_location: "대구시 북구 칠성동 2가",
    missing_date: "2021-06-03",
    born_year: "2007년"
  },
]

const MissingContainer = () => {
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      limit: posts.limit,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  useEffect(() => {
    const lastId = posts[posts.length - 1]?.id;
    console.log('lastId : ', lastId)
    dispatch(listPosts(lastId));
  }, [dispatch]);

  return (
    <PostList missingList={missingList} loading={loading} posts={posts} error={error} />
  );
}

export default MissingContainer;
