import axios from 'axios';

const API_URL = "http://localhost:4000"

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/missing/list`);

  return response.data;
}

export const getPostById = async (id) => {
  const response = await axios.get(`${API_URL}/missing/list/${id}`);

  return response.data;
}

export const addPost = async () => {
  const response = await axios.post(`${API_URL}/missing`);

  return response.data;
}