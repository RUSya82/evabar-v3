var mySwiperPortfolio = new Swiper('.portfolio__slider', {
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
    slidesPerView: 1,
    speed: 400,
    loop: true,
    zoom: true,
    toggle: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        375: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 1
        },
        1100: {
            slidesPerView: 1
        }
    },
});
//mySwiperPortfolio.lazy.load();

// mySwiperReviewHorizontal = new Swiper('.reviews__slider', {
//     // navigation: {
//     // 	nextEl: '.swiper-button-prev',
//     // 	prevEl: '.swiper-button-next',
//     // },
//     init: false,
//     slidesPerView: 3,
//     speed: 400,
//     loop: true,
//     spaceBetween: 50,
//     centeredSlides: true,
//     slideToClickedSlide: true,
//     // autoHeight: true,
//     // zoom: true,
//     toggle: true,
//     breakpoints: {
//         200: {
//             slidesPerView: 1
//         },
//         320: {
//             slidesPerView: 1
//         },
//         375: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 2
//         },
//         1100: {
//             slidesPerView: 3
//         }
//     },
// });
// mySwiperReviewVertical = new Swiper('.reviews__slider', {
//     // navigation: {
//     // 	nextEl: '.swiper-button-prev',
//     // 	prevEl: '.swiper-button-next',
//     // },
//     init: false,
//     //slidesPerView: 1,
//     speed: 400,
//     loop: true,
//     spaceBetween: 0,
//     centeredSlides: true,
//     slideToClickedSlide: true,
//     // autoHeight: true,
//     // zoom: true,
//     direction: 'vertical',
//     toggle: true,
//     breakpoints: {
//         200: {
//             slidesPerView: 1
//         },
//         320: {
//             slidesPerView: 1
//         },
//         375: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 2
//         },
//         1100: {
//             slidesPerView: 3
//         }
//     },
// });

// const windowWidth = document.documentElement.clientWidth;
// let currentSwiperReviews;
// if(windowWidth > 767){
//     currentSwiperReviews = mySwiperReviewHorizontal;
//     currentSwiperReviews.init();
// } else {
//     currentSwiperReviews = mySwiperReviewVertical;
//     currentSwiperReviews.init();
// }
// window.addEventListener('resize', () => {
//     const windowWidth = document.documentElement.clientWidth;
//     if (windowWidth <= 768) {
//         if(currentSwiperReviews.params.direction === 'horizontal'){
//             currentSwiperReviews.destroy(false, true);
//             currentSwiperReviews = mySwiperReviewVertical;
//             currentSwiperReviews.init();
//         }
//     } else {
//         if(currentSwiperReviews.params.direction === 'vertical'){
//             currentSwiperReviews.destroy(false, true);
//             currentSwiperReviews = mySwiperReviewHorizontal;
//             currentSwiperReviews.init();
//         }
//     }
// });

//------------------------------------------------------------------------

const windowWidth = document.documentElement.clientWidth;
// let currentSwiperReviews;
let swiperDirection = '';
if(windowWidth > 767){
    swiperDirection = 'horizontal';
} else {
    swiperDirection = 'vertical'
}
mySwiperReview = new Swiper('.reviews__slider', {
    // navigation: {
    // 	nextEl: '.swiper-button-prev',
    // 	prevEl: '.swiper-button-next',
    // },
    direction: swiperDirection,
    slidesPerView: 3,
    speed: 400,
    loop: true,
    spaceBetween: 50,
    centeredSlides: true,
    slideToClickedSlide: true,
    touchRatio: 2,
    // autoHeight: true,
    // zoom: true,
    toggle: true,
    breakpoints: {
        200: {
            slidesPerView: 1
        },
        320: {
            slidesPerView: 1
        },
        375: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1100: {
            slidesPerView: 3
        }
    },
});
window.addEventListener('resize', () => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth <= 768) {
        if(mySwiperReview.params.direction === 'horizontal'){
            mySwiperReview.changeDirection()
        }
    } else {
        if(mySwiperReview.params.direction === 'vertical'){
            mySwiperReview.changeDirection()
        }
    }
});