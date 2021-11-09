function getRandomNumber(min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));

  if(min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLengthString(string, maxLength) {
  return string.length < maxLength;
}

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

export {getRandomNumber, checkLengthString, isEscapeKey, isEnterKey};
