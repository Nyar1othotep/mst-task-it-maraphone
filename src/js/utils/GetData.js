import axios from 'axios';
import Error from '../components/Error/Error';

class GetData {
    async dataGet(url) {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            Error.render(error.message);
        };
    };
};

export const getData = new GetData();