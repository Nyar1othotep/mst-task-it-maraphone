import 'regenerator-runtime/runtime';
import './scss/style.scss';
import SvgSprite from './js/SvgSprite/SvgSprite';
import ConnectionImages from './js/ConnectionImages/ConnectionImages';
import App from './js/components/App/App';
import AboutTheComplex from './js/components/AboutTheComplex/AboutTheComplex';
import Peculiarities from './js/components/Peculiarities/Peculiarities';
import Pentahuses from './js/components/Pentahuses/Pentahuses'
import ChooseAnApartment from './js/components/ChooseAnApartment/ChooseAnApartment';

AboutTheComplex.render();

(async() => {
    await App.render();
})();

SvgSprite.render();
ConnectionImages.render();

const firstHeaderListElement = document.querySelector('.menu-header__list>:first-child');
const lastHeaderListElement = document.querySelector('.menu-header__list>:last-child');
const headerList = document.querySelector('.menu-header__list');
const headerLink = document.querySelectorAll('.menu-header__link');

let headerActiveFirstLinkPos, headerFocusLinkPos, headerActiveLastLinkPos, diffLinks, headerLinkWidth, headerLinkAnotherWidth, currentPosActiveElement, mousePosFromActiveElement, a, b;

const calcCurrentProp = (headerListElement, LastHeaderListElementWidth, headerActiveLinkPos, plus, prop, nullProp) => {
    diffLinks = headerListElement.getBoundingClientRect().x + LastHeaderListElementWidth;
    currentPosActiveElement = (headerActiveLinkPos - diffLinks) * plus;
    headerList.style.setProperty(`${prop}`, `${currentPosActiveElement}px`);
    headerList.style.setProperty(`${nullProp}`, '');
}

const calcHeaderLinkPos = () => {
    headerLink.forEach(element => {
        if (element.classList.contains('active')) {
            headerActiveFirstLinkPos = element.getBoundingClientRect().x;
            headerActiveLastLinkPos = element.getBoundingClientRect().x + element.offsetWidth;
            headerLinkAnotherWidth = ((element.getBoundingClientRect().x + element.offsetWidth) - element.getBoundingClientRect().x);

            a = headerActiveFirstLinkPos;
        };
    });
}

headerLink.forEach(element => {
    if (element.classList.contains('active')) {
        headerActiveFirstLinkPos = element.getBoundingClientRect().x;
        a = headerActiveFirstLinkPos;
        b = lastHeaderListElement.getBoundingClientRect().x + element.offsetWidth;
    };
});


document.body.addEventListener('mousemove', () => {
    if (document.documentElement.clientWidth > 768 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        calcHeaderLinkPos();

        if (event.target.closest('.menu-header__link')) {
            headerFocusLinkPos = event.target.getBoundingClientRect().x;
            headerLinkWidth = event.target.offsetWidth;
        };

        mousePosFromActiveElement = (headerFocusLinkPos + headerLinkWidth) - headerActiveFirstLinkPos;

        if (event.target.closest('.menu-header__link')) {
            if (mousePosFromActiveElement > headerLinkAnotherWidth) {

                calcCurrentProp(firstHeaderListElement, 0, headerActiveFirstLinkPos, 1, '--left', '--rigth');

                headerList.style.setProperty('--width', `${mousePosFromActiveElement}px`);
            } else if (mousePosFromActiveElement < headerLinkAnotherWidth) {

                calcCurrentProp(lastHeaderListElement, lastHeaderListElement.offsetWidth, headerActiveLastLinkPos, -1, '--rigth', '--left');

                mousePosFromActiveElement = headerActiveLastLinkPos - headerFocusLinkPos;

                headerList.style.setProperty('--width', `${mousePosFromActiveElement}px`);
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

        if (document.documentElement.clientWidth > 768 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mousePosFromActiveElement = (headerFocusLinkPos + headerLinkWidth) - a;

            calcHeaderLinkPos();

            if (mousePosFromActiveElement > headerLinkAnotherWidth) {

                calcCurrentProp(lastHeaderListElement, lastHeaderListElement.offsetWidth, headerActiveLastLinkPos, -1, '--rigth', '--left');

            } else if (mousePosFromActiveElement < headerLinkAnotherWidth) {

                calcCurrentProp(firstHeaderListElement, 0, headerActiveFirstLinkPos, 1, '--left', '--rigth');

            };
        };
    };

    if (event.target.closest('#aboutTheComplex')) {
        AboutTheComplex.render();
        App.render();
    } else if (event.target.closest('#peculiarities')) {
        Peculiarities.render();
    } else if (event.target.closest('#pentahuses')) {
        Pentahuses.render();
    } else if (event.target.closest('#chooseAnApartment')) {
        ChooseAnApartment.render();
    }
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