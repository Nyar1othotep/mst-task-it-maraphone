import './scss/style.scss';
import SvgSprite from './js/SvgSprite/SvgSprite';
import ConnectionImages from './js/ConnectionImages/ConnectionImages';
// import Gallery from './js/components/Gallery/Gallery';

// const DATA = [{
//     img: 'logo.png',
//     icon: 'icon-home'
// }, {
//     img: './assets/images/logo.png',
//     icon: ['icon-lock', 'icon-home']
// }, {
//     img: ['logo.png', './assets/images/logo-footer.png'],
//     icon: ['icon-lock', 'icon-home']
// }];

SvgSprite.render();
ConnectionImages.render();

const firstHeaderListElement = document.querySelector('.menu-header__list>:first-child');
const lastHeaderListElement = document.querySelector('.menu-header__list>:last-child');
const headerList = document.querySelector('.menu-header__list');
const headerLink = document.querySelectorAll('.menu-header__link');

const calcCurrentProp = (headerListElement, LastHeaderListElementWidth, headerActiveLinkPos, plus, prop, nullProp) => {
    diffLinks = headerListElement.getBoundingClientRect().x + LastHeaderListElementWidth;
    currentPosActiveElement = (headerActiveLinkPos - diffLinks) * plus;
    headerList.style.setProperty(`${prop}`, `${currentPosActiveElement}px`);
    headerList.style.setProperty(`${nullProp}`, '');
}

let headerActiveFirstLinkPos, headerFocusLinkPos, headerActiveLastLinkPos, diffLinks, headerLinkWidth, headerLinkAnotherWidth, currentPosActiveElement, mousePosFromActiveElementE;

headerLink.forEach(element => {
    if (element.classList.contains('active')) {
        headerActiveFirstLinkPos = element.getBoundingClientRect().x;
    };
});

document.body.addEventListener('mousemove', () => {
    if (document.documentElement.clientWidth > 768) {
        headerLink.forEach(element => {
            if (element.classList.contains('active')) {
                headerActiveFirstLinkPos = element.getBoundingClientRect().x;
                headerActiveLastLinkPos = element.getBoundingClientRect().x + element.offsetWidth;
                headerLinkAnotherWidth = ((element.getBoundingClientRect().x + element.offsetWidth) - element.getBoundingClientRect().x) + 6;
            };
        });

        if (event.target.closest('.menu-header__link')) {
            headerFocusLinkPos = event.target.getBoundingClientRect().x;
            headerLinkWidth = event.target.offsetWidth;
        };

        mousePosFromActiveElementE = (headerFocusLinkPos + headerLinkWidth) - headerActiveFirstLinkPos + 6;

        if (event.target.closest('.menu-header__link')) {
            if (mousePosFromActiveElementE > headerLinkAnotherWidth) {

                calcCurrentProp(firstHeaderListElement, 0, headerActiveFirstLinkPos, 1, '--left', '--rigth');

                headerList.style.setProperty('--width', `${mousePosFromActiveElementE}px`);
            } else if (mousePosFromActiveElementE < headerLinkAnotherWidth) {

                calcCurrentProp(lastHeaderListElement, lastHeaderListElement.offsetWidth, headerActiveLastLinkPos, -1, '--rigth', '--left');

                mousePosFromActiveElementE = headerActiveLastLinkPos - headerFocusLinkPos;
                headerList.style.setProperty('--width', `${mousePosFromActiveElementE}px`);
            };
        };

        document.body.addEventListener('mouseout', () => {
            if (!event.target.closest('.menu-header__link')) {
                headerList.style.setProperty('--width', '0px');
            };
        });
    };
});

document.body.addEventListener('click', () => {
    if (event.target.closest('.menu-header__link')) {
        headerLink.forEach(element => {
            element.classList.remove('active');
        })
        event.target.classList.add('active');
    };
});

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const bodyEl = document.body;
burger.addEventListener('click', function() {
    if (document.documentElement.clientWidth < 769) {
        if (!burger.classList.contains('active')) {
            burger.classList.add('active');
        } else {
            burger.classList.remove('active');
        }

        if (!menu.classList.contains('active')) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }

        if (!bodyEl.classList.contains('lock')) {
            bodyEl.classList.add('lock');
        } else {
            bodyEl.classList.remove('lock');
        }
    }
})

menu.addEventListener('click', function() {
    if (document.documentElement.clientWidth < 769) {
        burger.classList.remove('active');
        menu.classList.remove('active');
        bodyEl.classList.remove('lock');
    }
})

// Gallery.render(DATA);

// В долгий ящки