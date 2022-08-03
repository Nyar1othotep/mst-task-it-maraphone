import RewriteData from '../../RewriteData/RewriteData';

class News {

    render(DATA) {
            let htmlContent = '';

            DATA.forEach(({ img, icon }) => {
                        img = RewriteData.rewrite(img);
                        if (RewriteData.isString(icon)) icon = icon.split();

                        htmlContent += `
				  <a href="#">
					  ${img.reduce((r,i) => `${r}<img src="${i}" alt="">`, "")}
				  </a>
				  ${icon.reduce((r,i) => `${r}<icon data-i="${i}"></icon>`, "")}
			 `;

		});

		gallery.innerHTML = htmlContent;
  };

};

export default new News();