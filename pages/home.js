import Head from 'next/head'
import HomeNavbar from '../src/components/HomeNavbar'


export default function LandinPage() {
  return (
    <>
      <Head>
        <title>펫그루 | Welcome</title>
      </Head>
      <HomeNavbar />
      <h1>펫그루 메인페이지입니다.</h1>
    
    </>
  )
}

