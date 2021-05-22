import Link from 'next/link';
import PropTypes from 'prop-types'

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
        <div style={{ marginLeft: "75%" }}>
          <Link href="/">
            <a>로그아웃</a>
          </Link>
        </div>
        <div style={{ marginLeft: "1%" }}>
          <Link href="/mypage">
            <a>마이페이지</a>
          </Link>
        </div>
      </div>
      {children}
    </>
  );
}

NavigationBar.propTypes = {
  children: PropTypes.node.isRequired,
};
/* 
임시 네비게이션바
UI 찾아보고 적용해야 함
*/