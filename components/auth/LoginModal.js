import PropTypes from 'prop-types'

const LoginModal = () => {
  return (
    <div className="modal">
      <button>X</button>
      <form className="login-form">
        <h2>로그인</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

LoginModal.propTypes = {

};

export default LoginModal;