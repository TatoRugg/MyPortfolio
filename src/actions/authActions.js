import { login, logout } from '../reducers/authReducer';

export const authenticate = (username, password) => (dispatch) => {
  if (username === 'admin' && password === 'password') {
    dispatch(login());
  } else {
    alert('Invalid credentials');
  }
};

export const signOut = () => (dispatch) => {
  dispatch(logout());
};
