import client from './client';

// 로그인
export const login = ({ email, password }) => client.post('/api/user/login');

export const register = ({ username, email, password }) => client.post('/api/user/signup', { username, email, password });

// 로그인 상태 확인
export const check = () => client.get('/api/user/check');

export const logout = () => client.post('/api/user/logout')