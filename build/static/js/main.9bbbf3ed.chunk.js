(this.webpackJsonpayrlomusic=this.webpackJsonpayrlomusic||[]).push([[0],{12:function(e,t,n){},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(14),c=n.n(r),i=(n(24),n(12),n(18)),s=function(){return fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=ayrlo&type=video&key=AIzaSyDt-Jo0h8x-uQ7EhMHR4GB7Ug2PY_3bt3w").then((function(e){return e.json()})).catch((function(e){return e||{}}))},u=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=[{id:{videoId:"Kxwwv6swXQk"}}];return Object(o.useEffect)((function(){var e=n;s().then((function(t){if(e.length>0);else{if(e=["",""],console.log("SUCCES",t),void 0!==t.error)return void r(c);r(t.items)}}))}),[n]),console.log("SUCCES",n),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"page-group"},n.map((function(e,t){return a.a.createElement("iframe",{title:t,key:t,src:"https://www.youtube.com/embed/".concat(e.id.videoId),frameBorder:"0"})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(25);var l=n(15),m=n(5);c.a.render(a.a.createElement(l.a,null,a.a.createElement("div",{className:"page-full"},a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:u})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9bbbf3ed.chunk.js.map