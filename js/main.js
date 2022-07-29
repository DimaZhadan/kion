//Promotion
const crossIcon = document.querySelector('.cross__icon');
if (crossIcon) {
   const promotion = document.querySelector('.poromotion__container');
   crossIcon.addEventListener('click', function (e) {
      promotion.classList.add('_hiden');

   })
}

if (crossIcon) {
   const chebgeHeight = document.getElementById('_chengeheight');
   crossIcon.addEventListener('click', function (e) {
      chebgeHeight.classList.add('_chengeheight');

   })
}

if (crossIcon) {
   const chebgeHeight = document.getElementById('_chengeres');
   crossIcon.addEventListener('click', function (e) {
      chebgeHeight.classList.add('_chengeheight');

   })
}

if (crossIcon) {
   const chebgeHeight = document.getElementById('_chengesup');
   crossIcon.addEventListener('click', function (e) {
      chebgeHeight.classList.add('_chengeheight');

   })
}

if (crossIcon) {
   const chebgeHeight = document.getElementById('_chengeabout');
   crossIcon.addEventListener('click', function (e) {
      chebgeHeight.classList.add('_chengeheight');

   })
}

//меню с выпадающим списком

let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener('click', function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         })
      }
   }

} else {
   document.body.classList.add('_pc');
}

// меню бургер

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuList = document.querySelector('.menu__list');
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_activete');
      menuList.classList.toggle('_activete');
   })
}
