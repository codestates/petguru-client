import styled from "styled-components";

const SignUpSignIn = styled.div
`
  padding: 158px 0 86px;
  background-color: #f8ede3;
  div {
    display: block;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p.main-txt {
    margin-bottom: 12px;
    font-size: 23px;
    color: #798777;
    line-height: 1.24;
    letter-spacing: -0.5px;
  }
  p.sub-txt {
    color: #798777;
    line-height: 1.4;
  }
  .user-input {
    margin: 32px auto;
  }
  form {
    display: block;
    margin-top: 0em;
    margin-bottom: 20px;
  }
  fieldset {
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
    border-width: 2px;
    border-style: groove;
    border-color: threedface;
    border-image: initial;
  }
  caption,
  legend {
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
    visibility: hidden;
  }
  legend {
    display: block;
    padding-inline-start: 2px;
    padding-inline-end: 2px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
  }
  input {
    font-size: 15px;
    color: #38ada9;
    line-height: 1;
    letter-spacing: -0.4px;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }
  .user-input label {
    display: block;
    font-size: 15px;
    color: #8d95a0;
    line-height: 1.17;
  }

  .user-input input[type="text"],
  .user-input input[type="email"],
  .user-input input[type="confirmPassword"],
  .user-input input[type="password"] {
    width: 100%;
    height: 37px;
    font-size: 16px;
    border: 0;
    border-bottom: 0.5px solid #c9cdd3;
    box-sizing: border-box;
  }

  .user-input .user-email + label,
  .user-input .user-password + label {
    margin-top: 18px;
    font-family: "Roboto";
  }

  button {
    background-color: transparent;
    outline: none;
    appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }

  button,
  label {
    cursor: pointer;
  }

  img,
  fieldset,
  button {
    border: 0;
  }

  .login .btn-login {
    width: 100%;
    height: 52px;
    margin-top: 24px;
    font-size: 17px;
    font-weight: bold;
    color: #f7f7f7;
    background-color: #798777;
    border-radius: 26px;
  }

  .login .find-info {
    text-align: center;
  }

  .login .find-info > button {
    font-size: 13px;
  }

  .login .find-info button.btn-signup {
    position: relative;
  }



  ul {
    display: block;
    list-style-type: disc;
    /* margin-block-start: 1em; */
    /* margin-block-end: 1em; */
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    /* padding-inline-start: 40px; */
  }

  ol,
  ul {
    list-style: none;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .login .sns-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto 24px;
  }

  .register-btn {
    position: absolute;
    left: 17px;
    bottom: 12px;
    width: 384px;
    height: 51px;
    font-size: 17px;
    font-weight: bold;
    background-color: #f0f0f3;
    color: #bcc1c8;
    border-radius: 6px;
  }
  .contentsWrap {
    padding: 158px 0 86px;
    background-color: #f8f8f8;
  }

  .contentsBox {
    overflow: hidden;
    position: relative;
    width: 450px;
    min-height: 738px;
    padding: 50px 60px;
    margin: 0 auto;
    background-color: #f7f7f7;
    border: 0.5px solid #c9cdd3;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .btnLogin {
    width: 100%;
    height: 52px;
    margin-top: 24px;
    font-size: 17px;
    font-weight: bold;
    color: #f7f7f7;
    background-color: #ff5a5c;
    border-radius: 26px;
  }
`;

export default SignUpSignIn;
