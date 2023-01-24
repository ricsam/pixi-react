"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[298],{2088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7896),o=(n(2784),n(3905));const a={},i="Render",c={unversionedId:"render/Render",id:"render/Render",title:"Render",description:"You can either render your PIXI React components in the DOM or through a custom render call.",source:"@site/docs/render/Render.mdx",sourceDirName:"render",slug:"/render/",permalink:"/render/",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/render/Render.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Spring",permalink:"/react-spring"},next:{title:"Stage",permalink:"/stage/"}},p={},l=[{value:"In ReactDOM",id:"in-reactdom",level:2},{value:"Custom render call",id:"custom-render-call",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"render"},"Render"),(0,o.kt)("p",null,"You can either render your PIXI React components in the DOM or through a custom render call."),(0,o.kt)("h2",{id:"in-reactdom"},"In ReactDOM"),(0,o.kt)("p",null,"This is the most common scenario"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Stage, Sprite } from '@pixi/react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => (\n  <div>\n    {/* somewhere in your tree */}\n    <Stage>\n      <Sprite image=\"./bunny.png\" x={100} y={100} />\n    </Stage>\n  </div>\n);\n\nReactDOM.render(<App />, document.getElementById('root'));\n")),(0,o.kt)("h2",{id:"custom-render-call"},"Custom render call"),(0,o.kt)("p",null,"You can also render a Pixi React component tree directly using the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," call and bypass ReactDOM entirely:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, Text } from '@pixi/react';\nimport { Application } from 'pixi.js';\n\n// Setup PIXI app\nconst app = new Application({\n  width: 800,\n  height: 600,\n  backgroundColor: 0x10bb99,\n  view: document.getElementById('container'),\n});\n\n// Use the custom renderer to render a valid PIXI object into a PIXI container.\nrender(<Text text=\"Hello World\" x={200} y={200} />, app.stage);\n")),(0,o.kt)("p",null,"Internally ",(0,o.kt)("inlineCode",{parentName:"p"},"pixi-react")," keeps track of a ",(0,o.kt)("inlineCode",{parentName:"p"},"roots")," list with containers, if you're removing/unmounting the container (or PIXI application),\nit's advisable to tear it down correctly. Simply call ",(0,o.kt)("inlineCode",{parentName:"p"},"unmountComponentAtNode"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, unmountComponentAtNode, Text } from '@pixi/react';\nimport { Application } from 'pixi.js';\n\nconst app = new Application({...});\n\nrender(<Text text=\"Hello World\" />, app.stage);\n\n// clean up on unmount\n// this removes the container from roots list\nunmountComponentAtNode(app.stage);\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);