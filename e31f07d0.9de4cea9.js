(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),s=(t(0),t(146)),l={id:"ts-jest",title:"test and eslint"},c={unversionedId:"ourExperience/react/test-in-react-next/ts-jest",id:"ourExperience/react/test-in-react-next/ts-jest",isDocsHomePage:!1,title:"test and eslint",description:"ts-jest",source:"@site/docs/ourExperience/react/test-in-react-next/ts-jest.mdx",slug:"/ourExperience/react/test-in-react-next/ts-jest",permalink:"/docs/ourExperience/react/test-in-react-next/ts-jest",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ourExperience/react/test-in-react-next/ts-jest.mdx",version:"current",sidebar:"someSidebar",previous:{title:"TS in Redux",permalink:"/docs/ourExperience/react/redux/ts-in-redux"},next:{title:"testing react library",permalink:"/docs/ourExperience/react/test-in-react-next/testing-react-library"}},i=[{value:"ts-jest",id:"ts-jest",children:[]},{value:"eslint",id:"eslint",children:[]},{value:"lint-staged",id:"lint-staged",children:[]},{value:"coverage",id:"coverage",children:[]},{value:"github action ( optional )",id:"github-action--optional-",children:[]}],p={toc:i};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"ts-jest"},"ts-jest"),Object(s.b)("p",null,"\u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u067e\u06a9\u06cc\u062c \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc ",Object(s.b)("inlineCode",{parentName:"p"},"react")," \u06a9 \u0628\u0627 ",Object(s.b)("inlineCode",{parentName:"p"},"type script")," \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u0627\u0646\u062f\u060c \u062a\u0633\u062a \u0646\u0648\u0634\u062a \u06a9 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 ",Object(s.b)("inlineCode",{parentName:"p"},"react"),"\u06cc\u06cc \u062e\u0648\u062f \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0631\u062f:"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation"},"ts-jest")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev jest typescript ts-jest @types/jest\n")),Object(s.b)("p",null,"\u0633\u067e\u0633 \u062a\u0648\u0633\u0637 \u06a9\u062f \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0641\u0627\u06cc\u0644 \u06a9\u0627\u0646\u0641\u06cc\u06af \u0622\u0646 \u0631\u0627 \u0628\u0647 \u067e\u0631\u0648\u0698\u0647 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npx ts-jest config:init\n")),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u0628\u0647 ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," \u06a9\u062f \u0632\u06cc\u0631 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n  "test": "jest"\n  }\n}\n')),Object(s.b)("p",null,"\u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u0641\u0627\u06cc\u0644 \u062a\u0633\u062a \u0628\u0631\u0627\u06cc \u0647\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0627\u06cc\u062f \u0628\u0639\u062f \u0627\u0632 \u0646\u0627\u0645 \u0622\u0646 \u0627\u0632 \u06a9\u0644\u0645\u0647 ",Object(s.b)("inlineCode",{parentName:"p"},"spec")," \u06cc\u0627 ",Object(s.b)("inlineCode",{parentName:"p"},"test")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0645\u062b\u0644 : ",Object(s.b)("inlineCode",{parentName:"p"},"sum.spec.ts")," \u06cc\u0627 ",Object(s.b)("inlineCode",{parentName:"p"},"sum.test.ts")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"// sum.ts\nexport const sum = (a: number, b: number) => {\n    return a + b\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"// sum.spec.ts\nimport { sum } from './sum';\nit(\"Summing 5 and 2 will return 7\", ()=> {\n    expect(sum(5, 2)).toBe(7)\n})\n")),Object(s.b)("p",null,"\u0633\u067e\u0633 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u062a\u062f \u0647\u0627\u06cc \u0627\u0632 \u067e\u06cc\u0634 \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0628\u0631\u0627\u06cc \u062a\u0633\u062a \u062f\u0631 ",Object(s.b)("inlineCode",{parentName:"p"},"react")," \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u067e\u06a9\u06cc\u062c ",Object(s.b)("inlineCode",{parentName:"p"},"react testing library")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro"},"react testing library")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @testing-library/react @testing-library/user-event @testing-library/dom @testing-library/jest-dom\n")),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc ",Object(s.b)("inlineCode",{parentName:"p"},"react")," \u06a9 \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 ",Object(s.b)("inlineCode",{parentName:"p"},"spec.tsx.*")," \u0647\u0633\u062a\u0646\u062f \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u062a\u0627 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0628\u0647 \u0646\u0627\u0645 ",Object(s.b)("inlineCode",{parentName:"p"},"tsconfig.jest.json")," \u0628\u0633\u0627\u0632\u06cc\u0645 \u0648 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0631 \u0622\u0646 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "jsx": "react-jsx"\n  }\n}\n')),Object(s.b)("p",null,"\u0633\u067e\u0633 \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u06a9 \u0641\u0627\u06cc\u0644 ",Object(s.b)("inlineCode",{parentName:"p"},"jest.config.js")," \u0631\u0627 \u0646\u06cc\u0632 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // [...]\n  testEnvironment: 'jsdom', // \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0634\u062f\u0646 \u062a\u0633\u062a \u0647\u0627 \u0628\u0627\u06cc\u062f \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0631\u0627 \u0646\u06cc\u0632 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645\n  globals: {\n    'ts-jest': {\n      tsconfig: './tsconfig.jest.json'\n    }\n  }\n}\n")),Object(s.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u062a\u0648\u0627\u0628\u0639\u06cc \u0645\u0627\u0646\u0646\u062f 2 \u062a\u0627\u0628\u0639 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u062a\u0648\u0627\u0646 \u062f\u0631 \u062a\u0633\u062a \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u0628\u0627\u06cc\u062f \u06cc\u06a9 \u06a9\u0627\u0646\u0641\u06cc\u06af \u062c\u062f\u06cc\u062f \u0631\u0627 \u0628 \u067e\u0631\u0648\u0698\u0647 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u060c \u062f\u0631 \u0648\u0627\u0642\u0639 \u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0641\u06cc\u06af \u06cc\u06a9 \u0633\u0631\u06cc \u0627\u0632 \u06a9\u062f\u0647\u0627\u06cc \u062a\u0633\u062a \u0645\u0627 \u0642\u0628\u0644 \u0627\u0632 \u0627\u062c\u0631\u0627 \u0634\u062f\u0646 \u0645\u0627\u0628\u0642\u06cc \u06a9\u062f \u0647\u0627 \u0627\u062c\u0631\u0627 \u0645\u06cc \u0634\u0648\u062f \u0648 \u0628\u0647 \u0645\u0627 \u0627\u062c\u0627\u0632\u0647 \u0627\u06cc\u0646 \u0631\u0627 \u0645\u06cc\u062f\u0647\u062f \u06a9 \u0627\u0632 \u062a\u0648\u0627\u0628\u0639 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-tsx"},'import {render, screen} from "@testing-library/react";\nimport { Hello } from "./Hello";\n\nit("rendres \'Hello world\'", () => {\n    render(<Hello/>);\n    const myElem = screen.getByText("/Hello World/");\n    expect(myElem).toBeInTheDocument();\n})\n')),Object(s.b)("p",null,"\u0627\u0632 \u0622\u062f\u0631\u0633 \u0632\u06cc\u0631 \u0628\u0627\u06cc\u062f \u06a9\u0627\u0646\u0641\u06cc\u06af \u0622\u0646 \u0631\u0627 \u0628\u0631\u062f\u0627\u0631\u06cc\u0645 \u0648 \u0628\u0647 ",Object(s.b)("inlineCode",{parentName:"p"},"jest.config.js")," \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#setupfilesafterenv-array"},"jest-setupFilesAfterEnv")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  setupFilesAfterEnv: ['./jest.setup.ts']\n};\n")),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062f\u06cc\u06af\u0631 \u0628 \u0646\u0627\u0645 ",Object(s.b)("inlineCode",{parentName:"p"},"jest.setup.ts")," \u0631\u0627 \u0645\u0633\u06cc\u0631 ",Object(s.b)("inlineCode",{parentName:"p"},"src")," \u06cc\u0627 \u0645\u0633\u06cc\u0631 ",Object(s.b)("inlineCode",{parentName:"p"},"test")," \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'import "@testing-library/jest-dom";\n')),Object(s.b)("h3",{id:"eslint"},"eslint"),Object(s.b)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",Object(s.b)("inlineCode",{parentName:"p"},"eslint")," \u0646\u06cc\u0632 \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 ",Object(s.b)("inlineCode",{parentName:"p"},"jest")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u06a9 \u062e\u06cc\u0644\u06cc \u062f\u0631 \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u0627\u0632 \u0628\u0627\u06af \u0647\u0627 \u06a9\u0645\u06a9 \u0645\u06cc \u06a9\u0646\u062f."),Object(s.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0627\u0631 \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 ",Object(s.b)("inlineCode",{parentName:"p"},"eslint")," \u062e\u0648\u062f \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 ( \u062f\u0631 \u0635\u0648\u0631\u062a \u0648\u062c\u0648\u062f ) \u0646\u0627\u0645\u0634 \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646\u06cc\u0645 ( \u062a\u0627 \u0627\u0632 \u0645\u062d\u062a\u0648\u0627\u06cc \u0622\u0646 \u062f\u0631 ",Object(s.b)("inlineCode",{parentName:"p"},"eslint")," \u062c\u062f\u06cc\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 ) \u0648 \u0633\u067e\u0633 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npx eslint --ini\n")),Object(s.b)("p",null,"\u062d\u0627\u0644 \u062f\u0631 \u0641\u0627\u06cc\u0644 \u062c\u062f\u06cc\u062f \u0627\u0632 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'// .eslintrc.js\nmodule.exports = {\n    "extends": [\n        "eslint:recommended",\n        "plugin:react/recommended",\n        "plugin:@typescript-eslint/recommended",\n        "plugin:@typescript-eslint/recommended-requiring-type-checking",\n        "next",\n        "next/core-web-vitals"\n    ],\n    // "parser": "@typescript-eslint/parser",\n    "parserOptions": {\n        "project": "./tsconfig.json",\n        "ecmaFeatures": {\n            "jsx": true\n        },\n        "ecmaVersion": 13,\n        "sourceType": "module"\n    },\n    "rules": { // \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0647\u0631 \u0642\u0627\u0646\u0648\u0646\u06cc \u0631\u0627 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u0628\u0631\u0627\u06cc \u0644\u06cc\u0646\u062a \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645\n        "@typescript-eslint/explicit-module-boundary-types": "off" // \u0628\u0631\u0627\u06cc \u063a\u06cc\u0631 \u0641\u0639\u0627\u0644 \u0633\u0627\u0632\u06cc \u06af\u06cc\u0631 \u062f\u0627\u062f\u0646 \u0628\u0647 \u062a\u0627\u06cc\u067e \u0647\u0627\u06cc \u062a\u0645\u0627\u0645\u06cc \u0641\u0627\u0646\u06a9\u0634\u0646 \u0647\u0627\n    }\n};\n')),Object(s.b)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0686\u0648\u0646 \u0645\u0627 \u0641\u0648\u0644\u062f\u0631 \u0627\u0635\u0644\u06cc ",Object(s.b)("inlineCode",{parentName:"p"},"pages")," \u062f\u0631 ",Object(s.b)("inlineCode",{parentName:"p"},"next")," \u0631\u0627 \u0628\u0647 ",Object(s.b)("inlineCode",{parentName:"p"},"src")," \u062c\u0627\u0628\u0647 \u062c\u0627 \u06a9\u0631\u062f\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 ( \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc ",Object(s.b)("inlineCode",{parentName:"p"},"next")," ) \u0645\u0633\u06cc\u0631\u06cc \u06a9 ",Object(s.b)("inlineCode",{parentName:"p"},"eslint")," \u0686\u06a9 \u0645\u06cc\u06a9\u0646\u062f \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645 ( ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," ):"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files"},"next-lint")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "lint": "next lint --dir src"\n  }\n}\n')),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u067e\u0644\u0627\u06af\u06cc\u0646 \u0647\u0627\u06cc\u06cc \u06a9 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u0628\u0631\u0627\u06cc \u0645\u062a\u0635\u0644 \u06a9\u0631\u062f\u0646 ",Object(s.b)("inlineCode",{parentName:"p"},"eslint")," \u0648 ",Object(s.b)("inlineCode",{parentName:"p"},"jest")," \u0631\u0627 \u0646\u0635\u0628 \u0648 \u0622\u0646 \u0631\u0627 \u0628\u0647 \u0641\u0627\u06cc\u0644 ",Object(s.b)("inlineCode",{parentName:"p"},".eslintrc.js")," \u062f\u0631 \u0642\u0633\u0645\u062a ",Object(s.b)("inlineCode",{parentName:"p"},"extends"),"\u060c \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-jest"},"eslint-plugin-jest")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev eslint-plugin-jest\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'// .eslintrc.js\nmodule.exports = {\n    "extends": [\n        "eslint:recommended",\n        "plugin:react/recommended",\n        "plugin:@typescript-eslint/recommended",\n        "plugin:@typescript-eslint/recommended-requiring-type-checking",\n        + "plugin:jest/recommended",\n        + "plugin:jest/style",\n        "next",\n        "next/core-web-vitals"\n    ]\n};\n')),Object(s.b)("p",null,"\u0633\u067e\u0633 \u0628\u0627\u06cc\u062f \u067e\u0644\u0627\u06af\u06cc\u0646\u06cc \u06a9 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 ",Object(s.b)("inlineCode",{parentName:"p"},"testing library")," \u0645\u06cc \u0628\u0627\u0634\u062f \u0631\u0627 \u0628\u0631\u0627\u06cc ",Object(s.b)("inlineCode",{parentName:"p"},"eslint")," \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-testing-library"},"eslint-plugin-testing-library")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev eslint-plugin-testing-library\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'// .eslintrc.js\nmodule.exports = {\n    "extends": [\n        "eslint:recommended",\n        "plugin:react/recommended",\n        "plugin:@typescript-eslint/recommended",\n        "plugin:@typescript-eslint/recommended-requiring-type-checking",\n        "plugin:jest/recommended",\n        "plugin:jest/style",\n        + "plugin:testing-library/react",\n        "next",\n        "next/core-web-vitals"\n    ]\n};\n')),Object(s.b)("h3",{id:"lint-staged"},"lint-staged"),Object(s.b)("p",null,"\u06af\u0627\u0647\u06cc \u0627\u0648\u0642\u0627\u062a \u0645\u0627 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u06a9\u062f \u0647\u0627\u06cc \u0645\u0627 \u0627\u0632 \u0646\u0638\u0631 \u0633\u0627\u062e\u062a\u0627\u0631\u06cc\u060c \u062a\u0645\u06cc\u0632 \u0628\u0634\u0648\u0646\u062f \u0648 \u0627\u06af\u0631 \u0627\u0631\u0648\u0631\u06cc \u062f\u0627\u0631\u062f\u060c \u0647\u0646\u06af\u0627\u0645 \u06a9\u0627\u0645\u06cc\u062a \u06a9\u0631\u062f\u0646\u060c \u0628 \u0645\u0627 \u0646\u0634\u0627\u0646 \u062f\u0647\u062f\u060c \u06cc\u0639\u0646\u06cc \u06cc\u06a9 ",Object(s.b)("inlineCode",{parentName:"p"},"script")," \u0642\u0628\u0644 \u0627\u0632 ",Object(s.b)("inlineCode",{parentName:"p"},"commit")," \u0627\u062c\u0631\u0627 \u0645\u06cc \u0634\u0648\u062f \u0648 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9 \u0645\u0627 \u0628 \u0622\u0646 \u06af\u0641\u062a\u0647 \u0627\u06cc\u0645 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0645\u0627 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc \u062f\u0647\u062f"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npx mrm@2 lint-staged\n")),Object(s.b)("p",null,"\u0627\u06cc\u0646 \u067e\u06a9\u06cc\u062c\u060c 2 \u067e\u06cc\u0634 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u062f \u0648 \u0628\u0627\u06cc\u062f \u0622\u0646 \u0647\u0627 \u0631\u0627 \u0646\u06cc\u0632 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev lint-staged prettier\n")),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u062f\u0631 \u0641\u0648\u0644\u062f\u0631\u06cc \u06a9 \u0646\u0627\u0645 \u0622\u0646 ",Object(s.b)("inlineCode",{parentName:"p"},"_")," \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u062f\u0631 \u0641\u0627\u06cc\u0644 ",Object(s.b)("inlineCode",{parentName:"p"},"pre-commit"),"\u060c \u06a9\u0627\u0645\u0646\u062f \u0627\u0635\u0644\u06cc \u0622\u0646 \u0631\u0627 \u0628\u0647 \u06a9\u0627\u0645\u0646\u062f \u0632\u06cc\u0631 \u062a\u063a\u06cc\u06cc\u0631 \u0628\u062f\u0647\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-text"},"npm run lint-staged\n")),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u0627\u06cc\u0646 \u062f\u0633\u062a\u0648\u0631 \u0631\u0627 \u0646\u06cc\u0632 \u062f\u0631 ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," \u0646\u06cc\u0632 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645 \u062a\u0627 \u0647\u0646\u06af\u0627\u0645 \u0627\u062c\u0631\u0627 \u0628 \u0645\u0634\u06a9\u0644 \u0628\u0631 \u0646\u062e\u0648\u0631\u062f:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "lint-staged": "lint-staged"\n  }\n}\n')),Object(s.b)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0627\u06af\u0631 \u0627\u0632 ",Object(s.b)("inlineCode",{parentName:"p"},"ts")," \u0648 ",Object(s.b)("inlineCode",{parentName:"p"},"tsx")," \u0628\u062c\u0627\u06cc ",Object(s.b)("inlineCode",{parentName:"p"},"js")," \u0648 ",Object(s.b)("inlineCode",{parentName:"p"},"jsx")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u062f\u0631 \u0642\u0633\u0645\u062a \u0627\u0646\u062a\u0647\u0627\u06cc\u06cc ",Object(s.b)("inlineCode",{parentName:"p"},"package.json"),"\u060c \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a\u06cc \u0627\u0639\u0645\u0627\u0644 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "lint-staged": {\n      "*.(tsx|ts)": "eslint --cache --fix",\n      "*": "prettier --write --ignore-unknown"\n  }\n}\n')),Object(s.b)("h3",{id:"coverage"},"coverage"),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u062a\u0633\u062a \u062f\u0631 \u062d\u0627\u0644\u062a ",Object(s.b)("inlineCode",{parentName:"p"},"ci")," \u0631\u0627 \u0646\u06cc\u0632 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645 \u0648\u0627\u0631\u062f \u0627\u0632 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u062f\u0631 ",Object(s.b)("inlineCode",{parentName:"p"},"jest.config.js")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#coveragethreshold-object"},"jest-coveragethreshold")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  //...\n  coverageThreshold: {\n    global: {\n      branches: 100,\n      functions: 100,\n      lines: 100,\n      statements: 100\n    }\n  }\n}\n")),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0647\u0645 \u0628 \u062f\u0631\u0633\u062a\u06cc \u06a9\u0627\u0631 \u06a9\u0646\u062f\u060c \u0628\u0627\u06cc\u062f \u062f\u0631 ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test:ci": "jest --coverage --silent --ci",\n    "prepare": "husky install",\n    "lint-staged": "lint-staged"\n  }\n}\n')),Object(s.b)("h3",{id:"github-action--optional-"},"github action ( optional )"),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0648\u0627\u0631\u062f ",Object(s.b)("inlineCode",{parentName:"p"},"repo")," \u062e\u0648\u062f \u0634\u0648\u06cc\u0645 \u0648 \u062f\u0631 \u0642\u0633\u0645\u062a ",Object(s.b)("inlineCode",{parentName:"p"},"actions")," \u06cc\u06a9 ",Object(s.b)("inlineCode",{parentName:"p"},"workflow")," \u062c\u062f\u06cc\u062f \u0628\u0631\u0627\u06cc ",Object(s.b)("inlineCode",{parentName:"p"},"node")," \u0628\u0633\u0627\u0632\u06cc\u0645"),Object(s.b)("p",null,"\u0633\u067e\u0633 \u06a9\u062f \u0647\u0627\u06cc \u062f\u0631\u0648\u0646 \u0622\u0646 \u0631\u0627 \u0628\u0647 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"name: Node.js CI\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: \"*\"\njobs:\n  build:\n    runs-on: ${{matrix.os}}\n    strategy:\n      matrix:\n        node-version: [12.x, 14.x, 16.x]\n        os: [ubuntu-latest, windows-latest, macos-latest]\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'npm'\n    - run: npm i -g npm@latest # \u0627\u06cc\u0646 \u062e\u0637 \u06a9\u062f \u0631\u0627 \u0627\u06af\u0631 \u0628 \u0627\u0631\u0648\u0631 \u062e\u0648\u0631\u062f\u06cc\u0645 \u062f\u0631 \u062d\u0627\u0644\u062a \u0639\u0627\u062f\u06cc\u060c \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645\n    - run: npm ci\n    - run: npm run lint\n    - run: npm run test:ci\n")),Object(s.b)("p",null,"\u062d\u0627\u0644 \u0645\u06cc\u062a\u0648\u0627\u0646 \u06a9\u062f \u0647\u0627\u06cc\u0645\u0627\u0646 \u0631\u0627 \u0628\u0647 ",Object(s.b)("inlineCode",{parentName:"p"},"repo")," \u0645\u0648\u0631\u062f \u0646\u0638\u0631\u0645\u0627\u0646 ",Object(s.b)("inlineCode",{parentName:"p"},"push")," \u06a9\u0646\u06cc\u0645."))}b.isMDXComponent=!0},146:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},o=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},j=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=b(t),j=r,m=o["".concat(l,".").concat(j)]||o[j]||u[j]||s;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=j;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<s;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);