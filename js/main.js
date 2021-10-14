import {createPhoto} from './data.js';

const PHOTOS_COUNT = 25;

const photosArray = Array.from({length: PHOTOS_COUNT}, (_, index) => createPhoto(index));

console.log(photosArray);
