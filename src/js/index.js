import preload from './modules/preload.js';
import toggleModal from './modules/toggleModal.js';
import toggleMenu from './modules/toggleMenu.js';
import slider from './modules/slider.js';
import scrollLinks from './modules/scrollLinks.js';
import { showBlockTours, showBlockDirections } from './modules/functions.js';
import Fancybox from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

preload();
toggleModal();
toggleMenu();
slider();
scrollLinks();
showBlockTours();
showBlockDirections();