(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{348:function(t,e,n){"use strict";var r=n(349),o=n(350);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},349:function(t,e,n){"use strict";var r=n(4),o=n(18),c=n(107),l=n(43),f=n(224),d=n(223),v=n(222),y=n(25),O=n(12),h=n(158),j=n(108),w=n(161);t.exports=function(t,e,n){var x=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),S=x?"set":"add",k=o[t],P=k&&k.prototype,C=k,E={},z=function(t){var e=P[t];l(P,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!y(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!y(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!y(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof k||!(m||P.forEach&&!O((function(){(new k).entries().next()})))))C=n.getConstructor(e,t,x,S),f.REQUIRED=!0;else if(c(t,!0)){var D=new C,N=D[S](m?{}:-0,1)!=D,B=O((function(){D.has(1)})),M=h((function(t){new k(t)})),F=!m&&O((function(){for(var t=new k,e=5;e--;)t[S](e,e);return!t.has(-0)}));M||((C=e((function(e,n){v(e,C,t);var r=w(new k,e,C);return null!=n&&d(n,r[S],r,x),r}))).prototype=P,P.constructor=C),(B||F)&&(z("delete"),z("has"),x&&z("get")),(F||N)&&z(S),m&&P.clear&&delete P.clear}return E[t]=C,r({global:!0,forced:C!=k},E),j(C,t),m||n.setStrong(C,t,x),C}},350:function(t,e,n){"use strict";var r=n(35).f,o=n(87),c=n(226),l=n(88),f=n(222),d=n(223),v=n(159),y=n(160),O=n(31),h=n(224).fastKey,j=n(77),w=j.set,x=j.getterFor;t.exports={getConstructor:function(t,e,n,v){var y=t((function(t,r){f(t,y,e),w(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),O||(t.size=0),null!=r&&d(r,t[v],t,n)})),j=x(e),m=function(t,e,n){var r,o,c=j(t),l=S(t,e);return l?l.value=n:(c.last=l={index:o=h(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),O?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},S=function(t,e){var n,r=j(t),o=h(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(y.prototype,{clear:function(){for(var t=j(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,O?t.size=0:this.size=0},delete:function(t){var e=j(this),n=S(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),O?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=j(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(y.prototype,n?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),O&&r(y.prototype,"size",{get:function(){return j(this).size}}),y},setStrong:function(t,e,n){var r=e+" Iterator",o=x(e),c=x(r);v(t,e,(function(t,e){w(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),y(e)}}},356:function(t,e,n){"use strict";n(7),n(27),n(8),n(9),n(46),n(135),n(348),n(13),n(14),n(11),n(17),n(30),n(60),n(51),n(59),n(10),n(52);var r=n(2),o=(n(225),n(0)),c=n(74),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return v.reduce((function(n,r){return n[t+Object(l.r)(r)]=e(),n}),{})}var h=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},j=O("align",(function(){return{type:String,default:null,validator:h}})),w=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},x=O("justify",(function(){return{type:String,default:null,validator:w}})),m=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},S=O("alignContent",(function(){return{type:String,default:null,validator:m}})),k={align:Object.keys(j),justify:Object.keys(x),alignContent:Object.keys(S)},P={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},j),{},{justify:{type:String,default:null,validator:w}},x),{},{alignContent:{type:String,default:null,validator:m}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=E.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},369:function(t,e,n){"use strict";n.r(e);var r=n(78),o=n(109),c=n.n(o),l=(n(7),n(8),n(9),n(46),n(135),n(89),n(348),n(23),n(13),n(14),n(11),n(17),n(30),n(51),n(59),n(61),n(10),n(52),n(2)),f=(n(225),n(0)),d=n(74),v=n(1);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],j=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=h.reduce((function(t,e){return t["offset"+Object(v.r)(e)]={type:[String,Number],default:null},t}),{}),x=h.reduce((function(t,e){return t["order"+Object(v.r)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(j),offset:Object.keys(w),order:Object.keys(x)};function S(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var k=new Map,P=f.a.extend({name:"v-col",functional:!0,props:O(O(O(O({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var f=k.get(o);return f||function(){var t,e;for(e in f=[],m)m[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(l.a)(t,"col-".concat(n.cols),n.cols),Object(l.a)(t,"offset-".concat(n.offset),n.offset),Object(l.a)(t,"order-".concat(n.order),n.order),Object(l.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),k.set(o,f)}(),t(n.tag,Object(d.a)(data,{class:f}),r)}}),C=n(356),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"text-center"},[this._v("\n    About me\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:P,VRow:C.a})}}]);