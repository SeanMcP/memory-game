function t(t){let e=[...t];for(let t=e.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}return e}const e=["🐮","🐷","🐶","🐱","🦁","🐻","🐯","🐼","🐵","🐸","🐹"];const a=document.getElementById("game");function n(){delete a.dataset.count,delete a.dataset.last,delete a.dataset.state;const n=function(a=16){const n=t(e).slice(0,a/2);return t([...n,...n])}(16);let s="";n.forEach(((t,e)=>{s+=`<button data-type="card" data-key="${"abcdefghijklmnopqrstuvwxyz"[e]}">${t}</button>`})),a.innerHTML=s}n(),a.addEventListener("click",(t=>{const{target:e}=t;if("frozen"===a.dataset.state||e.dataset.state)return t.preventDefault();if("card"===e.dataset.type)if(e.dataset.state="active",a.dataset.last){if(e.textContent===a.dataset.last){document.querySelectorAll("[data-state='active']").forEach((t=>{t.dataset.state="done"}));const t=parseInt(a.dataset.count)+1||1;if(a.dataset.count=t,8===t&&confirm("💪 Nice practicing! Play again?"))return n()}else a.dataset.state="frozen",setTimeout((()=>{document.querySelectorAll("[data-state='active']").forEach((t=>{delete t.dataset.state})),a.dataset.state="ready"}),2e3);delete a.dataset.last}else a.dataset.last=e.textContent})),window.addEventListener("keypress",(t=>{if("abcdefghijklmnopqrstuvwxyz".slice(0,16).includes(t.key)){t.preventDefault();const e=document.querySelector(`[data-key="${t.key}"]`);e&&e.click()}}));
//# sourceMappingURL=index.670e9ebd.js.map