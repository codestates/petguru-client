import Head from 'next/head'
import LandingPageNavbar from '../src/components/LandingPageNavbar'


export default function LandingPage() {
  return (
    <>
      <Head>
        <title>펫그루 | Welcome</title>
      </Head>
      <LandingPageNavbar />
      <h1>펫그루 랜딩페이지입니다.</h1>
    </>
  )
}
