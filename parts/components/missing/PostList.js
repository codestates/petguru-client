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
  // if(missingList) {
  //   return (
  //     <CardContainer>
  //       {missingList.map(data => {
  //       return <CardItem id={data.id} url={data.url} pet_name={data.pet_name} type={data.type} sex={data.sex} location={data.location} missing_date={data.missing_date} born_year={data.born_year}   />
  //       })}
  //     </CardContainer>
  //   )
  // }
  
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
