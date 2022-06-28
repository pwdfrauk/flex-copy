
  // scroll function 
  let header = document.querySelector('header');
  let mobileMenuIcon = document.querySelector('.ws-header-mobile-icon');
  let menuIcon = document.querySelector('.ws-header-mobile-icon .icon svg');
  let topMenu = document.querySelector('.ws-top-header-menu-area');
  let logoImg = document.querySelector('.ws-header-logo');
  let megaMenuButton = document.querySelector('.mega-menu-button');
  let megaMenuContent = document.querySelector('.ws-mega-menu-content-area');
  let headerCartBtn = document.querySelector('.ws-header-cart-btn');
  let headerAjaxCartModal = document.querySelector('.ws-cart-ajax-section');
  let mobileMenuCloseBtn = document.querySelector('.mobile-menu-colse-btn');
  let headerSearchIcon = document.querySelector('.header-search-icon');
  let headerSearchForm = document.querySelector('.ws-header-search-form');
  let headerSearchFieldClose = document.querySelector('.header-input-field-close');

 
  var sticky = header.offsetTop;
  var mobileScreen = window.screen.width;
  var mobileIconLine = false;
//  scroll affect apply for without mobile screen 
  if(mobileScreen > 576 ) {
    window.onscroll = function() { myFunction() };
  } else  {
    header.classList.add("sticky");
  }

  // header on scroll add sticky header 
  function myFunction() {
    if (window.pageYOffset > sticky) {
      mobileMenuIcon.style.display = 'block'
      logoImg.style.width = '90px'
      logoImg.style.margin = 'auto'
      header.classList.add("sticky");
      topMenu.classList.add('ws-top--menu-hide-on-scroll');
    } else {
      mobileMenuIcon.style.display = 'none'
      topMenu.classList.remove('ws-top--menu-show');
      topMenu.classList.remove('ws-top--menu-hide-on-scroll');
      logoImg.style.width = '135px'
      logoImg.style.margin = 'unset'
      header.classList.remove("sticky");
    }
  }

  // mobile menubar open 
  function mobileMenuOpen() {
    topMenu.classList.add('ws-top-header-menu-area-open');
  }
   // mobile menubar open 
   function mobileMenuClose() {
    topMenu.classList.remove('ws-top-header-menu-area-open');
  }

//  <path d="M52.83,50,96.41,6.41a2,2,0,0,0-2.82-2.82L50,47.17,6.41,3.59A2,2,0,0,0,3.59,6.41L47.17,50,3.59,93.59a2,2,0,1,0,2.82,2.82L50,52.83,93.59,96.41a2,2,0,0,0,2.82-2.82Z"></path>

  function topMenuToggle() {
    if(mobileScreen > 576 ) {
      topMenu.classList.toggle('ws-top--menu-show');
      menuIconPathDataReplace()
    } else if(mobileScreen < 576) {
      mobileMenuOpen()
    }
  }
  

  // replace menu icon to close icon 
  function menuIconPathDataReplace() {
    let barIconData ='<g id="menu"><path d="M95,17.75H5a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"></path><path d="M95,52H5a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z">\</path><path d="M95,86.25H5a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"></path></g>'
    let closeIconData = '<g><path d="M52.83,50,96.41,6.41a2,2,0,0,0-2.82-2.82L50,47.17,6.41,3.59A2,2,0,0,0,3.59,6.41L47.17,50,3.59,93.59a2,2,0,1,0,2.82,2.82L50,52.83,93.59,96.41a2,2,0,0,0,2.82-2.82Z"></path></g>'
    if(topMenu.classList.contains("ws-top--menu-show")) {
     menuIcon.innerHTML = "";
      menuIcon.insertAdjacentHTML('afterbegin', closeIconData);
    } else if(topMenu.classList.contains("ws-top--menu-show") === false) {
      menuIcon.innerHTML = "";
      console.log(topMenu.classList.contains("ws-top--menu-show"))
      menuIcon.insertAdjacentHTML('afterbegin', barIconData);
    }
  }

  function headerSearchFieldShow() {
    headerSearchForm.classList.add('header-search-field-show');
  }
  function headerSearchInputClose() {
    headerSearchForm.classList.remove('header-search-field-show');
  }

  // header search input field hide or show on mobile menu 
  if(mobileScreen < 576) {
    if(mobileIconLine) {
      headerSearchIcon.addEventListener('click', (e)=> {
        e.preventDefault();
        headerSearchFieldShow()
      })
      headerSearchFieldClose.addEventListener('click', (e)=> {
        e.preventDefault();
        headerSearchInputClose()
      })
    }
    
  }
 


// header mobile icon click showing navbar 
mobileMenuIcon.addEventListener('click', ()=> {
   topMenuToggle()
})

// mobile menu close in click
mobileMenuCloseBtn.addEventListener('click', ()=>{
   mobileMenuClose();
})

// header Mega menu header hover affect 
  megaMenuButton.addEventListener('mouseover', ()=> {
    megaMenuContent.style.display = 'flex'
  })
  megaMenuButton.addEventListener('mouseout', ()=> {
    megaMenuContent.style.display = 'none'
  })


  // mega menu content hover affect 
  megaMenuContent.addEventListener('mouseover', ()=>{
    megaMenuContent.style.display = 'flex'
  })
  megaMenuContent.addEventListener('mouseout', ()=> {
    megaMenuContent.style.display = 'none'
  })


  // header ajax cart btn hover affect 
  headerCartBtn.addEventListener('mouseover', ()=>{
    headerAjaxCartModal.classList.add('ws-show-header-ajax-modal')
  })
  headerCartBtn.addEventListener('mouseout', ()=> {
    headerAjaxCartModal.classList.remove('ws-show-header-ajax-modal')
  })


   // header ajax modal hover affect 
   headerAjaxCartModal.addEventListener('mouseover', ()=>{
    headerAjaxCartModal.classList.add('ws-show-header-ajax-modal')
  })
  headerAjaxCartModal.addEventListener('mouseout', ()=> {
    headerAjaxCartModal.classList.remove('ws-show-header-ajax-modal')
  })
 
