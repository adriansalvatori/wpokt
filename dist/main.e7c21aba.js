parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
window.onload=function(){var e=document.querySelectorAll(".droptrigger"),t=document.querySelectorAll(".drop");function o(){t.forEach(function(e){e.classList.add("is-hidden")}),e.forEach(function(e){e.classList.remove("is-down")})}e.forEach(function(e){e.addEventListener("click",function(t){var n=e.nextElementSibling.classList.contains("is-hidden");o(),n?(e.classList.toggle("is-down"),e.nextElementSibling.classList.toggle("is-hidden"),e.nextElementSibling.scrollIntoView({block:"center",behavior:"smooth"})):e.scrollIntoView({block:"center",behavior:"smooth"})})}),o();var n=document.querySelectorAll(".menutrigger"),c=document.querySelector(".mobile-menu");function i(e){new IntersectionObserver(function(e){var t=document.querySelectorAll('a[href="#'+e[0].target.id+'"]');!0===e[0].isIntersecting?t.forEach(function(e){e.classList.add("focus")}):t.forEach(function(e){e.classList.remove("focus")})},{rootMargin:"-200px 0px",threshold:[0]}).observe(e)}n.forEach(function(e){e.addEventListener("click",function(){c.classList.toggle("is-hidden")})}),i(document.querySelector("#start")),i(document.querySelector("#about")),i(document.querySelector("#faq")),document.body.addEventListener("submit",function(e){e.preventDefault();var t=document.querySelector("#pixel-form-email").value;""!=t&&fetch("https://wpokt-form-signup.herokuapp.com/v1/wpokt",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then(function(e){console.log(e),document.querySelector(".modal").classList.toggle("is-active")})})};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.e7c21aba.js.map