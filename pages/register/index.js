import styles from '../../styles/Register.module.css'
import Link from 'next/link'

const Register = () => {
  return (
    <>
      <h1>회원가입 페이지입니다.</h1>
      <form>
        <form
          className="register-form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>회원가입</h2>
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password Check"
            className={styles.input}
          />
          <Link href="/login">
            <a>
              <input type="submit" value="Register" className={styles.input} />
            </a>
          </Link>
        </form>
      </form>
    </>
  ); 
}

export default Register;