import Head from 'next/head';
import Link from 'next/link';
import NavigationBar from "../../components/Navbar";

export default function QuestionsMain() {
  return (
    <>
      <Head>
        <title>펫그루 | Q&A</title>
      </Head>
      <NavigationBar>
        <h1>펫그루 질문페이지 메인</h1>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <button>질문하러 가기</button>
          <input type="text" placeholder="검색어를 입력하세요." />
          <section>
            <h4>주간 인기 Q&A</h4>
            <div
              className="list"
              style={{
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  backgroundColor: "#eee",
                  width: "300px",
                  height: "300px",
                  margin: "30px",
                }}
              >
                1번글
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  width: "300px",
                  height: "300px",
                  margin: "30px",
                }}
              >
                2번글
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  width: "300px",
                  height: "300px",
                  margin: "30px",
                }}
              >
                3번글
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  width: "300px",
                  height: "300px",
                  margin: "30px",
                }}
              >
                4번글
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  width: "300px",
                  height: "300px",
                  margin: "30px",
                }}
              >
                5번글
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  width: "300px",
                  height: "300px",
                  margin: "30px",
                }}
              >
                6번글
              </div>
            </div>
          </section>
          <section>
            <h4>실시간 Q&A</h4>
            <div
              className="list"
              style={{
                display: "flex",
                flexDirection:"column",
                flexWrap: "wrap",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  backgroundColor: "#eee",
                  width:"1000px",
                  height: "100px",
                  margin: "10px",
                }}
              >
                1번글
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  width:"1000px",
                  height: "100px",
                  margin: "10px",
                }}
              >
                2번글
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  width:"1000px",
                  height: "100px",
                  margin: "10px",
                }}
              >
                3번글
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  width:"1000px",
                  height: "100px",
                  margin: "10px",
                }}
              >
                4번글
              </div>
            </div>
          </section>
        </div>
      </NavigationBar>
    </>
  );
}