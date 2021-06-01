import Head from "next/head";
import Container from "../../components/Container";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/user_actions";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

// 리덕스
// 스토어=> 디스패치 => 액션 => 리듀서 => 스토어

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [Error, setError] = useState('');

  const onChangeUsername = useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  });
  const onChangeConfrimPassword = useCallback((e) => {
    console.log(e.target.value);
    setConfirmPassword(e.target.value);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("password: ", password);
    console.log("confirmPassword", confirmPassword);
    if (password !== confirmPassword) {
      return alert("입력한 비밀번호가 다릅니다!");
    }
    let body = {
      username,
      email,
      password,
    };
    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        alert(res.payload.message);
        router.push("/login");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    });
  };

  return (
    <>
      <Head>
        <title>펫구루|회원가입</title>
      </Head>
      <Container>
        <div className="contentsBox">
          <div className="login">
            <p className="main-txt">
              안녕하세요!
              <br />
              전문가와 함께 하는 펫구루입니다.
            </p>
            <p className="sub-txt">
              펫구루에서 제공하는 서비스를 위해
              <br />
              회원가입 해주세요.
            </p>
            <div className="user-input">
              <form name="loginEmail" onSubmit={handleSubmit}>
                <fieldset>
                  <legend>사용자 정보 입력</legend>
                  <label htmlFor="email">Name</label>
                  <input
                    type="text"
                    name={username}
                    id="userEmail"
                    className="user-email"
                    onChange={onChangeUsername}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name={email}
                    id="userEmail"
                    className="user-email"
                    onChange={onChangeEmail}
                  />
                  <label htmlFor="userPassword">Password</label>
                  <input
                    type="password"
                    name={password}
                    className="user-password"
                    onChange={onChangePassword}
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name={confirmPassword}
                    className="user-password"
                    onChange={onChangeConfrimPassword}
                  />
                </fieldset>
                <button type="submit" className="btn-login">
                  회원가입
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
