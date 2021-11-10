import {getMockPhotos} from './data.js';
import {openBigPicture} from './render-big-picture.js';

const PICTURES_COUNT = 25;
const blockPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const pictures = getMockPhotos(PICTURES_COUNT);
const pictureFragment = document.createDocumentFragment();

pictures.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.commentsCount;
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture').dataset.pictureId = picture.id;
  pictureFragment.appendChild(pictureElement);
});

blockPictures.appendChild(pictureFragment);

blockPictures.addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');
  if (picture) {
    evt.preventDefault();
    const photoId = parseInt(picture.dataset.pictureId, 10);
    const photo = pictures.find((x) => x.id === photoId);
    openBigPicture(photo);
  }
});

