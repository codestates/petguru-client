import Link from 'next/link';

export default function NavigationBar() {
  return (
    <div className="nav" style={{marginTop:"30px", display:"flex"}}>
      <div style={{ backgroundColor: "red", marginLeft: "3%" }}>
        <Link href="/"><a>PetGuru</a></Link>
      </div>
      <div style={{ marginLeft: "5%" }}>
        <Link href="/q&a"><a>Q&A</a></Link>
      </div>
      <div style={{ marginLeft: "1%" }}>
        <Link href="/missing"><a>실종신고</a></Link>
      </div>
      <div style={{marginLeft: "600px"}}>
        <input placeholder="검색어를 입력하세요." style={{width:"300px"}}/>
      </div>
      <div style={{ marginLeft: "40%" }}>로그인</div>
      <div style={{ marginLeft: "1%" }}>
        <Link href="/mypage"><a>마이페이지</a></Link>
      </div>
    </div>
  )
}

/* 
임시 네비게이션바
UI 찾아보고 적용해야 함
*/