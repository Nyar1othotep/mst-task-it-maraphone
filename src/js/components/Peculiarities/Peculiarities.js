class Peculiarities {

    render() {
        const MAIN = document.querySelector('#main');

        let htmlContent = '';

        htmlContent = `
		 	<div class="page-peculiarities"></div>
		  `;

        MAIN.innerHTML = htmlContent;
    }

};

export default new Peculiarities();