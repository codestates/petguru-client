import client from '../client';

export const writePost = ({contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date}) => {
  // client.post('/missing/posts', formData)
  //   .then(res => {
  //     console.log(res);
  // });
  client.post('/missing/posts', { contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date /*image_url*/ })
    .then(res => {
      console.log('게시글 정보:', res.data);
      console.log(res.message);
    })
}

export const postImage = ({ data }) => {
  console.log(data);
  client.post('/missing/images', {data})
}

export const readPost = id => client.get(`/missing/posts/${id}`)

export const listPosts = (lastId) => client.get(`/missing/posts?${lastId || 0}`)

export const updatePost = ({ id, contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date /*image_url*/ }) => client.put(`/missing/posts/${id}`, { contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date /*image_url*/ });

export const removePost = id => client.delete(`/missing/posts/${id}`);