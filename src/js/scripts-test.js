
/* Change background header
****************************/
// window.addEventListener("scroll", function() {
//   let viewportWidth = window.innerWidth
//   if (viewportWidth <= 414) {
//     let windowScroll = window.scrollY
//     if (windowScroll >= 300) {
//       HEADER.classList.add('header--dark')
//     }
//     else {
//       HEADER.classList.remove('header--dark')
//     }
//   }
// })


// (function ($) {
// "use strict" // Start of use strict

//   /* Initialize Siema carousel
//   *****************************/
//   var runCarousel = function () {
//     if ($('body').attr('class') == 'productpage') {
//       const siema = new Siema({
//         selector: '.siema',
//         perPage: {
//           320: 3, // 3 items for viewport wider than 800px
//           768: 7, // 3 items for viewport wider than 1240px
//         },
//         duration: 2000,
//         easing: 'ease',
//         loop: true
//       })
//       setInterval( function() {
//         siema.next()
//       }, 4000)
//     }
//   }

//   /* Smooth scrolling using jQuery easing
//   ****************************************/
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
//     if (
//       location.pathname.replace(/^\//, "") ==
//           this.pathname.replace(/^\//, "") &&
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash)
//       target = target.length
//         ? target
//         : $("[name=" + this.hash.slice(1) + "]");
//       if (target.length) {
//         if ($('body').hasClass('freeze')) {
//           $('body').removeClass('freeze')
//         }
//         $("html, body").animate(
//           {
//             scrollTop: target.offset().top - 72,
//           },
//           1000,
//           "easeInOutExpo"
//         );
//         return false
//       }
//     }
//   });

//   /* Closes responsive menu when a scroll trigger link is clicked
//   ****************************************************************/
//   $(".js-scroll-trigger").click(function () {
//     let window_width = $(window).width()
//     $(".navbar-collapse").collapse("hide")
//     if (window_width < 1024 &&  $("#secNav").hasClass("navbar--show")) {
//       $("#secNav").removeClass("navbar--show")
//     }
//   })

//   /* Activate scrollspy to add active class to navbar items on scroll
//   ********************************************************************/
//   $("body").scrollspy({
//     target: "#mainNav",
//     offset: 74,
//   });

//   /* navbarToggleShrink
//   **********************/
//   var navbarToggleShrink = function() {
//     let top_limit = 100
//     let window_width = $(window).width()
//     if (window_width >= 1024) {
//       if ($("#mainNav").offset().top > top_limit) {
//         $("#mainNav").addClass("navbar--shrink")
//         $("#secNav").addClass("navbar--show")
//       }
//       else {
//         $("#mainNav").removeClass("navbar--shrink")
//         $("#secNav").removeClass("navbar--show")
//       }
//     }
//   }

//   /* Check the use of navbar--show and freeze class
//   **************************************************/
//   function checkWidth() {
//     let window_size    = $(window).width()
//     let button_toggler = $('.navbar-toggler')
//     let sec_nav        = $('#secNav')
//     let body           = $('body')
//     if (window_size < 1024 && button_toggler.attr("aria-expanded") == 'false' && sec_nav.hasClass("navbar--show")) {
//       sec_nav.removeClass("navbar--show")
//     }
//     if (body.hasClass('freeze') && window_size >= 1024) {
//       body.removeClass('freeze')
//     }
//     else {
//       return false
//     }
//   } 
  
//   /* Show and hide the secondary navbar on mobile
//   ************************************************/
//   $('.navbar-toggler').on('click', function() {
//     $('#secNav').toggleClass('navbar--show')
//     $('body').toggleClass('freeze')
//   })

//   /* copyrightBarToggle
//   **********************/
//   var copyrightBarToggle = function() {
//     let scroll_reference_object  = $('#mainNav')
//     let top_limit                = 100
//     let botton_limit             = 200 //it can be change for the top value of an element close to the botton part of the dom
//     if (scroll_reference_object.offset().top > top_limit ) {
//       if ($(window).scrollTop() + $(window).height() >= $(document).height() - botton_limit) {
//         $('#copyRights').fadeIn('slow')
//       }
//       else {
//         $('#copyRights').fadeOut('slow')
//       }
//     }
//     else {
//       $('#copyRights').fadeIn('slow')
//     }
//   }

//   /* runOnScroll
//   ***************/
//   var runOnScroll = function() {
//     navbarToggleShrink()
//     copyrightBarToggle()
//   }
  
//   /* Collapse the navbar when page is scrolled
//   *********************************************/
//   $(window).scroll(runOnScroll)

//   /* Execute on load
//   *******************/
//   $(window).on('load', function() {
//     checkWidth()
//     runCarousel()
//     // Collapse now if page is not at top
//     runOnScroll()
//   })

//   /* Execute when resize
//   ***********************/
//   $(window).resize( function() {
//     checkWidth()
//     navbarToggleShrink()
//   })

// })(jQuery) // End of use strict

  /* Show and hide the text
  **************************/
  // $(".tab__content .tab__button").click(function() {
  //   let totalHeight = 0
  //   let btn         = $(this);
  //   let content     = btn.parent();
  //   let texts       = content.find("p");
  //   // Measure how tall inside should be by adding together heights of all inside paragraphs
  //   texts.each(function() {
  //     totalHeight += $(this).outerHeight();
  //   });
  //   content
  //     // Set height to prevent instant jumpdown when max height is removed
  //     .css({"height": content.height(),"max-height": 9999})
  //     .animate({"height": totalHeight})
  //     // Remove the background
  //     .removeClass('tab__content--dts');
  //   // Fade out the button
  //   btn.fadeOut();
  //   // Prevent jump-down
  //   return false;      
  // });