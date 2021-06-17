import Head from "next/head";
import React from "react";
import MapContent from "../../parts/components/MapContent";
import Navbar from "../../parts/components/Navbar";

const index = () => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=898f3640e2cfb147293686d1dd587186
&libraries=services"
        ></script>
      </Head>
      <Navbar>
        <MapContent />
      </Navbar>
    </>
  );
};

export default index;
