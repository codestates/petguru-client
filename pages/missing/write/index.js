import React from "react";
import Head from "next/head";
import Responsive from "../../../parts/components/common/Responsive";
import MissingWriteContainer from "../../../parts/containers/MissingWriteContainer";
import WriteActionButtonsContainer from "../../../parts/containers/WriteActionButtonsContainer";
import Navbar from "../../../parts/components/Navbar.js";

const MissingPostPage = () => {
  return (
    <>
      <Head>
        <title>펫구루 | 실종신고</title>
      </Head>
      <Navbar />
      <section class="first">
        <div class="backgroundImage" />
          <Responsive>
            <MissingWriteContainer />
            <WriteActionButtonsContainer />
          </Responsive>
      </section>
    </>
  );
};

export default MissingPostPage;
