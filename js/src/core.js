!function(){"use strict";function a(a,b){-1===a.className.indexOf(b)&&(a.className+=" "+b)}function b(a,b){a.className=a.className.replace(" "+b,"")}function c(c,d){-1===c.className.indexOf(d)?a(c,d):b(c,d)}function d(a,b){function c(g){var h=g-d;if(h>=b)window.scroll(0,a);else{var i=e+h/b*f;window.scroll(0,i),requestAnimationFrame(c)}}var d=performance.now(),e=window.scrollY,f=a-e;requestAnimationFrame(c)}!function(){for(var a=0,b=["webkit","moz"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(),function(){if("undefined"==typeof window.performance&&(window.performance={}),!window.performance.now){var a=Date.now();performance.timing&&performance.timing.navigationStart&&(a=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-a}}}(),window.onload=function(){function e(){l||(l=!0,k=k||f(),window.scrollY>=k?a(h,"stuck"):b(h,"stuck"),l=!1)}function f(){window.innerHeight!==j&&(k=i.offsetTop+i.clientHeight-h.clientHeight)}function g(){c(this,"open")}var h=document.querySelector("nav"),i=document.querySelector("header"),j=window.innerHeight,k=i.offsetTop+i.clientHeight-h.clientHeight,l=!1;window.addEventListener("scroll",e,!1),window.addEventListener("resize",f,!1),h.addEventListener("touchend",g,!0),h.addEventListener("click",g,!1),[].forEach.call(h.childNodes,function(a){a.addEventListener("click",function(c){c.preventDefault(),c.stopPropagation();var e=document.querySelector(a.getAttribute("href"));window.innerWidth>800?d(e.offsetTop-h.clientHeight,200):(d(e.offsetTop,200),b(h,"open"))})});var m=document.getElementById("contact");m.addEventListener("submit",function(a){a.preventDefault();for(var b=m.querySelectorAll("input, textarea"),c="idstamp=pwa/kwhHIw32zcD08ajI3h6Pks83ImMIPJ1ef6tJmoc=",d=b.length-1;d>-1;)c+="&"+b[d].id+"="+encodeURIComponent(b[d].value),d--;var e=document.querySelector("iframe");e&&e.parentNode.removeChild(e),e=document.createElement("iframe"),e.setAttribute("name","foo"),e.setAttribute("aria-hidden","true"),e=document.body.appendChild(e);var f=e.contentWindow?e.contentWindow:e.contentDocument.document?e.contentDocument.document:e.contentDocument;if(e.onload=function(){m.querySelector("form").setAttribute("aria-hidden","true"),m.querySelector("#contact-thanks").removeAttribute("aria-hidden")},f.document){f=f.document.open();var g=f.appendChild(m.querySelector("form").cloneNode(!0));g.submit()}})}}();