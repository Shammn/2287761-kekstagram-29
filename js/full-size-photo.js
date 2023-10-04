
import { isEscKey } from './util.js';

const fullSizePhotoModal = document.querySelector('.big-picture');
const fullSizePhotoModalCloseElement = document.querySelector('.big-picture__cancel');

const onFullSizePhotoKeydown = (evt) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    fullSizePhotoModal.classList.add('hidden');
  }
};

function openFullSizePhoto () {
  fullSizePhotoModal.classList.remove('hidden');

  document.addEventListener('keydown', onFullSizePhotoKeydown);
}

function closeFullSizePhoto () {
  fullSizePhotoModal.classList.add('hidden');

  document.removeEventListener('keydown', onFullSizePhotoKeydown);
}

fullSizePhotoModalCloseElement.addEventListener('click', () => {
  closeFullSizePhoto();
});

export {openFullSizePhoto};
