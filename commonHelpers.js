import{a as u,S as p,i as l}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g=r=>{const{largeImageURL:s,webformatURL:i,tags:a,likes:e,views:t,comments:o,downloads:m}=r;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${s}">
            <img src="${i}" alt="${a}" />
        </a>
    <ul class="item-info">
        <li class="item-likes">
            <p class="title">Likes</p>
            <p class="value">${e}</p>
        </li>
        <li class="item-views">
            <p class="title">Views</p>
            <p class="value">${t}</p>
        </li>
        <li class="item-comments">
            <p class="title">Comments</p>
            <p class="value">${o}</p>
        </li>
        <li class="item-downloads">
            <p class="title">Downloads</p>
            <p class="value">${m}</p>
        </li>
    </ul>
    </li>`},d="https://pixabay.com",f="43329687-8aa5e523ea6ec5a66d8459b66";function y(r){const s={params:{key:f,q:r,orientation:"horizontal",safesearch:"true",image_type:"photo"}};return u.get(`${d}/api/?per_page=15&page=5`,s)}const h=document.querySelector(".search-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),L=async r=>{r.preventDefault();const s=r.target.elements.user_image.value.trim();if(s===""){c.innerHTML="",l.warning({title:"Caution",message:"Please enter a search query",position:"topRight",timeout:2e3}),r.target.reset();return}try{n.classList.add("is-visible");const{data:i}=await y(s);if(n.classList.remove("is-visible"),i.hits.length===0)c.innerHTML="",r.target.reset(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",timeout:3e3});else{const a=i.hits.map(e=>g(e)).join("");c.innerHTML=a,b.refresh()}}catch(i){n.classList.remove("is-visible"),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",timeout:3e3}),console.log(i)}};h.addEventListener("submit",L);const b=new p(".gallery a");
//# sourceMappingURL=commonHelpers.js.map
