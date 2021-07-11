import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writePost, updatePost } from '../../redux/modules/missing_write';
import WriteActionButtons from '../components/missing/write/WriteActionButtons';
import Swal from "sweetalert2";

const WriteActionButtonsContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pet_name, contents, type, sex, missing_location, missing_date, image_url, born_year, latitude, longitude, post, postError, originalPostId } = useSelector(({ write }) => ({
    pet_name: write.pet_name,
    contents: write.contents,
    type: write.type,
    sex: write.sex,
    missing_location: write.missing_location,
    missing_date: write.missing_date,
    image_url: write.image_url,
    born_year: write.born_year,
    latitude: write.latitude,
    longitude: write.longitude,
    post: write.post,
    postError: write.postError,
    originalPostId: write.orginalPostId
  }));

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      const parm = originalPostId;
      dispatch(updatePost
        ({
          pet_name,
          contents,
          type,
          sex,
          missing_location,
          missing_date,
          longitude,
          latitude,
          image_url,
          born_year,
          id: originalPostId
        })
      );
      Swal.fire({
        icon: 'success',
        title: '등록 성공',
        text: '게시물이 수정되었습니다.',
        confirmButtonColor: '#798777'
      });
      router.push(`/missing/${parm}`)
      return;
    }

    if (
      !contents ||
      !pet_name ||
      !type ||
      !sex ||
      !born_year ||
      !missing_location ||
      !latitude ||
      !longitude ||
      !missing_date ||
      !image_url
    ) {
      Swal.fire({
        icon: 'error',
        title: '에러',
        text: '모든 정보를 입력해주세요.',
        confirmButtonColor: '#798777'
      });
      return;
    } else {
      console.log(contents, pet_name, type, sex, born_year, missing_location, latitude, longitude, missing_date)
      dispatch(
        writePost({ contents, pet_name, type, sex, born_year, missing_location, latitude, longitude, missing_date, image_url })
      );
      router.push('/missing');
      Swal.fire({
        icon: 'success',
        title: '등록 성공',
        text: '게시물이 등록되었습니다.',
        confirmButtonColor: '#798777'
      });
    }
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
    <WriteActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={originalPostId || null} />
  );
}

export default WriteActionButtonsContainer;
