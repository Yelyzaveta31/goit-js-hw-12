import{a as b,S as w,i as n}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const p=s=>{const{largeImageURL:e,webformatURL:o,tags:i,likes:t,views:r,comments:l,downloads:v}=s;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${e}">
            <img src="${o}" alt="${i}" />
        </a>
    <ul class="item-info">
        <li class="item-likes">
            <p class="title">Likes</p>
            <p class="value">${t}</p>
        </li>
        <li class="item-views">
            <p class="title">Views</p>
            <p class="value">${r}</p>
        </li>
        <li class="item-comments">
            <p class="title">Comments</p>
            <p class="value">${l}</p>
        </li>
        <li class="item-downloads">
            <p class="title">Downloads</p>
            <p class="value">${v}</p>
        </li>
    </ul>
    </li>`},x="https://pixabay.com/api/",S="43329687-8aa5e523ea6ec5a66d8459b66";function h(s,e,o){const i={params:{key:S,q:s,orientation:"horizontal",safesearch:"true",image_type:"photo",page:e,per_page:o}};return b.get(x,i)}const E=document.querySelector(".search-form"),a=document.querySelector(".gallery"),d=document.querySelector(".loader"),c=document.querySelector(".load-more-btn");let u=1,m,g=15;const y=()=>{c.classList.add("is-hidden"),c.removeEventListener("click",f)},q=async s=>{try{if(s.preventDefault(),m=s.target.elements.user_image.value.trim(),u=1,m===""){a.innerHTML="",n.warning({title:"Caution",message:"Please enter a search query",position:"topRight",timeout:2e3}),s.target.reset();return}a.innerHTML="",d.classList.add("is-visible");const{data:e}=await h(m,u,g);if(d.classList.remove("is-visible"),e.hits.length===0){a.innerHTML="",s.target.reset(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",timeout:3e3});return}if(e.total_pages===1){y(),a.innerHTML=p(e.hits);return}else{const o=e.hits.map(i=>p(i)).join("");a.innerHTML=o,L.refresh(),e.totalHits>g?c.classList.remove("is-hidden"):c.classList.add("is-hidden")}}catch(e){d.classList.remove("is-visible"),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",timeout:3e3}),console.log(e)}},f=async s=>{try{u++;const{data:e}=await h(m,u,g),o=e.hits.map(t=>p(t)).join("");a.insertAdjacentHTML("beforeend",o),L.refresh(),a.childElementCount>=e.totalHits&&(y(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"432px",timeout:3e3}));const i=a.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch(e){console.log(e),n.error({title:"Error",message:"Failed to load more images. Please try again later.",position:"topRight",maxWidth:"432px",timeout:3e3})}};E.addEventListener("submit",q);c.addEventListener("click",f);const L=new w(".gallery a");
//# sourceMappingURL=commonHelpers.js.map
