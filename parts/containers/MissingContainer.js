import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import Missing from '../components/missing/Missing';

const missingList = [
  {
    id: 1,
    username: "손영산",
    url: "/images/dog.jpeg",
    title: "사월이를 찾아주세요",
    content: "원흥역 3번 출구에서 시바견 사월이가 실종됐습니다.ㅠㅠ도와주세요.",
    createDate: "2021-06-03",
    readCount: 99
  },
  {
    id: 2,
    username: "손영산",
    url: "/images/dog.jpeg",
    title: "깨비를 찾아주세요",
    content: "삼송공원에서 실버푸들 깨비가 실종됐습니다.ㅠㅠ도와주세요.",
    createDate: "2021-06-05",
    readCount: 50
  },
  {
    id: 3,
    username: "만두맨",
    url: "/images/dog.jpeg",
    title: "만두를 찾아주세요",
    content: "신원동 터널에서 차우차우 만두가 실종됐습니다.ㅠㅠ도와주세요.",
    createDate: "2021-05-31",
    readCount: 25
  },
  {
    id: 4,
    username: "찐빵맨",
    url: "/images/dog.jpeg",
    title: "찐빵을 찾아주세요",
    content: "신원동 터널에서 스핑크스 고양이 찐빵이 실종됐습니다.ㅠㅠ도와주세요.",
    createDate: "2021-05-30",
    readCount: 35
  },
  {
    id: 5,
    username: "쿠팡맨",
    url: "/images/dog.jpeg",
    title: "쿠팡이를 찾아주세요",
    content: "신원동 터널에서 길냥이 쿠팡이가 실종됐습니다.ㅠㅠ도와주세요.",
    createDate: "2021-06-01",
    readCount: 65
  },
]

const MissingContainer = () => {
  return (
    <Missing missingList={missingList} />
  );
}

export default MissingContainer;
