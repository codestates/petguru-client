import Head from 'next/head';
import Link from 'next/link';
import NavigationBar from "../../components/Navbar";

export default function Mypage() {
  return (
    <>
      <Head>
        <title>펫그루 | 마이페이지</title>
      </Head>
      <NavigationBar>
        <h1>로그인된 유저에게만 네비게이션바에서 보여지도록 구현해야합니다.</h1>
        <div
          className="container"
          style={{
            display: "flex",
            height: "",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "1100px",
              margin: "30px",
            }}
          >
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                height: "100px",
                lineHeight: "100px",
                margin: "10px",
              }}
            >
              나의 정보
            </div>
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                height: "100px",
                lineHeight: "100px",
                margin: "10px",
              }}
            >
              마이 펫
            </div>
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                height: "100px",
                lineHeight: "100px",
                margin: "10px",
              }}
            >
              나의 질문 및 답변 내역
            </div>
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                height: "100px",
                lineHeight: "100px",
                margin: "10px",
              }}
            >
              멘토 등록하기
            </div>
          </div>
          <div
            style={{
              backgroundColor: "blue",
              color: "white",
              width: "1600px",
              height: "1000px",
              margin: "30px",
              lineHeight: "450px",
              textAlign: "center",
            }}
          >
            <h1>메뉴 선택에 따른 데이터 변경</h1>
          </div>
        </div>
      </NavigationBar>
    </>
  );
}