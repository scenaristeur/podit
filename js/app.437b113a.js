(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"708aab9d","chunk-20b5feb7":"6d904782","chunk-2d0e96e4":"a89c5e2f","chunk-e592f350":"4fb9254b","chunk-2d0dd031":"0ac75fb8","chunk-2d0e5f33":"4ab1dbb6","chunk-2d0c13e4":"4322dcf9","chunk-876f783a":"91496a54","chunk-69d49705":"b54c9251","chunk-2d0aa17c":"10d4eeb1"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-20b5feb7":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-20b5feb7":"05d97788","chunk-2d0e96e4":"31d6cfe0","chunk-e592f350":"31d6cfe0","chunk-2d0dd031":"31d6cfe0","chunk-2d0e5f33":"31d6cfe0","chunk-2d0c13e4":"31d6cfe0","chunk-876f783a":"31d6cfe0","chunk-69d49705":"31d6cfe0","chunk-2d0aa17c":"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/podit/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0bc5":function(e,t,n){},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view"),e._v(" "+e._s(e.session)+" ")],1)},a=[],c={name:"App",components:{},created:function(){this.$checkSession()},mounted:function(){},watch:{$route:function(){void 0!=this.$route.query.source&&this.$route.query.source.length>0?this.$processSource(this.$route.query):(this.$store.commit("nodes/setSource",null),this.$checkSession())}},computed:{session:{get:function(){return this.$store.state.solid.session},set:function(){}}}},s=c,u=(n("034f"),n("2877")),i=Object(u["a"])(s,o,a,!1,null,null,null),l=i.exports,d=n("9483");Object(d["a"])("".concat("/podit/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("Verse has been updated, please close the app & re-open")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Login"),n("br"),n("Browser"),n("HelloWorld",{attrs:{msg:"Welcome to Podit"}})],1)},h=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" With Podit you can create a Website in only a few minutes."),n("br"),e._v(" All data is stored on your "),n("a",{attrs:{href:"https://solidproject.org/",target:"_blank"}},[e._v("Solid Pod")])]),n("h3",[e._v("Login to your pod")]),n("ul",[n("li",[e._v(" Connect to your pod or create one if you don't already have one. All listed providers gives you a free pod. ")])]),n("h3",[e._v("Create a folder for your website")]),n("ul",[n("li",[e._v('Once connected, click on the blue button mentionning your pod under "My pod". ')]),n("li",[e._v('navigate inside the "public" folder.')]),n("li",[e._v('create a new folder with a name like "website" with the '),n("b-icon-folder-plus",{attrs:{variant:"info"}}),e._v(" button")],1),n("li",[e._v('navigate inside the "website" folder.')]),n("li",[e._v('create a new file with a name like "index" with the '),n("b-icon-file-plus",{attrs:{variant:"info"}}),e._v(" button. The '.html' extension is automagically added to your filename.")],1),n("li",[e._v(' Then select your \'index.html\' file. The "Editor" should appear. Click inside the editor and update your index.html file. As soon as your mouse leave the "Editor", your file is update on your POD. ')])])])},g=[],m={name:"HelloWorld",props:{msg:String}},v=m,w=(n("a734"),Object(u["a"])(v,b,g,!1,null,"14a3f164",null)),y=w.exports,k={name:"Home",components:{HelloWorld:y,Login:function(){return n.e("chunk-20b5feb7").then(n.bind(null,"578a"))},Browser:function(){return n.e("chunk-2d0e96e4").then(n.bind(null,"8e01"))}}},x=k,j=Object(u["a"])(x,p,h,!1,null,null,null),O=j.exports;r["default"].use(f["a"]);var _=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],R=new f["a"]({mode:"history",base:"/podit/",routes:_}),S=R,$=n("2f62"),P=n("1da1"),C=(n("96cf"),function(){return{session:null,pod:null}}),I={addWorkspace:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.state.pod.workspaces.push(t),r["default"].prototype.$addWorkspaceToPod(t);case 2:case"end":return n.stop()}}),n)})))()}},A={setPod:function(e,t){console.log("pod",t),e.pod=t},setSession:function(e,t){e.session=t}},T={namespaced:!0,state:C,actions:I,mutations:A},E=function(){return{bureau:null,resource:null,content:null}},L={},W={setBureau:function(e,t){e.bureau=t},setResource:function(e,t){e.resource=t},setContent:function(e,t){e.content=t}},F={namespaced:!0,state:E,actions:L,mutations:W};r["default"].use($["a"]);var N=new $["a"].Store({state:{},mutations:{},actions:{},modules:{solid:T,bureau:F}}),B=n("668b"),D=(n("b0c0"),n("d81d"),n("caad"),n("2532"),n("93ef")),H=n("d11f"),q=n("dbc7"),V=n("8522"),M={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;e.prototype.$checkSession=Object(P["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V["handleIncomingRedirect"]({restorePreviousSession:!0}).then((function(e){if(1==e.isLoggedIn){console.log("Logged in with WebID [".concat(e.webId,"]")),n.commit("solid/setSession",e);var r=V["getDefaultSession"]();t.$getPodInfosFromSession(r)}}));case 2:case"end":return e.stop()}}),e)}))),e.prototype.$login=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("login",t),V["getDefaultSession"]().info.isLoggedIn){e.next=4;break}return e.next=4,V["login"]({oidcIssuer:t,redirectUrl:window.location.href,clientName:"Verse"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$logout=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=V["getDefaultSession"](),e.next=3,t.logout();case 3:n.commit("solid/setSession",null),n.commit("solid/setPod",null);case 5:case"end":return e.stop()}}),e)}))),e.prototype.$getPodInfosFromSession=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r={},r.logged=t.info.isLoggedIn,!r.logged){e.next=14;break}return r.webId=t.info.webId,e.next=6,this.$getPodInfos(r);case 6:r=e.sent,void 0==r.neuroneStore&&(r.neuroneStore=r.storage+"public/neurones/"),void 0==r.workspaces&&(r.workspaces=[]),n.commit("solid/setPod",r),console.log(r),r.storage,e.next=15;break;case 14:n.commit("solid/setPod",null);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfos=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a,c,s,u,i,l,d,f,p,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(D["e"])(t.webId,{fetch:V["fetch"]});case 3:return n=e.sent,e.next=6,Object(D["h"])(n,t.webId);case 6:return r=e.sent,e.next=9,Object(D["g"])(r,H["b"].name);case 9:return t.name=e.sent,e.next=12,Object(D["k"])(r,H["b"].knows).map((function(e){return{webId:e}}));case 12:return t.friends=e.sent,e.next=15,Object(D["j"])(r,q["b"].storage);case 15:return t.storage=e.sent,e.next=18,Object(D["j"])(r,H["c"].hasPhoto);case 18:return t.photo=e.sent,t.workspaces=[],o=t.storage+"settings/publicTypeIndex.ttl",e.next=23,Object(D["e"])(o,{fetch:V["fetch"]});case 23:return a=e.sent,e.next=26,Object(D["i"])(a);case 26:c=e.sent,s=!1,u=!1,e.prev=29,l=Object(B["a"])(c);case 31:return e.next=33,l.next();case 33:if(!(s=!(d=e.sent).done)){e.next=51;break}return f=d.value,e.next=37,Object(D["k"])(f,"http://www.w3.org/ns/solid/terms#forClass");case 37:if(p=e.sent,!p.includes("https://scenaristeur.github.io/verse#Workspace")){e.next=48;break}return console.log(f),h={},e.next=43,Object(D["g"])(f,H["a"].name);case 43:return h.name=e.sent,e.next=46,Object(D["j"])(f,q["a"].instance);case 46:h.storage=e.sent,t.workspaces.push(h);case 48:s=!1,e.next=31;break;case 51:e.next=57;break;case 53:e.prev=53,e.t0=e["catch"](29),u=!0,i=e.t0;case 57:if(e.prev=57,e.prev=58,!s||null==l.return){e.next=62;break}return e.next=62,l.return();case 62:if(e.prev=62,!u){e.next=65;break}throw i;case 65:return e.finish(62);case 66:return e.finish(57);case 67:e.next=72;break;case 69:e.prev=69,e.t1=e["catch"](0),console.log("erreur",e.t1,t);case 72:return e.next=74,t;case 74:return e.abrupt("return",e.sent);case 75:case"end":return e.stop()}}),e,null,[[0,69],[29,53,57,67],[58,,62,66]])})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(M);var J=M,U=(n("ac1f"),n("1276"),n("8a79"),n("99af"),{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n),e.prototype.$getResources=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("path",t),n=[],e.next=4,Object(D["e"])(t,{fetch:V["fetch"]});case 4:return r=e.sent,e.next=7,Object(D["b"])(r,{fetch:V["fetch"]});case 7:return o=e.sent,console.log("remotes",o),n=o.map((function(e){var t={url:e},n=e.split("/");return e.endsWith("/")?(t.name="📁 "+n[n.length-2],t.type="folder"):(t.name="📄 "+n[n.length-1],t.type="file"),t})),e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getResource=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(D["d"])(t.url,{fetch:V["fetch"]});case 2:n=e.sent,console.log("Fetched a ".concat(Object(D["c"])(n)," file from ").concat(Object(D["f"])(n),".")),console.log("The file is rawdata "+"".concat(Object(D["l"])(n))),t.file=n,this.$store.commit("bureau/setResource",t),this.$getContent(t.url);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$updateFile=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),n=t.file.type,e.prev=2,e.next=5,Object(D["m"])(t.url,new Blob([t.content],{type:n}),{contentType:n,fetch:V["fetch"]});case 5:return r=e.sent,console.log("File saved at ".concat(Object(D["f"])(r))),e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getContent=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("get content de ",t),e.prev=1,e.next=4,Object(D["d"])(t,{fetch:V["fetch"]});case 4:r=e.sent,o=new FileReader,o.onload=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=o.result,console.log("content",t),n.commit("bureau/setContent",t);case 3:case"end":return e.stop()}}),e)}))),o.onerror=function(e){console.log(e)},o.readAsText(r),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFolder=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(D["a"])(t,{fetch:V["fetch"]});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}});"undefined"!==typeof window&&window.Vue&&window.Vue.use(U);var K=U,z=n("bf4e"),G=n.n(z),Q=n("5f5b"),X=n("b1e0"),Y=n("6930"),Z=n.n(Y),ee=n("bd8c"),te=n.n(ee);n("f9e3"),n("2dd8");r["default"].use(J,{store:N}),r["default"].use(K,{store:N}),r["default"].use(Z.a),r["default"].use(te.a),r["default"].use(G.a),r["default"].use(Q["a"]),r["default"].use(X["a"]),r["default"].config.productionTip=!1,new r["default"]({router:S,store:N,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},a734:function(e,t,n){"use strict";n("0bc5")}});
//# sourceMappingURL=app.437b113a.js.map