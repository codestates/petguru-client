import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import SignUpSignIn from "../../styles/SignUpSignIn";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  register,
} from "../../redux/modules/auth";
import { useRouter } from "next/router";
import styled from "styled-components";
import { initialize } from "../../redux/modules/missing_write";
import Swal from 'sweetalert2';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const Register = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      Swal.fire(
        '환영해요!',
        '회원가입 성공',
        'success'
      )
      router.push("/login");
    }
  }, [auth])

  ;

  useEffect(() => {
    if (user) {
      router.push('/login');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  })  

  useEffect(() => {
    if (authError) {
      console.log(authError);
      if (authError.response.status === 409) {
        setError("이미 존재하는 이메일입니다.");
        return;
      }
      setError("회원가입 실패");
      return;
    }
  }, [authError]);

  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, passwordConfirm } = form;
    if ([username, email, password, passwordConfirm].includes("")) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(
        changeField({ form: "register", key: "passwordConfirm", value: "" }),
      );
      return;
    }
    dispatch(register({ username, email, password }));
  };

  return (
    <>
      <Head>
        <title>펫구루 | Sign Up</title>
      </Head>
      <SignUpSignIn>
        <header>
          <h2>
            <a>
              <Link href="/">
                <img src="img/logo.png" class="logo" />
              </Link>
            </a>
          </h2>
        </header>
        <div className="contentsBox">
          <div className="login">
            <p className="main-txt">
              안녕하세요!
              <br />
              전문가와 함께 하는 PetGuru입니다.
            </p>
            <p className="sub-txt">
              PetGuru에서 제공하는 서비스를 위해
              <br />
              회원가입 해주세요.
            </p>
            <div className="user-input">
              <form name="loginEmail" onSubmit={onSubmit}>
                <fieldset>
                  <legend>사용자 정보 입력</legend>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="username"
                    className="user-email"
                    placeholder="이름"
                    onChange={onChange}
                    value={form.username}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="user-email"
                    placeholder="이메일"
                    onChange={onChange}
                    value={form.email}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="user-password"
                    placeholder="비밀번호"
                    onChange={onChange}
                    value={form.password}
                  />
                  <label htmlFor="passwordConfirm`">Confirm Password</label>
                  <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    className="user-password"
                    placeholder="비밀번호 확인"
                    onChange={onChange}
                    value={form.passwordConfirm}
                  />
                </fieldset>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <button type="submit" className="btn-login">
                  회원가입
                </button>
                <Link href="/login">
                  <button type="button" className="btn-login">
                    로그인하러 가기
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </SignUpSignIn>
    </>
  );
};

export default Register;
