import ListBases from "./listBases.js";
import getData from './getData.js';

const renderLists = () => {
  const basesGoryachinsk = () => {
    const lists = new ListBases('#bases-goryachinsk');

    getData().then(data => {
      lists.renderList(data.bases.goryachinsk);
    });
  };
  basesGoryachinsk();

};
export default renderLists;