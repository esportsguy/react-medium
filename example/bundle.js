!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/example/",t(0)}([function(e,t,n){"use strict";n(8),n(7);var r=n(3),i=n(9),o=n(4),s=r.createClass({displayName:"App",getInitialState:function(){return{audio:{mime:"audio/mpeg3",src:"test.mp3"},video:{mime:"video/mpeg",src:"https://d301dinc95ec5f.cloudfront.net/capture/dreamhackcs-20150920202118125.shot.mp4"}}},render:function(){return r.createElement("div",{className:"app"},r.createElement("h1",null,"react-medium"),r.createElement(o,{medium:this.state.audio}),r.createElement(o,{medium:this.state.video}))}});i.render(r.createElement(s,null),document.getElementById("app"))},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(c(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],s=i[1],a=i[2],u=i[3],c={css:s,media:a,sourceMap:u};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=v(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var o=y++;n=g||(g=a(t)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=f.bind(null,n),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=d.bind(null,n),i=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function d(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=m(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],u=p[a.id];u.refs--,o.push(u)}if(e){var c=i(e);r(c,t)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete p[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=React},function(e,t,n){"use strict";var r=n(3);e.exports=r.createClass({displayName:"Medium",play:function(){this.refs.medium},renderMedium:function(){var e=this.props.medium,t=e.src,n=e.mime,i=n.split("/");switch(i[0]){case"video":return r.createElement("video",{className:"video-js",ref:"medium",controls:!0},r.createElement("source",{src:t,type:"video/mp4"}));case"audio":return r.createElement("audio",{ref:"medium",src:t});case"image":return r.createElement("img",{ref:"medium",src:t})}},componentDidMount:function(){var e=this.props.medium.mime,t=e.split("/");"video"===t[0]&&videojs(this.refs.medium,{},function(){console.log("videojs created")})},render:function(){this.props.medium;return r.createElement("div",{className:"m-medium"},this.renderMedium(),r.createElement("div",{className:"play"},r.createElement("div",{className:"play-button",onClick:this.handleClick},"play")))},handleClick:function(e){this.play()}})},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"*,:after,:before{box-sizing:border-box}.app{max-width:400px;margin:0 auto}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"img,video{max-width:100%}",""])},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){e.exports=ReactDOM}]);
//# sourceMappingURL=bundle.js.map