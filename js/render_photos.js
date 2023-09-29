import {createGallery} from './data.js';

const photosContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const gallery = createGallery();

const galleryFragment = document.createDocumentFragment();

const renderPhoto = ({url, description, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  galleryFragment.append(photoElement);
};

const renderGallery = () => {
  gallery.forEach((photo) => (renderPhoto(photo)));
  photosContainer.append(galleryFragment);
};

export {renderGallery};
