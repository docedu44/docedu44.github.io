(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(146)),c={id:"reduxtoolkit",title:"redux tool kit",author:"sina"},i={unversionedId:"ourExperience/react/redux-tool-kit/reduxtoolkit",id:"ourExperience/react/redux-tool-kit/reduxtoolkit",isDocsHomePage:!1,title:"redux tool kit",description:"\u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627 \u062a\u0627\u06cc\u067e \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0639\u0647. \u0645\u0646\u0637\u0642\u0627 \u062a\u0627\u06cc\u067e \u0647\u0627\u0634 \u0631\u0648 \u067e\u0627\u06a9 \u06a9\u0646\u06cc\u062f \u0645\u06cc\u0634\u0647 \u062c\u0627\u0648\u0627\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a :)",source:"@site/docs/ourExperience/react/redux-tool-kit/reduxtoolkit.mdx",slug:"/ourExperience/react/redux-tool-kit/reduxtoolkit",permalink:"/docs/ourExperience/react/redux-tool-kit/reduxtoolkit",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ourExperience/react/redux-tool-kit/reduxtoolkit.mdx",version:"current",sidebar:"someSidebar",previous:{title:"\u0646\u06a9\u0627\u062a react - \u0628\u062e\u0634 1",permalink:"/docs/ourExperience/react/good-stuff1"},next:{title:"Redux Toolkit 2",permalink:"/docs/ourExperience/react/redux-tool-kit/redux-toolkit-summary"}},u=[],s={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627 \u062a\u0627\u06cc\u067e \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0639\u0647. \u0645\u0646\u0637\u0642\u0627 \u062a\u0627\u06cc\u067e \u0647\u0627\u0634 \u0631\u0648 \u067e\u0627\u06a9 \u06a9\u0646\u06cc\u062f \u0645\u06cc\u0634\u0647 \u062c\u0627\u0648\u0627\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a :)"),Object(a.b)("div",{dir:"ltr"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'\nimport { RootState } from '../store'\n\ninterface IUser {\n    loading: boolean,\n    error: any,\n    user: Object\n}\n\nconst userInitialState: IUser = {\n    loading: false,\n    error: null,\n    user: {}\n}\n\nexport const fetchRandomUser = createAsyncThunk(\n    'user/fetchRandomUser',\n    async () => {\n        try {\n            const response = await fetch('https://randomuser.me/api')\n            const data = await response.json()\n            return data.results[0]\n        } catch (err) {\n            throw new Error(err)\n        }\n    }\n)\n\nexport const userSclice = createSlice({\n    name: 'user',\n    initialState: userInitialState,\n    reducers: {\n        logout: (state) => {\n            state.user = {}\n            state.error = null\n            state.loading = false\n        }\n    },\n    extraReducers: (builder) => {\n        builder\n            .addCase(fetchRandomUser.pending, (state, action) => {\n                state.loading = true\n            })\n            .addCase(fetchRandomUser.rejected, (state, action) => {\n                state.loading = false\n                state.error = action.payload\n            })\n            .addCase(fetchRandomUser.fulfilled, (state, action) => {\n                state.loading = false\n                state.user = action.payload\n            })\n    }\n})\n\nexport const { logout } = userSclice.actions\n\nexport const useUser = (state: RootState) => state.user\n\nexport default userSclice.reducer\n\n"))),Object(a.b)("p",null,"\u0627\u0633\u0645\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc reducers \u0645\u06cc\u0630\u0627\u0631\u06cc\u062f \u062f\u0631 \u0648\u0627\u0642\u0639 \u0627\u0633\u0645 \u0627\u06a9\u0634\u0646 \u0647\u0627\u0633.\n\u0627\u06af\u0631 \u0627\u06a9\u0634\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 payload \u062f\u0627\u0631\u0647 \u062a\u0648 \u0631\u06cc\u062f\u0648\u0633\u0631 \u06cc\u0647 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 action \u0647\u0645 \u0628\u0647\u0634 \u067e\u0627\u0633 \u0628\u062f\u06cc\u062f. \u062f\u0631 \u063a\u06cc\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0646\u06cc\u0627\u0632\u06cc \u0646\u06cc\u0633\u062a."))}l.isMDXComponent=!0},146:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);