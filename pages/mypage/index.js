import Head from "next/head";
import Link from "next/link";
import Navbar from "../../parts/components/Navbar";
import MyPage from "../../styles/MyPage";

export default function Mypage() {
  return (
    <>
      <Head>
        <title>펫구루 | 마이페이지</title>
      </Head>
      <Navbar />
      <MyPage>
        <section class="search">
          <div class="backgroundImage" />
          <div class="sidenav">
            <a href="#">Profile</a>
            <a href="#">Pet</a>
            <a href="#">Q&A</a>
            <a href="#">For Mentor</a>
          </div>

          <div class="content">
            <h2>My Page</h2>
            <p>Work In Progress</p>
          </div>
        </section>
      </MyPage>

      {/* <div
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
        </div> */}
    </>
  );
}
