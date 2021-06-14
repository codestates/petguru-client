import styled from "styled-components";

const MissingPage = styled.div
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
	opacity: 0.5;
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

`

export default MissingPage;