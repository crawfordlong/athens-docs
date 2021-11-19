"use strict";(self.webpackChunkfirst_docusaurus=self.webpackChunkfirst_docusaurus||[]).push([[494],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8868:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},u="Running Athens Locally",c={unversionedId:"developing/running",id:"developing/running",isDocsHomePage:!1,title:"Running Athens Locally",description:"Video version of this for Mac.",source:"@site/docs/developing/running.md",sourceDirName:"developing",slug:"/developing/running",permalink:"/docs/developing/running",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/developing/running.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About Athens",permalink:"/docs/"},next:{title:"Self-Hosting Backend",permalink:"/docs/developing/self-hosted"}},s=[{value:"Running in Docker",id:"running-in-docker",children:[],level:3}],p={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-athens-locally"},"Running Athens Locally"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.loom.com/share/63618f2a2b2249e3923577fb88fabfdc"},"Video version of this for Mac"),"."),(0,a.kt)("p",null,"These dependencies are needed to get Athens up and running. To install them, follow the instructions in the links."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://purelyfunctional.tv/guide/how-to-install-clojure/"},"Java 11 and Leiningen")," (Leiningen installs Clojure)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node 12")," and ",(0,a.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install/#mac-stable"},"Yarn"))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you want to use Windows Subsystem for Linux (WSL),")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Beginner-Clojure-Environment-Setup-Windows-36f70c16b9a7420da3cd797a3eb712fa#6a53854de58d4f07ba6319d868fba29c"},(0,a.kt)("em",{parentName:"a"},"try this tutorial")),(0,a.kt)("em",{parentName:"p"},".")),(0,a.kt)("p",null,"After you've got these dependencies, clone the Git repository to your hard drive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/athensresearch/athens.git\n")),(0,a.kt)("p",null,"Then ",(0,a.kt)("inlineCode",{parentName:"p"},"cd athens/")," and run the following commands."),(0,a.kt)("p",null,"Pull JavaScript dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn\n")),(0,a.kt)("p",null,"Pull Java dependencies and build, then start a local HTTP server for Athens:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lein dev\n")),(0,a.kt)("p",null,"In another terminal, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn run electron .\n")),(0,a.kt)("p",null,"Another window should open automatically. That's your Athens!"),(0,a.kt)("p",null,"Now make sure you can run code in a REPL and that you know how to use re-frame-10x."),(0,a.kt)("h3",{id:"running-in-docker"},"Running in Docker"),(0,a.kt)("p",null,"Docker doesn't work perfectly well anymore, because we are using Electron. Electron requires access to local resources such as ",(0,a.kt)("inlineCode",{parentName:"p"},"resources/index.html"),"."),(0,a.kt)("p",null,"If you run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn run electron .")," from your local system, but are running Athens from within Docker, it won't work. Furthermore, if you run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn run electron .")," from within your Docker system, the GUI won't popup on your local system. The workaround would be to sync the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources/")," files from Docker to a local folder."),(0,a.kt)("p",null,"The following command runs Athens in a docker container, but does not provide a workaround to actually run Electron."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t athens .\ndocker run -it -p 3000:3000 -p 8777:8777 -p 9630:9630 athens\n")),(0,a.kt)("p",null,"Soon, we will have the web build of Athens working again, such that users can run the Athens backend and frontend from Docker, such that users can easily develop on the frontend while keeping all dependencies inside the container, and won't need Electron."))}d.isMDXComponent=!0}}]);