(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),c=(t(0),t(125)),o={id:"docker-react",title:"docker-nginx-react",author:"mamadfar"},b={unversionedId:"ourExperience/docker/docker-react",id:"ourExperience/docker/docker-react",isDocsHomePage:!1,title:"docker-nginx-react",description:"Dockerfile",source:"@site/docs/ourExperience/docker/docker-react.mdx",slug:"/ourExperience/docker/docker-react",permalink:"/docs/ourExperience/docker/docker-react",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ourExperience/docker/docker-react.mdx",version:"current",sidebar:"someSidebar",previous:{title:"\u0686\u06af\u0648\u0646\u0647 mdx \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645",permalink:"/docs/"},next:{title:"nginx-react",permalink:"/docs/ourExperience/nginx/nginx-react"}},p=[{value:"Dockerfile",id:"dockerfile",children:[]},{value:"\u0633\u0627\u062e\u062a \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631",id:"\u0633\u0627\u062e\u062a-\u06a9\u0627\u0646\u062a\u06cc\u0646\u0631",children:[]},{value:"docker-compose",id:"docker-compose",children:[]},{value:"\u0645\u0648\u0627\u0631\u062f \u0627\u0636\u0627\u0641\u0647",id:"\u0645\u0648\u0627\u0631\u062f-\u0627\u0636\u0627\u0641\u0647",children:[{value:"nginx and docker-compose",id:"nginx-and-docker-compose",children:[]}]}],i={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"dockerfile"},"Dockerfile"),Object(c.b)("p",null,"\u0628\u0631\u0627\u06cc \u0634\u0631\u0648\u0639 \u0627\u0628\u062a\u062f\u0627 \u0628\u0627\u06cc\u062f \u06cc\u06a9 ",Object(c.b)("strong",{parentName:"p"},"Dockerfile")," ( \u062f\u0642\u06cc\u0642\u0627 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0646\u0627\u0645 ) \u062f\u0631 \u0641\u0648\u0644\u062f\u0631 \u0627\u0635\u0644\u06cc \u067e\u0631\u0648\u0698\u0647 \u0628\u0633\u0627\u0632\u06cc\u0645 \u0648 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0631 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-docker"},'    FROM node:14.17.3-alpine3.14\n    WORKDIR /hami-dashboard\n    ENV PATH="./node_modules/.bin:$PATH"\n    COPY . ./\n    RUN npm install\n    RUN npm run build\n    RUN npm rebuild node-sass\n    CMD ["npm", "start"]\n    EXPOSE 3010\n'))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"FROM"),": \u0628\u0633\u062a\u0647 \u0628\u0647 \u0648\u0631\u0698\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 ",Object(c.b)("strong",{parentName:"p"},"node")," \u062f\u0631 \u0647\u0646\u06af\u0627\u0645 \u0633\u0627\u062e\u062a \u067e\u0631\u0648\u0698\u0647\u060c \u0648\u0631\u0698\u0646 \u0622\u0646 \u0631\u0627 \u0645\u0642\u0627\u0628\u0644 ",Object(c.b)("strong",{parentName:"p"},"FROM")," \u0645\u06cc \u0646\u0648\u06cc\u0633\u06cc\u0645 ( \u062d\u062a\u0645\u0627 \u0642\u0628\u0644 \u0627\u0632 \u0622\u0646 \u0628\u0627\u06cc\u062f \u062f\u0631 \u0633\u0627\u06cc\u062a ",Object(c.b)("strong",{parentName:"p"},"hub.docker.com")," \u0686\u06a9 \u06a9\u0646\u06cc\u0645 \u06a9 \u0648\u0631\u0698\u0646 \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647\u060c \u0645\u0648\u062c\u0648\u062f \u0628\u0627\u0634\u062f )."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"WORKDIR"),": \u0645\u0633\u06cc\u0631 \u0641\u0648\u0644\u062f\u0631 \u0627\u0635\u0644\u06cc \u067e\u0631\u0648\u0698\u0647 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 ",Object(c.b)("strong",{parentName:"p"},"Dockerfile")," \u062f\u0631 \u0622\u0646 \u0645\u06cc \u0628\u0627\u0634\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ENV PATH"),": \u0645\u0633\u06cc\u0631 \u0645\u0627\u0698\u0648\u0644 \u0647\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u0628\u0631\u0627\u06cc ",Object(c.b)("strong",{parentName:"p"},"JS")," \u0628\u0627\u06cc\u062f \u0645\u0633\u06cc\u0631 ",Object(c.b)("strong",{parentName:"p"},"node_modules")," \u062f\u0627\u062f\u0647 \u0634\u0648\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"COPY"),": \u0622\u0631\u06af\u0648\u0645\u0627\u0646 \u0627\u0648\u0644 \u0645\u0633\u06cc\u0631 \u0648 \u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0645\u06cc \u0628\u0627\u0634\u062f \u0648 \u0622\u0631\u06af\u0648\u0645\u0627\u0646 \u062f\u0648\u0645 \u0645\u0633\u06cc\u0631 \u0641\u0648\u0644\u062f\u0631 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062f\u0631 \u062f\u0627\u06a9\u0631 \u0645\u06cc \u0628\u0627\u0634\u062f ( \u0641\u0627\u06cc\u0644 \u0647\u0627 \u06a9\u067e\u06cc \u0645\u06cc \u0634\u0648\u0646\u062f \u0648 \u062f\u0631 \u062f\u0627\u06a9\u0631 \u0627\u0644\u0635\u0627\u0642 \u0645\u06cc \u0634\u0648\u0646\u062f ). \u062f\u0631 \u0648\u0627\u0642\u0639 \u0646\u0642\u0637\u0647 \u062f\u0648\u0645 \u0647\u0645\u0627\u0646 ",Object(c.b)("strong",{parentName:"p"},"WORKDIR")," \u0645\u06cc \u0628\u0627\u0634\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"RUN"),": \u062f\u0633\u062a\u0648\u0631 \u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0631\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0642\u0631\u0627\u0631 \u0645\u06cc \u062f\u0647\u06cc\u0645 \u062a\u0627 \u0628\u0639\u062f \u0627\u0632 \u06a9\u067e\u06cc \u0634\u062f\u0646\u060c \u0627\u062c\u0631\u0627 \u0634\u0648\u0646\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"CMD"),": \u0622\u062e\u0631\u06cc\u0646 \u062f\u0633\u062a\u0648\u0631 \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0634\u062f\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u0628\u0627\u06cc\u062f \u0622\u0631\u0627\u06cc\u0647 \u0627\u06cc \u0627\u0632 \u06a9\u0644\u0645\u0627\u062a ( \u0645\u062b\u0644\u0627 \u062f\u0633\u062a\u0648\u0631 \u0628\u0627\u0644\u0627 \u0645\u0648\u0642\u0639 \u0627\u062c\u0631\u0627 \u0634\u062f\u0646 \u0628\u0647 ",Object(c.b)("strong",{parentName:"p"},"npm start")," \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc \u0634\u0648\u062f )."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"EXPOSE"),": \u067e\u0648\u0631\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0634\u062f\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc \u06a9\u0646\u06cc\u0645."),Object(c.b)("p",null,"\ud83c\udf89 \u062d\u0627\u0644 \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 ",Object(c.b)("strong",{parentName:"p"},"Dockerfile")," \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u0645:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cmd"},"    docker build --tag hami-dashboard .\n"))),Object(c.b)("p",null,"\u06a9\u0647 ",Object(c.b)("strong",{parentName:"p"},"tag")," \u0646\u0627\u0645 ",Object(c.b)("strong",{parentName:"p"},"image")," \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0631\u0627 \u062a\u0639\u06cc\u06cc\u0646 \u0645\u06cc \u06a9\u0646\u062f \u0648 \u0646\u0642\u0637\u0647 ( . ) \u0645\u0633\u06cc\u0631 \u0633\u0627\u062e\u062a ",Object(c.b)("strong",{parentName:"p"},"image")," \u0645\u06cc \u0628\u0627\u0634\u062f."),Object(c.b)("h2",{id:"\u0633\u0627\u062e\u062a-\u06a9\u0627\u0646\u062a\u06cc\u0646\u0631"},"\u0633\u0627\u062e\u062a \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631"),Object(c.b)("p",null,"\u062d\u0627\u0644 \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 ",Object(c.b)("strong",{parentName:"p"},"container")," \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 ",Object(c.b)("strong",{parentName:"p"},"image")," \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0645\u06cc \u0633\u0627\u0632\u06cc\u0645 \u0648 \u0627\u062c\u0631\u0627 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cmd"},"    docker run --name hami-dashboard -p 3010:3000 -d hami-dashboard\n"))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"name"),": \u06a9\u0647 \u0627\u0633\u0645 \u0628\u0639\u062f \u0627\u0632 \u067e\u0631\u0686\u0645 ",Object(c.b)("strong",{parentName:"p"},"name")," \u062f\u0631 \u0648\u0627\u0642\u0639 \u0646\u0627\u0645 ",Object(c.b)("strong",{parentName:"p"},"container")," \u0645\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u0648 \u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u0646\u0627\u0645\u06cc \u0645\u062a\u0641\u0627\u0648\u062a \u0627\u0632 \u0646\u0627\u0645 ",Object(c.b)("strong",{parentName:"p"},"image")," \u0628\u0627\u0634\u062f"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"-p"),": ( \u0645\u062e\u0641\u0641 publish \u0645\u06cc \u0628\u0627\u0634\u062f ) \u062f\u0631 \u0648\u0627\u0642\u0639 \u0646\u0634\u0627\u0646\u06af\u0631 \u0648 \u062a\u0639\u06cc\u06cc\u0646 \u06a9\u0646\u0646\u062f\u0647 ",Object(c.b)("strong",{parentName:"p"},"port")," \u0645\u06cc \u0628\u0627\u0634\u062f \u0648 2 \u0622\u0631\u06af\u0648\u0645\u0627\u0646 \u062f\u0627\u0631\u062f \u06a9 \u0622\u0631\u06af\u0648\u0645\u0627\u0646 \u0627\u0648\u0644 ",Object(c.b)("strong",{parentName:"p"},"port")," \u062f\u0644\u062e\u0648\u0627\u0647 \u0645\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u0645 ",Object(c.b)("strong",{parentName:"p"},"app")," \u0631\u0627 \u0628\u0627 \u0622\u0646 \u067e\u0648\u0631\u062a \u0628\u0628\u06cc\u0646\u06cc\u0645 \u0648 \u062f\u0648\u0645\u06cc \u067e\u0648\u0631\u062a \u0627\u0635\u0644\u06cc ",Object(c.b)("strong",{parentName:"p"},"app")," \u0645\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 ",Object(c.b)("strong",{parentName:"p"},"react")," \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634 \u0641\u0631\u0636 \u0627\u0632 \u067e\u0648\u0631\u062a ",Object(c.b)("strong",{parentName:"p"},"3000")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"-d"),": \u0646\u0634\u0627\u0646\u06af\u0631 ",Object(c.b)("strong",{parentName:"p"},"detach")," \u0634\u062f\u0646 \u0645\u06cc \u0628\u0627\u0634\u062f \u06cc\u0639\u0646\u06cc \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0628\u0639\u062f \u0627\u0632 \u0633\u0627\u062e\u062a ",Object(c.b)("strong",{parentName:"p"},"container"),"\u060c \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0628\u0647 \u06a9\u0627\u0631\u0645\u0627\u0646 \u0627\u062f\u0627\u0645\u0647 \u062f\u0647\u06cc\u0645 \u0627\u0632 \u0627\u06cc\u0646 \u067e\u0631\u0686\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645."),Object(c.b)("p",null,"\u0648 \u0628\u0639\u062f \u0627\u0632 ",Object(c.b)("strong",{parentName:"p"},"-d")," \u0646\u0627\u0645 ",Object(c.b)("strong",{parentName:"p"},"image")," \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0631\u0627 \u0628\u0627\u06cc\u062f \u062f\u0631\u0633\u062a \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u0645."),Object(c.b)("h2",{id:"docker-compose"},"docker-compose"),Object(c.b)("p",null,"\u0628\u0631\u0627\u06cc \u0628\u0647\u062a\u0631 \u06a9\u0631\u062f\u0646 \u0627\u062c\u0631\u0627 \u0634\u062f\u0646 ",Object(c.b)("strong",{parentName:"p"},"dockerFile")," \u0648 \u0647\u0645 \u0686\u0646\u06cc\u0646 \u0627\u062c\u0631\u0627 \u0686\u0646\u062f ",Object(c.b)("strong",{parentName:"p"},"Service")," \u0648 \u0686\u0646\u062f ",Object(c.b)("strong",{parentName:"p"},"app")," \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0627 \u0647\u0645 \u0627\u0632 ",Object(c.b)("strong",{parentName:"p"},"docker-compose")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0647 \u0645\u0627 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0631\u0627 \u0645\u06cc \u062f\u0647\u062f \u06a9\u0647 ",Object(c.b)("strong",{parentName:"p"},"image")," \u0647\u0627\u06cc\u0645\u0627\u0646 \u0631\u0627 \u0631\u0627\u062d\u062a \u062a\u0631 \u0627\u0646\u062a\u0642\u0627\u0644 \u062f\u0647\u06cc\u0645"),Object(c.b)("p",null,"\u06a9\u0647 \u0628\u0631\u0627\u06cc ",Object(c.b)("strong",{parentName:"p"},"react")," \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u06a9\u062f \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-docker"},'    version: "3.9"\n    services:\n        hdreact:\n            build:\n                context: .\n            volumes:\n                - .:/hami-dashboard\n            ports:\n                - 3010:3000\n            image: hdreact:react\n            container_name: hami-dashboard\n            stdin_open: true\n            # command: npm start\n            restart: unless-stopped\n            # networks:\n            # - app-network\n'))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"version"),": \u062f\u0631 \u0648\u0627\u0642\u0639 \u0648\u0631\u0698\u0646 \u062e\u0648\u062f ",Object(c.b)("strong",{parentName:"p"},"docker-compose")," \u0645\u06cc \u0628\u0627\u0634\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"services"),": \u0644\u06cc\u0633\u062a \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc \u0645\u0627 \u0645\u06cc \u0628\u0627\u0634\u0646\u062f \u06a9\u0647 \u0647\u0631 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0627\u06cc\u062f \u06cc\u06a9 \u0646\u0627\u0645 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"hdreact"),": \u0646\u0627\u0645 ",Object(c.b)("strong",{parentName:"p"},"service")," \u0645\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u062a\u0645\u0627\u0645\u06cc \u0645\u0648\u0627\u0631\u062f \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0627\u06cc\u062f \u0632\u06cc\u0631 \u0622\u0646 \u0628\u0627 \u0641\u0627\u0635\u0644\u0647 \u0642\u0631\u0627\u0631 \u0628\u06af\u06cc\u0631\u062f.( \u0646\u0627\u0645 \u062f\u0644\u062e\u0648\u0627\u0647 \u0645\u06cc \u0628\u0627\u0634\u062f. )"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"build"),": \u0645\u0633\u06cc\u0631 \u0648 \u0646\u0627\u0645 ",Object(c.b)("strong",{parentName:"p"},"dockerFile")," \u062e\u0648\u062f \u0631\u0627 \u0642\u0631\u0627\u0631 \u0645\u06cc \u062f\u0647\u06cc\u0645 \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0645\u0633\u06cc\u0631\u062f\u0647\u06cc \u0627\u0632 ",Object(c.b)("inlineCode",{parentName:"p"},"context")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u0622\u062f\u0631\u0633 ",Object(c.b)("strong",{parentName:"p"},"dockerFile")," \u0631\u0627 \u0645\u06cc \u062f\u0647\u06cc\u0645."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"volumes"),": \u0645\u0633\u06cc\u0631 \u0641\u0627\u06cc\u0644 \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u0645 \u0628\u0647 \u0635\u0648\u0631\u062a \u062f\u0627\u06cc\u0646\u0627\u0645\u06cc\u06a9 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0631\u0627 \u0627\u0639\u0645\u0627\u0644 \u06a9\u0646\u0646\u062f\u060c \u0645\u0634\u062e\u0635 \u0645\u06cc \u06a9\u0646\u06cc\u0645. \u06cc\u0639\u0646\u06cc \u062f\u0631 \u06a9\u062f \u0647\u0627\u06cc \u062f\u0627\u062e\u0644 \u0633\u06cc\u0633\u062a\u0645 \u0647\u0631 \u062a\u063a\u06cc\u06cc\u0631\u06cc \u0627\u06cc\u062c\u0627\u062f \u0634\u0648\u062f\u060c \u062f\u0631 \u062f\u0627\u06a9\u0631 \u0646\u06cc\u0632 \u062a\u063a\u06cc\u06cc\u0631 \u0627\u0639\u0645\u0627\u0644 \u0634\u0648\u062f. ( \u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 \u06a9\u0644 \u0641\u0627\u06cc\u0644 \u067e\u0631\u0648\u0698\u0647 \u0645\u06cc \u0628\u0627\u0634\u062f )"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ports"),": \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0631\u0627\u06cc \u0647\u0631 \u067e\u0648\u0631\u062a ",Object(c.b)("strong",{parentName:"p"},"app")," \u0645\u0627\u0646 \u06cc\u06a9 \u067e\u0648\u0631\u062a \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645 \u062a\u0627 \u062f\u0631 \u062f\u0627\u06a9\u0631 \u0628\u0627 \u06cc\u06a9 \u067e\u0648\u0631\u062a \u062f\u06cc\u06af\u0631 \u0627\u062c\u0631\u0627 \u0634\u0648\u062f.( \u0633\u0645\u062a \u0686\u067e \u067e\u0648\u0631\u062a \u062f\u0644\u062e\u0648\u0627\u0647\u0645\u0627\u0646 \u06a9\u0647 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0634\u063a\u0627\u0644 \u0634\u0648\u062f \u0648 \u0633\u0645\u062a \u0631\u0627\u0633\u062a \u067e\u0648\u0631\u062a ",Object(c.b)("strong",{parentName:"p"},"app")," \u0645\u0627\u0646 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0627\u062e\u0644 \u062f\u0627\u06a9\u0631 \u0627\u062c\u0631\u0627 \u0645\u06cc \u0634\u0648\u062f\u060c \u06cc\u0639\u0646\u06cc \u067e\u0648\u0631\u062a ",Object(c.b)("strong",{parentName:"p"},"3000")," \u0631\u0627 \u0628\u0647 ",Object(c.b)("strong",{parentName:"p"},"3010")," \u0639\u0648\u0636 \u06a9\u0646. )"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"image"),": \u06cc\u06a9 \u0646\u0627\u0645 \u062f\u0644\u062e\u0648\u0627\u0647 \u0628\u0631\u0627\u06cc ",Object(c.b)("strong",{parentName:"p"},"image")," \u0645\u0627\u0646 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0647\u0645 \u0646\u0627\u0645 ",Object(c.b)("strong",{parentName:"p"},"service")," \u0645\u0627\u0646 \u0628\u0627\u0634\u062f.( \u06a9\u0647 \u0627\u0648\u0644\u06cc \u0646\u0627\u0645 ",Object(c.b)("strong",{parentName:"p"},"image")," \u0648 \u062f\u0648\u0645\u06cc ",Object(c.b)("strong",{parentName:"p"},"tag")," \u0622\u0646 \u0645\u06cc \u0628\u0627\u0634\u062f )"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"container_name"),": \u06cc\u06a9 \u0646\u0627\u0645 \u062f\u0644\u062e\u0648\u0627\u0647 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0645\u0627\u0646 \u0645\u06cc \u0628\u0627\u0634\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"stdin_open"),": \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 ",Object(c.b)("strong",{parentName:"p"},"react")," \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0628\u0627 \u0647\u0631 \u062a\u063a\u06cc\u06cc\u0631 \u0633\u0631\u06cc\u0639 \u0635\u0641\u062d\u0647 \u0631\u0641\u0631\u0634 \u0634\u0648\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"command"),": \u0628\u0647 \u062c\u0627\u06cc ",Object(c.b)("inlineCode",{parentName:"p"},"CMD")," \u062f\u0631 ",Object(c.b)("strong",{parentName:"p"},"dockerFile"),"\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 ",Object(c.b)("strong",{parentName:"p"},"docker-compose")," \u0647\u0645 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"restart"),": \u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u062f\u0633\u062a\u0648\u0631\u060c \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631\u06cc \u06a9\u0647 \u0627\u0633\u062a\u0627\u067e \u0645\u06cc \u0634\u0648\u062f\u060c \u062f\u0648\u0628\u0627\u0631\u0647 ",Object(c.b)("strong",{parentName:"p"},"restart")," \u0645\u06cc \u0634\u0648\u062f\u060c \u0628\u0647 \u0635\u0648\u0631\u062a \u062e\u0648\u062f\u06a9\u0627\u0631."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"networks"),": \u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u062f\u0633\u062a\u0648\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 ",Object(c.b)("strong",{parentName:"p"},"service")," \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0631\u0627 \u062f\u0631 \u06cc\u06a9 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0628\u0627 ",Object(c.b)("strong",{parentName:"p"},"network")," \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u060c \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 2 \u0646\u062a\u0648\u0631\u06a9 \u0645\u062e\u062a\u0644\u0641 \u062f\u0631 \u06cc\u06a9 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0627\u0632 \u06cc\u06a9 ",Object(c.b)("strong",{parentName:"p"},"port")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f ( \u0645\u062b\u0644\u0627 80 ) \u0648 \u0686\u0648\u0646 ",Object(c.b)("strong",{parentName:"p"},"network")," \u0647\u0627 \u0628\u0627 \u0647\u0645 \u0645\u062a\u0641\u0627\u0648\u062a \u0647\u0633\u062a\u0646\u062f \u0647\u0631 2 \u067e\u0648\u0631\u062a \u06a9\u0627\u0631 \u0645\u06cc\u06a9\u0646\u0646\u062f."),Object(c.b)("p",null,"\ud83c\udf89 \u0641\u0627\u0635\u0644\u0647 \u0647\u0627 \u062f\u0631 ",Object(c.b)("strong",{parentName:"p"},"docker-compose")," \u0628\u0633\u06cc\u0627\u0631 \u0645\u0647\u0645 \u0645\u06cc \u0628\u0627\u0634\u062f."),Object(c.b)("p",null,"\u062d\u0627\u0644 \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 ",Object(c.b)("strong",{parentName:"p"},"build")," \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u0647\u0645\u0632\u0645\u0627\u0646 \u0627\u062c\u0631\u0627 \u0646\u06cc\u0632 \u0645\u06cc \u0634\u0648\u062f:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cmd"},"    docker-compose up -d\n"))),Object(c.b)("h2",{id:"\u0645\u0648\u0627\u0631\u062f-\u0627\u0636\u0627\u0641\u0647"},"\u0645\u0648\u0627\u0631\u062f \u0627\u0636\u0627\u0641\u0647"),Object(c.b)("p",null,"\ud83c\udf89 \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0644\u06cc\u0633\u062a ",Object(c.b)("strong",{parentName:"p"},"image")," \u0647\u0627 \u0631\u0627 \u062f\u06cc\u062f:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cmd"},"    docker images\n"))),Object(c.b)("p",null,"\ud83c\udf89 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0628\u0631\u0627\u06cc \u06a9\u067e\u06cc \u0646\u06a9\u0631\u062f\u0646 \u0641\u0627\u06cc\u0644 \u0647\u0627 \u0648 \u0641\u0648\u0644\u062f\u0631 \u0647\u0627\u06cc\u06cc \u06a9 \u0646\u06cc\u0627\u0632 \u0646\u062f\u0627\u0631\u06cc\u0645 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 ",Object(c.b)("strong",{parentName:"p"},"dockerignore.")," \u0628\u0633\u0627\u0632\u06cc\u0645 \u0648 \u0645\u0627\u0646\u0646\u062f \u06a9\u062f \u0632\u06cc\u0631 \u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0647\u0627 \u0648 \u0641\u0648\u0644\u062f\u0631 \u0647\u0627\u06cc \u063a\u06cc\u0631 \u0636\u0631\u0648\u0631\u06cc \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"    node_modules\n    Dockerfile\n    Dockerfile.prod\n    .git\n    .dockerignore\n    .gitignore\n    .env\n    *.tar\n"))),Object(c.b)("p",null,"\ud83c\udf89 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 ( \u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 ",Object(c.b)("strong",{parentName:"p"},"image")," \u062f\u0627\u0631\u06cc\u0645) \u062f\u0648\u0628\u0627\u0631\u0647 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 ",Object(c.b)("strong",{parentName:"p"},"rebuild")," \u06a9\u0646\u06cc\u0645:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-docker"},"    docker-compose up -d --force-recreate --build\n"))),Object(c.b)("p",null,"\u0645\u0647\u0645: \u0647\u0645\u06cc\u0634\u0647 \u0633\u0639\u06cc \u0634\u0648\u062f \u0627\u0648\u0644 package.json \u0631\u0627 \u06a9\u067e\u06cc \u0648 \u0633\u067e\u0633 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645 ( \u062f\u0631 \u062f\u0627\u06a9\u0631\u0641\u0627\u06cc\u0644 )\u060c \u0632\u06cc\u0631\u0627 \u0645\u0627 \u062e\u06cc\u0644\u06cc \u06a9\u0645 \u0641\u0627\u06cc\u0644 package.json \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc \u062f\u0647\u06cc\u0645 \u0648 \u0627\u06af\u0631 \u0622\u0646 \u0631\u0627 \u0628\u0647 \u062f\u0627\u06a9\u0631 \u0641\u0627\u06cc\u0644 \u0627\u0636\u0627\u0641\u0647 \u0646\u06a9\u0646\u06cc\u0645\u060c \u0647\u0631 \u0628\u0627\u0631 \u06a9 \u06a9\u062f \u0647\u0627\u06cc \u0645\u062b\u0644\u0627 src \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645\u060c \u062f\u0648\u0628\u0627\u0631\u0647 npm install \u0627\u062c\u0631\u0627 \u0645\u06cc \u0634\u0648\u062f."),Object(c.b)("p",null,"\u0628\u0631\u0627\u06cc \u062d\u0630\u0641 \u06cc\u06a9 image \u062e\u0627\u0635 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:( \u0628\u0631\u0627\u06cc \u0628\u062f\u0633\u062a \u0622\u0648\u0631\u062f\u0646 \u06a9\u062f \u0647\u0631 image \u0645\u06cc\u062a\u0648\u0627\u0646 \u0627\u0632  docker image ls \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f )"),Object(c.b)("p",null,"docker image rm 26sadf564"),Object(c.b)("p",null,"\u062f\u0631 \u0648\u0627\u0642\u0639 \u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0627\u067e\u067e \u0645\u0627\u0646 \u0627\u0632 \u062f\u0646\u06cc\u0627\u06cc \u0628\u06cc\u0631\u0648\u0646 \u0647\u0645 \u0628\u0647 \u0622\u0646 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 ( \u0645\u062b\u0644\u0627 \u0628\u0642\u06cc\u0647 \u0633\u06cc\u0633\u062a\u0645 \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0647 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0645\u0627 \u0645\u062a\u0635\u0644 \u0647\u0633\u062a\u0646\u062f ) \u0622\u0646 \u0631\u0627 \u0628\u0628\u06cc\u0646\u0646\u062f \u0628\u0627\u06cc\u062f \u0628\u0631\u0627\u06cc \u0622\u0646 \u067e\u0648\u0631\u062a \u062a\u0639\u06cc\u06cc\u0646 \u0634\u0648\u062f \u0648 \u0645\u0634\u062e\u0635 \u0634\u0648\u062f \u06a9\u0647 \u0686 \u067e\u0648\u0631\u062a\u06cc \u0627\u0632 \u062f\u0646\u06cc\u0627\u06cc \u062f\u0627\u062e\u0644 \u062f\u0627\u06a9\u0631 \u0628\u0627\u06cc\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0627 \u0628\u0647 \u0686 \u067e\u0648\u0631\u062a\u06cc \u0627\u0632 \u062f\u0646\u06cc\u0627\u06cc \u0628\u06cc\u0631\u0648\u0646 \u0628\u0641\u0631\u0633\u062a\u062f."),Object(c.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u06cc\u06a9 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u0645 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 docker ps \u0648 \u0628\u0631\u0627\u06cc \u0645\u062a\u0648\u0642\u0641 \u06a9\u0631\u062f\u0646 \u0648 \u062d\u0630\u0641 \u06cc\u06a9 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u06a9 \u062f\u0631 \u062d\u0627\u0644 \u0627\u062c\u0631\u0627 \u0627\u0633\u062a \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 docker rm react-app -f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645"),Object(c.b)("p",null,"\u0647\u0645\u06cc\u0634\u0647 \u0639\u062f\u062f \u0633\u0645\u062a \u0631\u0627\u0633\u062a : \u0639\u062f\u062f\u06cc \u0627\u0633\u062a \u06a9 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062e\u0648\u062f docker \u0645\u06cc \u0628\u0627\u0634\u062f \u0648 \u0639\u062f\u062f \u0633\u0645\u062a \u0686\u067e : \u0647\u0645\u06cc\u0634\u0647 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0644\u0648\u06a9\u0627\u0644 \u0645\u0627\u0634\u06cc\u0646 \u0645\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u0645\u062b\u0644 \u0648\u06cc\u0646\u062f\u0648\u0632 \u0648 \u0633\u06cc\u0633\u062a\u0645 \u0647\u0627\u06cc\u06cc \u06a9 \u0628\u0647 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0645\u0627 \u0645\u062a\u0635\u0644 \u0647\u0633\u062a\u0646\u062f. \u06cc\u0639\u0646\u06cc \u0645\u062b\u0644\u0627 \u0647\u0631\u06a9\u0633\u06cc \u062f\u0631 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0645\u0646 ( local machine ) \u0628\u0627 3010 \u0645\u06cc\u062a\u0648\u0627\u0646\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0641\u0631\u0633\u062a\u062f \u06cc\u0627 \u0628\u06af\u06cc\u0631\u062f \u0648 \u062f\u0627\u06a9\u0631 \u0647\u0645 \u0627\u06cc\u0646 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0647\u0627 \u0631\u0627 \u0628\u0647 \u062f\u0631\u06af\u0627\u0647 3000 \u0627\u0646\u062a\u0642\u0627\u0644 \u0645\u06cc \u062f\u0647\u062f \u06a9 \u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644\u060c react \u0645\u06cc\u0628\u0627\u0634\u062f."),Object(c.b)("p",null,"\u062f\u0633\u062a\u0648\u0631 docker exec -it react-app bash \u062f\u0631 \u0648\u0627\u0642\u0639 \u0645\u062d\u06cc\u0637 bash \u0631\u0627 \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0645\u0631\u0628\u0648\u0637\u0647 \u0628\u0627\u0632 \u0645\u06cc \u06a9\u0646\u062f."),Object(c.b)("h3",{id:"nginx-and-docker-compose"},"nginx and docker-compose"),Object(c.b)("p",null,"\ud83c\udf89 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062a\u0648\u0633\u0637 \u06a9\u0627\u0646\u0641\u06cc\u06af \u0632\u06cc\u0631 \u062f\u0631 docker-compose \u0627\u0632 2 \u0633\u0631\u0648\u06cc\u0633 \u0645\u062c\u0632\u0627 \u0645\u0627\u0646\u0646\u062f node \u0648 nginx \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0631\u0627\u06cc \u06cc\u06a9 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u062e\u0627\u0635 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-docker-compose"},'    version: "3"\n    services:\n        hdreact:\n            build:\n                context: .\n            volumes:\n                - .:/hami-dashboard\n            ports:\n                - 8081:8081\n            image: hdreact:react\n            container_name: hami-dashboard\n            stdin_open: true\n            # environment:\n            #     SERVICE_NAME: node\n            #     SERVICE_TAGS: react\n            # command: npm start\n            environment:\n                NODE_ENV: production\n            restart: unless-stopped\n\n        #Nginx Service\n        webserver:\n        image: nginx:alpine\n        container_name: nginx\n        restart: unless-stopped\n        tty: true\n        ports:\n            - "4000:8081"\n            #  - "443:443"\n            #  - "9001-9009:9001-9009"\n        volumes:\n            - ./:/var/www\n            - ./nginx/conf.d/:/etc/nginx/conf.d/\n        # networks:\n        # - app-network\n'))),Object(c.b)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u06a9\u0627\u0646\u0641\u06cc\u06af dockerFile \u0632\u06cc\u0631 \u0646\u06cc\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u0628\u0631\u0627\u06cc \u0645\u0686 \u06a9\u0631\u062f\u0646 \u0622\u0646 \u0628\u0627 docker-compose \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u062e\u0634 ",Object(c.b)("strong",{parentName:"p"},"stage 2")," \u0646\u06cc\u0632 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0631\u0627\u06cc nginx \u062f\u0631 \u062f\u0627\u06a9\u0631\u0641\u0627\u06cc\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u06a9 \u06a9\u0627\u0645\u0646\u062a \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u0627\u0645\u0627 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06a9 \u062f\u0631 docker-compose \u0628\u0627\u0634\u062f."),Object(c.b)("div",{dir:"ltr"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-dockerFile"},'    # stage1 - build react app first\n    FROM node:14.17.3-alpine3.14 as build\n    WORKDIR /hami-dashboard\n    ENV PATH=/node_modules/.bin:$PATH\n    COPY package.json ./\n    RUN npm install\n    RUN npm rebuild node-sass\n    COPY . ./\n    # RUN npm run build\n    # CMD [ "npm", "run", "build" ]\n    #COPY build ./\n\n    # stage 2 - build the final image and copy the react build files\n    # FROM nginx:1.17.8-alpine\n    # # COPY --from=build /hami-dashboard/build /usr/share/nginx/html\n    # COPY --from=build /hami-dashboard/build /var/www/\n    # # COPY\u200a--from=build /hami-dashboard/nginx/nginx.conf /etc/nginx/conf.d/default.conf\n    # RUN rm /etc/nginx/conf.d/default.conf\n    # COPY nginx/nginx.conf /etc/nginx/conf.d\n    # CMD ["nginx", "-g", "daemon off;"]\n    EXPOSE 8081\n'))))}l.isMDXComponent=!0},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=l(t),s=r,O=d["".concat(o,".").concat(s)]||d[s]||m[s]||c;return t?a.a.createElement(O,b(b({ref:n},i),{},{components:t})):a.a.createElement(O,b({ref:n},i))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=s;var b={};for(var p in n)hasOwnProperty.call(n,p)&&(b[p]=n[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<c;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);