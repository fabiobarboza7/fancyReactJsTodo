import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  id: null,
  avatar: null,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      console.log(state, 'signin state action');
      return produce(state, draft => {
        draft.token = action.token;
        draft.id = action.user.id;
        draft.signed = true;
        draft.avatar = action.user.avatar;
      });

    default:
      return state;
  }
};
