import { createGalleryCard } from './js/render-functions';
import { fetchImageByQuery } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMorebtn = document.querySelector('.load-more-btn');


let currentPage = 1;
let searchQuery = null;
let totalHits  = 0;
let per_page = 15;


const removeLoadMoreBtn = () => {
    loadMorebtn.classList.add('is-hidden');
    loadMorebtn.removeEventListener('click', loadMorebuttonClick)
};


const refreshGallery = (formEl, errorMessage) => {
    gallery.innerHTML = '';
    formEl.reset();
    iziToast.error({
        title: 'Error',
        message: 'Failed to load more images. Please try again later.',
        position: 'topRight',
        maxWidth: '432px',
        timeout: 3000,
    });
    removeLoadMoreBtn();
};


const searchFormSubmit = async event => {
  try {event.preventDefault();
  const searchQuery = event.target.elements.user_image.value.trim();
  currentPage = 1;
  if (searchQuery === '') {
    gallery.innerHTML = '';
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a search query',
      position: 'topRight',
      timeout: 2000,
    });
    event.target.reset();
    return;
  }
  gallery.innerHTML = '';
    loaderEl.classList.add('is-visible');
    const { data } = await fetchImageByQuery(searchQuery, currentPage, per_page);
    loaderEl.classList.remove('is-visible');
    if (data.hits.length === 0) {
      gallery.innerHTML = '';
      event.target.reset();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        maxWidth: '432px',
        timeout: 3000,
    });
      return;
    }
    if (data.total_pages === 1 ){
        removeLoadMoreBtn();
        gallery.innerHTML = createGalleryCard(data.hits);
        return;
    }
    else {
      const imageTemplate = data.hits
        .map(image => createGalleryCard(image))
        .join('');
      gallery.innerHTML = imageTemplate;
      lightbox.refresh();
      if (data.totalHits > per_page) {
        loadMorebtn.classList.remove('is-hidden');
    }else {
        loadMorebtn.classList.add('is-hidden');
      }
    }
  } catch (error) {
    loaderEl.classList.remove('is-visible');
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      maxWidth: '432px',
      timeout: 3000,
    });
    console.log(error);
  }
};

const loadMorebuttonClick = async event => {
  try{
currentPage++;
  const { data } = await fetchImageByQuery(searchQuery, currentPage, per_page);
  const imageTemplate = data.hits.map(image => createGalleryCard(image)).join('');
  gallery.insertAdjacentHTML('beforeend',imageTemplate);
lightbox.refresh(); 
if (gallery.childElementCount >= data.totalHits) {
   removeLoadMoreBtn();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        maxWidth: '432px',
        timeout: 3000,
      });
}
const galleryItemHeight = gallery.querySelector('.gallery-item').getBoundingClientRect().height;
window.scrollBy({
  top: galleryItemHeight * 2,
  behavior: 'smooth'
});
}
catch (error) {
    console.log(error);
    iziToast.error({
        title: 'Error',
        message: 'Failed to load more images. Please try again later.',
        position: 'topRight',
        maxWidth: '432px',
        timeout: 3000,
    });
} 
};

searchForm.addEventListener('submit', searchFormSubmit);
loadMorebtn.addEventListener('click', loadMorebuttonClick);

const lightbox = new SimpleLightbox('.gallery a');

