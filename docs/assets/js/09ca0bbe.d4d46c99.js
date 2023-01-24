"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[356],{1708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7896),o=(n(2784),n(3905));const i={},p="SimpleRope",a={unversionedId:"components/SimpleRope",id:"components/SimpleRope",title:"SimpleRope",description:"Props",source:"@site/docs/components/SimpleRope.mdx",sourceDirName:"components",slug:"/components/SimpleRope",permalink:"/pixi-react/components/SimpleRope",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/components/SimpleRope.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SimpleMesh",permalink:"/pixi-react/components/SimpleMesh"},next:{title:"Sprite",permalink:"/pixi-react/components/Sprite"}},l={},c=[{value:"Props",id:"props",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"simplerope"},"SimpleRope"),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pixijs.download/dev/docs/PIXI.SimpleRope.html"},"https://pixijs.download/dev/docs/PIXI.SimpleRope.html")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stage width={500} height={300} options={{ backgroundColor: 0xeef1f5 }}>\n  <SimpleRope\n    points={[\n      new PIXI.Point(0, 150),\n      new PIXI.Point(100, 100),\n      new PIXI.Point(150, 150),\n      new PIXI.Point(200, 100),\n      new PIXI.Point(400, 150),\n    ]}\n    image={'../img/snake.png'}\n  />\n</Stage>\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("iframe",{height:500,scrolling:"no",title:"Rope",src:"//codepen.io/inlet/embed/wvBbJqK/?height=300&theme-id=33987&default-tab=result&embed-version=2",frameBorder:"no",allowFullScreen:!0,style:{width:"100%"}}))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);