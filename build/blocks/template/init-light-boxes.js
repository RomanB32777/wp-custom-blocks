(()=>{"use strict";(()=>{const e=document.querySelector("#light-modal"),l=e.querySelector("#light-modal-preview");if(!e&&!l)return;const t=document.querySelectorAll(".light-modal-image"),c=e.querySelectorAll(".light-modal-close");t.forEach((t=>{t.addEventListener("click",(()=>{e.classList.toggle("hidden"),l.src=t.src,l.alt=t.alt}))})),c.forEach((l=>l.addEventListener("click",(()=>{e.classList.toggle("hidden")}))))})()})();