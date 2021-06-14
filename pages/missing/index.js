import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../../parts/components/common/Button";
import Search from "../../parts/components/common/Search";
import MissingContainer from "../../parts/containers/MissingContainer";
import Navbar from "../../parts/components/Navbar";
import MissingPage from "../../styles/MissingPage.js";

export default function MissingMain() {
  const router = useRouter();

  const post = () => {
    router.push("/missing/write");
  };
  return (
    <>
      <Head>
        <title>펫구루 | 실종신고</title>
      </Head>
      <Navbar />
      <MissingPage>
        <section class="search">
          <div class="backgroundImage" />
          <Button onClick={post}>실종신고</Button>
          <Search />
        </section>
        <section class="second">
          <MissingContainer />
        </section>
      </MissingPage>
    </>
  );
}
