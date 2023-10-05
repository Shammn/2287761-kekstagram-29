import {createGallery} from './data.js';
import{openFullSizePhoto} from './full-size-photo.js';

const photosContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const gallery = createGallery();

const galleryFragment = document.createDocumentFragment();

const createPhoto = ({url, description, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);


  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openFullSizePhoto({url, description, likes, comments});
  });
  galleryFragment.append(photoElement);
};

const renderGallery = () => {
  gallery.forEach((photo) => {
    createPhoto(photo);
  });
  photosContainer.append(galleryFragment);
};

export {renderGallery};
