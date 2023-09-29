let generatedPhotoId = 0;
let generatedCommentsId = 0;


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getPhotoId = () => (generatedPhotoId += 1);

const getCommentId = () => (generatedCommentsId += 1);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getPhotoId, getCommentId, getRandomArrayElement};
