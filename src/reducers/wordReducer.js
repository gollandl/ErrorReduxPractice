export default (state = [], action) => {
  switch (action.type) {
    case 'upperCase':
      return action.payload.toUpperCase();
    case 'lowerCase':
      return action.payload.toLowerCase();
    default:
      return state;
  };
}
