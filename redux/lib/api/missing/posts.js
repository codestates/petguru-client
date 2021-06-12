import client from '../client';

export const writePost = ({ title, contents, latitude, longitude, location, image_url, name, type, sex, born_year }) => {
  client.post('/api/missing/posts', { title, contents, latitude, longitude, location, image_url, name, type, sex, born_year });
}

export const readPost = id => client.get(`api/missing/posts/${id}`);

export const listPosts = () => client.get('api/missing/posts');

export const updatePost = ({ id, title, contents, latitude, longitude, location, image_url, name, type, sex }) => client.put(`/api/posts/${id}`, { title, contents, latitude, longitude, location, image_url, name, type, sex });