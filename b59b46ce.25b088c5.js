(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),c=(r(0),r(126)),a={id:"good-stuff1",title:"\u0646\u06a9\u0627\u062a react - \u0628\u062e\u0634 1"},p={unversionedId:"ourExperience/react/good-stuff1",id:"ourExperience/react/good-stuff1",isDocsHomePage:!1,title:"\u0646\u06a9\u0627\u062a react - \u0628\u062e\u0634 1",description:"()React.memo",source:"@site/docs/ourExperience/react/good-stuff1.mdx",slug:"/ourExperience/react/good-stuff1",permalink:"/docs/ourExperience/react/good-stuff1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ourExperience/react/good-stuff1.mdx",version:"current",sidebar:"someSidebar",previous:{title:"\u0627\u0633\u062a\u0627\u0631\u062a\u0631 nest js",permalink:"/docs/ourExperience/nestjs/nestjs-starter"},next:{title:"redux tool kit",permalink:"/docs/ourExperience/react/redux-tool-kit/reduxtoolkit"}},i=[{value:"()React.memo",id:"reactmemo",children:[]},{value:"ENV.",id:"env",children:[]},{value:"etc",id:"etc",children:[]}],b={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"reactmemo"},"()React.memo"),Object(c.b)("p",null,"\u062a\u0648\u0633\u0637 \u06a9\u062f \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"Re-render"))," \u0686\u0646\u062f \u0628\u0627\u0631\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u06a9\u0631\u062f:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'    import React from "react"\n\n    const Greeting = React.memo(props => {\n        console.log("Greeting Comp render");\n        return <h1>Hi {props.name}!</h1>;\n    });\n'))),Object(c.b)("h3",{id:"env"},"ENV."),Object(c.b)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0631 ",Object(c.b)("strong",{parentName:"p"},"React")," \u0627\u0632 ",Object(c.b)("strong",{parentName:"p"},"env.")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u06a9\u0627\u0641\u06cc\u0633\u062a \u06cc\u06a9 \u0641\u0627\u06cc\u0644 ",Object(c.b)("strong",{parentName:"p"},"env.")," \u062f\u0631 \u0631\u0648\u062a \u067e\u0631\u0648\u0698\u0647 \u0628\u0633\u0627\u0632\u06cc\u0645 ( \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c \u0622\u0646 \u0631\u0627 \u0646\u06cc\u0632 \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645 : ",Object(c.b)("inlineCode",{parentName:"p"},"yarn add dotenv -D")," )\u060c \u062d\u0627\u0644 \u0645\u06cc\u062a\u0648\u0627\u0646 \u062a\u0648\u0633\u0637 \u0627\u0644\u06af\u0648 \u0632\u06cc\u0631\u060c \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-env"},'    SKIP_PREFLIGHT_CHECK=true\n    REACT_APP_BASENAME= ""\n    REACT_APP_SECRET_NAME = mamad\n'))),Object(c.b)("p",null,"\u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0628\u0627 ",Object(c.b)("strong",{parentName:"p"},"_REACT_APP")," \u0634\u0631\u0648\u0639 \u0634\u0648\u062f \u0648 \u062d\u062a\u0645\u0627 \u0628\u0639\u062f \u0627\u0632 \u062a\u063a\u06cc\u06cc\u0631 ",Object(c.b)("strong",{parentName:"p"},"env.")," \u0628\u0627\u06cc\u062f \u0627\u067e \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0631\u0627\u0646 \u06a9\u0646\u06cc\u0645.\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0631\u06cc \u0628\u0647 \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 \u06a9\u062f\u0645\u0627\u0646 \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0628\u0647 \u0622\u0646 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"```JSX\nconsole.log(process.env.REACT_APP_SECRET_NAME)\n```\n"))),Object(c.b)("p",null,"\ud83c\udf89\ud83c\udf89 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 ",Object(c.b)("strong",{parentName:"p"},"gitignore.")," \u0646\u06cc\u0632 \u0622\u0646 \u0631\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645."),Object(c.b)("p",null,"\u0645\u0646\u0628\u0639: ",Object(c.b)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables/"},"create-react-app")),Object(c.b)("h3",{id:"etc"},"etc"),Object(c.b)("p",null,"\ud83c\udf89 \u062a\u0648\u0633\u0637 \u062f\u06a9\u0645\u0647 \u0647\u0627\u06cc ",Object(c.b)("inlineCode",{parentName:"p"},"WINDOWS + V")," \u0645\u06cc \u062a\u0648\u0627\u0646 ",Object(c.b)("strong",{parentName:"p"},"clipboard")," \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0631\u062f."),Object(c.b)("p",null,"\ud83c\udf89 \u062a\u0648\u0633\u0637 \u062f\u06a9\u0645\u0647 \u0647\u0627\u06cc ",Object(c.b)("inlineCode",{parentName:"p"},"WINDOWS + SHIFT + S")," \u0645\u06cc \u062a\u0648\u0627\u0646 ",Object(c.b)("strong",{parentName:"p"},"print screen")," \u06af\u0631\u0641\u062a."),Object(c.b)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0631\u0648\u0631 \u0647\u0627 \u0628\u0647 ",Object(c.b)("strong",{parentName:"p"},"Interceptors")," \u062e\u0648\u062f ",Object(c.b)("strong",{parentName:"p"},"Axios")," \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f\u060c \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0627\u0631\u0648\u0631 \u0631\u0627 \u062f\u0631 ",Object(c.b)("strong",{parentName:"p"},"()catch")," \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u0645\u0627\u0646 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u06cc\u0645 ( ",Object(c.b)("strong",{parentName:"p"},"return")," )."))}u.isMDXComponent=!0},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(a,".").concat(d)]||l[d]||s[d]||c;return r?o.a.createElement(m,p(p({ref:t},b),{},{components:r})):o.a.createElement(m,p({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var b=2;b<c;b++)a[b]=r[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);