export const setErrorCode = () => {
  return {
    type: 'setErrorCode',
  }
};


export const upperCase = (inputWord) => {
  return {
    type: 'upperCase',
    payload: inputWord
  };
};

export const lowerCase = (inputWord) => {
  return {
    type: 'lowerCase',
    payload: inputWord
  };
};

export const add = (count) => {
  return {
    type: 'add',
    payload: count
  };
};

export const openPopUp = message => {
  return {
    type: 'openPopUp',
    payload: {
      message
    }
  }
}
