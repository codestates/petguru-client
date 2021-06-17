import Head from "next/head";
import React from "react";
import MapContent from "../../parts/components/MapContent";
import Navbar from "../../parts/components/Navbar";

const index = () => {
  return (
    <>
      <Navbar>
        <MapContent />
      </Navbar>
    </>
  );
};

export default index;
