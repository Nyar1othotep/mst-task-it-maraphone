import { getData } from "../../utils/GetData";
import RewriteData from "../../RewriteData/RewriteData";
import { URL, MENU, CONTENT, STEPS, ILLUSTRATION } from "../../utils/root";

let DATA = [];

class App {

    renderMenu(data) {
        let htmlContent = '';

        data.forEach(({ title }) => {

            htmlContent += `
				<li class="menu-section__item" data-uri="${title}">
					<a href="#" class="menu-section__link">${title}</a>
				</li>
				`;
        });
        MENU.innerHTML = htmlContent;
    }

    renderContent(uri) {

        CONTENT.innerHTML = '';

        let htmlContent = '';

        DATA.forEach(({ id, title, text, img }) => {
            if (uri === title) {
                let evenOrOdd = id % 2 === 0 ? '--transform: 40%' : '--transform: -40%';
                htmlContent = `
						<li class="content__item" data-id="${id}" style="${evenOrOdd}">
							<div class="item-content__title">${title}</div>
							<div class="item-content__text">${text}</div>
						</li>
					`;
                this.renderSteps(id);
                this.renderIllustration(id, title, img);
            };
        });

        CONTENT.innerHTML = htmlContent;
    }

    renderSteps(id) {
        let htmlContent = '';

        htmlContent = `${id} / ${DATA.length}`;

        STEPS.innerHTML = htmlContent;
    }

    renderIllustration(id, title, img) {
        img = RewriteData.rewrite(img);

        let htmlContent = '';

        let evenOrOdd = id % 2 === 0 ? '--transformImg: -100%' : '--transformImg: 100%';

        htmlContent = `
		  <div class="illustration__img" style="${evenOrOdd}">
		  		<img src="${img}" alt="title">
			</div>
		  `;

        ILLUSTRATION.innerHTML = htmlContent;
    }

    async render() {
        DATA = await getData.dataGet(URL);

        DATA ? this.renderMenu(DATA) : console.log(error.message);

        const firstMenuItem = document.querySelector('.menu-section__list>*:first-child');

        this.renderContent(firstMenuItem.getAttribute('data-uri'));

        firstMenuItem.classList.add('active');

        return DATA;
    }

    eventListener() {
        const menuSectionItem = document.querySelectorAll('.menu-section__item');

        menuSectionItem.forEach(element => {
            const uri = element.getAttribute('data-uri');
            element.addEventListener('click', () => {
                if (!element.classList.contains('active')) {
                    menuSectionItem.forEach(element => {
                        element.classList.remove('active');
                    });
                };
                element.classList.add('active');
                this.renderContent(uri);
            });
        });
    }

};

export default new App();