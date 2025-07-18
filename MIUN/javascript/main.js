const Miunsinit = (function () {
    "use strict";
    var Window = $(window);
    var skillWidgets = $('.skill-circle');
    var limit = 335;
    var Testimoni = $('#slide-2');
    var Burger = $('.kalpax-burger-menu');
    var Body = $('body');
    var MenuContent = $('.menuContent');
    var Goup = $('.goup');
    var submobilemenu = $('.submenulink');
    var MainHead = $('.main-kalpaxheader');
    var Progress = $('.progress');
    var Vlink = $('.vlink');
    var testimonialtwo = $('#clienttestimonial');
    var Wrapload = $('.wrap-load');
    var popupImage = $(".popup-image");
    var portfoliogrid = $('#porfolio-warp');
    var portfolioFilter = $('.filter li');
    var imagezoom = $('.img-popup-btn');
    var videoPopup = $(".video-popup");
    var Form = $('#contactform');
    var Modalpopup = $(".modal");

    Burger.click(function () {
        if (!Burger.hasClass('cross')) {
            Burger.addClass('cross');
            Burger.css({ 'color': '#fff' });
            MenuContent.fadeIn(300);
            Body.addClass('showmenu')
        } else {
            Burger.removeClass('cross');
            MenuContent.fadeOut(300);
            Burger.css({ 'color': '#fff' });
            Body.removeClass('showmenu')
        }
    });
    //init contact form  -------
    const subform = function () {
        Form.validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                firstname: {
                    required: true,
                    minlength: 5
                },
                lastname: {
                    required: true,
                    minlength: 5
                },
                budget: {
                    required: true
                },
                comment: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: 'Check your email input'
                },
                budget: {
                    required: 'Check again your budget'
                },
                firstname: {
                    required: 'Please check your first name input'
                },
                lastname: {
                    required: 'Please check your last name input'
                },
                comment: {
                    required: 'Please write something for us'
                }
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "https://mail-sage.vercel.app/mail",
                    data: $(form).serialize(),
                    success: function (msg) {
                        if (msg == 'OK') {
                            Modalpopup.modal('show');
                            $('.modal-body').html('<p>Thanks, Your message success sent </p>')
                            Form.trigger("reset");
                        } else {
                            Modalpopup.modal('show');
                            $('.modal-body').html('<p>' + msg + '</p>')
                            Form.trigger("reset");
                        }
                    }
                });
                return false;
            }
        });
    };

    // owlcarousel testimoni section init ------------
    const carousel = function () {
        if (Testimoni.length) {
            Testimoni.owlCarousel({
                margin: 20,
                loop: true,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 10000,
                smartSpeed: 1200,
                autoplayHoverPause: true,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                navContainer: '.testi-nav',
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        }
        if (testimonialtwo.length) {
            testimonialtwo.owlCarousel({
                loop: true,
                margin: 30,
                responsiveClass: true,
                nav: true,
                center: false,
                autoplay: true,
                autoPlaySpeed: 2000,
                autoPlayTimeout: 2000,
                navText: [
                    '<i class="fa-solid fa-arrow-left-long"></i>',
                    '<i class="fa-solid fa-arrow-right-long"></i>'
                ],
                navContainer: '.testi-nav',
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    991: {
                        items: 2,
                        nav: true
                    },

                    1200: {
                        items: 3,
                        nav: true,
                        loop: true
                    }
                }
            })
        }
    };
    // zoom magnificpopup init ------------------------
    const magnific = function () {
        imagezoom.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        if (popupImage.length > 0) {
            popupImage.magnificPopup({
                type: 'image',
                fixedContentPos: true,
                gallery: { enabled: true },
                removalDelay: 300,
                mainClass: 'mfp-fade'
            });
        }
        //Video Popup init
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
        //Video Popup
        if (videoPopup.length > 0) {
            videoPopup.magnificPopup({
                type: "iframe",
                removalDelay: 300,
                mainClass: "mfp-fade",
                overflowY: "hidden",
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' +
                        '<div class="mfp-close"></div>' +
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                        '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: 'v=',
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: '/',
                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                        },
                        gmaps: {
                            index: '//maps.google.',
                            src: '%id%&output=embed'
                        }
                    },
                    srcAction: 'iframe_src'
                }
            });
        }
    };
    // scroll top -------------------------------
    const scrolltop = function () {
        Goup.on("click", function () {
            $("html, body").animate({
                scrollTop: $("html, body").offset().top - 70
            }, 1000, "easeInOutExpo");
            return false;
        });
    };
    // page transition init -------------------
    const pageTransition = function () {
        Vlink.on('click', function (e) {
            e.preventDefault();
            var href = this.getAttribute('href');
            Burger.removeClass('cross');
            Progress.show();
            MenuContent.fadeOut(300);
            setTimeout(function () {
                window.location = href;
            }, 1000);
        });
    };
    //Add/remove class on filter list
    portfolioFilter.click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // filter list category portfolio
    portfolioFilter.click(function (e) {
        var filterValue = $(this).attr('data-filter');
        portfoliogrid.isotope({ filter: filterValue });
    });
    // portfoilo init -------------
    const portofolio = function (e) {
        if (portfoliogrid.length) {
            portfoliogrid.isotope({
                resizable: false,
                itemSelector: '.project-item',
                layoutMode: 'masonry',
                filter: '*'
            });
        };
    };
    //open submenu nav mobile
    submobilemenu.click(function (e) {
        $(this).toggleClass('opensubmenu');
    });
    //binds event ----------------------------
    const bindEvents = function (e) {
        // window onbuffer
        window.onbeforeunload = function (e) {
            // allways force page to scroll top on refresh
            window.scrollTo(0, 0);
            pageTransition();
        };
        // window load
        window.addEventListener('load', (e) => {
            // preloadder 
            Wrapload.fadeOut(300)

        });
        // document load
        window.addEventListener('DOMContentLoaded', (e) => {
            skillWidgets.circliful({
                backgroundCircleWidth: 10,
                foregroundCircleWidth: 10,
                strokeLinecap: "round"
            });
            /*parallax hero */
            if ($('.jarallax').length) {
                $('.jarallax').jarallax({
                    speed: 0.5,
                    disableParallax: function () {
                        return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
                    },
                    disableVideo: function () {
                        return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
                    }
                });
            };
            magnific();
            carousel();
            portofolio();
            AOS.init();
            scrolltop();
            subform();
        });
        window.addEventListener("scroll", (e) => {
            var st = $(window).scrollTop();
            MainHead.addClass('fichead');
            if (st <= limit) {
                $('.hero-img, .icon-scroll').css({ 'opacity': (1 - st / limit) });
                MainHead.removeClass('fichead');
            }
            if (st > 300) {
                Goup.addClass('showme');
            } else {
                Goup.removeClass('showme');
            }
        });
    };
    // init - initilizes elements and events
    const AppInit = function (e) {
        bindEvents();
    };
    return {
        AppInit: AppInit
    };
}());
//initilizing app
Miunsinit.AppInit();