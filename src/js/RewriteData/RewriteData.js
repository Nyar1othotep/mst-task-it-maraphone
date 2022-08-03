import images from '../connectResource';

class RewriteData {

    getDataName(data) {
        let fileName = [];

        data.forEach(element => {
            element = element.replace('./assets/images/', '');

            fileName.push(element);
        });

        return fileName;
    };

    getDataFullPath(fileName) {
        let fileFullPath = [];

        fileName.forEach(element => {
            fileFullPath.push(images[`./${element}`]);
        });

        return fileFullPath;
    }

    getDataMinifiedPath(fileFullPath) {
        let fileMinifiedPath = [];

        fileFullPath.forEach(element => {
            const index = element.indexOf('assets');

            fileMinifiedPath.push(element.slice(index));
        });

        return fileMinifiedPath;
    }

    rewrite(DATA) {
        if (this.isString(DATA)) DATA = DATA.split();

        const fileName = this.getDataName(DATA);

        const fileFullPath = this.getDataFullPath(fileName);

        const fileMinifiedPath = this.getDataMinifiedPath(fileFullPath);

        let rewriteData = fileMinifiedPath;

        return rewriteData;
    };

    isString(str) {
        return typeof str === 'string';
    };

};

export default new RewriteData();