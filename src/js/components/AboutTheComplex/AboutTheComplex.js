class AboutTheComplex {

    render() {
        const MAIN = document.querySelector('#main');

        let htmlContent = '';

        htmlContent = `
		 	<section class="section__menu">
				<div class="menu-section__body">
					<ul class="menu-section__list" id="menuSectionList"></ul>
				</div>
			</section>

			<div class="contents">
				<div class="content">
					<div class="content__body">
						<ul class="content__list" id="contentList"></ul>
						<div class="content__steps" id="contentSteps"></div>
					</div>
				</div>
				<div class="illustration" id="illustration"></div>
			</div>
		  `;

        MAIN.innerHTML = htmlContent;
    }

};

export default new AboutTheComplex();