// pages에 없는 path 입력할 경우 404에러 발생
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>
}

/**
 * 500 errors are handled both client-side and server-side by the Error component. If you wish to override it, define the file pages/_error.js and add the following code:
 * ---------------------------------------------------------------------------------------------------------------------------
  More Advanced Error Page Customizing

  function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
* ---------------------------------------------------------------------------------------------------------------------------
 */