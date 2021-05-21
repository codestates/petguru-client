import Head from "next/head";
import Link from 'next/link';
import HomeNavbar from "../src/components/HomeNavbar";

export default function Mypage() {
  return (
    <>
      <Head>
        <title>펫그루 | 마이페이지</title>
      </Head>
      <HomeNavbar />
      <h1>로그인된 유저에게만 네비게이션바에서 보여지도록 구현해야합니다.</h1>
      <div>
        <button name="Logout">
          <Link href="/"><a>Logout</a></Link></button>
      </div>
    </>
  );
}
