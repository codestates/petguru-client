import Head from 'next/head'
import Link from 'next/link'
import NavigationBar from '../../parts/components/Navbar'
import '../../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>펫구루 | 홈</title>
      </Head>
      <NavigationBar>
        <h1 style={{ backgroundColor: "black", color: "white" }}>
          펫구루 홈 페이지입니다.
        </h1>
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
          <div
            className="banner"
            style={{
              backgroundColor: "#eee",
              width: "700px",
              height: "300px",
              margin: "auto",
            }}
          >
            배너
          </div>
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
            <h4>최근 실종 신고</h4>
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
        </div>
      </NavigationBar>
    </>
  );
}