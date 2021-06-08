import styled from 'styled-components';
import CardItem from './CardItem';

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 12px;
  cursor: pointer;
`;


const Card = ({missingList}) => {
  return (
    <CardContainer>
      {missingList.map(data => {
        return <CardItem id={data.id} username={data.username} url={data.url} title={data.title} />
        })
      }
    </CardContainer>
  );
}

export default Card;
