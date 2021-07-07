import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormData from "form-data";
import { writePost, updatePost } from '../../redux/modules/missing_write';
import WriteActionButtons from '../components/missing/write/WriteActionButtons';

const WriteActionButtonsContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pet_name, contents, type, sex, location, missing_date, /*image_url*/ born_year, latitude, longitude, post, postError, originalPostId } = useSelector(({ write }) => ({
    pet_name: write.pet_name,
    contents: write.contents,
    type: write.type,
    sex: write.sex,
    location: write.location,
    missing_date: write.missing_date,
    // image_url: write.image_url,
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
          location,
          missing_date,
          longitude,
          latitude,
          // image_url,
          born_year,
          id: originalPostId
        })
      );
      ('게시물 수정이 완료됐습니다.');
      router.push(`/missing/${parm}`)
      return;
    }

    // const formData = new FormData();
    // console.log(contents, name, type, sex, born_year, location, latitude, longitude, missing_date, images);
    // formData.append('contents', contents);
    // formData.append("name", name);
    // formData.append("type", type);
    // formData.append("sex", sex);
    // formData.append("born_year", born_year);
    // formData.append("location", location);
    // formData.append("latitude", latitude);
    // formData.append("longitude", longitude);
    // formData.append("missing_date", missing_date);
    // formData.append("images", images);
    // for (let value of formData.values()) {
    //   console.log(value);
    // }
    // 두 개의 라우터로 나누어서

    if (
      !contents ||
      !pet_name ||
      !type ||
      !sex ||
      !born_year ||
      !location ||
      !latitude ||
      !longitude ||
      !missing_date
      // !image_url
    ) {
      ('모든 정보를 입력해주세요.');
      return;
    } else {
      console.log(contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date)
      dispatch(
        // writePost(formData)
        writePost({ contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date /*image_url*/ })
      );
      ('게시물이 등륵되었습니다.')
      router.push('/missing');
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
