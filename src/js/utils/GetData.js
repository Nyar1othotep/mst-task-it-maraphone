import axios from 'axios';

class GetData {
    async dataGet(url) {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            console.log(error);
        };
    };
};

export const getData = new GetData();