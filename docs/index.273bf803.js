function t(t){let e=[...t];for(let t=e.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}return e}const e=["🐮","🐷","🐶","🐱","🦁","🐻","🐯","🐼","🐵","🐸","🐹"];const a=document.getElementById("game"),n=function(){const t=new URLSearchParams(location.search).get("count"),e=parseInt(t);return e&&e%2==0&&e>=2&&e<=16?e:16}();function s(){delete a.dataset.count,delete a.dataset.last,delete a.dataset.state;const s=function(a=16){const n=t(e).slice(0,a/2);return t([...n,...n])}(n);let c="";s.forEach(((t,e)=>{c+=`<button data-type="card" data-key="${"abcdefghijklmnopqrstuvwxyz"[e]}">${t}</button>`})),a.innerHTML=c}a.style.setProperty("--columns",Math.ceil(Math.sqrt(n))),s(),a.addEventListener("click",(t=>{const{target:e}=t;if("frozen"===a.dataset.state||e.dataset.state)return t.preventDefault();if("card"===e.dataset.type)if(e.dataset.state="active",a.dataset.last){if(e.textContent===a.dataset.last){document.querySelectorAll("[data-state='active']").forEach((t=>{t.dataset.state="done"}));const t=parseInt(a.dataset.count)+1||1;if(a.dataset.count=t,t===n/2&&confirm("💪 Nice practicing! Play again?"))return s()}else a.dataset.state="frozen",setTimeout((()=>{document.querySelectorAll("[data-state='active']").forEach((t=>{delete t.dataset.state})),a.dataset.state="ready"}),2e3);delete a.dataset.last}else a.dataset.last=e.textContent})),window.addEventListener("keypress",(t=>{if("abcdefghijklmnopqrstuvwxyz".slice(0,n).includes(t.key)){t.preventDefault();const e=document.querySelector(`[data-key="${t.key}"]`);e&&e.click()}}));
//# sourceMappingURL=index.273bf803.js.map
