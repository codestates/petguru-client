import Head from 'next/head';
import Link from 'next/link';
import { Router } from 'next/router';
import Button from "../../parts/components/common/Button";
import Search from "../../parts/components/common/Search";
import Navbar from "../../parts/components/Navbar";
import QnaPage from "../../styles/QnaPage.js";

export default function QuestionsMain() {
  const qna = () => {
    Router.push("/q&a/write")
  };

  return (
    <>
      <Head>
        <title>펫구루 | Q&A</title>
      </Head>
      <Navbar />
      <QnaPage>
        <section class="search">
          <div class="backgroundImage" />
          <Button onclick={qna}>질문하기</Button>
          <Search />
        </section>
        <section class="second">

        </section>
      </QnaPage>
 
    </>
  );
}