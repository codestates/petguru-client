import React from 'react';
import Responsive from '../../../parts/components/common/Responsive';
import MissingWriteContainer from '../../../parts/containers/MissingWriteContainer';
import WriteActionButtonsContainer from '../../../parts/containers/WriteActionButtonsContainer';

const MissingPostPage = () => {
  return (
    <Responsive>
      <MissingWriteContainer />
      <WriteActionButtonsContainer />
    </Responsive>

  );
}

export default MissingPostPage;
