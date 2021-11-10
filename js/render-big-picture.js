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
const bodyElement = document.querySelector('body');

const getCommentArray = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = 35;
  commentAvatar.height = 35;
  commentElement.appendChild(commentAvatar);

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;
  commentElement.appendChild(commentText);

  return commentElement;
};

const renderBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');

  bigPictureImg.src = picture.url;
  pictureLikesCount.textContent = picture.likes;
  commentsCount.textContent = picture.commentsCount.length;

  const commentsMarkup = picture.comments.map((x) => getCommentArray(x));
  const commentsFragment = document.createDocumentFragment();
  commentsMarkup.forEach((comment) => commentsFragment.appendChild(comment));
  pictureComment.innerHTML = '';
  pictureComment.appendChild(commentsFragment);

  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bodyElement.classList.add('modal-open');
  pictureDescription.textContent = picture.description;
};

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onPictureEscKeydown);
};

const openBigPicture = (picture) => {
  renderBigPicture(picture);

  document.addEventListener('keydown', onPictureEscKeydown);
};

buttonCloseBigPicture.addEventListener('click', closeBigPicture);

export {openBigPicture};
