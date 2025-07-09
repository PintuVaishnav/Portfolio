
(function () {
  "use strict";

  
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

 
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

 
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

 
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

 
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

 
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

 
  new PureCounter();

 
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });


  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

 
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

})();

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  const WEBprojects = {
    1: {
      images: [
        'assets/img/projects/Website-1.gif',
        'assets/img/projects/Website-1.1.png',
        'assets/img/projects/Website-1.11.png'
      ],
      category: 'Web Development',
      lang: 'HTML5,CSS,JAVASCRIPT',
      projectDate: '03 NOVEMBER, 2024',
      projectURL: 'https://insane-clothing.netlify.app/',
      description: 'The Insane-Clothing website, developed with HTML, CSS, and JavaScript, offers a responsive, visually appealing interface. Featuring smooth functionality and an intuitive user experience, it showcases clothing items with an emphasis on style and ease of navigation. This well-designed project ensures an engaging online shopping experience.',
      title: 'INSANE CLOTHING'
    }

    , 2: {
      images: [
        'assets/img/projects/Website-2.gif',
        'assets/img/projects/Website-2.1.png',
        'assets/img/projects/Website-2.2.png'
      ],
      category: 'Web development',
      lang: 'HTML5,CSS,JAVASCRIPT,PHP,MYSQL',
      projectDate: '29 SEPTEMBER, 2024',
      projectURL: 'https://bhavansvc.ac.in/index_sample.html',
      description: 'The College Website is a responsive and dynamic platform developed using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. It features an intuitive, well-designed UI for easy navigation by students, faculty, and visitors. An integrated admin panel allows authorized users to update and manage content, enhancing site flexibility and functionality. With database integration and device optimization, the website provides a seamless and engaging user experience for academic and administrative needs.',
      title: 'COLLEGE WEBSITE'
    }
    , 3: {
      images: [
        'assets/img/projects/Website-3.gif',
        'assets/img/projects/Website-3.1.png',
        'assets/img/projects/Website-3.2.png'
      ],
      category: 'Web Development',
      lang: 'HTML5,CSS,JAVASCRIPT',
      projectDate: '27 NOVEMBER, 2023',
      projectURL: 'https://nettflixlandpageclone.netlify.app',
      description: 'The Netflix Clone is a static landing page replicating the look and feel of Netflix, developed with HTML, CSS, and JavaScript. It features a visually appealing, non-responsive design that captures the essence of the original platform’s layout and style. This project focuses on UI accuracy for desktop views, showcasing popular shows, movies, and signup prompts for an authentic streaming service experience.',
      title: 'NETFILX CLONE'
    }
  };
  const APPprojects = {
    4: {
      images: [
        'assets/img/projects/app-22.gif',
        'assets/img/projects/app-22.1.gif',
        'assets/img/projects/app-22.2.gif',
      ],
      category: 'App Development',
      lang: 'XML,KOTLIN,APIS',
      projectDate: '27 AUGUST, 2023',
      projectURL: '../assets/vendor/SkyView.apk',
      description: 'The SKY-VIEW app is an Android-based weather application developed in Java. It provides real-time weather updates with details like temperature and sunrise/sunset times. Users can check conditions in any city by entering its name. The interface adapts visually to match the weather, enhancing usability and global accessibility.',
      title: 'SkyView'
    }
    , 5: {
      images: [
        'assets/img/projects/app-11.gif',
        'assets/img/projects/app-11.1.gif',
        'assets/img/projects/app-11.2.gif',
      ],
      category: 'App Development',
      lang: 'XML,JAVA,FIREBASE',
      projectDate: '15 SEPTEMBER, 2023',
      projectURL: '../assets/vendor/Note-Wise.apk',
      description: 'The Notes App is a Firebase-integrated, streamlined note-taking tool focused on simplicity and efficiency. Users can create, organize, and save notes with ease, and access them across devices. Features include advanced search, collaboration, customization, offline access, and automatic backups for data safety, making it an efficient and reliable tool for productivity.',
      title: 'Note-Wise'
    }
    , 6: {
      images: [
        'assets/img/projects/app-33.gif',
        'assets/img/projects/app-33.1.gif',
        'assets/img/projects/app-33.2.gif',
      ],
      category: 'App Development',
      lang: 'XML,JAVA,APIS',
      projectDate: '03 OCTOBER, 2023',
      projectURL: '../assets/vendor/FlappyBird.apk',
      description: 'The FLAPPY-BIRD app is an Android game developed in Java, aimed at providing a fun and enjoyable experience. Players control a bird, navigating it through tubes by tapping the screen. Each tube successfully avoided earns 2 points, with the game ending if the bird hits a tube or the ground. The app tracks and displays the users highest score, making it both challenging and rewarding.',
      title: 'Flappy Bird Game'
    }
  };

  const webproject = WEBprojects[projectId];

  if (webproject) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = webproject.images.map(img => `<div class="swiper-slide"><img src="${img}" alt=""></div>`).join('');

    document.querySelector('.portfolio-info ul').innerHTML = `
      <li><strong>Category</strong>: ${webproject.category}</li>
      <li><strong>Lang Used</strong>: ${webproject.lang}</li>
      <li><strong>Project date</strong>: ${webproject.projectDate}</li>
      <li><strong>Project URL</strong>: <a href="${webproject.projectURL}">WWW.${webproject.title}.COM</a></li>
    `;

    document.querySelector('.portfolio-description h2').textContent = webproject.title;
    document.querySelector('.portfolio-description p').textContent = webproject.description;

    if (window.Swiper) {
      new Swiper('.swiper', JSON.parse(document.querySelector('.swiper-config').textContent));
    }
  } else {
    console.error('Project not found');
  }


  const appproject = APPprojects[projectId];

  if (appproject) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = appproject.images.map(img => `<div class="swiper-slide"><img src="${img}" alt=""></div>`).join('');

    document.querySelector('.portfolio-info ul').innerHTML = `
    <li><strong>Category</strong>: ${appproject.category}</li>
    <li><strong>Techstack Used</strong>: ${appproject.lang}</li>
    <li><strong>Project date</strong>: ${appproject.projectDate}</li>
    <li><strong>Project URL</strong>: <a href="${appproject.projectURL}">${appproject.title}.apk</a></li>
  `;

    document.querySelector('.portfolio-description h2').textContent = appproject.title;
    document.querySelector('.portfolio-description p').textContent = appproject.description;

    if (window.Swiper) {
      new Swiper('.swiper', JSON.parse(document.querySelector('.swiper-config').textContent));
    }
  } else {
    console.error('Project not found');
  }
});