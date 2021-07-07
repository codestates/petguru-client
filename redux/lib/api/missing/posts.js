import client from '../client';

export const writePost = ({contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date, image_url}) => {
  client.post('/missing/posts', { contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date, image_url })
}

export const readPost = id => client.get(`/missing/posts/${id}`)

export const listPosts = (lastId) => client.get(`/missing/posts`)
// ?${lastId || 0}`)

export const updatePost = ({ id, contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date /*image_url*/ }) => client.put(`/missing/posts/${id}`, { contents, pet_name, type, sex, born_year, location, latitude, longitude, missing_date /*image_url*/ });

export const removePost = id => client.delete(`/missing/posts/${id}`);