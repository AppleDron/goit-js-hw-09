function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form");function u(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault();let o=Number(l.delay.value);const n=Number(l.amount.value),r=Number(l.step.value);if(r<0||o<0||n<=0)return void e(i).Report.failure("Failure","Please take correct values","Try again");for(let t=1;t<=n;t+=1)u(t,o).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),o+=r}));
//# sourceMappingURL=03-promises.693c8055.js.map