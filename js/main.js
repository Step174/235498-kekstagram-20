'use strict';

var PHOTO = 25;
var MAX_COMMENT = 8;
var MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var NAMES = ['Артём', 'Ворсонофий', 'Клавдия', 'Василиск'];

var Likes = {
  MIN: 15,
  MAX: 200
};

var Avatar = {
  MIN: 1,
  MAX: 6
};

var photos = [];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var shuffleArray = function (a) {
  var j;
  var x;
  var i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

var addComments = function () {
  var comments = [];
  for (var i = 0; i < getRandomInt(1, MAX_COMMENT); i++) {
    comments.push({
      avatar: 'img/avatar-' + getRandomInt(Avatar.MIN, Avatar.MAX) + '.svg',
      message: shuffleArray(MESSAGES).slice(0, getRandomInt(1, 2)),
      name: NAMES[getRandomInt(0, NAMES.length - 1)]
    });
  }
  return comments;
};

var addPhotos = function () {
  for (var i = 0; i < PHOTO; i++) {
    photos.push({
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'Фотография котика',
      likes: getRandomInt(Likes.MIN, Likes.MAX),
      comments: addComments()
    });
  }
};
addPhotos();


var picturesContainer = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


var getPictureElement = function (photos) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = photos.url;
  pictureElement.querySelector('.picture__likes').textContent = photos.likes;
  pictureElement.querySelector('.picture__comments').textContent = photos.comments.length;

  return pictureElement;
};


var renderPictures = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < photos.length; i++) {
    fragment.appendChild(getPictureElement(photos[i]));
  }

  picturesContainer.appendChild(fragment);
};

renderPictures();
