import './polyfills.server.mjs';
import{C as F1,E as B1,F as D1,G as E1,H as R1,K as U1,O as k2,R as f2,S as O1,T as I1,U as $,a as $2,b as x1,c as b,d as b1,e as N1,f as S2,g as S1,h as k1,i as w1,j as u,k as X,l as y1,m as C,n as s,o as l,p,q as A1,r as P1,s as T1,t as f,u as N,v as A}from"./chunk-JSICMHFM.mjs";function W1(c,a){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),i.push.apply(i,e)}return i}function H(c){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?W1(Object(i),!0).forEach(function(e){S(c,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):W1(Object(i)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(i,e))})}return c}function O2(c){"@babel/helpers - typeof";return O2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},O2(c)}function s4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function q1(c,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function o4(c,a,i){return a&&q1(c.prototype,a),i&&q1(c,i),Object.defineProperty(c,"prototype",{writable:!1}),c}function S(c,a,i){return a in c?Object.defineProperty(c,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[a]=i,c}function m1(c,a){return f4(c)||m4(c,a)||z3(c,a)||H4()}function x2(c){return l4(c)||t4(c)||z3(c)||v4()}function l4(c){if(Array.isArray(c))return c1(c)}function f4(c){if(Array.isArray(c))return c}function t4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function m4(c,a){var i=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var e=[],r=!0,n=!1,o,t;try{for(i=i.call(c);!(r=(o=i.next()).done)&&(e.push(o.value),!(a&&e.length===a));r=!0);}catch(m){n=!0,t=m}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw t}}return e}}function z3(c,a){if(c){if(typeof c=="string")return c1(c,a);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c1(c,a)}}function c1(c,a){(a==null||a>c.length)&&(a=c.length);for(var i=0,e=new Array(a);i<a;i++)e[i]=c[i];return e}function v4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G1=function(){},v1={},p3={},h3=null,V3={mark:G1,measure:G1};try{typeof window<"u"&&(v1=window),typeof document<"u"&&(p3=document),typeof MutationObserver<"u"&&(h3=MutationObserver),typeof performance<"u"&&(V3=performance)}catch{}var z4=v1.navigator||{},j1=z4.userAgent,_1=j1===void 0?"":j1,K=v1,g=p3,Y1=h3,w2=V3,l0=!!K.document,j=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",M3=~_1.indexOf("MSIE")||~_1.indexOf("Trident/"),y2,A2,P2,T2,F2,W="___FONT_AWESOME___",a1=16,d3="fa",u3="svg-inline--fa",o2="data-fa-i2svg",e1="data-fa-pseudo-element",p4="data-fa-pseudo-element-pending",H1="data-prefix",z1="data-icon",X1="fontawesome-i2svg",h4="async",V4=["HTML","HEAD","STYLE","SCRIPT"],C3=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),L="classic",x="sharp",p1=[L,x];function b2(c){return new Proxy(c,{get:function(i,e){return e in i?i[e]:i[L]}})}var d2=b2((y2={},S(y2,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),S(y2,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),y2)),u2=b2((A2={},S(A2,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(A2,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),A2)),C2=b2((P2={},S(P2,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(P2,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),P2)),M4=b2((T2={},S(T2,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(T2,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),T2)),d4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,L3="fa-layers-text",u4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,C4=b2((F2={},S(F2,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(F2,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),F2)),g3=[1,2,3,4,5,6,7,8,9,10],L4=g3.concat([11,12,13,14,15,16,17,18,19,20]),g4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],n2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},L2=new Set;Object.keys(u2[L]).map(L2.add.bind(L2));Object.keys(u2[x]).map(L2.add.bind(L2));var x4=[].concat(p1,x2(L2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",n2.GROUP,n2.SWAP_OPACITY,n2.PRIMARY,n2.SECONDARY]).concat(g3.map(function(c){return"".concat(c,"x")})).concat(L4.map(function(c){return"w-".concat(c)})),V2=K.FontAwesomeConfig||{};function b4(c){var a=g.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function N4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}g&&typeof g.querySelector=="function"&&($1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],$1.forEach(function(c){var a=m1(c,2),i=a[0],e=a[1],r=N4(b4(i));r!=null&&(V2[e]=r)}));var $1,x3={styleDefault:"solid",familyDefault:"classic",cssPrefix:d3,replacementClass:u3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V2.familyPrefix&&(V2.cssPrefix=V2.familyPrefix);var H2=H(H({},x3),V2);H2.autoReplaceSvg||(H2.observeMutations=!1);var h={};Object.keys(x3).forEach(function(c){Object.defineProperty(h,c,{enumerable:!0,set:function(i){H2[c]=i,M2.forEach(function(e){return e(h)})},get:function(){return H2[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(a){H2.cssPrefix=a,M2.forEach(function(i){return i(h)})},get:function(){return H2.cssPrefix}});K.FontAwesomeConfig=h;var M2=[];function S4(c){return M2.push(c),function(){M2.splice(M2.indexOf(c),1)}}var Q=a1,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function k4(c){if(!(!c||!j)){var a=g.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var i=g.head.childNodes,e=null,r=i.length-1;r>-1;r--){var n=i[r],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return g.head.insertBefore(a,e),c}}var w4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function g2(){for(var c=12,a="";c-- >0;)a+=w4[Math.random()*62|0];return a}function z2(c){for(var a=[],i=(c||[]).length>>>0;i--;)a[i]=c[i];return a}function h1(c){return c.classList?z2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function b3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y4(c){return Object.keys(c||{}).reduce(function(a,i){return a+"".concat(i,'="').concat(b3(c[i]),'" ')},"").trim()}function q2(c){return Object.keys(c||{}).reduce(function(a,i){return a+"".concat(i,": ").concat(c[i].trim(),";")},"")}function V1(c){return c.size!==I.size||c.x!==I.x||c.y!==I.y||c.rotate!==I.rotate||c.flipX||c.flipY}function A4(c){var a=c.transform,i=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(n," ").concat(o," ").concat(t)},z={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:m,path:z}}function P4(c){var a=c.transform,i=c.width,e=i===void 0?a1:i,r=c.height,n=r===void 0?a1:r,o=c.startCentered,t=o===void 0?!1:o,m="";return t&&M3?m+="translate(".concat(a.x/Q-e/2,"em, ").concat(a.y/Q-n/2,"em) "):t?m+="translate(calc(-50% + ".concat(a.x/Q,"em), calc(-50% + ").concat(a.y/Q,"em)) "):m+="translate(".concat(a.x/Q,"em, ").concat(a.y/Q,"em) "),m+="scale(".concat(a.size/Q*(a.flipX?-1:1),", ").concat(a.size/Q*(a.flipY?-1:1),") "),m+="rotate(".concat(a.rotate,"deg) "),m}var T4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function N3(){var c=d3,a=u3,i=h.cssPrefix,e=h.replacementClass,r=T4;if(i!==c||e!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");r=r.replace(n,".".concat(i,"-")).replace(o,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var Q1=!1;function Q2(){h.autoAddCss&&!Q1&&(k4(N3()),Q1=!0)}var F4={mixout:function(){return{dom:{css:N3,insertCss:Q2}}},hooks:function(){return{beforeDOMElementCreation:function(){Q2()},beforeI2svg:function(){Q2()}}}},q=K||{};q[W]||(q[W]={});q[W].styles||(q[W].styles={});q[W].hooks||(q[W].hooks={});q[W].shims||(q[W].shims=[]);var R=q[W],S3=[],B4=function c(){g.removeEventListener("DOMContentLoaded",c),I2=1,S3.map(function(a){return a()})},I2=!1;j&&(I2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),I2||g.addEventListener("DOMContentLoaded",B4));function D4(c){j&&(I2?setTimeout(c,0):S3.push(c))}function N2(c){var a=c.tag,i=c.attributes,e=i===void 0?{}:i,r=c.children,n=r===void 0?[]:r;return typeof c=="string"?b3(c):"<".concat(a," ").concat(y4(e),">").concat(n.map(N2).join(""),"</").concat(a,">")}function K1(c,a,i){if(c&&c[a]&&c[a][i])return{prefix:a,iconName:i,icon:c[a][i]}}var E4=function(a,i){return function(e,r,n,o){return a.call(i,e,r,n,o)}},K2=function(a,i,e,r){var n=Object.keys(a),o=n.length,t=r!==void 0?E4(i,r):i,m,z,v;for(e===void 0?(m=1,v=a[n[0]]):(m=0,v=e);m<o;m++)z=n[m],v=t(v,a[z],z,a);return v};function R4(c){for(var a=[],i=0,e=c.length;i<e;){var r=c.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var n=c.charCodeAt(i++);(n&64512)==56320?a.push(((r&1023)<<10)+(n&1023)+65536):(a.push(r),i--)}else a.push(r)}return a}function r1(c){var a=R4(c);return a.length===1?a[0].toString(16):null}function U4(c,a){var i=c.length,e=c.charCodeAt(a),r;return e>=55296&&e<=56319&&i>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function J1(c){return Object.keys(c).reduce(function(a,i){var e=c[i],r=!!e.icon;return r?a[e.iconName]=e.icon:a[i]=e,a},{})}function i1(c,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,n=J1(a);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(c,J1(a)):R.styles[c]=H(H({},R.styles[c]||{}),n),c==="fas"&&i1("fa",a)}var B2,D2,E2,t2=R.styles,O4=R.shims,I4=(B2={},S(B2,L,Object.values(C2[L])),S(B2,x,Object.values(C2[x])),B2),M1=null,k3={},w3={},y3={},A3={},P3={},W4=(D2={},S(D2,L,Object.keys(d2[L])),S(D2,x,Object.keys(d2[x])),D2);function q4(c){return~x4.indexOf(c)}function G4(c,a){var i=a.split("-"),e=i[0],r=i.slice(1).join("-");return e===c&&r!==""&&!q4(r)?r:null}var T3=function(){var a=function(n){return K2(t2,function(o,t,m){return o[m]=K2(t,n,{}),o},{})};k3=a(function(r,n,o){if(n[3]&&(r[n[3]]=o),n[2]){var t=n[2].filter(function(m){return typeof m=="number"});t.forEach(function(m){r[m.toString(16)]=o})}return r}),w3=a(function(r,n,o){if(r[o]=o,n[2]){var t=n[2].filter(function(m){return typeof m=="string"});t.forEach(function(m){r[m]=o})}return r}),P3=a(function(r,n,o){var t=n[2];return r[o]=o,t.forEach(function(m){r[m]=o}),r});var i="far"in t2||h.autoFetchSvg,e=K2(O4,function(r,n){var o=n[0],t=n[1],m=n[2];return t==="far"&&!i&&(t="fas"),typeof o=="string"&&(r.names[o]={prefix:t,iconName:m}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:t,iconName:m}),r},{names:{},unicodes:{}});y3=e.names,A3=e.unicodes,M1=G2(h.styleDefault,{family:h.familyDefault})};S4(function(c){M1=G2(c.styleDefault,{family:h.familyDefault})});T3();function d1(c,a){return(k3[c]||{})[a]}function j4(c,a){return(w3[c]||{})[a]}function s2(c,a){return(P3[c]||{})[a]}function F3(c){return y3[c]||{prefix:null,iconName:null}}function _4(c){var a=A3[c],i=d1("fas",c);return a||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function J(){return M1}var u1=function(){return{prefix:null,iconName:null,rest:[]}};function G2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.family,e=i===void 0?L:i,r=d2[e][c],n=u2[e][c]||u2[e][r],o=c in R.styles?c:null;return n||o||null}var Z1=(E2={},S(E2,L,Object.keys(C2[L])),S(E2,x,Object.keys(C2[x])),E2);function j2(c){var a,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,n=(a={},S(a,L,"".concat(h.cssPrefix,"-").concat(L)),S(a,x,"".concat(h.cssPrefix,"-").concat(x)),a),o=null,t=L;(c.includes(n[L])||c.some(function(z){return Z1[L].includes(z)}))&&(t=L),(c.includes(n[x])||c.some(function(z){return Z1[x].includes(z)}))&&(t=x);var m=c.reduce(function(z,v){var V=G4(h.cssPrefix,v);if(t2[v]?(v=I4[t].includes(v)?M4[t][v]:v,o=v,z.prefix=v):W4[t].indexOf(v)>-1?(o=v,z.prefix=G2(v,{family:t})):V?z.iconName=V:v!==h.replacementClass&&v!==n[L]&&v!==n[x]&&z.rest.push(v),!r&&z.prefix&&z.iconName){var M=o==="fa"?F3(z.iconName):{},d=s2(z.prefix,z.iconName);M.prefix&&(o=null),z.iconName=M.iconName||d||z.iconName,z.prefix=M.prefix||z.prefix,z.prefix==="far"&&!t2.far&&t2.fas&&!h.autoFetchSvg&&(z.prefix="fas")}return z},u1());return(c.includes("fa-brands")||c.includes("fab"))&&(m.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(m.prefix="fad"),!m.prefix&&t===x&&(t2.fass||h.autoFetchSvg)&&(m.prefix="fass",m.iconName=s2(m.prefix,m.iconName)||m.iconName),(m.prefix==="fa"||o==="fa")&&(m.prefix=J()||"fas"),m}var Y4=function(){function c(){s4(this,c),this.definitions={}}return o4(c,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){i.definitions[t]=H(H({},i.definitions[t]||{}),o[t]),i1(t,o[t]);var m=C2[L][t];m&&i1(m,o[t]),T3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(n){var o=r[n],t=o.prefix,m=o.iconName,z=o.icon,v=z[2];i[t]||(i[t]={}),v.length>0&&v.forEach(function(V){typeof V=="string"&&(i[t][V]=z)}),i[t][m]=z}),i}}]),c}(),c3=[],m2={},v2={},X4=Object.keys(v2);function $4(c,a){var i=a.mixoutsTo;return c3=c,m2={},Object.keys(v2).forEach(function(e){X4.indexOf(e)===-1&&delete v2[e]}),c3.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(i[o]=r[o]),O2(r[o])==="object"&&Object.keys(r[o]).forEach(function(t){i[o]||(i[o]={}),i[o][t]=r[o][t]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(o){m2[o]||(m2[o]=[]),m2[o].push(n[o])})}e.provides&&e.provides(v2)}),i}function n1(c,a){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var n=m2[c]||[];return n.forEach(function(o){a=o.apply(null,[a].concat(e))}),a}function l2(c){for(var a=arguments.length,i=new Array(a>1?a-1:0),e=1;e<a;e++)i[e-1]=arguments[e];var r=m2[c]||[];r.forEach(function(n){n.apply(null,i)})}function G(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return v2[c]?v2[c].apply(null,a):void 0}function s1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,i=c.prefix||J();if(a)return a=s2(i,a)||a,K1(B3.definitions,i,a)||K1(R.styles,i,a)}var B3=new Y4,Q4=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,l2("noAuto")},K4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(l2("beforeI2svg",a),G("pseudoElements2svg",a),G("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,D4(function(){Z4({autoReplaceSvgRoot:i}),l2("watch",a)})}},J4={icon:function(a){if(a===null)return null;if(O2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:s2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var i=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=G2(a[0]);return{prefix:e,iconName:s2(e,i)||i}}if(typeof a=="string"&&(a.indexOf("".concat(h.cssPrefix,"-"))>-1||a.match(d4))){var r=j2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:s2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var n=J();return{prefix:n,iconName:s2(n,a)||a}}}},F={noAuto:Q4,config:h,dom:K4,parse:J4,library:B3,findIconDefinition:s1,toHtml:N2},Z4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.autoReplaceSvgRoot,e=i===void 0?g:i;(Object.keys(R.styles).length>0||h.autoFetchSvg)&&j&&h.autoReplaceSvg&&F.dom.i2svg({node:e})};function _2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return N2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(j){var e=g.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function c6(c){var a=c.children,i=c.main,e=c.mask,r=c.attributes,n=c.styles,o=c.transform;if(V1(o)&&i.found&&!e.found){var t=i.width,m=i.height,z={x:t/m/2,y:.5};r.style=q2(H(H({},n),{},{"transform-origin":"".concat(z.x+o.x/16,"em ").concat(z.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function a6(c){var a=c.prefix,i=c.iconName,e=c.children,r=c.attributes,n=c.symbol,o=n===!0?"".concat(a,"-").concat(h.cssPrefix,"-").concat(i):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},r),{},{id:o}),children:e}]}]}function C1(c){var a=c.icons,i=a.main,e=a.mask,r=c.prefix,n=c.iconName,o=c.transform,t=c.symbol,m=c.title,z=c.maskId,v=c.titleId,V=c.extra,M=c.watchable,d=M===void 0?!1:M,w=e.found?e:i,B=w.width,E=w.height,U=r==="fak",k=[h.replacementClass,n?"".concat(h.cssPrefix,"-").concat(n):""].filter(function(Y){return V.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(V.classes).join(" "),y={children:[],attributes:H(H({},V.attributes),{},{"data-prefix":r,"data-icon":n,class:k,role:V.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(B," ").concat(E)})},O=U&&!~V.classes.indexOf("fa-fw")?{width:"".concat(B/E*16*.0625,"em")}:{};d&&(y.attributes[o2]=""),m&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(v||g2())},children:[m]}),delete y.attributes.title);var T=H(H({},y),{},{prefix:r,iconName:n,main:i,mask:e,maskId:z,transform:o,symbol:t,styles:H(H({},O),V.styles)}),r2=e.found&&i.found?G("generateAbstractMask",T)||{children:[],attributes:{}}:G("generateAbstractIcon",T)||{children:[],attributes:{}},i2=r2.children,X2=r2.attributes;return T.children=i2,T.attributes=X2,t?a6(T):c6(T)}function a3(c){var a=c.content,i=c.width,e=c.height,r=c.transform,n=c.title,o=c.extra,t=c.watchable,m=t===void 0?!1:t,z=H(H(H({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});m&&(z[o2]="");var v=H({},o.styles);V1(r)&&(v.transform=P4({transform:r,startCentered:!0,width:i,height:e}),v["-webkit-transform"]=v.transform);var V=q2(v);V.length>0&&(z.style=V);var M=[];return M.push({tag:"span",attributes:z,children:[a]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function e6(c){var a=c.content,i=c.title,e=c.extra,r=H(H(H({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),n=q2(e.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),i&&o.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),o}var J2=R.styles;function o1(c){var a=c[0],i=c[1],e=c.slice(4),r=m1(e,1),n=r[0],o=null;return Array.isArray(n)?o={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(n2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(n2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(n2.PRIMARY),fill:"currentColor",d:n[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:i,icon:o}}var r6={found:!1,width:512,height:512};function i6(c,a){!C3&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function l1(c,a){var i=a;return a==="fa"&&h.styleDefault!==null&&(a=J()),new Promise(function(e,r){var n={found:!1,width:512,height:512,icon:G("missingIconAbstract")||{}};if(i==="fa"){var o=F3(c)||{};c=o.iconName||c,a=o.prefix||a}if(c&&a&&J2[a]&&J2[a][c]){var t=J2[a][c];return e(o1(t))}i6(c,a),e(H(H({},r6),{},{icon:h.showMissingIcons&&c?G("missingIconAbstract")||{}:{}}))})}var e3=function(){},f1=h.measurePerformance&&w2&&w2.mark&&w2.measure?w2:{mark:e3,measure:e3},h2='FA "6.5.1"',n6=function(a){return f1.mark("".concat(h2," ").concat(a," begins")),function(){return D3(a)}},D3=function(a){f1.mark("".concat(h2," ").concat(a," ends")),f1.measure("".concat(h2," ").concat(a),"".concat(h2," ").concat(a," begins"),"".concat(h2," ").concat(a," ends"))},L1={begin:n6,end:D3},R2=function(){};function r3(c){var a=c.getAttribute?c.getAttribute(o2):null;return typeof a=="string"}function s6(c){var a=c.getAttribute?c.getAttribute(H1):null,i=c.getAttribute?c.getAttribute(z1):null;return a&&i}function o6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function l6(){if(h.autoReplaceSvg===!0)return U2.replace;var c=U2[h.autoReplaceSvg];return c||U2.replace}function f6(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}function t6(c){return g.createElement(c)}function E3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.ceFn,e=i===void 0?c.tag==="svg"?f6:t6:i;if(typeof c=="string")return g.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(o){r.setAttribute(o,c.attributes[o])});var n=c.children||[];return n.forEach(function(o){r.appendChild(E3(o,{ceFn:e}))}),r}function m6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var U2={replace:function(a){var i=a[0];if(i.parentNode)if(a[1].forEach(function(r){i.parentNode.insertBefore(E3(r),i)}),i.getAttribute(o2)===null&&h.keepOriginalSource){var e=g.createComment(m6(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(a){var i=a[0],e=a[1];if(~h1(i).indexOf(h.replacementClass))return U2.replace(a);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(t,m){return m===h.replacementClass||m.match(r)?t.toSvg.push(m):t.toNode.push(m),t},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",n.toNode.join(" "))}var o=e.map(function(t){return N2(t)}).join(`
`);i.setAttribute(o2,""),i.innerHTML=o}};function i3(c){c()}function R3(c,a){var i=typeof a=="function"?a:R2;if(c.length===0)i();else{var e=i3;h.mutateApproach===h4&&(e=K.requestAnimationFrame||i3),e(function(){var r=l6(),n=L1.begin("mutate");c.map(r),n(),i()})}}var g1=!1;function U3(){g1=!0}function t1(){g1=!1}var W2=null;function n3(c){if(Y1&&h.observeMutations){var a=c.treeCallback,i=a===void 0?R2:a,e=c.nodeCallback,r=e===void 0?R2:e,n=c.pseudoElementsCallback,o=n===void 0?R2:n,t=c.observeMutationsRoot,m=t===void 0?g:t;W2=new Y1(function(z){if(!g1){var v=J();z2(z).forEach(function(V){if(V.type==="childList"&&V.addedNodes.length>0&&!r3(V.addedNodes[0])&&(h.searchPseudoElements&&o(V.target),i(V.target)),V.type==="attributes"&&V.target.parentNode&&h.searchPseudoElements&&o(V.target.parentNode),V.type==="attributes"&&r3(V.target)&&~g4.indexOf(V.attributeName))if(V.attributeName==="class"&&s6(V.target)){var M=j2(h1(V.target)),d=M.prefix,w=M.iconName;V.target.setAttribute(H1,d||v),w&&V.target.setAttribute(z1,w)}else o6(V.target)&&r(V.target)})}}),j&&W2.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function v6(){W2&&W2.disconnect()}function H6(c){var a=c.getAttribute("style"),i=[];return a&&(i=a.split(";").reduce(function(e,r){var n=r.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(e[o]=t.join(":").trim()),e},{})),i}function z6(c){var a=c.getAttribute("data-prefix"),i=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=j2(h1(c));return r.prefix||(r.prefix=J()),a&&i&&(r.prefix=a,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=j4(r.prefix,c.innerText)||d1(r.prefix,r1(c.innerText))),!r.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function p6(c){var a=z2(c.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),i=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return h.autoA11y&&(i?a["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(e||g2()):(a["aria-hidden"]="true",a.focusable="false")),a}function h6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function s3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=z6(c),e=i.iconName,r=i.prefix,n=i.rest,o=p6(c),t=n1("parseNodeAttributes",{},c),m=a.styleParser?H6(c):[];return H({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:m,attributes:o}},t)}var V6=R.styles;function O3(c){var a=h.autoReplaceSvg==="nest"?s3(c,{styleParser:!1}):s3(c);return~a.extra.classes.indexOf(L3)?G("generateLayersText",c,a):G("generateSvgReplacementMutation",c,a)}var Z=new Set;p1.map(function(c){Z.add("fa-".concat(c))});Object.keys(d2[L]).map(Z.add.bind(Z));Object.keys(d2[x]).map(Z.add.bind(Z));Z=x2(Z);function o3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var i=g.documentElement.classList,e=function(V){return i.add("".concat(X1,"-").concat(V))},r=function(V){return i.remove("".concat(X1,"-").concat(V))},n=h.autoFetchSvg?Z:p1.map(function(v){return"fa-".concat(v)}).concat(Object.keys(V6));n.includes("fa")||n.push("fa");var o=[".".concat(L3,":not([").concat(o2,"])")].concat(n.map(function(v){return".".concat(v,":not([").concat(o2,"])")})).join(", ");if(o.length===0)return Promise.resolve();var t=[];try{t=z2(c.querySelectorAll(o))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var m=L1.begin("onTree"),z=t.reduce(function(v,V){try{var M=O3(V);M&&v.push(M)}catch(d){C3||d.name==="MissingIcon"&&console.error(d)}return v},[]);return new Promise(function(v,V){Promise.all(z).then(function(M){R3(M,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),m(),v()})}).catch(function(M){m(),V(M)})})}function M6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;O3(c).then(function(i){i&&R3([i],a)})}function d6(c){return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:s1(a||{}),r=i.mask;return r&&(r=(r||{}).icon?r:s1(r||{})),c(e,H(H({},i),{},{mask:r}))}}var u6=function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?I:e,n=i.symbol,o=n===void 0?!1:n,t=i.mask,m=t===void 0?null:t,z=i.maskId,v=z===void 0?null:z,V=i.title,M=V===void 0?null:V,d=i.titleId,w=d===void 0?null:d,B=i.classes,E=B===void 0?[]:B,U=i.attributes,k=U===void 0?{}:U,y=i.styles,O=y===void 0?{}:y;if(a){var T=a.prefix,r2=a.iconName,i2=a.icon;return _2(H({type:"icon"},a),function(){return l2("beforeDOMElementCreation",{iconDefinition:a,params:i}),h.autoA11y&&(M?k["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(w||g2()):(k["aria-hidden"]="true",k.focusable="false")),C1({icons:{main:o1(i2),mask:m?o1(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:r2,transform:H(H({},I),r),symbol:o,title:M,maskId:v,titleId:w,extra:{attributes:k,styles:O,classes:E}})})}},C6={mixout:function(){return{icon:d6(u6)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=o3,i.nodeCallback=M6,i}}},provides:function(a){a.i2svg=function(i){var e=i.node,r=e===void 0?g:e,n=i.callback,o=n===void 0?function(){}:n;return o3(r,o)},a.generateSvgReplacementMutation=function(i,e){var r=e.iconName,n=e.title,o=e.titleId,t=e.prefix,m=e.transform,z=e.symbol,v=e.mask,V=e.maskId,M=e.extra;return new Promise(function(d,w){Promise.all([l1(r,t),v.iconName?l1(v.iconName,v.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(B){var E=m1(B,2),U=E[0],k=E[1];d([i,C1({icons:{main:U,mask:k},prefix:t,iconName:r,transform:m,symbol:z,maskId:V,title:n,titleId:o,extra:M,watchable:!0})])}).catch(w)})},a.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,n=i.main,o=i.transform,t=i.styles,m=q2(t);m.length>0&&(r.style=m);var z;return V1(o)&&(z=G("generateAbstractTransformGrouping",{main:n,transform:o,containerWidth:n.width,iconWidth:n.width})),e.push(z||n.icon),{children:e,attributes:r}}}},L6={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,n=r===void 0?[]:r;return _2({type:"layer"},function(){l2("beforeDOMElementCreation",{assembler:i,params:e});var o=[];return i(function(t){Array.isArray(t)?t.map(function(m){o=o.concat(m.abstract)}):o=o.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(x2(n)).join(" ")},children:o}]})}}}},g6={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,n=r===void 0?null:r,o=e.classes,t=o===void 0?[]:o,m=e.attributes,z=m===void 0?{}:m,v=e.styles,V=v===void 0?{}:v;return _2({type:"counter",content:i},function(){return l2("beforeDOMElementCreation",{content:i,params:e}),e6({content:i.toString(),title:n,extra:{attributes:z,styles:V,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(x2(t))}})})}}}},x6={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?I:r,o=e.title,t=o===void 0?null:o,m=e.classes,z=m===void 0?[]:m,v=e.attributes,V=v===void 0?{}:v,M=e.styles,d=M===void 0?{}:M;return _2({type:"text",content:i},function(){return l2("beforeDOMElementCreation",{content:i,params:e}),a3({content:i,transform:H(H({},I),n),title:t,extra:{attributes:V,styles:d,classes:["".concat(h.cssPrefix,"-layers-text")].concat(x2(z))}})})}}},provides:function(a){a.generateLayersText=function(i,e){var r=e.title,n=e.transform,o=e.extra,t=null,m=null;if(M3){var z=parseInt(getComputedStyle(i).fontSize,10),v=i.getBoundingClientRect();t=v.width/z,m=v.height/z}return h.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([i,a3({content:i.innerHTML,width:t,height:m,transform:n,title:r,extra:o,watchable:!0})])}}},b6=new RegExp('"',"ug"),l3=[1105920,1112319];function N6(c){var a=c.replace(b6,""),i=U4(a,0),e=i>=l3[0]&&i<=l3[1],r=a.length===2?a[0]===a[1]:!1;return{value:r1(r?a[0]:a),isSecondary:e||r}}function f3(c,a){var i="".concat(p4).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(i)!==null)return e();var n=z2(c.children),o=n.filter(function(i2){return i2.getAttribute(e1)===a})[0],t=K.getComputedStyle(c,a),m=t.getPropertyValue("font-family").match(u4),z=t.getPropertyValue("font-weight"),v=t.getPropertyValue("content");if(o&&!m)return c.removeChild(o),e();if(m&&v!=="none"&&v!==""){var V=t.getPropertyValue("content"),M=~["Sharp"].indexOf(m[2])?x:L,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(m[2])?u2[M][m[2].toLowerCase()]:C4[M][z],w=N6(V),B=w.value,E=w.isSecondary,U=m[0].startsWith("FontAwesome"),k=d1(d,B),y=k;if(U){var O=_4(B);O.iconName&&O.prefix&&(k=O.iconName,d=O.prefix)}if(k&&!E&&(!o||o.getAttribute(H1)!==d||o.getAttribute(z1)!==y)){c.setAttribute(i,y),o&&c.removeChild(o);var T=h6(),r2=T.extra;r2.attributes[e1]=a,l1(k,d).then(function(i2){var X2=C1(H(H({},T),{},{icons:{main:i2,mask:u1()},prefix:d,iconName:y,extra:r2,watchable:!0})),Y=g.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(Y,c.firstChild):c.appendChild(Y),Y.outerHTML=X2.map(function(n4){return N2(n4)}).join(`
`),c.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function S6(c){return Promise.all([f3(c,"::before"),f3(c,"::after")])}function k6(c){return c.parentNode!==document.head&&!~V4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(e1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function t3(c){if(j)return new Promise(function(a,i){var e=z2(c.querySelectorAll("*")).filter(k6).map(S6),r=L1.begin("searchPseudoElements");U3(),Promise.all(e).then(function(){r(),t1(),a()}).catch(function(){r(),t1(),i()})})}var w6={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=t3,i}}},provides:function(a){a.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?g:e;h.searchPseudoElements&&t3(r)}}},m3=!1,y6={mixout:function(){return{dom:{unwatch:function(){U3(),m3=!0}}}},hooks:function(){return{bootstrap:function(){n3(n1("mutationObserverCallbacks",{}))},noAuto:function(){v6()},watch:function(i){var e=i.observeMutationsRoot;m3?t1():n3(n1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},v3=function(a){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var n=r.toLowerCase().split("-"),o=n[0],t=n.slice(1).join("-");if(o&&t==="h")return e.flipX=!0,e;if(o&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(o){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},A6={mixout:function(){return{parse:{transform:function(i){return v3(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=v3(r)),i}}},provides:function(a){a.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,n=i.containerWidth,o=i.iconWidth,t={transform:"translate(".concat(n/2," 256)")},m="translate(".concat(r.x*32,", ").concat(r.y*32,") "),z="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),v="rotate(".concat(r.rotate," 0 0)"),V={transform:"".concat(m," ").concat(z," ").concat(v)},M={transform:"translate(".concat(o/2*-1," -256)")},d={outer:t,inner:V,path:M};return{tag:"g",attributes:H({},d.outer),children:[{tag:"g",attributes:H({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:H(H({},e.icon.attributes),d.path)}]}]}}}},Z2={x:0,y:0,width:"100%",height:"100%"};function H3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function P6(c){return c.tag==="g"?c.children:[c]}var T6={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),n=r?j2(r.split(" ").map(function(o){return o.trim()})):u1();return n.prefix||(n.prefix=J()),i.mask=n,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(a){a.generateAbstractMask=function(i){var e=i.children,r=i.attributes,n=i.main,o=i.mask,t=i.maskId,m=i.transform,z=n.width,v=n.icon,V=o.width,M=o.icon,d=A4({transform:m,containerWidth:V,iconWidth:z}),w={tag:"rect",attributes:H(H({},Z2),{},{fill:"white"})},B=v.children?{children:v.children.map(H3)}:{},E={tag:"g",attributes:H({},d.inner),children:[H3(H({tag:v.tag,attributes:H(H({},v.attributes),d.path)},B))]},U={tag:"g",attributes:H({},d.outer),children:[E]},k="mask-".concat(t||g2()),y="clip-".concat(t||g2()),O={tag:"mask",attributes:H(H({},Z2),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,U]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:P6(M)},O]};return e.push(T,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(k,")")},Z2)}),{children:e,attributes:r}}}},F6={provides:function(a){var i=!1;K.matchMedia&&(i=K.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:H(H({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=H(H({},n),{},{attributeName:"opacity"}),t={tag:"circle",attributes:H(H({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:H(H({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:H(H({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:H(H({},o),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:H(H({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},B6={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return i.symbol=n,i}}}},D6=[F4,C6,L6,g6,x6,w6,y6,A6,T6,F6,B6];$4(D6,{mixoutsTo:F});var f0=F.noAuto,t0=F.config,m0=F.library,v0=F.dom,I3=F.parse,H0=F.findIconDefinition,z0=F.toHtml,W3=F.icon,p0=F.layer,E6=F.text,R6=F.counter;var U6=["*"],O6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},I6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},W6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(i=>a[i]?i:null).filter(i=>i)},q6=c=>c.prefix!==void 0&&c.iconName!==void 0,G6=(c,a)=>q6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},j6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=$2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),_6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let n of r.icon[2])typeof n=="string"&&(this.definitions[r.prefix][n]=r)}}addIconPacks(...e){for(let r of e){let n=Object.keys(r).map(o=>r[o]);this.addIcons(...n)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=$2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),Y6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=N1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[S2]});let c=a;return c})(),X6=(()=>{let a=class a{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(X(w1),X(k1))},a.\u0275cmp=b({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[S2,N],ngContentSelectors:U6,decls:1,vars:0,template:function(r,n){r&1&&(P1(),T1(0))},encapsulation:2});let c=a;return c})(),D=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,n,o,t){this.sanitizer=e,this.config=r,this.iconLibrary=n,this.stackItem=o,this.classes=[],t!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){I6();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(r);if(n!=null){let o=this.buildParams();this.renderIcon(n,o)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=G6(e,this.config.defaultPrefix);if("icon"in r)return r;let n=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return n??(O6(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?I3.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...W6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let n=W3(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};a.\u0275fac=function(r){return new(r||a)(X(E1),X(j6),X(_6),X(Y6,8),X(X6,8))},a.\u0275cmp=b({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,n){r&2&&(A1("innerHTML",n.renderedIconHTML,S1),y1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[S2,N],decls:0,vars:0,template:function(r,n){},encapsulation:2});let c=a;return c})();var P=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=b1({type:a}),a.\u0275inj=x1({});let c=a;return c})();var $6={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},q3=$6;var G3={prefix:"fas",iconName:"folder",icon:[512,512,[128193,128447,61716,"folder-blank"],"f07b","M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"]};var j3={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var c2={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};var Q6={prefix:"fas",iconName:"apple-whole",icon:[448,512,[127822,127823,"apple-alt"],"f5d1","M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z"]},Y2=Q6;var _3={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"]};var a2=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-footer"]],standalone:!0,features:[N],decls:50,vars:0,consts:[[1,"footer"],[1,""],[1,"main-footer","d-flex","justify-content-between"],[2,"color","#fff"],[1,"col-7","d-flex",2,"color","#757575"],[1,"my-3"],[1,"d-flex"],[2,"list-style-type","none","color","#757575"],[1,"m-3",2,"color","#fff"],[1,"m-3"],["routerLink","/workout"],["routerLink","/signUp"],["routerLink",""],["routerLink","/nutrition"],["routerLink","/signIn"],["routerLink","/contact"]],template:function(r,n){r&1&&(s(0,"section",0)(1,"main",1)(2,"div",2)(3,"div",1)(4,"div",1)(5,"h1",3),f(6,"HEVY"),l(),s(7,"span",4),f(8,"Discover Hevy, the Ultimate gym app. The most comprehensive and intuitive fitness tracking app ever."),l()(),s(9,"div",5),f(10," instagram facebook twitter linkedin "),l()(),s(11,"div",6)(12,"ul",7)(13,"li",8),f(14,"Social"),l(),s(15,"li",9)(16,"a",10),f(17,"Workout"),l()(),s(18,"li",9)(19,"a",11),f(20,"Calendar"),l()(),s(21,"li",9)(22,"a",11),f(23,"Health Stats"),l()()(),s(24,"ul",7)(25,"li",8)(26,"a",12),f(27,"Profile"),l()(),s(28,"li",9)(29,"a",13),f(30,"Nutrition"),l()(),s(31,"li",9)(32,"a",11),f(33,"Getting Stated"),l()(),s(34,"li",9)(35,"a",14),f(36,"Tasks & Challenges"),l()()(),s(37,"ul",7)(38,"li",8)(39,"a",14),f(40,"FAQ"),l()(),s(41,"li",9)(42,"a",15),f(43,"Contact us"),l()(),s(44,"li",9)(45,"a",14),f(46,"About Hevy"),l()(),s(47,"li",9)(48,"a",14),f(49,"Terms & Condition"),l()()()()()()())},dependencies:[P],styles:[".footer[_ngcontent-%COMP%]{background-color:#0d0d0d}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#1c8ef7;cursor:pointer}"]});let c=a;return c})();var Y3=()=>["/"],K6=()=>["/workout"],J6=()=>["/nutrition"],Z6=()=>["/contact"],c0=()=>["/signIn"],a0=()=>["/signUp"],e2=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-navbar"]],standalone:!0,features:[N],decls:25,vars:14,consts:[[1,"navbar","navbar-expand-lg","bg-dark","text-light"],[1,"container-fluid"],[1,"navbar-brand",3,"routerLink"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarTogglerDemo02","aria-controls","navbarTogglerDemo02","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarTogglerDemo02",1,"collapse","navbar-collapse"],[1,"navbar-nav","nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page",1,"nav-link",3,"routerLink"],[1,"nav-link",3,"routerLink"],[1,"created-div"],[1,"",3,"routerLink"],[1,"ms-2",2,"color","#fff",3,"routerLink"]],template:function(r,n){r&1&&(s(0,"nav",0)(1,"div",1)(2,"a",2),f(3,"HEVY"),l(),s(4,"button",3),p(5,"span",4),l(),s(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),f(10,"Home"),l()(),s(11,"li",7)(12,"a",9),f(13,"Workouts"),l()(),s(14,"li",7)(15,"a",9),f(16,"Nutritions"),l()(),s(17,"li",7)(18,"a",9),f(19,"Contact"),l()()(),s(20,"div",10)(21,"a",11),f(22,"Sign In"),l(),s(23,"a",12),f(24,"Join"),l()()()()()),r&2&&(u(2),C("routerLink",A(7,Y3)),u(7),C("routerLink",A(8,Y3)),u(3),C("routerLink",A(9,K6)),u(3),C("routerLink",A(10,J6)),u(3),C("routerLink",A(11,Z6)),u(3),C("routerLink",A(12,c0)),u(2),C("routerLink",A(13,a0)))},dependencies:[$,f2],styles:[".navbar[_ngcontent-%COMP%]{padding:2rem 0;background-color:#0d0d0d!important}.navbar-brand[_ngcontent-%COMP%]{color:#fff!important}.nav[_ngcontent-%COMP%]{--bs-nav-link-color: #636363 !important;--bs-nav-link-hover-color: #1C8EF7 !important}.nav-underline[_ngcontent-%COMP%]{--bs-nav-underline-gap: 1rem;--bs-nav-underline-border-width: .125rem;--bs-nav-underline-link-active-color: #1C8EF7 !important;gap:var(--bs-nav-underline-gap)}.created-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#757575!important;text-decoration:none;border:1px solid #757575;padding:.5rem .8rem;border-radius:3rem}.created-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1c8ef7!important;background:#2b2b2b!important;text-decoration:none;border:1px solid #2b2b2b;padding:.5rem .8rem;border-radius:3rem}"]});let c=a;return c})();var $3=(()=>{let a=class a{constructor(){this.faEdit=q3,this.faDiagramProject=_3,this.faFolder=G3,this.faHeart=c2}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-home"]],standalone:!0,features:[N],decls:165,vars:4,consts:[[1,"home"],[1,""],[1,"py-5","d-flex","justify-content-center","align-items-center","text-center"],[1,"col-7","h1-font"],[1,"span-text"],["src","assets/images/home.jpg","alt","",1,"w-100"],[1,"d-flex","justify-content-around","align-items-center","px-2"],[1,"div-text","mx-2","my-1","col-5"],[1,"second-main","py-5","px-5"],[1,"second-div","my-4"],[1,"d-flex","justify-content-start","align-items-baseline",2,"border-bottom","1px solid"],[2,"font-size","7rem"],[1,"mx-3",2,"font-size","2rem"],[1,"text-start","py-3",2,"font-size","1.2rem"],[1,"main-third","py-5"],[1,"d-flex","justify-content-center","align-items-center","flex-column","text-center"],[1,"h1-font","my-5"],[1,"col-6",2,"color","#555555","font-size","1.2rem"],["src","assets/images/about.jpg","alt","",2,"width","100%"],[1,"main-fourth","py-5","px-5"],[1,"d-flex","justify-content-center","align-items-center"],[1,"card-div","d-flex","justify-content-between","align-items-center","pb-5"],[1,"card","mx-3","my-3"],[1,"fontAwesome","mb-3",3,"icon"],[1,"",2,"color","#555555"],[1,"main-fifth","py-5","px-5"],[1,"my-4",2,"color","#fff"],[1,"d-flex","justify-content-start","align-items-baseline","py-3",2,"border-bottom","1px solid"],[2,"font-size","2rem"],[1,"mx-3",2,"font-size","1.5rem"],[1,"text-start","py-3",2,"font-size","1rem","color","#555555"],["src","assets/images/getting.jpg","alt","",2,"width","100%"],["src","assets/images/getting1.jpg","alt","",2,"width","100%"],["src","assets/images/typo.jpg","alt","",2,"width","100%"],["src","assets/images/icons.jpg","alt","",2,"width","100%"],["src","assets/images/UxMap.jpg","alt","",2,"width","100%"],["src","assets/images/details.jpg","alt","",2,"width","100%"],[1,"main-teen","py-5","px-5"],[1,"h1-font","col-8","my-5"],[1,"col-8",2,"color","#555555","font-size","1.2rem"],["src","assets/images/other.jpg","alt","",2,"width","100%"],[1,"main-eleven","py-5","px-5"],[1,"col-8","my-2",2,"color","#555555"],[2,"color","red",3,"icon"]],template:function(r,n){r&1&&(s(0,"section"),p(1,"app-navbar"),l(),s(2,"section",0)(3,"main",1)(4,"div",2)(5,"h1",3),f(6," Discover Hevy, the "),s(7,"span",4),f(8,"Ultimate gym app."),l(),f(9," The most comprehensive and intuitive fitness tracking app ever. "),l()(),s(10,"div"),p(11,"img",5),l(),s(12,"div",6)(13,"div",7),f(14," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus magnam laudantium nihil voluptate laborum ipsum, illum illo quisquam tempora sapiente architecto, recusandae eum est molestias animi perferendis ut hic. "),l(),s(15,"div",7),f(16," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus magnam laudantium nihil voluptate laborum ipsum, illum illo quisquam tempora sapiente architecto, recusandae eum est molestias animi perferendis ut hic. "),l()()(),s(17,"main",8)(18,"div",9)(19,"div",10)(20,"h1",11),f(21,"01"),l(),s(22,"div",12),f(23,"Getting Started"),l()(),s(24,"div",13),f(25,"background & things you need to know about Hevy "),l()(),s(26,"div",9)(27,"div",10)(28,"h1",11),f(29,"02"),l(),s(30,"div",12),f(31,"Typography & Colors"),l()(),s(32,"div",13),f(33,"Crafting the visual identity "),l()(),s(34,"div",9)(35,"div",10)(36,"h1",11),f(37,"03"),l(),s(38,"div",12),f(39,"Icons"),l()(),s(40,"div",13),f(41,"A collection of icons used throughtout the project "),l()(),s(42,"div",9)(43,"div",10)(44,"h1",11),f(45,"04"),l(),s(46,"div",12),f(47,"UX Map"),l()(),s(48,"div",13),f(49,"Guided exploration of fitness essentials "),l()(),s(50,"div",9)(51,"div",10)(52,"h1",11),f(53,"05"),l(),s(54,"div",12),f(55,"Details"),l()(),s(56,"div",13),f(57,"Unveiling the app's entrails "),l()()(),s(58,"main",14)(59,"div",15)(60,"h1",16),f(61,"The Most Powerful "),s(62,"span",4),f(63,"Workout App."),l()(),s(64,"span",17),f(65,"Discover Hevy, the ultimate gym app ! its teh most comprehensive and intutive fitness tracking app ever. Say goodbye to old-school methods and helloto a seamless way to track and achieve your fitness goals."),l()(),s(66,"div"),p(67,"img",18),l()(),s(68,"main",19)(69,"div",20)(70,"h1",16),f(71,"Main Tasks & Challenges"),l()(),s(72,"div",21)(73,"div",22),p(74,"fa-icon",23),s(75,"h3"),f(76,"Update UI"),l(),s(77,"span",24),f(78,"Revamp the visual appeal and user interaction of the app for for a sleeker, more intuitive experience"),l()(),s(79,"div",22),p(80,"fa-icon",23),s(81,"h3"),f(82,"Update UX"),l(),s(83,"span",24),f(84,"optimize user pathways, interactions, and overall experience to ensure seamless navigation and hieghtened engagement."),l()(),s(85,"div",22),p(86,"fa-icon",23),s(87,"h3"),f(88,"Add More Features"),l(),s(89,"span",24),f(90,"introduce new features to enrich the app's capabilities, providing users with a comprehensive toolkit for thier fitness journey."),l()()()(),s(91,"main",25)(92,"div")(93,"div",26)(94,"div",27)(95,"h1",28),f(96,"01"),l(),s(97,"div",29),f(98,"Getting Started"),l()(),s(99,"div",30),f(100,"Step into the world of fitness with our initail app mockups - a seamless blend of dark aesthetics and minimalism.Form the outset , immerse yourself in a visually striking interface adorned with soothing tones and intutive buttons. "),l()(),s(101,"div"),p(102,"img",31),l(),s(103,"div"),p(104,"img",32),l()(),s(105,"div")(106,"div",26)(107,"div",27)(108,"h1",28),f(109,"02"),l(),s(110,"div",29),f(111,"Typography & Colors"),l()(),s(112,"div",30),f(113,"The project's visual identity is a symphony of Poppins font in Medium and Regular, accomponied by a dark , black palette enriched with electric blue accents.White serves as the contrasting canvas, creating a captivating and cohensive visual laungauge throughout. Experience a harmonious blend of Typography and colors that defines the project's sleeks and sophisticated aesthetic. "),l()(),s(114,"div"),p(115,"img",33),l()(),s(116,"div")(117,"div",26)(118,"div",27)(119,"h1",28),f(120,"03"),l(),s(121,"div",29),f(122,"Typography & Colors"),l()(),s(123,"div",30),f(124,"Discover a curated selection of rounded icons , merticulously chosen to harmonize with the app's aesthetic. These bespoke icons not only enhance visual appeal but also contribute to a unified and polished design .Every Icon adds a touch of visual harmony to the overall aesthetic. "),l()(),s(125,"div"),p(126,"img",34),l()(),s(127,"div")(128,"div",26)(129,"div",27)(130,"h1",28),f(131,"04"),l(),s(132,"div",29),f(133,"UX Map"),l()(),s(134,"div",30),f(135,"Explore the app effortlessly with our UX map, highlighting key pages like Log in, Sign Up, Home, New Workout, and Search.This visual guide enhances user understanding, ensuring a seamless and intuitive journey through the app's core functionalities. Experience user-friendly navigation strategically mapped for your fitness journey. "),l()(),s(136,"div"),p(137,"img",35),l()(),s(138,"div")(139,"div",26)(140,"div",27)(141,"h1",28),f(142,"05"),l(),s(143,"div",29),f(144,"Details"),l()(),s(145,"div",30),f(146,"We've compiled content from various pages and additional representations like Apple Watch integration and the dynamic island feature. Uncover the meticulous attention to detail that enhances Hevy app. Welcome to the core of the app, where precision and innovation converge for an immersive fitness encounter. "),l()(),s(147,"div"),p(148,"img",36),l()()(),s(149,"main",37)(150,"div",15)(151,"h1",38),f(152,"Other screens"),l(),s(153,"span",39),f(154,"These are like the easter eggs of our app - features and functionalities that were so good, we saved them for last."),l()(),s(155,"div"),p(156,"img",40),l()(),s(157,"main",41)(158,"div"),p(159,"app-footer"),l(),s(160,"div",15)(161,"span",42),f(162,"Made with "),p(163,"fa-icon",43),f(164," by Shaikh Ejaz"),l()()()()),r&2&&(u(74),C("icon",n.faEdit),u(6),C("icon",n.faDiagramProject),u(6),C("icon",n.faFolder),u(77),C("icon",n.faHeart))},dependencies:[P,D,a2,e2],styles:[".home[_ngcontent-%COMP%]{background-color:#0d0d0d}.h1-font[_ngcontent-%COMP%]{font-size:3rem!important;background:linear-gradient(160deg,#fff,#0d0d0d);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.span-text[_ngcontent-%COMP%]{-webkit-text-fill-color:#5094fd}.div-text[_ngcontent-%COMP%]{color:#636363}.second-main[_ngcontent-%COMP%]{color:#555}.second-div[_ngcontent-%COMP%]:hover{color:#fff}.card[_ngcontent-%COMP%]{color:#fff;border-radius:1.2rem;padding:2rem;background:#0f0f0f;border:.5px solid #1d1d1d}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transition:.5s all;background:linear-gradient(45deg,#131c25,#4c7ba7,#9db9d5)}.fontAwesome[_ngcontent-%COMP%]{color:#0d0d0d;background:#fff;padding:.8rem 1rem;border-radius:3rem;width:fit-content}"]});let c=a;return c})();var e0=()=>["/"],r0=()=>["/signUp"],Q3=(()=>{let a=class a{constructor(){this.faAppleAlt=Y2}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-sign-in"]],standalone:!0,features:[N],decls:40,vars:5,consts:[[1,"main-signIn"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],[1,"SignIncard"],[1,"text-center"],[1,"navbar-brand",3,"routerLink"],[1,"my-3","text-end"],[1,"form-floating","my-2"],["type","text","id","floatingInput","placeholder","Username",1,"form-control"],["for","floatingInput"],["type","password","id","floatingPassword","placeholder","Password",1,"form-control"],["for","floatingPassword"],["href","",1,"",2,"text-decoration","none"],[1,"btn","btn-primary","rounded-pill","mt-3",2,"padding","0.7rem 0"],[1,"d-flex","justify-content-center","my-4"],[1,"orLine"],[1,"mx-2"],[1,"btn","btn-light","my-2","rounded-pill",2,"padding","0.7rem 0"],[3,"icon"],[2,"color","#757575"],[2,"text-decoration","none",3,"routerLink"]],template:function(r,n){r&1&&(s(0,"section")(1,"main",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"a",4),f(6,"HEVY"),l(),s(7,"h4"),f(8,"Welcome back!"),l(),s(9,"span"),f(10,"Please sign in to your account."),l()(),s(11,"div",5)(12,"div",6),p(13,"input",7),s(14,"label",8),f(15,"Username"),l()(),s(16,"div",6),p(17,"input",9),s(18,"label",10),f(19,"Password"),l()(),s(20,"a",11),f(21,"Forgot Password?"),l()(),s(22,"button",12),f(23,"Sign in"),l(),s(24,"div",13),p(25,"hr",14),s(26,"span",15),f(27," or "),l(),p(28,"hr",14),l(),s(29,"button",16),f(30,"Sign in with Google"),l(),s(31,"button",16),p(32,"fa-icon",17),f(33," Sign in with Apple"),l()(),s(34,"div",3)(35,"span",18),f(36,"Dont't have an account? "),s(37,"a",19),f(38,"Sign up"),l()()()()()(),p(39,"router-outlet")),r&2&&(u(5),C("routerLink",A(3,e0)),u(27),C("icon",n.faAppleAlt),u(5),C("routerLink",A(4,r0)))},dependencies:[$,k2,f2,P,D],styles:['.main-signIn[_ngcontent-%COMP%]{background-color:#0d0d0d;display:flex;flex-direction:column;justify-content:center;height:100vh}.form-control[_ngcontent-%COMP%]{background:transparent!important;border:1px solid #757575!important;border-radius:1.2rem!important;color:#757575!important}.form-control[_ngcontent-%COMP%]:focus{color:#fff!important;background-color:transparent!important;border-color:none!important;outline:none!important;box-shadow:none!important}.form-floating[_ngcontent-%COMP%] > .form-control-plaintext[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-select[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:after{position:absolute;inset:1rem .375rem;z-index:-1;height:1.5em;content:"";background-color:transparent!important;border-radius:none!important}.SignIncard[_ngcontent-%COMP%]{width:35%;color:#fff!important;border-radius:1.2rem;padding:2rem;background:#0f0f0f;border:.5px solid #1d1d1d;--bs-card-spacer-y: 1rem;--bs-card-spacer-x: 1rem;--bs-card-title-spacer-y: .5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width: var(--bs-border-width);--bs-card-border-color: var(--bs-border-color-translucent);--bs-card-border-radius: var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y: .5rem;--bs-card-cap-padding-x: 1rem;--bs-card-cap-bg: rgba(var(--bs-body-color-rgb), .03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg: var(--bs-body-bg);--bs-card-img-overlay-padding: 1rem;--bs-card-group-margin: .75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-clip:border-box}.orLine[_ngcontent-%COMP%]{height:3px;color:#fff;width:40%}']});let c=a;return c})();var K3=(()=>{let a=class a{constructor(){this.title="basicWeb"}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-root"]],standalone:!0,features:[N],decls:1,vars:0,template:function(r,n){r&1&&p(0,"router-outlet")},dependencies:[B1,k2,$]});let c=a;return c})();var i0=()=>["/"],n0=()=>["/signIn"],J3=(()=>{let a=class a{constructor(){this.faAppleAlt=Y2}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-sign-up"]],standalone:!0,features:[N],decls:45,vars:5,consts:[[1,"main-signUp"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],[1,"SignUpcard"],[1,"text-center"],[1,"navbar-brand",3,"routerLink"],[1,"my-3"],[1,"form-floating","my-2"],["type","email","id","floatingInput","placeholder","Email",1,"form-control"],["for","floatingInput"],["type","password","id","floatingPassword","placeholder","Password",1,"form-control"],["for","floatingPassword"],["type","password","id","floatingPassword","placeholder","Confirm Password",1,"form-control"],[1,"form-check"],["type","checkbox","value","","id","flexCheckChecked","checked","",1,"form-check-input"],["for","flexCheckChecked",1,"form-check-label"],[1,"btn","btn-primary","rounded-pill","mt-3",2,"padding","0.7rem 0"],[1,"d-flex","justify-content-center","my-4"],[1,"orLine"],[1,"mx-2"],[1,"btn","btn-light","my-2","rounded-pill",2,"padding","0.7rem 0"],[3,"icon"],[2,"color","#757575"],[2,"text-decoration","none",3,"routerLink"]],template:function(r,n){r&1&&(s(0,"section")(1,"main",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"a",4),f(6,"HEVY"),l(),s(7,"h4"),f(8,"Create an account"),l(),s(9,"span"),f(10,"Please sign up and create a new account."),l()(),s(11,"div",5)(12,"div",6),p(13,"input",7),s(14,"label",8),f(15,"Email"),l()(),s(16,"div",6),p(17,"input",9),s(18,"label",10),f(19,"Password"),l()(),s(20,"div",6),p(21,"input",11),s(22,"label",10),f(23,"Confirm Password"),l()(),s(24,"div",12),p(25,"input",13),s(26,"label",14),f(27," Agree to terms and conditions "),l()()(),s(28,"button",15),f(29,"Sign Up"),l(),s(30,"div",16),p(31,"hr",17),s(32,"span",18),f(33," or "),l(),p(34,"hr",17),l(),s(35,"button",19),f(36,"Sign Up with Google"),l(),s(37,"button",19),p(38,"fa-icon",20),f(39," Sign Up with Apple"),l()(),s(40,"div",3)(41,"span",21),f(42,"Have an account? "),s(43,"a",22),f(44,"Sign In"),l()()()()()()),r&2&&(u(5),C("routerLink",A(3,i0)),u(33),C("icon",n.faAppleAlt),u(5),C("routerLink",A(4,n0)))},dependencies:[$,f2,P,D],styles:['.main-signUp[_ngcontent-%COMP%]{background-color:#0d0d0d;display:flex;flex-direction:column;justify-content:center;height:100vh}.form-control[_ngcontent-%COMP%]{background:transparent!important;border:1px solid #757575!important;border-radius:1.2rem!important;color:#757575!important}.form-control[_ngcontent-%COMP%]:focus{color:#fff!important;background-color:transparent!important;border-color:none!important;outline:none!important;box-shadow:none!important}.form-floating[_ngcontent-%COMP%] > .form-control-plaintext[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-select[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:after{position:absolute;inset:1rem .375rem;z-index:-1;height:1.5em;content:"";background-color:transparent!important;border-radius:none!important}.SignUpcard[_ngcontent-%COMP%]{width:35%;color:#fff!important;border-radius:1.2rem;padding:2rem;background:#0f0f0f;border:.5px solid #1d1d1d;--bs-card-spacer-y: 1rem;--bs-card-spacer-x: 1rem;--bs-card-title-spacer-y: .5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width: var(--bs-border-width);--bs-card-border-color: var(--bs-border-color-translucent);--bs-card-border-radius: var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y: .5rem;--bs-card-cap-padding-x: 1rem;--bs-card-cap-bg: rgba(var(--bs-body-color-rgb), .03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg: var(--bs-body-bg);--bs-card-img-overlay-padding: 1rem;--bs-card-group-margin: .75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-clip:border-box}.orLine[_ngcontent-%COMP%]{height:3px;color:#fff;width:40%}']});let c=a;return c})();var Z3=(()=>{let a=class a{constructor(){this.faHeart=c2}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-workout"]],standalone:!0,features:[N],decls:31,vars:1,consts:[[1,"home"],[1,"main-six","py-5","px-5"],[1,"d-flex","justify-content-center","align-items-center","flex-column","text-center"],[1,"h1-font","col-5","my-5"],[1,"span-text"],[1,"col-8",2,"color","#555555","font-size","1.2rem"],["src","assets/images/anyting.jpg","alt","",2,"width","100%"],["src","assets/images/anything1.jpg","alt","",2,"width","100%"],[1,"main-seven","py-5","px-5"],[1,"h1-font","col-8","my-5"],["src","assets/images/workout.jpg","alt","",2,"width","100%"],[1,"main-eleven","py-5","px-5"],[1,"col-8","my-2",2,"color","#555555"],[2,"color","red",3,"icon"]],template:function(r,n){r&1&&(s(0,"section"),p(1,"app-navbar"),l(),s(2,"section",0)(3,"main",1)(4,"div",2)(5,"h1",3),f(6,"Keep up with your frineds' latest workouts at "),s(7,"span",4),f(8,"anytime"),l()(),s(9,"span",5),f(10,"Creates a sense of community and inspiration as you share achievements in real-time, creating a supportive environment for everyone on their health and wellness adventure."),l()(),s(11,"div"),p(12,"img",6)(13,"img",7),l()(),s(14,"main",8)(15,"div",2)(16,"h1",9),f(17,"Start a new workout, use your saved routines or continue where you left it "),l(),s(18,"span",5),f(19,"Choose your fitness path effortlessly - start a new workout , leverage your saved routines, or seamlessly pick up where you left off. Whether you seek variety or consistency, we've got you covered for a personalized and adaptive fitness experience."),l()(),s(20,"div"),p(21,"img",10),l()(),s(22,"section")(23,"main",11)(24,"div"),p(25,"app-footer"),l(),s(26,"div",2)(27,"span",12),f(28,"Made with "),p(29,"fa-icon",13),f(30," by Shaikh Ejaz"),l()()()()()),r&2&&(u(29),C("icon",n.faHeart))},dependencies:[e2,a2,P,D],styles:[".home[_ngcontent-%COMP%]{background-color:#0d0d0d}.h1-font[_ngcontent-%COMP%]{font-size:3rem!important;background:linear-gradient(160deg,#fff,#0d0d0d);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.span-text[_ngcontent-%COMP%]{-webkit-text-fill-color:#5094fd}"]});let c=a;return c})();var c4=(()=>{let a=class a{constructor(){this.faHeart=c2}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-nutrition"]],standalone:!0,features:[N],decls:28,vars:1,consts:[[1,"home"],[1,"main-eight","py-5","px-5"],[1,"d-flex","justify-content-center","align-items-center","flex-column","text-center"],[1,"h1-font","col-8","my-5"],[1,"span-text"],[1,"col-8",2,"color","#555555","font-size","1.2rem"],["src","assets/images/fitness.jpg","alt","",2,"width","100%"],[1,"main-nine","py-5","px-5"],["src","assets/images/dynamic.jpg","alt","",2,"width","100%"],[1,"main-eleven","py-5","px-5"],[1,"col-8","my-2",2,"color","#555555"],[2,"color","red",3,"icon"]],template:function(r,n){r&1&&(s(0,"section"),p(1,"app-navbar"),l(),s(2,"section",0)(3,"main",1)(4,"div",2)(5,"h1",3),f(6,"Not just a gym app, track calories, workouts, nutrition - "),s(7,"span",4),f(8,"anywhere, anytime"),l()(),s(9,"span",5),f(10,"More than just a gym app - track calories, workouts, nutrition anytime, anywhere. Your all-in-one fitness companion for a seamless health journey."),l()(),s(11,"div"),p(12,"img",6),l()(),s(13,"main",7)(14,"div",2)(15,"h1",3),f(16,"Dynamic Island Preview & Widget"),l()(),s(17,"div"),p(18,"img",8),l()(),s(19,"section")(20,"main",9)(21,"div"),p(22,"app-footer"),l(),s(23,"div",2)(24,"span",10),f(25,"Made with "),p(26,"fa-icon",11),f(27," by Shaikh Ejaz"),l()()()()()),r&2&&(u(26),C("icon",n.faHeart))},dependencies:[e2,a2,P,D],styles:[".home[_ngcontent-%COMP%]{background-color:#0d0d0d}.h1-font[_ngcontent-%COMP%]{font-size:3rem!important;background:linear-gradient(160deg,#fff,#0d0d0d);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.span-text[_ngcontent-%COMP%]{-webkit-text-fill-color:#5094fd}"]});let c=a;return c})();var a4=(()=>{let a=class a{constructor(){this.faHeart=c2,this.faArrowRight=j3}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b({type:a,selectors:[["app-contact"]],standalone:!0,features:[N],decls:71,vars:3,consts:[[1,"home"],[1,"main-eight","py-5","px-5","mb-3"],[1,"d-flex","justify-content-center","align-items-center","flex-column","text-center"],[1,"h1-font","col-8","my-5"],[1,"span-text"],[1,"col-8",2,"color","#555555","font-size","1.2rem"],[1,"main-contact"],[1,"Maincard"],[1,"mb-5",2,"color","#a9bcd9"],[1,"me-3",2,"color","#1c8ef7",3,"icon"],[1,"form-floating","mb-4"],["type","text","id","flaotingInput","placeholder","Name",1,"form-control"],["for","flaotingInput"],["type","text","id","flaotingInput2","placeholder","Your Email",1,"form-control"],["for","flaotingInput2"],["type","text","id","flaotingInput3","placeholder","Reason",1,"form-control"],["for","flaotingInput3"],["type","text","id","flaotingInput4","placeholder","Phone no",1,"form-control"],["for","flaotingInput4"],["type","text","id","flaotingInput5","placeholder","Message",1,"form-control"],["for","flaotingInput5"],[1,"d-flex","justify-content-end","mt-5"],[1,"btn","btn-primary","py-2","px-3","rounded-pill",2,"background","#d83665","border","none"],[1,"Sidecard"],[1,"mb-4",2,"color","#304a77","font-size","2.5rem","font-weight","300"],[2,"color","#5e86c3","font-weight","600"],[2,"color","#7598d2"],[2,"color","#4f70a9"],[1,"d-flex","my-3"],[1,"form-check","me-5"],["type","radio","name","flexRadioDefault","id","flexRadioDefault1",1,"form-check-input"],["for","flexRadioDefault1",1,"form-check-label"],[1,"form-check"],[1,"mt-5"],[2,"color","#4e72a8",3,"icon"],[1,"main-eleven","py-5","px-5"],[1,"col-8","my-2",2,"color","#555555"],[2,"color","red",3,"icon"]],template:function(r,n){r&1&&(s(0,"section"),p(1,"app-navbar"),l(),s(2,"section",0)(3,"main",1)(4,"div",2)(5,"h1",3),f(6,"Contact Us - "),s(7,"span",4),f(8,"anytime"),l()(),s(9,"span",5),f(10,"We'd love to talk about how we can work together."),l()()(),s(11,"main",6)(12,"div",7)(13,"span",8),p(14,"fa-icon",9),f(15," Hello, Lets get in touch "),l(),s(16,"div")(17,"div",10),p(18,"input",11),s(19,"label",12),f(20,"Name"),l()(),s(21,"div",10),p(22,"input",13),s(23,"label",14),f(24,"Your Email"),l()(),s(25,"div",10),p(26,"input",15),s(27,"label",16),f(28,"Reason for contact"),l()(),s(29,"div",10),p(30,"input",17),s(31,"label",18),f(32,"Phone no"),l()(),s(33,"div",10),p(34,"input",19),s(35,"label",20),f(36,"Message"),l()(),s(37,"div",21)(38,"button",22),f(39,"SEND MESSAGE"),l()()()(),s(40,"div",23)(41,"div")(42,"div",24),f(43,"We'd love to Hear "),s(44,"span",25),f(45,"from you"),l()(),s(46,"span",26),f(47,"infohevy.in"),l()(),s(48,"div")(49,"span",27),f(50,"Preferd method of communication"),l(),s(51,"div",28)(52,"div",29),p(53,"input",30),s(54,"label",31),f(55," Phone "),l()(),s(56,"div",32),p(57,"input",30),s(58,"label",31),f(59," Email "),l()()(),s(60,"div",33),p(61,"fa-icon",34),l()()()(),s(62,"section")(63,"main",35)(64,"div"),p(65,"app-footer"),l(),s(66,"div",2)(67,"span",36),f(68,"Made with "),p(69,"fa-icon",37),f(70," by Shaikh Ejaz"),l()()()()()),r&2&&(u(14),C("icon",n.faHeart),u(47),C("icon",n.faArrowRight),u(8),C("icon",n.faHeart))},dependencies:[P,D,e2,a2],styles:['.home[_ngcontent-%COMP%]{background-color:#0d0d0d}.h1-font[_ngcontent-%COMP%]{font-size:3rem!important;background:linear-gradient(160deg,#fff,#0d0d0d);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.span-text[_ngcontent-%COMP%]{-webkit-text-fill-color:#5094fd}.Maincard[_ngcontent-%COMP%]{width:50%;padding:5rem!important;color:#697585;border-radius:1.2rem 0 0 1.2rem;padding:2rem;background:#111112;border:none!important}.main-contact[_ngcontent-%COMP%]{display:flex;justify-content:center}.Sidecard[_ngcontent-%COMP%]{width:30%;padding:5rem!important;color:#fff;border-radius:0 1.2rem 1.2rem 0;padding:2rem;background:#15191f;border:none!important;display:flex;flex-direction:column;justify-content:space-between}.form-control[_ngcontent-%COMP%]{background:transparent!important;border-bottom:2px solid #1f2b3d!important;border:none}.form-control[_ngcontent-%COMP%]:focus{color:#fff!important;background-color:transparent!important;border-color:none!important;outline:none!important;box-shadow:none!important}.form-floating[_ngcontent-%COMP%] > .form-control-plaintext[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]:after, .form-floating[_ngcontent-%COMP%] > .form-select[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:after{position:absolute;inset:1rem .375rem;z-index:-1;height:1.5em;content:"";background-color:transparent!important;border-radius:none!important}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#46ca6c;border-color:#46ca6c}']});let c=a;return c})();var e4=[{path:"",component:$3},{path:"signIn",component:Q3},{path:"signUp",component:J3},{path:"workout",component:Z3},{path:"nutrition",component:c4},{path:"contact",component:a4}];var r4={providers:[O1(e4,I1()),R1()]};var s0={providers:[U1()]},i4=F1(r4,s0);var o0=()=>D1(K3,i4),w8=o0;export{w8 as a};
