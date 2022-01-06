(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return i}));var r=t(3),o=t(7),a=(t(0),t(148)),c={id:"good-stuff1",title:"\u0646\u06a9\u0627\u062a react - \u0628\u062e\u0634 1"},p={unversionedId:"ourExperience/react/good-stuff1",id:"ourExperience/react/good-stuff1",isDocsHomePage:!1,title:"\u0646\u06a9\u0627\u062a react - \u0628\u062e\u0634 1",description:"()React.memo",source:"@site/docs/ourExperience/react/good-stuff1.mdx",slug:"/ourExperience/react/good-stuff1",permalink:"/docs/ourExperience/react/good-stuff1",version:"current",sidebar:"someSidebar",previous:{title:"\u0627\u0633\u062a\u0627\u0631\u062a\u0631 nest js",permalink:"/docs/ourExperience/nestjs/nestjs-starter"},next:{title:"redux tool kit",permalink:"/docs/ourExperience/react/redux-tool-kit/reduxtoolkit"}},l=[{value:"()React.memo",id:"reactmemo",children:[]},{value:"ENV.",id:"env",children:[]},{value:"etc",id:"etc",children:[]}],s={toc:l};function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"reactmemo"},"()React.memo"),Object(a.b)("p",null,"\u062a\u0648\u0633\u0637 \u06a9\u062f \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"Re-render"))," \u0686\u0646\u062f \u0628\u0627\u0631\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u06a9\u0631\u062f:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'    import React from "react"\n\n    const Greeting = React.memo(props => {\n        console.log("Greeting Comp render");\n        return <h1>Hi {props.name}!</h1>;\n    });\n')),Object(a.b)("h3",{id:"env"},"ENV."),Object(a.b)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0631 ",Object(a.b)("strong",{parentName:"p"},"React")," \u0627\u0632 ",Object(a.b)("strong",{parentName:"p"},"env.")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u06a9\u0627\u0641\u06cc\u0633\u062a \u06cc\u06a9 \u0641\u0627\u06cc\u0644 ",Object(a.b)("strong",{parentName:"p"},"env.")," \u062f\u0631 \u0631\u0648\u062a \u067e\u0631\u0648\u0698\u0647 \u0628\u0633\u0627\u0632\u06cc\u0645 ( \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c \u0622\u0646 \u0631\u0627 \u0646\u06cc\u0632 \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645 : ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add dotenv -D")," )\u060c \u062d\u0627\u0644 \u0645\u06cc\u062a\u0648\u0627\u0646 \u062a\u0648\u0633\u0637 \u0627\u0644\u06af\u0648 \u0632\u06cc\u0631\u060c \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},'    SKIP_PREFLIGHT_CHECK=true\n    REACT_APP_BASENAME= ""\n    REACT_APP_SECRET_NAME = mamad\n')),Object(a.b)("p",null,"\u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0628\u0627 ",Object(a.b)("strong",{parentName:"p"},"_REACT_APP")," \u0634\u0631\u0648\u0639 \u0634\u0648\u062f \u0648 \u062d\u062a\u0645\u0627 \u0628\u0639\u062f \u0627\u0632 \u062a\u063a\u06cc\u06cc\u0631 ",Object(a.b)("strong",{parentName:"p"},"env.")," \u0628\u0627\u06cc\u062f \u0627\u067e \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0631\u0627\u0646 \u06a9\u0646\u06cc\u0645.\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0631\u06cc \u0628\u0647 \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 \u06a9\u062f\u0645\u0627\u0646 \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0628\u0647 \u0622\u0646 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"    console.log(process.env.REACT_APP_SECRET_NAME)\n")),Object(a.b)("p",null,"\ud83c\udf89\ud83c\udf89 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 ",Object(a.b)("strong",{parentName:"p"},"gitignore.")," \u0646\u06cc\u0632 \u0622\u0646 \u0631\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645."),Object(a.b)("p",null,"\u0645\u0646\u0628\u0639: ",Object(a.b)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables/"},"create-react-app")),Object(a.b)("h3",{id:"etc"},"etc"),Object(a.b)("p",null,"\ud83c\udf89 \u062a\u0648\u0633\u0637 \u062f\u06a9\u0645\u0647 \u0647\u0627\u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"WINDOWS + V")," \u0645\u06cc \u062a\u0648\u0627\u0646 ",Object(a.b)("strong",{parentName:"p"},"clipboard")," \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0631\u062f."),Object(a.b)("p",null,"\ud83c\udf89 \u062a\u0648\u0633\u0637 \u062f\u06a9\u0645\u0647 \u0647\u0627\u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"WINDOWS + SHIFT + S")," \u0645\u06cc \u062a\u0648\u0627\u0646 ",Object(a.b)("strong",{parentName:"p"},"print screen")," \u06af\u0631\u0641\u062a."),Object(a.b)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0631\u0648\u0631 \u0647\u0627 \u0628\u0647 ",Object(a.b)("strong",{parentName:"p"},"Interceptors")," \u062e\u0648\u062f ",Object(a.b)("strong",{parentName:"p"},"Axios")," \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f\u060c \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0627\u0631\u0648\u0631 \u0631\u0627 \u062f\u0631 ",Object(a.b)("strong",{parentName:"p"},"()catch")," \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u0645\u0627\u0646 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u06cc\u0645 ( ",Object(a.b)("strong",{parentName:"p"},"return")," )."),Object(a.b)("p",null,"\ud83c\udf89 \u062f\u0631 ",Object(a.b)("inlineCode",{parentName:"p"},"React")," \u0645\u0627 4 ",Object(a.b)("inlineCode",{parentName:"p"},"property")," \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u0645\u0633\u062a\u0642\u06cc\u0645\u0627 \u0628\u0647 \u062e\u0648\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u062a\u0635\u0644 \u0645\u06cc \u0634\u0648\u0646\u062f \u0648 \u0647\u0631 \u06a9\u062f\u0627\u0645 \u06a9\u0627\u0631\u06cc\u06cc \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc \u062f\u0647\u0646\u062f:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"propTypes")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"displayName")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"defaultProps")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"contextTypes"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'    interface ChildProps {\n    color: string;\n}\n    export const Child = ({color}: ChildProps) => {\n    return <h1>{color}</h1>\n}\n    Child.defaultProps = {\n    color: "blue"\n}\n    //! OR\n    export const ChildAsFC : React.FC<ChildProps> = ({color}) => {\n    return <div>{color}</div>\n}\n    ChildAsFC.defaultProps = {\n        color: "green"\n    }\n')),Object(a.b)("p",null,"\ud83c\udf89 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u06cc\u06a9 \u062e\u0637 \u06a9\u062f \u0631\u0627 \u062f\u0631 \u0634\u0631\u0627\u06cc\u0637\u06cc \u06a9 \u0645\u0642\u062f\u0627\u0631 \u0645\u0648\u062c\u0648\u062f ",Object(a.b)("inlineCode",{parentName:"p"},"falsy")," \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u0646\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u0645\u060c \u0627\u0632 ",Object(a.b)("inlineCode",{parentName:"p"},"type guard")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"    useEffect(() => {\n        if(!inputRef.current) {\n            return;\n        }\n        inputRef.current.focus()\n    }, [])\n")),Object(a.b)("p",null,"\ud83c\udf89 \u0647\u0646\u06af\u0627\u0645\u06cc \u06a9 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u06cc\u06a9 \u0622\u0628\u062c\u06a9\u062a \u0631\u0627 \u0627\u0632 \u06cc\u06a9 \u0622\u0631\u0627\u06cc\u0647 \u0628\u06cc\u0631\u0648\u0646 \u0628\u06a9\u0634\u06cc\u0645 \u0648 \u06cc\u06a9 \u067e\u0631\u0627\u067e\u0631\u062a\u06cc \u0627\u0632 \u0622\u0646 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 2 \u0631\u0648\u0634 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'  const [persons, setPersons] = useState([\n     { key: 1, name: "\u0645\u062d\u0645\u062f \u0641\u0631\u0647\u0627\u062f\u06cc", completed: false },\n    { key: 2, name: "\u0627\u062a\u0627\u0628\u06a9 \u0647\u0648\u0634\u0646\u06af\u06cc", completed: false }]);\n\n  const completedHandler = (key) => {\n    const allPerson = [...persons];\n    //! Way 1\n    // const personIndex = allPerson.findIndex(person => person.key === key);\n    // const person = allPerson[personIndex];\n    // person.completed = !person.completed;\n    // allPerson[personIndex] = person;\n    // setPersons(allPerson);\n    //! Way 2\n    const person = allPerson.find((person) => person.key === key);\n    person.completed = !person.completed;\n    setPersons(allPerson);\n  };\n')))}i.isMDXComponent=!0},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),i=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=i(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=i(t),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(m,p(p({ref:n},s),{},{components:t})):o.a.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);