(this.webpackJsonpayrlomusic=this.webpackJsonpayrlomusic||[]).push([[0],{12:function(e,t,n){},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),i=(n(24),n(12),n(18)),u=function(){return fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=ayrlo&type=video&key=AIzaSyDt-Jo0h8x-uQ7EhMHR4GB7Ug2PY_3bt3w").then((function(e){return e.json()})).catch((function(e){return e||{}}))},l=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=n;u().then((function(t){e.length>0||(e=["",""],r(t.items))}))}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"page-group"},n.map((function(e,t){return o.a.createElement("a",{target:"_blank",key:t,href:"https://www.youtube.com/embed/".concat(e.id.videoId)},o.a.createElement("img",{title:t,key:t,width:"130rem",height:"100rem",src:e.snippet.thumbnails.default.url}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(25);var s=n(15),m=n(5);c.a.render(o.a.createElement(s.a,null,o.a.createElement("div",{className:"page-full"},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:l})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.70c7de20.chunk.js.map