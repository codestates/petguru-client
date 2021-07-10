import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../redux/modules/missing_write';
import MissingWrite from '../components/missing/write/MissingWrite';

const MissingWriteContainer = () => {
  const dispatch = useDispatch();
  const { pet_name, contents, type, sex, missing_location, missing_date, image_url, born_year, latitude, longitude } = useSelector(({ write }) => ({
    pet_name: write.pet_name,
    contents: write.contents,
    type: write.type,
    sex: write.sex,
    missing_location: write.missing_location,
    missing_date: write.missing_date,
    image_url: write.image_url,
    born_year: write.born_year
  }));
  const { post } = useSelector(({ post }) => ({
    post: post.post
  }))
  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <MissingWrite onChangeField={onChangeField} pet_name={pet_name} contents={contents} type={type} sex={sex} missing_location={missing_location} mssing_date={missing_date} image_url={image_url} born_year={born_year} latitude={latitude} longitude={longitude} post={post}/>
  );
}

export default MissingWriteContainer;
