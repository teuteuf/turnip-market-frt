(this["webpackJsonpturnip-market-frt"]=this["webpackJsonpturnip-market-frt"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),u=n.n(c),o=(n(14),n(2)),s=function(e){var t=e.setPseudo,n=Object(r.useState)(""),c=Object(o.a)(n,2),u=c[0],s=c[1];return a.a.createElement("div",null,a.a.createElement("input",{type:"text",placeholder:"Enter your pseudo",onChange:function(e){return s(e.target.value)}}),a.a.createElement("button",{onClick:function(){return t(u)}},"OK"))},i=n(8),l=n(1),p=n.n(l),m=n(3),f=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r,a,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://turnip-market-api.herokuapp.com/api/v1","/markets/"),{method:"POST",body:JSON.stringify({name:t}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.id,c=r.name,u=r.activeOffers,e.abrupt("return",{id:a,name:c,activeOffers:u});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r,a,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://turnip-market-api.herokuapp.com/api/v1","/markets/").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.id,c=r.name,u=r.activeOffers,e.abrupt("return",{id:a,name:c,activeOffers:u});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r,a,c,u,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://turnip-market-api.herokuapp.com/api/v1","/markets/").concat(t,"/offers"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,c=a.player,u=a.startTime,o=a.endTime,s=a.price,e.abrupt("return",{player:c,startTime:u,endTime:o,price:s});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(e){var t=e.addMarketId,n=Object(r.useState)(),c=Object(o.a)(n,2),u=c[0],s=c[1],i=Object(r.useState)(),l=Object(o.a)(i,2),d=l[0],h=l[1],v=function(){var e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(u);case 2:n=e.sent,t(n.id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{type:"text",placeholder:"New market name",onChange:function(e){return s(e.target.value)}}),a.a.createElement("button",{onClick:v},"Create new market")),a.a.createElement("div",null,a.a.createElement("input",{type:"text",placeholder:"Existing market ID",onChange:function(e){return h(e.target.value)}}),a.a.createElement("button",{onClick:function(){return t(d)}},"Join existing market")))},k=function(e){var t=e.market;return a.a.createElement("div",null,a.a.createElement("h3",null,t.name," (",t.id,")"),t.activeOffers.length>0&&a.a.createElement("ul",null,t.activeOffers.map((function(e){return a.a.createElement("li",{key:e.player},a.a.createElement("span",null,"- ",e.player," -"),a.a.createElement("span",null,"- ",e.price," -"),a.a.createElement("span",null,"- ",e.endTime," -"))}))),0===t.activeOffers.length&&a.a.createElement("strong",null,"no active offers!"))},b=function(e){var t=e.pseudo,n=e.marketIds,c=e.refreshMarkets,u=Object(r.useState)(0),s=Object(o.a)(u,2),i=s[0],l=s[1],f=function(){var e=Object(m.a)(p.a.mark((function e(){var r,a,u,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,a=r.getHours()<12,u=new Date,o=new Date,a?(u.setHours(8,0,0,0),o.setHours(12,0,0,0)):(u.setHours(12,0,0,0),o.setHours(22,0,0,0)),s={player:t,price:i,startTime:u,endTime:o},e.next=8,Promise.all(n.map(function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,s);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:c();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("input",{type:"number",placeholder:"$$$$",onChange:function(e){return l(parseInt(e.target.value))}}),a.a.createElement("button",{onClick:f},"Send Offer"))},E=function(e){var t=e.pseudo,n=Object(r.useState)(function(){var e=localStorage.getItem("marketIds");return e&&e.split("::")||[]}()),c=Object(o.a)(n,2),u=c[0],s=c[1],l=Object(r.useState)([]),f=Object(o.a)(l,2),h=f[0],E=f[1],O=Object(r.useCallback)(Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(u.map(function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:t=e.sent,E(t);case 4:case"end":return e.stop()}}),e)}))),[u]);Object(r.useEffect)((function(){O()}),[u,O]);return Object(r.useEffect)((function(){!function(e){localStorage.setItem("marketIds",e.join("::"))}(u)}),[u]),a.a.createElement("div",null,a.a.createElement(b,{pseudo:t,marketIds:u,refreshMarkets:O}),h.map((function(e){return a.a.createElement(k,{key:e.id,market:e})})),a.a.createElement(v,{addMarketId:function(e){return s([].concat(Object(i.a)(u),[e]))}}))},O=function(){var e=Object(r.useState)(localStorage.getItem("pseudo")),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){n&&localStorage.setItem("pseudo",n)}),[n]),a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("h1",null,"Turnip Market"),n&&a.a.createElement("h2",null,a.a.createElement("span",{role:"img","aria-label":"Hello"},"\ud83d\udc4b")," ",n)),n?a.a.createElement(E,{pseudo:n}):a.a.createElement(s,{setPseudo:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7cf67913.chunk.js.map