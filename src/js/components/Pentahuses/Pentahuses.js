class Pentahuses {

    render() {
        const MAIN = document.querySelector('#main');

        let htmlContent = '';

        htmlContent = `
		 	<div class="page-pentahuses"></div>
		  `;

        MAIN.innerHTML = htmlContent;
    }

};

export default new Pentahuses();