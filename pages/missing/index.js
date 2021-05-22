import Head from 'next/head'
import NavigationBar from '../../components/Navbar'

export default function MissingMain() {
  return (
    <>
      <Head>
        <title>펫그루 | 실종신고</title>
      </Head>
      <NavigationBar>
        <h1>펫그루 실종신고 페이지 메인</h1>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <button style={{margin:"10px"}}>실종신고</button>
          <input type="text" placeholder="검색어를 입력하세요." style={{margin:"10px"}}/>
          <section
            style={{
              backgroundColor: "#eee",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>지도로 보기</h3>
            <div className="list">
              <div className="list-item" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px"
              }}>
                <div style={{backgroundColor:"red", width: "500px", height:"300px"}}>사진</div>
                <div style={{backgroundColor:"yellowgreen", width:"1000px", height:"300px"}}>내용</div>
              </div>
              <div className="list-item" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px"
              }}>
                <div style={{backgroundColor:"red", width: "500px", height:"300px"}}>사진</div>
                <div style={{backgroundColor:"yellowgreen", width:"1000px", height:"300px"}}>내용</div>
              </div>
              <div className="list-item" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px"
              }}>
                <div style={{backgroundColor:"red", width: "500px", height:"300px"}}>사진</div>
                <div style={{backgroundColor:"yellowgreen", width:"1000px", height:"300px"}}>내용</div>
              </div>
              <div className="list-item" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px"
              }}>
                <div style={{backgroundColor:"red", width: "500px", height:"300px"}}>사진</div>
                <div style={{backgroundColor:"yellowgreen", width:"1000px", height:"300px"}}>내용</div>
              </div>
            </div>
          </section>
        </div>
      </NavigationBar>
    </>
  );
}