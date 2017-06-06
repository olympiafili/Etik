/*! jQuery v1.7.1 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement("a");
      originAnchor.href = location.href;
      var urlAnchor = document.createElement("a");

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + "//" + originAnchor.host ===
            urlAnchor.protocol + "//" + urlAnchor.host));      //
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.error( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.2.0'

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.2.0'

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      Plugin.call(actives, 'hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href
    var $this   = $(this)
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    Plugin.call($target, option)
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);
/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.2.0'

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? { top: 0, left: 0 } : $element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);












// Get the translation center engine root path
translation_center_root = "/translation_center"

translation_center_translation_key_path = function(id) { return translation_center_root + '/translation_keys/' + id }

$(document).ready(function() {
  attachInspectorLinks();
});

// after any ajax request attach the inspector links
$(document).ajaxComplete(function() {
  attachInspectorLinks();
});

function attachInspectorLinks(){
  if($('body').children('#tc-inspector-links').length == 0 && $('#tc_no_inspector').length == 0 )
    $('body').append('<div id="tc-inspector-links"></div>');

  // for each key add a link that goes to the key page
  $('.tc-inspector-key').each(function(){
    var top = $(this).offset().top - 20;
    var left = $(this).offset().left - 10;
    var id = $(this).data('id');
    // missing translation will be in red while translated will be in green
    var badgeClass = getBadge($(this).data('type'));
    $('#tc-inspector-links').append($('<a>').attr('title', 'Click to visit key').attr('target', 'key_inspect').attr('href', translation_center_translation_key_path(id) + "?lang_to=" + $(this).data('locale')).attr('data-id', id).attr('style', 'left:' + left + 'px;top:' + top + 'px' ).attr('class', 'icon-edit tc-badge ' + badgeClass  + ' tc-inspector-link'));

  });

  // highlight the key when user hovers over it
  $(".tc-inspector-link").mouseover(function() {
    var id = $(this).data('id');
    var key = $('.tc-inspector-key[data-id=' + id + ']');
    var color = getColor(key.data('type'));
    key.css('color', color);
  }).mouseout(function(){
    var id = $(this).data('id');
    $('.tc-inspector-key[data-id=' + id + ']').css('color', '');
  });

}

function getBadge(status) {
  if(status == 'untranslated')
    return 'tc-badge-important'
  else if(status == 'pending')
    return 'tc-badge-warning'
  else
    return 'tc-badge-success'
}

function getColor(status) {
  if(status == 'untranslated')
    return 'red'
  else if(status == 'pending')
    return 'orange'
  else
    return 'green'
}
;
// Generated by CoffeeScript 1.7.1

/*
jQuery.Turbolinks ~ https://github.com/kossnocorp/jquery.turbolinks
jQuery plugin for drop-in fix binded events problem caused by Turbolinks

The MIT License
Copyright (c) 2012-2013 Sasha Koss & Rico Sta. Cruz
 */


(function() {
  var $, $document;

  $ = window.jQuery || (typeof require === "function" ? require('jquery') : void 0);

  $document = $(document);

  $.turbo = {
    version: '2.1.0',
    isReady: false,
    use: function(load, fetch) {
      return $document.off('.turbo').on("" + load + ".turbo", this.onLoad).on("" + fetch + ".turbo", this.onFetch);
    },
    addCallback: function(callback) {
      if ($.turbo.isReady) {
        callback($);
      }
      return $document.on('turbo:ready', function() {
        return callback($);
      });
    },
    onLoad: function() {
      $.turbo.isReady = true;
      return $document.trigger('turbo:ready');
    },
    onFetch: function() {
      return $.turbo.isReady = false;
    },
    register: function() {
      $(this.onLoad);
      return $.fn.ready = this.addCallback;
    }
  };

  $.turbo.register();

  $.turbo.use('page:load', 'page:fetch');

}).call(this);
/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
/*
 * Canvas2Image v0.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk
 * MIT License [http://www.opensource.org/licenses/mit-license.php]
 */


var Canvas2Image = (function() {

	// check if we have canvas support
	var bHasCanvas = false;
	var oCanvas = document.createElement("canvas");
	if (oCanvas.getContext("2d")) {
		bHasCanvas = true;
	}

	// no canvas, bail out.
	if (!bHasCanvas) {
		return {
			saveAsBMP : function(){},
			saveAsPNG : function(){},
			saveAsJPEG : function(){}
		}
	}

	var bHasImageData = !!(oCanvas.getContext("2d").getImageData);
	var bHasDataURL = !!(oCanvas.toDataURL);
	var bHasBase64 = !!(window.btoa);

	var strDownloadMime = "image/octet-stream";

	// ok, we're good
	var readCanvasData = function(oCanvas) {
		var iWidth = parseInt(oCanvas.width);
		var iHeight = parseInt(oCanvas.height);
		return oCanvas.getContext("2d").getImageData(0,0,iWidth,iHeight);
	}

	// base64 encodes either a string or an array of charcodes
	var encodeData = function(data) {
		var strData = "";
		if (typeof data == "string") {
			strData = data;
		} else {
			var aData = data;
			for (var i=0;i<aData.length;i++) {
				strData += String.fromCharCode(aData[i]);
			}
		}
		return btoa(strData);
	}

	// creates a base64 encoded string containing BMP data
	// takes an imagedata object as argument
	var createBMP = function(oData) {
		var aHeader = [];
	
		var iWidth = oData.width;
		var iHeight = oData.height;

		aHeader.push(0x42); // magic 1
		aHeader.push(0x4D); 
	
		var iFileSize = iWidth*iHeight*3 + 54; // total header size = 54 bytes
		aHeader.push(iFileSize % 256); iFileSize = Math.floor(iFileSize / 256);
		aHeader.push(iFileSize % 256); iFileSize = Math.floor(iFileSize / 256);
		aHeader.push(iFileSize % 256); iFileSize = Math.floor(iFileSize / 256);
		aHeader.push(iFileSize % 256);

		aHeader.push(0); // reserved
		aHeader.push(0);
		aHeader.push(0); // reserved
		aHeader.push(0);

		aHeader.push(54); // dataoffset
		aHeader.push(0);
		aHeader.push(0);
		aHeader.push(0);

		var aInfoHeader = [];
		aInfoHeader.push(40); // info header size
		aInfoHeader.push(0);
		aInfoHeader.push(0);
		aInfoHeader.push(0);

		var iImageWidth = iWidth;
		aInfoHeader.push(iImageWidth % 256); iImageWidth = Math.floor(iImageWidth / 256);
		aInfoHeader.push(iImageWidth % 256); iImageWidth = Math.floor(iImageWidth / 256);
		aInfoHeader.push(iImageWidth % 256); iImageWidth = Math.floor(iImageWidth / 256);
		aInfoHeader.push(iImageWidth % 256);
	
		var iImageHeight = iHeight;
		aInfoHeader.push(iImageHeight % 256); iImageHeight = Math.floor(iImageHeight / 256);
		aInfoHeader.push(iImageHeight % 256); iImageHeight = Math.floor(iImageHeight / 256);
		aInfoHeader.push(iImageHeight % 256); iImageHeight = Math.floor(iImageHeight / 256);
		aInfoHeader.push(iImageHeight % 256);
	
		aInfoHeader.push(1); // num of planes
		aInfoHeader.push(0);
	
		aInfoHeader.push(24); // num of bits per pixel
		aInfoHeader.push(0);
	
		aInfoHeader.push(0); // compression = none
		aInfoHeader.push(0);
		aInfoHeader.push(0);
		aInfoHeader.push(0);
	
		var iDataSize = iWidth*iHeight*3; 
		aInfoHeader.push(iDataSize % 256); iDataSize = Math.floor(iDataSize / 256);
		aInfoHeader.push(iDataSize % 256); iDataSize = Math.floor(iDataSize / 256);
		aInfoHeader.push(iDataSize % 256); iDataSize = Math.floor(iDataSize / 256);
		aInfoHeader.push(iDataSize % 256); 
	
		for (var i=0;i<16;i++) {
			aInfoHeader.push(0);	// these bytes not used
		}
	
		var iPadding = (4 - ((iWidth * 3) % 4)) % 4;

		var aImgData = oData.data;

		var strPixelData = "";
		var y = iHeight;
		do {
			var iOffsetY = iWidth*(y-1)*4;
			var strPixelRow = "";
			for (var x=0;x<iWidth;x++) {
				var iOffsetX = 4*x;

				strPixelRow += String.fromCharCode(aImgData[iOffsetY+iOffsetX+2]);
				strPixelRow += String.fromCharCode(aImgData[iOffsetY+iOffsetX+1]);
				strPixelRow += String.fromCharCode(aImgData[iOffsetY+iOffsetX]);
			}
			for (var c=0;c<iPadding;c++) {
				strPixelRow += String.fromCharCode(0);
			}
			strPixelData += strPixelRow;
		} while (--y);

		var strEncoded = encodeData(aHeader.concat(aInfoHeader)) + encodeData(strPixelData);

		return strEncoded;
	}


	// sends the generated file to the client
	var saveFile = function(strData) {
		document.location.href = strData;
	}

	var makeDataURI = function(strData, strMime) {
		return "data:" + strMime + ";base64," + strData;
	}

	// generates a <img> object containing the imagedata
	var makeImageObject = function(strSource) {
		var oImgElement = document.createElement("img");
		oImgElement.src = strSource;
		return oImgElement;
	}

	var scaleCanvas = function(oCanvas, iWidth, iHeight) {
		if (iWidth && iHeight) {
			var oSaveCanvas = document.createElement("canvas");
			oSaveCanvas.width = iWidth;
			oSaveCanvas.height = iHeight;
			oSaveCanvas.style.width = iWidth+"px";
			oSaveCanvas.style.height = iHeight+"px";

			var oSaveCtx = oSaveCanvas.getContext("2d");

			oSaveCtx.drawImage(oCanvas, 0, 0, oCanvas.width, oCanvas.height, 0, 0, iWidth, iHeight);
			return oSaveCanvas;
		}
		return oCanvas;
	}

	return {

		saveAsPNG : function(oCanvas, bReturnImg, iWidth, iHeight) {
			if (!bHasDataURL) {
				return false;
			}
			var oScaledCanvas = scaleCanvas(oCanvas, iWidth, iHeight);
			var strData = oScaledCanvas.toDataURL("image/png");
			if (bReturnImg) {
				return makeImageObject(strData);
			} else {
				saveFile(strData.replace("image/png", strDownloadMime));
			}
			return true;
		},

		saveAsJPEG : function(oCanvas, bReturnImg, iWidth, iHeight) {
			if (!bHasDataURL) {
				return false;
			}

			var oScaledCanvas = scaleCanvas(oCanvas, iWidth, iHeight);
			var strMime = "image/jpeg";
			var strData = oScaledCanvas.toDataURL(strMime);
	
			// check if browser actually supports jpeg by looking for the mime type in the data uri.
			// if not, return false
			if (strData.indexOf(strMime) != 5) {
				return false;
			}

			if (bReturnImg) {
				return makeImageObject(strData);
			} else {
				saveFile(strData.replace(strMime, strDownloadMime));
			}
			return true;
		},

		saveAsBMP : function(oCanvas, bReturnImg, iWidth, iHeight) {
			if (!(bHasImageData && bHasBase64)) {
				return false;
			}

			var oScaledCanvas = scaleCanvas(oCanvas, iWidth, iHeight);

			var oData = readCanvasData(oScaledCanvas);
			var strImgData = createBMP(oData);
			if (bReturnImg) {
				return makeImageObject(makeDataURI(strImgData, "image/bmp"));
			} else {
				saveFile(makeDataURI(strImgData, strDownloadMime));
			}
			return true;
		}
	};

})();
/*
Copyright (c) 2010 Antony Dzeryn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


var CanvasLayers = {

	/**
	 * Defines a basic layer.
	 * @param x The x co-ordinate of the layer, relative to its parent.
	 * @param y The y co-ordinate of the layer, relataive to its parent.
	 * @param width The width of the layer.
	 * @param height The height of the layer.
	 */
	Layer: function(x, y, width, height) {
		this.parent = null;				// Parent layer
		this.visible = true;			// Visible or hidden
		this.canvas = null;				// Drawing space
		this.permeable = false;			// True if children can exceed rect bounds
		
		this.rect = new CanvasLayers.Rectangle(x, y, width, height);
		this.children = new CanvasLayers.LayerCollection(this);
		
		this.onRender = null;
	},
		
	/**
	 * Rectangle class.
	 * @param x The x co-ordinate of the rectangle.
	 * @param y The y co-ordinate of the rectangle.
	 * @param width The width of the rectangle.
	 * @param height The height of the rectangle.
	 */
	Rectangle: function(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	},
		
	/**
	 * List of layers.
	 * @param Layer The layer that contains the list.
	 */
	LayerCollection: function(layer) {
		this.list = new Array();
		this.layer = layer;
	},
	
	/**
	 * Manages the list of damaged rectangles.
	 * @param Layer This should always be the top-level layer.
	 * @param supportsTransparency Should be true if the layers will display
	 * non-rectangular content or if the canvas tag's transparency capabilities
	 * will be used to allow layers to be translucent.  This has a potential
	 * performance penalty so should only be used if necessary.
	 */
	DamagedRectManager: function(layer, supportsTransparency) {
		this.layer = layer;
		this.damagedRects = new Array();
		this.supportsTransparency = supportsTransparency;
	},
	 
	
	/**
	 * Top-level layer that contains the rest of the structure.  An instance of
	 * this should be created in order to create a layer system.
	 * @param canvas The canvas on which the system will be displayed.
	 * @param supportsTransparency Should be true if the layers will display
	 * non-rectangular content or if the canvas tag's transparency capabilities
	 * will be used to allow layers to be translucent.  This has a potential
	 * performance penalty so should only be used if necessary.
	 */
	Container: function(canvas, supportsTransparency) {

		// Call base constructor
		CanvasLayers.Layer.prototype.constructor.call(this, 0, 0, canvas.width, canvas.height);
		
		this.canvas = canvas;
		
		this.damagedRectManager = new CanvasLayers.DamagedRectManager(this, supportsTransparency);
		
		// Ensure that the damaged rect manager knows to redraw this layer
		this.damagedRectManager.addDamagedRect(this.rect);
	}
}


/** DamagedRectManager Methods **/

/**
 * Add a damaged rect to the list.  The method automatically clips and splits
 * the rect to ensure that only new regions are added to the list.
 * @param rect The rect to add to the list.
 */
CanvasLayers.DamagedRectManager.prototype.addDamagedRect = function(rect) {
	var newRects = new Array();
	var remainingRects = new Array();

	newRects.push(rect);

	// Ensure that the new rect does not overlap any existing rects - we only
	// want to draw each region once
	for (var i = 0; i < this.damagedRects.length; ++i) {
		for (var j = 0; j < newRects.length; ++j) {
		
			var intersection = this.damagedRects[i].splitIntersection(newRects[j], remainingRects);

			if (intersection) {
			
				// Intersection contains the part of the new rect that is
				// already known to be damaged and can be discarded.
				// remainingRects contains the rects that still need to be
				// examined
				newRects.splice(j, 1);
				j--;

				// Insert non-overlapping rects to the front of the array so
				// that they are not examined again for this particular damaged
				// rect
				for (var k = 0; k < remainingRects.length; ++k) {
				
					newRects.unshift(remainingRects[k]);
					j++;
				}

				remainingRects = new Array();
			}
		}
	}

	// Add any non-overlapping rects into the damaged rect array
	for (var i = 0; i < newRects.length; ++i) {
		this.damagedRects.push(newRects[i]);
	}
}

/**
 * Redraws all damaged rects.
 */
CanvasLayers.DamagedRectManager.prototype.redraw = function() {
	this.drawRects(this.layer, this.damagedRects);
	this.damagedRects = new Array();
}

/**
 * Redraws the specified list of damaged rects for the specified layer.  The
 * function will recursively call itself in order to draw the layer and its
 * children in such a way as to minimise redrawing.  The algorithm looks like
 * this for layer systems that do not support transparency:
 * - Work out which parts of the damagedRects array intersect the current
 *   layer and remove them from the damagedRects array.
 * - Recursively call the method for each of the layer's children, sending the
 *   intersecting regions as a new array.
 * - Receive back from children any undrawn areas in the new array.
 * - Redraw all remaining rects in the new array.
 * For layer systems that support transparency, the algorithm is slightly
 * different:
 * - Work out which parts of the damagedRects array intersect the current
 *   layer.
 * - Draw the intersecting parts of the current layer.
 * - Recursively call the method for each of the layer's children, sending the
 *   intersecting regions as a new array.
 * The first version of the algorithm is therefore more efficient - each damaged
 * rect is only drawn once.  In the second version, each damaged rect is drawn
 * by each intersecting layer, from front to back.  We're basically using the
 * painter algorithm to redraw a small subsection of the layer system.  This
 * potentially means that a lot of redundant drawing is performed, but it is the
 * only way to support transparency.
 * @param Layer The layer to redraw.
 * @param damagedRects An array of rectangles that must be redrawn.
 */
CanvasLayers.DamagedRectManager.prototype.drawRects = function(layer, damagedRects) {

	if (!layer.isVisible()) return;
	if (damagedRects.length == 0) return;

	var layerRect = layer.getRectClippedToHierarchy();
	
	var remainingRects = new Array();
	var subRects = new Array();
	
	// Work out which of the damaged rects collide with the current layer
	for (var i = 0; i < damagedRects.length; ++i) {
		var damagedRect = damagedRects[i];
		
		// Work out which part of the damaged rect intersects the current layer
		var intersection = layerRect.splitIntersection(damagedRect, remainingRects);
		
		if (intersection) {
			damagedRects.splice(i, 1);
			i--;
			
			// Add the non-intersecting parts of the damaged rect back into the
			// list of undrawn rects
			for (var j = 0; j < remainingRects.length; ++j) {
				damagedRects.unshift(remainingRects[j]);
				i++;
			}
			
			remainingRects = new Array();
			
			subRects.push(intersection);
			
			// Push the intersection back into the damaged rects array if the
			// rect manager supports transparency.  This ensures that all
			// layers that collide with this intersection draw themselves.
			if (this.supportsTransparency) {
				damagedRects.unshift(intersection);
				i++;
				
				// Render the intersection
				layer.render(intersection);
				
				// Get children to draw all parts of themselves that intersect
				// the intersection we've found.
				for (var j = 0; j < layer.getChildren().length(); ++j) {
					this.drawRects(layer.getChildren().at(j), subRects);
					
					// Abort if all rects have been drawn
					if (subRects.length == 0) break;
				}
				
			} else {
			
				// Get children to draw all parts of themselves that intersect
				// the intersection we've found.
				for (var j = layer.getChildren().length() - 1; j >= 0; --j) {
					this.drawRects(layer.getChildren().at(j), subRects);
					
					// Abort if all rects have been drawn
					if (subRects.length == 0) break;
				}
			
				// Children have drawn themselves; anything left in the subRects
				// array must overlap this layer
				for (var j = 0; j < subRects.length; ++j) {
					layer.render(subRects[j]);
				}
			}
			
			subRects = new Array();
		}
	}
}


/** Rect Methods **/

/**
 * Gets the co-ordinate of the rectangle's right edge.
 * @return The co-ordinate of the rectangle's right edge.
 */
CanvasLayers.Rectangle.prototype.getX2 = function() {
	return this.x + this.width - 1;
}

/**
 * Gets the co-ordinate of the rectangle's bottom edge.
 * @return The co-ordinate of the rectangle's bottom edge.
 */
CanvasLayers.Rectangle.prototype.getY2 = function() {
	return this.y + this.height - 1;
}

/**
 * Gets the intersect of this rectangle with the supplied argument.
 * @param rect The rectangle to intersect with this.
 * @return A rectangle that represents the intersection of the two rectangles.
 */
CanvasLayers.Rectangle.prototype.getIntersect = function(rect) {
	var x1 = this.x > rect.x ? this.x : rect.x;
	var y1 = this.y > rect.y ? this.y : rect.y;

	var x2 = this.getX2() < rect.getX2() ? this.getX2() : rect.getX2();
	var y2 = this.getY2() < rect.getY2() ? this.getY2() : rect.getY2();

	return new CanvasLayers.Rectangle(x1, y1, x2 - x1 + 1, y2 - y1 + 1);
}

/**
 * Gets the smallest rectangle capable of containing this rect and the supplied
 * argument.
 * @param rect The rectangle to add to this.
 * @return The smallest rectangle that can contain this rect and the argument.
 */
CanvasLayers.Rectangle.prototype.getAddition = function(rect) {
	var x1 = x < rect.x ? this.x : rect.x;
	var y1 = y < rect.y ? this.y : rect.x;

	var x2 = this.getX2() > rect.getX2() ? this.getX2() : rect.getX2();
	var y2 = this.getY2() > rect.getY2() ? this.getY2() : rect.getY2();

	return new CanvasLayers.Rectangle(x1, y1, x2 - x1 + 1, y2 - y1 + 1);
}

/**
 * Clips this rectangle to the intersection with the supplied argument.
 * @param rect The rectangle to clip to.
 */
CanvasLayers.Rectangle.prototype.clipToIntersect = function(rect) {
	var clipped = this.getIntersect(rect);

	this.x = clipped.x;
	this.y = clipped.y;
	this.width = clipped.width;
	this.height = clipped.height;
}

/**
 * Increases the size of the rect to encompass the supplied argument.
 * @param rect The rect to encompass.
 */
CanvasLayers.Rectangle.prototype.expandToInclude = function(rect) {
	var addition = getAddition(rect);

	this.x = addition.x;
	this.y = addition.y;
	this.width = addition.width;
	this.height = addition.height;
}

/**
 * Check if the rectangle has valid dimensions.
 * @return True if the rectangle has valid dimensions.
 */
CanvasLayers.Rectangle.prototype.hasDimensions = function() {
	if (this.width < 1) return false;
	if (this.height < 1) return false;
	return true;
}

/**
 * Check if this rectangle intersects the argument.
 * @param rect The rect to check for an intersection.
 * @return True if the rects intersect.
 */
CanvasLayers.Rectangle.prototype.intersects = function(rect) {
	return ((this.x + this.width > rect.x) &&
			(this.y + this.height > rect.y) &&
			(this.x < rect.x + rect.width) &&
			(this.y < rect.y + rect.height));
}

/**
 * Check if this rectangle contains the argument co-ordinate.
 * @param x The x co-ordinate to check.
 * @param y The y co-ordinate to check.
 * @return True if this rect contains the argument co-ordinate.
 */
CanvasLayers.Rectangle.prototype.contains = function(x, y) {
	return ((x >= this.x) &&
			(y >= this.y) &&
			(x < this.x + this.width) &&
			(y < this.y + this.height));
}

/**
 * Splits the rect argument into the area that overlaps this rect (this is
 * the return value) and an array of areas that do not overlap (this is the
 * remainderRects argument, which must be passed as an empty array).
 * @param rect The rectangle to intersect with this.
 * @param remainderRects An empty array that will be populated with the areas
 * of the rect parameter that do not intersect with this rect.
 * @return The intersection of this rectangle and the rect argument.
 */
CanvasLayers.Rectangle.prototype.splitIntersection = function(rect, remainderRects) {

	if (!this.intersects(rect)) return null;
	
	// Copy the properties of rect into intersection; we trim this to size later
	var intersection = new CanvasLayers.Rectangle(rect.x, rect.y, rect.width, rect.height);

	// Check for a non-overlapped rect on the left
	if (intersection.x < this.x) {
		var left = new CanvasLayers.Rectangle(0, 0, 0, 0);
		left.x = intersection.x;
		left.y = intersection.y;
		left.width = this.x - intersection.x;
		left.height = intersection.height;
		
		// Insert the rect
		remainderRects.push(left);
		
		// Adjust the dimensions of the intersection
		intersection.x = this.x;
		intersection.width -= left.width;
	}
	
	// Check for a non-overlapped rect on the right
	if (intersection.x + intersection.width > this.x + this.width) {
		var right = new CanvasLayers.Rectangle(0, 0, 0, 0);
		right.x = this.x + this.width;
		right.y = intersection.y;
		right.width = intersection.width - (this.x + this.width - intersection.x);
		right.height = intersection.height;
		
		// Insert the rect
		remainderRects.push(right);
		
		// Adjust dimensions of the intersection
		intersection.width -= right.width;
	}
	
	// Check for a non-overlapped rect above
	if (intersection.y < this.y) {
		var top = new CanvasLayers.Rectangle(0, 0, 0, 0);
		top.x = intersection.x;
		top.y = intersection.y;
		top.width = intersection.width;
		top.height = this.y - intersection.y;
		
		// Insert the rect
		remainderRects.push(top);
		
		// Adjust the dimensions of the intersection
		intersection.y = this.y;
		intersection.height -= top.height;
	}
	
	// Check for a non-overlapped rect below
	if (intersection.y + intersection.height > this.y + this.height) {
		var bottom = new CanvasLayers.Rectangle(0, 0, 0, 0);
		bottom.x = intersection.x;
		bottom.y = this.y + this.height;
		bottom.width = intersection.width;
		bottom.height = intersection.height - (this.y + this.height - intersection.y);
		
		// Insert the rect
		remainderRects.push(bottom);
		
		// Adjust dimensions of the intersection
		intersection.height -= bottom.height;
	}
	
	return intersection;
}


/** LayerCollection Methods **/

/**
 * Add a layer to the end of the collection.
 * @param layer The layer to add to the collection.
 */
CanvasLayers.LayerCollection.prototype.add = function(layer) {
	layer.setParent(this.layer);
	this.list.push(layer);
	
	layer.markRectsDamaged();
}

/**
 * Insert a layer at the start of the collection.
 * @param layer The layer to insert into the collection.
 */
CanvasLayers.LayerCollection.prototype.insert = function(layer) {
	layer.setParent(this.layer);
	this.list.splice(0, 0, layer);

	layer.markRectsDamaged();	
}

/**
 * Remove a layer from the collection.
 * @param layer The layer to remove from the collection.
 */
CanvasLayers.LayerCollection.prototype.remove = function(layer) {
	var index = this.getLayerIndex(layer);
	if (index > -1) {
		this.list.splice(index, 1);
	}
	
	layer.markRectsDamaged();
	
	layer.setParent(null);
}

/**
 * Get the number of layers in the collection.
 * @return The number of layers in the collection.
 */
CanvasLayers.LayerCollection.prototype.length = function() { return this.list.length; }
		
/**
 * Get the layer at the specified index.
 * @return The layer at the specified index.
 */
CanvasLayers.LayerCollection.prototype.at = function(index) { return this.list[index]; }
		

/**
 * Raise the specified layer to the top (ie. end) of the collection.
 * @param layer The layer to raise to the top of the collection.
 */
CanvasLayers.LayerCollection.prototype.raiseToTop = function(layer) {		
	var index = this.getLayerIndex(layer);
	if (index > -1) {
		this.list.splice(index, 1);
		this.add(layer);
	}
}

/**
 * Lower the specified layer to the bottom (ie. start) of the collection.
 * @param layer The layer to lower to the bottom of the collection.
 */
CanvasLayers.LayerCollection.prototype.lowerToBottom = function(layer) {
	var index = this.getLayerIndex(layer);
	if (index > -1) {
		this.list.splice(index, 1);
		this.insert(layer)
	}
}
		
/**
 * Locate layer in list.
 * @param layer The layer to find.
 * @return The index of the layer, or -1 if the layer is not found.
 */
CanvasLayers.LayerCollection.prototype.getLayerIndex = function(layer) {
	for (var i in this.list) {
		if (this.list[i] == layer) {
			return i;
		}
	}
	
	return -1;
}


/** Layer Methods **/

/**
 * Gets the absolute x co-ordinate of the layer (ie. relative to the top-level
 * layer).
 * @return The x co-ordinate of the layer relative to the top-level layer.
 */
CanvasLayers.Layer.prototype.getX = function() {
	if (this.parent != null) {
		return this.rect.x + this.getParent().getX();
	}
	
	return this.rect.x;
}

/**
 * Gets the absolute y co-ordinate of the layer (ie. relative to the top-level
 * layer).
 * @return The y co-ordinate of the layer relative to the top-level layer.
 */
CanvasLayers.Layer.prototype.getY = function() {
	if (this.parent != null) {
		return this.rect.y + this.getParent().getY();
	}
	
	return this.rect.y;
}

/**
 * Gets the x co-ordinate of the layer relative to its parent.
 * @return The x co-ordinate of the layer relative to its parent.
 */
CanvasLayers.Layer.prototype.getRelativeX = function() {
	return this.rect.x;
}

/**
 * Gets the y co-ordinate of the layer relative to its parent.
 * @return The y co-ordinate of the layer relative to its parent.
 */
CanvasLayers.Layer.prototype.getRelativeY = function() {
	return this.rect.y;
}

/**
 * Gets the layer's parent layer.
 * @return The layer's parent layer, or null if the layer has no parent.
 */
CanvasLayers.Layer.prototype.getParent = function() {
	return this.parent;
}

/**
 * Sets the layer's parent layer.
 * @param parent The new parent layer.
 */
CanvasLayers.Layer.prototype.setParent = function(parent) {
	this.parent = parent;
}

/**
 * Gets the layer's rect
 * @return The layer's Rect object.
 */
CanvasLayers.Layer.prototype.getRect = function() {
	return this.rect;
}

/**
 * Gets a value indicating whether or not children can exceed the dimensions
 * layer's borders.
 * @return True if children can move beyond the borders of the layer.
 */
CanvasLayers.Layer.prototype.isPermeable = function() {
	return this.permeable;
}

/**
 * Sets the layer's permeable property.
 * @property permeable The new permeable value.  Set to true to allow children
 * to move beyond the borders of this parent layer.
 */
CanvasLayers.Layer.prototype.setPermeable = function(permeable) {
	this.permeable = permeable;
}

/**
 * Gets the list of child layers.
 * @return A LayerCollection containing the layer's children.
 */
CanvasLayers.Layer.prototype.getChildren = function() {
	return this.children;
}

/**
 * Gets the width of the layer.
 * @return The width of the layer.
 */
CanvasLayers.Layer.prototype.getWidth = function() { return this.rect.width; }

/**
 * Gets the height of the layer.
 * @return The height of the layer.
 */
CanvasLayers.Layer.prototype.getHeight = function() { return this.rect.height; }

/**
 * Gets a rectangle describing the available client space within the layer.
 * @return A rectangle describing the client space within the layer.
 */
CanvasLayers.Layer.prototype.getClientRect = function() {
	return new CanvasLayers.Rectangle(0, 0, this.getWidth(), this.getHeight());
}

/**
 * Gets the layer's rectangle, clipped to the rectangles of its ancestor
 * layers.  This is useful if a layer has been moved partially or totally
 * out of the space available within its parent and only the visible portion
 * should be used (ie. in clipped drawing functions).
 * @return The layer's rectangle clipped to its ancestors.
 */
CanvasLayers.Layer.prototype.getRectClippedToHierarchy = function() {

	var rect = new CanvasLayers.Rectangle(this.getX(), this.getY(), this.getWidth(), this.getHeight());

	var parent = this.parent;
	var layer = this;

	while (parent) {

		// Copy parent's properties into the rect
		var parentRect = parent.getRect();

		rect.clipToIntersect(parentRect);

		// Send up to parent
		layer = parent;
		parent = parent.getParent();
	}
	
	return rect;
}

/**
 * Check if the layer is visible or not.  A layer is not visible if its parent
 * is not visible.
 * @return True if the layer and its parents are visible.
 */
CanvasLayers.Layer.prototype.isVisible = function() {
	if (!this.visible) return false;
	if (!this.parent) return this.visible;
	return (this.parent.isVisible());
}

/**
 * Gets the layer's canvas.  Recurses up the layer tree until the top-level
 * layer is found, which should return its reference to the current canvas.
 * @return The layer's canvas.
 */
CanvasLayers.Layer.prototype.getCanvas = function() {
	if (!this.canvas) {
		if (this.parent) {
			this.canvas = this.parent.getCanvas();
		}
	}
	return this.canvas;
}

/**
 * Gets the layer's damaged rectangle manager.  Recurses up the layer tree
 * until the top-level layer is found, which should return its reference to the
 * current damaged rectangle manager.
 * @return The layer's damaged rectangle manager.
 */
CanvasLayers.Layer.prototype.getDamagedRectManager = function() {
	if (this.parent) return this.parent.getDamagedRectManager();
	return null;
}

/**
 * Sends the visible portions of the layer as damaged to the damaged rectangle
 * manager for redraw.  Should be called whenever the visible state of the
 * layer should change.
 */
CanvasLayers.Layer.prototype.markRectsDamaged = function() {
	var damagedRectManager = this.getDamagedRectManager();

	if (!damagedRectManager) return;
	
	if (damagedRectManager.supportsTransparency) {
	
		// We are supporting transparency, so we need to mark the entire layer
		// as damaged
		damagedRectManager.addDamagedRect(this.getRectClippedToHierarchy());
	} else {
		// We are not supporting transparency, so we mark the visible regions
		// as damaged.
		var damagedRects = this.getVisibleRects();
	
		for (var i in damagedRects) {
			damagedRectManager.addDamagedRect(damagedRects[i]);
		}
	}
}

/**
 * Sends the visible portions of the specified rect to the damaged rectangle
 * manager for redraw.  Can be called instead of markDamagedRects() if a small
 * portion of the layer needs to be redrawn.  The rect's co-ordinates should
 * be relative to the layer.
 * @param rect The rect to redraw.  It will be clipped to the visible portion of
 * the layer as appropriate.
 */
CanvasLayers.Layer.prototype.markRectDamaged = function(rect) {
	var visibleRects;
	var damagedRectManager = this.getDamagedRectManager();
	
	if (!damagedRectManager) return;
		
	// If we are supporting transparency, we need to redraw the portions of the
	// rect that overlap any part of this layer.  If not, we only need to
	// redraw the portions of the rect that overlap the visible regions of the
	// rect
	if (damagedRectManager.supportsTransparency) {
		visibleRects = new Array();
		visibleRects.push(this.rect);
	} else {
		visibleRects = this.getVisibleRects();
	}
	
	// Convert the rect to the absolute position
	var absoluteRect = new CanvasLayers.Rectangle(rect.x + this.getX(), rect.y + this.getY(), rect.width, rect.height);
	
	// Work out which areas of the rect intersect the visible portion of the
	// layer
	var damagedRects = new Array();
	
	for (var i in visibleRects) {
		var intersect = absoluteRect.splitIntersection(visibleRects[i], []);
		if (intersect) {
			damagedRects.push(intersect);
		}
	}

	// Send all damaged rects to the manager
	for (var i in damagedRects) {
		damagedRectManager.addDamagedRect(damagedRects[i]);
	}
}

/**
 * Gets a list of the layer's visible rectangles.  These are the portions of
 * the layer not overlapped by other layers.  If the layer is totally
 * obscured an empty array is returned.
 * @return An array of all visible regions of the layer.
 */
CanvasLayers.Layer.prototype.getVisibleRects = function() {

	var rect = new CanvasLayers.Rectangle(this.getX(), this.getY(), this.getWidth(), this.getHeight());

	var visibleRects = new Array();
	visibleRects.push(rect);
	
	var layer = this;
	var parent = this.parent;

	while (parent && layer) {

		// Locate layer in the list; we add one to the index to
		// ensure that we deal with the next layer up in the z-order
		var layerIndex = parseInt(parent.getChildren().getLayerIndex(layer)) + 1;

		// Layer should never be the bottom item on the screen
		if (layerIndex > 0) {

			// Remove any overlapped rectangles
			for (var i = layerIndex; i < parent.getChildren().length(); i++) {
				for (var j = 0; j < visibleRects.length; ++j) {
					var remainingRects = new Array();
					
					var child = parent.getChildren().at(i);
					var childRect = new CanvasLayers.Rectangle(child.getX(), child.getY(), child.getWidth(), child.getHeight());
					
					if (childRect.splitIntersection(visibleRects[j], remainingRects)) {
						visibleRects.splice(j, 1);
						j--;
						
						for (var k in remainingRects) {
							visibleRects.unshift(remainingRects[k]);
							j++;
						}
					}
				}
				
				// Stop processing if there are no more visible rects
				if (visibleRects.length == 0) break;
			}
		}

		if (visibleRects.length > 0) {
			layer = parent;

			if (parent) {
				parent = parent.getParent();
			}
		} else {
			return visibleRects;
		}
	}
	
	return visibleRects;
}

/**
 * Closes the layer.
 */
CanvasLayers.Layer.prototype.close = function() {
	if (this.parent != null) {
		this.parent.getChildren().remove(this);
	}
}

/**
 * Draws the region of the layer contained within the supplied rectangle.
 * @param rect The region to draw.
 */
CanvasLayers.Layer.prototype.render = function(rect) {
	if (!this.isVisible()) return;
	
	var context = this.getCanvas().getContext("2d");
	
	// Set up the clipping region
	context.save();
	context.beginPath();
	context.rect(rect.x, rect.y, rect.width, rect.height);
	context.clip();
	
	context.translate(this.getX(), this.getY());
	
	// Call user rendering code
	if (this.onRender != null) this.onRender(this, rect, context);
	
	// Restore previous canvas state
	context.closePath();
	context.restore();
	
	// Enable this to draw rects around all clipping regions
	/*
	context.save();
	context.beginPath();
	context.rect(0, 0, 400, 400);
	context.clip();
	
	context.strokeStyle = '#f00';
	context.strokeRect(rect.x, rect.y, rect.width, rect.height);
	context.closePath();
	context.restore();
	*/
}

/**
 * Check if this layer collides with the supplied layer.
 * @param layer The layer to check for collisions.
 * @return True if a collision has occurred.
 */
CanvasLayers.Layer.prototype.checkLayerCollision = function(layer) {
	return this.checkRectCollision(layer.getRect());
}

/**
 * Check if this layer collides with the supplied rectangle.
 * @param rect The rectangle to check for collisions.
 * @return True if a collision has occurred.
 */
CanvasLayers.Layer.prototype.checkRectCollision = function(rect) {
	if (!this.isVisible()) return false;

	var x = this.getX();
	var y = this.getY();
	
	if (rect.x + rect.width <= x) return false;
	if (rect.x >= x + this.rect.width) return false;
	if (rect.y + rect.height <= y) return false;
	if (rect.y >= y + this.rect.height) return false;
	
	return true;
}

/**
 * Check if the supplied co-ordinates fall within this layer.
 * @param x The x co-ordinate of the point.
 * @param y The y co-ordinate of the point.
 * @return True if the point falls within this layer.
 */
CanvasLayers.Layer.prototype.checkPointCollision = function(x, y) {
	if (!this.isVisible()) return false;

	var thisX = this.getX();
	var thisY = this.getY();
	
	if (x < thisX) return false;
	if (x >= thisX + this.rect.width) return false;
	if (y < thisY) return false;
	if (y >= thisY + this.rect.height) return false;
	
	return true;
}

/**
 * Gets the minimum x co-ordinate available to a child layer.
 * @return The minimum x co-ordinte available to a child layer.
 */
CanvasLayers.Layer.prototype.getMinChildX = function() {
	if (this.permeable) return -Number.MAX_VALUE;
	return 0;
}

/**
 * Gets the minimum y co-ordinate available to a child layer.
 * @return The minimum y co-ordinte available to a child layer.
 */
CanvasLayers.Layer.prototype.getMinChildY = function() {
	if (this.permeable) return -Number.MAX_VALUE;
	return 0;
}

/**
 * Gets the maximum x co-ordinate available to a child layer.
 * @return The maximum x co-ordinte available to a child layer.
 */
CanvasLayers.Layer.prototype.getMaxChildX = function() {
	if (this.permeable) return Number.MAX_VALUE;
	return this.rect.width - 1;
}

/**
 * Gets the maximum y co-ordinate available to a child layer.
 * @return The maximum y co-ordinte available to a child layer.
 */
CanvasLayers.Layer.prototype.getMaxChildY = function() {
	if (this.permeable) return Number.MAX_VALUE;
	return this.rect.height - 1;
}

/**
 * Moves the layer to the specified co-ordinates.
 * @param x The new x co-ordinate of the layer, relative to its parent.
 * @param y The new y co-ordinate of the layer, relative to its parent.
 */
CanvasLayers.Layer.prototype.moveTo = function(x, y) {

	// Prevent moving outside parent
	if (this.parent != null) {
		if (!this.parent.isPermeable()) {
			var minX = this.parent.getMinChildX();
			var maxX = this.parent.getMaxChildX() - this.rect.width + 1;
			var minY = this.parent.getMinChildY();
			var maxY = this.parent.getMaxChildY() - this.rect.height + 1;
			
			if (x < minX) x = minX;
			if (x > maxX) x = maxX;
			if (y < minY) y = minY;
			if (y > maxY) y = maxY;
		}
	}
	
	// Stop if no moving occurs
	if (this.rect.x == x && this.rect.y == y) return;
	
	this.hide();
	
	this.rect.x = x;
	this.rect.y = y;
		
	this.show();
}

/**
 * Resize the layer to the specified size.
 * @param width The new width of the layer.
 * @param height The new height of the layer.
 */
CanvasLayers.Layer.prototype.resize = function(width, height) {

	// Prevent exceeding size of parent
	if (this.parent != null) {
		if (!this.parent.isPermeable()) {
			var maxWidth = this.parent.getMaxChildX() - this.rect.x + 1;
			var maxHeight = this.parent.getMaxChildY() - this.rect.y + 1;
			
			if (width > maxWidth) width = maxWidth;
			if (height > maxHeight) height = maxHeight;
		}
	}
	
	// Stop if dimensions remain the same
	if (this.rect.width == width && this.rect.height == height) return;
	
	this.hide();
	
	this.rect.width = width;
	this.rect.height = height;
	
	this.show();
}

/**
 * Hides the layer if it is visible.
 */
CanvasLayers.Layer.prototype.hide = function() {
	if (this.visible) {
		this.visible = false;

		this.markRectsDamaged();
	}
}

/**
 * Shows the layer if it is hidden.
 */
CanvasLayers.Layer.prototype.show = function() {
	if (!this.visible) {
		this.visible = true;
		
		this.markRectsDamaged();
	}
}

/**
 * Raises the layer to the top of its parent's stack.
 */
CanvasLayers.Layer.prototype.raiseToTop = function() {
	if (this.parent != null) {
		this.hide();
		this.parent.raiseChildToTop(this);
		this.show();
	}
}

/**
 * Raises the child to the top of the child stack.
 * @param child The child to raise to the top of the stack.
 */
CanvasLayers.Layer.prototype.raiseChildToTop = function(child) {
	this.children.raiseToTop(child);
}

/**
 * Lowers the layer to the bottom of its parent's stack.
 */
CanvasLayers.Layer.prototype.lowerToBottom = function() {
	if (this.parent != null) {
		this.hide();
		this.parent.lowerChildToBottom(this);
		this.show();
	}
}

/**
 * Lowers the child to the bottom of the child stack.
 * @param child The child to lower to the bottom of the stack.
 */
CanvasLayers.Layer.prototype.lowerChildToBottom = function(child) {
	this.children.lowerToBottom(child);
}

/**
 * Gets the layer at the specified co-ordinates.
 * @param x The x co-ordinate to check.
 * @param y The y co-ordinate to check.
 * @return The layer at the specified co-ordinates, or null if no layer is
 * found.
 */
CanvasLayers.Layer.prototype.getLayerAt = function(x, y) {
	if (this.checkPointCollision(x, y)) {
		var layer = null;
		
		for (var i = 0; i < this.children.length(); ++i) {
			layer = this.children.at(i).getLayerAt(x, y);
			
			if (layer) return layer;
		}
		
		return this;
	}
	
	return null;
}


/** Container Methods **/

CanvasLayers.Container.prototype = new CanvasLayers.Layer;

CanvasLayers.Container.prototype.constructor = CanvasLayers.Container;

/**
 * Gets the damaged rectangle manager.
 * @return The damaged rectangle manager.
 */
CanvasLayers.Container.prototype.getDamagedRectManager = function() {
	return this.damagedRectManager;
}

/**
 * Redraws the system.
 */
CanvasLayers.Container.prototype.redraw = function() {
	this.damagedRectManager.redraw();
}
;

// Copyright Patrick Horgan patrick at dbp-consulting dot com
// Permission to use granted as long as you keep this notice intact
//s everywhere because some browsers still don't support
// using it once for the whole file and need per method/function
// use.
// Part is derivitive of work by Juan Mendes as noted below as appropriate.
// Some things depend on code in http://dbp-consulting/scripts/utilities.js

CanvasRenderingContext2D.prototype.roundedRect = 
		function(x, y, width, height, radius, fill, stroke) {
    // This was originally written by Juan Mendes and I have
    // modified it a tiny bit here and there, i.e. added the
    // ctx.save and ctx.restore, so that it can be called without
    // regard to side-effects, and moved the stroke after the fill,
    // because otherwise the fill messes up the stroke which follows the
    // edge with half its width inside the rectangle and half its width
    // outside the rectangle.  The part inside the rectangle is overdrawn
    // with the fill if it comes first.
    // Check out his blog at http://js-bits.blogspot.com
    // The tl (top left), tr (top right), br (bottom right), bl (bottom left)
    // are unnamed optional arguments.
    //     false or unset - rounded corner
    //     true           - square corner
    
    var tl=arguments[7];
    var tr=arguments[8];
    var br=arguments[9];
    var bl=arguments[10];

    // default stroke and radius but not fill since its default
    // is false, and undefined tests as false anyway.

    if (typeof stroke == "undefined" ) { stroke = true; } 
    if (typeof radius === "undefined") { radius = 5; }

    this.save()
    //do the line for the top
    this.beginPath();
    this.moveTo(x+radius,y);
    this.lineTo(x+width-radius,y);
    //now the top right corner
    if(!tr){
	this.quadraticCurveTo(x+width,y,x+width,y+radius);
    }else{
	this.lineTo(x+width,y);
	this.lineTo(x+width,y+radius);
    }
    //now right right side
    this.lineTo(x+width,y+height-radius);
    //now the bottom left corner
    if(!br){
	this.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);
    }else{
	this.lineTo(x+width,y+height);
	this.lineTo(x+width-radius,y+height);
    }
    //now the bottom line
    this.lineTo(x+radius,y+height);
    // now the bottom left corner
    if(!bl){
	this.quadraticCurveTo(x,y+height,x,y+height-radius);
    }else{
	this.lineTo(x,y+height);
	this.lineTo(x,y+height-radius);
    }
    //left side line
    this.lineTo(x,y+radius);
    //top left corner
    if(!tl){
	this.quadraticCurveTo(x,y,x+radius,y);
    }else{
	this.lineTo(x,y);
	this.lineTo(x+radius,y);
    }
    // shouldn't need to close it, we just did, but defensively...
    this.closePath();

    // fill it if they asked
    if (fill) { this.fill(); }        

    //then draw a stroke around the path
    if (stroke) { this.stroke(); }

    //put everything back like we found it.
    this.restore();
}

var drawLineAngle=function(ctx,x0,y0,angle,length)
{
    ctx.save();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x0+length*Math.cos(angle),y0+length*Math.sin(angle));
    ctx.stroke();
    ctx.restore();
}
      
var drawHead=function(ctx,x0,y0,x1,y1,x2,y2,style)
{
  
  if(typeof(x0)=='string') x0=parseInt(x0);
  if(typeof(y0)=='string') y0=parseInt(y0);
  if(typeof(x1)=='string') x1=parseInt(x1);
  if(typeof(y1)=='string') y1=parseInt(y1);
  if(typeof(x2)=='string') x2=parseInt(x2);
  if(typeof(y2)=='string') y2=parseInt(y2);
  var radius=3;
  var twoPI=2*Math.PI;

  // all cases do this.
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x0,y0);
  ctx.lineTo(x1,y1);
  ctx.lineTo(x2,y2);
  switch(style){
    case 0:
      // curved filled, add the bottom as an arcTo curve and fill
      var backdist=Math.sqrt(((x2-x0)*(x2-x0))+((y2-y0)*(y2-y0)));
      ctx.arcTo(x1,y1,x0,y0,.55*backdist);
      ctx.fill();
      break;
    case 1:
      // straight filled, add the bottom as a line and fill.
      ctx.beginPath();
      ctx.moveTo(x0,y0);
      ctx.lineTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.lineTo(x0,y0);
      ctx.fill();
      break;
    case 2:
      // unfilled head, just stroke.
      ctx.stroke();
      break;
    case 3:
      //filled head, add the bottom as a quadraticCurveTo curve and fill
      var cpx=(x0+x1+x2)/3;
      var cpy=(y0+y1+y2)/3;
      ctx.quadraticCurveTo(cpx,cpy,x0,y0);
      ctx.fill();
      break;
    case 4:
      //filled head, add the bottom as a bezierCurveTo curve and fill
      var cp1x, cp1y, cp2x, cp2y,backdist;
      var shiftamt=5;
      if(x2==x0){
	// Avoid a divide by zero if x2==x0
	backdist=y2-y0;
	cp1x=(x1+x0)/2;
	cp2x=(x1+x0)/2;
	cp1y=y1+backdist/shiftamt;
	cp2y=y1-backdist/shiftamt;
      }else{
	backdist=Math.sqrt(((x2-x0)*(x2-x0))+((y2-y0)*(y2-y0)));
	var xback=(x0+x2)/2;
	var yback=(y0+y2)/2;
	var xmid=(xback+x1)/2;
	var ymid=(yback+y1)/2;

	var m=(y2-y0)/(x2-x0);
	var dx=(backdist/(2*Math.sqrt(m*m+1)))/shiftamt;
	var dy=m*dx;
	cp1x=xmid-dx;
	cp1y=ymid-dy;
	cp2x=xmid+dx;
	cp2y=ymid+dy;
      }

      ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x0,y0);
      ctx.fill();
      break;
  }
  ctx.restore();
};

var drawArcedArrow=function(ctx,x,y,r,startangle,endangle,anticlockwise,style,which,angle,d)
{
    
    style=typeof(style)!='undefined'? style:3;
    which=typeof(which)!='undefined'? which:1; // end point gets arrow
    angle=typeof(angle)!='undefined'? angle:Math.PI/8;
    d    =typeof(d)    !='undefined'? d    :10;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,r,startangle,endangle,anticlockwise);
    ctx.stroke();
    var sx,sy,lineangle,destx,desty;
    ctx.strokeStyle='rgba(0,0,0,0)';	// don't show the shaft
    if(which&1){	    // draw the destination end
	sx=Math.cos(startangle)*r+x;
	sy=Math.sin(startangle)*r+y;
	lineangle=Math.atan2(x-sx,sy-y);
	if(anticlockwise){
	    destx=sx+10*Math.cos(lineangle);
	    desty=sy+10*Math.sin(lineangle);
	}else{
	    destx=sx-10*Math.cos(lineangle);
	    desty=sy-10*Math.sin(lineangle);
	}
	drawArrow(ctx,sx,sy,destx,desty,style,2,angle,d);
    }
    if(which&2){	    // draw the origination end
	sx=Math.cos(endangle)*r+x;
	sy=Math.sin(endangle)*r+y;
	lineangle=Math.atan2(x-sx,sy-y);
	if(anticlockwise){
	    destx=sx-10*Math.cos(lineangle);
	    desty=sy-10*Math.sin(lineangle);
	}else{
	    destx=sx+10*Math.cos(lineangle);
	    desty=sy+10*Math.sin(lineangle);
	}
	drawArrow(ctx,sx,sy,destx,desty,style,2,angle,d);
    }
    ctx.restore();
}

var drawArrow=function(ctx,x1,y1,x2,y2,style,which,angle,d)
{
  
  // Ceason pointed to a problem when x1 or y1 were a string, and concatenation
  // would happen instead of addition
  if(typeof(x1)=='string') x1=parseInt(x1);
  if(typeof(y1)=='string') y1=parseInt(y1);
  if(typeof(x2)=='string') x2=parseInt(x2);
  if(typeof(y2)=='string') y2=parseInt(y2);
  style=typeof(style)!='undefined'? style:3;
  which=typeof(which)!='undefined'? which:1; // end point gets arrow
  angle=typeof(angle)!='undefined'? angle:Math.PI/8;
  d    =typeof(d)    !='undefined'? d    :10;
  // default to using drawHead to draw the head, but if the style
  // argument is a function, use it instead
  var toDrawHead=typeof(style)!='function'?drawHead:style;

  // For ends with arrow we actually want to stop before we get to the arrow
  // so that wide lines won't put a flat end on the arrow.
  //
  var dist=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  var ratio=(dist-d/3)/dist;
  var tox, toy,fromx,fromy;
  if(which&1){
    tox=Math.round(x1+(x2-x1)*ratio);
    toy=Math.round(y1+(y2-y1)*ratio);
  }else{
    tox=x2;
    toy=y2;
  }
  if(which&2){
    fromx=x1+(x2-x1)*(1-ratio);
    fromy=y1+(y2-y1)*(1-ratio);
  }else{
    fromx=x1;
    fromy=y1;
  }

  // Draw the shaft of the arrow
  ctx.beginPath();
  ctx.moveTo(fromx,fromy);
  ctx.lineTo(tox,toy);
  ctx.stroke();

  // calculate the angle of the line
  var lineangle=Math.atan2(y2-y1,x2-x1);
  // h is the line length of a side of the arrow head
  var h=Math.abs(d/Math.cos(angle));

  if(which&1){	// handle far end arrow head
    var angle1=lineangle+Math.PI+angle;
    var topx=x2+Math.cos(angle1)*h;
    var topy=y2+Math.sin(angle1)*h;
    var angle2=lineangle+Math.PI-angle;
    var botx=x2+Math.cos(angle2)*h;
    var boty=y2+Math.sin(angle2)*h;
    toDrawHead(ctx,topx,topy,x2,y2,botx,boty,style);
  }
  if(which&2){ // handle near end arrow head
    var angle1=lineangle+angle;
    var topx=x1+Math.cos(angle1)*h;
    var topy=y1+Math.sin(angle1)*h;
    var angle2=lineangle-angle;
    var botx=x1+Math.cos(angle2)*h;
    var boty=y1+Math.sin(angle2)*h;
    toDrawHead(ctx,topx,topy,x1,y1,botx,boty,style);
  }
}


// boundingBox keeps track of the top left and bottom right coordinates of rect
// x, y - coordinate of top left corner
// xextent - width
// yextent - height
function boundingBox(x,y,xextent,yextent)
{
    
    this.x1=x;
    this.y1=y;
    this.x2=x+xextent;
    this.y2=y+yextent;
    this.toString=function(){ return 'boundingBox(('+this.x1+','+this.y1+'),('+this.x2+','+this.y2+'))'; }
}

// makes a valiant effort to change an x,y pair from an event to an array of
// size two containing the resultant x,y offset onto the canvas.
// There are events, like key events for which this will not work.  They
// are not mouse events and don't have the x,y coordinates.
function getCanvasCursorPosition(e,canvas)
{
    
    var x;
    var y;
    if(e.type=='touchmove'||e.type=='touchstart'||e.type=='touchend'){
	x = e.touches[0].pageX;
	y = e.touches[0].pageY;
    }else if (e.pageX || e.pageY) {
	x = e.pageX;
	y = e.pageY;
    } else {
	x = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
	y = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }
    // Convert to coordinates relative to the canvas
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    return [x,y]
}

// handy constants
var SLIDER_HORIZONTAL=0;
var SLIDER_VERTICAL=1;
var CVS_BUTTON_DOWN=0;
var CVS_BUTTON_UP=1;
var CVS_BUTTON_NORMAL=0;
var CVS_BUTTON_TOGGLE=1;
var CVS_BUTTON_LEFT_ARROW=2;
var CVS_BUTTON_RIGHT_ARROW=3;

function button(ctx,x,y,width,height,eventmanager,onchange,name,type,state,color)
{
    
    var self=this;
    this.eventmanager=eventmanager; // this is the guy that sends us events
    this.ctx=ctx;   // we use this to draw ourselves on the canvas
    this.x=x;	    // top left x,y
    this.y=y;
    this.height=height;
    this.width=width;
    this.onchange=onchange; // Call this when we change
    this.name=name;	    // for debugging
    this.state=typeof(state)!='undefined'?state?CVS_BUTTON_DOWN:CVS_BUTTON_UP:CVS_BUTTON_UP;
    this.type=typeof(type)!='undefined'? type:CVS_BUTTON_NORMAL;
    this.toggle=this.type==CVS_BUTTON_TOGGLE?true:false;
    this.color=typeof(color)!='undefined'?color:'rgba(205,205,205,1)';
    var clrObj=new colorObject(this.color);

    // This is the eventhandler for the button
    // it returns true if we don't consume the event, else
    // returns cancelEvent(e) (which returns false)
    // x,y - canvas relative x and y
    // e - the actual event
    this.getstate=function()
    {
	return self.state;
    }

    this.setstate=function(state)
    {
	var old_state=self.state;
	self.state=typeof(state)!='undefined'?state?CVS_BUTTON_DOWN:CVS_BUTTON_UP:CVS_BUTTON_UP;
	if(old_state!=self.state){
	    self.onchange();
	}
    }

    this.eventhandler=function(x,y,e)
    {
	// at the end if state is still old_state, then we didn't react to the
	// event noticably, so we won't call the onChange handler
	
	var old_state=self.state;

	if(e.type=='keydown'){
	    if(e.keyCode==13){
		// <ENTER> key
		if(!self.keyupID){
		    self.keyupID=self.eventmanager.listen('keyup',self.hit,self.eventhandler);
		}
		if(self.toggle){
		    self.state= self.state==CVS_BUTTON_DOWN?
						CVS_BUTTON_UP:CVS_BUTTON_DOWN;
		}else{
		    self.state=CVS_BUTTON_DOWN;
		}
	    }else{
		return true;
	    }
	}else if(e.type=='keyup'){
	    if(e.keyCode==13){
		self.eventmanager.quitlistening('keyup',self.keyupID);
		if(!self.toggle){
		    self.state=CVS_BUTTON_UP;
		}
	    }
	}else if(e.type=='mousedown'){
	    if(self.toggle){
		self.state= self.state==CVS_BUTTON_DOWN?
					    CVS_BUTTON_UP:CVS_BUTTON_DOWN;
	    }else{
		self.state=CVS_BUTTON_DOWN;
	    }
	    // turn on listening to mouseup, mouseclick, mouseout
	    if(!self.mouseupID && !self.toggle){
		self.mouseupID=self.eventmanager.listen('mouseup',self.hit,self.eventhandler);
	    }
	    if(!self.mouseclickID && !self.toggle){
		self.mouseclickID=self.eventmanager.listen('mouseclick',self.hit,self.eventhandler);
	    }
	    if(!self.mouseoutID && !self.toggle){
		// we need to know when the mouse leaves so we can stop 
		// listening for stuff
		self.mouseoutID=self.eventmanager.listen('mouseout',self.hit,self.eventhandler);
	    }
	}else if(e.type == 'mouseup' ||
		  e.type == 'mouseclick' ||
		  e.type == 'mouseout'){
	    if(!self.toggle){
		self.state=CVS_BUTTON_UP;
	    }
	    // any one of these is good for a mouse up, turn them off until
	    // we get another mousedown
	    if(self.mouseupID){
		self.eventmanager.quitlistening('mouseup',self.mouseupID);
		self.mouseupID=null;
	    }
	    if(self.mouseclickID){
		self.eventmanager.quitlistening('mouseclick',self.mouseclickID);
		self.mouseclickID=null;
	    }
	    if(self.mouseoutID){
		self.eventmanager.quitlistening('mouseout',self.mouseoutID);
		self.mouseoutID=null;
	    }
	}
	if(self.state!=old_state){
	    // Only if it changed our state did we really consume it.
	    // call the callback and cancel the event and return
	    self.onchange();
	    return cancelEvent(e);
	}else{
	  // nothing changed, so return true so that someone else gets event
	  return true;
	}
    }

    // This draws our pretty button self.
    this.draw=function()
    {
	
	self.ctx.save();    // Make us reentrant
	self.ctx.strokeStyle='rgb(0,0,0)';
	self.ctx.lineWidth=1;

	if(self.type==CVS_BUTTON_NORMAL){
	  // draw a black surrounding line.  Offset by one for 3d
	  ctx.roundedRect(self.x,self.y,self.width-1,self.height-1,2,false,true);
	  self.ctx.strokeStyle='rgb(255,255,255)';
	  // offset by one the other way for 3d effect
	  ctx.roundedRect(self.x+1,self.y+1,self.width,self.height,2,false,true);
	  if(self.state==CVS_BUTTON_DOWN){
	    self.ctx.fillStyle=clrObj.mult(.75);
	    ctx.roundedRect(self.x+1,self.y+1,self.width-3,self.height-3,2,true,false);
	    var grad=ctx.createLinearGradient(self.x+1,self.y+1,self.x+1,self.height-3+self.y);
	    grad.addColorStop(0,'rgba(180,180,180,.6)');
	    grad.addColorStop(.3,'rgba(245,245,245,1.0)');
	    grad.addColorStop(1,'rgba(0,0,0,.5)');
	    ctx.fillStyle=grad;
	    ctx.roundedRect(self.x+1,self.y+1,self.width-3,self.height-3,2,true,false);

	  }else if(self.state==CVS_BUTTON_UP){
	    self.ctx.fillStyle=clrObj.mult(.92);
	    ctx.roundedRect(self.x+2,self.y+2,self.width-4,self.height-4,2,true,false);
	    var grad=ctx.createLinearGradient(self.x+2,self.y+2,self.x+2,self.height+self.y);
	    grad.addColorStop(0,'rgba(255,255,255,1)');
	    grad.addColorStop(1,'rgba(245,245,245,0.0)');
	    ctx.fillStyle=grad;
	    ctx.roundedRect(self.x+2,self.y+2,self.width-4,self.height-4,2,true,false);
	  }
	} else if(self.toggle){
	    ctx.clearRect(self.x,self.y,self.x,self.y);
	    ctx.beginPath();
	    ctx.arc(self.x+.25*self.width,self.y+.5*self.height,7,0,Math.PI*2,false);
	    ctx.strokeStyle='rgb(0,0,0)';
	    ctx.stroke();
	    if(self.state==CVS_BUTTON_DOWN){
		if(self.toggle){
		    ctx.beginPath();
		    ctx.fillStyle='rgb(0,0,0)';
		    ctx.arc(self.x+.25*self.width,self.y+.5*self.height,2,0,Math.PI*2,false);
		    ctx.fill();
		}
	    }
	}
	
	if(self.name){
	    self.ctx.fillStyle='rgb(0,0,0)';
	    var txtwidth=self.ctx.measureText(self.name).width;
	    var y=self.toggle||self.state==CVS_BUTTON_UP?self.y+self.height/2:self.y+self.height/2+1;
	    var x=self.toggle?self.x+.25*self.width+20:self.x+self.width/2-txtwidth/2;
	    ctx.textBaseline='middle';
	    self.ctx.fillText(self.name,x,y);
	}
	self.ctx.restore();
    }

    // an easy way to keep track of us on screen.
    this.bb=new boundingBox(this.x,this.y,this.width,this.height);

    // called from event manager to ask us if an x,y pair is us.  Return true
    // to get whatever event it is.
    this.hit=function(x,y,e){
	

	if(x>=self.bb.x1 && x<=self.bb.x2 && y>=self.bb.y1 && y<=self.bb.y2){
	    return true;
	}else{
	    return false;
	}
    }

    // These are the initial events we listen on always
    this.keydown=
	this.eventmanager.listen('keydown',this.hit,self.eventhandler);
    // We'll quit mouse events if we get touch events
    this.mousedownID=
	this.eventmanager.listen('mousedown',this.hit,self.eventhandler);
    this.mouseupID=null;
    this.keyupID=null;
    this.mouseclickID=null;
}

// a class to encapsulate the workings of a slider to be drawn on a canvas
// ctx - canvas context, (assumes 2d), used in draw method
// x,y - canvas relative location of top left
// length - the long measurment, this could be along x or y axis depending 
//	    on whether orientation is horizontal or vertical
// width  - the short measurement
// orientation - one of SLIDER_HORIZONTAL or SLIDER_VERTICAL
// min - the minimum value returned by the slider
// max - the maximum value returned by the slider
// step - how far on click changes value of slider
// value - original value of slider at creation
// eventmanager - who we talk to say that we want to start or stop listening
//	    for particular events
// onchange - a routine we call we our value changes
// name - our name - useful for debugging
function slider(ctx,x, y, length, width, orientation, min, max, step, value,eventmanager,onchange,name)
{
    
    var self=this;
    this.eventmanager=eventmanager; // this is the guy that sends us events
    this.ctx=ctx;   // we use this to draw ourselves on the canvas
    this.x=x;	    // top left x,y
    this.y=y;
    this.length=length;	// long way
    this.width=width;	// short way
    this.orientation=orientation;   //vertical or horizontal
    if(min<=max){ this.min=min; this.max=max; }
    else{ this.min=max; this.max=min; }
    this.range=this.max-this.min;
    this.step=step;

    // make sure the value is an even step amount
    var checkValue=function(inval,min,max,step){
	
	var val=Math.round(inval);
	val=val-(val % step);
	if(val<min){
	    val=min;
	}else if(val>max){
	    val=max;
	}
	return val;
    }
    this.value=checkValue(value,this.min,this.max,this.step);

    this.onchange=onchange; // Call this when we change
    this.name=name;	    // for debugging

    this.sliderWidth=this.width-2;  // we don't use 1 pixel on each side

    // so our creator can find out.  It's our purpose in life
    this.getValue=function(){
	
	return self.value;
    }

    this.setValue=function(newval){
	
	var intval=checkValue(parseInt(newval,10),self.min,self.max,self.step);
	if(intval!=self.value){
	    self.value=intval;
	    self.onchange();
	}
    }

    // This is the eventhandler for the slider
    // it returns true if we don't consume the event, else
    // returns cancelEvent(e) (which returns false)
    // x,y - canvas relative x and y
    // e - the actual event
    this.eventhandler=function(x,y,e)
    {
	// at the end if value is still oldvalue, then we didn't react to the
	// event noticably, so we won't call the onChange handler
	
	var oldvalue=self.value;

	if(e.type=='keydown'){
	    // we only care about cursor key movement
	    if(e.keyCode==36){
		// <Home> key
		self.value=checkValue(self.min,self.min,self.max,self.step);
	    } else if(e.keyCode==35){
		// <End> key
		self.value=checkValue(self.max,self.min,self.max,self.step);
	    } else if(e.keyCode==33){
		// <Page Up> key
		self.value=checkValue(self.value+2*self.step,self.min,self.max,self.step);
	    } else if(e.keyCode==34){
		// <Page Down> key
		self.value=checkValue(self.value-2*self.step,self.min,self.max,self.step);
	    } else if(e.keyCode>=37 && e.keyCode<=40){
		if(e.keyCode==37 || e.keyCode==39){
		    // <left> or <right>
		    self.value=
			checkValue(self.value+(e.keyCode-38)*self.step,
				self.min,self.max,self.step);
		}else if(e.keyCode==38 || e.keyCode==40){
		    // <up> or <down>
		    self.value=
			checkValue(self.value-(e.keyCode-39)*self.step,
				self.min,self.max,self.step);
		}
		// make sure we're in range
	    }else{
		// don't cancel the event, maybe someone else can use the key
		return true;
	    }
	    // If we get here, we potentially changed something.
	    if(self.value!=oldvalue){
		// if we changed call the onChange callback
		self.onchange();
	    }
	    // we consumed it, so cancel it
	    return cancelEvent(e);
	}else if(e.type=='touchmove'||e.type=='touchstart'||e.type=='touchstart'){
	    // if we get a touch event we cancel all existing mouse listens
	    // because, we only expect touch from now on.
	    if(self.mousedownID){
		self.eventmanager.quitlistening('mousedown',self.mousedownID);
		self.mousedownID=null;
	    }
	    if(self.mousewheelID){
		self.eventmanager.quitlistening('mousewheel',self.mousewheelID);
		self.mousewheelID=null;
	    }
	    if(self.DOMMouseScrollID){
		self.eventmanager.quitlistening('DOMMouseScroll',self.DOMMouseScrollID);
		self.DOMMouseScrollID=null;
	    }
	    if(self.mousemoveID){
		self.eventmanager.quitlistening('mousemove',self.mousemoveID);
		self.mousemoveID=null;
	    }
	    if(self.mouseupID){
		self.eventmanager.quitlistening('mouseup',self.mouseupID);
		self.mouseupID=null;
	    }
	    if(self.mouseclickID){
		self.eventmanager.quitlistening('mouseclick',self.mouseclickID);
		self.mouseclickID=null;
	    }
	    // if we get a touchstart, listen for touchmove and touchend
	    if(e.type=='touchstart'){
		if(self.touchmoveID==null){
		    self.touchmoveID=self.eventmanager.listen('touchmove',self.hit,self.eventhandler);
		}
		if(self.touchendID==null){
		    self.touchendID=self.eventmanager.listen('touchend',self.hit,self.eventhandler);
		}
	    }else if(e.type=='touchend'){
		// They lifted finger, quit listening to touchmove and touchend
	        if(self.touchmoveID){
		    self.eventmanager.quitlistening('touchmove',self.touchmoveID);
		}
	        if(self.touchendID){
		    self.eventmanager.quitlistening('touchend',self.touchendID);
		}
	    }
	}else if(e.type=='DOMMouseScroll' || e.type=='mousewheel'){
	    // simple, just change the value by step in the right direction
	    self.value=checkValue(self.value-wheelDirection(e)*self.step,self.min,self.max,self.step);
	    if(self.value!=oldvalue){
		self.onchange();
	    }
	    return cancelEvent(e);
	}else if(e.type=='mousedown'){
	    // turn on listening to mousemove, mouseup, mouseclick, mouseout
	    if(!self.mousemoveID){
		self.mousemoveID=self.eventmanager.listen('mousemove',self.hit,self.eventhandler);
	    }
	    if(!self.mouseupID){
		self.mouseupID=self.eventmanager.listen('mouseup',self.hit,self.eventhandler);
	    }
	    if(!self.mouseclickID){
		self.mouseclickID=self.eventmanager.listen('mouseclick',self.hit,self.eventhandler);
	    }
	    if(!self.mouseoutID){
		// we need to know when the mouse leaves so we can stop 
		// listening for stuff
		self.mouseoutID=self.eventmanager.listen('mouseout',self.hit,self.eventhandler);
	    }
	}else if(e.type != 'mousemove'){
	    // only other thing we react to now is move, if it's not move
	    // it's mouse up or click or mouseout, turn off listeners
	    if(self.mousemoveID){
		self.eventmanager.quitlistening('mousemove',self.mousemoveID);
		self.mousemoveID=null;
	    }
	    if(self.mouseupID){
		self.eventmanager.quitlistening('mouseup',self.mouseupID);
		self.mouseupID=null;
	    }
	    if(self.mouseclickID){
		self.eventmanager.quitlistening('mouseclick',self.mouseclickID);
		self.mouseclickID=null;
	    }
	    if(self.mouseoutID){
		self.eventmanager.quitlistening('mouseout',self.mouseoutID);
		self.mouseoutID=null;
	    }
	    // hmmm, did we consume that one or not?  It did make us stop
	    // listening, i.e. it was the end of our conversation...guess
	    // it was ours so we'll still cancel
	    return cancelEvent(e);
	}

	// Now we think we're a mousemove
	if(self.orientation===SLIDER_HORIZONTAL){
	    self.value=checkValue(self.min+(self.range)*(x-(self.x+self.sliderWidth/2))/(self.length-self.sliderWidth),self.min,self.max,self.step);
	}else{
	    // orientation is vertical, the y will decide the value
	    self.value=checkValue(self.max-(self.range)*(y-(self.y+self.sliderWidth/2))/(self.length-self.sliderWidth),self.min,self.max,self.step);
	}
	if(self.value!=oldvalue){
	    self.onchange();
	}
    }
    // valueToPos - turns the current value into a pixel offset into the slider
    this.valueToPos=function()
    {
	
	if(this.orientation===SLIDER_HORIZONTAL){
	    return (this.length-this.sliderWidth)*((this.value-this.min)/(this.max-this.min))+this.sliderWidth/2;
	}else{
	    return (this.length-this.sliderWidth)*((this.max-this.value)/(this.max-this.min))+this.sliderWidth/2;
	}

    }
    // This draws our pretty slider self.
    this.draw=function()
    {
	
	this.ctx.save();    // Make us reentrant
	// set up translation, scaling and rotation so that we can always
	// draw with the same set of commands no matter the orientation of
	// the slider
	this.ctx.translate(this.x,this.y);
	if(this.orientation===this.vertical){
	    ctx.scale(-1,1);
	    ctx.rotate(Math.PI/2);
	}
	// the slider background is a medium grey
	this.ctx.fillStyle="rgba(180,180,180,1)";
	this.ctx.fillRect(0,0,this.length,this.width);
	// highlight bottom and right edges with white
	this.ctx.lineWidth=1.0;
	this.ctx.strokeStyle="rgba(255,255,255,1)";
	this.ctx.beginPath();
	this.ctx.moveTo(0,this.width);
	this.ctx.lineTo(this.length,this.width);
	this.ctx.lineTo(this.length,0);
	this.ctx.stroke();
	// low light top and left edges with black
	this.ctx.strokeStyle="rgba(0,0,0,1)";
	this.ctx.beginPath();
	this.ctx.moveTo(0,this.width);
	this.ctx.lineTo(0,0);
	this.ctx.lineTo(this.length,0);
	this.ctx.stroke();
	// draw ticks with tiny grey circles
	this.ctx.strokeStyle="rgba(90,90,90,1)";
	for(var ctr=0;ctr<=(this.max-this.min);ctr++){
	    var stepxsize=(this.length-this.sliderWidth)/((this.max-this.min)/this.step);
	    this.ctx.beginPath();
	    this.ctx.arc(stepxsize*ctr+this.sliderWidth/2,
		    this.width/2,.5,0,2*Math.PI,true);
	    this.ctx.stroke();
	}
	// Now make the thumb (no it's not dumb - geez, are you three?)
	this.ctx.fillStyle="rgba(230,230,230,1)";
	this.ctx.strokeStyle="rgba(220,220,220,1)";
	var pos=this.valueToPos();
	this.ctx.lineWidth=1.0;
	this.ctx.beginPath();
	this.ctx.arc(pos,this.width/2,this.sliderWidth/2,0,2*Math.PI,false);
	this.ctx.fill();
	this.ctx.stroke();
	// Now make the highlight for the slider
	this.ctx.strokeStyle="rgba(255,255,255,1)";
	this.ctx.beginPath();
	this.ctx.arc(pos,this.width/2,this.sliderWidth/2,0.9*Math.PI,1.60*Math.PI,false);
	this.ctx.stroke();
	// Now make the low-light for the slider
	this.ctx.strokeStyle="rgba(100,100,100,1)";
	this.ctx.beginPath();
	this.ctx.arc(pos,this.width/2,this.sliderWidth/2,.00*Math.PI,0.65*Math.PI,false);
	this.ctx.stroke();
	this.ctx.restore();
    }

    // an easy way to keep track of us on screen.
    if(this.orientation==SLIDER_HORIZONTAL){
	this.bb=new boundingBox(this.x,this.y,this.length,this.width);
    }else{
	this.bb=new boundingBox(this.x,this.y,this.width,this.length);

    }

    // called from event manager to ask us if an x,y pair is us.  Return true
    // to get whatever event it is.
    this.hit=function(x,y,e){
	
	if(x>=self.bb.x1 && x<=self.bb.x2 && y>=self.bb.y1 && y<=self.bb.y2){
	    return true;
	}else{
	    return false;
	}
    }

    // These are the initial events we listen on always
    this.keydown=
	this.eventmanager.listen('keydown',this.hit,self.eventhandler);
    // We'll quit mouse events if we get touch events
    this.mousedownID=
	this.eventmanager.listen('mousedown',this.hit,self.eventhandler);
    this.mousewheel=
	this.eventmanager.listen('mousewheel',this.hit,self.eventhandler);
    this.DOMMouseScrollID=
	this.eventmanager.listen('DOMMouseScroll',this.hit,self.eventhandler);
    // The next one turns off the preceeding mouse ones if we receive it
    this.touchstartID=
	this.eventmanager.listen('touchstart',this.hit,self.eventhandler);
    this.touchmoveID=null;
    this.touchendID=null;
    this.mousemoveID=null;
    this.mouseupID=null;
    this.mouseclickID=null;
}

// object used by event manager to keep track of interested parties
function eventListener(id, eventType, hit, callback)
{
    
    this.id=id;	// unique sequential id so people can cancel
    this.eventType=eventType;
    this.hit=hit;   // call with x,y to see if they really want it
    this.callback=callback; // pass event to here
    this.toString=function() {
	return 'eventListener('+id+','+eventType+','+hit+','+'callback'+')'; }
}

// eventManager receives events from the browser and passes them on to things
// on the canvas which registered rectangular areas they cared about.
function eventManager(canvasManager)
{
    
    var self=this;  // We get called in other context, so remember us
    this.id=0;	    // Bump this by one for each listen
    this.queues=new Object();
    // So far, we only use this to get canvas, so why don't we just pass the
    // canvas?  I suspect that later we might need to get to other parts.
    this.canvasManager=canvasManager;

    // Call this to express an interest in listening to a particular event type
    // eventType - string with something like 'keydown' or 'mousemove'
    // hit - a routine that we can call with an x,y offset on the canvas to
    //	    ask if you're interested in the event.  Returns true if so
    // callback - if hit is true, we call the callback passing it the event
    // returns - the id of the event
    this.listen=function(eventType, hit, callback)
    {
	
	var queue=this.queues[eventType];
	if(queue==null){
	    // No one's asked to listen to this yet, make a queue to 
	    // store it in.
	    this.queues[eventType]=new Array();
	    queue=this.queues[eventType];
	}else{
	    // Check to see if it's a duplicate
	    for(var ctr=0;ctr<queue.length;ctr++){
		if(eventType==queue[ctr].eventType
			&& hit==queue[ctr].hit
			&& callback==queue[ctr].callback){
		    alert('duplicate! ctr: '+ctr
			    +' eventType: '+queue[ctr].eventType
			    +' x: '+queue[ctr].boundingbox.x
			    +' y: '+queue[ctr].boundingbox.y
			    +' xextent: '+queue[ctr].boundingbox.xextent
			    +' yextent: '+queue[ctr].boundingbox.yextent);
		    return queue[ctr].id;
		}
	    }
	}
	// If we get down here, we're adding a new eventListener
	queue[queue.length]=new eventListener(this.id,eventType, hit, callback);
	if(queue.length==1){
	    // First thing added to this queue, so start listening for this
	    // event on the canvas
	    hookEvent(this.canvasManager.canvas,eventType,this.eventhandler);
	}
	this.id=this.id+1;  // bump so next listen gets different id
	
	return this.id-1;   // return value before the bump
    }

    // quitlistening is called when we're tired of listening for an event
    // eventType - string with something like 'keydown' or 'mousemove'
    // id - the same id that was returned from listen
    this.quitlistening=function(eventType,id)
    {
	
	var queue=this.queues[eventType];
	if(queue==null){
	    // they aren't listening those silly gooses.
	    return;
	}
	for(var ctr=0;ctr<queue.length;ctr++){
	    if(queue[ctr].id==id){
		queue.remove(ctr,ctr);
	    }
	    if(queue.length==0 &&
		    eventType != 'mouseover' && eventType != 'mouseout'){
		// nobody is listening anymore, so we'll quit listening
		// We always listen for mouseover and mouseout though.
		unhookEvent(this.canvasManager.canvas,eventType,this.eventhandler);
	    }
	}
    }

    // eventhandler for eventManager
    // At the global level, as an event goes down through the capture and
    // then back up through the global stage, anyone can stop the 
    // propogation of the event. (Note that I don't allow my children
    // to choose one or the other.  I always ask for bubble events so
    // that's what they get.
    //
    // The W3C DOM2 Event spec, says that even if stopPropagation is 
    // called on an element, that the event will be dispatched to all
    // event listeners on the current element.  So, one interpretation,
    // since all the listeners in my queue are on the same canvas would
    // be for me to keep dispatching.  Another interpretation would have
    // me only dispatch to the same subelement.  We don't allow multiple
    // registers from the same element unless they use different dispatch
    // routines or different hit routines.  If they differ with hit 
    // routines or dispatch routines we do.
    // I completely ignore preventDefault since I don't execute that.
    //
    // Another problem is key events.  Since I use mouse x,y to decide who
    // should receive the event on the canvas, and key events don't have
    // associated x,y values, they never hit, but are passed to whoever has
    // focus.  That means you have to click on something to get it to receive
    // the key events.
    this.eventhandler=function(e)
    {
	
	var xy;
	if(!e){
	    var e=window.event;
	}
	self.canvasManager.canvas.focus();
	if(e.type=='mouseout'){
	    self.canvasManager.canvas.blur();
	}

	var xy=getCanvasCursorPosition(e,self.canvasManager.canvas);
	var queue=self.queues[e.type];
	var passon=true;  //  if true we didn't consume the event

	if(queue!=null){
	    for(var ctr=0;ctr<queue.length;++ctr){
		var el=queue[ctr];
		if(el.hit(xy[0],xy[1],e)){
		    // we found someone listening on that part of canvas
		    if(!el.callback(xy[0],xy[1],e)){
			// they consumed it
			passon=false;
		    }
		    if(e.type=='mousedown' || e.type=='touchstart'
			|| e.type=='mousewheel' || e.type=='DOMMouseScroll'
			|| e.type=='touchmove'  || e.type=='touchend'
			|| e.type=='touchdown'  || e.type=='keydown'
			    ){
			// give the focus to whoever gets this event
			self.mousefocusedCB=el.callback;
		    }

		} else if(el.callback==self.mousefocusedCB
		       && (e.type=='mouseup'    || e.type=='mouseout'
			|| e.type=='click'      || e.type=='mousemove'
			|| e.type=='touchmove'  || e.type=='touchend'
			|| e.type=='mousewheel' || e.type=='DOMMouseScroll'
			|| e.type=='keydown')){
		    // if the bounding box didn't match, but they are the
		    // one with mouse focus send it to them anyway.
		    if(!self.mousefocusedCB(xy[0],xy[1],e)){
			// they consumed it
			passon=false;
		    }
		    if(  e.type != 'mousemove' && e.type != 'touchmove'
		      && e.type !='mousewheel' && e.type != 'DOMMouseScroll'
		      && e.type != 'keydown' ){
			// but they lose the focus for anything but movement
			self.mousefocusedCB=null;
		    }
		}
	    }
	}
	// passon is true if we didn't cancel, else false
	return passon;
    }
    // we always listen for mouseout and mouseover
    hookEvent(this.canvasManager.canvas,'mouseout',this.eventhandler);
    hookEvent(this.canvasManager.canvas,'mouseover',this.eventhandler);
}

function Clock(id)
{
  var clockcanvas=document.getElementById(id);
  var ctx=clockcanvas.getContext('2d');
  var pi=Math.PI;	            // just for convenience
  this.now;		            // so we know what time it is.
  var xc=clockcanvas.width/2;	    // x center of clock
  var yc=clockcanvas.height/2;      // y center of clock
  var radius=Math.min(.85*xc,.85*yc); // size of the radius of the circle 
  var fontsize=radius/3;


  this.start=function()
  {
    setInterval(this.drawclock,1000);  // 1000ms is 1 sec
  }

  var drawbody=function()
  {
    ctx.save();
    // Shadows from the clock itself
    ctx.shadowOffsetX=Math.max(.04*radius,1);
    ctx.shadowOffsetY=Math.max(.04*radius,1);
    ctx.shadowBlur=Math.max(.04*radius,1);
    ctx.shadowColor='rgba(0,0,0,.2)';
    ctx.beginPath();
    ctx.arc(xc,yc,radius,0,2*pi,false);   // border of clock
    ctx.fillStyle='rgb(255,255,180)';	  // sort of a grey orange background
    ctx.fill();				  // fill first
    ctx.strokeStyle='rgb(30,110,30)';
    ctx.lineWidth=Math.max(radius/5,1);
    ctx.stroke();			  // and then stroke
    ctx.strokeStyle='rgb(70,150,80)';
    ctx.lineWidth=Math.max(radius/15,1);
    ctx.stroke();			  // and then stroke
    ctx.restore();
  }

  var drawback=function()
  {
    ctx.save();
    // draw a dark circle in middle, later after the hands are drawn we'll
    // add a smaller golden circle in the middle
    ctx.beginPath();
    ctx.moveTo(xc,yc);
    
    ctx.arc(xc,yc,Math.max(.03*radius,1),0,2*pi,false);
    ctx.stroke();

    // Now we'll draw the minute and second marks
    ctx.beginPath();
    for(var ctr=0; ctr<60;ctr++){
      var angle=ctr*2*pi/60;
      var x1=(.9*radius)*Math.cos(angle)+xc;
      var y1=(.9*radius)*Math.sin(angle)+yc;
      var x2=(.95*radius)*Math.cos(angle)+xc;
      var y2=(.95*radius)*Math.sin(angle)+yc;
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.lineWidth=1;
      ctx.stroke();
    }

    // Next are the fatter longer hour marks
    ctx.beginPath();
    ctx.lineWidth=Math.max(.05*radius,1);
    for(var ctr=0; ctr<12;ctr++){
      var angle=ctr*2*pi/12;
      var x1=(.8*radius)*Math.cos(angle)+xc;
      var y1=(.8*radius)*Math.sin(angle)+yc;
      var x2=(.95*radius)*Math.cos(angle)+xc;
      var y2=(.95*radius)*Math.sin(angle)+yc;
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    }

    // Next we draw the hour numbers.  We start at 3 because that 
    // corresponds to 0 degrees
    var hours=['3','4','5','6','7','8','9','10','11','12','1','2'];
    ctx.font = fontsize+"px Times,'Times New Roman',sans-serif";
    ctx.textBaseline='middle';
    for(var ctr=0;ctr<12;ctr++){
	var angle=ctr*2*pi/12;
	var len=.5*radius;
	// we adust the x with an equation using cosine and the y with
	// an equation using sin so that the text looks like it's in an
	// even circle
	var x=len*Math.cos(angle)+xc-((1-Math.cos(angle))/2)*ctx.measureText(hours[ctr]).width;
	var y=len*Math.sin(angle)+yc+fontsize/3*Math.sin(angle);
	ctx.fillText(hours[ctr],x,y);
    }
    ctx.restore();
  }

  var drawhands=function()
  {
    ctx.save();
    ctx.shadowBlur=Math.max(.02*radius,1);

    // Make a shadow for the center staff that the hands can be drawn on
    ctx.fillStyle='rgb(100,80,40,0)';
    for(var ctr=0;ctr<Math.max(.07*radius,1);ctr+=.1){
	ctx.shadowColor='rgba(0,0,0,.01)';
	ctx.beginPath();
	ctx.shadowOffsetX=ctr;
	ctx.shadowOffsetY=ctr;
	ctx.arc(xc,yc,Math.max(.04*radius,1),0,2*pi,false);
	ctx.fill();
    }

    ctx.shadowColor='rgba(0,5,0,.5)';

    // Now the hour hand, first a skinnier front hand
    ctx.fillStyle='rgb(0,0,0)';
    ctx.shadowOffsetX=Math.max(.03*radius,1);
    ctx.shadowOffsetY=Math.max(.03*radius,1);
    var hourangle=3*pi/2+(2*pi/12)*(self.now.getHours()+self.now.getMinutes()/60);
    var hourx=(.5*radius)*Math.cos(hourangle)+xc;
    var houry=(.5*radius)*Math.sin(hourangle)+yc;
    ctx.lineWidth=Math.max(.03*radius,1);
    drawArrow(ctx,xc,yc,hourx,houry,3,1,Math.PI/4,.15*radius);
    // and the heavier back end
    var hourx=.2*radius*Math.cos(hourangle+pi)+xc;
    var houry=.2*radius*Math.sin(hourangle+pi)+yc;
    ctx.beginPath()
    ctx.moveTo(xc,yc);
    ctx.lineWidth=Math.max(.06*radius,1);
    ctx.lineTo(hourx,houry);
    ctx.stroke();

    ctx.shadowOffsetX=Math.max(.05*radius,1);
    ctx.shadowOffsetY=Math.max(.05*radius,1);

    // draw the minute hand we draw the front pointer part first,
    // then add a back heavier part
    var minuteangle=3*pi/2+(2*pi/60)*self.now.getMinutes();
    var minx=(.85*radius)*Math.cos(minuteangle)+xc;
    var miny=(.85*radius)*Math.sin(minuteangle)+yc;
    ctx.lineWidth=Math.max(.03*radius,1);// set up lineWidth for the drawArrow
    drawArrow(ctx,xc,yc,minx,miny,3,1,Math.PI/4,.2*radius);
    // Now the back heavier part
    var minx=.25*radius*Math.cos(minuteangle+pi)+xc;
    var miny=.25*radius*Math.sin(minuteangle+pi)+yc;
    ctx.beginPath();
    ctx.moveTo(xc,yc);
    ctx.lineWidth=Math.max(.06*radius,1);
    ctx.lineTo(minx,miny);
    ctx.stroke();

    // Second hand, red, same story, skinny front part first
    ctx.shadowOffsetX=Math.max(.07*radius,1);
    ctx.shadowOffsetY=Math.max(.07*radius,1);
    ctx.fillStyle='rgb(255,0,0)';
    ctx.strokeStyle='rgb(255,0,0)';
    var secondangle=3*pi/2+(2*pi/60)*self.now.getSeconds();
    var secx=(.75*radius)*Math.cos(secondangle)+xc;
    var secy=(.75*radius)*Math.sin(secondangle)+yc;
    ctx.lineWidth=1.01;
    drawArrow(ctx,xc,yc,secx,secy,3,1,Math.PI/20,.22*radius);
    // thicker back part later
    var secx=.25*radius*Math.cos(secondangle+pi)+xc;
    var secy=.25*radius*Math.sin(secondangle+pi)+yc;
    ctx.beginPath();
    ctx.moveTo(xc,yc);
    ctx.lineWidth=Math.max(.04*radius,1);
    ctx.lineTo(secx,secy);
    ctx.stroke();

    // draw the center of the clock
    ctx.fillStyle='rgb(100,80,40)';
    ctx.beginPath();
    ctx.arc(xc,yc,Math.max(.04*radius,1),0,2*pi,false);
    ctx.fill();

    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(xc,yc);
    ctx.fillStyle='rgb(255,255,0)';
    ctx.arc(xc,yc,Math.max(.03*radius,1),0,2*pi,false);
    ctx.fill();
  }

  var drawhighlights=function()
  {
    ctx.save();
    // draw a highlight around the edge of the glass
    // Note the alpha so everything shows through it
    ctx.shadowOffsetX=Math.max(.05*radius,1);
    ctx.shadowOffsetY=Math.max(.05*radius,1);
    ctx.shadowBlur=Math.max(.08*radius,1);
    ctx.shadowColor='rgba(0,0,0,.5)';
    ctx.strokeStyle='rgba(255,255,255,.40)';
    ctx.lineWidth=Math.max(.1*radius,1);
    ctx.beginPath();
    ctx.arc(xc,yc,.9*radius,0,2*pi,false);
    ctx.stroke();

    // then a skinnier highlight inside the other
    // Note the alpha is higher so you can barely see through it
    ctx.strokeStyle='rgba(255,255,255,.45)';
    ctx.lineWidth=Math.max(.03*radius,1);
    ctx.beginPath();
    ctx.arc(xc,yc,.90*radius,0,2*pi,false);
    ctx.stroke();

    // then a highlight in the center of the glass
    // the alpha makes it barely there
    ctx.beginPath();
    var grad=ctx.createRadialGradient(xc+.1*radius,yc-.3*radius,10,xc,yc,radius);
    grad.addColorStop(0,'rgba(255,255,255,.2)');
    grad.addColorStop(.01,'rgba(255,255,255,.1)');
    grad.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle=grad;
    ctx.arc(xc,yc,radius,0,2*pi,false);
    ctx.fill();
    ctx.restore();
  }

  this.drawclock=function()
  {
    ctx.save();
    this.now=new Date();

    // got to clear it each time through or the hands smear
    ctx.clearRect(0,0,clockcanvas.width,clockcanvas.height);

    // default our stroke and fill styles
    ctx.strokeStyle='rgb(0,0,0)';
    ctx.fillStyle='rgb(0,0,0)';
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.shadowBlur=0;
    ctx.shadowColor='rgba(0,0,0,0)';

    // next draw the background and border of the clock
    drawbody();
    drawback();
    drawhands();
    drawhighlights();
    

    // Turn off all shadows
    /*
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.shadowBlur=0;
    ctx.shadowColor='rgba(0,0,0,0)';
    */
    delete this.now;
  }
}
      var scale_image=function(img,xsize,ysize,ctx,callback,error_cb){
	// we'd like this to scale exactly to size, but since size
	// could be something like 28.75, and images can only be an exact
	// number of pixels wide, then we can't.
	// make a tmp canvas to render into
	var tmpcvs=document.createElement('canvas');
	// and set it to be the image size
	tmpcvs.height=ysize;
	tmpcvs.width=xsize;
	// grab its context so we can draw
	var tmpctx=tmpcvs.getContext('2d');
	// and draw the image scaled to that size
	tmpctx.drawImage(img,0,0,xsize,ysize);
	// now we get the data from the canvas
	var dataurl=tmpcvs.toDataURL();
	// create a new image,
	var sclimage=new Image();
	// and set it to the data from the canvas.  Once that's done,
	// we will call the callback passing it the contex, and the scaled 
	// image.
	sclimage.onload=function(){
	  callback(ctx,sclimage);
	}
	sclimage.onerror=function(){
	  error_cb(ctx);
	}
	sclimage.src=dataurl;
      }
	
      var makerectimage=function(xsize,ysize,color,callback,brdrsz,brdrclr){
	if (typeof brdrsz == "undefined" ){
	    brdrsz = 0;
	}else {
	    if (typeof brdrclr == "undefined" ){
		brdrclr = 'rgb(0,0,0)';
	    } 
	}
	var tmpcvs=document.createElement('canvas');
	// and set it to be the image size
	tmpcvs.height=ysize;
	tmpcvs.width=xsize;
	// grab its context so we can draw
	var tmpctx=tmpcvs.getContext('2d');
	// and draw the image scaled to that size
	tmpctx.fillStyle=color;
	tmpctx.fillRect(0,0,xsize,ysize);
	if(brdrsz>0){
	    tmpctx.strokeStyle=brdrclr;
	    tmpctx.lineWidth=brdrsz;
	    tmpctx.strokeRect(0,0,xsize,ysize);
	}

	// now we get the data from the canvas
	var dataurl=tmpcvs.toDataURL();
	// create a new image,
	var sclimage=new Image();
	// and set it to the data from the canvas.  Once that's done,
	// we will call the callback passing it the contex, and the scaled 
	// image.
	sclimage.onload=function(){
	  callback(sclimage);
	}
	sclimage.src=dataurl;
      }

;
(function() {


}).call(this);
/*
  html2canvas 0.4.1 <http://html2canvas.hertzen.com>
  Copyright (c) 2013 Niklas von Hertzen

  Released under MIT License
*/


(function(window, document, undefined){

"use strict";

var _html2canvas = {},
previousElement,
computedCSS,
html2canvas;

_html2canvas.Util = {};

_html2canvas.Util.log = function(a) {
  if (_html2canvas.logging && window.console && window.console.log) {
    window.console.log(a);
  }
};

_html2canvas.Util.trimText = (function(isNative){
  return function(input) {
    return isNative ? isNative.apply(input) : ((input || '') + '').replace( /^\s+|\s+$/g , '' );
  };
})(String.prototype.trim);

_html2canvas.Util.asFloat = function(v) {
  return parseFloat(v);
};

(function() {
  // TODO: support all possible length values
  var TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
  var TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
  _html2canvas.Util.parseTextShadows = function (value) {
    if (!value || value === 'none') {
      return [];
    }

    // find multiple shadow declarations
    var shadows = value.match(TEXT_SHADOW_PROPERTY),
      results = [];
    for (var i = 0; shadows && (i < shadows.length); i++) {
      var s = shadows[i].match(TEXT_SHADOW_VALUES);
      results.push({
        color: s[0],
        offsetX: s[1] ? s[1].replace('px', '') : 0,
        offsetY: s[2] ? s[2].replace('px', '') : 0,
        blur: s[3] ? s[3].replace('px', '') : 0
      });
    }
    return results;
  };
})();


_html2canvas.Util.parseBackgroundImage = function (value) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        c, mode = 0, numParen = 0, quote, args;

    var appendResult = function(){
        if(method) {
            if(definition.substr( 0, 1 ) === '"') {
                definition = definition.substr( 1, definition.length - 2 );
            }
            if(definition) {
                args.push(definition);
            }
            if(method.substr( 0, 1 ) === '-' &&
                    (prefix_i = method.indexOf( '-', 1 ) + 1) > 0) {
                prefix = method.substr( 0, prefix_i);
                method = method.substr( prefix_i );
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args
            });
        }
        args = []; //for some odd reason, setting .length = 0 didn't work in safari
        method =
            prefix =
            definition =
            block = '';
    };

    appendResult();
    for(var i = 0, ii = value.length; i<ii; i++) {
        c = value[i];
        if(mode === 0 && whitespace.indexOf( c ) > -1){
            continue;
        }
        switch(c) {
            case '"':
                if(!quote) {
                    quote = c;
                }
                else if(quote === c) {
                    quote = null;
                }
                break;

            case '(':
                if(quote) { break; }
                else if(mode === 0) {
                    mode = 1;
                    block += c;
                    continue;
                } else {
                    numParen++;
                }
                break;

            case ')':
                if(quote) { break; }
                else if(mode === 1) {
                    if(numParen === 0) {
                        mode = 0;
                        block += c;
                        appendResult();
                        continue;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if(quote) { break; }
                else if(mode === 0) {
                    appendResult();
                    continue;
                }
                else if (mode === 1) {
                    if(numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition);
                        definition = '';
                        block += c;
                        continue;
                    }
                }
                break;
        }

        block += c;
        if(mode === 0) { method += c; }
        else { definition += c; }
    }
    appendResult();

    return results;
};

_html2canvas.Util.Bounds = function (element) {
  var clientRect, bounds = {};

  if (element.getBoundingClientRect){
    clientRect = element.getBoundingClientRect();

    // TODO add scroll position to bounds, so no scrolling of window necessary
    bounds.top = clientRect.top;
    bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
    bounds.left = clientRect.left;

    bounds.width = element.offsetWidth;
    bounds.height = element.offsetHeight;
  }

  return bounds;
};

// TODO ideally, we'd want everything to go through this function instead of Util.Bounds,
// but would require further work to calculate the correct positions for elements with offsetParents
_html2canvas.Util.OffsetBounds = function (element) {
  var parent = element.offsetParent ? _html2canvas.Util.OffsetBounds(element.offsetParent) : {top: 0, left: 0};

  return {
    top: element.offsetTop + parent.top,
    bottom: element.offsetTop + element.offsetHeight + parent.top,
    left: element.offsetLeft + parent.left,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

function toPX(element, attribute, value ) {
    var rsLeft = element.runtimeStyle && element.runtimeStyle[attribute],
        left,
        style = element.style;

    // Check if we are not dealing with pixels, (Opera has issues with this)
    // Ported from jQuery css.js
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels

    if ( !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test( value ) && /^-?\d/.test(value) ) {
        // Remember the original values
        left = style.left;

        // Put in the new values to get a computed value out
        if (rsLeft) {
            element.runtimeStyle.left = element.currentStyle.left;
        }
        style.left = attribute === "fontSize" ? "1em" : (value || 0);
        value = style.pixelLeft + "px";

        // Revert the changed values
        style.left = left;
        if (rsLeft) {
            element.runtimeStyle.left = rsLeft;
        }
    }

    if (!/^(thin|medium|thick)$/i.test(value)) {
        return Math.round(parseFloat(value)) + "px";
    }

    return value;
}

function asInt(val) {
    return parseInt(val, 10);
}

function parseBackgroundSizePosition(value, element, attribute, index) {
    value = (value || '').split(',');
    value = value[index || 0] || value[0] || 'auto';
    value = _html2canvas.Util.trimText(value).split(' ');

    if(attribute === 'backgroundSize' && (!value[0] || value[0].match(/cover|contain|auto/))) {
        //these values will be handled in the parent function
    } else {
        value[0] = (value[0].indexOf( "%" ) === -1) ? toPX(element, attribute + "X", value[0]) : value[0];
        if(value[1] === undefined) {
            if(attribute === 'backgroundSize') {
                value[1] = 'auto';
                return value;
            } else {
                // IE 9 doesn't return double digit always
                value[1] = value[0];
            }
        }
        value[1] = (value[1].indexOf("%") === -1) ? toPX(element, attribute + "Y", value[1]) : value[1];
    }
    return value;
}

_html2canvas.Util.getCSS = function (element, attribute, index) {
    if (previousElement !== element) {
      computedCSS = document.defaultView.getComputedStyle(element, null);
    }

    var value = computedCSS[attribute];

    if (/^background(Size|Position)$/.test(attribute)) {
        return parseBackgroundSizePosition(value, element, attribute, index);
    } else if (/border(Top|Bottom)(Left|Right)Radius/.test(attribute)) {
      var arr = value.split(" ");
      if (arr.length <= 1) {
          arr[1] = arr[0];
      }
      return arr.map(asInt);
    }

  return value;
};

_html2canvas.Util.resizeBounds = function( current_width, current_height, target_width, target_height, stretch_mode ){
  var target_ratio = target_width / target_height,
    current_ratio = current_width / current_height,
    output_width, output_height;

  if(!stretch_mode || stretch_mode === 'auto') {
    output_width = target_width;
    output_height = target_height;
  } else if(target_ratio < current_ratio ^ stretch_mode === 'contain') {
    output_height = target_height;
    output_width = target_height * current_ratio;
  } else {
    output_width = target_width;
    output_height = target_width / current_ratio;
  }

  return {
    width: output_width,
    height: output_height
  };
};

function backgroundBoundsFactory( prop, el, bounds, image, imageIndex, backgroundSize ) {
    var bgposition =  _html2canvas.Util.getCSS( el, prop, imageIndex ) ,
    topPos,
    left,
    percentage,
    val;

    if (bgposition.length === 1){
      val = bgposition[0];

      bgposition = [];

      bgposition[0] = val;
      bgposition[1] = val;
    }

    if (bgposition[0].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[0])/100);
      left = bounds.width * percentage;
      if(prop !== 'backgroundSize') {
        left -= (backgroundSize || image).width*percentage;
      }
    } else {
      if(prop === 'backgroundSize') {
        if(bgposition[0] === 'auto') {
          left = image.width;
        } else {
          if (/contain|cover/.test(bgposition[0])) {
            var resized = _html2canvas.Util.resizeBounds(image.width, image.height, bounds.width, bounds.height, bgposition[0]);
            left = resized.width;
            topPos = resized.height;
          } else {
            left = parseInt(bgposition[0], 10);
          }
        }
      } else {
        left = parseInt( bgposition[0], 10);
      }
    }


    if(bgposition[1] === 'auto') {
      topPos = left / image.width * image.height;
    } else if (bgposition[1].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[1])/100);
      topPos =  bounds.height * percentage;
      if(prop !== 'backgroundSize') {
        topPos -= (backgroundSize || image).height * percentage;
      }

    } else {
      topPos = parseInt(bgposition[1],10);
    }

    return [left, topPos];
}

_html2canvas.Util.BackgroundPosition = function( el, bounds, image, imageIndex, backgroundSize ) {
    var result = backgroundBoundsFactory( 'backgroundPosition', el, bounds, image, imageIndex, backgroundSize );
    return { left: result[0], top: result[1] };
};

_html2canvas.Util.BackgroundSize = function( el, bounds, image, imageIndex ) {
    var result = backgroundBoundsFactory( 'backgroundSize', el, bounds, image, imageIndex );
    return { width: result[0], height: result[1] };
};

_html2canvas.Util.Extend = function (options, defaults) {
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
};


/*
 * Derived from jQuery.contents()
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
_html2canvas.Util.Children = function( elem ) {
  var children;
  try {
    children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ? elem.contentDocument || elem.contentWindow.document : (function(array) {
      var ret = [];
      if (array !== null) {
        (function(first, second ) {
          var i = first.length,
          j = 0;

          if (typeof second.length === "number") {
            for (var l = second.length; j < l; j++) {
              first[i++] = second[j];
            }
          } else {
            while (second[j] !== undefined) {
              first[i++] = second[j++];
            }
          }

          first.length = i;

          return first;
        })(ret, array);
      }
      return ret;
    })(elem.childNodes);

  } catch (ex) {
    _html2canvas.Util.log("html2canvas.Util.Children failed with exception: " + ex.message);
    children = [];
  }
  return children;
};

_html2canvas.Util.isTransparent = function(backgroundColor) {
  return (backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)");
};
_html2canvas.Util.Font = (function () {

  var fontData = {};

  return function(font, fontSize, doc) {
    if (fontData[font + "-" + fontSize] !== undefined) {
      return fontData[font + "-" + fontSize];
    }

    var container = doc.createElement('div'),
    img = doc.createElement('img'),
    span = doc.createElement('span'),
    sampleText = 'Hidden Text',
    baseline,
    middle,
    metricsObj;

    container.style.visibility = "hidden";
    container.style.fontFamily = font;
    container.style.fontSize = fontSize;
    container.style.margin = 0;
    container.style.padding = 0;

    doc.body.appendChild(container);

    // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
    img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = font;
    span.style.fontSize = fontSize;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(doc.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(doc.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;
    metricsObj = {
      baseline: baseline,
      lineWidth: 1,
      middle: middle
    };

    fontData[font + "-" + fontSize] = metricsObj;

    doc.body.removeChild(container);

    return metricsObj;
  };
})();

(function(){
  var Util = _html2canvas.Util,
    Generate = {};

  _html2canvas.Generate = Generate;

  var reGradients = [
  /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
  /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
  ];

  /*
 * TODO: Add IE10 vendor prefix (-ms) support
 * TODO: Add W3C gradient (linear-gradient) support
 * TODO: Add old Webkit -webkit-gradient(radial, ...) support
 * TODO: Maybe some RegExp optimizations are possible ;o)
 */
  Generate.parseGradient = function(css, bounds) {
    var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3, tl,tr,br,bl;

    for(i = 0; i < len; i+=1){
      m1 = css.match(reGradients[i]);
      if(m1) {
        break;
      }
    }

    if(m1) {
      switch(m1[1]) {
        case '-webkit-linear-gradient':
        case '-o-linear-gradient':

          gradient = {
            type: 'linear',
            x0: null,
            y0: null,
            x1: null,
            y1: null,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/\w+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              switch(m2[i]) {
                case 'top':
                  gradient.y0 = 0;
                  gradient.y1 = bounds.height;
                  break;

                case 'right':
                  gradient.x0 = bounds.width;
                  gradient.x1 = 0;
                  break;

                case 'bottom':
                  gradient.y0 = bounds.height;
                  gradient.y1 = 0;
                  break;

                case 'left':
                  gradient.x0 = 0;
                  gradient.x1 = bounds.width;
                  break;
              }
            }
          }
          if(gradient.x0 === null && gradient.x1 === null){ // center
            gradient.x0 = gradient.x1 = bounds.width / 2;
          }
          if(gradient.y0 === null && gradient.y1 === null){ // center
            gradient.y0 = gradient.y1 = bounds.height / 2;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-gradient':

          gradient = {
            type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = (m2[3] * bounds.width) / 100;
            gradient.y1 = (m2[4] * bounds.height) / 100;
          }

          // get colors and stops
          m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
              stop = parseFloat(m3[2]);
              if(m3[1] === 'from') {
                stop = 0.0;
              }
              if(m3[1] === 'to') {
                stop = 1.0;
              }
              gradient.colorStops.push({
                color: m3[3],
                stop: stop
              });
            }
          }
          break;

        case '-moz-linear-gradient':

          gradient = {
            type: 'linear',
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

          // m2[1] == 0%   -> left
          // m2[1] == 50%  -> center
          // m2[1] == 100% -> right

          // m2[2] == 0%   -> top
          // m2[2] == 50%  -> center
          // m2[2] == 100% -> bottom

          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = bounds.width - gradient.x0;
            gradient.y1 = bounds.height - gradient.y0;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3]){ // percentage
                  stop /= 100;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-radial-gradient':
        case '-moz-radial-gradient':
        case '-o-radial-gradient':

          gradient = {
            type: 'circle',
            x0: 0,
            y0: 0,
            x1: bounds.width,
            y1: bounds.height,
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0,
            colorStops: []
          };

          // center
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.cx = (m2[1] * bounds.width) / 100;
            gradient.cy = (m2[2] * bounds.height) / 100;
          }

          // size
          m2 = m1[3].match(/\w+/);
          m3 = m1[4].match(/[a-z\-]*/);
          if(m2 && m3){
            switch(m3[0]){
              case 'farthest-corner':
              case 'cover': // is equivalent to farthest-corner
              case '': // mozilla removes "cover" from definition :(
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                break;
              case 'closest-corner':
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                break;
              case 'farthest-side':
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.max(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.max(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.max(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;
              case 'closest-side':
              case 'contain': // is equivalent to closest-side
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.min(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.min(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.min(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;

            // TODO: add support for "30px 40px" sizes (webkit only)
            }
          }

          // color stops
          m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;
      }
    }

    return gradient;
  };

  function addScrollStops(grad) {
    return function(colorStop) {
      try {
        grad.addColorStop(colorStop.stop, colorStop.color);
      }
      catch(e) {
        Util.log(['failed to add color stop: ', e, '; tried to add: ', colorStop]);
      }
    };
  }

  Generate.Gradient = function(src, bounds) {
    if(bounds.width === 0 || bounds.height === 0) {
      return;
    }

    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    gradient, grad;

    canvas.width = bounds.width;
    canvas.height = bounds.height;

    // TODO: add support for multi defined background gradients
    gradient = _html2canvas.Generate.parseGradient(src, bounds);

    if(gradient) {
      switch(gradient.type) {
        case 'linear':
          grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);
          gradient.colorStops.forEach(addScrollStops(grad));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
          break;

        case 'circle':
          grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);
          gradient.colorStops.forEach(addScrollStops(grad));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
          break;

        case 'ellipse':
          var canvasRadial = document.createElement('canvas'),
            ctxRadial = canvasRadial.getContext('2d'),
            ri = Math.max(gradient.rx, gradient.ry),
            di = ri * 2;

          canvasRadial.width = canvasRadial.height = di;

          grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);
          gradient.colorStops.forEach(addScrollStops(grad));

          ctxRadial.fillStyle = grad;
          ctxRadial.fillRect(0, 0, di, di);

          ctx.fillStyle = gradient.colorStops[gradient.colorStops.length - 1].color;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);
          break;
      }
    }

    return canvas;
  };

  Generate.ListAlpha = function(number) {
    var tmp = "",
    modulus;

    do {
      modulus = number % 26;
      tmp = String.fromCharCode((modulus) + 64) + tmp;
      number = number / 26;
    }while((number*26) > 26);

    return tmp;
  };

  Generate.ListRoman = function(number) {
    var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
    decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = "",
    v,
    len = romanArray.length;

    if (number <= 0 || number >= 4000) {
      return number;
    }

    for (v=0; v < len; v+=1) {
      while (number >= decimal[v]) {
        number -= decimal[v];
        roman += romanArray[v];
      }
    }

    return roman;
  };
})();
function h2cRenderContext(width, height) {
  var storage = [];
  return {
    storage: storage,
    width: width,
    height: height,
    clip: function() {
      storage.push({
        type: "function",
        name: "clip",
        'arguments': arguments
      });
    },
    translate: function() {
      storage.push({
        type: "function",
        name: "translate",
        'arguments': arguments
      });
    },
    fill: function() {
      storage.push({
        type: "function",
        name: "fill",
        'arguments': arguments
      });
    },
    save: function() {
      storage.push({
        type: "function",
        name: "save",
        'arguments': arguments
      });
    },
    restore: function() {
      storage.push({
        type: "function",
        name: "restore",
        'arguments': arguments
      });
    },
    fillRect: function () {
      storage.push({
        type: "function",
        name: "fillRect",
        'arguments': arguments
      });
    },
    createPattern: function() {
      storage.push({
        type: "function",
        name: "createPattern",
        'arguments': arguments
      });
    },
    drawShape: function() {

      var shape = [];

      storage.push({
        type: "function",
        name: "drawShape",
        'arguments': shape
      });

      return {
        moveTo: function() {
          shape.push({
            name: "moveTo",
            'arguments': arguments
          });
        },
        lineTo: function() {
          shape.push({
            name: "lineTo",
            'arguments': arguments
          });
        },
        arcTo: function() {
          shape.push({
            name: "arcTo",
            'arguments': arguments
          });
        },
        bezierCurveTo: function() {
          shape.push({
            name: "bezierCurveTo",
            'arguments': arguments
          });
        },
        quadraticCurveTo: function() {
          shape.push({
            name: "quadraticCurveTo",
            'arguments': arguments
          });
        }
      };

    },
    drawImage: function () {
      storage.push({
        type: "function",
        name: "drawImage",
        'arguments': arguments
      });
    },
    fillText: function () {
      storage.push({
        type: "function",
        name: "fillText",
        'arguments': arguments
      });
    },
    setVariable: function (variable, value) {
      storage.push({
        type: "variable",
        name: variable,
        'arguments': value
      });
      return value;
    }
  };
}
_html2canvas.Parse = function (images, options) {
  window.scroll(0,0);

  var element = (( options.elements === undefined ) ? document.body : options.elements[0]), // select body by default
  numDraws = 0,
  doc = element.ownerDocument,
  Util = _html2canvas.Util,
  support = Util.Support(options, doc),
  ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
  body = doc.body,
  getCSS = Util.getCSS,
  pseudoHide = "___html2canvas___pseudoelement",
  hidePseudoElements = doc.createElement('style');

  hidePseudoElements.innerHTML = '.' + pseudoHide + '-before:before { content: "" !important; display: none !important; }' +
  '.' + pseudoHide + '-after:after { content: "" !important; display: none !important; }';

  body.appendChild(hidePseudoElements);

  images = images || {};

  function documentWidth () {
    return Math.max(
      Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
      Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
      Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
      );
  }

  function documentHeight () {
    return Math.max(
      Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
      Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
      Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      );
  }

  function getCSSInt(element, attribute) {
    var val = parseInt(getCSS(element, attribute), 10);
    return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
  }

  function renderRect (ctx, x, y, w, h, bgcolor) {
    if (bgcolor !== "transparent"){
      ctx.setVariable("fillStyle", bgcolor);
      ctx.fillRect(x, y, w, h);
      numDraws+=1;
    }
  }

  function capitalize(m, p1, p2) {
    if (m.length > 0) {
      return p1 + p2.toUpperCase();
    }
  }

  function textTransform (text, transform) {
    switch(transform){
      case "lowercase":
        return text.toLowerCase();
      case "capitalize":
        return text.replace( /(^|\s|:|-|\(|\))([a-z])/g, capitalize);
      case "uppercase":
        return text.toUpperCase();
      default:
        return text;
    }
  }

  function noLetterSpacing(letter_spacing) {
    return (/^(normal|none|0px)$/.test(letter_spacing));
  }

  function drawText(currentText, x, y, ctx){
    if (currentText !== null && Util.trimText(currentText).length > 0) {
      ctx.fillText(currentText, x, y);
      numDraws+=1;
    }
  }

  function setTextVariables(ctx, el, text_decoration, color) {
    var align = false,
    bold = getCSS(el, "fontWeight"),
    family = getCSS(el, "fontFamily"),
    size = getCSS(el, "fontSize"),
    shadows = Util.parseTextShadows(getCSS(el, "textShadow"));

    switch(parseInt(bold, 10)){
      case 401:
        bold = "bold";
        break;
      case 400:
        bold = "normal";
        break;
    }

    ctx.setVariable("fillStyle", color);
    ctx.setVariable("font", [getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family].join(" "));
    ctx.setVariable("textAlign", (align) ? "right" : "left");

    if (shadows.length) {
      // TODO: support multiple text shadows
      // apply the first text shadow
      ctx.setVariable("shadowColor", shadows[0].color);
      ctx.setVariable("shadowOffsetX", shadows[0].offsetX);
      ctx.setVariable("shadowOffsetY", shadows[0].offsetY);
      ctx.setVariable("shadowBlur", shadows[0].blur);
    }

    if (text_decoration !== "none"){
      return Util.Font(family, size, doc);
    }
  }

  function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
    switch(text_decoration) {
      case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
        break;
      case "overline":
        renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
        break;
      case "line-through":
        // TODO try and find exact position for line-through
        renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
        break;
    }
  }

  function getTextBounds(state, text, textDecoration, isLast, transform) {
    var bounds;
    if (support.rangeBounds && !transform) {
      if (textDecoration !== "none" || Util.trimText(text).length !== 0) {
        bounds = textRangeBounds(text, state.node, state.textOffset);
      }
      state.textOffset += text.length;
    } else if (state.node && typeof state.node.nodeValue === "string" ){
      var newTextNode = (isLast) ? state.node.splitText(text.length) : null;
      bounds = textWrapperBounds(state.node, transform);
      state.node = newTextNode;
    }
    return bounds;
  }

  function textRangeBounds(text, textNode, textOffset) {
    var range = doc.createRange();
    range.setStart(textNode, textOffset);
    range.setEnd(textNode, textOffset + text.length);
    return range.getBoundingClientRect();
  }

  function textWrapperBounds(oldTextNode, transform) {
    var parent = oldTextNode.parentNode,
    wrapElement = doc.createElement('wrapper'),
    backupText = oldTextNode.cloneNode(true);

    wrapElement.appendChild(oldTextNode.cloneNode(true));
    parent.replaceChild(wrapElement, oldTextNode);

    var bounds = transform ? Util.OffsetBounds(wrapElement) : Util.Bounds(wrapElement);
    parent.replaceChild(backupText, wrapElement);
    return bounds;
  }

  function renderText(el, textNode, stack) {
    var ctx = stack.ctx,
    color = getCSS(el, "color"),
    textDecoration = getCSS(el, "textDecoration"),
    textAlign = getCSS(el, "textAlign"),
    metrics,
    textList,
    state = {
      node: textNode,
      textOffset: 0
    };

    if (Util.trimText(textNode.nodeValue).length > 0) {
      textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
      textAlign = textAlign.replace(["-webkit-auto"],["auto"]);

      textList = (!options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing"))) ?
      textNode.nodeValue.split(/(\b| )/)
      : textNode.nodeValue.split("");

      metrics = setTextVariables(ctx, el, textDecoration, color);

      if (options.chinese) {
        textList.forEach(function(word, index) {
          if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
            word = word.split("");
            word.unshift(index, 1);
            textList.splice.apply(textList, word);
          }
        });
      }

      textList.forEach(function(text, index) {
        var bounds = getTextBounds(state, text, textDecoration, (index < textList.length - 1), stack.transform.matrix);
        if (bounds) {
          drawText(text, bounds.left, bounds.bottom, ctx);
          renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
        }
      });
    }
  }

  function listPosition (element, val) {
    var boundElement = doc.createElement( "boundelement" ),
    originalType,
    bounds;

    boundElement.style.display = "inline";

    originalType = element.style.listStyleType;
    element.style.listStyleType = "none";

    boundElement.appendChild(doc.createTextNode(val));

    element.insertBefore(boundElement, element.firstChild);

    bounds = Util.Bounds(boundElement);
    element.removeChild(boundElement);
    element.style.listStyleType = originalType;
    return bounds;
  }

  function elementIndex(el) {
    var i = -1,
    count = 1,
    childs = el.parentNode.childNodes;

    if (el.parentNode) {
      while(childs[++i] !== el) {
        if (childs[i].nodeType === 1) {
          count++;
        }
      }
      return count;
    } else {
      return -1;
    }
  }

  function listItemText(element, type) {
    var currentIndex = elementIndex(element), text;
    switch(type){
      case "decimal":
        text = currentIndex;
        break;
      case "decimal-leading-zero":
        text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
        break;
      case "upper-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex );
        break;
      case "lower-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex ).toLowerCase();
        break;
      case "lower-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex ).toLowerCase();
        break;
      case "upper-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex );
        break;
    }

    return text + ". ";
  }

  function renderListItem(element, stack, elBounds) {
    var x,
    text,
    ctx = stack.ctx,
    type = getCSS(element, "listStyleType"),
    listBounds;

    if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
      text = listItemText(element, type);
      listBounds = listPosition(element, text);
      setTextVariables(ctx, element, "none", getCSS(element, "color"));

      if (getCSS(element, "listStylePosition") === "inside") {
        ctx.setVariable("textAlign", "left");
        x = elBounds.left;
      } else {
        return;
      }

      drawText(text, x, listBounds.bottom, ctx);
    }
  }

  function loadImage (src){
    var img = images[src];
    return (img && img.succeeded === true) ? img.img : false;
  }

  function clipBounds(src, dst){
    var x = Math.max(src.left, dst.left),
    y = Math.max(src.top, dst.top),
    x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
    y2 = Math.min((src.top + src.height), (dst.top + dst.height));

    return {
      left:x,
      top:y,
      width:x2-x,
      height:y2-y
    };
  }

  function setZ(element, stack, parentStack){
    var newContext,
    isPositioned = stack.cssPosition !== 'static',
    zIndex = isPositioned ? getCSS(element, 'zIndex') : 'auto',
    opacity = getCSS(element, 'opacity'),
    isFloated = getCSS(element, 'cssFloat') !== 'none';

    // https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
    // When a new stacking context should be created:
    // the root element (HTML),
    // positioned (absolutely or relatively) with a z-index value other than "auto",
    // elements with an opacity value less than 1. (See the specification for opacity),
    // on mobile WebKit and Chrome 22+, position: fixed always creates a new stacking context, even when z-index is "auto" (See this post)

    stack.zIndex = newContext = h2czContext(zIndex);
    newContext.isPositioned = isPositioned;
    newContext.isFloated = isFloated;
    newContext.opacity = opacity;
    newContext.ownStacking = (zIndex !== 'auto' || opacity < 1);

    if (parentStack) {
      parentStack.zIndex.children.push(stack);
    }
  }

  function renderImage(ctx, element, image, bounds, borders) {

    var paddingLeft = getCSSInt(element, 'paddingLeft'),
    paddingTop = getCSSInt(element, 'paddingTop'),
    paddingRight = getCSSInt(element, 'paddingRight'),
    paddingBottom = getCSSInt(element, 'paddingBottom');

    drawImage(
      ctx,
      image,
      0, //sx
      0, //sy
      image.width, //sw
      image.height, //sh
      bounds.left + paddingLeft + borders[3].width, //dx
      bounds.top + paddingTop + borders[0].width, // dy
      bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
      bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
      );
  }

  function getBorderData(element) {
    return ["Top", "Right", "Bottom", "Left"].map(function(side) {
      return {
        width: getCSSInt(element, 'border' + side + 'Width'),
        color: getCSS(element, 'border' + side + 'Color')
      };
    });
  }

  function getBorderRadiusData(element) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
      return getCSS(element, 'border' + side + 'Radius');
    });
  }

  var getCurvePoints = (function(kappa) {

    return function(x, y, r1, r2) {
      var ox = (r1) * kappa, // control point offset horizontal
      oy = (r2) * kappa, // control point offset vertical
      xm = x + r1, // x-middle
      ym = y + r2; // y-middle
      return {
        topLeft: bezierCurve({
          x:x,
          y:ym
        }, {
          x:x,
          y:ym - oy
        }, {
          x:xm - ox,
          y:y
        }, {
          x:xm,
          y:y
        }),
        topRight: bezierCurve({
          x:x,
          y:y
        }, {
          x:x + ox,
          y:y
        }, {
          x:xm,
          y:ym - oy
        }, {
          x:xm,
          y:ym
        }),
        bottomRight: bezierCurve({
          x:xm,
          y:y
        }, {
          x:xm,
          y:y + oy
        }, {
          x:x + ox,
          y:ym
        }, {
          x:x,
          y:ym
        }),
        bottomLeft: bezierCurve({
          x:xm,
          y:ym
        }, {
          x:xm - ox,
          y:ym
        }, {
          x:x,
          y:y + oy
        }, {
          x:x,
          y:y
        })
      };
    };
  })(4 * ((Math.sqrt(2) - 1) / 3));

  function bezierCurve(start, startControl, endControl, end) {

    var lerp = function (a, b, t) {
      return {
        x:a.x + (b.x - a.x) * t,
        y:a.y + (b.y - a.y) * t
      };
    };

    return {
      start: start,
      startControl: startControl,
      endControl: endControl,
      end: end,
      subdivide: function(t) {
        var ab = lerp(start, startControl, t),
        bc = lerp(startControl, endControl, t),
        cd = lerp(endControl, end, t),
        abbc = lerp(ab, bc, t),
        bccd = lerp(bc, cd, t),
        dest = lerp(abbc, bccd, t);
        return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
      },
      curveTo: function(borderArgs) {
        borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
      },
      curveToReversed: function(borderArgs) {
        borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
      }
    };
  }

  function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
      corner1[0].curveTo(borderArgs);
      corner1[1].curveTo(borderArgs);
    } else {
      borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
  }

  function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
      outer1[1].curveTo(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
      outer2[0].curveTo(borderArgs);
      borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
      inner2[0].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c2[0], borderData.c2[1]]);
      borderArgs.push([ "line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
      inner1[1].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
  }

  function calculateCurvePoints(bounds, borderRadius, borders) {

    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,

    tlh = borderRadius[0][0],
    tlv = borderRadius[0][1],
    trh = borderRadius[1][0],
    trv = borderRadius[1][1],
    brh = borderRadius[2][0],
    brv = borderRadius[2][1],
    blh = borderRadius[3][0],
    blv = borderRadius[3][1],

    topWidth = width - trh,
    rightHeight = height - brv,
    bottomWidth = width - brh,
    leftHeight = height - blv;

    return {
      topLeftOuter: getCurvePoints(
        x,
        y,
        tlh,
        tlv
        ).topLeft.subdivide(0.5),

      topLeftInner: getCurvePoints(
        x + borders[3].width,
        y + borders[0].width,
        Math.max(0, tlh - borders[3].width),
        Math.max(0, tlv - borders[0].width)
        ).topLeft.subdivide(0.5),

      topRightOuter: getCurvePoints(
        x + topWidth,
        y,
        trh,
        trv
        ).topRight.subdivide(0.5),

      topRightInner: getCurvePoints(
        x + Math.min(topWidth, width + borders[3].width),
        y + borders[0].width,
        (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width,
        trv - borders[0].width
        ).topRight.subdivide(0.5),

      bottomRightOuter: getCurvePoints(
        x + bottomWidth,
        y + rightHeight,
        brh,
        brv
        ).bottomRight.subdivide(0.5),

      bottomRightInner: getCurvePoints(
        x + Math.min(bottomWidth, width + borders[3].width),
        y + Math.min(rightHeight, height + borders[0].width),
        Math.max(0, brh - borders[1].width),
        Math.max(0, brv - borders[2].width)
        ).bottomRight.subdivide(0.5),

      bottomLeftOuter: getCurvePoints(
        x,
        y + leftHeight,
        blh,
        blv
        ).bottomLeft.subdivide(0.5),

      bottomLeftInner: getCurvePoints(
        x + borders[3].width,
        y + leftHeight,
        Math.max(0, blh - borders[3].width),
        Math.max(0, blv - borders[2].width)
        ).bottomLeft.subdivide(0.5)
    };
  }

  function getBorderClip(element, borderPoints, borders, radius, bounds) {
    var backgroundClip = getCSS(element, 'backgroundClip'),
    borderArgs = [];

    switch(backgroundClip) {
      case "content-box":
      case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

      default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
  }

  function parseBorders(element, bounds, borders){
    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,
    borderSide,
    bx,
    by,
    bw,
    bh,
    borderArgs,
    // http://www.w3.org/TR/css3-background/#the-border-radius
    borderRadius = getBorderRadiusData(element),
    borderPoints = calculateCurvePoints(bounds, borderRadius, borders),
    borderData = {
      clip: getBorderClip(element, borderPoints, borders, borderRadius, bounds),
      borders: []
    };

    for (borderSide = 0; borderSide < 4; borderSide++) {

      if (borders[borderSide].width > 0) {
        bx = x;
        by = y;
        bw = width;
        bh = height - (borders[2].width);

        switch(borderSide) {
          case 0:
            // top border
            bh = borders[0].width;

            borderArgs = drawSide({
              c1: [bx, by],
              c2: [bx + bw, by],
              c3: [bx + bw - borders[1].width, by + bh],
              c4: [bx + borders[3].width, by + bh]
            }, borderRadius[0], borderRadius[1],
            borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
            break;
          case 1:
            // right border
            bx = x + width - (borders[1].width);
            bw = borders[1].width;

            borderArgs = drawSide({
              c1: [bx + bw, by],
              c2: [bx + bw, by + bh + borders[2].width],
              c3: [bx, by + bh],
              c4: [bx, by + borders[0].width]
            }, borderRadius[1], borderRadius[2],
            borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
            break;
          case 2:
            // bottom border
            by = (by + height) - (borders[2].width);
            bh = borders[2].width;

            borderArgs = drawSide({
              c1: [bx + bw, by + bh],
              c2: [bx, by + bh],
              c3: [bx + borders[3].width, by],
              c4: [bx + bw - borders[3].width, by]
            }, borderRadius[2], borderRadius[3],
            borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
            break;
          case 3:
            // left border
            bw = borders[3].width;

            borderArgs = drawSide({
              c1: [bx, by + bh + borders[2].width],
              c2: [bx, by],
              c3: [bx + bw, by + borders[0].width],
              c4: [bx + bw, by + bh]
            }, borderRadius[3], borderRadius[0],
            borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
            break;
        }

        borderData.borders.push({
          args: borderArgs,
          color: borders[borderSide].color
        });

      }
    }

    return borderData;
  }

  function createShape(ctx, args) {
    var shape = ctx.drawShape();
    args.forEach(function(border, index) {
      shape[(index === 0) ? "moveTo" : border[0] + "To" ].apply(null, border.slice(1));
    });
    return shape;
  }

  function renderBorders(ctx, borderArgs, color) {
    if (color !== "transparent") {
      ctx.setVariable( "fillStyle", color);
      createShape(ctx, borderArgs);
      ctx.fill();
      numDraws+=1;
    }
  }

  function renderFormValue (el, bounds, stack){

    var valueWrap = doc.createElement('valuewrap'),
    cssPropertyArray = ['lineHeight','textAlign','fontFamily','color','fontSize','paddingLeft','paddingTop','width','height','border','borderLeftWidth','borderTopWidth'],
    textValue,
    textNode;

    cssPropertyArray.forEach(function(property) {
      try {
        valueWrap.style[property] = getCSS(el, property);
      } catch(e) {
        // Older IE has issues with "border"
        Util.log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
      }
    });

    valueWrap.style.borderColor = "black";
    valueWrap.style.borderStyle = "solid";
    valueWrap.style.display = "block";
    valueWrap.style.position = "absolute";

    if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT"){
      valueWrap.style.lineHeight = getCSS(el, "height");
    }

    valueWrap.style.top = bounds.top + "px";
    valueWrap.style.left = bounds.left + "px";

    textValue = (el.nodeName === "SELECT") ? (el.options[el.selectedIndex] || 0).text : el.value;
    if(!textValue) {
      textValue = el.placeholder;
    }

    textNode = doc.createTextNode(textValue);

    valueWrap.appendChild(textNode);
    body.appendChild(valueWrap);

    renderText(el, textNode, stack);
    body.removeChild(valueWrap);
  }

  function drawImage (ctx) {
    ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
    numDraws+=1;
  }

  function getPseudoElement(el, which) {
    var elStyle = window.getComputedStyle(el, which);
    if(!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content" || elStyle.display === "none") {
      return;
    }
    var content = elStyle.content + '',
    first = content.substr( 0, 1 );
    //strips quotes
    if(first === content.substr( content.length - 1 ) && first.match(/'|"/)) {
      content = content.substr( 1, content.length - 2 );
    }

    var isImage = content.substr( 0, 3 ) === 'url',
    elps = document.createElement( isImage ? 'img' : 'span' );

    elps.className = pseudoHide + "-before " + pseudoHide + "-after";

    Object.keys(elStyle).filter(indexedProperty).forEach(function(prop) {
      // Prevent assigning of read only CSS Rules, ex. length, parentRule
      try {
        elps.style[prop] = elStyle[prop];
      } catch (e) {
        Util.log(['Tried to assign readonly property ', prop, 'Error:', e]);
      }
    });

    if(isImage) {
      elps.src = Util.parseBackgroundImage(content)[0].args[0];
    } else {
      elps.innerHTML = content;
    }
    return elps;
  }

  function indexedProperty(property) {
    return (isNaN(window.parseInt(property, 10)));
  }

  function injectPseudoElements(el, stack) {
    var before = getPseudoElement(el, ':before'),
    after = getPseudoElement(el, ':after');
    if(!before && !after) {
      return;
    }

    if(before) {
      el.className += " " + pseudoHide + "-before";
      el.parentNode.insertBefore(before, el);
      parseElement(before, stack, true);
      el.parentNode.removeChild(before);
      el.className = el.className.replace(pseudoHide + "-before", "").trim();
    }

    if (after) {
      el.className += " " + pseudoHide + "-after";
      el.appendChild(after);
      parseElement(after, stack, true);
      el.removeChild(after);
      el.className = el.className.replace(pseudoHide + "-after", "").trim();
    }

  }

  function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left),
    offsetY = Math.round(bounds.top + backgroundPosition.top);

    ctx.createPattern(image);
    ctx.translate(offsetX, offsetY);
    ctx.fill();
    ctx.translate(-offsetX, -offsetY);
  }

  function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
    var args = [];
    args.push(["line", Math.round(left), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(height + top)]);
    args.push(["line", Math.round(left), Math.round(height + top)]);
    createShape(ctx, args);
    ctx.save();
    ctx.clip();
    renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
    ctx.restore();
  }

  function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
    renderRect(
      ctx,
      backgroundBounds.left,
      backgroundBounds.top,
      backgroundBounds.width,
      backgroundBounds.height,
      bgcolor
      );
  }

  function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
    var backgroundSize = Util.BackgroundSize(el, bounds, image, imageIndex),
    backgroundPosition = Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize),
    backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(Util.trimText);

    image = resizeImage(image, backgroundSize);

    backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];

    switch (backgroundRepeat) {
      case "repeat-x":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
        break;

      case "repeat-y":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
        break;

      case "no-repeat":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
        break;

      default:
        renderBackgroundRepeat(ctx, image, backgroundPosition, {
          top: bounds.top,
          left: bounds.left,
          width: image.width,
          height: image.height
        });
        break;
    }
  }

  function renderBackgroundImage(element, bounds, ctx) {
    var backgroundImage = getCSS(element, "backgroundImage"),
    backgroundImages = Util.parseBackgroundImage(backgroundImage),
    image,
    imageIndex = backgroundImages.length;

    while(imageIndex--) {
      backgroundImage = backgroundImages[imageIndex];

      if (!backgroundImage.args || backgroundImage.args.length === 0) {
        continue;
      }

      var key = backgroundImage.method === 'url' ?
      backgroundImage.args[0] :
      backgroundImage.value;

      image = loadImage(key);

      // TODO add support for background-origin
      if (image) {
        renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
      } else {
        Util.log("html2canvas: Error loading background:", backgroundImage);
      }
    }
  }

  function resizeImage(image, bounds) {
    if(image.width === bounds.width && image.height === bounds.height) {
      return image;
    }

    var ctx, canvas = doc.createElement('canvas');
    canvas.width = bounds.width;
    canvas.height = bounds.height;
    ctx = canvas.getContext("2d");
    drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height );
    return canvas;
  }

  function setOpacity(ctx, element, parentStack) {
    return ctx.setVariable("globalAlpha", getCSS(element, "opacity") * ((parentStack) ? parentStack.opacity : 1));
  }

  function removePx(str) {
    return str.replace("px", "");
  }

  var transformRegExp = /(matrix)\((.+)\)/;

  function getTransform(element, parentStack) {
    var transform = getCSS(element, "transform") || getCSS(element, "-webkit-transform") || getCSS(element, "-moz-transform") || getCSS(element, "-ms-transform") || getCSS(element, "-o-transform");
    var transformOrigin = getCSS(element, "transform-origin") || getCSS(element, "-webkit-transform-origin") || getCSS(element, "-moz-transform-origin") || getCSS(element, "-ms-transform-origin") || getCSS(element, "-o-transform-origin") || "0px 0px";

    transformOrigin = transformOrigin.split(" ").map(removePx).map(Util.asFloat);

    var matrix;
    if (transform && transform !== "none") {
      var match = transform.match(transformRegExp);
      if (match) {
        switch(match[1]) {
          case "matrix":
            matrix = match[2].split(",").map(Util.trimText).map(Util.asFloat);
            break;
        }
      }
    }

    return {
      origin: transformOrigin,
      matrix: matrix
    };
  }

  function createStack(element, parentStack, bounds, transform) {
    var ctx = h2cRenderContext((!parentStack) ? documentWidth() : bounds.width , (!parentStack) ? documentHeight() : bounds.height),
    stack = {
      ctx: ctx,
      opacity: setOpacity(ctx, element, parentStack),
      cssPosition: getCSS(element, "position"),
      borders: getBorderData(element),
      transform: transform,
      clip: (parentStack && parentStack.clip) ? Util.Extend( {}, parentStack.clip ) : null
    };

    setZ(element, stack, parentStack);

    // TODO correct overflow for absolute content residing under a static position
    if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false){
      stack.clip = (stack.clip) ? clipBounds(stack.clip, bounds) : bounds;
    }

    return stack;
  }

  function getBackgroundBounds(borders, bounds, clip) {
    var backgroundBounds = {
      left: bounds.left + borders[3].width,
      top: bounds.top + borders[0].width,
      width: bounds.width - (borders[1].width + borders[3].width),
      height: bounds.height - (borders[0].width + borders[2].width)
    };

    if (clip) {
      backgroundBounds = clipBounds(backgroundBounds, clip);
    }

    return backgroundBounds;
  }

  function getBounds(element, transform) {
    var bounds = (transform.matrix) ? Util.OffsetBounds(element) : Util.Bounds(element);
    transform.origin[0] += bounds.left;
    transform.origin[1] += bounds.top;
    return bounds;
  }

  function renderElement(element, parentStack, pseudoElement, ignoreBackground) {
    var transform = getTransform(element, parentStack),
    bounds = getBounds(element, transform),
    image,
    stack = createStack(element, parentStack, bounds, transform),
    borders = stack.borders,
    ctx = stack.ctx,
    backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip),
    borderData = parseBorders(element, bounds, borders),
    backgroundColor = (ignoreElementsRegExp.test(element.nodeName)) ? "#efefef" : getCSS(element, "backgroundColor");


    createShape(ctx, borderData.clip);

    ctx.save();
    ctx.clip();

    if (backgroundBounds.height > 0 && backgroundBounds.width > 0 && !ignoreBackground) {
      renderBackgroundColor(ctx, bounds, backgroundColor);
      renderBackgroundImage(element, backgroundBounds, ctx);
    } else if (ignoreBackground) {
      stack.backgroundColor =  backgroundColor;
    }

    ctx.restore();

    borderData.borders.forEach(function(border) {
      renderBorders(ctx, border.args, border.color);
    });

    if (!pseudoElement) {
      injectPseudoElements(element, stack);
    }

    switch(element.nodeName){
      case "IMG":
        if ((image = loadImage(element.getAttribute('src')))) {
          renderImage(ctx, element, image, bounds, borders);
        } else {
          Util.log("html2canvas: Error loading <img>:" + element.getAttribute('src'));
        }
        break;
      case "INPUT":
        // TODO add all relevant type's, i.e. HTML5 new stuff
        // todo add support for placeholder attribute for browsers which support it
        if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "TEXTAREA":
        if ((element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "SELECT":
        if ((element.options||element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "LI":
        renderListItem(element, stack, backgroundBounds);
        break;
      case "CANVAS":
        renderImage(ctx, element, element, bounds, borders);
        break;
    }

    return stack;
  }

  function isElementVisible(element) {
    return (getCSS(element, 'display') !== "none" && getCSS(element, 'visibility') !== "hidden" && !element.hasAttribute("data-html2canvas-ignore"));
  }

  function parseElement (element, stack, pseudoElement) {
    if (isElementVisible(element)) {
      stack = renderElement(element, stack, pseudoElement, false) || stack;
      if (!ignoreElementsRegExp.test(element.nodeName)) {
        parseChildren(element, stack, pseudoElement);
      }
    }
  }

  function parseChildren(element, stack, pseudoElement) {
    Util.Children(element).forEach(function(node) {
      if (node.nodeType === node.ELEMENT_NODE) {
        parseElement(node, stack, pseudoElement);
      } else if (node.nodeType === node.TEXT_NODE) {
        renderText(element, node, stack);
      }
    });
  }

  function init() {
    var background = getCSS(document.documentElement, "backgroundColor"),
      transparentBackground = (Util.isTransparent(background) && element === document.body),
      stack = renderElement(element, null, false, transparentBackground);
    parseChildren(element, stack);

    if (transparentBackground) {
      background = stack.backgroundColor;
    }

    body.removeChild(hidePseudoElements);
    return {
      backgroundColor: background,
      stack: stack
    };
  }

  return init();
};

function h2czContext(zindex) {
  return {
    zindex: zindex,
    children: []
  };
}

_html2canvas.Preload = function( options ) {

  var images = {
    numLoaded: 0,   // also failed are counted here
    numFailed: 0,
    numTotal: 0,
    cleanupDone: false
  },
  pageOrigin,
  Util = _html2canvas.Util,
  methods,
  i,
  count = 0,
  element = options.elements[0] || document.body,
  doc = element.ownerDocument,
  domImages = element.getElementsByTagName('img'), // Fetch images of the present element only
  imgLen = domImages.length,
  link = doc.createElement("a"),
  supportCORS = (function( img ){
    return (img.crossOrigin !== undefined);
  })(new Image()),
  timeoutTimer;

  link.href = window.location.href;
  pageOrigin  = link.protocol + link.host;

  function isSameOrigin(url){
    link.href = url;
    link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
    var origin = link.protocol + link.host;
    return (origin === pageOrigin);
  }

  function start(){
    Util.log("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
    if (!images.firstRun && images.numLoaded >= images.numTotal){
      Util.log("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

      if (typeof options.complete === "function"){
        options.complete(images);
      }

    }
  }

  // TODO modify proxy to serve images with CORS enabled, where available
  function proxyGetImage(url, img, imageObj){
    var callback_name,
    scriptUrl = options.proxy,
    script;

    link.href = url;
    url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

    callback_name = 'html2canvas_' + (count++);
    imageObj.callbackname = callback_name;

    if (scriptUrl.indexOf("?") > -1) {
      scriptUrl += "&";
    } else {
      scriptUrl += "?";
    }
    scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
    script = doc.createElement("script");

    window[callback_name] = function(a){
      if (a.substring(0,6) === "error:"){
        imageObj.succeeded = false;
        images.numLoaded++;
        images.numFailed++;
        start();
      } else {
        setImageLoadHandlers(img, imageObj);
        img.src = a;
      }
      window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
      try {
        delete window[callback_name];  // for all browser that support this
      } catch(ex) {}
      script.parentNode.removeChild(script);
      script = null;
      delete imageObj.script;
      delete imageObj.callbackname;
    };

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    imageObj.script = script;
    window.document.body.appendChild(script);

  }

  function loadPseudoElement(element, type) {
    var style = window.getComputedStyle(element, type),
    content = style.content;
    if (content.substr(0, 3) === 'url') {
      methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
    }
    loadBackgroundImages(style.backgroundImage, element);
  }

  function loadPseudoElementImages(element) {
    loadPseudoElement(element, ":before");
    loadPseudoElement(element, ":after");
  }

  function loadGradientImage(backgroundImage, bounds) {
    var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);

    if (img !== undefined){
      images[backgroundImage] = {
        img: img,
        succeeded: true
      };
      images.numTotal++;
      images.numLoaded++;
      start();
    }
  }

  function invalidBackgrounds(background_image) {
    return (background_image && background_image.method && background_image.args && background_image.args.length > 0 );
  }

  function loadBackgroundImages(background_image, el) {
    var bounds;

    _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function(background_image) {
      if (background_image.method === 'url') {
        methods.loadImage(background_image.args[0]);
      } else if(background_image.method.match(/\-?gradient$/)) {
        if(bounds === undefined) {
          bounds = _html2canvas.Util.Bounds(el);
        }
        loadGradientImage(background_image.value, bounds);
      }
    });
  }

  function getImages (el) {
    var elNodeType = false;

    // Firefox fails with permission denied on pages with iframes
    try {
      Util.Children(el).forEach(getImages);
    }
    catch( e ) {}

    try {
      elNodeType = el.nodeType;
    } catch (ex) {
      elNodeType = false;
      Util.log("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
    }

    if (elNodeType === 1 || elNodeType === undefined) {
      loadPseudoElementImages(el);
      try {
        loadBackgroundImages(Util.getCSS(el, 'backgroundImage'), el);
      } catch(e) {
        Util.log("html2canvas: failed to get background-image - Exception: " + e.message);
      }
      loadBackgroundImages(el);
    }
  }

  function setImageLoadHandlers(img, imageObj) {
    img.onload = function() {
      if ( imageObj.timer !== undefined ) {
        // CORS succeeded
        window.clearTimeout( imageObj.timer );
      }

      images.numLoaded++;
      imageObj.succeeded = true;
      img.onerror = img.onload = null;
      start();
    };
    img.onerror = function() {
      if (img.crossOrigin === "anonymous") {
        // CORS failed
        window.clearTimeout( imageObj.timer );

        // let's try with proxy instead
        if ( options.proxy ) {
          var src = img.src;
          img = new Image();
          imageObj.img = img;
          img.src = src;

          proxyGetImage( img.src, img, imageObj );
          return;
        }
      }

      images.numLoaded++;
      images.numFailed++;
      imageObj.succeeded = false;
      img.onerror = img.onload = null;
      start();
    };
  }

  methods = {
    loadImage: function( src ) {
      var img, imageObj;
      if ( src && images[src] === undefined ) {
        img = new Image();
        if ( src.match(/data:image\/.*;base64,/i) ) {
          img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
        } else if ( isSameOrigin( src ) || options.allowTaint ===  true ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( supportCORS && !options.allowTaint && options.useCORS ) {
          // attempt to load with CORS

          img.crossOrigin = "anonymous";
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( options.proxy ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          proxyGetImage( src, img, imageObj );
        }
      }

    },
    cleanupDOM: function(cause) {
      var img, src;
      if (!images.cleanupDone) {
        if (cause && typeof cause === "string") {
          Util.log("html2canvas: Cleanup because: " + cause);
        } else {
          Util.log("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
        }

        for (src in images) {
          if (images.hasOwnProperty(src)) {
            img = images[src];
            if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
              // cancel proxy image request
              window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
              try {
                delete window[img.callbackname];  // for all browser that support this
              } catch(ex) {}
              if (img.script && img.script.parentNode) {
                img.script.setAttribute("src", "about:blank");  // try to cancel running request
                img.script.parentNode.removeChild(img.script);
              }
              images.numLoaded++;
              images.numFailed++;
              Util.log("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
            }
          }
        }

        // cancel any pending requests
        if(window.stop !== undefined) {
          window.stop();
        } else if(document.execCommand !== undefined) {
          document.execCommand("Stop", false);
        }
        if (document.close !== undefined) {
          document.close();
        }
        images.cleanupDone = true;
        if (!(cause && typeof cause === "string")) {
          start();
        }
      }
    },

    renderingDone: function() {
      if (timeoutTimer) {
        window.clearTimeout(timeoutTimer);
      }
    }
  };

  if (options.timeout > 0) {
    timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
  }

  Util.log('html2canvas: Preload starts: finding background-images');
  images.firstRun = true;

  getImages(element);

  Util.log('html2canvas: Preload: Finding images');
  // load <img> images
  for (i = 0; i < imgLen; i+=1){
    methods.loadImage( domImages[i].getAttribute( "src" ) );
  }

  images.firstRun = false;
  Util.log('html2canvas: Preload: Done.');
  if (images.numTotal === images.numLoaded) {
    start();
  }

  return methods;
};

_html2canvas.Renderer = function(parseQueue, options){

  // http://www.w3.org/TR/CSS21/zindex.html
  function createRenderQueue(parseQueue) {
    var queue = [],
    rootContext;

    rootContext = (function buildStackingContext(rootNode) {
      var rootContext = {};
      function insert(context, node, specialParent) {
        var zi = (node.zIndex.zindex === 'auto') ? 0 : Number(node.zIndex.zindex),
        contextForChildren = context, // the stacking context for children
        isPositioned = node.zIndex.isPositioned,
        isFloated = node.zIndex.isFloated,
        stub = {node: node},
        childrenDest = specialParent; // where children without z-index should be pushed into

        if (node.zIndex.ownStacking) {
          // '!' comes before numbers in sorted array
          contextForChildren = stub.context = { '!': [{node:node, children: []}]};
          childrenDest = undefined;
        } else if (isPositioned || isFloated) {
          childrenDest = stub.children = [];
        }

        if (zi === 0 && specialParent) {
          specialParent.push(stub);
        } else {
          if (!context[zi]) { context[zi] = []; }
          context[zi].push(stub);
        }

        node.zIndex.children.forEach(function(childNode) {
          insert(contextForChildren, childNode, childrenDest);
        });
      }
      insert(rootContext, rootNode);
      return rootContext;
    })(parseQueue);

    function sortZ(context) {
      Object.keys(context).sort().forEach(function(zi) {
        var nonPositioned = [],
        floated = [],
        positioned = [],
        list = [];

        // positioned after static
        context[zi].forEach(function(v) {
          if (v.node.zIndex.isPositioned || v.node.zIndex.opacity < 1) {
            // http://www.w3.org/TR/css3-color/#transparency
            // non-positioned element with opactiy < 1 should be stacked as if it were a positioned element with ‘z-index: 0’ and ‘opacity: 1’.
            positioned.push(v);
          } else if (v.node.zIndex.isFloated) {
            floated.push(v);
          } else {
            nonPositioned.push(v);
          }
        });

        (function walk(arr) {
          arr.forEach(function(v) {
            list.push(v);
            if (v.children) { walk(v.children); }
          });
        })(nonPositioned.concat(floated, positioned));

        list.forEach(function(v) {
          if (v.context) {
            sortZ(v.context);
          } else {
            queue.push(v.node);
          }
        });
      });
    }

    sortZ(rootContext);

    return queue;
  }

  function getRenderer(rendererName) {
    var renderer;

    if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
      renderer = _html2canvas.Renderer[rendererName](options);
    } else if (typeof rendererName === "function") {
      renderer = rendererName(options);
    } else {
      throw new Error("Unknown renderer");
    }

    if ( typeof renderer !== "function" ) {
      throw new Error("Invalid renderer defined");
    }
    return renderer;
  }

  return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue.stack), _html2canvas);
};

_html2canvas.Util.Support = function (options, doc) {

  function supportSVGRendering() {
    var img = new Image(),
    canvas = doc.createElement("canvas"),
    ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
    if (ctx === false) {
      return false;
    }
    canvas.width = canvas.height = 10;
    img.src = [
    "data:image/svg+xml,",
    "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
    "<foreignObject width='10' height='10'>",
    "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
    "sup",
    "</div>",
    "</foreignObject>",
    "</svg>"
    ].join("");
    try {
      ctx.drawImage(img, 0, 0);
      canvas.toDataURL();
    } catch(e) {
      return false;
    }
    _html2canvas.Util.log('html2canvas: Parse: SVG powered rendering available');
    return true;
  }

  // Test whether we can use ranges to measure bounding boxes
  // Opera doesn't provide valid bounds.height/bottom even though it supports the method.

  function supportRangeBounds() {
    var r, testElement, rangeBounds, rangeHeight, support = false;

    if (doc.createRange) {
      r = doc.createRange();
      if (r.getBoundingClientRect) {
        testElement = doc.createElement('boundtest');
        testElement.style.height = "123px";
        testElement.style.display = "block";
        doc.body.appendChild(testElement);

        r.selectNode(testElement);
        rangeBounds = r.getBoundingClientRect();
        rangeHeight = rangeBounds.height;

        if (rangeHeight === 123) {
          support = true;
        }
        doc.body.removeChild(testElement);
      }
    }

    return support;
  }

  return {
    rangeBounds: supportRangeBounds(),
    svgRendering: options.svgRendering && supportSVGRendering()
  };
};
window.html2canvas = function(elements, opts) {
  elements = (elements.length) ? elements : [elements];
  var queue,
  canvas,
  options = {
    // general
    logging: false,
    elements: elements,
    background: "#fff",

    // preload options
    proxy: null,
    timeout: 0,    // no timeout
    useCORS: false, // try to load images as CORS (where available), before falling back to proxy
    allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

    // parse options
    svgRendering: false, // use svg powered rendering where available (FF11+)
    ignoreElements: "IFRAME|OBJECT|PARAM",
    useOverflow: true,
    letterRendering: false,
    chinese: false,

    // render options

    width: null,
    height: null,
    taintTest: true, // do a taint test with all images before applying to canvas
    renderer: "Canvas"
  };

  options = _html2canvas.Util.Extend(opts, options);

  _html2canvas.logging = options.logging;
  options.complete = function( images ) {

    if (typeof options.onpreloaded === "function") {
      if ( options.onpreloaded( images ) === false ) {
        return;
      }
    }
    queue = _html2canvas.Parse( images, options );

    if (typeof options.onparsed === "function") {
      if ( options.onparsed( queue ) === false ) {
        return;
      }
    }

    canvas = _html2canvas.Renderer( queue, options );

    if (typeof options.onrendered === "function") {
      options.onrendered( canvas );
    }


  };

  // for pages without images, we still want this to be async, i.e. return methods before executing
  window.setTimeout( function(){
    _html2canvas.Preload( options );
  }, 0 );

  return {
    render: function( queue, opts ) {
      return _html2canvas.Renderer( queue, _html2canvas.Util.Extend(opts, options) );
    },
    parse: function( images, opts ) {
      return _html2canvas.Parse( images, _html2canvas.Util.Extend(opts, options) );
    },
    preload: function( opts ) {
      return _html2canvas.Preload( _html2canvas.Util.Extend(opts, options) );
    },
    log: _html2canvas.Util.log
  };
};

window.html2canvas.log = _html2canvas.Util.log; // for renderers
window.html2canvas.Renderer = {
  Canvas: undefined // We are assuming this will be used
};
_html2canvas.Renderer.Canvas = function(options) {
  options = options || {};

  var doc = document,
  safeImages = [],
  testCanvas = document.createElement("canvas"),
  testctx = testCanvas.getContext("2d"),
  Util = _html2canvas.Util,
  canvas = options.canvas || doc.createElement('canvas');

  function createShape(ctx, args) {
    ctx.beginPath();
    args.forEach(function(arg) {
      ctx[arg.name].apply(ctx, arg['arguments']);
    });
    ctx.closePath();
  }

  function safeImage(item) {
    if (safeImages.indexOf(item['arguments'][0].src ) === -1) {
      testctx.drawImage(item['arguments'][0], 0, 0);
      try {
        testctx.getImageData(0, 0, 1, 1);
      } catch(e) {
        testCanvas = doc.createElement("canvas");
        testctx = testCanvas.getContext("2d");
        return false;
      }
      safeImages.push(item['arguments'][0].src);
    }
    return true;
  }

  function renderItem(ctx, item) {
    switch(item.type){
      case "variable":
        ctx[item.name] = item['arguments'];
        break;
      case "function":
        switch(item.name) {
          case "createPattern":
            if (item['arguments'][0].width > 0 && item['arguments'][0].height > 0) {
              try {
                ctx.fillStyle = ctx.createPattern(item['arguments'][0], "repeat");
              }
              catch(e) {
                Util.log("html2canvas: Renderer: Error creating pattern", e.message);
              }
            }
            break;
          case "drawShape":
            createShape(ctx, item['arguments']);
            break;
          case "drawImage":
            if (item['arguments'][8] > 0 && item['arguments'][7] > 0) {
              if (!options.taintTest || (options.taintTest && safeImage(item))) {
                ctx.drawImage.apply( ctx, item['arguments'] );
              }
            }
            break;
          default:
            ctx[item.name].apply(ctx, item['arguments']);
        }
        break;
    }
  }

  return function(parsedData, options, document, queue, _html2canvas) {
    var ctx = canvas.getContext("2d"),
    newCanvas,
    bounds,
    fstyle,
    zStack = parsedData.stack;

    canvas.width = canvas.style.width =  options.width || zStack.ctx.width;
    canvas.height = canvas.style.height = options.height || zStack.ctx.height;

    fstyle = ctx.fillStyle;
    ctx.fillStyle = (Util.isTransparent(zStack.backgroundColor) && options.background !== undefined) ? options.background : parsedData.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fstyle;

    queue.forEach(function(storageContext) {
      // set common settings for canvas
      ctx.textBaseline = "bottom";
      ctx.save();

      if (storageContext.transform.matrix) {
        ctx.translate(storageContext.transform.origin[0], storageContext.transform.origin[1]);
        ctx.transform.apply(ctx, storageContext.transform.matrix);
        ctx.translate(-storageContext.transform.origin[0], -storageContext.transform.origin[1]);
      }

      if (storageContext.clip){
        ctx.beginPath();
        ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
        ctx.clip();
      }

      if (storageContext.ctx.storage) {
        storageContext.ctx.storage.forEach(function(item) {
          renderItem(ctx, item);
        });
      }

      ctx.restore();
    });

    Util.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

    if (options.elements.length === 1) {
      if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
        // crop image to the bounds of selected (single) element
        bounds = _html2canvas.Util.Bounds(options.elements[0]);
        newCanvas = document.createElement('canvas');
        newCanvas.width = Math.ceil(bounds.width);
        newCanvas.height = Math.ceil(bounds.height);
        ctx = newCanvas.getContext("2d");

        ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
        canvas = null;
        return newCanvas;
      }
    }

    return canvas;
  };
};
})(window,document);
/*

jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser, jQuery
Copyright (c) 2012 2012 Willow Systems Corporation, willow-systems.com
 jsPDF 0.9.0rc1 ( 2013-04-07T16:52 commit ID d95d8f69915bb999f6704e8021108e2e755bd868 )
Copyright (c) 2010-2012 James Hall, james@snapshotmedia.co.uk, https://github.com/MrRio/jsPDF
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.

            -----------------------------------------------------------------------------------------------
            JavaScript PubSub library
            2012 (c) ddotsenko@willowsystems.com
            based on Peter Higgins (dante@dojotoolkit.org)
            Loosely based on Dojo publish/subscribe API, limited in scope. Rewritten blindly.
            Original is (c) Dojo Foundation 2004-2010. Released under either AFL or new BSD, see:
            http://dojofoundation.org/license for more information.
            -----------------------------------------------------------------------------------------------
 
jsPDF addImage plugin (JPEG only at this time)
Copyright (c) 2012 https://github.com/siefkenj/

jsPDF Silly SVG plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 
jsPDF split_text_to_size plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.
 
jsPDF standard_fonts_metrics plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.
*/

var jsPDF=function(){function f(g,d,e,h){g="undefined"===typeof g?"p":g.toString().toLowerCase();"undefined"===typeof d&&(d="mm");"undefined"===typeof e&&(e="a4");"undefined"===typeof h&&"undefined"===typeof zpipe&&(h=!1);var a=e.toString().toLowerCase(),p=[],j=0,m=h;h={a3:[841.89,1190.55],a4:[595.28,841.89],a5:[420.94,595.28],letter:[612,792],legal:[612,1008]};var u="0 g",c=0,q=[],C=2,F=!1,H=[],n={},x={},z=16,A,y,s,r,I={title:"",subject:"",author:"",keywords:"",creator:""},w=0,aa=0,D={},G=new k(D),
B,v=function(c){return c.toFixed(2)},V=function(c){var e=c.toFixed(0);return 10>c?"0"+e:e},l=function(e){F?q[c].push(e):(p.push(e),j+=e.length+1)},N=function(){C++;H[C]=j;l(C+" 0 obj");return C},Q=function(c){l("stream");l(c);l("endstream")},J,ca,R,t=function(c,e){var d;d=c;var j=e,a,h,b,p,g,m;void 0===j&&(j={});a=j.sourceEncoding?a:"Unicode";b=j.outputEncoding;if((j.autoencode||b)&&n[A].metadata&&n[A].metadata[a]&&n[A].metadata[a].encoding)if(a=n[A].metadata[a].encoding,!b&&n[A].encoding&&(b=n[A].encoding),
!b&&a.codePages&&(b=a.codePages[0]),"string"===typeof b&&(b=a[b]),b){g=!1;p=[];a=0;for(h=d.length;a<h;a++)(m=b[d.charCodeAt(a)])?p.push(String.fromCharCode(m)):p.push(d[a]),p[a].charCodeAt(0)>>8&&(g=!0);d=p.join("")}for(a=d.length;void 0===g&&0!==a;)d.charCodeAt(a-1)>>8&&(g=!0),a--;if(g){p=j.noBOM?[]:[254,255];a=0;for(h=d.length;a<h;a++){m=d.charCodeAt(a);j=m>>8;if(j>>8)throw Error("Character at position "+a.toString(10)+" of string '"+d+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");p.push(j);
p.push(m-(j<<8))}d=String.fromCharCode.apply(void 0,p)}return d.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},W=function(){c++;F=!0;q[c]=[];l(v(0.200025*r)+" w");l("0 G");0!==w&&l(w.toString(10)+" J");0!==aa&&l(aa.toString(10)+" j");G.publish("addPage",{pageNumber:c})},E=function(c,a){var d;void 0===c&&(c=n[A].fontName);void 0===a&&(a=n[A].fontStyle);try{d=x[c][a]}catch(e){d=void 0}if(!d)throw Error("Unable to look up font label for font '"+c+"', '"+a+"'. Refer to getFontList() for available fonts.");
return d},K=function(){F=!1;p=[];H=[];l("%PDF-1.3");J=s*r;ca=y*r;var a,d,e,b,h;for(a=1;a<=c;a++){N();l("<</Type /Page");l("/Parent 1 0 R");l("/Resources 2 0 R");l("/Contents "+(C+1)+" 0 R>>");l("endobj");d=q[a].join("\n");N();if(m){e=[];for(b=0;b<d.length;++b)e[b]=d.charCodeAt(b);h=adler32cs.from(d);d=new Deflater(6);d.append(new Uint8Array(e));d=d.flush();e=[new Uint8Array([120,156]),new Uint8Array(d),new Uint8Array([h&255,h>>8&255,h>>16&255,h>>24&255])];d="";for(b in e)e.hasOwnProperty(b)&&(d+=
String.fromCharCode.apply(null,e[b]));l("<</Length "+d.length+" /Filter [/FlateDecode]>>")}else l("<</Length "+d.length+">>");Q(d);l("endobj")}H[1]=j;l("1 0 obj");l("<</Type /Pages");R="/Kids [";for(b=0;b<c;b++)R+=3+2*b+" 0 R ";l(R+"]");l("/Count "+c);l("/MediaBox [0 0 "+v(J)+" "+v(ca)+"]");l(">>");l("endobj");for(var g in n)n.hasOwnProperty(g)&&(a=n[g],a.objectNumber=N(),l("<</BaseFont/"+a.PostScriptName+"/Type/Font"),"string"===typeof a.encoding&&l("/Encoding/"+a.encoding),l("/Subtype/Type1>>"),
l("endobj"));G.publish("putResources");H[2]=j;l("2 0 obj");l("<<");l("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]");l("/Font <<");for(var f in n)n.hasOwnProperty(f)&&l("/"+f+" "+n[f].objectNumber+" 0 R");l(">>");l("/XObject <<");G.publish("putXobjectDict");l(">>");l(">>");l("endobj");G.publish("postPutResources");N();l("<<");l("/Producer (jsPDF 20120619)");I.title&&l("/Title ("+t(I.title)+")");I.subject&&l("/Subject ("+t(I.subject)+")");I.author&&l("/Author ("+t(I.author)+")");I.keywords&&l("/Keywords ("+
t(I.keywords)+")");I.creator&&l("/Creator ("+t(I.creator)+")");g=new Date;l("/CreationDate (D:"+[g.getFullYear(),V(g.getMonth()+1),V(g.getDate()),V(g.getHours()),V(g.getMinutes()),V(g.getSeconds())].join("")+")");l(">>");l("endobj");N();l("<<");l("/Type /Catalog");l("/Pages 1 0 R");l("/OpenAction [3 0 R /FitH null]");l("/PageLayout /OneColumn");G.publish("putCatalog");l(">>");l("endobj");g=j;l("xref");l("0 "+(C+1));l("0000000000 65535 f ");for(f=1;f<=C;f++)a=H[f].toFixed(0),a=10>a.length?Array(11-
a.length).join("0")+a:a,l(a+" 00000 n ");l("trailer");l("<<");l("/Size "+(C+1));l("/Root "+C+" 0 R");l("/Info "+(C-1)+" 0 R");l(">>");l("startxref");l(g);l("%%EOF");F=!0;return p.join("\n")},Y=function(c){var a="S";if("F"===c)a="f";else if("FD"===c||"DF"===c)a="B";return a},Z=function(c,a){var d,e,b,j;switch(c){case void 0:return K();case "save":if(navigator.getUserMedia&&(void 0===window.URL||void 0===window.URL.createObjectURL))return D.output("dataurlnewwindow");d=K();e=d.length;b=new Uint8Array(new ArrayBuffer(e));
for(j=0;j<e;j++)b[j]=d.charCodeAt(j);d=new Blob([b],{type:"application/pdf"});saveAs(d,a);break;case "datauristring":case "dataurlstring":return"data:application/pdf;base64,"+btoa(K());case "datauri":case "dataurl":document.location.href="data:application/pdf;base64,"+btoa(K());break;case "dataurlnewwindow":window.open("data:application/pdf;base64,"+btoa(K()));break;default:throw Error('Output type "'+c+'" is not supported.');}};if("pt"===d)r=1;else if("mm"===d)r=72/25.4;else if("cm"===d)r=72/2.54;
else if("in"===d)r=72;else throw"Invalid unit: "+d;if(h.hasOwnProperty(a))y=h[a][1]/r,s=h[a][0]/r;else try{y=e[1],s=e[0]}catch(M){throw"Invalid format: "+e;}if("p"===g||"portrait"===g)g="p",s>y&&(g=s,s=y,y=g);else if("l"===g||"landscape"===g)g="l",y>s&&(g=s,s=y,y=g);else throw"Invalid orientation: "+g;D.internal={pdfEscape:t,getStyle:Y,getFont:function(){return n[E.apply(D,arguments)]},getFontSize:function(){return z},btoa:btoa,write:function(c,a,d,e){l(1===arguments.length?c:Array.prototype.join.call(arguments,
" "))},getCoordinateString:function(c){return v(c*r)},getVerticalCoordinateString:function(c){return v((y-c)*r)},collections:{},newObject:N,putStream:Q,events:G,scaleFactor:r,pageSize:{width:s,height:y},output:function(c,a){return Z(c,a)}};D.addPage=function(){W();return this};D.text=function(c,a,d,e){var b,j;"number"===typeof c&&(b=c,j=a,c=d,a=b,d=j);"string"===typeof c&&c.match(/[\n\r]/)&&(c=c.split(/\r\n|\r|\n/g));"undefined"===typeof e?e={noBOM:!0,autoencode:!0}:(void 0===e.noBOM&&(e.noBOM=!0),
void 0===e.autoencode&&(e.autoencode=!0));if("string"===typeof c)e=t(c,e);else if(c instanceof Array){c=c.concat();for(b=c.length-1;-1!==b;b--)c[b]=t(c[b],e);e=c.join(") Tj\nT* (")}else throw Error('Type of text must be string or Array. "'+c+'" is not recognized.');l("BT\n/"+A+" "+z+" Tf\n"+z+" TL\n"+u+"\n"+v(a*r)+" "+v((y-d)*r)+" Td\n("+e+") Tj\nET");return this};D.line=function(c,a,d,e){l(v(c*r)+" "+v((y-a)*r)+" m "+v(d*r)+" "+v((y-e)*r)+" l S");return this};D.lines=function(c,a,d,e,b){var j,g,
h,p,m,f,q,u;"number"===typeof c&&(j=c,g=a,c=d,a=j,d=g);b=Y(b);e=void 0===e?[1,1]:e;l((a*r).toFixed(3)+" "+((y-d)*r).toFixed(3)+" m ");j=e[0];e=e[1];g=c.length;u=d;for(d=0;d<g;d++)h=c[d],2===h.length?(a=h[0]*j+a,u=h[1]*e+u,l((a*r).toFixed(3)+" "+((y-u)*r).toFixed(3)+" l")):(p=h[0]*j+a,m=h[1]*e+u,f=h[2]*j+a,q=h[3]*e+u,a=h[4]*j+a,u=h[5]*e+u,l((p*r).toFixed(3)+" "+((y-m)*r).toFixed(3)+" "+(f*r).toFixed(3)+" "+((y-q)*r).toFixed(3)+" "+(a*r).toFixed(3)+" "+((y-u)*r).toFixed(3)+" c"));l(b);return this};
D.rect=function(c,a,d,e,b){b=Y(b);l([v(c*r),v((y-a)*r),v(d*r),v(-e*r),"re",b].join(" "));return this};D.triangle=function(c,a,d,e,b,j,h){this.lines([[d-c,e-a],[b-d,j-e],[c-b,a-j]],c,a,[1,1],h);return this};D.roundedRect=function(c,a,d,e,b,j,h){var g=4/3*(Math.SQRT2-1);this.lines([[d-2*b,0],[b*g,0,b,j-j*g,b,j],[0,e-2*j],[0,j*g,-(b*g),j,-b,j],[-d+2*b,0],[-(b*g),0,-b,-(j*g),-b,-j],[0,-e+2*j],[0,-(j*g),b*g,-j,b,-j]],c+b,a,[1,1],h);return this};D.ellipse=function(c,a,d,e,b){b=Y(b);var j=4/3*(Math.SQRT2-
1)*d,g=4/3*(Math.SQRT2-1)*e;l([v((c+d)*r),v((y-a)*r),"m",v((c+d)*r),v((y-(a-g))*r),v((c+j)*r),v((y-(a-e))*r),v(c*r),v((y-(a-e))*r),"c"].join(" "));l([v((c-j)*r),v((y-(a-e))*r),v((c-d)*r),v((y-(a-g))*r),v((c-d)*r),v((y-a)*r),"c"].join(" "));l([v((c-d)*r),v((y-(a+g))*r),v((c-j)*r),v((y-(a+e))*r),v(c*r),v((y-(a+e))*r),"c"].join(" "));l([v((c+j)*r),v((y-(a+e))*r),v((c+d)*r),v((y-(a+g))*r),v((c+d)*r),v((y-a)*r),"c",b].join(" "));return this};D.circle=function(c,a,d,e){return this.ellipse(c,a,d,d,e)};D.setProperties=
function(c){for(var a in I)I.hasOwnProperty(a)&&c[a]&&(I[a]=c[a]);return this};D.setFontSize=function(c){z=c;return this};D.setFont=function(c,a){A=E(c,a);return this};D.setFontStyle=D.setFontType=function(c){A=E(void 0,c);return this};D.getFontList=function(){var c={},a,d,e;for(a in x)if(x.hasOwnProperty(a))for(d in c[a]=e=[],x[a])x[a].hasOwnProperty(d)&&e.push(d);return c};D.setLineWidth=function(c){l((c*r).toFixed(2)+" w");return this};D.setDrawColor=function(c,a,d,e){c=void 0===a||void 0===e&&
c===a===d?"string"===typeof c?c+" G":v(c/255)+" G":void 0===e?"string"===typeof c?[c,a,d,"RG"].join(" "):[v(c/255),v(a/255),v(d/255),"RG"].join(" "):"string"===typeof c?[c,a,d,e,"K"].join(" "):[v(c),v(a),v(d),v(e),"K"].join(" ");l(c);return this};D.setFillColor=function(c,a,d,e){c=void 0===a||void 0===e&&c===a===d?"string"===typeof c?c+" g":v(c/255)+" g":void 0===e?"string"===typeof c?[c,a,d,"rg"].join(" "):[v(c/255),v(a/255),v(d/255),"rg"].join(" "):"string"===typeof c?[c,a,d,e,"k"].join(" "):[v(c),
v(a),v(d),v(e),"k"].join(" ");l(c);return this};D.setTextColor=function(c,a,d){u=0===c&&0===a&&0===d||"undefined"===typeof a?(c/255).toFixed(3)+" g":[(c/255).toFixed(3),(a/255).toFixed(3),(d/255).toFixed(3),"rg"].join(" ");return this};D.CapJoinStyles={"0":0,butt:0,but:0,bevel:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,milter:2};D.setLineCap=function(c){var a=this.CapJoinStyles[c];if(void 0===a)throw Error("Line cap style of '"+c+"' is not recognized. See or extend .CapJoinStyles property for valid styles");
w=a;l(a.toString(10)+" J");return this};D.setLineJoin=function(c){var a=this.CapJoinStyles[c];if(void 0===a)throw Error("Line join style of '"+c+"' is not recognized. See or extend .CapJoinStyles property for valid styles");aa=a;l(a.toString(10)+" j");return this};D.output=Z;D.save=function(c){D.output("save",c)};for(B in f.API)if(f.API.hasOwnProperty(B))if("events"===B&&f.API.events.length){g=G;d=f.API.events;h=a=e=void 0;for(h=d.length-1;-1!==h;h--)e=d[h][0],a=d[h][1],g.subscribe.apply(g,[e].concat("function"===
typeof a?[a]:a))}else D[B]=f.API[B];B=[["Helvetica","helvetica","normal"],["Helvetica-Bold","helvetica","bold"],["Helvetica-Oblique","helvetica","italic"],["Helvetica-BoldOblique","helvetica","bolditalic"],["Courier","courier","normal"],["Courier-Bold","courier","bold"],["Courier-Oblique","courier","italic"],["Courier-BoldOblique","courier","bolditalic"],["Times-Roman","times","normal"],["Times-Bold","times","bold"],["Times-Italic","times","italic"],["Times-BoldItalic","times","bolditalic"]];g=0;
for(d=B.length;g<d;g++){h=B[g][0];var T=B[g][1],a=B[g][2];e="F"+(b(n)+1).toString(10);h=n[e]={id:e,PostScriptName:h,fontName:T,fontStyle:a,encoding:"StandardEncoding",metadata:{}};var ha=e;void 0===x[T]&&(x[T]={});x[T][a]=ha;G.publish("addFont",h);a=e;e=B[g][0].split("-");h=e[0];e=e[1]||"";void 0===x[h]&&(x[h]={});x[h][e]=a}G.publish("addFonts",{fonts:n,dictionary:x});A="F1";W();G.publish("initialized");return D}"undefined"===typeof btoa&&(window.btoa=function(b){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(""),
e,h,a,p,j=0,m=0,f="",f=[];do e=b.charCodeAt(j++),h=b.charCodeAt(j++),a=b.charCodeAt(j++),p=e<<16|h<<8|a,e=p>>18&63,h=p>>12&63,a=p>>6&63,p&=63,f[m++]=d[e]+d[h]+d[a]+d[p];while(j<b.length);f=f.join("");b=b.length%3;return(b?f.slice(0,b-3):f)+"===".slice(b||3)});"undefined"===typeof atob&&(window.atob=function(b){var d,e,h,a,p,j=0,m=0;a="";var f=[];if(!b)return b;b+="";do d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(j++)),e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(j++)),
a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(j++)),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(j++)),h=d<<18|e<<12|a<<6|p,d=h>>16&255,e=h>>8&255,h&=255,64===a?f[m++]=String.fromCharCode(d):64===p?f[m++]=String.fromCharCode(d,e):f[m++]=String.fromCharCode(d,e,h);while(j<b.length);return a=f.join("")});var b="function"===typeof Object.keys?function(b){return Object.keys(b).length}:function(b){var d=0,e;for(e in b)b.hasOwnProperty(e)&&
d++;return d},k=function(b){this.topics={};this.context=b;this.publish=function(d,b){if(this.topics[d]){var h=this.topics[d],a=[],p,j,g,f,c=function(){};b=Array.prototype.slice.call(arguments,1);j=0;for(g=h.length;j<g;j++)f=h[j],p=f[0],f[1]&&(f[0]=c,a.push(j)),p.apply(this.context,b);j=0;for(g=a.length;j<g;j++)h.splice(a[j],1)}};this.subscribe=function(d,b,h){this.topics[d]?this.topics[d].push([b,h]):this.topics[d]=[[b,h]];return{topic:d,callback:b}};this.unsubscribe=function(d){if(this.topics[d.topic]){var b=
this.topics[d.topic],h,a;h=0;for(a=b.length;h<a;h++)b[h][0]===d.callback&&b.splice(h,1)}}};f.API={events:[]};return f}();
(function(f){var b=function(){var b=this.internal.collections.addImage_images,d;for(d in b){var e=b[d],h=this.internal.newObject(),a=this.internal.write,p=this.internal.putStream;e.n=h;a("<</Type /XObject");a("/Subtype /Image");a("/Width "+e.w);a("/Height "+e.h);"Indexed"===e.cs?a("/ColorSpace [/Indexed /DeviceRGB "+(e.pal.length/3-1)+" "+(h+1)+" 0 R]"):(a("/ColorSpace /"+e.cs),"DeviceCMYK"===e.cs&&a("/Decode [1 0 1 0 1 0 1 0]"));a("/BitsPerComponent "+e.bpc);"f"in e&&a("/Filter /"+e.f);"dp"in e&&
a("/DecodeParms <<"+e.dp+">>");if("trns"in e&&e.trns.constructor==Array)for(var j="",f=0;f<e.trns.length;f++)j+=e[j][f]+" "+e.trns[f]+" ",a("/Mask ["+j+"]");"smask"in e&&a("/SMask "+(h+1)+" 0 R");a("/Length "+e.data.length+">>");p(e.data);a("endobj")}},k=function(){var b=this.internal.collections.addImage_images,d=this.internal.write,e,h;for(h in b)e=b[h],d("/I"+e.i,e.n,"0","R")};f.addImage=function(g,d,e,h,a,p){if("object"===typeof g&&1===g.nodeType){d=document.createElement("canvas");d.width=g.clientWidth;
d.height=g.clientHeight;var j=d.getContext("2d");if(!j)throw"addImage requires canvas to be supported by browser.";j.drawImage(g,0,0,d.width,d.height);g=d.toDataURL("image/jpeg");d="JPEG"}if("JPEG"!==d.toUpperCase())throw Error("addImage currently only supports format 'JPEG', not '"+d+"'");var f;d=this.internal.collections.addImage_images;var j=this.internal.getCoordinateString,u=this.internal.getVerticalCoordinateString;"data:image/jpeg;base64,"===g.substring(0,23)&&(g=atob(g.replace("data:image/jpeg;base64,",
"")));if(d)if(Object.keys)f=Object.keys(d).length;else{var c=d,q=0;for(f in c)c.hasOwnProperty(f)&&q++;f=q}else f=0,this.internal.collections.addImage_images=d={},this.internal.events.subscribe("putResources",b),this.internal.events.subscribe("putXobjectDict",k);a:{var c=g,C;if(255===!c.charCodeAt(0)||216===!c.charCodeAt(1)||255===!c.charCodeAt(2)||224===!c.charCodeAt(3)||74===!c.charCodeAt(6)||70===!c.charCodeAt(7)||73===!c.charCodeAt(8)||70===!c.charCodeAt(9)||0===!c.charCodeAt(10))throw Error("getJpegSize requires a binary jpeg file");
C=256*c.charCodeAt(4)+c.charCodeAt(5);for(var q=4,F=c.length;q<F;){q+=C;if(255!==c.charCodeAt(q))throw Error("getJpegSize could not find the size of the image");if(192===c.charCodeAt(q+1)){C=256*c.charCodeAt(q+5)+c.charCodeAt(q+6);c=256*c.charCodeAt(q+7)+c.charCodeAt(q+8);c=[c,C];break a}else q+=2,C=256*c.charCodeAt(q)+c.charCodeAt(q+1)}c=void 0}g={w:c[0],h:c[1],cs:"DeviceRGB",bpc:8,f:"DCTDecode",i:f,data:g};d[f]=g;!a&&!p&&(p=a=-96);0>a&&(a=-72*g.w/a/this.internal.scaleFactor);0>p&&(p=-72*g.h/p/this.internal.scaleFactor);
0===a&&(a=p*g.w/g.h);0===p&&(p=a*g.h/g.w);this.internal.write("q",j(a),"0 0",j(p),j(e),u(h+p),"cm /I"+g.i,"Do Q");return this}})(jsPDF.API);
(function(f){function b(a,b,d,e){this.pdf=a;this.x=b;this.y=d;this.settings=e;this.init();return this}function k(b){var d=a[b];if(d)return d;d={"xx-small":9,"x-small":11,small:13,medium:16,large:19,"x-large":23,"xx-large":28,auto:0}[b];if(void 0!==d||(d=parseFloat(b)))return a[b]=d/16;d=b.match(/([\d\.]+)(px)/);return 3===d.length?a[b]=parseFloat(d[1])/16:a[b]=1}function g(a,b,f){var u=a.childNodes,c;c=$(a);a={};for(var q,C=c.css("font-family").split(","),F=C.shift();!q&&F;)q=d[F.trim().toLowerCase()],
F=C.shift();a["font-family"]=q||"times";a["font-style"]=h[c.css("font-style")]||"normal";q=e[c.css("font-weight")]||"normal";"bold"===q&&(a["font-style"]="normal"===a["font-style"]?q:q+a["font-style"]);a["font-size"]=k(c.css("font-size"))||1;a["line-height"]=k(c.css("line-height"))||1;a.display="inline"===c.css("display")?"inline":"block";"block"===a.display&&(a["margin-top"]=k(c.css("margin-top"))||0,a["margin-bottom"]=k(c.css("margin-bottom"))||0,a["padding-top"]=k(c.css("padding-top"))||0,a["padding-bottom"]=
k(c.css("padding-bottom"))||0);if(q="block"===a.display)b.setBlockBoundary(),b.setBlockStyle(a);C=0;for(F=u.length;C<F;C++)if(c=u[C],"object"===typeof c)if(1===c.nodeType&&"SCRIPT"!=c.nodeName){var H=c,n=b,x=f,z=!1,A=void 0,y=void 0,s=x["#"+H.id];if(s)if("function"===typeof s)z=s(H,n);else{A=0;for(y=s.length;!z&&A!==y;)z=s[A](H,n),A++}s=x[H.nodeName];if(!z&&s)if("function"===typeof s)z=s(H,n);else{A=0;for(y=s.length;!z&&A!==y;)z=s[A](H,n),A++}z||g(c,b,f)}else 3===c.nodeType&&b.addText(c.nodeValue,
a);else"string"===typeof c&&b.addText(c,a);q&&b.setBlockBoundary()}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});String.prototype.trimLeft||(String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")});String.prototype.trimRight||(String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")});b.prototype.init=function(){this.paragraph={text:[],style:[]};this.pdf.internal.write("q")};b.prototype.dispose=function(){this.pdf.internal.write("Q");
return{x:this.x,y:this.y}};b.prototype.splitFragmentsIntoLines=function(a,b){for(var d=this.pdf.internal.scaleFactor,e={},c,h,g,f,k,n=[],x=[n],z=0,A=this.settings.width;a.length;)if(f=a.shift(),k=b.shift(),f)if(c=k["font-family"],h=k["font-style"],g=e[c+h],g||(g=this.pdf.internal.getFont(c,h).metadata.Unicode,e[c+h]=g),c={widths:g.widths,kerning:g.kerning,fontSize:12*k["font-size"],textIndent:z},h=this.pdf.getStringUnitWidth(f,c)*c.fontSize/d,z+h>A){f=this.pdf.splitTextToSize(f,A,c);for(n.push([f.shift(),
k]);f.length;)n=[[f.shift(),k]],x.push(n);z=this.pdf.getStringUnitWidth(n[0][0],c)*c.fontSize/d}else n.push([f,k]),z+=h;return x};b.prototype.RenderTextFragment=function(a,b){var d=this.pdf.internal.getFont(b["font-family"],b["font-style"]);this.pdf.internal.write("/"+d.id,(12*b["font-size"]).toFixed(2),"Tf","("+this.pdf.internal.pdfEscape(a)+") Tj")};b.prototype.renderParagraph=function(){for(var a=this.paragraph.text,b=0,d=a.length,e,c=!1,h=!1;!c&&b!==d;)(e=a[b]=a[b].trimLeft())&&(c=!0),b++;for(b=
d-1;d&&!h&&-1!==b;)(e=a[b]=a[b].trimRight())&&(h=!0),b--;c=/\s+$/g;h=!0;for(b=0;b!==d;b++)e=a[b].replace(/\s+/g," "),h&&(e=e.trimLeft()),e&&(h=c.test(e)),a[b]=e;b=this.paragraph.style;e=(d=this.paragraph.blockstyle)||{};this.paragraph={text:[],style:[],blockstyle:{},priorblockstyle:d};if(a.join("").trim()){a=this.splitFragmentsIntoLines(a,b);b=12/this.pdf.internal.scaleFactor;c=(Math.max((d["margin-top"]||0)-(e["margin-bottom"]||0),0)+(d["padding-top"]||0))*b;d=((d["margin-bottom"]||0)+(d["padding-bottom"]||
0))*b;e=this.pdf.internal.write;var g,f;this.y+=c;for(e("q","BT",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td");a.length;){c=a.shift();g=h=0;for(f=c.length;g!==f;g++)c[g][0].trim()&&(h=Math.max(h,c[g][1]["line-height"],c[g][1]["font-size"]));e(0,(-12*h).toFixed(2),"Td");g=0;for(f=c.length;g!==f;g++)c[g][0]&&this.RenderTextFragment(c[g][0],c[g][1]);this.y+=h*b}e("ET","Q");this.y+=d}};b.prototype.setBlockBoundary=function(){this.renderParagraph()};
b.prototype.setBlockStyle=function(a){this.paragraph.blockstyle=a};b.prototype.addText=function(a,b){this.paragraph.text.push(a);this.paragraph.style.push(b)};var d={helvetica:"helvetica","sans-serif":"helvetica",serif:"times",times:"times","times new roman":"times",monospace:"courier",courier:"courier"},e={100:"normal",200:"normal",300:"normal",400:"normal",500:"bold",600:"bold",700:"bold",800:"bold",900:"bold",normal:"normal",bold:"bold",bolder:"bold",lighter:"normal"},h={normal:"normal",italic:"italic",
oblique:"italic"},a={normal:1};f.fromHTML=function(a,d,e,h){if("string"===typeof a){var c="jsPDFhtmlText"+Date.now().toString()+(1E3*Math.random()).toFixed(0);$('<div style="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;"><iframe style="height:1px;width:1px" name="'+c+'" /></div>').appendTo(document.body);a=$(window.frames[c].document.body).html(a)[0]}d=
new b(this,d,e,h);g(a,d,h.elementHandlers);return d.dispose()}})(jsPDF.API);
(function(f){f.addSVG=function(b,f,g,d,e){if(void 0===f||void 0===f)throw Error("addSVG needs values for 'x' and 'y'");var h=document.createElement("iframe"),a=document.createElement("style");a.type="text/css";a.styleSheet?a.styleSheet.cssText=".jsPDF_sillysvg_iframe {display:none;position:absolute;}":a.appendChild(document.createTextNode(".jsPDF_sillysvg_iframe {display:none;position:absolute;}"));document.getElementsByTagName("head")[0].appendChild(a);h.name="childframe";h.setAttribute("width",
0);h.setAttribute("height",0);h.setAttribute("frameborder","0");h.setAttribute("scrolling","no");h.setAttribute("seamless","seamless");h.setAttribute("class","jsPDF_sillysvg_iframe");document.body.appendChild(h);h=(h.contentWindow||h.contentDocument).document;h.write(b);h.close();h=h.getElementsByTagName("svg")[0];b=[1,1];var a=parseFloat(h.getAttribute("width")),p=parseFloat(h.getAttribute("height"));a&&p&&(d&&e?b=[d/a,e/p]:d?b=[d/a,d/a]:e&&(b=[e/p,e/p]));h=h.childNodes;d=0;for(e=h.length;d<e;d++)if(a=
h[d],a.tagName&&"PATH"===a.tagName.toUpperCase()){for(var a=a.getAttribute("d").split(" "),p=parseFloat(a[1]),j=parseFloat(a[2]),m=[],u=3,c=a.length;u<c;)"c"===a[u]?(m.push([parseFloat(a[u+1]),parseFloat(a[u+2]),parseFloat(a[u+3]),parseFloat(a[u+4]),parseFloat(a[u+5]),parseFloat(a[u+6])]),u+=7):"l"===a[u]?(m.push([parseFloat(a[u+1]),parseFloat(a[u+2])]),u+=3):u+=1;a=[p,j,m];a[0]=a[0]*b[0]+f;a[1]=a[1]*b[1]+g;this.lines.call(this,a[2],a[0],a[1],b)}return this}})(jsPDF.API);
(function(f){var b=f.getCharWidthsArray=function(b,e){e||(e={});var h=e.widths?e.widths:this.internal.getFont().metadata.Unicode.widths,a=h.fof?h.fof:1,g=e.kerning?e.kerning:this.internal.getFont().metadata.Unicode.kerning,f=g.fof?g.fof:1,m,k,c,q=0,C=h[0]||a,F=[];m=0;for(k=b.length;m<k;m++)c=b.charCodeAt(m),F.push((h[c]||C)/a+(g[c]&&g[c][q]||0)/f),q=c;return F},k=function(b){for(var e=b.length,h=0;e;)e--,h+=b[e];return h};f.getStringUnitWidth=function(d,e){return k(b.call(this,d,e))};var g=function(d,
e,h){h||(h={});var a=b(" ",h)[0],g=d.split(" "),f=[];d=[f];var m=h.textIndent||0,u=0,c=0,q,C,F,H;F=0;for(H=g.length;F<H;F++){q=g[F];C=b(q,h);c=k(C);if(m+u+c>e){if(c>e){for(var c=q,n=C,x=e,z=[],A=0,y=c.length,s=0;A!==y&&s+n[A]<e-(m+u);)s+=n[A],A++;z.push(c.slice(0,A));m=A;for(s=0;A!==y;)s+n[A]>x&&(z.push(c.slice(m,A)),s=0,m=A),s+=n[A],A++;m!==A&&z.push(c.slice(m,A));m=z;f.push(m.shift());for(f=[m.pop()];m.length;)d.push([m.shift()]);c=k(C.slice(q.length-f[0].length))}else f=[q];d.push(f);m=c}else f.push(q),
m+=u+c;u=a}e=[];F=0;for(H=d.length;F<H;F++)e.push(d[F].join(" "));return e};f.splitTextToSize=function(b,e,h){h||(h={});var a=h.fontSize||this.internal.getFontSize(),f;var j=h;f={"0":1};var m={};!j.widths||!j.kerning?(j=this.internal.getFont(j.fontName,j.fontStyle),f=j.metadata.Unicode?{widths:j.metadata.Unicode.widths||f,kerning:j.metadata.Unicode.kerning||m}:{widths:f,kerning:m}):f={widths:j.widths,kerning:j.kerning};b=b.match(/[\n\r]/)?b.split(/\r\n|\r|\n/g):[b];e=1*this.internal.scaleFactor*e/
a;f.textIndent=h.textIndent?1*h.textIndent*this.internal.scaleFactor/a:0;m=[];h=0;for(a=b.length;h<a;h++)m=m.concat(g(b[h],e,f));return m}})(jsPDF.API);
(function(f){var b=function(b){for(var d={},a=0;16>a;a++)d["klmnopqrstuvwxyz"[a]]="0123456789abcdef"[a];for(var g={},f=1,m,k=g,c=[],q,C="",F="",H,n=b.length-1,a=1;a!=n;)q=b[a],a+=1,"'"==q?m?(H=m.join(""),m=void 0):m=[]:m?m.push(q):"{"==q?(c.push([k,H]),k={},H=void 0):"}"==q?(q=c.pop(),q[0][q[1]]=k,H=void 0,k=q[0]):"-"==q?f=-1:void 0===H?d.hasOwnProperty(q)?(C+=d[q],H=parseInt(C,16)*f,f=1,C=""):C+=q:d.hasOwnProperty(q)?(F+=d[q],k[H]=parseInt(F,16)*f,f=1,H=void 0,F=""):F+=q;return g},k={codePages:["WinAnsiEncoding"],
WinAnsiEncoding:b("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},g={Unicode:{Courier:k,"Courier-Bold":k,"Courier-BoldOblique":k,"Courier-Oblique":k,Helvetica:k,"Helvetica-Bold":k,"Helvetica-BoldOblique":k,"Helvetica-Oblique":k,"Times-Roman":k,"Times-Bold":k,"Times-BoldItalic":k,"Times-Italic":k}},d={Unicode:{"Courier-Oblique":b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":b("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
"Helvetica-Bold":b("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
Courier:b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":b("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
Helvetica:b("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
"Helvetica-BoldOblique":b("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
"Courier-Bold":b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":b("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
"Times-Roman":b("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
"Helvetica-Oblique":b("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};
f.events.push(["addFonts",function(b){var h,a,f,j;for(a in b.fonts)if(b.fonts.hasOwnProperty(a)){h=b.fonts[a];if(f=d.Unicode[h.PostScriptName])j=h.metadata.Unicode?h.metadata.Unicode:h.metadata.Unicode={},j.widths=f.widths,j.kerning=f.kerning;if(f=g.Unicode[h.PostScriptName])j=h.metadata.Unicode?h.metadata.Unicode:h.metadata.Unicode={},j.encoding=f,f.codePages&&f.codePages.length&&(h.encoding=f.codePages[0])}}])})(jsPDF.API);
var BlobBuilder=BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder||function(f){var b=function(a){return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]},k=function(){this.data=[]},g=function(a,b,c){this.data=a;this.size=a.length;this.type=b;this.encoding=c},d=k.prototype,e=g.prototype,h=f.FileReaderSync,a=function(a){this.code=this[this.name=a]},p="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
j=p.length,m=f.URL||f.webkitURL||f,u=m.createObjectURL,c=m.revokeObjectURL,q=m,C=f.btoa,F=f.atob,H=!1,n=function(a){H=!a},x=f.ArrayBuffer,z=f.Uint8Array;for(k.fake=e.fake=!0;j--;)a.prototype[p[j]]=j+1;try{z&&n.apply(0,new z(1))}catch(A){}m.createObjectURL||(q=f.URL={});q.createObjectURL=function(a){var b=a.type;null===b&&(b="application/octet-stream");if(a instanceof g)return b="data:"+b,"base64"===a.encoding?b+";base64,"+a.data:"URI"===a.encoding?b+","+decodeURIComponent(a.data):C?b+";base64,"+C(a.data):
b+","+encodeURIComponent(a.data);if(u)return u.call(m,a)};q.revokeObjectURL=function(a){"data:"!==a.substring(0,5)&&c&&c.call(m,a)};d.append=function(c){var d=this.data;if(z&&c instanceof x)if(H)d.push(String.fromCharCode.apply(String,new z(c)));else{d="";c=new z(c);for(var e=0,f=c.length;e<f;e++)d+=String.fromCharCode(c[e])}else if("Blob"===b(c)||"File"===b(c))if(h)e=new h,d.push(e.readAsBinaryString(c));else throw new a("NOT_READABLE_ERR");else c instanceof g?"base64"===c.encoding&&F?d.push(F(c.data)):
"URI"===c.encoding?d.push(decodeURIComponent(c.data)):"raw"===c.encoding&&d.push(c.data):("string"!==typeof c&&(c+=""),d.push(unescape(encodeURIComponent(c))))};d.getBlob=function(a){arguments.length||(a=null);return new g(this.data.join(""),a,"raw")};d.toString=function(){return"[object BlobBuilder]"};e.slice=function(a,c,b){var d=arguments.length;3>d&&(b=null);return new g(this.data.slice(a,1<d?c:this.data.length),b,this.encoding)};e.toString=function(){return"[object Blob]"};return k}(self),saveAs=
saveAs||navigator.msSaveBlob&&navigator.msSaveBlob.bind(navigator)||function(f){var b=f.document,k=f.URL||f.webkitURL||f,g=b.createElementNS("http://www.w3.org/1999/xhtml","a"),d="download"in g,e=f.webkitRequestFileSystem,h=f.requestFileSystem||e||f.mozRequestFileSystem,a=function(a){(f.setImmediate||f.setTimeout)(function(){throw a;},0)},p=0,j=[],m=function(c,b,d){b=[].concat(b);for(var e=b.length;e--;){var f=c["on"+b[e]];if("function"===typeof f)try{f.call(c,d||c)}catch(h){a(h)}}},u=function(a,
c){var k=this,u=a.type,n=!1,x,z,A=function(){var c=(f.URL||f.webkitURL||f).createObjectURL(a);j.push(c);return c},y=function(){m(k,["writestart","progress","write","writeend"])},s=function(){if(n||!x)x=A(a);z&&(z.location.href=x);k.readyState=k.DONE;y()},r=function(a){return function(){if(k.readyState!==k.DONE)return a.apply(this,arguments)}},I={create:!0,exclusive:!1},w;k.readyState=k.INIT;c||(c="download");if(d&&(x=A(a),g.href=x,g.download=c,w=b.createEvent("MouseEvents"),w.initMouseEvent("click",
!0,!1,f,0,0,0,0,0,!1,!1,!1,!1,0,null),g.dispatchEvent(w))){k.readyState=k.DONE;y();return}f.chrome&&(u&&"application/octet-stream"!==u)&&(w=a.slice||a.webkitSlice,a=w.call(a,0,a.size,"application/octet-stream"),n=!0);e&&"download"!==c&&(c+=".download");z="application/octet-stream"===u||e?f:f.open();h?(p+=a.size,h(f.TEMPORARY,p,r(function(b){b.root.getDirectory("saved",I,r(function(b){var d=function(){b.getFile(c,I,r(function(c){c.createWriter(r(function(b){b.onwriteend=function(a){z.location.href=
c.toURL();j.push(c);k.readyState=k.DONE;m(k,"writeend",a)};b.onerror=function(){var a=b.error;a.code!==a.ABORT_ERR&&s()};["writestart","progress","write","abort"].forEach(function(a){b["on"+a]=k["on"+a]});b.write(a);k.abort=function(){b.abort();k.readyState=k.DONE};k.readyState=k.WRITING}),s)}),s)};b.getFile(c,{create:!1},r(function(a){a.remove();d()}),r(function(a){a.code===a.NOT_FOUND_ERR?d():s()}))}),s)}),s)):s()},c=u.prototype;c.abort=function(){this.readyState=this.DONE;m(this,"abort")};c.readyState=
c.INIT=0;c.WRITING=1;c.DONE=2;c.error=c.onwritestart=c.onprogress=c.onwrite=c.onabort=c.onerror=c.onwriteend=null;f.addEventListener("unload",function(){for(var a=j.length;a--;){var c=j[a];"string"===typeof c?k.revokeObjectURL(c):c.remove()}j.length=0},!1);return function(a,c){return new u(a,c)}}(self),MAX_BITS=15,D_CODES=30,BL_CODES=19,LENGTH_CODES=29,LITERALS=256,L_CODES=LITERALS+1+LENGTH_CODES,HEAP_SIZE=2*L_CODES+1,END_BLOCK=256,MAX_BL_BITS=7,REP_3_6=16,REPZ_3_10=17,REPZ_11_138=18,Buf_size=16,
Z_DEFAULT_COMPRESSION=-1,Z_FILTERED=1,Z_HUFFMAN_ONLY=2,Z_DEFAULT_STRATEGY=0,Z_NO_FLUSH=0,Z_PARTIAL_FLUSH=1,Z_FULL_FLUSH=3,Z_FINISH=4,Z_OK=0,Z_STREAM_END=1,Z_NEED_DICT=2,Z_STREAM_ERROR=-2,Z_DATA_ERROR=-3,Z_BUF_ERROR=-5,_dist_code=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,
13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,
21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,
28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];
function Tree(){var f=this;f.build_tree=function(b){var k=f.dyn_tree,g=f.stat_desc.static_tree,d=f.stat_desc.elems,e,h=-1,a;b.heap_len=0;b.heap_max=HEAP_SIZE;for(e=0;e<d;e++)0!==k[2*e]?(b.heap[++b.heap_len]=h=e,b.depth[e]=0):k[2*e+1]=0;for(;2>b.heap_len;)a=b.heap[++b.heap_len]=2>h?++h:0,k[2*a]=1,b.depth[a]=0,b.opt_len--,g&&(b.static_len-=g[2*a+1]);f.max_code=h;for(e=Math.floor(b.heap_len/2);1<=e;e--)b.pqdownheap(k,e);a=d;do e=b.heap[1],b.heap[1]=b.heap[b.heap_len--],b.pqdownheap(k,1),g=b.heap[1],
b.heap[--b.heap_max]=e,b.heap[--b.heap_max]=g,k[2*a]=k[2*e]+k[2*g],b.depth[a]=Math.max(b.depth[e],b.depth[g])+1,k[2*e+1]=k[2*g+1]=a,b.heap[1]=a++,b.pqdownheap(k,1);while(2<=b.heap_len);b.heap[--b.heap_max]=b.heap[1];e=f.dyn_tree;for(var h=f.stat_desc.static_tree,p=f.stat_desc.extra_bits,j=f.stat_desc.extra_base,m=f.stat_desc.max_length,u,c,q=0,d=0;d<=MAX_BITS;d++)b.bl_count[d]=0;e[2*b.heap[b.heap_max]+1]=0;for(a=b.heap_max+1;a<HEAP_SIZE;a++)g=b.heap[a],d=e[2*e[2*g+1]+1]+1,d>m&&(d=m,q++),e[2*g+1]=
d,g>f.max_code||(b.bl_count[d]++,u=0,g>=j&&(u=p[g-j]),c=e[2*g],b.opt_len+=c*(d+u),h&&(b.static_len+=c*(h[2*g+1]+u)));if(0!==q){do{for(d=m-1;0===b.bl_count[d];)d--;b.bl_count[d]--;b.bl_count[d+1]+=2;b.bl_count[m]--;q-=2}while(0<q);for(d=m;0!==d;d--)for(g=b.bl_count[d];0!==g;)h=b.heap[--a],h>f.max_code||(e[2*h+1]!=d&&(b.opt_len+=(d-e[2*h+1])*e[2*h],e[2*h+1]=d),g--)}e=f.max_code;a=b.bl_count;b=[];g=0;for(d=1;d<=MAX_BITS;d++)b[d]=g=g+a[d-1]<<1;for(a=0;a<=e;a++)if(p=k[2*a+1],0!==p){g=k;d=2*a;h=b[p]++;
j=0;do j|=h&1,h>>>=1,j<<=1;while(0<--p);g[d]=j>>>1}}}
Tree._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,
25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28];Tree.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];Tree.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];
Tree.d_code=function(f){return 256>f?_dist_code[f]:_dist_code[256+(f>>>7)]};Tree.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];Tree.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];Tree.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];Tree.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function StaticTree(f,b,k,g,d){this.static_tree=f;this.extra_bits=b;this.extra_base=k;this.elems=g;this.max_length=d}
StaticTree.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,
8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,
9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,
48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8];StaticTree.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5];StaticTree.static_l_desc=new StaticTree(StaticTree.static_ltree,Tree.extra_lbits,LITERALS+1,L_CODES,MAX_BITS);
StaticTree.static_d_desc=new StaticTree(StaticTree.static_dtree,Tree.extra_dbits,0,D_CODES,MAX_BITS);StaticTree.static_bl_desc=new StaticTree(null,Tree.extra_blbits,0,BL_CODES,MAX_BL_BITS);var MAX_MEM_LEVEL=9,DEF_MEM_LEVEL=8;function Config(f,b,k,g,d){this.good_length=f;this.max_lazy=b;this.nice_length=k;this.max_chain=g;this.func=d}
var STORED=0,FAST=1,SLOW=2,config_table=[new Config(0,0,0,0,STORED),new Config(4,4,8,4,FAST),new Config(4,5,16,8,FAST),new Config(4,6,32,32,FAST),new Config(4,4,16,16,SLOW),new Config(8,16,32,32,SLOW),new Config(8,16,128,128,SLOW),new Config(8,32,128,256,SLOW),new Config(32,128,258,1024,SLOW),new Config(32,258,258,4096,SLOW)],z_errmsg="need dictionary;stream end;;;stream error;data error;;buffer error;;".split(";"),NeedMore=0,BlockDone=1,FinishStarted=2,FinishDone=3,PRESET_DICT=32,INIT_STATE=42,BUSY_STATE=
113,FINISH_STATE=666,Z_DEFLATED=8,STORED_BLOCK=0,STATIC_TREES=1,DYN_TREES=2,MIN_MATCH=3,MAX_MATCH=258,MIN_LOOKAHEAD=MAX_MATCH+MIN_MATCH+1;function smaller(f,b,k,g){var d=f[2*b];f=f[2*k];return d<f||d==f&&g[b]<=g[k]}
function Deflate(){function f(){var a;for(a=0;a<L_CODES;a++)U[2*a]=0;for(a=0;a<D_CODES;a++)X[2*a]=0;for(a=0;a<BL_CODES;a++)O[2*a]=0;U[2*END_BLOCK]=1;S=la=n.opt_len=n.static_len=0}function b(a,c){var b,d=-1,e,f=a[1],h=0,g=7,j=4;0===f&&(g=138,j=3);a[2*(c+1)+1]=65535;for(b=0;b<=c;b++)e=f,f=a[2*(b+1)+1],++h<g&&e==f||(h<j?O[2*e]+=h:0!==e?(e!=d&&O[2*e]++,O[2*REP_3_6]++):10>=h?O[2*REPZ_3_10]++:O[2*REPZ_11_138]++,h=0,d=e,0===f?(g=138,j=3):e==f?(g=6,j=3):(g=7,j=4))}function k(a){n.pending_buf[n.pending++]=
a}function g(a){k(a&255);k(a>>>8&255)}function d(a,c){L>Buf_size-c?(P|=a<<L&65535,g(P),P=a>>>Buf_size-L,L+=c-Buf_size):(P|=a<<L&65535,L+=c)}function e(a,c){var b=2*a;d(c[b]&65535,c[b+1]&65535)}function h(a,c){var b,f=-1,h,g=a[1],j=0,k=7,l=4;0===g&&(k=138,l=3);for(b=0;b<=c;b++)if(h=g,g=a[2*(b+1)+1],!(++j<k&&h==g)){if(j<l){do e(h,O);while(0!==--j)}else 0!==h?(h!=f&&(e(h,O),j--),e(REP_3_6,O),d(j-3,2)):10>=j?(e(REPZ_3_10,O),d(j-3,3)):(e(REPZ_11_138,O),d(j-11,7));j=0;f=h;0===g?(k=138,l=3):h==g?(k=6,l=
3):(k=7,l=4)}}function a(){16==L?(g(P),L=P=0):8<=L&&(k(P&255),P>>>=8,L-=8)}function p(a,c){var b,d,e;n.pending_buf[fa+2*S]=a>>>8&255;n.pending_buf[fa+2*S+1]=a&255;n.pending_buf[ka+S]=c&255;S++;0===a?U[2*c]++:(la++,a--,U[2*(Tree._length_code[c]+LITERALS+1)]++,X[2*Tree.d_code(a)]++);if(0===(S&8191)&&2<M){b=8*S;d=t-Q;for(e=0;e<D_CODES;e++)b+=X[2*e]*(5+Tree.extra_dbits[e]);if(la<Math.floor(S/2)&&b>>>3<Math.floor(d/2))return!0}return S==ba-1}function j(a,c){var b,f,h=0,g,j;if(0!==S){do b=n.pending_buf[fa+
2*h]<<8&65280|n.pending_buf[fa+2*h+1]&255,f=n.pending_buf[ka+h]&255,h++,0===b?e(f,a):(g=Tree._length_code[f],e(g+LITERALS+1,a),j=Tree.extra_lbits[g],0!==j&&(f-=Tree.base_length[g],d(f,j)),b--,g=Tree.d_code(b),e(g,c),j=Tree.extra_dbits[g],0!==j&&(b-=Tree.base_dist[g],d(b,j)));while(h<S)}e(END_BLOCK,a);ga=a[2*END_BLOCK+1]}function m(){8<L?g(P):0<L&&k(P&255);L=P=0}function u(a,c,b){d((STORED_BLOCK<<1)+(b?1:0),3);m();ga=8;g(c);g(~c);n.pending_buf.set(w.subarray(a,a+c),n.pending);n.pending+=c}function c(a){var c=
0<=Q?Q:-1,e=t-Q,g,k,l=0;if(0<M){da.build_tree(n);ea.build_tree(n);b(U,da.max_code);b(X,ea.max_code);ja.build_tree(n);for(l=BL_CODES-1;3<=l&&0===O[2*Tree.bl_order[l]+1];l--);n.opt_len+=3*(l+1)+14;g=n.opt_len+3+7>>>3;k=n.static_len+3+7>>>3;k<=g&&(g=k)}else g=k=e+5;if(e+4<=g&&-1!=c)u(c,e,a);else if(k==g)d((STATIC_TREES<<1)+(a?1:0),3),j(StaticTree.static_ltree,StaticTree.static_dtree);else{d((DYN_TREES<<1)+(a?1:0),3);c=da.max_code+1;e=ea.max_code+1;l+=1;d(c-257,5);d(e-1,5);d(l-4,4);for(g=0;g<l;g++)d(O[2*
Tree.bl_order[g]+1],3);h(U,c-1);h(X,e-1);j(U,X)}f();a&&m();Q=t;x.flush_pending()}function q(){var a,c,b,d;do{d=aa-E-t;if(0===d&&0===t&&0===E)d=s;else if(-1==d)d--;else if(t>=s+s-MIN_LOOKAHEAD){w.set(w.subarray(s,s+s),0);W-=s;t-=s;Q-=s;b=a=v;do c=G[--b]&65535,G[b]=c>=s?c-s:0;while(0!==--a);b=a=s;do c=D[--b]&65535,D[b]=c>=s?c-s:0;while(0!==--a);d+=s}if(0===x.avail_in)break;a=x.read_buf(w,t+E,d);E+=a;E>=MIN_MATCH&&(B=w[t]&255,B=(B<<N^w[t+1]&255)&l)}while(E<MIN_LOOKAHEAD&&0!==x.avail_in)}function C(a){var b=
65535,d;for(b>A-5&&(b=A-5);;){if(1>=E){q();if(0===E&&a==Z_NO_FLUSH)return NeedMore;if(0===E)break}t+=E;E=0;d=Q+b;if(0===t||t>=d)if(E=t-d,t=d,c(!1),0===x.avail_out)return NeedMore;if(t-Q>=s-MIN_LOOKAHEAD&&(c(!1),0===x.avail_out))return NeedMore}c(a==Z_FINISH);return 0===x.avail_out?a==Z_FINISH?FinishStarted:NeedMore:a==Z_FINISH?FinishDone:BlockDone}function F(a){var c=Y,b=t,d,e=K,g=t>s-MIN_LOOKAHEAD?t-(s-MIN_LOOKAHEAD):0,f=ia,h=I,j=t+MAX_MATCH,k=w[b+e-1],l=w[b+e];K>=ha&&(c>>=2);f>E&&(f=E);do if(d=
a,!(w[d+e]!=l||w[d+e-1]!=k||w[d]!=w[b]||w[++d]!=w[b+1])){b+=2;d++;do;while(w[++b]==w[++d]&&w[++b]==w[++d]&&w[++b]==w[++d]&&w[++b]==w[++d]&&w[++b]==w[++d]&&w[++b]==w[++d]&&w[++b]==w[++d]&&w[++b]==w[++d]&&b<j);d=MAX_MATCH-(j-b);b=j-MAX_MATCH;if(d>e){W=a;e=d;if(d>=f)break;k=w[b+e-1];l=w[b+e]}}while((a=D[a&h]&65535)>g&&0!==--c);return e<=E?e:E}function H(a){for(var b=0,d,e;;){if(E<MIN_LOOKAHEAD){q();if(E<MIN_LOOKAHEAD&&a==Z_NO_FLUSH)return NeedMore;if(0===E)break}E>=MIN_MATCH&&(B=(B<<N^w[t+(MIN_MATCH-
1)]&255)&l,b=G[B]&65535,D[t&I]=G[B],G[B]=t);K=J;ca=W;J=MIN_MATCH-1;if(0!==b&&(K<Z&&(t-b&65535)<=s-MIN_LOOKAHEAD)&&(T!=Z_HUFFMAN_ONLY&&(J=F(b)),5>=J&&(T==Z_FILTERED||J==MIN_MATCH&&4096<t-W)))J=MIN_MATCH-1;if(K>=MIN_MATCH&&J<=K){e=t+E-MIN_MATCH;d=p(t-1-ca,K-MIN_MATCH);E-=K-1;K-=2;do++t<=e&&(B=(B<<N^w[t+(MIN_MATCH-1)]&255)&l,b=G[B]&65535,D[t&I]=G[B],G[B]=t);while(0!==--K);R=0;J=MIN_MATCH-1;t++;if(d&&(c(!1),0===x.avail_out))return NeedMore}else if(0!==R){if((d=p(0,w[t-1]&255))&&c(!1),t++,E--,0===x.avail_out)return NeedMore}else R=
1,t++,E--}0!==R&&(p(0,w[t-1]&255),R=0);c(a==Z_FINISH);return 0===x.avail_out?a==Z_FINISH?FinishStarted:NeedMore:a==Z_FINISH?FinishDone:BlockDone}var n=this,x,z,A,y,s,r,I,w,aa,D,G,B,v,V,l,N,Q,J,ca,R,t,W,E,K,Y,Z,M,T,ha,ia,U,X,O,da=new Tree,ea=new Tree,ja=new Tree;n.depth=[];var ka,ba,S,fa,la,ga,P,L;n.bl_count=[];n.heap=[];U=[];X=[];O=[];n.pqdownheap=function(a,b){for(var c=n.heap,d=c[b],e=b<<1;e<=n.heap_len;){e<n.heap_len&&smaller(a,c[e+1],c[e],n.depth)&&e++;if(smaller(a,d,c[e],n.depth))break;c[b]=
c[e];b=e;e<<=1}c[b]=d};n.deflateInit=function(a,b,c,d,e,g){d||(d=Z_DEFLATED);e||(e=DEF_MEM_LEVEL);g||(g=Z_DEFAULT_STRATEGY);a.msg=null;b==Z_DEFAULT_COMPRESSION&&(b=6);if(1>e||e>MAX_MEM_LEVEL||d!=Z_DEFLATED||9>c||15<c||0>b||9<b||0>g||g>Z_HUFFMAN_ONLY)return Z_STREAM_ERROR;a.dstate=n;r=c;s=1<<r;I=s-1;V=e+7;v=1<<V;l=v-1;N=Math.floor((V+MIN_MATCH-1)/MIN_MATCH);w=new Uint8Array(2*s);D=[];G=[];ba=1<<e+6;n.pending_buf=new Uint8Array(4*ba);A=4*ba;fa=Math.floor(ba/2);ka=3*ba;M=b;T=g;a.total_in=a.total_out=
0;a.msg=null;n.pending=0;n.pending_out=0;z=BUSY_STATE;y=Z_NO_FLUSH;da.dyn_tree=U;da.stat_desc=StaticTree.static_l_desc;ea.dyn_tree=X;ea.stat_desc=StaticTree.static_d_desc;ja.dyn_tree=O;ja.stat_desc=StaticTree.static_bl_desc;L=P=0;ga=8;f();aa=2*s;for(a=G[v-1]=0;a<v-1;a++)G[a]=0;Z=config_table[M].max_lazy;ha=config_table[M].good_length;ia=config_table[M].nice_length;Y=config_table[M].max_chain;E=Q=t=0;J=K=MIN_MATCH-1;B=R=0;return Z_OK};n.deflateEnd=function(){if(z!=INIT_STATE&&z!=BUSY_STATE&&z!=FINISH_STATE)return Z_STREAM_ERROR;
w=D=G=n.pending_buf=null;n.dstate=null;return z==BUSY_STATE?Z_DATA_ERROR:Z_OK};n.deflateParams=function(a,b,c){var d=Z_OK;b==Z_DEFAULT_COMPRESSION&&(b=6);if(0>b||9<b||0>c||c>Z_HUFFMAN_ONLY)return Z_STREAM_ERROR;config_table[M].func!=config_table[b].func&&0!==a.total_in&&(d=a.deflate(Z_PARTIAL_FLUSH));M!=b&&(M=b,Z=config_table[M].max_lazy,ha=config_table[M].good_length,ia=config_table[M].nice_length,Y=config_table[M].max_chain);T=c;return d};n.deflateSetDictionary=function(a,b,c){a=c;var d=0;if(!b||
z!=INIT_STATE)return Z_STREAM_ERROR;if(a<MIN_MATCH)return Z_OK;a>s-MIN_LOOKAHEAD&&(a=s-MIN_LOOKAHEAD,d=c-a);w.set(b.subarray(d,d+a),0);Q=t=a;B=w[0]&255;B=(B<<N^w[1]&255)&l;for(b=0;b<=a-MIN_MATCH;b++)B=(B<<N^w[b+(MIN_MATCH-1)]&255)&l,D[b&I]=G[B],G[B]=b;return Z_OK};n.deflate=function(b,g){var f,h,j;if(g>Z_FINISH||0>g)return Z_STREAM_ERROR;if(!b.next_out||!b.next_in&&0!==b.avail_in||z==FINISH_STATE&&g!=Z_FINISH)return b.msg=z_errmsg[Z_NEED_DICT-Z_STREAM_ERROR],Z_STREAM_ERROR;if(0===b.avail_out)return b.msg=
z_errmsg[Z_NEED_DICT-Z_BUF_ERROR],Z_BUF_ERROR;x=b;f=y;y=g;z==INIT_STATE&&(h=Z_DEFLATED+(r-8<<4)<<8,j=(M-1&255)>>1,3<j&&(j=3),h|=j<<6,0!==t&&(h|=PRESET_DICT),z=BUSY_STATE,h+=31-h%31,k(h>>8&255),k(h&255));if(0!==n.pending){if(x.flush_pending(),0===x.avail_out)return y=-1,Z_OK}else if(0===x.avail_in&&g<=f&&g!=Z_FINISH)return x.msg=z_errmsg[Z_NEED_DICT-Z_BUF_ERROR],Z_BUF_ERROR;if(z==FINISH_STATE&&0!==x.avail_in)return b.msg=z_errmsg[Z_NEED_DICT-Z_BUF_ERROR],Z_BUF_ERROR;if(0!==x.avail_in||0!==E||g!=Z_NO_FLUSH&&
z!=FINISH_STATE){f=-1;switch(config_table[M].func){case STORED:f=C(g);break;case FAST:a:{for(f=0;;){if(E<MIN_LOOKAHEAD){q();if(E<MIN_LOOKAHEAD&&g==Z_NO_FLUSH){f=NeedMore;break a}if(0===E)break}E>=MIN_MATCH&&(B=(B<<N^w[t+(MIN_MATCH-1)]&255)&l,f=G[B]&65535,D[t&I]=G[B],G[B]=t);0!==f&&(t-f&65535)<=s-MIN_LOOKAHEAD&&T!=Z_HUFFMAN_ONLY&&(J=F(f));if(J>=MIN_MATCH)if(h=p(t-W,J-MIN_MATCH),E-=J,J<=Z&&E>=MIN_MATCH){J--;do t++,B=(B<<N^w[t+(MIN_MATCH-1)]&255)&l,f=G[B]&65535,D[t&I]=G[B],G[B]=t;while(0!==--J);t++}else t+=
J,J=0,B=w[t]&255,B=(B<<N^w[t+1]&255)&l;else h=p(0,w[t]&255),E--,t++;if(h&&(c(!1),0===x.avail_out)){f=NeedMore;break a}}c(g==Z_FINISH);f=0===x.avail_out?g==Z_FINISH?FinishStarted:NeedMore:g==Z_FINISH?FinishDone:BlockDone}break;case SLOW:f=H(g)}if(f==FinishStarted||f==FinishDone)z=FINISH_STATE;if(f==NeedMore||f==FinishStarted)return 0===x.avail_out&&(y=-1),Z_OK;if(f==BlockDone){if(g==Z_PARTIAL_FLUSH)d(STATIC_TREES<<1,3),e(END_BLOCK,StaticTree.static_ltree),a(),9>1+ga+10-L&&(d(STATIC_TREES<<1,3),e(END_BLOCK,
StaticTree.static_ltree),a()),ga=7;else if(u(0,0,!1),g==Z_FULL_FLUSH)for(f=0;f<v;f++)G[f]=0;x.flush_pending();if(0===x.avail_out)return y=-1,Z_OK}}return g!=Z_FINISH?Z_OK:Z_STREAM_END}}function ZStream(){this.total_out=this.avail_out=this.total_in=this.avail_in=this.next_out_index=this.next_in_index=0}
ZStream.prototype={deflateInit:function(f,b){this.dstate=new Deflate;b||(b=MAX_BITS);return this.dstate.deflateInit(this,f,b)},deflate:function(f){return!this.dstate?Z_STREAM_ERROR:this.dstate.deflate(this,f)},deflateEnd:function(){if(!this.dstate)return Z_STREAM_ERROR;var f=this.dstate.deflateEnd();this.dstate=null;return f},deflateParams:function(f,b){return!this.dstate?Z_STREAM_ERROR:this.dstate.deflateParams(this,f,b)},deflateSetDictionary:function(f,b){return!this.dstate?Z_STREAM_ERROR:this.dstate.deflateSetDictionary(this,
f,b)},read_buf:function(f,b,k){var g=this.avail_in;g>k&&(g=k);if(0===g)return 0;this.avail_in-=g;f.set(this.next_in.subarray(this.next_in_index,this.next_in_index+g),b);this.next_in_index+=g;this.total_in+=g;return g},flush_pending:function(){var f=this.dstate.pending;f>this.avail_out&&(f=this.avail_out);0!==f&&(this.next_out.set(this.dstate.pending_buf.subarray(this.dstate.pending_out,this.dstate.pending_out+f),this.next_out_index),this.next_out_index+=f,this.dstate.pending_out+=f,this.total_out+=
f,this.avail_out-=f,this.dstate.pending-=f,0===this.dstate.pending&&(this.dstate.pending_out=0))}};
function Deflater(f){var b=new ZStream,k=Z_NO_FLUSH,g=new Uint8Array(512);"undefined"==typeof f&&(f=Z_DEFAULT_COMPRESSION);b.deflateInit(f);b.next_out=g;this.append=function(d,e){var f,a=[],p=0,j=0,m=0,u;if(d.length){b.next_in_index=0;b.next_in=d;b.avail_in=d.length;do{b.next_out_index=0;b.avail_out=512;f=b.deflate(k);if(f!=Z_OK)throw"deflating: "+b.msg;b.next_out_index&&(512==b.next_out_index?a.push(new Uint8Array(g)):a.push(new Uint8Array(g.subarray(0,b.next_out_index))));m+=b.next_out_index;e&&
(0<b.next_in_index&&b.next_in_index!=p)&&(e(b.next_in_index),p=b.next_in_index)}while(0<b.avail_in||0===b.avail_out);u=new Uint8Array(m);a.forEach(function(a){u.set(a,j);j+=a.length});return u}};this.flush=function(){var d,e=[],f=0,a=0,k;do{b.next_out_index=0;b.avail_out=512;d=b.deflate(Z_FINISH);if(d!=Z_STREAM_END&&d!=Z_OK)throw"deflating: "+b.msg;0<512-b.avail_out&&e.push(new Uint8Array(g.subarray(0,b.next_out_index)));a+=b.next_out_index}while(0<b.avail_in||0===b.avail_out);b.deflateEnd();k=new Uint8Array(a);
e.forEach(function(a){k.set(a,f);f+=a.length});return k}}
void function(f,b){"object"===typeof module?module.exports=b():"function"===typeof define?define(b):f.adler32cs=b()}(this,function(){var f="function"===typeof ArrayBuffer&&"function"===typeof Uint8Array,b=null,k;if(f){try{var g=require("buffer");"function"===typeof g.Buffer&&(b=g.Buffer)}catch(d){}k=function(a){return a instanceof ArrayBuffer||null!==b&&a instanceof b}}else k=function(){return!1};var e;e=null!==b?function(a){return(new b(a,"utf8")).toString("binary")}:function(a){return unescape(encodeURIComponent(a))};
var h=function(a,b){for(var d=a&65535,e=a>>>16,f=0,g=b.length;f<g;f++)d=(d+(b.charCodeAt(f)&255))%65521,e=(e+d)%65521;return(e<<16|d)>>>0},a=function(a,b){for(var d=a&65535,e=a>>>16,f=0,g=b.length;f<g;f++)d=(d+b[f])%65521,e=(e+d)%65521;return(e<<16|d)>>>0},g={},p=function(a){if(!(this instanceof p))throw new TypeError("Constructor cannot called be as a function.");if(!isFinite(a=null==a?1:+a))throw Error("First arguments needs to be a finite number.");this.checksum=a>>>0},j=p.prototype={};j.constructor=
p;var m=function(a){if(!(this instanceof p))throw new TypeError("Constructor cannot called be as a function.");if(null==a)throw Error("First argument needs to be a string.");this.checksum=h(1,a.toString())};m.prototype=j;p.from=m;m=function(a){if(!(this instanceof p))throw new TypeError("Constructor cannot called be as a function.");if(null==a)throw Error("First argument needs to be a string.");a=e(a.toString());this.checksum=h(1,a)};m.prototype=j;p.fromUtf8=m;f&&(m=function(b){if(!(this instanceof
p))throw new TypeError("Constructor cannot called be as a function.");if(!k(b))throw Error("First argument needs to be ArrayBuffer.");b=new Uint8Array(b);return this.checksum=a(1,b)},m.prototype=j,p.fromBuffer=m);j.update=function(a){if(null==a)throw Error("First argument needs to be a string.");a=a.toString();return this.checksum=h(this.checksum,a)};j.updateUtf8=function(a){if(null==a)throw Error("First argument needs to be a string.");a=e(a.toString());return this.checksum=h(this.checksum,a)};f&&
(j.updateBuffer=function(b){if(!k(b))throw Error("First argument needs to be ArrayBuffer.");b=new Uint8Array(b);return this.checksum=a(this.checksum,b)});j.clone=function(){return new u(this.checksum)};var u=g.Adler32=p;g.from=function(a){if(null==a)throw Error("First argument needs to be a string.");return h(1,a.toString())};g.fromUtf8=function(a){if(null==a)throw Error("First argument needs to be a string.");a=e(a.toString());return h(1,a)};f&&(g.fromBuffer=function(b){if(!k(b))throw Error("First argument need to be ArrayBuffer.");
b=new Uint8Array(b);return a(1,b)});return g});
/*!
 * Masonry PACKAGED v4.1.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */


!function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,z=d&&s,b=t(r.width);b!==!1&&(a.width=b+(z?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(z?0:g+E)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+E),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){"complete"==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),r=Math.min.apply(Math,o),s=o.indexOf(r),a={x:this.columnWidth*s,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[s+d]=h;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
(function() {


}).call(this);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//




//= canvasutilities
//= alert
//= canvaslayers



  
  //Δεν χρεισημοποιητε
  function popover_open(){
    //Ενεργοποιω τα popovers
    $(".bstooltip").popover({trigger: 'manual'});
    
    $( ".bstooltip" ).mouseover(function() {
      $(this).popover('show');
    });

    $( ".bstooltip" ).mouseout(function(){
      $(".popover").remove(); //.popover('hide');
    });
  }

  // This function runs every time the user scrolls the page.
  $(window).scroll(function(){
    $("#home_right").fadeIn("slow");
    // Check weather the user has scrolled down (if "scrollTop()"" is more than 0)
    if($(window).scrollTop() > 630){
   
      // If it's more than or equal to 0, show the toTop button.
      //$("#home_right").fadeIn("slow");
    }
    else {
      // If it's less than 0 (at the top), hide the toTop button.
      //$("#home_right").fadeOut("slow");
   
    }
  });

  // When the user clicks the toTop button, we want the page to scroll to the top.
  $("#home_right").mouseup(function(){
    var target = $(".navbar-default");
    if (target.length) {
      $('html,body').animate({
                    scrollTop: target.offset().top
      }, 1000);
    }
  });
 
  //Δεν χρεισημοποιητε
  function kata_click(){
    $("#myForm").scrollTo("#oti_nane", 1000); //custom animation speed
  }

  $(".label_profil").mouseup(function(){
    $(".hide_extra").scrollTo("#pane_profil_scroll", 200); //custom animation speed
  });

  //Πηγαινω κατω και ελεγχω αν ειναι ολα οκ με τις διαστασεις
  //αν το γενικο οκ ειναι true τοτε εχω πατησει διαστασεις και ολα καλα, αλλιως πρεπει να πατησω διαστασεις.
  function pane_katw_extra(pou_na_paei){
    if ( geniko_ok ){
      $(".hide_extra").show();
      $("#myForm").hide();

      var target = $(pou_na_paei);
      $(".hide_extra").scrollTo(pou_na_paei, 1000); //custom animation speed
    }
    else{
      $(".alert_geniko_ok").show();
      $("#myForm").scrollTo("#pane_diastaseis", 1000); //custom animation speed
    }
  }

  function anoigma_profil_deksia(){
    $( ".ola_ta_profil_deksia" ).show();
    $( ".ola_ta_profil_aristera" ).hide();
    $( ".ola_ta_profil_panw" ).hide();
    $( ".ola_ta_profil_katw" ).hide();
    $( ".label_profil" ).css("background-color","");//Ετσι αφαιρω την ιδιοτητα!!!
    $( ".label_profil" ).css("color","");

    $( ".ola_ta_profil_aristera_color" ).hide();
    $( ".ola_ta_profil_panw_color" ).hide();
    $( ".ola_ta_profil_katw_color" ).hide();

    if (sunolika_profil_deksia > 0 && profil_deksia_counter > 0){
        $(".ola_ta_profil_deksia_color").show();
    }
    
    $( "#deksia" ).css("background-color","#d9eaed");
    $( "#deksia" ).css("color","black");
     
  }

  function anoigma_profil_aristera(){
    $( ".ola_ta_profil_deksia" ).hide();
    $( ".ola_ta_profil_aristera" ).show();
    $( ".ola_ta_profil_panw" ).hide();
    $( ".ola_ta_profil_katw" ).hide();
    $( ".label_profil" ).css("background-color","");//Ετσι αφαιρω την ιδιοτητα!!!
    $( ".label_profil" ).css("color","");

    $( ".ola_ta_profil_deksia_color" ).hide();
    $( ".ola_ta_profil_panw_color" ).hide();
    $( ".ola_ta_profil_katw_color" ).hide();

    if (sunolika_profil_aristera > 0 && profil_aristera_counter > 0){
        $(".ola_ta_profil_aristera_color").show();
    }
   
    $( "#aristera" ).css("background-color","#d9eaed");
    $( "#aristera" ).css("color","black");  

  }

  function anoigma_profil_panw(){
    $( ".ola_ta_profil_deksia" ).hide();
    $( ".ola_ta_profil_aristera" ).hide();
    $( ".ola_ta_profil_panw" ).show();
    $( ".ola_ta_profil_katw" ).hide();
    $( ".label_profil" ).css("background-color","");//Ετσι αφαιρω την ιδιοτητα!!!
    $( ".label_profil" ).css("color","");

    $( ".ola_ta_profil_aristera_color" ).hide();
    $( ".ola_ta_profil_deksia_color" ).hide();
    $( ".ola_ta_profil_katw_color" ).hide();

    if (sunolika_profil_panw > 0 && profil_panw_counter > 0){
        $(".ola_ta_profil_panw_color").show();
    }
    
    $( "#panw" ).css("background-color","#d9eaed");
    $( "#panw" ).css("color","black");
     
  }

  function anoigma_profil_katw(){
    $( ".ola_ta_profil_deksia" ).hide();
    $( ".ola_ta_profil_aristera" ).hide();
    $( ".ola_ta_profil_panw" ).hide();
    $( ".ola_ta_profil_katw" ).show();
    $( ".label_profil" ).css("background-color","");//Ετσι αφαιρω την ιδιοτητα!!!
    $( ".label_profil" ).css("color","");

    $( ".ola_ta_profil_aristera_color" ).hide();
    $( ".ola_ta_profil_panw_color" ).hide();
    $( ".ola_ta_profil_deksia_color" ).hide();

    if (sunolika_profil_katw > 0 && profil_katw_counter > 0){
        $(".ola_ta_profil_katw_color").show();
    }
    
    $( "#katw" ).css("background-color","#d9eaed");
    $( "#katw" ).css("color","black");
     
  }

  function ypsos_a(a){
    ypsos = a;
  }

  function mikos_a(a){
    mikos = a;
  }

  
  /////// Υπολογισμος json ////////
  //Ajax για αρχικη τιμη
  function times_json(open_type_name,width,height,line_name,mesa_eksw,color_name,new_width,new_height,epikathimeno_rolo,eksoteriko_rolo,persida,tzami,profil_deksia,profil_aristera,profil_panw,profil_katw,input_deksia,input_panw,input_katw,input_aristera,typos,color_typos,odoigos,color_deksia,color_aristera,color_panw,color_katw,color_fulou,lastixo,profil_deksia_1,profil_deksia_1_arithmos,profil_deksia_2,profil_deksia_2_arithmos,profil_deksia_3,profil_deksia_3_arithmos,profil_aristera_1,profil_aristera_1_arithmos,profil_aristera_2,profil_aristera_2_arithmos,profil_aristera_3,profil_aristera_3_arithmos,profil_panw_1,profil_panw_1_arithmos,profil_panw_2,profil_panw_2_arithmos,profil_panw_3,profil_panw_3_arithmos,profil_katw_1,profil_katw_1_arithmos,profil_katw_2,profil_katw_2_arithmos,profil_katw_3,profil_katw_3_arithmos,typos_katw_1,typos_katw_1_arithmos,typos_katw_2,typos_katw_2_arithmos,typos_katw_3,typos_katw_3_arithmos,prostasia,tzami2,lastixo,pl_rol_ep,up_rol_ep,pl_rol_ek,up_rol_ek,pl_persidas,up_persidas,up_odoigou,color_epikathimenou,color_eksoterikou,color_persidas,color_odoigou,color_profil_katw,color_profil_deksia,color_profil_aristera,color_profil_panw, elegxos_w, elegxos_h,xwrisma1,xwrisma2,xwrisma_y_1,xwrisma_y_2,xwrisma3_1,xwrisma3_2,xwrisma3_3,color_eksw_name,tzami0,xwrisma4_1,xwrisma4_2,xwrisma4_3,xwrisma4_4,window_still_single,roll_rat,roll_rlt,roll_rdm,roll_pss,roll_pfm, place, rat_quantity){
    $.ajax({
      async: false,
      type:'GET',
      url:'/etic/price.json',
      dataType: "json",
      data: { open_type_name: open_type_name ,
              width: width,
              height: height,
              line_name: line_name,
              mesa_eksw: mesa_eksw,
              color_name: color_name,
              color_eksw_name: color_eksw_name,
              color_deksia: color_deksia,
              color_aristera: color_aristera,
              color_panw: color_panw,
              color_katw: color_katw,
              color_fulou: color_fulou,
              lastixo: lastixo,
              new_width: new_width,
              new_height: new_height,
              xwrisma1: xwrisma1,
              xwrisma2: xwrisma2,
              xwrisma_y_1: xwrisma_y_1,
              xwrisma_y_2: xwrisma_y_2,
              xwrisma3_1: xwrisma3_1,
              xwrisma3_2: xwrisma3_2,
              xwrisma3_3: xwrisma3_3,
              epik_rolo: epikathimeno_rolo,
              ekso_rolo: eksoteriko_rolo,
              persida: persida,
              prostasia: prostasia,
              pl_rol_ep: pl_rol_ep,
              up_rol_ep: up_rol_ep,
              pl_rol_ek: pl_rol_ek,
              up_rol_ek: up_rol_ek,
              pl_persidas: pl_persidas,
              up_persidas: up_persidas,
              up_odoigou: up_odoigou,
              tzamia0: tzami0,
              tzamia: tzami,
              tzamia2: tzami2,
              profil_deksia: profil_deksia,
              posotita_deksia_profil: input_deksia,
              profil_panw: profil_panw,
              posotita_panw_profil: input_panw,
              profil_katw: profil_katw,
              posotita_katw_profil: input_katw,
              profil_aristera: profil_aristera,
              posotita_aristera_profil: input_aristera,
              typos: typos,
              color_typos: color_typos,
              odoigos_rolou: odoigos,
              profil_deksia_1: profil_deksia_1,
              profil_deksia_1_arithmos: profil_deksia_1_arithmos,
              profil_deksia_2: profil_deksia_2,
              profil_deksia_2_arithmos: profil_deksia_2_arithmos,
              profil_deksia_3: profil_deksia_3,
              profil_deksia_3_arithmos: profil_deksia_3_arithmos ,//To ιδιο με ολα απλα βαζω μονο το ενα γιατι ειναι κοινο
              profil_aristera_1: profil_aristera_1,
              profil_aristera_1_arithmos: profil_aristera_1_arithmos,
              profil_aristera_2: profil_aristera_2,
              profil_aristera_2_arithmos: profil_aristera_2_arithmos,
              profil_aristera_3: profil_aristera_3,
              profil_aristera_3_arithmos: profil_aristera_3_arithmos,
              profil_panw_1: profil_panw_1,
              profil_panw_1_arithmos: profil_panw_1_arithmos,
              profil_panw_2: profil_panw_2,
              profil_panw_2_arithmos: profil_panw_2_arithmos,
              profil_panw_3: profil_panw_3,
              profil_panw_3_arithmos: profil_panw_3_arithmos,
              profil_katw_1: profil_katw_1,
              profil_katw_1_arithmos: profil_katw_1_arithmos,
              profil_katw_2: profil_katw_2,
              profil_katw_2_arithmos: profil_katw_2_arithmos,
              profil_katw_3: profil_katw_3,
              profil_katw_3_arithmos: profil_katw_3_arithmos,
              typos_katw_1: typos_katw_1,
              typos_katw_1_arithmos: typos_katw_1_arithmos,
              typos_katw_2: typos_katw_2,
              typos_katw_2_arithmos: typos_katw_2_arithmos,
              typos_katw_3: typos_katw_3,
              typos_katw_3_arithmos: typos_katw_3_arithmos,
              xrwma_epikathimenou: color_epikathimenou,
              xrwma_eksoterikou: color_eksoterikou,
              color_persidas: color_persidas,
              color_odoigou: color_odoigou,
              color_profil_katw: color_profil_katw,
              color_profil_deksia: color_profil_deksia,
              color_profil_aristera: color_profil_aristera,
              color_profil_panw: color_profil_panw,
              elegxos_w: elegxos_w,
              elegxos_h: elegxos_h,
              xwrisma4_1: xwrisma4_1,
              xwrisma4_2: xwrisma4_2,
              xwrisma4_3: xwrisma4_3,
	   		  xwrisma4_4: xwrisma4_4,
	  		window_still_single: window_still_single,
		  	roll_rat: roll_rat,
		  	roll_rlt: roll_rlt,
		  	roll_rdm: roll_rdm,
		  	roll_pss: roll_pss,
		  	roll_pfm: roll_pfm,
        place: place,
        rat_quantity: rat_quantity},
      success: function(data) {
        arxiki_timi = parseFloat(data.arxiki_timi);
        super_apli_timi = parseFloat(data.super_apli_timi);
        teliki_timi = parseFloat(data.teliki_timi);
        nea_timi = parseFloat(data.nea_timi);
        ep_mesa_gia_pinaka = parseFloat(data.ep_mesa_gia_pinaka);
        ep_eksw_gia_pinaka = parseFloat(data.ep_eksw_gia_pinaka);
        ep_mesa_p = parseFloat(data.ep_mesa_p);
        ep_eksw_p = parseFloat(data.ep_eksw_p);
        tm_tz_0 = parseFloat(data.tm_tz_0);
        tm_tz_1 = parseFloat(data.tm_tz_1);
        tm_tz_2 = parseFloat(data.tm_tz_2);
        tm_od = parseFloat(data.tm_od);
        tm_per = parseFloat(data.tm_per);
        tm_ep = parseFloat(data.tm_ep);
        tm_ek = parseFloat(data.tm_ek);
        tm_u_pd1 = parseFloat(data.tm_u_pd1)/1000;
        tm_u_pd2 = parseFloat(data.tm_u_pd2)/1000;
        tm_u_pd3 = parseFloat(data.tm_u_pd3)/1000;
        tm_u_pa1 = parseFloat(data.tm_u_pa1)/1000;
        tm_u_pa2 = parseFloat(data.tm_u_pa2)/1000;
        tm_u_pa3 = parseFloat(data.tm_u_pa3)/1000;
        tm_p_pp1 = parseFloat(data.tm_p_pp1)/1000;
        tm_p_pp2 = parseFloat(data.tm_p_pp2)/1000;
        tm_p_pp3 = parseFloat(data.tm_p_pp3)/1000;
        tm_p_pk1 = parseFloat(data.tm_p_pk1)/1000;
        tm_p_pk2 = parseFloat(data.tm_p_pk2)/1000;
        tm_p_pk3 = parseFloat(data.tm_p_pk3)/1000;
        tm_p_t1 = parseFloat(data.tm_p_t1)/1000;
        epikathimeno_rolo = data.epikathimeno;
        color_epikathimenou = data.color_epikathimenou
        timi_epikathimenou = data.timi_epikathimenou;
        eksoteriko_rolo = data.eksoteriko;
        color_eksoterikou = data.color_eksoterikou;
        timi_eksoterikou = data.ekso_rolo_price;
        price_color_epikathimenou = data.price_color_epikathimenou
        price_color_eksoterikou = data.price_color_eksoterikou
        pl_rol_ek = data.pl_rol_ek;
        up_rol_ek = data.up_rol_ek;
        pl_rol_ep =data.pl_rol_ep;
        up_rol_ep = data.up_rol_ep;
        pl_persidas = data.pl_persidas;
        up_persidas = data.up_persidas;
        up_odoigou = data.up_odoigou;
        persida = data.persida_name;
        color_persidas = data.col_persidas;
        persida_price = data.persida_price;
        prostasia_name = data.prostasia_name;
        prostasia_timi = data.prostasia_timi;
        window_still_name = data.window_still_name;
        window_still_timi = data.window_still_timi;

        place_name = data.place_name;
        place_timi = data.place_timi;
		
        roll_rat_name = data.roll_rat_name;
        roll_rat_timi = data.roll_rat_timi;
        roll_rlt_name = data.roll_rlt_name;
        roll_rlt_timi = data.roll_rlt_timi;
        roll_rdm_name = data.roll_rdm_name;
        roll_rdm_timi = data.roll_rdm_timi;
        roll_pss_name = data.roll_pss_name;
        roll_pss_timi = data.roll_pss_timi;
        roll_pfm_name = data.roll_pfm_name;
        roll_pfm_timi = data.roll_pfm_timi;
		
        lastixo_name = data.lastixo;
        lastixo_price = data.lastixo_price;
        tzami0_name = data.tzami0;
        tzami0_timi = data.tzami0_timi;
        tzami_name = data.tzami;
        tzami_timi = data.tzami_timi;
        tzami2_name = data.tzami2;
        tzami2_timi = data.tzami2_timi;
        profil_name = data.profil_name;
        //profil_price = data.profil_price;
        color_profil_katw = data.color_profil_katw;
        color_profil_deksia = data.color_profil_deksia;
        color_profil_aristera = data.color_profil_aristera;
        color_profil_panw = data.color_profil_panw;
        typos_name = data.typos_name;
        typos_color = data.typos_color;
        typos_price = data.typos_price;
        odoigos_name = data.odoigos_name;
        color_odoigou = data.color_odoigou;
        price_color_odoigou = data.price_color_odoigou;
        odoigos_timi = data.odoigos_timi;
        profil_deksia_1 = data.profil_name_deksia_1;
        profil_deksia_1_code = data.profil_name_deksia_1_code;
        profil_deksia_1_arithmos = data.profil_posotita_deksia_1;
        profil_price_deksia_1 = data.profil_price_deksia_1;
        profil_deksia_2 = data.profil_name_deksia_2;
        profil_deksia_2_code = data.profil_name_deksia_2_code;
        profil_deksia_2_arithmos = data.profil_posotita_deksia_2;
        profil_price_deksia_2 = data.profil_price_deksia_2;
        profil_deksia_3 = data.profil_name_deksia_3;
        profil_deksia_3_code = data.profil_name_deksia_3_code;
        profil_deksia_3_arithmos = data.profil_posotita_deksia_3;
        profil_price_deksia_3 = data.profil_price_deksia_3;
        profil_aristera_1 = data.profil_name_aristera_1;
        profil_aristera_1_code = data.profil_name_aristera_1_code;
        profil_aristera_1_arithmos = data.profil_posotita_aristera_1;
        profil_price_aristera_1 = data.profil_price_aristera_1;
        profil_aristera_2 = data.profil_name_aristera_2;
        profil_aristera_2_code = data.profil_name_aristera_2_code;
        profil_aristera_2_arithmos = data.profil_posotita_aristera_2;
        profil_price_aristera_2 = data.profil_price_aristera_2;
        profil_aristera_3 = data.profil_name_aristera_3;
        profil_aristera_3_code = data.profil_name_aristera_3_code;
        profil_aristera_3_arithmos = data.profil_posotita_aristera_3;
        profil_price_aristera_3 = data.profil_price_aristera_3;
        profil_panw_1 = data.profil_name_panw_1;
        profil_panw_1_code = data.profil_name_panw_1_code;
        profil_panw_1_arithmos = data.profil_posotita_panw_1;
        profil_price_panw_1 = data.profil_price_panw_1;
        profil_panw_2 = data.profil_name_panw_2;
        profil_panw_2_code = data.profil_name_panw_2_code;
        profil_panw_2_arithmos = data.profil_posotita_panw_2;
        profil_price_panw_2 = data.profil_price_panw_2;
        profil_panw_3 = data.profil_name_panw_3;
        profil_panw_3_code = data.profil_name_panw_3_code;
        profil_panw_3_arithmos = data.profil_posotita_panw_3;
        profil_price_panw_3 = data.profil_price_panw_3;
        profil_katw_1 = data.profil_name_katw_1;
        profil_katw_1_code = data.profil_name_katw_1_code;
        profil_katw_1_arithmos = data.profil_posotita_katw_1;
        profil_price_katw_1 = data.profil_price_katw_1;
        profil_katw_2 = data.profil_name_katw_2;
        profil_katw_2_code = data.profil_name_katw_2_code;
        profil_katw_2_arithmos = data.profil_posotita_katw_2;
        profil_price_katw_2 = data.profil_price_katw_2;
        profil_katw_3 = data.profil_name_katw_3;
        profil_katw_3_code = data.profil_name_katw_3_code;
        profil_katw_3_arithmos = data.profil_posotita_katw_3;
        profil_price_katw_3 = data.profil_price_katw_3;
        typos_katw_1 = data.typos_name_katw_1;
        typos_katw_1_code = data.typos_name_katw_1_code;
        typos_katw_1_arithmos = data.typos_posotita_katw_1;
        typos_price_katw_1 = data.typos_price_katw_1;
        typos_katw_2 = data.typos_name_katw_2;
        typos_katw_2_code = data.typos_name_katw_2_code;
        typos_katw_2_arithmos = data.typos_posotita_katw_2;
        typos_price_katw_2 = data.typos_price_katw_2;
        typos_katw_3 = data.typos_name_katw_3;
        typos_katw_3_code = data.typos_name_katw_3_code;
        typos_katw_3_arithmos = data.typos_posotita_katw_3;
        typos_price_katw_3 = data.typos_price_katw_3;
        height_mesa_meta_apo_typo = data.height_mesa_meta_apo_typo;
        odoigos_val = data.odoigos_val;
        mikos_eksw = data.mikos_eksw;
        epik_val_width = data.epik_val_width;
        epik_val_height = data.epik_val_height;
        ekso_val_width = data.ekso_val_width;
        ekso_val_height = data.ekso_val_height; 
        persida_val_width = data.persida_val_width;
        persida_val_height = data.persida_val_height;
        price_color_persidas = data.price_color_persidas;
        nea_timi_market = data.market_price;
        nea_timi_dealer = data.dealer_price;
        pososto_market = data.pososto_market;
        pososto_dealer = data.pososto_dealer;

        // Αλλαγες σε πινακακι //
        $(".super_apli_timi").text(super_apli_timi.toFixed(2).replace(".", ",")+" €");
        $(".arxiki_timi").text(arxiki_timi.toFixed(2).replace(".", ",")+" €");

        $(".teliki_timi_market").text((teliki_timi - pososto_market * teliki_timi).toFixed(2).replace(".", ",")+" €");
        $(".teliki_timi_dealer").text((teliki_timi - pososto_dealer * teliki_timi).toFixed(2).replace(".", ",")+" €");
        $(".teliki_timi").text(teliki_timi.toFixed(2).replace(".", ",")+" €");
        $(".nea_timi").text(nea_timi.toFixed(2).replace(".", ",")+"€");

        //Market and Dealer Price
        $(".nea_timi_market").text(nea_timi_market.toFixed(2).replace(".", ",")+" €");
        $(".nea_timi_dealer").text(nea_timi_dealer.toFixed(2).replace(".", ",")+" €");
        
        $(".ep_mesa").text(ep_mesa_gia_pinaka.toFixed(2).replace(".", ",")+" €");
        $(".ep_eksw").text(ep_eksw_gia_pinaka.toFixed(2).replace(".", ",")+" €");
        $(".ep_mesa_p").text(ep_mesa_p+" %");
        $(".ep_eksw_p").text(ep_eksw_p+" %");
        $(".tm_tz_0").empty();
        $(".tm_tz_0").append( ( tm_tz_0 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_tz_1").empty();
        $(".tm_tz_1").append( ( tm_tz_1 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_tz_2").empty();
        $(".tm_tz_2").append( ( tm_tz_2 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_ep").empty();
        $(".tm_ep").append( ( tm_ep ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_ek").empty();
        $(".tm_ek").append( ( tm_ek ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_per").empty();
        $(".tm_per").append( ( tm_per ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_od").empty();
        $(".tm_od").append( ( tm_od ).toFixed(2)+" <p>m"+"</p>" );
        if (timi_epikathimenou != 0){
            $(".timi_market_epikathimenou").text((timi_epikathimenou - pososto_market * timi_epikathimenou).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_epikathimenou").text((timi_epikathimenou - pososto_dealer * timi_epikathimenou).toFixed(2).replace(".", ",")+" €");
            $(".epik_show_hide").css("display","table-row");
            $(".table_epikathimeno").text(epikathimeno_rolo);
            $(".timi_epikathimenou").text(timi_epikathimenou.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_epikathimeno").text(color_epikathimenou);
            $(".table_timi_xrwma_epikathimenou").text(price_color_epikathimenou+" €");
            $(".timi_market_xrwma_epikathimenou").text((price_color_epikathimenou - pososto_market * price_color_epikathimenou).toFixed(2).replace(".", ",") +" €");
            $(".timi_dealer_xrwma_epikathimenou").text((price_color_epikathimenou - pososto_dealer * price_color_epikathimenou).toFixed(2).replace(".", ",") +" €");
            
            $(".kanoniko_platos_epikathimenou").text(mikos_eksw);
            $(".kanoniko_upsos_epikathimenou").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_rol_ep').val(epik_val_width);
            $('.up_rol_ep').val(epik_val_height);
        }
        else{
            $(".epik_show_hide").css("display","none");
        }
        if (timi_eksoterikou != 0){
            $(".timi_market_eksoterikou").text((timi_eksoterikou - pososto_market * timi_eksoterikou).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_eksoterikou").text((timi_eksoterikou - pososto_dealer * timi_eksoterikou).toFixed(2).replace(".", ",")+" €");
            $(".ekso_show_hide").css("display","table-row");
            $(".table_eksoteriko").text(eksoteriko_rolo);
            $(".timi_eksoterikou").text(timi_eksoterikou.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_eksoteriko").text(color_eksoterikou);
            $(".table_timi_xrwma_eksoterikou").text(price_color_eksoterikou+" €");
            $(".timi_market_xrwma_eksoterikou").text((price_color_eksoterikou - pososto_market * price_color_eksoterikou).toFixed(2).replace(".", ",") +" €");
            $(".timi_dealer_xrwma_eksoterikou").text((price_color_eksoterikou - pososto_dealer * price_color_eksoterikou).toFixed(2).replace(".", ",") +" €");

            $(".kanoniko_platos_eksoterikou").text(mikos_eksw);
            $(".kanoniko_upsos_eksoterikou").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_rol_ek').val(ekso_val_width);
            $('.up_rol_ek').val(ekso_val_height);
        }
        else{
            $(".ekso_show_hide").css("display","none");
        }
        if (persida_price != 0){
            $(".timi_market_persida").text((persida_price - pososto_market * persida_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_persida").text((persida_price - pososto_dealer * persida_price).toFixed(2).replace(".", ",")+" €");
            $(".persida_show_hide").css("display","table-row");
            $(".table_persida").text(persida);
            $(".timi_persida").text(persida_price.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_persida").text(color_persidas);
            $(".table_timi_xrwma_persida").text(price_color_persidas+" €");
            $(".timi_market_xrwma_persida").text((price_color_persidas - pososto_market * price_color_persidas).toFixed(2).replace(".", ",") +" €");
            $(".timi_dealer_xrwma_persida").text((price_color_persidas - pososto_dealer * price_color_persidas).toFixed(2).replace(".", ",") +" €");
            $(".kanoniko_platos_persidas").text(mikos_eksw);
            $(".kanoniko_upsos_persidas").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_persidas').val(persida_val_width);
            $('.up_persidas').val(persida_val_height);
        }
        else{
            $(".persida_show_hide").css("display","none");
        }
        if (lastixo_name !== "0"){
            $(".lastixo_show_hide").css("display","table-row");
            if ( lastixo_name === "mauro_lastixo"){
              //$(".table_lastixo").text("<%= t 'translate.black_gasket'%>");
              $(".table_lastixo_black").show();
              $(".table_lastixo_grey").hide();
            }else{
              //$(".table_lastixo").text("<%= t 'translate.grey_gasket'%>");
              $(".table_lastixo_black").hide();
              $(".table_lastixo_grey").show();
            }

            $(".timi_market_lastixo").text((lastixo_price - pososto_market * lastixo_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_lastixo").text((lastixo_price - pososto_dealer * lastixo_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_lastixo").text(lastixo_price.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".lastixo_show_hide").css("display","none");
        }
        if (true/*tzami0_timi != 0*/){
            $(".tzami0_show_hide").css("display","table-row");
            $(".table_tzami0").text(tzami0_name);
            $(".timi_tzami0").text(tzami0_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami_show_hide").css("display","none");
        }
        if (tzami_name != ""){
            $(".tzami_show_hide").css("display","table-row");
            $(".table_tzami").text(tzami_name);
            $(".timi_tzami").text(tzami_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami_show_hide").css("display","none");
        }
        if (tzami2_name != ""){
            $(".tzami2_show_hide").css("display","table-row");
            $(".table_tzami2").text(tzami2_name);
            $(".timi_tzami2").text(tzami2_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami2_show_hide").css("display","none");
        }
        if (prostasia_timi != 0){
            $(".timi_market_prostasia").text((prostasia_timi - pososto_market * prostasia_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_prostasia").text((prostasia_timi - pososto_dealer * prostasia_timi).toFixed(2).replace(".", ",")+" €");
            $(".prostasia_show_hide").css("display","table-row");
            $(".table_prostasia").text(prostasia_name);
            $(".timi_prostasia").text(prostasia_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".prostasia_show_hide").css("display","none");
        }
		
        if (window_still_timi != 0){
            $(".timi_market_window_still").text((window_still_timi - pososto_market * window_still_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_window_still").text((window_still_timi - pososto_dealer * window_still_timi).toFixed(2).replace(".", ",")+" €");
            $(".window_still_show_hide").css("display","table-row");
            $(".table_window_still").text(window_still_name);
            $(".timi_window_still").text(window_still_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".window_still_show_hide").css("display","none");
        }

        if (place_timi != 0){
            $(".timi_market_place").text((place_timi - pososto_market * place_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_place").text((place_timi - pososto_dealer * place_timi).toFixed(2).replace(".", ",")+" €");
            $(".place_show_hide").css("display","table-row");
            $(".table_place").text(place_name);
            $(".timi_place").text(place_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".place_show_hide").css("display","none");
        }
		
        if (roll_rat_timi != 0){
            $(".timi_market_roll_rat").text((roll_rat_timi - pososto_market * roll_rat_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rat").text((roll_rat_timi - pososto_dealer * roll_rat_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rat_show_hide").css("display","table-row");
            $(".table_roll_rat").text(roll_rat_name);
            $(".timi_roll_rat").text(roll_rat_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rat_show_hide").css("display","none");
		
        if (roll_rlt_timi != 0){
            $(".timi_market_roll_rlt").text((roll_rlt_timi - pososto_market * roll_rlt_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rlt").text((roll_rlt_timi - pososto_dealer * roll_rlt_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rlt_show_hide").css("display","table-row");
            $(".table_roll_rlt").text(roll_rlt_name);
            $(".timi_roll_rlt").text(roll_rlt_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rlt_show_hide").css("display","none");
		
        if (roll_rdm_timi != 0){
            $(".timi_market_roll_rdm").text((roll_rdm_timi - pososto_market * roll_rdm_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rdm").text((roll_rdm_timi - pososto_dealer * roll_rdm_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rdm_show_hide").css("display","table-row");
            $(".table_roll_rdm").text(roll_rdm_name);
            $(".timi_roll_rdm").text(roll_rdm_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rdm_show_hide").css("display","none");
		
        if (roll_pss_timi != 0){
            $(".timi_market_roll_pss").text((roll_pss_timi - pososto_market * roll_pss_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_pss").text((roll_pss_timi - pososto_dealer * roll_pss_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_pss_show_hide").css("display","table-row");
            $(".table_roll_pss").text(roll_pss_name);
            $(".timi_roll_pss").text(roll_pss_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_pss_show_hide").css("display","none");
		
        if (roll_pfm_timi != 0){
            $(".timi_market_roll_pfm").text((roll_pfm_timi - pososto_market * roll_pfm_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_pfm").text((roll_pfm_timi - pososto_dealer * roll_pfm_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_pfm_show_hide").css("display","table-row");
            $(".table_roll_pfm").text(roll_pfm_name);
            $(".timi_roll_pfm").text(roll_pfm_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_pfm_show_hide").css("display","none");
		
        if (profil_price_deksia_1 != 0){
            $(".timi_market_profil_deksia_1").text((profil_price_deksia_1 - pososto_market * profil_price_deksia_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_1").text((profil_price_deksia_1 - pososto_dealer * profil_price_deksia_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_1_show_hide").css("display","table-row");
            $(".table_profil_deksia_1").text(profil_deksia_1+", "+profil_deksia_1_code);
            $(".table_profil_deksia_1_arithmos").empty();
            $(".table_profil_deksia_1_arithmos").append( profil_deksia_1_arithmos+" -- "+( tm_u_pd1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_deksia_1_arithmos").text(profil_deksia_1_arithmos);
            $(".timi_profil_deksia_1").text(profil_price_deksia_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_1_show_hide").css("display","none");
        }
        if (profil_price_deksia_2 != 0){
            $(".timi_market_profil_deksia_2").text((profil_price_deksia_2 - pososto_market * profil_price_deksia_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_2").text((profil_price_deksia_2 - pososto_dealer * profil_price_deksia_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_2_show_hide").css("display","table-row");
            $(".table_profil_deksia_2").text(profil_deksia_2+", "+profil_deksia_2_code);
            $(".table_profil_deksia_2_arithmos").empty();
            $(".table_profil_deksia_2_arithmos").append( profil_deksia_2_arithmos+" -- "+( tm_u_pd2 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_deksia_2_arithmos").text(profil_deksia_2_arithmos);
            $(".timi_profil_deksia_2").text(profil_price_deksia_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_2_show_hide").css("display","none");
        }
        if (profil_price_deksia_3 != 0){
            $(".timi_market_profil_deksia_3").text((profil_price_deksia_3 - pososto_market * profil_price_deksia_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_3").text((profil_price_deksia_3 - pososto_dealer * profil_price_deksia_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_3_show_hide").css("display","table-row");
            $(".table_profil_deksia_3").text(profil_deksia_3+", "+profil_deksia_3_code);
            $(".table_profil_deksia_3_arithmos").empty();
            $(".table_profil_deksia_3_arithmos").append( profil_deksia_3_arithmos+" -- "+( tm_u_pd3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_deksia_3_arithmos").text(profil_deksia_3_arithmos);
            $(".timi_profil_deksia_3").text(profil_price_deksia_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_3_show_hide").css("display","none");
        }
        if (profil_price_aristera_1 != 0){
            $(".timi_market_profil_aristera_1").text((profil_price_aristera_1 - pososto_market * profil_price_aristera_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_1").text((profil_price_aristera_1 - pososto_dealer * profil_price_aristera_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_1_show_hide").css("display","table-row");
            $(".table_profil_aristera_1").text(profil_aristera_1+", "+profil_aristera_1_code);
            $(".table_profil_aristera_1_arithmos").empty();
            $(".table_profil_aristera_1_arithmos").append( profil_aristera_1_arithmos+" -- "+( tm_u_pa1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_aristera_1_arithmos").text(profil_aristera_1_arithmos);
            $(".timi_profil_aristera_1").text(profil_price_aristera_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_1_show_hide").css("display","none");
        }
        if (profil_price_aristera_2 != 0){
            $(".timi_market_profil_aristera_2").text((profil_price_aristera_2 - pososto_market * profil_price_aristera_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_2").text((profil_price_aristera_2 - pososto_dealer * profil_price_aristera_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_2_show_hide").css("display","table-row");
            $(".table_profil_aristera_2").text(profil_aristera_2+", "+profil_aristera_2_code);
            $(".table_profil_aristera_2_arithmos").empty();
            $(".table_profil_aristera_2_arithmos").append( profil_aristera_2_arithmos+" -- "+( tm_u_pa2 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_aristera_2_arithmos").text(profil_aristera_2_arithmos);
            $(".timi_profil_aristera_2").text(profil_price_aristera_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_2_show_hide").css("display","none");
        }
        if (profil_price_aristera_3 != 0){
            $(".timi_market_profil_aristera_3").text((profil_price_aristera_3 - pososto_market * profil_price_aristera_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_3").text((profil_price_aristera_3 - pososto_dealer * profil_price_aristera_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_3_show_hide").css("display","table-row");
            $(".table_profil_aristera_3").text(profil_aristera_3+", "+profil_aristera_3_code);
            $(".table_profil_aristera_3_arithmos").empty();
            $(".table_profil_aristera_3_arithmos").append( profil_aristera_3_arithmos+" -- "+( tm_u_pa3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_aristera_3_arithmos").text(profil_aristera_3_arithmos);
            $(".timi_profil_aristera_3").text(profil_price_aristera_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_3_show_hide").css("display","none");
        }
        if (profil_price_panw_1 != 0){
            $(".timi_market_profil_panw_1").text((profil_price_panw_1 - pososto_market * profil_price_panw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_1").text((profil_price_panw_1 - pososto_dealer * profil_price_panw_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_1_show_hide").css("display","table-row");
            $(".table_profil_panw_1").text(profil_panw_1+", "+profil_panw_1_code);
            $(".table_profil_panw_1_arithmos").empty();
            $(".table_profil_panw_1_arithmos").append( profil_panw_1_arithmos+" -- "+( tm_p_pp1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_panw_1_arithmos").text(profil_panw_1_arithmos);
            $(".timi_profil_panw_1").text(profil_price_panw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_1_show_hide").css("display","none");
        }
        if (profil_price_panw_2 != 0){
            $(".timi_market_profil_panw_2").text((profil_price_panw_2 - pososto_market * profil_price_panw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_2").text((profil_price_panw_2 - pososto_dealer * profil_price_panw_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_2_show_hide").css("display","table-row");
            $(".table_profil_panw_2").text(profil_panw_2+", "+profil_panw_2_code);
            $(".table_profil_panw_2_arithmos").empty();
            $(".table_profil_panw_2_arithmos").append( profil_panw_2_arithmos+" -- "+( tm_p_pp2 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_panw_2_arithmos").text(profil_panw_2_arithmos);
            $(".timi_profil_panw_2").text(profil_price_panw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_2_show_hide").css("display","none");
        }
        if (profil_price_panw_3 != 0){
            $(".timi_market_profil_panw_3").text((profil_price_panw_3 - pososto_market * profil_price_panw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_3").text((profil_price_panw_3 - pososto_dealer * profil_price_panw_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_3_show_hide").css("display","table-row");
            $(".table_profil_panw_3").text(profil_panw_3+", "+profil_panw_3_code);
            $(".table_profil_panw_3_arithmos").empty();
            $(".table_profil_panw_3_arithmos").append( profil_panw_3_arithmos+" -- "+( tm_p_pp3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_panw_3_arithmos").text(profil_panw_3_arithmos);
            $(".timi_profil_panw_3").text(profil_price_panw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_3_show_hide").css("display","none");
        }
        if (profil_price_katw_1 != 0){
            $(".timi_market_profil_katw_1").text((profil_price_katw_1 - pososto_market * profil_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_1").text((profil_price_katw_1 - pososto_dealer * profil_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_1_show_hide").css("display","table-row");
            $(".table_profil_katw_1").text(profil_katw_1+", "+profil_katw_1_code);
            $(".table_profil_katw_1_arithmos").empty();
            $(".table_profil_katw_1_arithmos").append( profil_katw_1_arithmos+" -- "+( tm_p_pk1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_katw_1_arithmos").text(profil_katw_1_arithmos);
            $(".timi_profil_katw_1").text(profil_price_katw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_1_show_hide").css("display","none");
        }
        if (profil_price_katw_2 != 0){
            $(".timi_market_profil_katw_2").text((profil_price_katw_2 - pososto_market * profil_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_2").text((profil_price_katw_2 - pososto_dealer * profil_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_2_show_hide").css("display","table-row");
            $(".table_profil_katw_2").text(profil_katw_2+", "+profil_katw_2_code);
            $(".table_profil_katw_2_arithmos").empty();
            $(".table_profil_katw_2_arithmos").append( profil_katw_2_arithmos+" -- "+( tm_p_pk2 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_katw_2_arithmos").text(profil_katw_2_arithmos);
            $(".timi_profil_katw_2").text(profil_price_katw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_2_show_hide").css("display","none");
        }
        if (profil_price_katw_3 != 0){
            $(".timi_market_profil_katw_3").text((profil_price_katw_3 - pososto_market * profil_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_3").text((profil_price_katw_3 - pososto_dealer * profil_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_3_show_hide").css("display","table-row");
            $(".table_profil_katw_3").text(profil_katw_3+", "+profil_katw_3_code);
            $(".table_profil_katw_3_arithmos").empty();
            $(".table_profil_katw_3_arithmos").append( profil_katw_3_arithmos+" -- "+( tm_p_pk3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_katw_3_arithmos").text(profil_katw_3_arithmos);
            $(".timi_profil_katw_3").text(profil_price_katw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_3_show_hide").css("display","none");
        }
        if ( (profil_price_katw_1 == 0) && (profil_price_katw_2 == 0) && (profil_price_katw_3 == 0)  ){
            $(".profil_katw_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_panw_1 == 0) && (profil_price_panw_2 == 0) && (profil_price_panw_3 == 0)  ){
            $(".profil_panw_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_deksia_1 == 0) && (profil_price_deksia_2 == 0) && (profil_price_deksia_3 == 0)  ){
            $(".profil_deksia_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_aristera_1 == 0) && (profil_price_aristera_2 == 0) && (profil_price_aristera_3 == 0)  ){
            $(".profil_aristera_xrwma_show_hide").css("display","none");
        }
        if (typos_price_katw_1 != 0){
            $(".timi_market_typos_katw_1").text((typos_price_katw_1 - pososto_market * typos_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_1").text((typos_price_katw_1 - pososto_dealer * typos_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_1_show_hide").css("display","table-row");
            $(".table_typos_katw_1").text(typos_katw_1 +", "+ typos_katw_1_code);
            $(".table_typos_katw_1_arithmos").empty();
            $(".table_typos_katw_1_arithmos").append( typos_katw_1_arithmos+" -- "+( tm_p_t1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_typos_katw_1_arithmos").text(typos_katw_1_arithmos);
            $(".timi_typos_katw_1").text(typos_price_katw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_1_show_hide").css("display","none");
        }
        if (typos_price_katw_2 != 0){
            $(".timi_market_typos_katw_2").text((typos_price_katw_2 - pososto_market * typos_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_2").text((typos_price_katw_2 - pososto_dealer * typos_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_2_show_hide").css("display","table-row");
            $(".table_typos_katw_2").text(typos_katw_2 +", "+ typos_katw_2_code);
            $(".table_typos_katw_2_arithmos").text(typos_katw_2_arithmos);
            $(".timi_typos_katw_2").text(typos_price_katw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_2_show_hide").css("display","none");
        }
        if (typos_price_katw_3 != 0){
            $(".timi_market_typos_katw_3").text((typos_price_katw_3 - pososto_market * typos_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_3").text((typos_price_katw_3 - pososto_dealer * typos_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_3_show_hide").css("display","table-row");
            $(".table_typos_katw_3").text(typos_katw_3 +", "+ typos_katw_3_code);
            $(".table_typos_katw_3_arithmos").text(typos_katw_3_arithmos);
            $(".timi_typos_katw_3").text(typos_price_katw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_3_show_hide").css("display","none");
        }
        
        if (odoigos_name != "" /*odoigos_timi != 0*/){
            $(".timi_market_odoigos").text((odoigos_timi - pososto_market * odoigos_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_odoigos").text((odoigos_timi - pososto_dealer * odoigos_timi).toFixed(2).replace(".", ",")+" €");
            $(".odoigos_show_hide").css("display","table-row");
            $(".table_odoigos").text(odoigos_name);
            $(".timi_odoigos").text(odoigos_timi.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_odoigos").text(color_odoigou);
            if(odoigos_name == "Führungsschiene nur wenn sich Masse ändern L/R" || odoigos_name == "H-Schiene Rollo mittig nur wenn sich Masse ändern") {
              $(".table_timi_xrwma_odoigos").text("0" +" €");
              $(".timi_market_xrwma_odoigos").text("0" +" €");
              $(".timi_dealer_xrwma_odoigos").text("0" +" €");
            } else {
              //timi_guide_xrwma = ( tm_od ).toFixed(2)*20;
              $(".table_timi_xrwma_odoigos").text(price_color_odoigou +" €");
              $(".timi_market_xrwma_odoigos").text((price_color_odoigou - pososto_market * price_color_odoigou).toFixed(2).replace(".", ",") +" €");
              $(".timi_dealer_xrwma_odoigos").text((price_color_odoigou - pososto_dealer * price_color_odoigou).toFixed(2).replace(".", ",") +" €");
              
            }
            
            $(".kanonika_metra_odoigou").text(height_mesa_meta_apo_typo);
            $(".up_odoigou").val(odoigos_val); 
        }
        else{
            $(".odoigos_show_hide").css("display","none");
        }
        

      },
      error: function(data) { 
      }
    });//end ejax
   }// end times_json

  function ajaxEksoterika(eksoteriko_cat) {
    // NOTE:  This function must return the value 
    //        from calling the $.ajax() method.
    return $.ajax({
      async: false,
            type:'GET',
            url:'/etic/eksoterika',
            dataType: "json",
            data: { eksoteriko_cat: eksoteriko_cat },
            success: function(data) {
              var header2 = "<h5><%= t 'extra.rola' %>: "+eksoteriko_cat_text+"</h5>" 
              $(header2).appendTo(".eksoterika_rola");
                    $.each(data, function(i, item) { //Για κάθε data που παίρνω κανω τα παρακάτο 
                        //alert(item.name);
                        //return $(".kataskevastes").html(item.name);
                        //$( "<p>item.name</p>" ).appendTo( ".kataskevastes" );
                        var div_data = "<label class=eksoterika_rola_polla id="+item.id+">"+item.name+"</label>";
                        $(div_data).appendTo(".eksoterika_rola");
                      })

                    if ( YES_ROLLA_EK == true ){
                      $(".eksoterika_rola_polla").each(function( index ) {
                        if( $( this ).attr("id") == "<%= @rolo_id %>" ){
                          $( this ).trigger('click');
                        }
                      });
                      YES_ROLLA_EK_YPO = true;
                      YES_ROLLA_EK = false;
                    }

                    if ( META_YES_ROLLA_EK == true ){
                       $(".eksoterika_rola_polla").each(function( index ) {
                          if( $( this ).attr("id") == rolo_id ){
                            $( this ).trigger('click');
                          }
                        });
                      META_YES_ROLLA_EK_YPO = true;
                      META_YES_ROLLA_EK = false;
                    }
                  },
                  error: function(data) { 
                  }
                });//end ejax
  }


//////////elefthero/////////////


function drawKASA(a, b, ar_ty, de_ty, pa_ty, ka_ty, apostasei_gia_katw_kasa_apo_panw){

      var max_width = 600;
      var max_height = 600;
      var min_width = 200; 
      var min_height = 200; 

      //Διαστημα = 5650
      var diastima_width = 6000 - 350;
      var analoga_width = a - 350;
      var pososto_width = analoga_width / diastima_width;
      var width  = ((600 - 200) * pososto_width) + 200;

      //Διαστημα = 2700
      var diastima_height = 6000 - 350;
      var analoga_height = b - 350;
      var pososto_height = analoga_height / diastima_height;
      var height  = ((600 - 200) * pososto_height) + 200;

      //alert(width);
      //alert(height);

      $(".kasa_panw").css("top",apostasei_gia_katw_kasa_apo_panw);
      $(".kasa_panw").css("width",width);
      $(".kasa_panw").css("height",pa_ty+"px");
      $(".kasa_panw").css("border","solid");
      $(".kasa_panw").css("border-color","transparent");
      $(".kasa_panw").css("border-width","1px"); 
      $(".kasa_panw").css("background-color","transparent");

      $(".kasa_aristera").css("top",apostasei_gia_katw_kasa_apo_panw);
      $(".kasa_aristera").css("height",height);
      $(".kasa_aristera").css("width",ar_ty+"px");
      $(".kasa_aristera").css("border","solid");
      $(".kasa_aristera").css("border-color","transparent");
      $(".kasa_aristera").css("border-width","1px");
      $(".kasa_aristera").css("background-color","transparent");

      $(".kasa_katw").css("position","absolute");
      $(".kasa_katw").css("left","650px");
      $(".kasa_katw").css("top",height + apostasei_gia_katw_kasa_apo_panw - ka_ty); // 7px height apostasei_gia_katw_kasa_apo_panw + $(".kasa_katw").offset().top-7
      $(".kasa_katw").css("width",width);
      $(".kasa_katw").css("height",ka_ty+"px");
      $(".kasa_katw").css("border","solid");
      $(".kasa_katw").css("border-color","transparent");
      $(".kasa_katw").css("border-width","1px");
      $(".kasa_katw").css("background-color","transparent");

      $(".kasa_deksia").css("top",apostasei_gia_katw_kasa_apo_panw);
      $(".kasa_deksia").css("position","absolute");
      $(".kasa_deksia").css("left",width + 650 - de_ty);
      $(".kasa_deksia").css("height",height);
      $(".kasa_deksia").css("width",de_ty+"px");
      $(".kasa_deksia").css("border","solid");
      $(".kasa_deksia").css("border-color","transparent");
      $(".kasa_deksia").css("border-width","1px");
      $(".kasa_deksia").css("background-color","transparent");

      var aristera_mesa_kasa = 650 + parseInt(ar_ty);
      var panw_kasa = parseInt(pa_ty);

      $(".eswteriko_kasas").css("position","absolute");
      $(".eswteriko_kasas").css("z-index","2");
      $(".eswteriko_kasas").css("left",aristera_mesa_kasa+"px");
      $(".eswteriko_kasas").css("top", apostasei_gia_katw_kasa_apo_panw + panw_kasa );
      $(".eswteriko_kasas").css("width",width - de_ty - ar_ty);
      $(".eswteriko_kasas").css("height",height - pa_ty - ka_ty);
      $(".eswteriko_kasas").attr('width', (width - de_ty - ar_ty));
      $(".eswteriko_kasas").attr('height', (height - pa_ty - ka_ty));
      $(".eswteriko_kasas").css("border","solid");
      $(".eswteriko_kasas").css("border-width","1px"); 
      //$(".eswteriko_kasas").css("background-color","#5EAFD2");
      

}



function metatropi_klimaka_kanoniko(olo, apostasi )
{

  var diastima_width = 6000 - 350;
  var analoga_width = olo - 350;
  var pososto_width = analoga_width / diastima_width;
  var meta = ((600 -200) * pososto_width) + 200;

  var mikro_pososto = (apostasi/meta);
  var width = olo*mikro_pososto;

  //alert("Όλο:"+olo);
  //alert("Μετά:"+meta);
  //alert("Πραγματικό μίκος:"+width);

  return width;
}

function diagrafi_xwrismatwn(ti_einai, poio_einai){
  Array_me_diegramena.push(poio_einai);
  if ( ti_einai == "1"){
    for(var key in pinakas_kath) {
      if ( ( pinakas_kath[key].class_1 == poio_einai ) || ( pinakas_kath[key].class_2 == poio_einai ) ){
        diagrafi_xwrismatwn(2,key);
      }
    }
  }else{
    for(var key in pinakas_ori) {
      if ( ( pinakas_ori[key].class_1 == poio_einai ) || ( pinakas_ori[key].class_2 == poio_einai ) ){
        diagrafi_xwrismatwn(1,key);
      }
    }

  }
}

  function vres_poio_kontino(offset,upsos,ori_kath,min_etsi){

    //min = 9999999999;
    $('.click').each(function(){                                                                                                                            
      var $this = $(this);  

      if ( ori_kath == "1" ){
        var apotelesma =  (parseInt(offset) - $this.offset().left) ;
        var apotelesma_2 =  (parseInt(upsos) - $this.offset().top) ;
        if ( (parseInt(apotelesma) < 0) && (parseInt(apotelesma_2) > 0) && (Math.abs(apotelesma_2) < parseInt(min_etsi)) ){
          //alert("!!");
          min_etsi = Math.abs(apotelesma_2);
          element = $(this);

          
        }

        
         /*
        }
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().left) == Math.floor(x) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
        */
      }else{
        var apotelesma = Math.abs( (parseInt(x) - $this.offset().left) );
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().top) == Math.floor(y) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
      }
      
    });

     return element; //.attr("class").split(' ')[0];

    

  }
  
  function vres_poio_kontino_kath(offset,mikos,ori_kath,min_etsi){

    //min = 9999999999;
    $('.clack').each(function(){                                                                                                                            
      var $this = $(this);  

      if ( ori_kath == "1" ){
        var apotelesma =  (parseInt(offset) - $this.offset().top) ;
        var apotelesma_2 =  (parseInt(mikos) - $this.offset().left) ;
        if ( (parseInt(apotelesma) < 0) && (parseInt(apotelesma_2) > 0) && (Math.abs(apotelesma_2) < parseInt(min_etsi)) ){
          min_etsi = Math.abs(apotelesma_2);
          element = $(this);
        }

        
         /*
        }
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().left) == Math.floor(x) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
        */
      }else{
        var apotelesma = Math.abs( (parseInt(x) - $this.offset().left) );
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().top) == Math.floor(y) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
      }
      
    });

     return element; //.attr("class").split(' ')[0];

  }

  function kane_tetragwna(a, b, apostasi, x, y, athrisma, ori_kath, width_kasas,epanalipsi_kouf){

    //Διαστημα = 5650
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    //Διαστημα = 2700
    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;

    height_zo = (apostasi/b)*(height); //upsos xwrismatos paxos 10;
    width_zo = (apostasi/a)*(width);

    if ( ori_kath == "1" ){
      var c = parseInt(y) - parseInt(height_zo) + 10 
    }else{
      var c = parseInt(x) - parseInt(width_zo) + 10
    }

    var min = 9999999999;
    $('.tetragwno').each(function(){                                                                                                                            
      var $this = $(this);  
      if ( ori_kath == "1" ){
        var apotelesma =  (parseInt(y) - $this.offset().top) ;
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().left) == Math.floor(x) ) && ( apotelesma < min ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
      }else{
        var apotelesma = Math.abs( (parseInt(x) - $this.offset().left) );
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().top) == Math.floor(y) ) && ( apotelesma < min ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
      }
      
    });

    $(".eswteriko_kasas").removeClass("tetragwno");

    
    $( "."+class_tet_kali ).removeClass( "tetragwno" );
    
    //athrisma = Ποσα χωρισματα έχω.
    //pros = Ποσα τετραγωνα έχω.

    //pros = parseInt(athrisma) + 1;
    //athrisma = athrisma * 2;
    //pros = pros + 1 ;
    counter_tetragwnwn = counter_tetragwnwn + 1;
    athrisma = counter_tetragwnwn;
    counter_tetragwnwn = counter_tetragwnwn + 1;
    pros = counter_tetragwnwn;

    ena_tetragwno = "<canvas class="+athrisma+"></canvas>"; 
    duo_tetragwno = "<canvas class="+pros+"></canvas>";
    
    $( ".elements_nea" ).append( ena_tetragwno );
    $( ".elements_nea" ).append( duo_tetragwno );

    $("."+athrisma).addClass("tetragwno");
    $("."+pros).addClass("tetragwno");


    if (ori_kath == "1"){
      $("."+athrisma).css("position","absolute");
      $("."+athrisma).css("left",apostasti_tet_apo_aristera+"px");
      $("."+athrisma).css("top", apostasi_tet_apo_panw+"px");
      $("."+athrisma).css("width",width_tetragwnou+"px");
      $("."+athrisma).css("height",y - apostasi_tet_apo_panw +"px");
      $("."+athrisma).attr('width', width_tetragwnou);
      $("."+athrisma).attr('height', (y - apostasi_tet_apo_panw));
      $("."+athrisma).css("z-index","2");
      //$("."+athrisma).css("background-color","red");
      $("."+athrisma).css("border","solid");
      $("."+athrisma).css("border-width","1px");
      $("."+athrisma);
      $("."+pros).css("position","absolute");
      $("."+pros).css("left",apostasti_tet_apo_aristera+"px");
      $("."+pros).css("top", y + width_kasas+"px");
      $("."+pros).css("width",width_tetragwnou+"px");
      $("."+pros).css("height",apostasi_tet_apo_panw + height_tetragnwnou - y - width_kasas +"px");
      $("."+pros).attr('width', width_tetragwnou);
      $("."+pros).attr('height', (apostasi_tet_apo_panw + height_tetragnwnou - y - width_kasas));
      $("."+pros).css("z-index","2");
      //$("."+pros).css("background-color","red");
      $("."+pros).css("border","solid");
      $("."+pros).css("border-width","1px");

      var canvas_kouf = $("."+athrisma);
      var class_canvas_kouf = canvas_kouf.attr('class');
      if ( ($(".mple_"+athrisma).length) && (epanalipsi_kouf == "1")){
        var b = $(".mple_"+athrisma).attr('class').split(' ')[1];
        var c = $(".mple_"+athrisma).attr('class').split(' ')[2];
        var d = $(".mple_"+athrisma).attr('class').split(' ')[3];

        $(".mple_"+athrisma).remove();
        $(".mple2_"+athrisma).remove();
        var canvas_kouf = $("."+athrisma)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        kane_koufwmata(athrisma, b, c, d);
      }
      if ( ($(".mple_"+pros).length) && (epanalipsi_kouf == "1")){

        var canvas_kouf = $("."+pros);
        var class_canvas_kouf = canvas_kouf.attr('class');
        var b = $(".mple_"+pros).attr('class').split(' ')[1];
        var c = $(".mple_"+pros).attr('class').split(' ')[2];
        var d = $(".mple_"+pros).attr('class').split(' ')[3];

        $(".mple_"+pros).remove();
        $(".mple2_"+pros).remove();
        var canvas_kouf = $("."+pros)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        kane_koufwmata(pros, b, c, d);

        //Gia meta apo diagrafei xwrismatos
        //$(".mple_"+pros).show();
        //$(".mple2_"+pros).show();
        //$(".mple_"+athrisma).show();
        //$(".mple2_"+athrisma).show();
      }
  
    }else{
      $("."+athrisma).css("position","absolute");
      $("."+athrisma).css("left",apostasti_tet_apo_aristera+"px");
      $("."+athrisma).css("top", apostasi_tet_apo_panw+"px");
      $("."+athrisma).css("width",x - apostasti_tet_apo_aristera+"px");
      $("."+athrisma).css("height",height_tetragnwnou +"px");
      $("."+athrisma).attr('width', (x - apostasti_tet_apo_aristera));
      $("."+athrisma).attr('height', height_tetragnwnou);
      $("."+athrisma).css("z-index","2");
      //$("."+athrisma).css("background-color","red");
      $("."+athrisma).css("border","solid");
      $("."+athrisma).css("border-width","1px");
      $("."+athrisma);
      $("."+pros).css("position","absolute");
      $("."+pros).css("left",width_kasas+ x+"px");
      $("."+pros).css("top", apostasi_tet_apo_panw+"px");
      $("."+pros).css("width",apostasti_tet_apo_aristera + width_tetragwnou - x - width_kasas +"px");
      $("."+pros).css("height",height_tetragnwnou +"px");
      $("."+pros).attr('width', (apostasti_tet_apo_aristera + width_tetragwnou - x - width_kasas));
      $("."+pros).attr('height', height_tetragnwnou);
      $("."+pros).css("z-index","2");
      //$("."+pros).css("background-color","red");
      $("."+pros).css("border","solid");
      $("."+pros).css("border-width","1px");

      if ( ($(".mple_"+athrisma).length) && (epanalipsi_kouf == "1")){
        var b = $(".mple_"+athrisma).attr('class').split(' ')[1];
        var c = $(".mple_"+athrisma).attr('class').split(' ')[2];
        var d = $(".mple_"+athrisma).attr('class').split(' ')[3];

        $(".mple_"+athrisma).remove();
        $(".mple2_"+athrisma).remove();
        var canvas_kouf = $("."+athrisma)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        kane_koufwmata(athrisma, b, c, d);


        //Gia meta apo diagrafei xwrismatos
        //$(".mple_"+pros).show();
        //$(".mple2_"+pros).show();
        //$(".mple_"+athrisma).show();
        //$(".mple2_"+athrisma).show();
      }
      if ( ($(".mple_"+pros).length) && (epanalipsi_kouf == "1")){

        var canvas_kouf = $("."+pros);
        var class_canvas_kouf = canvas_kouf.attr('class');
        var b = $(".mple_"+pros).attr('class').split(' ')[1];
        var c = $(".mple_"+pros).attr('class').split(' ')[2];
        var d = $(".mple_"+pros).attr('class').split(' ')[3];

        $(".mple_"+pros).remove();
        $(".mple2_"+pros).remove();
        var canvas_kouf = $("."+pros)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        kane_koufwmata(pros, b, c, d);

        //Gia meta apo diagrafei xwrismatos
        //$(".mple_"+pros).show();
        //$(".mple2_"+pros).show();
        //$(".mple_"+athrisma).show();
        //$(".mple2_"+athrisma).show();
      }
    }

  }


  function kane_koufwmata(a, b, posa_hor, posa_ver){

    var canvas_kouf = $("."+a);
    var class_canvas_kouf = canvas_kouf.attr('class');
    $(".mple_"+a).remove();
    $(".mple2_"+a).remove();
    $(".elements_nea").append("<div class='mple_"+a+" "+b+" "+posa_hor+" "+posa_ver+"'></div>");
    $(".elements_nea").append("<div class='mple2_"+a+" "+b+" "+posa_hor+" "+posa_ver+"'></div>");
    //$(".elements_nea").append("<hr class=diagwnios1_"+a+">");
    //$(".elements_nea").append("<hr class=diagwnios2_"+a+">");
    //$(".elements_nea").append("<hr class=diagwnios3_"+a+">");
    //$(".elements_nea").append("<hr class=diagwnios4_"+a+">");

      if ( b === "kouf_1" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);
        $(".mple_"+a).css("position","absolute");
        $(".mple_"+a).css("left",$("."+class_canvas_kouf.split(' ')[0]).offset().left+"px");
        $(".mple_"+a).css("top", $("."+class_canvas_kouf.split(' ')[0]).offset().top+"px");
        $(".mple_"+a).css("width",$("."+class_canvas_kouf.split(' ')[0]).outerWidth()+"px");
        $(".mple_"+a).css("height",$("."+class_canvas_kouf.split(' ')[0]).outerHeight() +"px");
        $(".mple_"+a).css("z-index","1");
        $(".mple_"+a).css("background-color","white");
        $(".mple_"+a).css("border","solid");
        $(".mple_"+a).css("border-width","1px");

        $(".mple2_"+a).css("position","absolute");
        $(".mple2_"+a).css("left",$("."+class_canvas_kouf.split(' ')[0]).offset().left+ 6 +"px");
        $(".mple2_"+a).css("top", $("."+class_canvas_kouf.split(' ')[0]).offset().top+ 6 +"px");
        $(".mple2_"+a).css("width",$("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12 +"px");
        $(".mple2_"+a).css("height",$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12 +"px");
        $(".mple2_"+a).css("z-index","1");
        $(".mple2_"+a).css("background-color","#5EAFD2");
        $(".mple2_"+a).css("border","solid");
        $(".mple2_"+a).css("border-width","1px");

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2)+3);
            ctx.lineTo(6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)+3);
            ctx.lineTo(6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(6,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)+1)*3));
            ctx.lineTo(6,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,6);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,6);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,6);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,6);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,6);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,6);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }else{
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);
        $(".mple_"+a).css("position","absolute");
        $(".mple_"+a).css("left",$("."+class_canvas_kouf.split(' ')[0]).offset().left+"px");
        $(".mple_"+a).css("top", $("."+class_canvas_kouf.split(' ')[0]).offset().top+"px");
        $(".mple_"+a).css("width",$("."+class_canvas_kouf.split(' ')[0]).outerWidth()+"px");
        $(".mple_"+a).css("height",$("."+class_canvas_kouf.split(' ')[0]).outerHeight() +"px");
        $(".mple_"+a).css("z-index","1");
        $(".mple_"+a).css("background-color","white");
        $(".mple_"+a).css("border","solid");
        $(".mple_"+a).css("border-width","1px");

        $(".mple2_"+a).css("position","absolute");
        $(".mple2_"+a).css("left",$("."+class_canvas_kouf.split(' ')[0]).offset().left+ 12 +"px");
        $(".mple2_"+a).css("top", $("."+class_canvas_kouf.split(' ')[0]).offset().top+ 12 +"px");
        $(".mple2_"+a).css("width",$("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 24 +"px");
        $(".mple2_"+a).css("height",$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 24 +"px");
        $(".mple2_"+a).css("z-index","1");
        $(".mple2_"+a).css("background-color","#5EAFD2");
        $(".mple2_"+a).css("border","solid");
        $(".mple2_"+a).css("border-width","1px");

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      if ( b === "kouf_diagrafi" ){
        $(".mple_"+a).remove();
        $(".mple2_"+a).remove();
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);
      }
      if ( b === "kouf_4" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo(12,12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.lineTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.lineTo(0,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)*3;
        ctx.moveTo(0,mesi_dia_dio_gia_ment-8);
        ctx.lineTo(4,mesi_dia_dio_gia_ment-8);
        ctx.lineTo(4,mesi_dia_dio_gia_ment+8);
        ctx.lineTo(0,mesi_dia_dio_gia_ment+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();      

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      if ( b === "kouf_6" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo(12,12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.lineTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        //ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        //ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.lineTo(0,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)*3;
        ctx.moveTo(0,mesi_dia_dio_gia_ment-8);
        ctx.lineTo(4,mesi_dia_dio_gia_ment-8);
        ctx.lineTo(4,mesi_dia_dio_gia_ment+8);
        ctx.lineTo(0,mesi_dia_dio_gia_ment+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();    

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }

      }
      if ( b === "kouf_3" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo(12,12);
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.moveTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-14 ,2);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-14,10);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+4,10);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+4,2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-10 ,4);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-10,8);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+12,8);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+12,4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight() );
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()-4 );
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()-4 );
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight() );
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)*3;
        ctx.moveTo(mesi_dia_dio_gia_ment-8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight());
        ctx.lineTo(mesi_dia_dio_gia_ment-8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()-4);
        ctx.lineTo(mesi_dia_dio_gia_ment+8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()-4);
        ctx.lineTo(mesi_dia_dio_gia_ment+8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight());
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();    

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      if ( b === "kouf_5" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,12);
        ctx.lineTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        ctx.lineTo(12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(2 ,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo(10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo(10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.lineTo(2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo(8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo(8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)*3;
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),mesi_dia_dio_gia_ment-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,mesi_dia_dio_gia_ment-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,mesi_dia_dio_gia_ment+8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),mesi_dia_dio_gia_ment+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill(); 

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      if ( b === "kouf_7" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,12);
        ctx.lineTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        //ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        //ctx.lineTo(12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(2 ,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo(10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo(10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.lineTo(2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo(8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo(8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)*3;
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),mesi_dia_dio_gia_ment-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,mesi_dia_dio_gia_ment-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,mesi_dia_dio_gia_ment+8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),mesi_dia_dio_gia_ment+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill(); 

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      
 /*
    ctx.beginPath();
    ctx.fillStyle = 'white'
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas_kouf.height);
    ctx.lineTo(canvas_kouf.width,canvas_kouf.height);
    ctx.lineTo(canvas_kouf.width,0);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = '#5EAFD2'
    ctx.lineWidth=10;
    ctx.strokeRect(30,30,canvas_kouf.width,canvas_kouf.height);
*/


    //ctx.beginPath();
    //ctx.moveTo(0,0);
    //ctx.lineTo(12,12);
    //ctx.stroke();

    //ctx.beginPath();
    //ctx.rect(0, 0, canvas_kouf.width, canvas_kouf.height);
    //ctx.fillStyle = '#5EAFD2';
    //ctx.fill();
    //ctx.lineWidth = 40;
    //ctx.strokeStyle = 'white';
    //ctx.stroke();

  }




///////// canvas /////////
  //Γενικα (δεξια, κατω, μικος, παχος)

  //Γραμμες Κάσας
  function drawKasa(olo,a,b,aristeros_typos,ar_p,ar_k,deksia_typos,de_p,de_k,panw_typos,katw_typos){
    c = document.getElementById("canvas_ele");
    ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    //ctx.setTransform(1, 0, 0, 1, 0, 0);
    //ctx.scale(0.1,0.1);

    //Analogia max width = 6000. canvas width = 1000. 1000/6000 = 0.15.
    //Analogia max height = 2900. canvas height = 1000 483/2900 = 0.15.
    var max_width = 600;
    var max_height = 600;
    var min_width = 200; //1200
    var min_height = 200; //1200

    //Διαστημα = 5650
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    //Διαστημα = 2700
    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;

    
    geniki_kasa(width,height,aristeros_typos,katw_typos,deksia_typos,panw_typos,ar_p,ar_k,de_k,de_p);//1=diamperes,2=entheti,3=apli
    
  }

  function drawDiktesMegethwn(a, b, c){

    //Διαστημα = 5650
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    //Διαστημα = 2700
    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;

    $(".kath_diktis_upsous").css("position","absolute");
    $(".kath_diktis_upsous").css("left","625px");
    $(".kath_diktis_upsous").css("top", c+"px");
    $(".kath_diktis_upsous").css("z-index","+1");
    $(".kath_diktis_upsous").css("width","3px");
    $(".kath_diktis_upsous").css("height",height);
    $(".kath_diktis_upsous").css("background-color","black");

    $(".kath_diktis_upsous_text").css("position","absolute");
    $(".kath_diktis_upsous_text").css("left","550px");
    $(".kath_diktis_upsous_text").css("top", c- 35 + (height/2)+"px");
    $(".kath_diktis_upsous_text").css("padding", "3px");
    $(".kath_diktis_upsous_text").css("-ms-transform","rotate(-90deg)");
    $(".kath_diktis_upsous_text").css("-webkit-transform","rotate(-90deg)");
    $(".kath_diktis_upsous_text").css("transform", "rotate(-90deg)");
    $(".kath_diktis_upsous_text").css("font-weight", "900");
    $(".kath_diktis_upsous_text").css("letter-spacing", "2px");
    $(".kath_diktis_upsous_text").css("background-color", "rgba(255,255,255, .7)");
    $(".kath_diktis_upsous_text").css("border", "double");

    $(".kath_diktis_upsous_panw").css("position","absolute");
    $(".kath_diktis_upsous_panw").css("left","617.5px");
    $(".kath_diktis_upsous_panw").css("top", c+"px");
    $(".kath_diktis_upsous_panw").css("z-index","+1");
    $(".kath_diktis_upsous_panw").css("width","15px");
    $(".kath_diktis_upsous_panw").css("height","3px");
    $(".kath_diktis_upsous_panw").css("background-color","black");

    $(".kath_diktis_upsous_katw").css("position","absolute");
    $(".kath_diktis_upsous_katw").css("left","617.5px");
    $(".kath_diktis_upsous_katw").css("top", height+c+"px");
    $(".kath_diktis_upsous_katw").css("z-index","+1");
    $(".kath_diktis_upsous_katw").css("width","15px");
    $(".kath_diktis_upsous_katw").css("height","3px");
    $(".kath_diktis_upsous_katw").css("background-color","black");

    $(".ori_diktis_mikous").css("position","absolute");
    $(".ori_diktis_mikous").css("left","650px");
    $(".ori_diktis_mikous").css("top", c - 25 +"px");
    $(".ori_diktis_mikous").css("z-index","+1");
    $(".ori_diktis_mikous").css("width",width +"px");
    $(".ori_diktis_mikous").css("height","3px");
    $(".ori_diktis_mikous").css("background-color","black");

    $(".ori_diktis_mikous_text").css("position","absolute");
    $(".ori_diktis_mikous_text").css("left",600 + (width/2) +"px");
    $(".ori_diktis_mikous_text").css("top", c - 75 +"px");
    $(".ori_diktis_mikous_text").css("padding", "3px");
    $(".ori_diktis_mikous_text").css("font-weight", "900");
    $(".ori_diktis_mikous_text").css("letter-spacing", "2px");
    $(".ori_diktis_mikous_text").css("background-color", "rgba(255,255,255, .7)");
    $(".ori_diktis_mikous_text").css("border", "double");

    $(".ori_diktis_mikous_aristera").css("position","absolute");
    $(".ori_diktis_mikous_aristera").css("left","650px");
    $(".ori_diktis_mikous_aristera").css("top", c - 32.5 +"px");
    $(".ori_diktis_mikous_aristera").css("z-index","+1");
    $(".ori_diktis_mikous_aristera").css("width","3px");
    $(".ori_diktis_mikous_aristera").css("height","15px");
    $(".ori_diktis_mikous_aristera").css("background-color","black");

    $(".ori_diktis_mikous_deksia").css("position","absolute");
    $(".ori_diktis_mikous_deksia").css("left",650 + width + "px");
    $(".ori_diktis_mikous_deksia").css("top", c - 32.5 + "px");
    $(".ori_diktis_mikous_deksia").css("z-index","+1");
    $(".ori_diktis_mikous_deksia").css("width","3px");
    $(".ori_diktis_mikous_deksia").css("height","15px");
    $(".ori_diktis_mikous_deksia").css("background-color","black");


  }

  function allagh_diastasewn(a,b){

  }

  function drawXwrismataOri(a,b,upsos,uparxei_kath,typos_xwr,ar_kasa,ka_kasa,de_kasa,pa_kasa, apostasei_gia_katw_kasa_apo_panw, mikos, arxi, width_kasas, arithmos_ori){

    c = document.getElementById("canvas_ele");
    ctx = c.getContext("2d");
    
    
    $( ".ori_"+arithmos_ori ).hide();
    

    
    kovete_aristera = 0;
    kovete_deksia = 0;
    //olo = 1;
    //ori = 1500;
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;
    

    height_zo = (upsos/b)*(height); //(height*height_xw)/b;
    width_zo = (mikos/a)*(width);
    //alert(height_zo);
   
    

    
    if( kovete_aristera == 1 ){
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(ar_kasa,height_zo);
      ctx.lineTo(width_zo,height_zo);
      ctx.lineTo(width_zo, height_zo + typos_xwr);
      ctx.lineTo(ar_kasa, height_zo + typos_xwr);
      ctx.lineTo(ar_kasa,height_zo);
      ctx.fill();
      ctx.stroke();
    }else if( kovete_deksia == 1){
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(width_zo,height_zo);
      ctx.lineTo(width - de_kasa,height_zo);
      ctx.lineTo(width - de_kasa, height_zo + typos_xwr);
      ctx.lineTo(width_zo, height_zo + typos_xwr);
      ctx.lineTo(width_zo,height_zo);
      ctx.fill();
      ctx.stroke();
    }else{
      //$( ".orizontio_xwrisma_1" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      //$( ".orizontio_xwrisma_1" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      //$( ".orizontio_xwrisma_1" ).css("width",width_zo - width_kasas);
      //$( ".orizontio_xwrisma_1" ).css("height",typos_xwr);
      //$( ".orizontio_xwrisma_1" ).css("border","solid");
      //$( ".orizontio_xwrisma_1" ).css("border-width","1px");
      //$( ".orizontio_xwrisma_1" ).css("background-color","white");
      //$( ".orizontio_xwrisma_1" ).css("z-index","3");
      /*
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(ar_kasa,height_zo);
      ctx.lineTo(width - de_kasa,height_zo);
      ctx.lineTo(width - de_kasa, height_zo + typos_xwr);
      ctx.lineTo(ar_kasa, height_zo + typos_xwr);
      ctx.lineTo(ar_kasa,height_zo);
      ctx.fill();
      ctx.stroke();
      */
    }

    if (arithmos_ori == "1"){
      $( ".orizontio_xwrisma_1" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_1" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_1" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_1" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_1" ).css("border","solid");
      $( ".orizontio_xwrisma_1" ).css("border-width","1px");
      $( ".orizontio_xwrisma_1" ).css("background-color","white");
      $( ".orizontio_xwrisma_1" ).css("z-index","3");
    }
    if (arithmos_ori == "2"){
      $( ".orizontio_xwrisma_2" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_2" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_2" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_2" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_2" ).css("border","solid");
      $( ".orizontio_xwrisma_2" ).css("border-width","1px");
      $( ".orizontio_xwrisma_2" ).css("background-color","white");
      $( ".orizontio_xwrisma_2" ).css("z-index","3");
    }
    if (arithmos_ori == "3"){
      $( ".orizontio_xwrisma_3" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_3" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_3" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_3" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_3" ).css("border","solid");
      $( ".orizontio_xwrisma_3" ).css("border-width","1px");
      $( ".orizontio_xwrisma_3" ).css("background-color","white");
      $( ".orizontio_xwrisma_3" ).css("z-index","3");
    }
    if (arithmos_ori == "4"){
      $( ".orizontio_xwrisma_4" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_4" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_4" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_4" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_4" ).css("border","solid");
      $( ".orizontio_xwrisma_4" ).css("border-width","1px");
      $( ".orizontio_xwrisma_4" ).css("background-color","white");
      $( ".orizontio_xwrisma_4" ).css("z-index","3");
    }
    if (arithmos_ori == "5"){
      $( ".orizontio_xwrisma_5" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_5" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_5" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_5" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_5" ).css("border","solid");
      $( ".orizontio_xwrisma_5" ).css("border-width","1px");
      $( ".orizontio_xwrisma_5" ).css("background-color","white");
      $( ".orizontio_xwrisma_5" ).css("z-index","3");
    }
    if (arithmos_ori == "6"){
      $( ".orizontio_xwrisma_6" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_6" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_6" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_6" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_6" ).css("border","solid");
      $( ".orizontio_xwrisma_6" ).css("border-width","1px");
      $( ".orizontio_xwrisma_6" ).css("background-color","white");
      $( ".orizontio_xwrisma_6" ).css("z-index","3");
    }
    


  }

  function drawXwrismataKath(a,b,mikos,uparxei_or,typos_xwr,ar_kasa,ka_kasa,de_kasa,pa_kasa, apostasi_apo_aristera, upsos, arxi, width_kasas, arithmos_kath){

    c = document.getElementById("canvas_ele");
    ctx = c.getContext("2d");

    $( ".kath_"+arithmos_kath ).hide();

    kovete_panw = 0;
    kovete_katw = 0;
    
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;

    //width_zo = (width*width_xw)/a;
    //height_zo = (height*kath)/b;

    height_zo = (upsos/b)*(height); //(height*height_xw)/b;
    width_zo = (mikos/a)*(width);


    if ( kovete_panw == 1 ){
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(width_zo,pa_kasa);
      ctx.lineTo(width_zo, height_zo);
      ctx.lineTo(width_zo + typos_xwr, height_zo);
      ctx.lineTo(width_zo + typos_xwr, pa_kasa);
      ctx.lineTo(width_zo,pa_kasa);
      ctx.fill();
      ctx.stroke();
    }else if( kovete_katw == 1 ){
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(width_zo,height_zo);
      ctx.lineTo(width_zo, height - ka_kasa);
      ctx.lineTo(width_zo + typos_xwr, height - ka_kasa);
      ctx.lineTo(width_zo + typos_xwr, height_zo);
      ctx.lineTo(width_zo,height_zo);
      ctx.fill();
      ctx.stroke();
    }else{
      //$( ".katheto_xwrisma_1" ).css("left",apostasi_apo_aristera + width_zo - 50);
      //$( ".katheto_xwrisma_1" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      //$( ".katheto_xwrisma_1" ).css("width",typos_xwr);
      //$( ".katheto_xwrisma_1" ).css("height",height_zo - width_kasas);
      //$( ".katheto_xwrisma_1" ).css("border","solid");
      //$( ".katheto_xwrisma_1" ).css("border-width","1px");
      //$( ".katheto_xwrisma_1" ).css("background-color","white");
      //$( ".katheto_xwrisma_1" ).css("z-index","+2");
      /*
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(width_zo,pa_kasa);
      ctx.lineTo(width_zo, height - ka_kasa);
      ctx.lineTo(width_zo + typos_xwr, height - ka_kasa);
      ctx.lineTo(width_zo + typos_xwr, pa_kasa);
      ctx.lineTo(width_zo,pa_kasa);
      ctx.fill();
      ctx.stroke();
      */
    }

    if ( arithmos_kath == "1"){
      $( ".katheto_xwrisma_1" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_1" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_1" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_1" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_1" ).css("border","solid");
      $( ".katheto_xwrisma_1" ).css("border-width","1px");
      $( ".katheto_xwrisma_1" ).css("background-color","white");
      $( ".katheto_xwrisma_1" ).css("z-index","3");
    }
    if ( arithmos_kath == "2"){
      $( ".katheto_xwrisma_2" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_2" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_2" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_2" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_2" ).css("border","solid");
      $( ".katheto_xwrisma_2" ).css("border-width","1px");
      $( ".katheto_xwrisma_2" ).css("background-color","white");
      $( ".katheto_xwrisma_2" ).css("z-index","3");
    }
    if ( arithmos_kath == "3"){
      $( ".katheto_xwrisma_3" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_3" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_3" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_3" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_3" ).css("border","solid");
      $( ".katheto_xwrisma_3" ).css("border-width","1px");
      $( ".katheto_xwrisma_3" ).css("background-color","white");
      $( ".katheto_xwrisma_3" ).css("z-index","3");
    }
    if ( arithmos_kath == "4"){
      $( ".katheto_xwrisma_4" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_4" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_4" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_4" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_4" ).css("border","solid");
      $( ".katheto_xwrisma_4" ).css("border-width","1px");
      $( ".katheto_xwrisma_4" ).css("background-color","white");
      $( ".katheto_xwrisma_4" ).css("z-index","3");
    }
    if ( arithmos_kath == "5"){
      $( ".katheto_xwrisma_5" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_5" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_5" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_5" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_5" ).css("border","solid");
      $( ".katheto_xwrisma_5" ).css("border-width","1px");
      $( ".katheto_xwrisma_5" ).css("background-color","white");
      $( ".katheto_xwrisma_5" ).css("z-index","3");
    }
    if ( arithmos_kath == "6"){
      $( ".katheto_xwrisma_6" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_6" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_6" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_6" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_6" ).css("border","solid");
      $( ".katheto_xwrisma_6" ).css("border-width","1px");
      $( ".katheto_xwrisma_6" ).css("background-color","white");
      $( ".katheto_xwrisma_6" ).css("z-index","3");
    }
    
    

    //alert(width);
    //alert(height);
    //alert(width);
  
    


  }

  function geniki_kasa(width,height,width_kasa_aristera,width_kasa_katw,width_kasa_deksia,width_kasa_panw,ar_p,ar_k,de_k,de_p){

      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0,height);
      ctx.lineTo(width,height);
      ctx.lineTo(width,0);
      ctx.lineTo(0,0);
      ctx.fill();
      ctx.stroke();

    //Diagonia panw aristera
    if(ar_p == 1){
      ctx.beginPath();
      ctx.moveTo(width_kasa_aristera,width_kasa_panw);
      ctx.lineTo(width_kasa_aristera,0);
      ctx.stroke();
    }else if(ar_p == 2){
      ctx.beginPath();
      ctx.moveTo(width_kasa_aristera,width_kasa_panw);
      ctx.lineTo(0,width_kasa_panw);
      ctx.stroke();
    }else{
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width_kasa_aristera,width_kasa_panw);
      ctx.stroke();
    }
    //Diagonia katw aristera
    if(ar_k == 1){
      ctx.beginPath();
      ctx.moveTo(width_kasa_aristera,height- width_kasa_katw);
      ctx.lineTo(width_kasa_aristera,height);
      ctx.stroke();
    }else if(ar_k == 2){
      ctx.beginPath();
      ctx.moveTo(width_kasa_aristera,height- width_kasa_katw);
      ctx.lineTo(0,height- width_kasa_katw);
      ctx.stroke();
    }else{
      ctx.beginPath();
      ctx.moveTo(0,height);
      ctx.lineTo(width_kasa_aristera,height - width_kasa_katw);
      ctx.stroke();
    }
    //Diagonia katw deksia
    if(de_k == 1){
      ctx.beginPath();
      ctx.moveTo(width - width_kasa_deksia,height - width_kasa_katw);
      ctx.lineTo(width - width_kasa_deksia,height);
      ctx.stroke();
    }else if(de_k == 2){
      ctx.beginPath();
      ctx.moveTo(width - width_kasa_deksia,height - width_kasa_katw);
      ctx.lineTo(width,height - width_kasa_katw);
      ctx.stroke();
    }else{
      ctx.beginPath();
      ctx.moveTo(width,height);
      ctx.lineTo(width - width_kasa_deksia,height - width_kasa_katw);
      ctx.stroke();
    }
    //Diagonia panw deksia
    if(de_p == 1){
      ctx.beginPath();
      ctx.moveTo(width - width_kasa_deksia,width_kasa_panw);
      ctx.lineTo(width - width_kasa_deksia,0);
      ctx.stroke();
    }else if(de_p == 2){
      ctx.beginPath();
      ctx.moveTo(width - width_kasa_deksia,width_kasa_panw);
      ctx.lineTo(width,width_kasa_katw);
      ctx.stroke();
    }else{
      ctx.beginPath();
      ctx.moveTo(width,0);
      ctx.lineTo(width - width_kasa_deksia,width_kasa_panw);
      ctx.stroke();
    }

  }







    //Ajax για αρχικη τιμη
  function times_json_door(open_type_name,width,height,line_name,mesa_eksw,color_name,new_width,new_height,epikathimeno_rolo,eksoteriko_rolo,persida,tzami,profil_deksia,profil_aristera,profil_panw,profil_katw,input_deksia,input_panw,input_katw,input_aristera,typos,color_typos,odoigos,color_deksia,color_aristera,color_panw,color_katw,color_fulou,lastixo,profil_deksia_1,profil_deksia_1_arithmos,profil_deksia_2,profil_deksia_2_arithmos,profil_deksia_3,profil_deksia_3_arithmos,profil_aristera_1,profil_aristera_1_arithmos,profil_aristera_2,profil_aristera_2_arithmos,profil_aristera_3,profil_aristera_3_arithmos,profil_panw_1,profil_panw_1_arithmos,profil_panw_2,profil_panw_2_arithmos,profil_panw_3,profil_panw_3_arithmos,profil_katw_1,profil_katw_1_arithmos,profil_katw_2,profil_katw_2_arithmos,profil_katw_3,profil_katw_3_arithmos,typos_katw_1,typos_katw_1_arithmos,typos_katw_2,typos_katw_2_arithmos,typos_katw_3,typos_katw_3_arithmos,prostasia,tzami2,lastixo,pl_rol_ep,up_rol_ep,pl_rol_ek,up_rol_ek,pl_persidas,up_persidas,up_odoigou,color_epikathimenou,color_eksoterikou,color_persidas,color_odoigou,color_profil_katw,color_profil_deksia,color_profil_aristera,color_profil_panw, elegxos_w, elegxos_h,xwrisma1,xwrisma2,xwrisma_y_1,xwrisma_y_2,xwrisma3_1,xwrisma3_2,xwrisma3_3,color_eksw_name,tzami0,xwrisma4_1,xwrisma4_2,xwrisma4_3,xwrisma4_4,window_still_single,roll_rat,roll_rlt,roll_rdm,roll_pss,roll_pfm, place, rat_quantity, panel, equipment){
    $.ajax({
      async: false,
      type:'GET',
      url:'/etic/price_door.json',
      dataType: "json",
      data: { open_type_name: open_type_name ,
              width: width,
              height: height,
              line_name: line_name,
              mesa_eksw: mesa_eksw,
              color_name: color_name,
              color_eksw_name: color_eksw_name,
              color_deksia: color_deksia,
              color_aristera: color_aristera,
              color_panw: color_panw,
              color_katw: color_katw,
              color_fulou: color_fulou,
              lastixo: lastixo,
              new_width: new_width,
              new_height: new_height,
              xwrisma1: xwrisma1,
              xwrisma2: xwrisma2,
              xwrisma_y_1: xwrisma_y_1,
              xwrisma_y_2: xwrisma_y_2,
              xwrisma3_1: xwrisma3_1,
              xwrisma3_2: xwrisma3_2,
              xwrisma3_3: xwrisma3_3,
              epik_rolo: epikathimeno_rolo,
              ekso_rolo: eksoteriko_rolo,
              persida: persida,
              prostasia: prostasia,
              pl_rol_ep: pl_rol_ep,
              up_rol_ep: up_rol_ep,
              pl_rol_ek: pl_rol_ek,
              up_rol_ek: up_rol_ek,
              pl_persidas: pl_persidas,
              up_persidas: up_persidas,
              up_odoigou: up_odoigou,
              tzamia0: tzami0,
              tzamia: tzami,
              tzamia2: tzami2,
              profil_deksia: profil_deksia,
              posotita_deksia_profil: input_deksia,
              profil_panw: profil_panw,
              posotita_panw_profil: input_panw,
              profil_katw: profil_katw,
              posotita_katw_profil: input_katw,
              profil_aristera: profil_aristera,
              posotita_aristera_profil: input_aristera,
              typos: typos,
              color_typos: color_typos,
              odoigos_rolou: odoigos,
              profil_deksia_1: profil_deksia_1,
              profil_deksia_1_arithmos: profil_deksia_1_arithmos,
              profil_deksia_2: profil_deksia_2,
              profil_deksia_2_arithmos: profil_deksia_2_arithmos,
              profil_deksia_3: profil_deksia_3,
              profil_deksia_3_arithmos: profil_deksia_3_arithmos ,//To ιδιο με ολα απλα βαζω μονο το ενα γιατι ειναι κοινο
              profil_aristera_1: profil_aristera_1,
              profil_aristera_1_arithmos: profil_aristera_1_arithmos,
              profil_aristera_2: profil_aristera_2,
              profil_aristera_2_arithmos: profil_aristera_2_arithmos,
              profil_aristera_3: profil_aristera_3,
              profil_aristera_3_arithmos: profil_aristera_3_arithmos,
              profil_panw_1: profil_panw_1,
              profil_panw_1_arithmos: profil_panw_1_arithmos,
              profil_panw_2: profil_panw_2,
              profil_panw_2_arithmos: profil_panw_2_arithmos,
              profil_panw_3: profil_panw_3,
              profil_panw_3_arithmos: profil_panw_3_arithmos,
              profil_katw_1: profil_katw_1,
              profil_katw_1_arithmos: profil_katw_1_arithmos,
              profil_katw_2: profil_katw_2,
              profil_katw_2_arithmos: profil_katw_2_arithmos,
              profil_katw_3: profil_katw_3,
              profil_katw_3_arithmos: profil_katw_3_arithmos,
              typos_katw_1: typos_katw_1,
              typos_katw_1_arithmos: typos_katw_1_arithmos,
              typos_katw_2: typos_katw_2,
              typos_katw_2_arithmos: typos_katw_2_arithmos,
              typos_katw_3: typos_katw_3,
              typos_katw_3_arithmos: typos_katw_3_arithmos,
              xrwma_epikathimenou: color_epikathimenou,
              xrwma_eksoterikou: color_eksoterikou,
              color_persidas: color_persidas,
              color_odoigou: color_odoigou,
              color_profil_katw: color_profil_katw,
              color_profil_deksia: color_profil_deksia,
              color_profil_aristera: color_profil_aristera,
              color_profil_panw: color_profil_panw,
              elegxos_w: elegxos_w,
              elegxos_h: elegxos_h,
              xwrisma4_1: xwrisma4_1,
              xwrisma4_2: xwrisma4_2,
              xwrisma4_3: xwrisma4_3,
              xwrisma4_4: xwrisma4_4,
              window_still_single: window_still_single,
              roll_rat: roll_rat,
              roll_rlt: roll_rlt,
              roll_rdm: roll_rdm,
              roll_pss: roll_pss,
              roll_pfm: roll_pfm,
              place: place,
              rat_quantity: rat_quantity,
              panel: panel,
              equipment: equipment},
      success: function(data) {
        arxiki_timi = parseFloat(data.arxiki_timi);
        super_apli_timi = parseFloat(data.super_apli_timi);
        teliki_timi = parseFloat(data.teliki_timi);
        nea_timi = parseFloat(data.nea_timi);
        ep_mesa_gia_pinaka = parseFloat(data.ep_mesa_gia_pinaka);
        ep_eksw_gia_pinaka = parseFloat(data.ep_eksw_gia_pinaka);
        ep_mesa_p = parseFloat(data.ep_mesa_p);
        ep_eksw_p = parseFloat(data.ep_eksw_p);
        tm_tz_0 = parseFloat(data.tm_tz_0);
        tm_tz_1 = parseFloat(data.tm_tz_1);
        tm_tz_2 = parseFloat(data.tm_tz_2);
        tm_od = parseFloat(data.tm_od);
        tm_per = parseFloat(data.tm_per);
        tm_ep = parseFloat(data.tm_ep);
        tm_ek = parseFloat(data.tm_ek);
        tm_u_pd1 = parseFloat(data.tm_u_pd1)/1000;
        tm_u_pd2 = parseFloat(data.tm_u_pd2)/1000;
        tm_u_pd3 = parseFloat(data.tm_u_pd3)/1000;
        tm_u_pa1 = parseFloat(data.tm_u_pa1)/1000;
        tm_u_pa2 = parseFloat(data.tm_u_pa2)/1000;
        tm_u_pa3 = parseFloat(data.tm_u_pa3)/1000;
        tm_p_pp1 = parseFloat(data.tm_p_pp1)/1000;
        tm_p_pp2 = parseFloat(data.tm_p_pp2)/1000;
        tm_p_pp3 = parseFloat(data.tm_p_pp3)/1000;
        tm_p_pk1 = parseFloat(data.tm_p_pk1)/1000;
        tm_p_pk2 = parseFloat(data.tm_p_pk2)/1000;
        tm_p_pk3 = parseFloat(data.tm_p_pk3)/1000;
        tm_p_t1 = parseFloat(data.tm_p_t1)/1000;
        epikathimeno_rolo = data.epikathimeno;
        color_epikathimenou = data.color_epikathimenou
        timi_epikathimenou = data.timi_epikathimenou;
        eksoteriko_rolo = data.eksoteriko;
        color_eksoterikou = data.color_eksoterikou;
        timi_eksoterikou = data.ekso_rolo_price;
        price_color_epikathimenou = data.price_color_epikathimenou
        price_color_eksoterikou = data.price_color_eksoterikou
        pl_rol_ek = data.pl_rol_ek;
        up_rol_ek = data.up_rol_ek;
        pl_rol_ep =data.pl_rol_ep;
        up_rol_ep = data.up_rol_ep;
        pl_persidas = data.pl_persidas;
        up_persidas = data.up_persidas;
        up_odoigou = data.up_odoigou;
        persida = data.persida_name;
        color_persidas = data.col_persidas;
        persida_price = data.persida_price;
        prostasia_name = data.prostasia_name;
        prostasia_timi = data.prostasia_timi;
        window_still_name = data.window_still_name;
        window_still_timi = data.window_still_timi;

        place_name = data.place_name;
        place_timi = data.place_timi;
        equipment_name = data.equipment_name;
        equipment_timi = data.equipment_timi;
    
        roll_rat_name = data.roll_rat_name;
        roll_rat_timi = data.roll_rat_timi;
        roll_rlt_name = data.roll_rlt_name;
        roll_rlt_timi = data.roll_rlt_timi;
        roll_rdm_name = data.roll_rdm_name;
        roll_rdm_timi = data.roll_rdm_timi;
        roll_pss_name = data.roll_pss_name;
        roll_pss_timi = data.roll_pss_timi;
        roll_pfm_name = data.roll_pfm_name;
        roll_pfm_timi = data.roll_pfm_timi;
    
        lastixo_name = data.lastixo;
        lastixo_price = data.lastixo_price;
        tzami0_name = data.tzami0;
        tzami0_timi = data.tzami0_timi;
        tzami_name = data.tzami;
        tzami_timi = data.tzami_timi;
        tzami2_name = data.tzami2;
        tzami2_timi = data.tzami2_timi;
        profil_name = data.profil_name;
        color_profil_katw = data.color_profil_katw;
        color_profil_deksia = data.color_profil_deksia;
        color_profil_aristera = data.color_profil_aristera;
        color_profil_panw = data.color_profil_panw;
        typos_name = data.typos_name;
        typos_color = data.typos_color;
        typos_price = data.typos_price;
        odoigos_name = data.odoigos_name;
        color_odoigou = data.color_odoigou;
        price_color_odoigou = data.price_color_odoigou;
        odoigos_timi = data.odoigos_timi;
        profil_deksia_1 = data.profil_name_deksia_1;
        profil_deksia_1_code = data.profil_name_deksia_1_code;
        profil_deksia_1_arithmos = data.profil_posotita_deksia_1;
        profil_price_deksia_1 = data.profil_price_deksia_1;
        profil_deksia_2 = data.profil_name_deksia_2;
        profil_deksia_2_code = data.profil_name_deksia_2_code;
        profil_deksia_2_arithmos = data.profil_posotita_deksia_2;
        profil_price_deksia_2 = data.profil_price_deksia_2;
        profil_deksia_3 = data.profil_name_deksia_3;
        profil_deksia_3_code = data.profil_name_deksia_3_code;
        profil_deksia_3_arithmos = data.profil_posotita_deksia_3;
        profil_price_deksia_3 = data.profil_price_deksia_3;
        profil_aristera_1 = data.profil_name_aristera_1;
        profil_aristera_1_code = data.profil_name_aristera_1_code;
        profil_aristera_1_arithmos = data.profil_posotita_aristera_1;
        profil_price_aristera_1 = data.profil_price_aristera_1;
        profil_aristera_2 = data.profil_name_aristera_2;
        profil_aristera_2_code = data.profil_name_aristera_2_code;
        profil_aristera_2_arithmos = data.profil_posotita_aristera_2;
        profil_price_aristera_2 = data.profil_price_aristera_2;
        profil_aristera_3 = data.profil_name_aristera_3;
        profil_aristera_3_code = data.profil_name_aristera_3_code;
        profil_aristera_3_arithmos = data.profil_posotita_aristera_3;
        profil_price_aristera_3 = data.profil_price_aristera_3;
        profil_panw_1 = data.profil_name_panw_1;
        profil_panw_1_code = data.profil_name_panw_1_code;
        profil_panw_1_arithmos = data.profil_posotita_panw_1;
        profil_price_panw_1 = data.profil_price_panw_1;
        profil_panw_2 = data.profil_name_panw_2;
        profil_panw_2_code = data.profil_name_panw_2_code;
        profil_panw_2_arithmos = data.profil_posotita_panw_2;
        profil_price_panw_2 = data.profil_price_panw_2;
        profil_panw_3 = data.profil_name_panw_3;
        profil_panw_3_code = data.profil_name_panw_3_code;
        profil_panw_3_arithmos = data.profil_posotita_panw_3;
        profil_price_panw_3 = data.profil_price_panw_3;
        profil_katw_1 = data.profil_name_katw_1;
        profil_katw_1_code = data.profil_name_katw_1_code;
        profil_katw_1_arithmos = data.profil_posotita_katw_1;
        profil_price_katw_1 = data.profil_price_katw_1;
        profil_katw_2 = data.profil_name_katw_2;
        profil_katw_2_code = data.profil_name_katw_2_code;
        profil_katw_2_arithmos = data.profil_posotita_katw_2;
        profil_price_katw_2 = data.profil_price_katw_2;
        profil_katw_3 = data.profil_name_katw_3;
        profil_katw_3_code = data.profil_name_katw_3_code;
        profil_katw_3_arithmos = data.profil_posotita_katw_3;
        profil_price_katw_3 = data.profil_price_katw_3;
        typos_katw_1 = data.typos_name_katw_1;
        typos_katw_1_code = data.typos_name_katw_1_code;
        typos_katw_1_arithmos = data.typos_posotita_katw_1;
        typos_price_katw_1 = data.typos_price_katw_1;
        typos_katw_2 = data.typos_name_katw_2;
        typos_katw_2_code = data.typos_name_katw_2_code;
        typos_katw_2_arithmos = data.typos_posotita_katw_2;
        typos_price_katw_2 = data.typos_price_katw_2;
        typos_katw_3 = data.typos_name_katw_3;
        typos_katw_3_code = data.typos_name_katw_3_code;
        typos_katw_3_arithmos = data.typos_posotita_katw_3;
        typos_price_katw_3 = data.typos_price_katw_3;
        height_mesa_meta_apo_typo = data.height_mesa_meta_apo_typo;
        odoigos_val = data.odoigos_val;
        mikos_eksw = data.mikos_eksw;
        epik_val_width = data.epik_val_width;
        epik_val_height = data.epik_val_height;
        ekso_val_width = data.ekso_val_width;
        ekso_val_height = data.ekso_val_height; 
        persida_val_width = data.persida_val_width;
        persida_val_height = data.persida_val_height;
        price_color_persidas = data.price_color_persidas;
        nea_timi_market = data.market_price;
        nea_timi_dealer = data.dealer_price;
        pososto_market = data.pososto_market;
        pososto_dealer = data.pososto_dealer;
        price_fix = data.price_fix;
        price_panel = data.price_panel;
        name_panel = data.name_panel;

        // Αλλαγες σε πινακακι //
        $(".super_apli_timi").text(super_apli_timi.toFixed(2).replace(".", ",")+" €");
        $(".arxiki_timi").text(arxiki_timi.toFixed(2).replace(".", ",")+" €");
        if (price_fix != 0){
          $(".super_fix").text(price_fix.toFixed(2).replace(".", ",")+" €");
          $(".price_fix").show();
        }
        else
          $(".price_fix").hide();

        if (price_panel != 0){
          $(".name_panel").text(name_panel);
          $(".super_panel").text(price_panel.toFixed(2).replace(".", ",")+" €");
          $(".price_panel").show();
        }
        else
          $(".price_panel").hide();

        $(".teliki_timi_market").text((teliki_timi - pososto_market * teliki_timi).toFixed(2).replace(".", ",")+" €");
        $(".teliki_timi_dealer").text((teliki_timi - pososto_dealer * teliki_timi).toFixed(2).replace(".", ",")+" €");
        $(".teliki_timi").text(teliki_timi.toFixed(2).replace(".", ",")+" €");
        $(".nea_timi").text(nea_timi.toFixed(2).replace(".", ",")+"€");

        //Market and Dealer Price
        $(".nea_timi_market").text(nea_timi_market.toFixed(2).replace(".", ",")+" €");
        $(".nea_timi_dealer").text(nea_timi_dealer.toFixed(2).replace(".", ",")+" €");
        
        $(".ep_mesa").text(ep_mesa_gia_pinaka.toFixed(2).replace(".", ",")+" €");
        $//(".ep_eksw").text(ep_eksw_gia_pinaka.toFixed(2).replace(".", ",")+" €");
        //$(".ep_mesa_p").text(ep_mesa_p+" %");
        //$(".ep_eksw_p").text(ep_eksw_p+" %");
        $(".tm_tz_0").empty();
        $(".tm_tz_0").append( ( tm_tz_0 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_tz_1").empty();
        $(".tm_tz_1").append( ( tm_tz_1 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_tz_2").empty();
        $(".tm_tz_2").append( ( tm_tz_2 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_ep").empty();
        $(".tm_ep").append( ( tm_ep ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_ek").empty();
        $(".tm_ek").append( ( tm_ek ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_per").empty();
        $(".tm_per").append( ( tm_per ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_od").empty();
        $(".tm_od").append( ( tm_od ).toFixed(2)+" <p>m"+"</p>" );
        if (timi_epikathimenou != 0){
            $(".timi_market_epikathimenou").text((timi_epikathimenou - pososto_market * timi_epikathimenou).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_epikathimenou").text((timi_epikathimenou - pososto_dealer * timi_epikathimenou).toFixed(2).replace(".", ",")+" €");
            $(".epik_show_hide").css("display","table-row");
            $(".table_epikathimeno").text(epikathimeno_rolo);
            $(".timi_epikathimenou").text(timi_epikathimenou.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_epikathimeno").text(color_epikathimenou);
            $(".table_timi_xrwma_epikathimenou").text(price_color_epikathimenou+" €");
            $(".timi_market_xrwma_epikathimenou").text((price_color_epikathimenou - pososto_market * price_color_epikathimenou).toFixed(2).replace(".", ",") +" €");
            $(".timi_dealer_xrwma_epikathimenou").text((price_color_epikathimenou - pososto_dealer * price_color_epikathimenou).toFixed(2).replace(".", ",") +" €");
            
            $(".kanoniko_platos_epikathimenou").text(mikos_eksw);
            $(".kanoniko_upsos_epikathimenou").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_rol_ep').val(epik_val_width);
            $('.up_rol_ep').val(epik_val_height);
        }
        else{
            $(".epik_show_hide").css("display","none");
        }
        if (timi_eksoterikou != 0){
            $(".timi_market_eksoterikou").text((timi_eksoterikou - pososto_market * timi_eksoterikou).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_eksoterikou").text((timi_eksoterikou - pososto_dealer * timi_eksoterikou).toFixed(2).replace(".", ",")+" €");
            $(".ekso_show_hide").css("display","table-row");
            $(".table_eksoteriko").text(eksoteriko_rolo);
            $(".timi_eksoterikou").text(timi_eksoterikou.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_eksoteriko").text(color_eksoterikou);
            $(".table_timi_xrwma_eksoterikou").text(price_color_eksoterikou+" €");
            $(".timi_market_xrwma_eksoterikou").text((price_color_eksoterikou - pososto_market * price_color_eksoterikou).toFixed(2).replace(".", ",") +" €");
            $(".timi_dealer_xrwma_eksoterikou").text((price_color_eksoterikou - pososto_dealer * price_color_eksoterikou).toFixed(2).replace(".", ",") +" €");

            $(".kanoniko_platos_eksoterikou").text(mikos_eksw);
            $(".kanoniko_upsos_eksoterikou").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_rol_ek').val(ekso_val_width);
            $('.up_rol_ek').val(ekso_val_height);
        }
        else{
            $(".ekso_show_hide").css("display","none");
        }
        if (persida_price != 0){
            $(".timi_market_persida").text((persida_price - pososto_market * persida_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_persida").text((persida_price - pososto_dealer * persida_price).toFixed(2).replace(".", ",")+" €");
            $(".persida_show_hide").css("display","table-row");
            $(".table_persida").text(persida);
            $(".timi_persida").text(persida_price.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_persida").text(color_persidas);
            $(".table_timi_xrwma_persida").text(price_color_persidas+" €");
            $(".timi_market_xrwma_persida").text((price_color_persidas - pososto_market * price_color_persidas).toFixed(2).replace(".", ",") +" €");
            $(".timi_dealer_xrwma_persida").text((price_color_persidas - pososto_dealer * price_color_persidas).toFixed(2).replace(".", ",") +" €");
            $(".kanoniko_platos_persidas").text(mikos_eksw);
            $(".kanoniko_upsos_persidas").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_persidas').val(persida_val_width);
            $('.up_persidas').val(persida_val_height);
        }
        else{
            $(".persida_show_hide").css("display","none");
        }
        if (lastixo_name !== "0"){
            $(".lastixo_show_hide").css("display","table-row");
            if ( lastixo_name === "mauro_lastixo"){
              //$(".table_lastixo").text("<%= t 'translate.black_gasket'%>");
              $(".table_lastixo_black").show();
              $(".table_lastixo_grey").hide();
            }else{
              //$(".table_lastixo").text("<%= t 'translate.grey_gasket'%>");
              $(".table_lastixo_black").hide();
              $(".table_lastixo_grey").show();
            }

            $(".timi_market_lastixo").text((lastixo_price - pososto_market * lastixo_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_lastixo").text((lastixo_price - pososto_dealer * lastixo_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_lastixo").text(lastixo_price.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".lastixo_show_hide").css("display","none");
        }
        if (tzami0_timi != 0){
            $(".tzami0_show_hide").css("display","table-row");
            $(".table_tzami0").text(tzami0_name);
            $(".timi_tzami0").text(tzami0_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami_show_hide").css("display","none");
        }
        if (tzami_name != ""){
            $(".tzami_show_hide").css("display","table-row");
            $(".table_tzami").text(tzami_name);
            $(".timi_tzami").text(tzami_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami_show_hide").css("display","none");
        }
        if (tzami2_name != ""){
            $(".tzami2_show_hide").css("display","table-row");
            $(".table_tzami2").text(tzami2_name);
            $(".timi_tzami2").text(tzami2_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami2_show_hide").css("display","none");
        }
        if (prostasia_timi != 0){
            $(".timi_market_prostasia").text((prostasia_timi - pososto_market * prostasia_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_prostasia").text((prostasia_timi - pososto_dealer * prostasia_timi).toFixed(2).replace(".", ",")+" €");
            $(".prostasia_show_hide").css("display","table-row");
            $(".table_prostasia").text(prostasia_name);
            $(".timi_prostasia").text(prostasia_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".prostasia_show_hide").css("display","none");
        }
    
        if (window_still_timi != 0){
            $(".timi_market_window_still").text((window_still_timi - pososto_market * window_still_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_window_still").text((window_still_timi - pososto_dealer * window_still_timi).toFixed(2).replace(".", ",")+" €");
            $(".window_still_show_hide").css("display","table-row");
            $(".table_window_still").text(window_still_name);
            $(".timi_window_still").text(window_still_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".window_still_show_hide").css("display","none");
        }

        $(".equipment_all_table").css("display","none");
        if (equipment_timi != 0){
          for ( var i = 0, l = equipment_timi.length; i < l; i++ ) {
            $(".equipment_show_hide"+i).css("display","table-row");
            $(".equipment_show_hide"+i+" .timi_market_equipment").text((equipment_timi[i] - pososto_market * equipment_timi[i]).toFixed(2).replace(".", ",")+" €");
            $(".equipment_show_hide"+i+" .timi_dealer_equipment").text((equipment_timi[i] - pososto_dealer * equipment_timi[i]).toFixed(2).replace(".", ",")+" €");
            $(".equipment_show_hide"+i+" .table_equipment").text(equipment_name[i]);
            $(".equipment_show_hide"+i+" .timi_equipment").text(equipment_timi[i].toFixed(2).replace(".", ",")+" €");
          }
        }
    
        if (roll_rat_timi != 0){
            $(".timi_market_roll_rat").text((roll_rat_timi - pososto_market * roll_rat_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rat").text((roll_rat_timi - pososto_dealer * roll_rat_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rat_show_hide").css("display","table-row");
            $(".table_roll_rat").text(roll_rat_name);
            $(".timi_roll_rat").text(roll_rat_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rat_show_hide").css("display","none");
    
        if (roll_rlt_timi != 0){
            $(".timi_market_roll_rlt").text((roll_rlt_timi - pososto_market * roll_rlt_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rlt").text((roll_rlt_timi - pososto_dealer * roll_rlt_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rlt_show_hide").css("display","table-row");
            $(".table_roll_rlt").text(roll_rlt_name);
            $(".timi_roll_rlt").text(roll_rlt_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rlt_show_hide").css("display","none");
    
        if (roll_rdm_timi != 0){
            $(".timi_market_roll_rdm").text((roll_rdm_timi - pososto_market * roll_rdm_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rdm").text((roll_rdm_timi - pososto_dealer * roll_rdm_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rdm_show_hide").css("display","table-row");
            $(".table_roll_rdm").text(roll_rdm_name);
            $(".timi_roll_rdm").text(roll_rdm_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rdm_show_hide").css("display","none");
    
        if (roll_pss_timi != 0){
            $(".timi_market_roll_pss").text((roll_pss_timi - pososto_market * roll_pss_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_pss").text((roll_pss_timi - pososto_dealer * roll_pss_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_pss_show_hide").css("display","table-row");
            $(".table_roll_pss").text(roll_pss_name);
            $(".timi_roll_pss").text(roll_pss_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_pss_show_hide").css("display","none");
    
        if (roll_pfm_timi != 0){
            $(".timi_market_roll_pfm").text((roll_pfm_timi - pososto_market * roll_pfm_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_pfm").text((roll_pfm_timi - pososto_dealer * roll_pfm_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_pfm_show_hide").css("display","table-row");
            $(".table_roll_pfm").text(roll_pfm_name);
            $(".timi_roll_pfm").text(roll_pfm_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_pfm_show_hide").css("display","none");
    
        if (profil_price_deksia_1 != 0){
            $(".timi_market_profil_deksia_1").text((profil_price_deksia_1 - pososto_market * profil_price_deksia_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_1").text((profil_price_deksia_1 - pososto_dealer * profil_price_deksia_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_1_show_hide").css("display","table-row");
            $(".table_profil_deksia_1").text(profil_deksia_1+", "+profil_deksia_1_code);
            $(".table_profil_deksia_1_arithmos").empty();
            $(".table_profil_deksia_1_arithmos").append( profil_deksia_1_arithmos+" -- "+( tm_u_pd1 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_deksia_1").text(profil_price_deksia_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_1_show_hide").css("display","none");
        }
        if (profil_price_deksia_2 != 0){
            $(".timi_market_profil_deksia_2").text((profil_price_deksia_2 - pososto_market * profil_price_deksia_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_2").text((profil_price_deksia_2 - pososto_dealer * profil_price_deksia_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_2_show_hide").css("display","table-row");
            $(".table_profil_deksia_2").text(profil_deksia_2+", "+profil_deksia_2_code);
            $(".table_profil_deksia_2_arithmos").empty();
            $(".table_profil_deksia_2_arithmos").append( profil_deksia_2_arithmos+" -- "+( tm_u_pd2 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_deksia_2").text(profil_price_deksia_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_2_show_hide").css("display","none");
        }
        if (profil_price_deksia_3 != 0){
            $(".timi_market_profil_deksia_3").text((profil_price_deksia_3 - pososto_market * profil_price_deksia_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_3").text((profil_price_deksia_3 - pososto_dealer * profil_price_deksia_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_3_show_hide").css("display","table-row");
            $(".table_profil_deksia_3").text(profil_deksia_3+", "+profil_deksia_3_code);
            $(".table_profil_deksia_3_arithmos").empty();
            $(".table_profil_deksia_3_arithmos").append( profil_deksia_3_arithmos+" -- "+( tm_u_pd3 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_deksia_3").text(profil_price_deksia_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_3_show_hide").css("display","none");
        }
        if (profil_price_aristera_1 != 0){
            $(".timi_market_profil_aristera_1").text((profil_price_aristera_1 - pososto_market * profil_price_aristera_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_1").text((profil_price_aristera_1 - pososto_dealer * profil_price_aristera_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_1_show_hide").css("display","table-row");
            $(".table_profil_aristera_1").text(profil_aristera_1+", "+profil_aristera_1_code);
            $(".table_profil_aristera_1_arithmos").empty();
            $(".table_profil_aristera_1_arithmos").append( profil_aristera_1_arithmos+" -- "+( tm_u_pa1 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_aristera_1").text(profil_price_aristera_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_1_show_hide").css("display","none");
        }
        if (profil_price_aristera_2 != 0){
            $(".timi_market_profil_aristera_2").text((profil_price_aristera_2 - pososto_market * profil_price_aristera_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_2").text((profil_price_aristera_2 - pososto_dealer * profil_price_aristera_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_2_show_hide").css("display","table-row");
            $(".table_profil_aristera_2").text(profil_aristera_2+", "+profil_aristera_2_code);
            $(".table_profil_aristera_2_arithmos").empty();
            $(".table_profil_aristera_2_arithmos").append( profil_aristera_2_arithmos+" -- "+( tm_u_pa2 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_aristera_2").text(profil_price_aristera_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_2_show_hide").css("display","none");
        }
        if (profil_price_aristera_3 != 0){
            $(".timi_market_profil_aristera_3").text((profil_price_aristera_3 - pososto_market * profil_price_aristera_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_3").text((profil_price_aristera_3 - pososto_dealer * profil_price_aristera_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_3_show_hide").css("display","table-row");
            $(".table_profil_aristera_3").text(profil_aristera_3+", "+profil_aristera_3_code);
            $(".table_profil_aristera_3_arithmos").empty();
            $(".table_profil_aristera_3_arithmos").append( profil_aristera_3_arithmos+" -- "+( tm_u_pa3 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_aristera_3").text(profil_price_aristera_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_3_show_hide").css("display","none");
        }
        if (profil_price_panw_1 != 0){
            $(".timi_market_profil_panw_1").text((profil_price_panw_1 - pososto_market * profil_price_panw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_1").text((profil_price_panw_1 - pososto_dealer * profil_price_panw_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_1_show_hide").css("display","table-row");
            $(".table_profil_panw_1").text(profil_panw_1+", "+profil_panw_1_code);
            $(".table_profil_panw_1_arithmos").empty();
            $(".table_profil_panw_1_arithmos").append( profil_panw_1_arithmos+" -- "+( tm_p_pp1 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_panw_1").text(profil_price_panw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_1_show_hide").css("display","none");
        }
        if (profil_price_panw_2 != 0){
            $(".timi_market_profil_panw_2").text((profil_price_panw_2 - pososto_market * profil_price_panw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_2").text((profil_price_panw_2 - pososto_dealer * profil_price_panw_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_2_show_hide").css("display","table-row");
            $(".table_profil_panw_2").text(profil_panw_2+", "+profil_panw_2_code);
            $(".table_profil_panw_2_arithmos").empty();
            $(".table_profil_panw_2_arithmos").append( profil_panw_2_arithmos+" -- "+( tm_p_pp2 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_panw_2").text(profil_price_panw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_2_show_hide").css("display","none");
        }
        if (profil_price_panw_3 != 0){
            $(".timi_market_profil_panw_3").text((profil_price_panw_3 - pososto_market * profil_price_panw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_3").text((profil_price_panw_3 - pososto_dealer * profil_price_panw_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_3_show_hide").css("display","table-row");
            $(".table_profil_panw_3").text(profil_panw_3+", "+profil_panw_3_code);
            $(".table_profil_panw_3_arithmos").empty();
            $(".table_profil_panw_3_arithmos").append( profil_panw_3_arithmos+" -- "+( tm_p_pp3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_panw_3_arithmos").text(profil_panw_3_arithmos);
            $(".timi_profil_panw_3").text(profil_price_panw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_3_show_hide").css("display","none");
        }
        if (profil_price_katw_1 != 0){
            $(".timi_market_profil_katw_1").text((profil_price_katw_1 - pososto_market * profil_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_1").text((profil_price_katw_1 - pososto_dealer * profil_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_1_show_hide").css("display","table-row");
            $(".table_profil_katw_1").text(profil_katw_1+", "+profil_katw_1_code);
            $(".table_profil_katw_1_arithmos").empty();
            $(".table_profil_katw_1_arithmos").append( profil_katw_1_arithmos+" -- "+( tm_p_pk1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_katw_1_arithmos").text(profil_katw_1_arithmos);
            $(".timi_profil_katw_1").text(profil_price_katw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_1_show_hide").css("display","none");
        }
        if (profil_price_katw_2 != 0){
            $(".timi_market_profil_katw_2").text((profil_price_katw_2 - pososto_market * profil_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_2").text((profil_price_katw_2 - pososto_dealer * profil_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_2_show_hide").css("display","table-row");
            $(".table_profil_katw_2").text(profil_katw_2+", "+profil_katw_2_code);
            $(".table_profil_katw_2_arithmos").empty();
            $(".table_profil_katw_2_arithmos").append( profil_katw_2_arithmos+" -- "+( tm_p_pk2 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_katw_2").text(profil_price_katw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_2_show_hide").css("display","none");
        }
        if (profil_price_katw_3 != 0){
            $(".timi_market_profil_katw_3").text((profil_price_katw_3 - pososto_market * profil_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_3").text((profil_price_katw_3 - pososto_dealer * profil_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_3_show_hide").css("display","table-row");
            $(".table_profil_katw_3").text(profil_katw_3+", "+profil_katw_3_code);
            $(".table_profil_katw_3_arithmos").empty();
            $(".table_profil_katw_3_arithmos").append( profil_katw_3_arithmos+" -- "+( tm_p_pk3 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_profil_katw_3").text(profil_price_katw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_3_show_hide").css("display","none");
        }
        if ( (profil_price_katw_1 == 0) && (profil_price_katw_2 == 0) && (profil_price_katw_3 == 0)  ){
            $(".profil_katw_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_panw_1 == 0) && (profil_price_panw_2 == 0) && (profil_price_panw_3 == 0)  ){
            $(".profil_panw_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_deksia_1 == 0) && (profil_price_deksia_2 == 0) && (profil_price_deksia_3 == 0)  ){
            $(".profil_deksia_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_aristera_1 == 0) && (profil_price_aristera_2 == 0) && (profil_price_aristera_3 == 0)  ){
            $(".profil_aristera_xrwma_show_hide").css("display","none");
        }
        if (typos_price_katw_1 != 0){
            $(".timi_market_typos_katw_1").text((typos_price_katw_1 - pososto_market * typos_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_1").text((typos_price_katw_1 - pososto_dealer * typos_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_1_show_hide").css("display","table-row");
            $(".table_typos_katw_1").text(typos_katw_1 +", "+ typos_katw_1_code);
            $(".table_typos_katw_1_arithmos").empty();
            $(".table_typos_katw_1_arithmos").append( typos_katw_1_arithmos+" -- "+( tm_p_t1 ).toFixed(2)+" <p>m"+"</p>" );
            $(".timi_typos_katw_1").text(typos_price_katw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_1_show_hide").css("display","none");
        }
        if (typos_price_katw_2 != 0){
            $(".timi_market_typos_katw_2").text((typos_price_katw_2 - pososto_market * typos_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_2").text((typos_price_katw_2 - pososto_dealer * typos_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_2_show_hide").css("display","table-row");
            $(".table_typos_katw_2").text(typos_katw_2 +", "+ typos_katw_2_code);
            $(".table_typos_katw_2_arithmos").text(typos_katw_2_arithmos);
            $(".timi_typos_katw_2").text(typos_price_katw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_2_show_hide").css("display","none");
        }
        if (typos_price_katw_3 != 0){
            $(".timi_market_typos_katw_3").text((typos_price_katw_3 - pososto_market * typos_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_3").text((typos_price_katw_3 - pososto_dealer * typos_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_3_show_hide").css("display","table-row");
            $(".table_typos_katw_3").text(typos_katw_3 +", "+ typos_katw_3_code);
            $(".table_typos_katw_3_arithmos").text(typos_katw_3_arithmos);
            $(".timi_typos_katw_3").text(typos_price_katw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_3_show_hide").css("display","none");
        }
        
        if (odoigos_name != ""){
            $(".timi_market_odoigos").text((odoigos_timi - pososto_market * odoigos_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_odoigos").text((odoigos_timi - pososto_dealer * odoigos_timi).toFixed(2).replace(".", ",")+" €");
            $(".odoigos_show_hide").css("display","table-row");
            $(".table_odoigos").text(odoigos_name);
            $(".timi_odoigos").text(odoigos_timi.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_odoigos").text(color_odoigou);
            if(odoigos_name == "Führungsschiene nur wenn sich Masse ändern L/R" || odoigos_name == "H-Schiene Rollo mittig nur wenn sich Masse ändern") {
              $(".table_timi_xrwma_odoigos").text("0" +" €");
              $(".timi_market_xrwma_odoigos").text("0" +" €");
              $(".timi_dealer_xrwma_odoigos").text("0" +" €");
            } else {
              $(".table_timi_xrwma_odoigos").text(price_color_odoigou +" €");
              $(".timi_market_xrwma_odoigos").text((price_color_odoigou - pososto_market * price_color_odoigou).toFixed(2).replace(".", ",") +" €");
              $(".timi_dealer_xrwma_odoigos").text((price_color_odoigou - pososto_dealer * price_color_odoigou).toFixed(2).replace(".", ",") +" €");
              
            }
            
            $(".kanonika_metra_odoigou").text(height_mesa_meta_apo_typo);
            $(".up_odoigou").val(odoigos_val); 
        }
        else{
            $(".odoigos_show_hide").css("display","none");
        }
        

      },
      error: function(data) { 
      }
    });//end ejax
   }// end times_json
;
