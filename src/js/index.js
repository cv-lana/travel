import preload from './modules/preload.js';
import toggleModal from './modules/toggleModal.js';
import toggleMenu from './modules/toggleMenu.js';
import slider from './modules/slider.js';
import scrollLinks from './modules/scrollLinks.js';
import validateForm from './modules/validateForm.js';
import { showBlockTours, showBlockDirections } from './modules/functions.js';
import Fancybox from "@fancyapps/ui";
import tourBases from './modules/tourBases.js';
import renderLists from './modules/renderLists.js';
import renderCards from './modules/renderCards.js';
import tabs from './modules/tabs.js';

preload();
toggleModal();
toggleMenu();
slider();
scrollLinks();
showBlockTours();
showBlockDirections();
validateForm();
tourBases();
renderLists();
renderCards();
tabs();