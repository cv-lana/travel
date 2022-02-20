import ListBases from "./listBases.js";
import getData from './getData.js';

const renderLists = () => {
  const basesGoryachinsk = () => {
    const lists = new ListBases('bases-goryachinsk');

    getData().then(data => {
      lists.renderList(data.goryachinsk);
    });
  };
  basesGoryachinsk();

  const basesBaikalpriboy = () => {
    const lists = new ListBases('bases-baikalPriboy');

    getData().then(data => {
      lists.renderList(data.baikalPriboy);
    });
  };
  basesBaikalpriboy();
};
export default renderLists;