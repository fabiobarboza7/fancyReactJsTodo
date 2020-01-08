export default (state = [], action) => {
  switch (action.type) {
    case 'USER_STATUS':
      console.log(action);
      return { user: action.user };

    default:
      return state;
  }
};
