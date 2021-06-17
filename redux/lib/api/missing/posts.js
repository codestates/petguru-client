import client from '../client';

export const writePost = ({ formData }) => {
  client.post('/api/missing/posts', { formData });
}

export const readPost = id => client.get(`api/missing/posts/${id}`);

export const listPosts = () => client.get('api/missing/posts');

export const updatePost = ({ id, title, contents, latitude, longitude, location, image_url, name, type, sex }) => client.put(`/api/posts/${id}`, { title, contents, latitude, longitude, location, image_url, name, type, sex });

export const removePost = id => client.delete(`/api/posts/${id}`);