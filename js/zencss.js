(()=>{var e;(()=>{class e extends HTMLElement{constructor(){super()}}customElements.define("z-container",e);class t extends HTMLElement{constructor(){super()}}customElements.define("z-row",t);class n extends HTMLElement{constructor(){super()}}customElements.define("z-col",n)})(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".slider");if(e){const a=e.querySelector(".slides-container"),s=Array.from(a.children),c=s.length,l=e.querySelector(".next"),i=e.querySelector(".prev"),d="true"===e.getAttribute("data-auto-rotate"),u=s[0].cloneNode(!0),m=s[c-1].cloneNode(!0);a.insertBefore(m,s[0]),a.appendChild(u);let h,y=1,f=!1;function t(){d&&(h=setInterval(r,4e3))}function n(){clearInterval(h)}function o(){a.style.transform=`translateX(-${100*y}%)`}function r(){f||(y++,f=!0,o())}a.style.transition="none",a.style.transform=`translateX(-${100*y}%)`,setTimeout((()=>{a.style.transition="transform 0.5s ease"}),0),a.addEventListener("transitionend",(()=>{y>=c+1?(a.style.transition="none",y=1,a.style.transform=`translateX(-${100*y}%)`,setTimeout((()=>{a.style.transition="transform 0.5s ease"}),0)):0===y&&(a.style.transition="none",y=c,a.style.transform=`translateX(-${100*y}%)`,setTimeout((()=>{a.style.transition="transform 0.5s ease"}),0)),f=!1})),l.addEventListener("click",r),i.addEventListener("click",(function(){f||(y--,f=!0,o())})),a.addEventListener("mouseenter",n),a.addEventListener("mouseleave",t),l.addEventListener("mouseenter",n),l.addEventListener("mouseleave",t),i.addEventListener("mouseenter",n),i.addEventListener("mouseleave",t),t()}})),(()=>{function e(){document.querySelectorAll(".dropdown .dropdown-content").forEach((function(e){e.style.display="none"}))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".dropdown .dropdown-link").forEach((function(t){t.addEventListener("click",(function(n){n.preventDefault();var o=t.nextElementSibling;"block"===o.style.display?o.style.display="none":(e(),o.style.display="block")}))}))})),window.onclick=function(t){t.target.matches(".dropdown-link")||e()}})(),(()=>{function e(e){(new Image).src=e}document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".image-gallery"),n=document.querySelector("z-modal"),o=document.querySelector(".pagination-nav");if(t&&n&&o){let c=1;const l=15;let i=0;const d=[];Array.from(t.children).forEach(((e,t)=>{const n=document.createElement("div");n.classList.add("lazy-load"),n.style.display=t<l?"block":"none";const o=e.cloneNode(!0);o.addEventListener("click",(()=>{i=t,s(o.src,o.getAttribute("data-text"),t)})),n.appendChild(o),d.push(n)}));const u=Math.ceil(d.length/l);function r(e){d.forEach(((t,n)=>{const o=(e-1)*l,r=o+l;t.style.display=n>=o&&n<r?"block":"none"}))}function a(){o.innerHTML='<a href="#" class="item" data-page="prev">&laquo;</a>';for(let e=1;e<=u;e++){const t=e===c?"current":"";o.innerHTML+=`<a href="#" class="item ${t}" data-page="${e}">${e}</a>`}o.innerHTML+='<a href="#" class="item" data-page="next">&raquo;</a>'}function s(t,o,r){i=r;const a=n.shadowRoot.querySelector(".modal-body"),c=n.shadowRoot.querySelector(".modal-wrapper"),l=n.shadowRoot.querySelector(".modal-header");if(a&&c&&l){const u=c.clientWidth,m=c.clientHeight;c.style.minWidth=`${u}px`,c.style.minHeight=`${m}px`,a.innerHTML="";const h=document.createElement("div");h.style.display="flex",h.style.position="relative",h.style.justifyContent="center";const y=document.createElement("div");y.className="prev arrow theme-dark",y.innerHTML="❮",y.style.cursor="pointer",y.style.position="absolute",y.style.top="50%",y.style.left="0",y.style.transform="translateY(-50%)",y.onclick=function(){i=i>0?i-1:d.length-1;const e=d[i].firstChild;s(e.src,e.getAttribute("data-text"),i)},h.appendChild(y);const f=document.createElement("img");f.onload=()=>{c.style.minWidth="",c.style.minHeight=""},f.src=t,f.style.maxWidth="100%",f.style.maxHeight="60vh",f.style.objectFit="contain",f.style.margin="auto",h.appendChild(f);const p=document.createElement("div");p.className="next arrow theme-dark",p.innerHTML="❯",p.style.cursor="pointer",p.style.position="absolute",p.style.top="50%",p.style.right="0",p.style.transform="translateY(-50%)",p.onclick=function(){i=i<d.length-1?i+1:0;const e=d[i].firstChild;s(e.src,e.getAttribute("data-text"),i)},h.appendChild(p),a.appendChild(h);const g=document.createElement("p");g.textContent=o,g.style.textAlign="center",a.appendChild(g),a.style.overflowY="auto",a.style.maxHeight="80vh",l.style.display="none",c.style.maxWidth=window.innerWidth>=1070?"860px":"80%";const v=(r+1)%d.length,L=(r-1+d.length)%d.length;e(d[v].firstChild.src),e(d[L].firstChild.src),n.open()}}o.addEventListener("click",(function(e){e.preventDefault();const t=e.target;if("A"===t.tagName&&t.dataset.page){let e=c;e="prev"===t.dataset.page?c>1?c-1:u:"next"===t.dataset.page?c<u?c+1:1:parseInt(t.dataset.page),e!==c&&(c=e,r(c),a())}})),window.addEventListener("resize",(function(){const e=n.shadowRoot.querySelector(".modal-wrapper");e&&(e.style.maxWidth=window.innerWidth>=1070?"860px":"80%")})),t.innerHTML="",d.forEach((e=>t.appendChild(e))),r(c),a()}}))})(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".accordion-toggle");e.forEach((function(t){t.addEventListener("click",(function(){var t="false"===this.getAttribute("aria-expanded");if(e.forEach((function(e){e.classList.remove("active-toggle"),e.setAttribute("aria-expanded","false");var t=e.querySelector(".zenicon-keyboard-arrow-right, .zenicon-keyboard-arrow-down");t&&(t.classList.remove("zenicon-keyboard-arrow-down"),t.classList.add("zenicon-keyboard-arrow-right")),e.nextElementSibling.style.maxHeight=null})),t){this.classList.add("active-toggle"),this.setAttribute("aria-expanded","true");var n=this.querySelector(".zenicon-keyboard-arrow-right, .zenicon-keyboard-arrow-down");n&&(n.classList.remove("zenicon-keyboard-arrow-right"),n.classList.add("zenicon-keyboard-arrow-down"));var o=this.nextElementSibling;o.style.maxHeight=o.scrollHeight>200?"1000px":o.scrollHeight+10+"px"}}))}))})),document.addEventListener("DOMContentLoaded",(e=>{const t=document.getElementById("current-year");if(t){const e=(new Date).getFullYear();t.textContent=e}})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".icon-toggle").forEach((function(e){e.addEventListener("click",(function(){var e=this.querySelector(".icon-off"),t=this.querySelector(".icon-on");e.classList.toggle("show"),t.classList.toggle("show")}))}))})),document.querySelectorAll(".accordion-toggle").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("aria-controls"),o=document.getElementById(n);document.querySelectorAll(".expanded-content").forEach((e=>{e.id!==n&&(e.classList.remove("show"),e.style.overflowY="hidden")})),o.classList.toggle("show"),setTimeout((()=>{o.scrollHeight>o.clientHeight?o.style.overflowY="auto":o.style.overflowY="hidden"}),500)}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".corner-popup");if(e){var t=e.querySelector("button"),n=e.querySelector("div");n.classList.add("card"),t.addEventListener("click",(function(){n.classList.toggle("hidden"),console.log("Button clicked")}))}})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".responsive-table").forEach((function(e){const t=Array.from(e.querySelectorAll(":scope > thead > tr > th")).map((e=>e.textContent.trim()));e.querySelectorAll(":scope > tbody > tr").forEach((e=>{e.querySelectorAll(":scope > td").forEach(((e,n)=>{t[n]&&e.setAttribute("data-label",t[n])}))}))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".tab");e.length&&e.forEach((e=>{e.addEventListener("click",(function(){!function(e){const t=document.querySelector(".tabbed-card");if(t){const n=t.querySelectorAll(".tab"),o=t.querySelectorAll(".tab-content");n.length&&o.length&&n.forEach(((t,n)=>{n+1===e?(t.classList.add("active"),o[n]&&o[n].classList.add("active")):(t.classList.remove("active"),o[n]&&o[n].classList.remove("active"))}))}}(parseInt(e.getAttribute("data-tab")))}))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".nav-menu li");e.length&&e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>e.classList.remove("active"))),this.classList.add("active")}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".btn-circle");if(e){var t=localStorage.getItem("unreadResetTime");t&&(new Date).getTime()<t&&e.removeAttribute("data-unread"),e.addEventListener("click",(function(){e.removeAttribute("data-unread");var t=(new Date).getTime()+864e5;localStorage.setItem("unreadResetTime",t)}))}})),document.querySelectorAll('[class*="bg-opaque"], [class*="bg-blur"]').forEach((e=>{e.querySelectorAll("*").forEach((e=>{e.style.opacity="100%"}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("toggleDarkMode");e&&e.addEventListener("click",(function(){const e=document.querySelectorAll(".zen");e.forEach((e=>{e.classList.toggle("zen-dark")}));const t=Array.from(e).some((e=>e.classList.contains("zen-dark")));localStorage.setItem("darkMode",t)})),"true"===localStorage.getItem("darkMode")&&document.querySelectorAll(".zen").forEach((e=>{e.classList.add("zen-dark")}))})),window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".image-container").forEach((function(e){var t=e.querySelector("img"),n=t.src;e.style.backgroundImage="url("+n+")",e.style.backgroundSize="cover",e.style.backgroundPosition="center center",t.style.display="none"}))})),document.addEventListener("DOMContentLoaded",(e=>{const t=document.getElementById("hamburger-button"),n=document.getElementById("close-button"),o=document.querySelector("nav"),r=document.querySelectorAll(".nav-link"),a=()=>{o.style.left="0px"===o.style.left?"-250px":"0px"};t&&n&&o&&(t.addEventListener("click",a),n.addEventListener("click",a),r.forEach((e=>{})))})),(()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.shadowRoot.querySelector(".close").addEventListener("click",(()=>{this.close()})),this.shadowRoot.querySelector(".modal").addEventListener("click",(e=>{e.target===e.currentTarget&&this.close()})),document.addEventListener("click",(e=>{e.target.classList.contains("modal-close")&&this.close(),document.addEventListener("keydown",(e=>{"Escape"===e.key&&this.close()}))}));const e=document.querySelector(".modal-open");e&&e.addEventListener("click",(()=>{this.open()}))}open(){this.shadowRoot.querySelector(".modal").style.display="flex"}close(){this.shadowRoot.querySelector(".modal").style.display="none"}render(){this.shadowRoot.innerHTML='\n          <style>\n          .modal {\n              position: fixed;\n              z-index: 10000;\n              left: 0;\n              top: 0;\n              width: 100%;\n              height: 100%;\n              background-color: rgba(0, 0, 0, 0.8);\n              display: none;\n              align-items: center;\n              justify-content: center;\n          }\n          .modal-wrapper {\n              position: relative;\n              width: 80%;\n              border: 1px solid rgba(111,111,111,.35);\n              border-radius: var(--border-radius, 4px);\n              background-color: #f4f4f4;\n              color: #424242;\n              box-sizing: border-box;\n              max-width:500px;\n          }\n          \n          .modal-header {\n              display: flex;\n              justify-content: space-between;\n              padding: 0 20px;\n              border-bottom: 1px solid rgba(111,111,111,.35);\n          }\n          .modal-title {\n              margin: 0;\n              font-size: 1.5em;\n          }\n          .close {\n              color: var(--dark-color, #aaa);\n              font-size: 28px;\n              font-weight: bold;\n              cursor: pointer;\n              border: none;\n              background-color: transparent;\n              position:relative:\n\n          }\n          .close:hover,\n          .close:focus {\n              color: var(--cta-color, #f00);\n          }\n          .modal-body {\n              padding: 20px;\n              max-height: 300px;\n              overflow-y: auto;\n          }\n          .modal-footer {\n              display: flex;\n              justify-content: flex-end;\n              padding: 0 10px;\n              border-top: 1px solid rgba(111,111,111,.35);\n              margin-left: 10px;\n              margin-right: 10px;\n          }\n\n          @media only screen and (max-width: 767px) {\n              .modal-body {\n                  padding: 10px;\n                  max-height: 220px;\n\n              }\n              .modal-wrapper {\n                  width: 99%;\n                  max-width:100% !important;\n              }\n\n          }\n      </style>\n      <div class="modal">\n          <div class="modal-wrapper">\n              <div class="modal-header">\n                  <slot name="title"></slot>\n                  <div class="title-spacer"></div>\n                  <button class="close">&times;</button>\n              </div>\n              <div class="modal-body">\n                  <slot></slot>\n              </div>\n              <div class="modal-footer">\n                  <slot name="footer">\n                      <button class="modal-close">Close</button>\n                      <button class="modal-save">Save</button>\n                  </slot>\n              </div>\n          </div>\n      </div>\n      '}}customElements.define("z-modal",e)})(),(()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["stars","half"]}attributeChangedCallback(e,t,n){this.render()}render(){const e=parseInt(this.getAttribute("stars"))||1,t="true"===this.getAttribute("half"),n=document.createDocumentFragment();for(let t=0;t<e;t++){const e=document.createElement("img");e.src="../../img/icons/alerts/star-solid.svg",e.alt="",e.className="icon icon-gold",n.appendChild(e)}if(t&&e<5){const e=document.createElement("img");e.src="../../img/icons/alerts/star-half-stroke-regular.svg",e.alt="",e.className="icon icon-gold",n.appendChild(e)}this.shadowRoot.innerHTML="\n          <style>\n              .icon {\n                  width: 24px;\n                  height: 24px;\n              }\n      .icon-gold{\n        width: 9px;\n        filter: invert(85%) sepia(36%) saturate(2389%) hue-rotate(345deg) brightness(96%) contrast(97%);\n        }\n        \n        .icon-silver{\n        width: 9px;\n        filter: invert(50%) sepia(8%) saturate(15%) hue-rotate(314deg) brightness(103%) contrast(84%);\n        }\n          </style>\n      ",this.shadowRoot.appendChild(n)}}customElements.define("star-component",e)})(),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".card").forEach((function(e){var t=e.querySelector(".img-full");t&&(t.addEventListener("load",(function(){var n=t.offsetHeight+20;e.style.paddingTop=n+"px"})),t.complete&&t.dispatchEvent(new Event("load")))}))})),(()=>{var e=document.querySelector(".exit");function t(){e&&(e.style.display="none",localStorage.setItem("modalClosed",(new Date).getTime()))}var n=document.querySelector(".close");n&&(n.onclick=t),window.onclick=function(n){n.target==e&&t()},setTimeout((function(){document.addEventListener("mousemove",(function(t){var n;t.clientY<=5&&e&&(!(n=localStorage.getItem("modalClosed"))||((new Date).getTime()-parseInt(n,10))/864e5>=7)&&"block"!==e.style.display&&(e.style.display="block")}))}),8e3)})(),document.addEventListener("DOMContentLoaded",(e=>{const t=document.querySelectorAll(".wizard-step"),n=document.querySelectorAll(".wizard-nav");if(t.length>0&&n.length>0){let r=1;const a=t.length;function o(e){t.forEach((e=>{e.style.display="none"})),document.getElementById(`step-${e}`).style.display="block",n.forEach((t=>{t.dataset.step==e.toString()?t.classList.add("current"):t.classList.remove("current")}))}n.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();let n=e.dataset.direction;n?"next"===n&&r<a?r++:"prev"===n&&r>1&&r--:e.dataset.step&&(r=parseInt(e.dataset.step)),o(r)}))})),o(r)}})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".tab-nav .item");if(e.length>0){function t(t){t.preventDefault(),e.forEach((e=>{e.classList.remove("current")})),t.target.classList.add("current")}e.forEach((e=>{e.addEventListener("click",t)}))}})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".rotate-spinner");e&&(e.style.animation="spin 1s linear infinite")})),document.addEventListener("DOMContentLoaded",(function(){var e=1,t={a:0,b:0,c:0,d:0};function n(n){var o,r=n.target.value;t[r]++,e<4?(o=++e,document.querySelectorAll(".wizard-step").forEach((function(e){e.classList.remove("active")})),document.querySelector("#step-"+o).classList.add("active")):function(){document.querySelectorAll(".wizard-step").forEach((function(e){e.classList.remove("active")}));var e=Math.max(...Object.values(t)),n=Object.keys(t).filter((function(n){return t[n]===e}))[0],o=document.querySelector('#result-types [data-result="'+n+'"]'),r=o?o.innerHTML:n,a=document.getElementById("result-text");a&&(a.innerHTML=r);var s=document.getElementById("result");s&&s.classList.add("active")}()}var o=document.querySelector(".wizard");o&&o.querySelectorAll('input[type="radio"]').forEach((function(e){e.addEventListener("change",n)}))})),document.addEventListener("DOMContentLoaded",(e=>{const t=document.querySelector(".cookie-consent-banner");if(t){const e=document.querySelector(".accept-cookies");t.style.zIndex="1100",localStorage.getItem("cookies-accepted")||(t.style.display="block"),e&&e.addEventListener("click",(()=>{localStorage.setItem("cookies-accepted","true"),t.style.display="none"}))}})),(e=document.getElementById("toggleButton"))&&e.addEventListener("click",(function(){[["z-container","z-container-outline-on"],["z-container-fluid","z-container-fluid-outline-on"],["z-row","z-row-outline-on"],["z-col","z-col-outline-on"],["p","p-outline-on"],["h1","h1-outline-on"],["h2","h2-outline-on"],["h3","h3-outline-on"],["h4","h4-outline-on"],["h5","h5-outline-on"],["h6","h6-outline-on"],[".center-line","center-line-outline-on"]].forEach((([e,t])=>{((e,t)=>{document.querySelectorAll(e).forEach((e=>{e.classList.toggle(t)}))})(e,t)}))}))})();