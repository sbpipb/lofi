webpackJsonp([0x67ef26645b2a,60335399758886],{102:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Lofi"}},allSitePage:{edges:[{node:{id:"SitePage /dev-404-page/",path:"/dev-404-page/",layout:null,context:null}},{node:{id:"SitePage /lofi-hiphop",path:"/lofi-hiphop",layout:"index",context:{title:"Lofi Beats",href:"https://soundcloud.com/parzival6/sets/lo-fi-hip-hop",soundcloudURL:"https://api.soundcloud.com/playlists/246258956"}}},{node:{id:"SitePage /future-funk",path:"/future-funk",layout:"index",context:{title:"Future Funk",href:"https://soundcloud.com/seki13/sets/vaporwave-future-funk",soundcloudURL:"https://api.soundcloud.com/playlists/248817284"}}},{node:{id:"SitePage /vhs-dreams",path:"/vhs-dreams",layout:"index",context:{title:"VHS Dreams",href:"https://soundcloud.com/user-231461939/sets/kaimyros-vaporwave-mix",soundcloudURL:"https://api.soundcloud.com/playlists/335930552"}}},{node:{id:"SitePage /",path:"/",layout:"index",context:{title:"Lofi Beats",href:"https://soundcloud.com/parzival6/sets/lo-fi-hip-hop",soundcloudURL:"https://api.soundcloud.com/playlists/246258956"}}},{node:{id:"SitePage /404/",path:"/404/",layout:"index",context:{title:null,href:null,soundcloudURL:null}}},{node:{id:"SitePage /list/",path:"/list/",layout:"index",context:{title:null,href:null,soundcloudURL:null}}},{node:{id:"SitePage /404.html",path:"/404.html",layout:"index",context:{title:null,href:null,soundcloudURL:null}}}]}},layoutContext:{}}},175:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n(1),i=r(u),a=n(189),c=r(a),l=n(102),f=r(l);e.default=function(t){return i.default.createElement(c.default,o({},t,f.default))},t.exports=e.default},91:function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function u(t,e,n){var u,f;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t))return!!c(e)&&(t=i.call(t),e=i.call(e),l(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(u=0;u<t.length;u++)if(t[u]!==e[u])return!1;return!0}try{var s=a(t),p=a(e)}catch(t){return!1}if(s.length!=p.length)return!1;for(s.sort(),p.sort(),u=s.length-1;u>=0;u--)if(s[u]!=p[u])return!1;for(u=s.length-1;u>=0;u--)if(f=s[u],!l(t[f],e[f],n))return!1;return typeof t==typeof e}var i=Array.prototype.slice,a=n(93),c=n(92),l=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:u(t,e,n))}},92:function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},93:function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},95:function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),u={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return u}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}()},103:function(t,e){function n(t){return!!t&&"object"==typeof t}function r(t,e){var n=null==t?void 0:t[e];return i(n)?n:void 0}function o(t){return u(t)&&p.call(t)==a}function u(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return null!=t&&(o(t)?T.test(f.call(t)):n(t)&&c.test(t))}var a="[object Function]",c=/^\[object .+?Constructor\]$/,l=Object.prototype,f=Function.prototype.toString,s=l.hasOwnProperty,p=l.toString,T=RegExp("^"+f.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},104:function(t,e){function n(t){return o(t)&&d.call(t,"callee")&&(!y.call(t,"callee")||E.call(t)==f)}function r(t){return null!=t&&i(t.length)&&!u(t)}function o(t){return c(t)&&r(t)}function u(t){var e=a(t)?E.call(t):"";return e==s||e==p}function i(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=l}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function c(t){return!!t&&"object"==typeof t}var l=9007199254740991,f="[object Arguments]",s="[object Function]",p="[object GeneratorFunction]",T=Object.prototype,d=T.hasOwnProperty,E=T.toString,y=T.propertyIsEnumerable;t.exports=n},105:function(t,e){function n(t){return!!t&&"object"==typeof t}function r(t,e){var n=null==t?void 0:t[e];return a(n)?n:void 0}function o(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}function u(t){return i(t)&&d.call(t)==l}function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){return null!=t&&(u(t)?E.test(p.call(t)):n(t)&&f.test(t))}var c="[object Array]",l="[object Function]",f=/^\[object .+?Constructor\]$/,s=Object.prototype,p=Function.prototype.toString,T=s.hasOwnProperty,d=s.toString,E=RegExp("^"+p.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=r(Array,"isArray"),A=9007199254740991,h=y||function(t){return n(t)&&o(t.length)&&d.call(t)==c};t.exports=h},106:function(t,e,n){function r(t){return function(e){return null==e?void 0:e[t]}}function o(t){return null!=t&&i(h(t))}function u(t,e){return t="number"==typeof t||T.test(t)?+t:-1,e=null==e?A:e,t>-1&&t%1==0&&t<e}function i(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}function a(t){for(var e=l(t),n=e.length,r=n&&t.length,o=!!r&&i(r)&&(p(t)||s(t)),a=-1,c=[];++a<n;){var f=e[a];(o&&u(f,r)||E.call(t,f))&&c.push(f)}return c}function c(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function l(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&i(e)&&(p(t)||s(t))&&e||0;for(var n=t.constructor,r=-1,o="function"==typeof n&&n.prototype===t,a=Array(e),l=e>0;++r<e;)a[r]=r+"";for(var f in t)l&&u(f,e)||"constructor"==f&&(o||!E.call(t,f))||a.push(f);return a}var f=n(103),s=n(104),p=n(105),T=/^\d+$/,d=Object.prototype,E=d.hasOwnProperty,y=f(Object,"keys"),A=9007199254740991,h=r("length"),S=y?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?a(t):c(t)?y(t):[]}:a;t.exports=S},107:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(1),s=r(f),p=n(2),T=r(p),d=n(112),E=r(d),y=n(91),A=r(y),h=n(108),S=n(40),b=function(t){var e,n;return n=e=function(e){function n(){return u(this,n),i(this,e.apply(this,arguments))}return a(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,A.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case S.TAG_NAMES.SCRIPT:case S.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case S.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,u=t.nestedChildren;return c({},r,(e={},e[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,u))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,u=t.newChildProps,i=t.nestedChildren;switch(r.type){case S.TAG_NAMES.TITLE:return c({},o,(e={},e[r.type]=i,e.titleAttributes=c({},u),e));case S.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},u)});case S.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},u)})}return c({},o,(n={},n[r.type]=c({},u),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=c({},e);return Object.keys(t).forEach(function(e){var r;n=c({},n,(r={},r[e]=t[e],r))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return s.default.Children.forEach(t,function(t){if(t&&t.props){var u=t.props,i=u.children,a=o(u,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,i),t.type){case S.TAG_NAMES.LINK:case S.TAG_NAMES.META:case S.TAG_NAMES.NOSCRIPT:case S.TAG_NAMES.SCRIPT:case S.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=o(e,["children"]),u=c({},r);return n&&(u=this.mapChildrenToProps(n,u)),s.default.createElement(t,u)},l(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(s.default.Component),e.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n},m=function(){return null},v=(0,E.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(m),_=b(v);_.renderStatic=_.rewind,e.Helmet=_,e.default=_},40:function(t,e){e.__esModule=!0;var n=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},108:function(t,e,n){(function(t){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(1),a=r(i),c=n(59),l=r(c),f=n(40),s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=A(t,f.TAG_NAMES.TITLE),n=A(t,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=A(t,f.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},T=function(t){return A(t,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return u({},t,e)},{})},E=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[f.TAG_NAMES.BASE]}).map(function(t){return t[f.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var u=r[o],i=u.toLowerCase();if(t.indexOf(i)!==-1&&n[i])return e.concat(n)}return e},[])},y=function(t,e,n){var r={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&_("Helmet: "+t+' should be of type "Array". Instead found type "'+o(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var o={};n.filter(function(t){for(var n=void 0,u=Object.keys(t),i=0;i<u.length;i++){var a=u[i],c=a.toLowerCase();e.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(n=c),e.indexOf(a)===-1||a!==f.TAG_PROPERTIES.INNER_HTML&&a!==f.TAG_PROPERTIES.CSS_TEXT&&a!==f.TAG_PROPERTIES.ITEM_PROP||(n=a)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var u=Object.keys(o),i=0;i<u.length;i++){var a=u[i],c=(0,l.default)({},r[a],o[a]);r[a]=c}return t},[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},h=function(t){return{baseTag:E([f.TAG_PROPERTIES.HREF],t),bodyAttributes:d(f.ATTRIBUTE_NAMES.BODY,t),defer:A(t,f.HELMET_PROPS.DEFER),encode:A(t,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(f.ATTRIBUTE_NAMES.HTML,t),linkTags:y(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],t),metaTags:y(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:y(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:T(t),scriptTags:y(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],t),styleTags:y(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:d(f.ATTRIBUTE_NAMES.TITLE,t)}},S=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){S(e)},0)}}(),b=function(t){return clearTimeout(t)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||S:t.requestAnimationFrame||S,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:t.cancelAnimationFrame||b,_=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},O=null,P=function(t){O&&v(O),t.defer?O=m(function(){g(t,function(){O=null})}):(g(t),O=null)},g=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,u=t.linkTags,i=t.metaTags,a=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,s=t.styleTags,p=t.title,T=t.titleAttributes;C(f.TAG_NAMES.BODY,r),C(f.TAG_NAMES.HTML,o),M(p,T);var d={baseTag:w(f.TAG_NAMES.BASE,n),linkTags:w(f.TAG_NAMES.LINK,u),metaTags:w(f.TAG_NAMES.META,i),noscriptTags:w(f.TAG_NAMES.NOSCRIPT,a),scriptTags:w(f.TAG_NAMES.SCRIPT,l),styleTags:w(f.TAG_NAMES.STYLE,s)},E={},y={};Object.keys(d).forEach(function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(y[t]=d[t].oldTags)}),e&&e(),c(t,E,y)},R=function(t){return Array.isArray(t)?t.join(""):t},M=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=R(t)),C(f.TAG_NAMES.TITLE,e)},C=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],u=[].concat(o),i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=u.indexOf(c);s!==-1&&u.splice(s,1)}for(var p=u.length-1;p>=0;p--)n.removeAttribute(u[p]);o.length===u.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,i.join(","))}},w=function(t,e){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),u=[],i=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var a="undefined"==typeof e[r]?"":e[r];n.setAttribute(r,a)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return i=e,n.isEqualNode(t)})?o.splice(i,1):u.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),u.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:u}},I=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!=typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},L=function(t,e,n,r){var o=I(n),u=R(e);return o?"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(u,r)+"</"+t+">":"<"+t+" "+f.HELMET_ATTRIBUTE+'="true">'+s(u,r)+"</"+t+">"},N=function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===f.TAG_PROPERTIES.INNER_HTML||t===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"==typeof r[e]?e:e+'="'+s(r[e],n)+'"';return t?t+" "+o:o},""),u=r.innerHTML||r.cssText||"",i=f.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+u+"</"+t+">")},"")},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.REACT_TAG_MAP[n]||n]=t[n],e},e)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.HTML_TAG_MAP[n]||n]=t[n],e},e)},H=function(t,e,n){var r,o=(r={key:e},r[f.HELMET_ATTRIBUTE]=!0,r),u=j(n,o);return[a.default.createElement(f.TAG_NAMES.TITLE,u,e)]},x=function(t,e){return e.map(function(e,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=f.REACT_TAG_MAP[t]||t;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),a.default.createElement(t,o)})},k=function(t,e,n){switch(t){case f.TAG_NAMES.TITLE:return{toComponent:function(){return H(t,e.title,e.titleAttributes,n)},toString:function(){return L(t,e.title,e.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(e)},toString:function(){return I(e)}};default:return{toComponent:function(){return x(t,e)},toString:function(){return N(t,e,n)}}}},U=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,u=t.linkTags,i=t.metaTags,a=t.noscriptTags,c=t.scriptTags,l=t.styleTags,s=t.title,p=void 0===s?"":s,T=t.titleAttributes;return{base:k(f.TAG_NAMES.BASE,e,r),bodyAttributes:k(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(f.ATTRIBUTE_NAMES.HTML,o,r),link:k(f.TAG_NAMES.LINK,u,r),meta:k(f.TAG_NAMES.META,i,r),noscript:k(f.TAG_NAMES.NOSCRIPT,a,r),script:k(f.TAG_NAMES.SCRIPT,c,r),style:k(f.TAG_NAMES.STYLE,l,r),title:k(f.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}};e.convertReactPropstoHtmlAttributes=G,e.handleClientStateChange=P,e.mapStateOnServer=U,e.reducePropsToState=h,e.requestAnimationFrame=m,e.warn=_}).call(e,function(){return this}())},112:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e,n){function r(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){function p(){d=t(T.map(function(t){return t.props})),E.canUseDOM?e(d):n&&(d=n(d))}if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var T=[],d=void 0,E=function(t){function e(){return o(this,e),u(this,t.apply(this,arguments))}return i(e,t),e.peek=function(){return d},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=d;return d=void 0,T=[],t},e.prototype.shouldComponentUpdate=function(t){return!s(t,this.props)},e.prototype.componentWillMount=function(){T.push(this),p()},e.prototype.componentDidUpdate=function(){p()},e.prototype.componentWillUnmount=function(){var t=T.indexOf(this);T.splice(t,1),p()},e.prototype.render=function(){return l.createElement(a,this.props)},e}(c.Component);return E.displayName="SideEffect("+r(a)+")",E.canUseDOM=f.canUseDOM,E}}var c=n(1),l=r(c),f=r(n(95)),s=r(n(114));t.exports=a},299:function(t,e){},114:function(t,e,n){"use strict";var r=n(106);t.exports=function(t,e,n,o){var u=n?n.call(o,t,e):void 0;if(void 0!==u)return!!u;if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var i=r(t),a=r(e),c=i.length;if(c!==a.length)return!1;o=o||null;for(var l=Object.prototype.hasOwnProperty.bind(e),f=0;f<c;f++){var s=i[f];if(!l(s))return!1;var p=t[s],T=e[s],d=n?n.call(o,p,T,s):void 0;if(d===!1||void 0===d&&p!==T)return!1}return!0}},188:function(t,e,n){"use strict";n(299),n(300)},300:function(t,e){},189:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.query=void 0;var o=n(1),u=r(o),i=n(2),a=r(i),c=n(107),l=r(c);n(188);var f=function(t){var e=t.children,n=t.data;return u.default.createElement("div",null,u.default.createElement(l.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:""},{name:"keywords",content:""}]}),e())};f.propTypes={children:a.default.func},e.default=f;e.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-1525257957306-3989008b9c6670bf066c.js.map