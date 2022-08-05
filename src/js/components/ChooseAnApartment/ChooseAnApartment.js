class ChooseAnApartment {

    render() {
        const MAIN = document.querySelector('#main');

        let htmlContent = '';

        htmlContent = `
		 	<div class="page-chooseAnApartment"></div>
		  `;

        MAIN.innerHTML = htmlContent;
    }

};

export default new ChooseAnApartment();