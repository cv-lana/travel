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

  const basesGremyachinsk = () => {
    const lists = new ListBases('bases-gremyachinsk');

    getData().then(data => {
      lists.renderList(data.gremyachinsk);
    });
  };
  basesGremyachinsk();

  const basesKultushnaya = () => {
    const lists = new ListBases('bases-kultushnaya');

    getData().then(data => {
      lists.renderList(data.kultushnaya);
    });
  };
  basesKultushnaya();

  const basesLemasovo = () => {
    const lists = new ListBases('bases-lemasovo');

    getData().then(data => {
      lists.renderList(data.lemasovo);
    });
  };
  basesLemasovo();
};
export default renderLists;