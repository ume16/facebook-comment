(this["webpackJsonpfacebook-comment"]=this["webpackJsonpfacebook-comment"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var _=n(1),c=n.n(_),o=n(4),s=n.n(o),i=(n(11),n(3)),r=n.n(i),a=n(5),l=n(6),d=(n(13),n(0));var p=function(){var t=Object(_.useState)(""),e=Object(l.a)(t,2),n=e[0],c=e[1],o=function(){var t=Object(a.a)(r.a.mark((function t(){var e,_;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.slice(n.lastIndexOf("/")+1),_="https://wkrix-comment-collector.herokuapp.com/".concat(e,"/json"),t.next=4,fetch(_).then((function(t){return t.json()})).then((function(t){var e=new Blob([JSON.stringify(t)],{type:"text/plain"}),n=document.createElement("a");n.download="comments.txt",n.href=(window.webkitURL||window.URL).createObjectURL(e),n.dataset.downloadurl=["text/plain",n.download,n.href].join(":"),n.click()}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"App-body",children:[Object(d.jsx)("link",{"data-require":"bootstrap-css","data-semver":"3.3.6",rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css"}),Object(d.jsxs)("div",{style:{fontFamily:"monospace",color:"white",width:"auto",whiteSpace:"pre",backgroundColor:"#282c34",fontSize:14,marginTop:-250,marginBottom:50},children:[Object(d.jsx)("p",{children:" ___ ___  __  __ __  __ ___ _  _ _____    ___ ___  _    _    ___ ___ _____ ___  ___"}),Object(d.jsx)("p",{children:"/ __/ _ \\|  \\/  |  \\/  | __| \\| |_   _|  / __/ _ \\| |  | |  | __/ __|_   _/ _ \\| _ \\"}),Object(d.jsx)("p",{children:"| (_| (_) | |\\/| | |\\/| | _|| .` | | |   | (_| (_) | |__| |__| _| (__  | || (_) |   /"}),Object(d.jsx)("p",{children:"\\___\\___/|_|  |_|_|  |_|___|_|\\_| |_|    \\___\\___/|____|____|___\\___| |_| \\___/|_|_\\"}),Object(d.jsxs)("p",{children:["L\u01afU \xdd: Tool ch\u1ec9 ho\u1ea1t \u0111\u1ed9ng v\u1edbi ",Object(d.jsx)("b",{style:{color:"red"},children:"public post"})," (ch\u1eb3ng h\u1ea1n nh\u01b0 https://www.facebook.com/weibovietnam/posts/4862365597146758)"]}),"developed by @_lmtri with \u2764\ufe0f"]}),Object(d.jsx)("div",{className:"input-bar",children:Object(d.jsxs)("div",{className:"input-bar-item width100",children:[Object(d.jsx)("input",{className:"form-control width100",onChange:function(t){return c(t.target.value)}}),Object(d.jsx)("button",{className:"btn btn-info",style:{marginLeft:"-49.5rem",top:-1},onClick:function(){var t=n.slice(n.lastIndexOf("/")+1),e="https://wkrix-comment-collector.herokuapp.com/".concat(t,"/csv");window.open(e).focus()},children:"T\u1ea3i file excel"}),Object(d.jsx)("button",{className:"btn btn-info",style:{top:-1},onClick:o,children:"T\u1ea3i file json"})]})})]})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,_=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),_(t),c(t),o(t),s(t)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.7b9d4b2d.chunk.js.map