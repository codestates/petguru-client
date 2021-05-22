import PropTypes from 'prop-types'
import Link from 'next/link'

const LandingNavigationBar = ({ children, props }) => {
  
  return (
    <>
      <div className="nav" style={{ marginTop: "30px", display: "flex" }}>
        <div style={{ backgroundColor: "red", marginLeft: "3%" }}>
          <Link href="/">
            <a>PetGuru</a>
          </Link>
        </div>
        <div style={{ marginLeft: "80%" }}>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </div>
        <div style={{ marginLeft: "10px" }}>Ko/En</div>
      </div>
      {children}
    </>
  );
}

LandingNavigationBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingNavigationBar;