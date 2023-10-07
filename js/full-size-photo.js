import { isEscKey } from './util.js';

const SHOWN_COMMENTS_PORTION = 5;

const fullSizePhotoModal = document.querySelector('.big-picture');
const fullSizePhotoModalCloseElement = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const btnShowMoreComments = document.querySelector('.comments-loader');
const shownCommentsElement = fullSizePhotoModal.querySelector('.social__comment-count').firstChild;

let shownCommentsCounter = 0;

const commentFragment = document.createDocumentFragment();

const onFullSizePhotoKeydown = (evt) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    fullSizePhotoModal.classList.add('hidden');
  }
};

const createComment = ({avatar, message, name}) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  commentFragment.append(comment);
};

const renderComments = (comments, quantity) => {
  console.log(shownCommentsCounter);
  for (shownCommentsCounter; shownCommentsCounter < quantity; shownCommentsCounter++){
    if (comments.length > shownCommentsCounter){
      console.log(shownCommentsCounter);
      createComment(comments[shownCommentsCounter]);
    } else {
      btnShowMoreComments.classList.add('hidden');
      break;
    }
  }
  commentsContainer.append(commentFragment);
  shownCommentsElement.textContent = `${shownCommentsCounter} из `;
};

const onBtnShowMoreCommentsClick = (comments) =>{
  renderComments(comments, shownCommentsCounter + SHOWN_COMMENTS_PORTION);
};

const openFullSizePhoto = ({url, description, likes, comments}) => {
  fullSizePhotoModal.classList.remove('hidden');
  commentsContainer.innerHTML = '';
  btnShowMoreComments.classList.remove('hidden');

  fullSizePhotoModal.querySelector('.big-picture__img img').src = url;
  fullSizePhotoModal.querySelector('.big-picture__img img').alt = description;
  fullSizePhotoModal.querySelector('.likes-count').textContent = likes;
  fullSizePhotoModal.querySelector('.comments-count').textContent = comments.length;
  renderComments(comments, SHOWN_COMMENTS_PORTION);

  btnShowMoreComments.onclick = (evt) =>{
    evt.preventDefault();
    onBtnShowMoreCommentsClick(comments);
  };

  body.classList.add('modal-open');
  document.addEventListener('keydown', onFullSizePhotoKeydown);
};

const closeFullSizePhoto = () => {
  fullSizePhotoModal.classList.add('hidden');
  shownCommentsCounter = 0;

  document.removeEventListener('keydown', onFullSizePhotoKeydown);
};

fullSizePhotoModalCloseElement.addEventListener('click', () => {
  closeFullSizePhoto();
});

export {openFullSizePhoto};
