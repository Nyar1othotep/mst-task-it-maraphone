import SPRITES from '../../images/sprites.svg';

class SvgSprite {

    iconPathReplace(name) {

        let iconPath = '';

        const index = SPRITES.indexOf('assets');

        return iconPath = SPRITES.slice(index) + '#' + name;

    };

    render() {
        const ICONS = document.querySelectorAll('icon');
        let htmlWrapper = '';

        ICONS.forEach(ELEMENT => {
            let iconPath = this.iconPathReplace(ELEMENT.getAttribute('data-i'))

            let classes = ELEMENT.classList;

            htmlWrapper = `
				<svg class="${classes}">
					<use xlink:href="${iconPath}"></use>
		 		</svg>
				`;

            ELEMENT.outerHTML = htmlWrapper;
        });
    };

};

export default new SvgSprite();