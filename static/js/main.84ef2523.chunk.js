(this.webpackJsonpayrlomusic=this.webpackJsonpayrlomusic||[]).push([[0],{13:function(e,t,a){},22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),l=(a(27),a(13),a(8)),m="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=date&q=ayrlo&type=video&key="+Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_YOUTUBE_API_TOKEN,i=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1],i=[{id:{videoId:"kPEA6Kc-6sc"}},{id:{videoId:"STaNwmExtHg"}},{id:{videoId:"r1qllo-mnP8"}}];return Object(n.useEffect)((function(){var e=r;fetch(m).then((function(e){return e.json()})).catch((function(e){return e||{}})).then((function(t){if(e.length>0);else{if(e=["",""],void 0!==t.error)return void c(i);c(t.items)}}))}),[r]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"page-group"},o.a.createElement("div",{className:"social-group"},o.a.createElement("iframe",{scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/127696064&color=%236e9dc7",key:1,title:"1"})),o.a.createElement("div",{className:"youtube-canvas"},r.map((function(e,t){return o.a.createElement("iframe",{title:t,key:t,src:"https://www.youtube.com/embed/".concat(e.id.videoId),frameBorder:"0"})})))))},s=a(18),u=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){a.length<1&&r([1,2])}),[a.length]),a.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement(s.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"description",content:"Nested component"}),o.a.createElement("meta",{property:"og:site_name",content:"Ayrlomusic"}),o.a.createElement("meta",{property:"og:title",content:"Ayrlomusic"}),o.a.createElement("meta",{property:"og:url",content:"https://www.ayrlomusic.com"}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:description",content:"The official website of Ayrlo."}),o.a.createElement("meta",{itemProp:"name",content:"Ayrlo"}),o.a.createElement("meta",{itemProp:"url",content:"https://www.ayrlomusic.com"}),o.a.createElement("meta",{itemProp:"description",content:"The official website of Ayrlo."}),o.a.createElement("meta",{name:"twitter:title",content:"Ayrlo"}),o.a.createElement("meta",{name:"twitter:url",content:"https://www.ayrlomusic.com"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:description",content:"The official website of Ayrlo."}),o.a.createElement("meta",{name:"description",content:"The official website of Ayrlo."}),o.a.createElement("title",null,"Ayrlo Music"),o.a.createElement("link",{rel:"canonical",href:"https://www.ayrlomusic.com"})),o.a.createElement(i,null)):o.a.createElement(o.a.Fragment,null,o.a.createElement("small",null,"Wainting for a moment "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(34);var p=a(19),d=a(5);c.a.render(o.a.createElement(p.a,null,o.a.createElement("div",{className:"page-full"},o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:u})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.84ef2523.chunk.js.map