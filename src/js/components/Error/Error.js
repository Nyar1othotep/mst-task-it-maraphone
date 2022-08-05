class Error {

    render(error) {
        const BODY = document.body;

        let htmlContent = '';

        htmlContent = `
			<div class="page-error _container">
				<span class="error-page__error">${error}</span>
					<div class="error-page__text">
						<p>Усп! Что-то пошло не так, возможно URL для <strong>axios</strong> запроса перестала работать.</p>
						<p>Пожалуйста, свяжитесь с разработчиком по ссылке:</p>
						<a href="https://vk.com/astra_earth" target="_blank"> Ссылка VK
					</div>
			</div>
		 `;

        BODY.classList.add('error')

        BODY.innerHTML = htmlContent;
    }

};

export default new Error();