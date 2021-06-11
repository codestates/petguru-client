import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '../../parts/components/common/Button';
import Search from '../../parts/components/common/Search';
import MissingContainer from '../../parts/containers/MissingContainer';
import NavigationBar from '../../parts/components/Navbar'

export default function MissingMain() {
  const router = useRouter();

  const post = () => {
    router.push('/missing/write')
  }
  return (
    <>
      <Head>
        <title>펫구루 | 실종신고</title>
      </Head>
      <NavigationBar>
        <div style={{ display: "flex", justifyContent: "center", marginTop:"20px"}}>
          <Search />
        </div>
        <Button onClick={post} style={{marginLeft:"4.5%"}}>실종 신고</Button>
        <MissingContainer />
      </NavigationBar>
    </>
  );
}