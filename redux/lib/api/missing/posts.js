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

export const readPost = id => client.get(`/missing/posts/${id}`)

export const listPosts = (lastId) => client.get(`/missing/posts?${lastId || 0}`)

export const updatePost = ({ id, title, contents, latitude, longitude, location, image_url, name, type, sex }) => client.put(`/posts/${id}`, { title, contents, latitude, longitude, location, image_url, name, type, sex });

export const removePost = id => client.delete(`/posts/${id}`);