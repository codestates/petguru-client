import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../../redux/modules/auth";
import { check } from '../../redux/modules/user';
import SignUpSignIn from "../../styles/SignUpSignIn";

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login, // form state를 로그인 form으로 설정
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));
  // 인풋 변경 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form:'login',
        key: name,
        value
      })
    );
  };
  // 폼 등록 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = form;
    dispatch(login({email, password}))
  }

  // 컴포넌트 첫 렌더링 => 폼 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      console.log(error);
      return;
    }
    if (auth) {
      alert('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      router.push('/home');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log(e);
      }
    }
  }, [router, user]);

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
              <form name="loginEmail" onSubmit={onSubmit}>
                <fieldset>
                  <legend>사용자 정보 입력</legend>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="user-email"
                    onChange={onChange}
                    value={form.email}
                    required
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="user-password"
                    onChange={onChange}
                    value={form.password}
                    required
                  />
                </fieldset>
                {error && <ErrorMessage>{error}</ErrorMessage>}
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
