import {getMockPhotos} from './data.js';

const PICTURES_COUNT = 25;
const blockPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const pictures = getMockPhotos(PICTURES_COUNT);
const pictureFragment = document.createDocumentFragment();

pictures.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.countComments;
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureFragment.appendChild(pictureElement);
});

blockPictures.appendChild(pictureFragment);
