import styled from 'styled-components';
import CardItem from './CardItem';
import Responsive from '../common/Responsive';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 12px;
  cursor: pointer;
`;


const PostList = ({ missingList, error, loading, posts }) => {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다</PostListBlock>
  }
  
  return (
    <CardContainer>
      {/* {missingList.map(data => {
        return <CardItem id={data.id} username={data.username} url={data.url} title={data.title} />
        })
      } */}
      {
        !loading && posts && (
          <div>
            {posts.map(post => (
              <CardItem post={post} key={post.id} />
            ))}
          </div>
        )
      }
    </CardContainer>
  );
}

export default PostList;
