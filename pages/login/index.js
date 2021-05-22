import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>펫그루 | Login</title>
      </Head>
      <h1>펫그루 로그인페이지입니다.</h1>
      <div>
        <form>
          <div>
            Email : <input name="email" type="email" placeholder="email" />
          </div>
          <div>
            Password :{" "}
            <input name="password" type="password" placeholder="password" />
          </div>
          <div>
            <button name="Login">
              <Link href="/home">
                <a>Login</a>
              </Link>
            </button>
            <button name="geust">Geust Login</button>
          </div>
          <div>
            <button name="google">Continue with Google</button>
          </div>
          <Link href="/register"><a>아직 회원이 아니십니까?</a></Link>
        </form>
      </div>
    </>
  );
}
