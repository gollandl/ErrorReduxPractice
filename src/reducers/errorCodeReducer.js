export default (state = 1, action) => {
  switch (action.type) {
    case 'setErrorCode':
      return Math.floor(Math.random() * 3) + 1;
    default:
      return state;
  };
}
