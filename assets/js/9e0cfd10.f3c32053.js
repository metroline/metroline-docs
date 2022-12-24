"use strict";(self.webpackChunkmetroline_docs_2=self.webpackChunkmetroline_docs_2||[]).push([[4992],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>g});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?t.createElement(g,a(a({ref:n},d),{},{components:r})):t.createElement(g,a({ref:n},d))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8602:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const i={title:"Building Docker Images Inside Jobs",excerpt:""},a="Building Docker Images Inside Jobs",s={unversionedId:"guides/building-docker-images-inside-jobs",id:"guides/building-docker-images-inside-jobs",title:"Building Docker Images Inside Jobs",description:"If you distribute and deploy your apps with Docker, chances are you build them inside your CI (and if you don't, we really think you should, it makes your life a lot more simple).",source:"@site/docs/40-guides/10-building-docker-images-inside-jobs.md",sourceDirName:"40-guides",slug:"/guides/building-docker-images-inside-jobs",permalink:"/metroline-docs/docs/guides/building-docker-images-inside-jobs",draft:!1,editUrl:"https://github.com/metroline/metroline-docs/tree/main/docs/40-guides/10-building-docker-images-inside-jobs.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Building Docker Images Inside Jobs",excerpt:""},sidebar:"main",previous:{title:"UI",permalink:"/metroline-docs/docs/environment-reference/ui"}},c={},l=[],d={toc:l};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-docker-images-inside-jobs"},"Building Docker Images Inside Jobs"),(0,o.kt)("p",null,"If you distribute and deploy your apps with Docker, chances are you build them inside your CI (and if you don't, we really think you should, it makes your life a lot more simple)."),(0,o.kt)("p",null,"Say we have the following ",(0,o.kt)("inlineCode",{parentName:"p"},".metroline.yml"),":"),(0,o.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '1'\njobs:\n  docker:\n    image: docker\n    script:\n      - docker build -t my/image .\n"))),(0,o.kt)("p",null,"If you run a pipeline, the logs for `` will see this:"),(0,o.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},'Pulling from library/docker\nDigest: sha256:f9a24a777e813e2692920a86530355e3840d0271464fd486bd8708aa018d0ac6\nStatus: Image is up to date for docker:latest\n$ docker build -t my/image .\ntime="2020-09-09T09:45:54Z" level=error msg="failed to dial gRPC: cannot connect to the Docker daemon. Is \'docker daemon\' running on this host?: dial unix /var/run/docker.sock: connect: no such file or directory"\nCannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?\ncommand exited with code 1\n'))),(0,o.kt)("p",null,"This problem occurs because your job doesn't have a Docker socket at hand. To provide it with one, restart your runner with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/environment-reference/runner#metroline_job_docker_sock"},"METROLINE","_","JOB","_","DOCKER","_","SOCK")," environment variable set:"),(0,o.kt)("div",{class:"blockquote","data-props":'{ "mod": "danger" }'},(0,o.kt)("p",null,"Exposing Docker sockets is a major security breach. An attacker can make a pull request to execute commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker inspect")," (by updating your CI config file or writing tests that execute commands) and view all environment variables given to the containers running on your runner's host. It can then find runner secrets and bootsrap it's own runner and start executing jobs and stealing secrets from your repositories. For now, you can use Dockerhub's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/builds/"},"automated builds")," feature. We will be working on ways to do this more saefly in the future.")),(0,o.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"METROLINE_JOB_DOCKER_SOCK=/var/run/docker.sock\n"))),(0,o.kt)("p",null,"and re-run your pipeline. You now get this:"),(0,o.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"Pulling from library/docker\nStatus: Image is up to date for docker:latest\nDigest: sha256:f9a24a777e813e2692920a86530355e3840d0271464fd486bd8708aa018d0ac6\n$ docker build -t my/image .\nSending build context to Docker daemon  3.072kB\n\n\n ---\x3e 18f4bc975732\nStep 1/1 : FROM node:12-alpine\nSuccessfully built 18f4bc975732\nSuccessfully tagged my/image:latest\n"))))}u.isMDXComponent=!0}}]);