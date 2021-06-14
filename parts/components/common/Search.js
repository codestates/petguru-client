import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 50%;
  margin: 30px;
  padding: 20px;
`;

const SearchBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 3px solid #414a4f;
  border-radius:10px 0 0 10px ;
  border-right: none;
  outline: none;
  font-size: 20px;
  color: black;
  background: white;
`;

const SearchButton = styled.button`
  text-align: center;
  height: 51px;
  width: 60px;
  outline: none;
  cursor: pointer;
  border: 3px solid #414a4f;
  border-radius: 0 10px 10px 0 ;
  border-left: none;
  background: white;
  font-size: 20px;
  border-left: 3px solid #414a4f;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchBox>
        <SearchInput placeholder="검색어를 입력하세요." type="text"/>
        <SearchButton>검색</SearchButton>
      </SearchBox>
    </SearchContainer>
  );
}

export default Search;

/*
<div class="container">
  <div class="search-box">
      <input type="text" class="search-input" placeholder="Search..">

      <button class="search-button">
        <i class="fas fa-search"></i>
      </button>
  </div>
</div>
https://codepen.io/ramesh123-lang/pen/ZEQMbmb
*/