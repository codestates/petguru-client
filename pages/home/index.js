import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../../parts/components/Navbar";
import PropTypes from "prop-types";
import MainPage from "../../styles/Home.js";
import Carousel from "react-elastic-carousel";
import MissingContainer from "../../parts/containers/MissingContainer";

const Home = ({ children, props }) => {
  return (
    <>
      <Head>
        <title>펫구루 | 홈</title>
      </Head>
      <body>
        <NavBar />
        <MainPage>
          <section class="banner">
            <div class="backgroundImage" />
            <Carousel itemsToShow={1}>
              <div class="bannerImage" style={{backgroundImage: "url(img/b1.jpeg)", backgroundSize: "contain"}}></div>
              <div class="bannerImage" style={{backgroundImage: "url(img/b2.jpeg)", backgroundSize: "contain"}}></div>
              <div class="bannerImage" style={{backgroundImage: "url(img/b3.jpeg)", backgroundSize: "contain"}}></div>
            </Carousel>
          </section>


          <div class="btn-background">
            <button class="btn-login">
              <Link href="q&a">Question Page</Link>
            </button>
            <button class="btn-login">
              <Link href="missing">Find My Pet Page</Link>
            </button>
          </div>

          <section class="second">
            <h3 class="title">Weekly Best Q&A</h3>

            <section class="pt-4">
              <div class="container px-lg-5">
                <div class="row gx-lg-5">
                  <div class="col-lg-6 col-xxl-4 mb-5">
                    <div class="card bg-light border-0 h-100">
                      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                          <i class="bi bi-collection"></i>
                        </div>
                        <h2 class="fs-4 fw-bold">강아지 이빨 쉽게 닦는 방법은?</h2>
                        <div class="mb-0">
                        <br/>♥ 21&nbsp; ✔️ 4
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-xxl-4 mb-5">
                    <div class="card bg-light border-0 h-100">
                      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                          <i class="bi bi-collection"></i>
                        </div>
                        <h2 class="fs-4 fw-bold">고양이에게 강아지사료를 먹여도 되나요?</h2>
                        <div class="mb-0">
                        <br/>♥ 6&nbsp; ✔️ 1
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div class="col-lg-6 col-xxl-4 mb-5">
                    <div class="card bg-light border-0 h-100">
                      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                          <i class="bi bi-collection"></i>
                        </div>
                        <h2 class="fs-4 fw-bold">천식에 고양이털이 안좋나요?</h2>
                        <div class="mb-0">
                        <br/>♥ 13&nbsp; ✔️ 2
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div class="col-lg-6 col-xxl-4 mb-5">
                    <div class="card bg-light border-0 h-100">
                      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                          <i class="bi bi-collection"></i>
                        </div>
                        <h2 class="fs-4 fw-bold">고양이는 목욕을 시키면 안되나요?</h2>
                        <div class="mb-0">
                        <br/>♥ 6&nbsp; ✔️4
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div class="col-lg-6 col-xxl-4 mb-5">
                    <div class="card bg-light border-0 h-100">
                      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                          <i class="bi bi-collection"></i>
                        </div>
                        <h2 class="fs-4 fw-bold">강아지 목욕 얼마주기로 시켜야하나요?</h2>
                        <div class="mb-0">
                        <br/>♥ 8&nbsp; ✔️1
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div class="col-lg-6 col-xxl-4 mb-5">
                    <div class="card bg-light border-0 h-100">
                      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                          <i class="bi bi-collection"></i>
                        </div>
                        <h2 class="fs-4 fw-bold">강아지 귀에 물들어가도 되나요?</h2>
                        <div class="mb-0">
                        <br/>♥ 12&nbsp; ✔️ 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section class="third">
            <h3 class="title">Find My Pet</h3>
            <MissingContainer />
            {/* <div class="missingPet">
              <div class="missingPetImg"></div>
            </div>
            <div class="missingPet">
              <div class="missingPetImg"></div>
            </div>
            <div class="missingPet">
              <div class="missingPetImg"></div>
            </div>
            <div class="missingPet">
              <div class="missingPetImg"></div>
            </div>             */}
          </section>
        </MainPage>
      </body>
      {children}
    </>
  );
};

/*
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
*/
Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
