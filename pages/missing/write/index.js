import React from 'react';
import Responsive from '../../../parts/components/common/Responsive';
import WriteActionButtons from '../../../parts/components/missing/WriteActionButtons';
import MissingWriteContainer from '../../../parts/containers/MissingWriteContainer';

const MissingPostPage = () => {
  return (
    <Responsive>
      <MissingWriteContainer />
      <WriteActionButtons />
    </Responsive>

  );
}

export default MissingPostPage;
