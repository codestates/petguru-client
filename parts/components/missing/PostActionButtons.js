import React from 'react';
import styled from 'styled-components';

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #868e96;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &: hover {
    background: #f1f3f5;
    color: #1098ad;
  }

  & + & {
    margin-left: 0.25rem;
  }
`;

const PostActionButtons = ({onEdit}) => {
  return (
    <PostActionButtonsBlock>
      <ActionButton onEdit={onEdit}>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </PostActionButtonsBlock>
  );
}

export default PostActionButtons;
