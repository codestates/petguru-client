import styled from "styled-components";


const MyPage = styled.div
`
.search {
	position: relative;
	justify-content: center;
	min-height: 50vh;
	color: #798777;
	text-align: center;
}

.search .backgroundImage{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: contain;
	background-color: #f8ede3;
	opacity: 1;
	z-index: -1;
}

.search .backgroundImage:after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #f8ede3;
	opacity: 0.5;
}
/* Style the side navigation */
.sidenav {
  width: 200px;
  position: fixed;
  padding-top: 125px;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f8ede3;
  overflow-x: hidden;
}


/* Side navigation links */
.sidenav a {
  color: #798777;
  padding: 16px;
  opacity: 0.9;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  display: block;
  opacity: 0.8;
}

/* Change color on hover */
.sidenav a:hover {
  opacity: 1;
}

/* Style the content */
.content {
  margin-left: 200px;
  padding-left: 20px;
}

`

export default MyPage;