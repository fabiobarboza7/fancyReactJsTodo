export const signInRequest = data => {
  return {
    type: 'USER_SIGNIN',
    user: data.user,
    token: data.token,
  };
};

// export const signInRequest = (email, password) => {
//   return { type: '@auth/SIGN_IN_REQUEST', payload: { email, password } };
// };

// export const signInSuccess = (token, user) => {
//   return { type: '@auth/SIGN_IN_SUCCESS', payload: { token, user } };
// };

// export const signInFailure = () => {
//   return { type: '@auth/SIGN_IN_FAILURE' };
// };
