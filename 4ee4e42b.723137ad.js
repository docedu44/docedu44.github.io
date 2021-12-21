(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||l[b]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(146)),o={id:"ts-in-redux",title:"TS in Redux"},c={unversionedId:"ourExperience/react/redux/ts-in-redux",id:"ourExperience/react/redux/ts-in-redux",isDocsHomePage:!1,title:"TS in Redux",description:"Tips",source:"@site/docs/ourExperience/react/redux/ts-in-redux.mdx",slug:"/ourExperience/react/redux/ts-in-redux",permalink:"/docs/ourExperience/react/redux/ts-in-redux",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ourExperience/react/redux/ts-in-redux.mdx",version:"current",sidebar:"someSidebar",previous:{title:"reducers",permalink:"/docs/ourExperience/react/redux/reducers"},next:{title:"test and eslint",permalink:"/docs/ourExperience/react/test-in-react-next/ts-jest"}},p=[{value:"Tips",id:"tips",children:[]},{value:"dispatch in action",id:"dispatch-in-action",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"tips"},"Tips"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"\u0647\u0645\u06cc\u0634\u0647 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0628\u0631\u0627\u06cc \u0647\u0645\u0647 \u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," \u0647\u0627 \u06cc\u06a9 \u0627\u0633\u062a\u06cc\u062a ",Object(a.b)("inlineCode",{parentName:"p"},"loading")," \u06a9 ",Object(a.b)("inlineCode",{parentName:"p"},"boolean")," \u0627\u0633\u062a \u0648 \u06cc\u06a9 ",Object(a.b)("inlineCode",{parentName:"p"},"error")," \u06a9 \u06cc\u06a9 ",Object(a.b)("inlineCode",{parentName:"p"},"string")," \u0627\u0633\u062a \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"\u0647\u0645\u06cc\u0634\u0647 \u0628\u0631\u0627\u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"type")," \u0647\u0627 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06a9 \u06cc\u06a9 ",Object(a.b)("inlineCode",{parentName:"p"},"enum")," \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u0645 \u0648 \u0622\u0646 \u0631\u0627 \u062f\u0631 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062f\u06cc\u06af\u0631 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645 \u062a\u0627 \u062f\u0631 ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," \u0647\u0627 \u0648 ",Object(a.b)("inlineCode",{parentName:"p"},"action")," \u0647\u0627 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"\u0628\u0631\u0627\u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"interface")," \u0647\u0627 \u0646\u06cc\u0632 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062c\u062f\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645 \u0628\u0631\u0627\u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," \u0647\u0627 \u06a9 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0627\u0631\u062f \u06a9 \u0686\u0646\u062f \u0645\u062f\u0644 \u062f\u0627\u062f\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645\u060c \u0627\u0632 \u0686\u0646\u062f ",Object(a.b)("inlineCode",{parentName:"p"},"interface")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u062f\u0631 \u0627\u0646\u062a\u0647\u0627 \u0622\u0646 \u0647\u0627 \u0631\u0627 \u06cc\u06a9 ",Object(a.b)("inlineCode",{parentName:"p"},"type")," \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u0627\u0632 \u0622\u0646 \u062f\u0631 ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," \u0647\u0627 \u0648 ",Object(a.b)("inlineCode",{parentName:"p"},"action")," \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645."))),Object(a.b)("h3",{id:"dispatch-in-action"},"dispatch in action"),Object(a.b)("p",null,"\u0645\u06cc\u062a\u0648\u0627\u0646 \u062f\u0631 ",Object(a.b)("inlineCode",{parentName:"p"},"action")," \u0647\u0627 \u0647\u0646\u06af\u0627\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," \u0627\u0632 \u062a\u0627\u06cc\u067e \u0645\u062e\u0635\u0648\u0635 \u062e\u0648\u062f\u0634 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u0628\u0647 \u062c\u0627\u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"any")," \u0648 \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0632 ",Object(a.b)("inlineCode",{parentName:"p"},"interface")," \u0647\u0627 \u062e\u0648\u062f\u0645\u0627\u0646 \u0628\u0631\u0627\u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0622\u0646 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a ",Object(a.b)("inlineCode",{parentName:"p"},"generic")," \u0628\u0647 \u0622\u0646 \u0628\u062f\u0647\u06cc\u0645:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import axios from "axios";\nimport {RepositoriesActions} from "../actions/repositoriesActions";\nimport {RepositoriesActionType} from "../action-types/repositoriesActionTypes";\nimport {Dispatch} from "redux";\n\nexport const searchRepositories = (term: string) => {\n    return async (dispatch: Dispatch<RepositoriesActions>) => {\n        dispatch({\n            type: RepositoriesActionType.SEARCH_REPOSITORIES\n        });\n\n        try {\n            const {data }: any = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`);\n            const names = data.objects.map((result: any) => {\n                return result.package.name\n            });\n\n            dispatch({\n                type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,\n                payload: names\n            })\n        } catch (e: any) {\n            dispatch({\n                type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR,\n                payload: e.message\n            })\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);