(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),u=a.n(c),i=(a(14),a(1)),l=a(5),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=u.trim();/^[a-z-A-Z]([a-z A-Z 0-9]+){3,4}$/.test(a)&&t((function(e){return void 0===e.find((function(e){return e===a}))?(o(""),[a].concat(Object(l.a)(e))):(o(""),Object(l.a)(e))}))}},r.a.createElement("input",{type:"text",className:"add-category",placeholder:"Ingrese Su Personaje",value:u,onChange:function(e){o(e.target.value)}}))},s=a(4),m=a.n(s),f=a(8),d=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"OuwmR5EG9B1vMrSEfRufDT8ERXlq3PA1",a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&lang=es&limit=10&api_key=").concat("OuwmR5EG9B1vMrSEfRufDT8ERXlq3PA1"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.url,a=e.title;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("p",null,a))},E=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,u=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),u&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Cargando...."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},g=function(){var e=Object(n.useState)(["One Punch"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(E,{category:e,key:e})}))))};u.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a68a3039.chunk.js.map