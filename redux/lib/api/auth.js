import client from './client';

// 로그인
export const login = ({ email, password }) => client.post('/api/user/login');

// 구글 로그인
export const googleLogin = ({email, name, googleId}) => client.post('api/user/oauth');

export const register = ({ username, email, password }) => client.post('/api/user/signup', { username, email, password });

// 로그인 상태 확인
export const check = () => client.get('/api/user/check');

export const logout = () => client.post('/api/user/logout')