import client from './client';

// 로그인
export const login = ({ email, password }) => client.post('/user/login');

// 구글 로그인
export const googleLogin = ({email, name, googleId}) => client.post('/user/oauth');

export const register = ({ username, email, password }) => client.post('/user/signup', { username, email, password });

// 로그인 상태 확인
export const check = () => client.get('/user/check');

export const logout = () => client.post('/user/logout')