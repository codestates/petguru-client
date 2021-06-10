import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../redux/modules/missing_write';
import MissingWrite from '../components/missing/MissingWrite';

const MissingWriteContainer = () => {
  const dispatch = useDispatch();
  const { name, title, contents, type, sex, location, missing_date, images, born_year } = useSelector(({ write }) => ({
    name: write.name,
    title: write.title,
    contents: write.contents,
    type: write.type,
    sex: write.sex,
    location: write.location,
    missing_date: write.missing_date,
    images: write.images,
    born_year: write.born_year
  }));
  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <MissingWrite onChangeField={onChangeField} name={name} title={title} contents={contents} type={type} sex={sex} location={location} mssing_date={missing_date} images={images} born_year={born_year} />
  );
}

export default MissingWriteContainer;
