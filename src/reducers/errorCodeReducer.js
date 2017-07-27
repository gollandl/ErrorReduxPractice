import data from '../mock/errorMessagesArray.json';

export default (state = 1, action) => {
  switch (action.type) {
    case 'setErrorCode':
      var code = Math.floor(Math.random() * 3) + 1;
      return {
        code,
        message: data[code].Message,
      }
    default:
      return state;
  };
}
