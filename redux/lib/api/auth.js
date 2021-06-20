import client from './client';

// 로그인
export const login = ({ email, password }) => client.post('/user/login', { email, password });
// export const login = async ({ email, password }) => {
//   const response = client.post('/user/login', { email, password });
//   console.log('서버로부터 받은 응답: ' ,response);
// }

// 구글 로그인
export const googleLogin = ({email, name, googleId}) => client.post('/user/auth/google');

export const register = ({ username, email, password }) => client.post('/user/signup', { username, email, password });

// 로그인 상태 확인
export const check = () => client.get('/user/check');

export const logout = () => client.post('/user/logout')