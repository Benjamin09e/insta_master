import axios from 'axios';

const API_URL = 'http://localhost:5000/insta-api/likes'; 

export const createLike = async (likeData) => {
  const response = await axios.post(API_URL, likeData);
  return response.data;
};

export const updateLike = async (id, likeData) => {
  const response = await axios.put(`${API_URL}/${id}`, likeData);
  return response.data;
};

export const deleteLike = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const getLikeById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getAllLikes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
