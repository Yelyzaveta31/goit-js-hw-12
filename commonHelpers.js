import{a as v,S as b,i as n}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=i=>{const{largeImageURL:t,webformatURL:r,tags:o,likes:e,views:s,comments:l,downloads:L}=i;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
            <img src="${r}" alt="${o}" />
        </a>
    <ul class="item-info">
        <li class="item-likes">
            <p class="title">Likes</p>
            <p class="value">${e}</p>
        </li>
        <li class="item-views">
            <p class="title">Views</p>
            <p class="value">${s}</p>
        </li>
        <li class="item-comments">
            <p class="title">Comments</p>
            <p class="value">${l}</p>
        </li>
        <li class="item-downloads">
            <p class="title">Downloads</p>
            <p class="value">${L}</p>
        </li>
    </ul>
    </li>`},w="https://pixabay.com/api/",x="43329687-8aa5e523ea6ec5a66d8459b66";function g(i,t,r){const o={params:{key:x,q:i,orientation:"horizontal",safesearch:"true",image_type:"photo",page:t,per_page:r}};return v.get(w,o)}const S=document.querySelector(".search-form"),a=document.querySelector(".gallery"),u=document.querySelector(".loader"),c=document.querySelector(".load-more-btn");let m=1,E=null,p=15;const h=()=>{c.classList.add("is-hidden"),c.removeEventListener("click",y)},q=async i=>{try{i.preventDefault();const t=i.target.elements.user_image.value.trim();if(m=1,t===""){a.innerHTML="",n.warning({title:"Caution",message:"Please enter a search query",position:"topRight",timeout:2e3}),i.target.reset();return}a.innerHTML="",u.classList.add("is-visible");const{data:r}=await g(t,m,p);if(u.classList.remove("is-visible"),r.hits.length===0){a.innerHTML="",i.target.reset(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",timeout:3e3});return}if(r.total_pages===1){h(),a.innerHTML=d(r.hits);return}else{const o=r.hits.map(e=>d(e)).join("");a.innerHTML=o,f.refresh(),r.totalHits>p?c.classList.remove("is-hidden"):c.classList.add("is-hidden")}}catch(t){u.classList.remove("is-visible"),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",timeout:3e3}),console.log(t)}},y=async i=>{try{m++;const{data:t}=await g(E,m,p),r=t.hits.map(e=>d(e)).join("");a.insertAdjacentHTML("beforeend",r),f.refresh(),a.childElementCount>=t.totalHits&&(h(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"432px",timeout:3e3}));const o=a.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}catch(t){console.log(t),n.error({title:"Error",message:"Failed to load more images. Please try again later.",position:"topRight",maxWidth:"432px",timeout:3e3})}};S.addEventListener("submit",q);c.addEventListener("click",y);const f=new b(".gallery a");
//# sourceMappingURL=commonHelpers.js.map
