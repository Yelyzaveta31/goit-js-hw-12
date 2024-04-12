import axios from "axios";


const  BASE_URL = 'https://pixabay.com';
const API_KEY = '43329687-8aa5e523ea6ec5a66d8459b66';

export function fetchImageByQuery(query) {
const axiosOptions = {
    params: {
        key: API_KEY,
        q: query,
        orientation: 'horizontal',
        safesearch: 'true',
        image_type: 'photo',
    },
};

return axios.get(`${BASE_URL}/api/?per_page=15&page=5`, axiosOptions);

};
