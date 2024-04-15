import axios from "axios";


const  BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43329687-8aa5e523ea6ec5a66d8459b66';

export function fetchImageByQuery(query, currentPage, per_page) {
const axiosOptions = {
    params: {
        key: API_KEY,
        q: query,
        orientation: 'horizontal',
        safesearch: 'true',
        image_type: 'photo',
        page: currentPage,
        per_page: per_page,
    },
};

return axios.get(BASE_URL, axiosOptions);

};
