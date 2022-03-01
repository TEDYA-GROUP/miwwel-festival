class App {

  constructor() {
    this.menuToggler = document.querySelector('.menu-toggler')
    this.menus = document.querySelectorAll('.header .navbar-nav a')
    this.scrollTopButton = document.querySelector('.scroll-top-button')
    this.settingButtons = document.querySelectorAll('.theme-setting button')
    this.dropdowns = document.querySelectorAll('.dropdown-toggle');
  }

  init() {
    if (this.menuToggler) {
      this.menuToggler.querySelector('.hamburger').addEventListener('click', () => {
        this.menuToggler.classList.add('show');
      })
      this.menuToggler.querySelector('.close').addEventListener('click', () => {
        this.menuToggler.classList.remove('show');
      })

      // add inspiration-images to instagram feed
      this.instagramFeedObserver('.elfsight-app-6a5fb8cb-5f22-4e1c-bd87-78ad86af2856')
    }

    if (this.dropdowns.length > 0) [
      this.dropdowns.forEach(item => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          let parent = item.closest('.dropdown-list')
          if (parent) {
            if (parent.classList.contains('show')) {
              parent.classList.remove('show')
            } else {
              parent.classList.add('show')
              parent.querySelector('.dropdown-toggle').addEventListener('mouseover', () => {
                parent.classList.add('show')
              })
              parent.querySelector('.dropdown-toggle').addEventListener('mouseleave', () => {
                parent.classList.remove('show')
              })
              parent.querySelector('.dropdown-list-items').addEventListener('mouseover', () => {
                parent.classList.add('show')
              })
              parent.querySelector('.dropdown-list-items').addEventListener('mouseleave', () => {
                parent.classList.remove('show')
              })
            }
          }
        })
      })
    ]
    
    if (this.menus.length > 0) {
      this.menus.forEach(item => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          let targetBloc = document.querySelector(item.getAttribute('href'))
          if (targetBloc) {
            this.scrollTo(targetBloc)
          }
          
        })
      })
    }

    if (this.settingButtons.length > 0) {
      this.settingButtons.forEach(item => {
        if (item.classList.contains('close')) {
          item.addEventListener('click', () => {
            document.querySelector('.theme-setting').style.display = 'none'
          })
        }
        if (item.classList.contains('with-counter')) {
          item.addEventListener('click', () => {
            document.querySelector('.counter-wrapper').classList.add('active-counter')
          })
        }
        if (item.classList.contains('without-counter')) {
          item.addEventListener('click', () => {
            document.querySelector('.counter-wrapper').classList.remove('active-counter')
          })
        }
      })
    }

    if (this.scrollTopButton) {
      window.addEventListener('scroll', (event)=> {
        if (window.scrollY <= 400) {
          this.scrollTopButton.style.display = 'none'
        } else {
          this.scrollTopButton.style.display = 'flex'
        }
      })

      this.scrollTopButton.addEventListener('click', event => {
        event.preventDefault();
        this.scrollTo(document.body)
      })
    }
  }

  instagramFeedObserver(target) {
    let targetElement = document.querySelector(target)
    let observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type == 'childList') {
          setTimeout(() => {
            let imageContainer = targetElement.querySelector('.eapps-instagram-feed-posts-view')
            imageContainer.classList.add('inspiration-images')
            targetElement.querySelector('.eapps-link').style.display = 'none'
          }, 2000)
        }
      })
    });

    observer.observe(targetElement, { attributes: true, childList: true, characterData: true })
  }

  scrollTo(to) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: to.offsetTop,
    })
  }
}

const app = new App();
app.init();