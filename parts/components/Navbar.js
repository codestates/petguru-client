import PropTypes from 'prop-types'
import Link from 'next/link';
import { useSelector } from 'react-redux';


const Navbar = ({ children, props }) => {
  // const { user } = useSelector(({ user }) => ({
  //   user: user.user
  // }));
  return (
    <>
        <header>
          <h2>
            <a><Link href="/home">Petguru</Link></a>
          </h2>
          <nav>
            <li>
              <a><Link href="/mypage">MyPage</Link></a>
            </li>
            <li>
              <a><Link href="/">LogOut</Link></a>
            </li>
          </nav>
        </header>
      {children}
    </>
  )
}
/*
export default function NavigationBar({children}) {
  return (
    <>
      <div className="nav" style={{ marginTop: "30px", display: "flex" }}>
        <div style={{ backgroundColor: "red", marginLeft: "3%" }}>
          <Link href="/home">
            <a>PetGuru</a>
          </Link>
        </div>
        <div style={{ marginLeft: "5%" }}>
          <Link href="/q&a">
            <a>Q&A</a>
          </Link>
        </div>
        <div style={{ marginLeft: "1%" }}>
          <Link href="/missing">
            <a>실종신고</a>
          </Link>
        </div>
        <div style={{ marginLeft: "60%" }}>
          <Link href="/mypage">
            <a>마이페이지</a>
          </Link>
        </div>
        <div style={{ marginLeft: "5%" }}>
          <Link href="/">
            <a>로그아웃</a>
          </Link>
        </div>
      </div>
      {children}
    </>
  );
}
*/

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};
/* 
임시 네비게이션바
UI 찾아보고 적용해야 함
*/

export default Navbar;