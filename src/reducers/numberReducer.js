export default (state = [], action) => {
  switch (action.type) {
    case 'add':
      return
        action.payload + 1;
    default:
      return state;
  };
}
