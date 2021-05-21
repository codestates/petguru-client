import Link from 'next/link';

export default function LandingPageNavbar() {
    return (
      <div className="nav" style={{marginTop:"30px", display:"flex"}}>
        <div style={{ backgroundColor: "white", color: "green", marginLeft: "3%" }}>
          <Link href="/"><a>PetGuru</a></Link>
        </div>
        <div style={{ marginLeft: "80%" }}>
          <Link href="/login"><a>Login</a></Link>
        </div>
        <div style={{ marginLeft: "2% "}}>한/영</div>
      </div>
    )
  }