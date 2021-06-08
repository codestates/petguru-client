import Card from './common/Card';

// Missing presentation component
const Missing = ({missingList, onClick}) => {
  return (
    <Card missingList={missingList} onClick={onClick} />
  );
}

export default Missing;
