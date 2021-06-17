import "../styles/globals.css";
import Footer from "../parts/components/Footer";
import PropTypes from "prop-types";
import wrapper from "../redux/configureStore";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);

/*
페이지에 공통인 레이아웃을 작성합니다.
페이지 전환시 레이아웃을 유지할 수 있습니다.,
페이지 전환시 상태값을 유지할 수 있습니다.
componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있습니다.
추가적인 데이터를 페이지로 주입시켜 주는게 가능합니다.
글로벌 CSS를 이곳에 선언합니다.
*/
