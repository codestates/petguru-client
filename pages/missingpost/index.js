import React from 'react';
import NavigationBar from '../../parts/components/Navbar';
import MissingPostContainer from '../../parts/containers/MissingPostContainer';

const MissingPostPage = () => {
  return (
    <>
      <NavigationBar>
        <MissingPostContainer />
      </NavigationBar>
    </>
  );
}

export default MissingPostPage;
