(this["webpackJsonpturnip-market-frt"]=this["webpackJsonpturnip-market-frt"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=(n(14),n(1)),i=function(e){var t=e.setPseudo,n=Object(a.useState)(""),c=Object(u.a)(n,2),o=c[0],i=c[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Enter your pseudo",onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:function(){return t(o)}},"OK"))},l=n(8),s=n(2),m=n.n(s),p=n(5),d=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://turnip-market-api.herokuapp.com/api/v1","/markets/"),{method:"POST",body:JSON.stringify({name:t}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.id,c=a.name,o=a.offers,e.abrupt("return",{id:r,name:c,offers:o});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.addMarketId,n=Object(a.useState)(),c=Object(u.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(),s=Object(u.a)(l,2),f=s[0],h=s[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(o);case 2:n=e.sent,t(n.id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"New market name",onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:v},"Create new market")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Existing market ID",onChange:function(e){return h(e.target.value)}}),r.a.createElement("button",{onClick:function(){return t(f)}},"Join existing market")))},h=function(e){e.pseudo;var t=Object(a.useState)(function(){var e=localStorage.getItem("marketIds");return e&&e.split("::")||[]}()),n=Object(u.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){!function(e){localStorage.setItem("marketIds",e.join("::"))}(c)}),[c]),r.a.createElement("div",null,r.a.createElement(f,{addMarketId:function(e){return o([].concat(Object(l.a)(c),[e]))}}),c.join(", "))},v=function(){var e=Object(a.useState)(localStorage.getItem("pseudo")),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){n&&localStorage.setItem("pseudo",n)}),[n]),r.a.createElement("div",null,"production",r.a.createElement("header",null,r.a.createElement("h1",null,"Turnip Market"),n&&r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"Hello"},"\ud83d\udc4b")," ",n)),n?r.a.createElement(h,{pseudo:n}):r.a.createElement(i,{setPseudo:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6ae81606.chunk.js.map