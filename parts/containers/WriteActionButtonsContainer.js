import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writePost, updatePost } from '../../redux/modules/missing_write';
import WriteActionButtons from '../components/missing/write/WriteActionButtons';

const WriteActionButtonsContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { name, title, contents, type, sex, location, missing_date, images, born_year, post, postError, originalPostId } = useSelector(({ write }) => ({
    name: write.name,
    title: write.title,
    contents: write.contents,
    type: write.type,
    sex: write.sex,
    location: write.location,
    missing_date: write.missing_date,
    images: write.images,
    born_year: write.born_year,
    post: write.post,
    postError: write.postError,
    originalPostId: write.originalPostId,
  }));

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost
        ({
          name,
          title,
          contents,
          type,
          sex,
          location,
          missing_date,
          images,
          born_year,
          id: originalPostId
        })
      );
      return;
    }
    dispatch(
      writePost({
        name,
        title,
        contents,
        type,
        sex,
        location,
        missing_date,
        images,
        born_year
      })
    );
  };

  // 포스트 등록 취소
  const onCancel = () => {
    router.back();
  }

  // 성공 혹은 실패 시 해야 할 작업
  useEffect(() => {
    if (post) {
      const { id } = post;
      router.push(`/missing/${id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [post, postError]);
  return (
    <WriteActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={!originalPostId} />
  );
}

export default WriteActionButtonsContainer;
