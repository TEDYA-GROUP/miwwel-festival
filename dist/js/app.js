class App {

  constructor() {
    this.menuToggler = document.querySelector('.menu-toggler')
  }

  init() {
    if (this.menuToggler) {
      this.menuToggler.querySelector('.hamburger').addEventListener('click', () => {
        this.menuToggler.classList.add('show');
      })
      this.menuToggler.querySelector('.close').addEventListener('click', () => {
        this.menuToggler.classList.remove('show');
      })
    }
    
  }
}

const app = new App();
app.init();