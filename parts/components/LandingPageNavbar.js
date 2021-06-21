import PropTypes from "prop-types";
import Link from "next/link";

const LandingPageNavBar = ({ children, props }) => {
  return (
    <>
      <header>
        <h2>
          <a>
            <Link href="/">
              <img src="img/logo.png" class="logo" />
              {/* <div class="logo-box">
                <img src="img/logo.png" class="logo" />
              </div> */}
            </Link>
          </a>
        </h2>
        <nav>
          <li>
            <a>
              <Link href="/login">Login</Link>
            </a>
          </li>
          <li>
            <a>
              <Link href="">Ko/En</Link>
            </a>
          </li>
        </nav>
      </header>
      {children}
    </>

    /*
    <>   
        <div className="nav" style={{ marginTop: "30px", display: "flex" }}>
          <div style={{ backgroundColor: "red", marginLeft: "3%" }}>
            <Link href="/">
              <a>PetGuru</a>
            </Link>
          </div>
          <div style={{ marginLeft: "70%" }}>
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </div>
          <div style={{ marginLeft: "5%" }}>Ko/En</div>
        </div>       
        {children}
    </>
*/
  );
};

LandingPageNavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingPageNavBar;
