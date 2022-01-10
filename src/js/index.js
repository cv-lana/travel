import preload from './modules/preload.js';
import toggleModal from './modules/toggleModal.js';
import toggleMenu from './modules/toggleMenu.js';
import playVideo from './modules/playVideo.js';
import slider from './modules/slider.js';
import { showBlockTours, showBlockDirections } from './modules/functions.js';

preload();
toggleModal();
toggleMenu();
playVideo();
slider();
showBlockTours();
showBlockDirections();