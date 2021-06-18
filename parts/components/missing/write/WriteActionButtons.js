import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";

const WriteActionButtonsBlock = styled.div`
  position: flex;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  button + button {
    margin-left: 80px;
  }
`;

/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정 후 서로 간의 여백 지정 */
const StyledButton = styled(Button)`
  height: 50px;
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan onClick={onPublish}>
        {isEdit ? "수정" : "등록"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
