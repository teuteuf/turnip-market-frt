(this["webpackJsonpturnip-market-frt"]=this["webpackJsonpturnip-market-frt"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),l=(n(12),n(1)),u=function(e){var t=e.setPseudo,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Enter your pseudo",onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{onClick:function(){return t(c)}},"OK"))},i=n(6),s=function(e){var t=e.addMarketId,n=Object(a.useState)(),o=Object(l.a)(n,2),c=o[0],u=o[1],i=Object(a.useState)(),s=Object(l.a)(i,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"New market name",onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{onClick:function(){return console.log(c)}},"Create new market")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Existing market ID",onChange:function(e){return d(e.target.value)}}),r.a.createElement("button",{onClick:function(){return t(m)}},"Join existing market")))},m=function(e){e.pseudo;var t=Object(a.useState)(function(){var e=localStorage.getItem("marketIds");return e&&e.split("::")||[]}()),n=Object(l.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)((function(){!function(e){localStorage.setItem("marketIds",e.join("::"))}(o)}),[o]),r.a.createElement("div",null,r.a.createElement(s,{addMarketId:function(e){return c([].concat(Object(i.a)(o),[e]))}}),o.join(", "))},d=function(){var e=Object(a.useState)(localStorage.getItem("pseudo")),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){n&&localStorage.setItem("pseudo",n)}),[n]),r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Turnip Market"),n&&r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"Hello"},"\ud83d\udc4b")," ",n)),n?r.a.createElement(m,{pseudo:n}):r.a.createElement(u,{setPseudo:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.35536759.chunk.js.map