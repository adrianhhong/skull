(function(t){function e(e){for(var r,n,l=e[0],o=e[1],i=e[2],u=0,d=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s={app:0},c=[];function l(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-7c555fa6":"83b00f59","chunk-3d38722a":"061414e4","chunk-bc946b36":"32993cc4"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-7c555fa6":1,"chunk-3d38722a":1,"chunk-bc946b36":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-7c555fa6":"7de5528a","chunk-3d38722a":"b4c38526","chunk-bc946b36":"dc692cae"}[t]+".css",s=o.p+r,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var i=c[l],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===s))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){i=d[l],u=i.getAttribute("data-href");if(u===r||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete n[t],p.parentNode.removeChild(p),a(c)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=c);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=l(t);var d=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var p=u;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0bf0":function(t,e,a){},"56a6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},s=[],c={name:"App",data:function(){return{}}},l=c,o=a("2877"),i=a("6544"),u=a.n(i),d=a("7496"),p=a("f6c4"),h=Object(o["a"])(l,n,s,!1,null,null,null),f=h.exports;u()(h,{VApp:d["a"],VMain:p["a"]});a("d3b7"),a("3ca3"),a("ddb0");var m=a("8c4f");r["a"].use(m["a"]);var v=[{path:"/",name:"Home",component:function(){return Promise.all([a.e("chunk-7c555fa6"),a.e("chunk-bc946b36")]).then(a.bind(null,"bb51"))}},{path:"/:roomId",name:"Room",component:function(){return Promise.all([a.e("chunk-7c555fa6"),a.e("chunk-3d38722a")]).then(a.bind(null,"3ab1"))}},{path:"*",redirect:{name:"Home"}}],b=new m["a"]({routes:v}),g=b,y=a("2f62");r["a"].use(y["a"]);var A=new y["a"].Store({state:{username:"",roomId:"",hostUsername:"",currentMessage:"",addedLogMessage:"",playerStates:[],activePlayer:"",gamePhase:"",placingCardsVariables:{round:0},bidVariables:{biddingMinimum:1,cardsPlayed:0},removeCardsVariables:{totalSkulls:1,totalRoses:3}},mutations:{mutatePlayerDetails:function(t,e){t.username=e.username,t.roomId=e.roomId},SOCKET_UPDATEGAMESTATE:function(t,e){t.currentMessage=e.currentMessage,t.addedLogMessage=e.addedLogMessage,t.playerStates=e.playerStates,t.activePlayer=e.activePlayer,t.gamePhase=e.gamePhase,t.placingCardsVariables=e.placingCardsVariables,t.bidVariables=e.bidVariables,t.removeCardsVariables=e.removeCardsVariables}},actions:{},modules:{}}),C=a("f309"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{id:"ICONS",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{staticClass:"cls-1",attrs:{d:"M9.92,9h4.17a5.39,5.39,0,0,1,5.39,5.39v1.34a3.61,3.61,0,0,1-3.61,3.61H8.14a3.61,3.61,0,0,1-3.61-3.61V14.36A5.39,5.39,0,0,1,9.92,9Z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M5.68,21.62a3.44,3.44,0,0,1,3.45-3.45"}}),a("path",{staticClass:"cls-2",attrs:{d:"M3.13,21a3.45,3.45,0,0,1,3.45-3.45"}}),a("path",{staticClass:"cls-2",attrs:{d:"M2,18.72a3.44,3.44,0,0,1,3.45-3.44"}}),a("path",{staticClass:"cls-2",attrs:{d:"M18.32,21.62a3.44,3.44,0,0,0-3.45-3.45"}}),a("path",{staticClass:"cls-2",attrs:{d:"M20.94,21a3.45,3.45,0,0,0-3.44-3.45"}}),a("path",{staticClass:"cls-2",attrs:{d:"M22.09,18.72a3.44,3.44,0,0,0-3.44-3.44"}}),a("path",{staticClass:"cls-3",attrs:{d:"M3.38,5c0,3.49,1,6.32,2.3,6.32"}}),a("path",{staticClass:"cls-3",attrs:{d:"M20.62,5c0,3.49-1,6.32-2.3,6.32"}}),a("path",{attrs:{d:"M3.38,4.37l1.15-2a2.3,2.3,0,0,1-2.3,4,2.31,2.31,0,0,1-.84-3.14,2.36,2.36,0,0,1,.84-.85Z"}}),a("path",{attrs:{d:"M20.62,4.37l-1.15-2a2.3,2.3,0,1,0,3.14.85,2.36,2.36,0,0,0-.84-.85Z"}}),a("circle",{attrs:{cx:"8.55",cy:"6.1",r:"1.15"}}),a("circle",{attrs:{cx:"15.45",cy:"6.1",r:"1.15"}})])},w=[],k=(a("8c66"),{}),S=Object(o["a"])(k,M,w,!1,null,null,null),P=S.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{id:"ICONS",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,21.5A5.5,5.5,0,1,1,17.5,16,5.51,5.51,0,0,1,12,21.5Zm2-9A1.5,1.5,0,1,0,15.5,14,1.5,1.5,0,0,0,14,12.5Z"}}),a("path",{attrs:{d:"M12,11a5,5,0,1,1-5,5,5,5,0,0,1,5-5m2,5a2,2,0,1,0-2-2,2,2,0,0,0,2,2m-2-6a6,6,0,1,0,6,6,6,6,0,0,0-6-6Zm2,5a1,1,0,1,1,1-1,1,1,0,0,1-1,1Z"}}),a("path",{attrs:{d:"M14.78,4A4.33,4.33,0,0,0,12,6.78,4.33,4.33,0,0,0,9.22,4,4.33,4.33,0,0,0,12,1.22,4.33,4.33,0,0,0,14.78,4Z"}}),a("path",{attrs:{d:"M14.78,4h0A4.33,4.33,0,0,0,12,6.78h0A4.33,4.33,0,0,0,9.22,4h0A4.33,4.33,0,0,0,12,1.22h0A4.33,4.33,0,0,0,14.78,4h0A4.37,4.37,0,0,1,12,1.22h0A4.37,4.37,0,0,1,9.22,4h0A4.37,4.37,0,0,1,12,6.78h0A4.37,4.37,0,0,1,14.78,4h0Z"}}),a("path",{attrs:{d:"M22.78,8A4.33,4.33,0,0,0,20,10.78,4.33,4.33,0,0,0,17.22,8,4.33,4.33,0,0,0,20,5.22,4.33,4.33,0,0,0,22.78,8Z"}}),a("path",{attrs:{d:"M22.78,8h0A4.33,4.33,0,0,0,20,10.78h0A4.33,4.33,0,0,0,17.22,8h0A4.33,4.33,0,0,0,20,5.22h0A4.33,4.33,0,0,0,22.78,8h0A4.37,4.37,0,0,1,20,5.22h0A4.37,4.37,0,0,1,17.22,8h0A4.37,4.37,0,0,1,20,10.78h0A4.37,4.37,0,0,1,22.78,8h0Z"}}),a("path",{attrs:{d:"M6.78,8A4.33,4.33,0,0,0,4,10.78,4.33,4.33,0,0,0,1.22,8,4.33,4.33,0,0,0,4,5.22,4.33,4.33,0,0,0,6.78,8Z"}}),a("path",{attrs:{d:"M6.78,8h0A4.33,4.33,0,0,0,4,10.78H4A4.33,4.33,0,0,0,1.22,8h0A4.33,4.33,0,0,0,4,5.22H4A4.33,4.33,0,0,0,6.78,8h0A4.37,4.37,0,0,1,4,5.22H4A4.37,4.37,0,0,1,1.22,8h0A4.37,4.37,0,0,1,4,10.78H4A4.37,4.37,0,0,1,6.78,8h0Z"}})])},O=[],E=(a("fe0f"),{}),Z=Object(o["a"])(E,x,O,!1,null,null,null),_=Z.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{id:"ICONS",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{staticClass:"cls-1",attrs:{d:"M22.17,12c-1.43,1.61-5.57,2.77-10.47,2.77S2.66,13.59,1.23,12c0-.2.05-.39.08-.59C2,9.33,6.41,7.75,11.7,7.75s9.66,1.58,10.39,3.64C22.12,11.59,22.15,11.78,22.17,12Z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M22.19,12.23h0a1.94,1.94,0,0,1,0-.24c-1.43,1.61-5.57,2.77-10.47,2.77S2.66,13.59,1.23,12a1.94,1.94,0,0,1,0,.24h0c0,.17,0,.35,0,.52,0,5.25,4.7,9.5,10.5,9.5S22.2,18,22.2,12.75C22.2,12.58,22.19,12.4,22.19,12.23Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M22.2,12V12a1.62,1.62,0,0,1,0,.22,1.94,1.94,0,0,1,0-.24c-1.43,1.61-5.57,2.77-10.47,2.77S2.66,13.59,1.23,12a1.94,1.94,0,0,1,0,.24,1.62,1.62,0,0,1,0-.22V12a1.8,1.8,0,0,1,.11-.56C2,9.33,6.41,7.75,11.7,7.75s9.66,1.58,10.39,3.64A1.8,1.8,0,0,1,22.2,12Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M22.2,12l0,0c-1.43,1.61-5.57,2.77-10.47,2.77S2.66,13.59,1.23,12l0,0a1.8,1.8,0,0,1,.11-.56C2,9.33,6.41,7.75,11.7,7.75s9.66,1.58,10.39,3.64A1.8,1.8,0,0,1,22.2,12Z"}}),a("path",{staticClass:"cls-3",attrs:{d:"M13.79,14.7l1.64-7.94a4.87,4.87,0,0,1,2-3A4.74,4.74,0,0,1,21,3.08l1.78.37"}}),a("line",{staticClass:"cls-4",attrs:{x1:"9.7",y1:"14.75",x2:"6.7",y2:"1.75"}}),a("path",{staticClass:"cls-5",attrs:{d:"M12.84,4,5.55,6.24,3.27,7l-.86.26a2.13,2.13,0,0,1-.08-.27C1.91,5.05,4,3,6.94,2.33,9.58,1.75,12,2.47,12.84,4Z"}})])},V=[],T=(a("9069"),{}),H=Object(o["a"])(T,j,V,!1,null,null,null),I=H.exports;r["a"].use(C["a"]);var L=new C["a"]({theme:{dark:!1,options:{customProperties:!0,variations:!0},themes:{light:{primary:"#c46200",secondary:"#424242",backing:"#F5F5F5",buttons:"#E0E0E0",player1:"#f07272",player2:"#6590d6",player3:"#59ad42",player4:"#ad72f0",player5:"#f072a0",player6:"#f0a272",player7:"#72dbf0",player8:"#f0cc72",player9:"#949494",player10:"#b09676"},dark:{}}},icons:{values:{crab:{component:P},pearl:{component:_},coconut:{component:I}}}}),N=a("f87c"),B=a("8e27"),U={serverUrl:"http://localhost:5000",clientUrl:"http://localhost:8080"},$=a("4ae6"),D=a.n($);r["a"].config.productionTip=!1,r["a"].use(N["a"],Object(B["io"])(U.serverUrl),{store:A}),r["a"].use(D.a),new r["a"]({router:g,store:A,vuetify:L,render:function(t){return t(f)}}).$mount("#app")},"8c66":function(t,e,a){"use strict";a("56a6")},9069:function(t,e,a){"use strict";a("0bf0")},a8e3:function(t,e,a){},fe0f:function(t,e,a){"use strict";a("a8e3")}});
//# sourceMappingURL=app.c8af2611.js.map