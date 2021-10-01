function getRandomValue(min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));

  if(min > max) {
    const swap = max;
    max = min;
    min = swap;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomValue(5, 10);

function checkLengthString(string, maxLength) {
  return string.length < maxLength;
}

checkLengthString('test test test', 10);
