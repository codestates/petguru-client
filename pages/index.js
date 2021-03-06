import React, { useState } from "react";
import Head from "next/head";
import LandingPageNavBar from '../parts/components/LandingPageNavbar';
import LandingPageMain from "../parts/components/LandingPageMain";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>펫구루 | 환영합니다!</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <LandingPageNavBar />
        <LandingPageMain />
      </body>
    </>
  );
};

export default LandingPage;
