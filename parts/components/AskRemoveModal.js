import React from 'react';
import AskModal from './common/AskModal';

const AskRemoveModal = ({visible, onConfirm, onCancel}) => {
  return (
    <AskModal
      visible={visible}
      title="게시물 삭제"
      description="게시물을 정말 삭제하시겠습니까?"
      confirmText="삭제"
      cancelText="취소"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}

export default AskRemoveModal;
