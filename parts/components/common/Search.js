import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 40%;
  margin: 10px 0 10px 0;
`;

const SearchBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 4px solid #111d5e;
  border-radius:10px 0 0 10px ;
  border-right: none;
  outline: none;
  font-size: 20px;
  color: tomato;
  background: none;
`;

const SearchButton = styled.button`
  text-align: center;
  height: 51px;
  width: 60px;
  outline: none;
  cursor: pointer;
  border: 4px solid #111d5e;
  border-radius: 0 10px 10px 0 ;
  border-left: none;
  background: none;
  font-size: 20px;
  border-left: 4px solid #111d5e;
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