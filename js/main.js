'use strict';

var PHOTO = 25;
var photos = [];
var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var getRandomInt = function () {};

var shuffleArray = function () {};

var addPhotos = function () {
  for (var i = 0; i < PHOTO; i++) {
    photos.push({
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'Фотография котика',
      likes: getRandomInt(15, 200),
      comments: shuffleArray(comments).slice(0, getRandomInt(comments.length))
    });
  }
};
