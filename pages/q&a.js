import Head from "next/head";
import HomeNavbar from '../src/components/HomeNavbar'


export default function QuestionsMain() {
  return (
    <>
      <Head>
        <title>펫그루 | Q&A</title>
      </Head>
      <HomeNavbar />
      <h1>펫그루 질문페이지 메인</h1>
    </>
  );
}
