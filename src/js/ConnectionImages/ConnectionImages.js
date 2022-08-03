import RewriteData from '../RewriteData/RewriteData'

class ConnectionImages {

    render() {
        const IMAGES = document.querySelectorAll('img');
        let htmlWrapper = '';

        IMAGES.forEach(ELEMENT => {

            let img = ELEMENT.getAttribute('data-img') + '.' + ELEMENT.getAttribute('data-extension');

            let imagePath = RewriteData.rewrite(img);

            let imgName = ELEMENT.getAttribute('data-img');

            let classes = ELEMENT.classList;

            htmlWrapper = `
				<img class="${classes}" src="${imagePath}" alt="${imgName}">
				`;

            ELEMENT.outerHTML = htmlWrapper;
        });
    };

};

export default new ConnectionImages()