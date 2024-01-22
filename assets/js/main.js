/**
 * 更改背景标题 阴影
 * scroll-header效果头部导航栏底边显示阴影。
*/ 
function scrollHeader() {
        const header = document.getElementById('header')
        // 当滚动大于50视口高度时，将scroll-header类添加到header标记
        if(this.scrollY >= 50) 
                header.classList.add('scroll-header');
        else
                header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)


/**
 * 服务详情
*/
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close') 

let modal = function(modalClick) {
        modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {                                  
        mb.addEventListener('click', () => {
                modal(i)
        })
})

modalClose.forEach((mc) => {                                    
        mc.addEventListener('click', () => {
                modalViews.forEach((mv) => {
                        mv.classList.remove('active-modal')
                })
        })
})


/**
 * 通过标签筛选子项
 * 与HTML联动
*/
let mixerPortfolio = mixitup('.work__container', {
        selectors: {
                target: '.work__card'
        },
        animation: {
                duration: 300
        }
});


/**
 * 筛选器子项点击动画
*/ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
        linkWork.forEach(l => l.classList.remove('active-work'))        // 现在高亮的筛选器子项取消高亮
        this.classList.add('active-work')                               // 点击的筛选器子项添加高亮
}

linkWork.forEach(l => l.addEventListener('click', activeWork))


/**
 * 客户评价块滑动
*/ 
let swiperTestimonial = new Swiper(".testimonial__container", {
        spaceBetween: 24,               // 两个块在滑动时的距离
        loop: true,                     // 从最后一个可以滑倒第一个
        grabCursor: true,               // 鼠标变爪爪

        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },

        breakpoints: {
                576: {                          // 视窗大小
                        slidesPerView: 2,       // 一次看的到的 评价块数
                },
                768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                },
        },
});


/**
 * 导航栏动画切换
*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
        const scrollY = window.scrollY

        sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                        sectionTop = current.offsetTop - 58,
                        sectionId = current.getAttribute('id')
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                } else {
                        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
        })
}

window.addEventListener('scroll', scrollActive)


/**
 * 主题
*/ 
const themeButton = document. getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// 先前选择的主题(如果用户选择)
const selectedTheme = localStorage. getItem('selected-theme')
const selectedIcon = localStorage. getItem('selected-icon')

// 我们通过验证light-theme类来获得接口拥有的当前主题
const getCurrentTheme = () => document.body.classList.contains (lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains (iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// 我们验证用户之前是否选择了一个主题
if (selectedTheme) {
        document. body.classList [selectedTheme === 'dark' ? 'add' : 'remove' ](lightTheme)
        themeButton.classList [selectedIcon === 'bx bx-moon' ? 'add' : 'remove' ](iconTheme)
}

// 使用按钮手动激活/停用主题
themeButton.addEventListener('click', () => {
        // 添加或删除黑暗/图标主题
        document.body.classList.toggle(lightTheme)
        themeButton.classList.toggle(iconTheme)
        // 我们保存用户选择的主题和当前图标
        localStorage.setItem('selected-theme', getCurrentTheme()) 
        localStorage.setItem('selected-icon', getCurrentIcon())
})


/**
 * 滚动显示动画 scroll reveal animation
*/ 
const sr = ScrollReveal ({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'})