import React, { useState } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import Responsive from "../common/Responsive";
import InfiniteScroll from "react-infinite-scroll-component";

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const CardContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

const PostList = ({ missingList, error, loading, posts }) => {
  const [items, setItems] = useState(Array.from({ length: 8 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    console.log("items", items);
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 10 })));
      console.log("setItems 후 items", items);
    }, 500);
  };
  // 에러 발생 시
  /*
  if (error) {
    return <PostListBlock>에러가 발생했습니다</PostListBlock>
  } */

  // if(missingList) {
  //   return (
  //     <CardContainer>
  //       {missingList.map(data => {
  //       return <CardItem id={data.id} url={data.url} pet_name={data.pet_name} type={data.type} sex={data.sex} missing_location={data.missing_location} missing_date={data.missing_date} born_year={data.born_year}   />
  //       })}
  //     </CardContainer>
  //   )
  // }

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>The End...</b>
          </p>
        }
      >
        {!loading &&
          posts &&
          items.map((i, index) => (
            <CardContainer key={index}>
              {posts.list?.map((post) => (
                <CardItem post={post} key={post.id} />
              ))}
            </CardContainer>
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default PostList;
