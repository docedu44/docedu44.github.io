(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),c=(t(0),t(122)),a={id:"good-stuff1",title:"\u0646\u06a9\u0627\u062a react - \u0628\u062e\u0634 1"},i={unversionedId:"ourExperience/react/good-stuff1",id:"ourExperience/react/good-stuff1",isDocsHomePage:!1,title:"\u0646\u06a9\u0627\u062a react - \u0628\u062e\u0634 1",description:"()React.memo",source:"@site/docs/ourExperience/react/good-stuff1.mdx",slug:"/ourExperience/react/good-stuff1",permalink:"/docs/ourExperience/react/good-stuff1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ourExperience/react/good-stuff1.mdx",version:"current",sidebar:"someSidebar",previous:{title:"\u0627\u0633\u062a\u0627\u0631\u062a\u0631 nest js",permalink:"/docs/ourExperience/nestjs/nestjs-starter"},next:{title:"\u0686\u06a9\u06cc\u062f\u0647 \u06af\u0631\u0627\u0645\u0631-1",permalink:"/docs/ourExperience/english/grammar/grammar1"}},u=[{value:"()React.memo",id:"reactmemo",children:[]}],p={toc:u};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"reactmemo"},"()React.memo"),Object(c.b)("p",null,"\u062a\u0648\u0633\u0637 \u06a9\u062f \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"Re-render"))," \u0686\u0646\u062f \u0628\u0627\u0631\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u06a9\u0631\u062f:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    import React from "react"\n\n    const Greeting = React.memo(props => {\n        console.log("Greeting Comp render");\n        return <h1>Hi {props.name}!</h1>;\n    });\n'))))}s.isMDXComponent=!0},122:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),m=n,d=l["".concat(a,".").concat(m)]||l[m]||f[m]||c;return t?o.a.createElement(d,i(i({ref:r},p),{},{components:t})):o.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);