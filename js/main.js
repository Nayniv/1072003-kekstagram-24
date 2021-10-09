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

checkLengthString('test test test', 10);

const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

const PHOTOS_COUNT = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (index) => ({
  id: ++index,
  url: `photos/${index}.jpg`,
  description: 'описание фотографии',
  likes: getRandomNumber(15, 200),
  comments: new Array(createComment(index)),
});

const photosArray = Array.from({length: PHOTOS_COUNT}, (_, index) => createPhoto(index));

console.log(photosArray);
