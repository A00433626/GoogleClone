(this.webpackJsonpgoogleclone=this.webpackJsonpgoogleclone||[]).push([[0],{51:function(e,a,t){e.exports=t(69)},56:function(e,a,t){},57:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),s=(t(56),t(57),t(58),t(59),t(5)),o=t(41),m=t.n(o),i=t(84),u=t(36),p=t(16),g=(t(60),t(27)),h=t.n(g),E=t(40),d=t.n(E),v=t(83),f=t(3),b=t(28),N="SET_SEARCH_TERM",w=function(e,a){switch(console.log(e,a),a.type){case N:return Object(b.a)(Object(b.a)({},e),{},{term:a.term});default:return e}},_=Object(n.createContext)(),j=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(_.Provider,{value:Object(n.useReducer)(a,t)},c)},x=function(){return Object(n.useContext)(_)};var O=function(e){var a=e.hideButtons,t=void 0!==a&&a,c=x(),l=Object(p.a)(c,2);Object(u.a)(l[0]);var s=l[1],o=Object(n.useState)(""),m=Object(p.a)(o,2),i=m[0],g=m[1],E=Object(f.f)();return r.a.createElement("form",{className:"search-box"},r.a.createElement("div",{className:"search-box-input"},r.a.createElement(h.a,{className:"search-box-input-search-icon"}),r.a.createElement("input",{value:i,onChange:function(e){g(e.target.value)}}),r.a.createElement(d.a,{className:"search-box-input-microphone-icon"})),t?"":r.a.createElement("div",{className:"search-box-buttons"},r.a.createElement(v.a,{type:"submit",variant:"outlined",onClick:function(e){e.preventDefault(),s({type:N,term:i}),E.push("/search")}},"Google Search"),r.a.createElement(v.a,{variant:"outlined"},"I'm Feeling Lucky")))};var k=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"homepage_nav-header"},r.a.createElement("div",{className:"homepage_nav-header-left"},r.a.createElement(s.b,{to:"./about"},"About"),r.a.createElement(s.b,{to:"./store"},"Store")),r.a.createElement("div",{className:"homepage_nav-header-right"},r.a.createElement(s.b,{to:"./gmail"},"Gmail"),r.a.createElement(s.b,{to:"./images"},"Images"),r.a.createElement(m.a,null),r.a.createElement(i.a,null))),r.a.createElement("div",{className:"homepage_nav-body"},r.a.createElement("img",{alt:"Google",height:"92",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}),r.a.createElement("div",{className:"homepage_nav-search-input"},r.a.createElement(O,{hideButtons:!1}))))},y=t(31),S=t.n(y),I=t(42),C="AIzaSyCGtt8IzUCfqsGYsP2fQ1P6rEt5kyqBqqI",A=function(e){var a=Object(n.useState)(null),t=Object(p.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(I.a)(S.a.mark((function a(){return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat(C,"&cx=").concat("b222ce76f6345f3ee","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){return c(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:r}},B=(t(68),t(43)),q=t.n(B),G=t(44),T=t.n(G),R=t(45),P=t.n(R),z=t(46),H=t.n(z),J=t(47),L=t.n(J);function M(){var e=x(),a=Object(p.a)(e,2),t=a[0].term,n=(a[1],A(t).data);return r.a.createElement("div",{className:"search-result-page"},r.a.createElement("div",{className:"search-result-page_Header"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:"logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""})),r.a.createElement("div",{className:"search-result-page_search"},r.a.createElement(O,{hideButtons:!0}),r.a.createElement("div",{className:"search-result-page_options"},r.a.createElement("div",{className:"search-result-page-options-left"},r.a.createElement("div",{className:"search-result-page-option"},r.a.createElement(h.a,null),r.a.createElement(s.b,{to:"/all"},"All")),r.a.createElement("div",{className:"search-result-page-option"},r.a.createElement(q.a,null),r.a.createElement(s.b,{to:"/news"},"News")),r.a.createElement("div",{className:"search-result-page-option"},r.a.createElement(T.a,null),r.a.createElement(s.b,{to:"/images"},"Images")),r.a.createElement("div",{className:"search-result-page-option"},r.a.createElement(P.a,null),r.a.createElement(s.b,{to:"/shopping"},"shopping")),r.a.createElement("div",{className:"search-result-page-option"},r.a.createElement(H.a,null),r.a.createElement(s.b,{to:"/maps"},"shopping")),r.a.createElement("div",{className:"search-result-page-option"},r.a.createElement(L.a,null),r.a.createElement(s.b,{to:"/more"},"more"))),r.a.createElement("div",{className:"search-result-page-options-right"},r.a.createElement("div",{className:"search-result-page-option"},r.a.createElement(s.b,{to:"/settings"},"Settings")),r.a.createElement("div",{className:"search-result-page-option"},r.a.createElement(s.b,{to:"/tools"},"Tools")))))),t&&r.a.createElement("div",{className:"search-result-page_results"},r.a.createElement("p",{className:"search-result-page_results-count"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results"," ",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," for ",t),null===n||void 0===n?void 0:n.items.map((function(e){return r.a.createElement("div",{className:"search-result-page_results-data"},r.a.createElement("a",{href:e.link},e.displayLink),r.a.createElement("a",{className:"search-result-page_results-data-title",href:e.link},r.a.createElement("h2",null,e.title)),r.a.createElement("p",{className:"search-result-page_results-data-snippet"},e.snippet))}))))}var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/search"},r.a.createElement(M,null)),r.a.createElement(f.a,{path:"/"},r.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,{initialState:{term:null},reducer:w},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.5d7bb2aa.chunk.js.map