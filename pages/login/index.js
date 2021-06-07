import React, { useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/modules/auth";
import SignUpSignIn from "../../styles/SignUpSignIn";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let body = {
      email,
      password,
    };

    dispatch(loginUser(body)).then((res) => {
      // 상태코드가 200이면 로그인 되도록 수정
      if (res.payload.loginSuccess) {
        console.log('1');
        router.push("/home");
        alert(res.payload.message);
      } else {
        alert(res.payload.message);
      }
    });
  };

  return (
    <>
      <Head>
        <title>펫구루 | Login</title>
      </Head>
      <SignUpSignIn>
        <header>
          <h2>
            <a><Link href="/">Petguru</Link></a>
          </h2>
        </header>
        <div className="contentsBox">
          <div className="login">
            <p className="main-txt">
              PetGuru와 함께
              <br />
              모든 반려 생활 궁긍즘을 해결해요!
            </p>
            <p className="sub-txt">
              PetGuru에서 제공하는 서비스를 위해
              <br />
              로그인 해주세요.
            </p>
            <div className="user-input">
              <form name="loginEmail" onSubmit={handleSubmit}>
                <fieldset>
                  <legend>사용자 정보 입력</legend>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    className="user-email"
                    onChange={onChangeEmail}
                    required
                  />
                  <label htmlFor="userPassword">Password</label>
                  <input
                    type="password"
                    name="userPassword"
                    className="user-password"
                    onChange={onChangePassword}
                    required
                  />
                </fieldset>
                <button type="submit" className="btn-login">
                  로그인
                </button>
                <button type="button" className="btn-login">
                Google 계정으로 로그인
              </button>
              <button type="button" className="btn-login">
              <Link href="/home">
                Guest 로그인
              </Link>
              </button>
              </form>

            </div>
            <div className="find-info">
              <Link href="/register">
                  <button type="button" className="btn-signup">
                    이메일로 회원가입
                  </button>
              </Link>
            </div>
            <div className="introduce"></div>
          </div>
        </div>
      </SignUpSignIn>
    </>
  );
}
