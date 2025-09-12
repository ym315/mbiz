$(document).ready(function(){
//start    
    $('header').load('./menu.html header>div');
    $('footer').load('./menu.html footer>div');

    //메뉴
    $(document).on('click', '.menu-btn', function() {
        $('.menu-btn').toggleClass('open');
        $('.mobile-menu').toggleClass('open');
        $('.overlay').toggleClass('open');
        $('body').toggleClass('menu-open');
    });

    $(document).on('click', '.overlay', function () {
        $('.menu-btn').removeClass('open');
        $('.mobile-menu').removeClass('open');
        $('.overlay').removeClass('open');
        $('body').removeClass('menu-open');
    });
    function setVhUnit() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

  setVhUnit();
  window.addEventListener('resize', setVhUnit); 
    
//end    
})