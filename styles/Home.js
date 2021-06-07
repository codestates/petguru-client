import styled from "styled-components";


const MainPage = styled.div
`
.banner {
  position: relative;
	justify-content: center;
	min-height: 80vh;
	color: #798777;
	text-align: center;
}

.banner .backgroundImage{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: contain;
	z-index: -1;
}

.banner .backgroundImage:after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #f8ede3;
	opacity: 0.75;
}

.bannerImage {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  background-color: white;
  color: black;
  margin: 15px;
  font-size: 4em;
}

button {
  background-color: #798777;
  outling: none;
  appearance: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  cursor: default;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-image: initial;
  cursor: pointer;
  border: 0;
}

div {
  position: flex;
  padding-top: 20px;
  text-align: center;
}

.btn-login {
  position: flex;
  display: inline; 
  width: 30%;
  height: 52px;
  margin: 20px 50px 20px 50px;
	font: bold 20px 'Open Sans', sans-serif;
  color: white;
  background-color: #798777;
  border-radius: 26px;
}

.missingPet {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  height: 180px;
  width: 85%;
  background-color: grey;
  color: white;
  margin: 15px;
  font-size: 35px; 
  border-radius: 25px;
  padding: 15px;
  margin: 20px;
  text-indent: 200px;
  text-align: left;
}

.missingPetImg {
  padding: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-position: left;
  background-color: white;
  width: 160px;
  height: 160px;
  border-radius: 20px;
}




*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.pt-4 {
  padding: 25px 30px ;
}

.container {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}

.px-lg-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.row {

  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) / 2);
  padding-left: calc(var(--bs-gutter-x) / 2);
  margin-top: var(--bs-gutter-y);
}

.g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem;
  }

@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (min-width: 1400px) {
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(172, 90, 90, 0.125);
  border-radius: 0.25rem;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.border-0 {
  border: 0 !important;
}

.h-100 {
  height: 100% !important;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.text-center {
  text-align: center !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-lg-5 {
  padding: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

@media (min-width: 992px) {
  .pt-lg-0 {
    padding-top: 0 !important;
  }
}

.feature {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  font-size: 2rem;
}

.bg-primary {
  background-color: #414a4f !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.text-white {
  color: #fff !important;
}

.rounded-3 {
  border-radius: 0.3rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mt-n4 {
  margin-top: -1.5rem !important;
}

@media (min-width: 1200px) {
  .fs-4 {
    font-size: 1.5rem !important;
  }
}

.fw-bold {
  font-weight: 700 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

`

export default MainPage;