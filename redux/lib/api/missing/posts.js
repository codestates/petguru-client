import client from '../client';

export const writePost = ({ title, contents, latitud, longitude, location, image_url, name, type, sex }) => {
  client.post('/api/missing/posts', { title, contents, latitud, longitude, location, image_url, name, type, sex });
}