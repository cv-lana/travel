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

  const basesListvyanka = () => {
    const lists = new ListBases('bases-listvyanka');

    getData().then(data => {
      lists.renderList(data.listvyanka);
    });
  };
  basesListvyanka();

  const basesMaksimiha = () => {
    const lists = new ListBases('bases-maksimiha');

    getData().then(data => {
      lists.renderList(data.maksimiha);
    });
  };
  basesMaksimiha();

  const basesPosolskoe = () => {
    const lists = new ListBases('bases-posolskoe');

    getData().then(data => {
      lists.renderList(data.posolskoe);
    });
  };
  basesPosolskoe();

  const basesSuhaya = () => {
    const lists = new ListBases('bases-suhaya');

    getData().then(data => {
      lists.renderList(data.suhaya);
    });
  };
  basesSuhaya();

  const basesTurka = () => {
    const lists = new ListBases('bases-turka');

    getData().then(data => {
      lists.renderList(data.turka);
    });
  };
  basesTurka();

  const basesUstBarguzin = () => {
    const lists = new ListBases('bases-ustBarguzin');

    getData().then(data => {
      lists.renderList(data.ustBarguzin);
    });
  };
  basesUstBarguzin();

  const basesChivyrkui = () => {
    const lists = new ListBases('bases-chivyrkuiskyZaliv');

    getData().then(data => {
      lists.renderList(data.chivyrkuiskyZaliv);
    });
  };
  basesChivyrkui();

  const basesEnhaluk = () => {
    const lists = new ListBases('bases-enhaluk');

    getData().then(data => {
      lists.renderList(data.enhaluk);
    });
  };
  basesEnhaluk();
};
export default renderLists;