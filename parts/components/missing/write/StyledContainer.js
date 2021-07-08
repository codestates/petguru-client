import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding-right: 80px;
  padding-left: 80px;


  .registerTitle {
    text-align: left !important;
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
  }

  .wrapper {
    display: flex;
    position: fixed;
    width: 80%;
    height: 64%;
    margin: auto;
    margin-top: 9rem;
    top: 50px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    justify-content: space-between;
  }

  .petRegister {
    width: 50%;
    float: left;
    height: 700px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px 0 rgb(96 96 96 / 16%),
      2px 10px 23px 0 rgb(96 96 96 / 13%);
    padding: 40px;
  }

  #map {
    width: 50%;
    float: left;
    height: 700px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px 0 rgb(96 96 96 / 16%),
      2px 10px 23px 0 rgb(96 96 96 / 13%);
  }

  .inputTitle,
  .inputName,
  .inputSpecies,
  .inputSex,
  .inputArea,
  .inputDate,
  .inputBorn,
  .inputFile,
  .inputDescription {
    width: 95%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  .submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputSubmit:hover {
    background-color: #0076b6;
  }

  label {
    padding: 12px 12px 12px 0px;
    display: inline-block;
  }

  .col25 {
    float: left;
    width: 25%;
    text-align: left;
    margin-top: 5px;
  }

  .col75 {
    float: left;
    width: 70%;
    margin: 10px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .petRegisterText {
    font-size: 14px;
    color: white;
    margin-left: 15px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 50%);
    opacity: 0.8;
  }

  .inputTitle:focus,
  .inputName:focus,
  .inputSpecies:focus,
  .inputSex:focus,
  .inputArea:focus,
  .inputDate:focus,
  .inputFile:focus,
  .inputBorn:focus,
  .inputDescription:focus {
    outline: 1px solid #000000;
    box-shadow: 0 0 0 1.8pt #000000;
  }
`;

export default StyledContainer;