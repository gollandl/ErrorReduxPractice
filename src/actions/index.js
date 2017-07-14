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
