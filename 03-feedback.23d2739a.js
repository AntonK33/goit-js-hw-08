var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return l.Date.now()};function p(t,e,o){var r,i,a,f,u,c,l=0,s=!1,p=!1,b=!0;if("function"!=typeof t)throw new TypeError(n);function S(e){var n=r,o=i;return r=i=void 0,l=e,f=t.apply(o,n)}function j(t){return l=t,u=setTimeout(h,e),s?S(t):f}function O(t){var n=t-c;return void 0===c||n>=e||n<0||p&&t-l>=a}function h(){var t=v();if(O(t))return w(t);u=setTimeout(h,function(t){var n=e-(t-c);return p?g(n,a-(t-l)):n}(t))}function w(t){return u=void 0,b&&r?S(t):(r=i=void 0,f)}function T(){var t=v(),n=O(t);if(r=arguments,i=this,c=t,n){if(void 0===u)return j(c);if(p)return u=setTimeout(h,e),S(c)}return void 0===u&&(u=setTimeout(h,e)),f}return e=y(e)||0,m(o)&&(s=!!o.leading,a=(p="maxWait"in o)?d(y(o.maxWait)||0,e):a,b="trailing"in o?!!o.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},T.flush=function(){return void 0===u?f:w(v())},T}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,o){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(n);return m(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),p(t,e,{leading:r,maxWait:e,trailing:i})};const b=document.querySelector(".feedback-form"),S=document.querySelector("textarea");b.addEventListener("submit",(function(t){t.preventDefault(),console.log("Storage:",JSON.parse(localStorage.getItem(j))),localStorage.removeItem(j),t.target.reset()})),S.addEventListener("input",e((function(t){const e=t.target.value;localStorage.setItem(j,JSON.stringify(e))}),1e3));const j="feedback-form-state";!function(){const t=JSON.parse(localStorage.getItem(j));t&&(console.log(t),S.value=t)}();
//# sourceMappingURL=03-feedback.23d2739a.js.map