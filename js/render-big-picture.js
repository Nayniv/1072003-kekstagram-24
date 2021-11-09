import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const pictureLikesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const pictureComment = bigPicture.querySelector('.social__comments');
const pictureDescription = bigPicture.querySelector('.social__caption');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const buttonCloseBigPicture = bigPicture.querySelector('.big-picture__cancel');

const renderBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  bigPictureImg = picture.url;
  pictureLikesCount.textContent = picture.likes;
  commentsCount.textContent = picture.commentsCount;
  pictureDescription.textContent = picture.description;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPictureEscKeydown);
};

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (evt, picture) => {
  evt.preventDefault();
  renderBigPicture(picture);

  document.addEventListener('keydown', onPictureEscKeydown);
};

buttonCloseBigPicture.addEventListener('click', closeBigPicture);

export {openBigPicture};
