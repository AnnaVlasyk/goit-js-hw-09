!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var u=o("6JpON"),i=document.querySelector(".form"),a=document.querySelector("input[name=delay]"),c=document.querySelector("input[name=step]"),l=document.querySelector("input[name=amount]");function f(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o&&t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")),r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}i.addEventListener("submit",(function(n){n.preventDefault();var t=parseInt(a.value),r=parseInt(c.value),o=parseInt(l.value);if(t<0||r<0||o<=0)return void e(u).Report.failure("Incorrect value","Enter correct values","Continue");for(var i=1;i<=o;i++)f(i,t).then((function(n){return e(u).Notify.success(n)})).catch((function(n){return e(u).Notify.failure(n)})),t+=r}))}();
//# sourceMappingURL=03-promises.8b6e643b.js.map