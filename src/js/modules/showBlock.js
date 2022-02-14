class ShowBlock {
  constructor(wrapper, btnShow, btnMinimize) {
    this.wrapper = document.querySelector(wrapper);
    this.btnShow = document.querySelector(btnShow);
    this.btnMinimize = document.querySelector(btnMinimize);
  }

  openBlock() {
    if (this.btnShow) {
      this.btnShow.addEventListener('click', () => {
        this.wrapper.classList.add('open');
        this.btnShow.classList.add('hidden');
        this.btnMinimize.classList.add('active');
      });
    }
  }

  closeBlock() {
    if (this.btnMinimize) {
      this.btnMinimize.addEventListener('click', () => {
        this.wrapper.classList.remove('open');
        this.btnShow.classList.remove('hidden');
        this.btnMinimize.classList.remove('active');
      });
    }
  }

  init() {
    this.openBlock();
    this.closeBlock();
  }
}
export default ShowBlock;