const initialState = { message: '' };

export default (state=initialState, action) => {
  switch (action.type) {
    case 'openPopUp':
      return {
        ...state,
        message: "Error",
      }
    default:
      return state;
  };
}
