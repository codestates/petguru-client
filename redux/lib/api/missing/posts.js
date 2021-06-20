import client from '../client';

export const writePost = ({contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date}) => {
  // client.post('/missing/posts', formData)
  //   .then(res => {
  //     console.log(res);
  // });
  client.post('/missing/posts', {contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date /*image_url*/})
}

export const readPost = id => client.get(`/missing/posts/${id}`);

export const listPosts = () => client.get('/missing/posts');

export const updatePost = ({ id, title, contents, latitude, longitude, location, image_url, name, type, sex }) => client.put(`/posts/${id}`, { title, contents, latitude, longitude, location, image_url, name, type, sex });

export const removePost = id => client.delete(`/posts/${id}`);