import styled from 'styled-components';
import CardItem from './CardItem';
import Responsive from '../common/Responsive';

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
  // 에러 발생 시
  /*
  if (error) {
    return <PostListBlock>에러가 발생했습니다</PostListBlock>
  } */
  
  return (
    <div>
      {
        !loading && posts &&
        (
          <CardContainer>
            {posts.list?.map(post => (
              <CardItem post={post} key={post.id} />
            ))}
          </CardContainer>
        )
      }
    </div>
  );
}

export default PostList;
