"use strict";(self.webpackChunkmetroline_docs_2=self.webpackChunkmetroline_docs_2||[]).push([[8698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(n),k=o,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=k;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const l={title:"Runner Environment Reference",sidebarTitle:"Runner",excerpt:""},i="Runner Environment Reference",a={unversionedId:"environment-reference/runner",id:"environment-reference/runner",title:"Runner Environment Reference",description:"DEBUG",source:"@site/docs/30-environment-reference/20-runner.md",sourceDirName:"30-environment-reference",slug:"/environment-reference/runner",permalink:"/metroline-docs/docs/environment-reference/runner",draft:!1,editUrl:"https://github.com/metroline/metroline-docs/tree/main/docs/30-environment-reference/20-runner.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Runner Environment Reference",sidebarTitle:"Runner",excerpt:""},sidebar:"main",previous:{title:"Server Environment Reference",permalink:"/metroline-docs/docs/environment-reference/server"},next:{title:"UI",permalink:"/metroline-docs/docs/environment-reference/ui"}},p={},s=[{value:"DEBUG",id:"debug",level:2},{value:"METROLINE_WORKSPACE_CLEANUP_TIMEOUT",id:"metroline_workspace_cleanup_timeout",level:2},{value:"METROLINE_MAX_PARALLEL_JOBS",id:"metroline_max_parallel_jobs",level:2},{value:"METROLINE_PULL_INTERVAL",id:"metroline_pull_interval",level:2},{value:"METROLINE_SERVER_ADDRESS",id:"metroline_server_address",level:2},{value:"METROLINE_SOCKET_TIMEOUT",id:"metroline_socket_timeout",level:2},{value:"METROLINE_RUNNER_SECRET",id:"metroline_runner_secret",level:2},{value:"METROLINE_SSL_VERIFY",id:"metroline_ssl_verify",level:2},{value:"METROLINE_DOCKER_OPTIONS",id:"metroline_docker_options",level:2},{value:"METROLINE_JOB_DOCKER_SOCK",id:"metroline_job_docker_sock",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runner-environment-reference"},"Runner Environment Reference"),(0,o.kt)("h2",{id:"debug"},"DEBUG"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": none"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": string"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Enable debug using the popular ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/debug"},"debug")," Npm package. To limit logs to Metroline, use ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG=metroline.runner*"),"."),(0,o.kt)("h2",{id:"metroline_workspace_cleanup_timeout"},"METROLINE","_","WORKSPACE","_","CLEANUP","_","TIMEOUT"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": number"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"When we try to remove a pipeline workspace, we wait until all it's containers have been removed. This sets how much time (seconds) to wait for before we timeout.  "),(0,o.kt)("h2",{id:"metroline_max_parallel_jobs"},"METROLINE","_","MAX","_","PARALLEL","_","JOBS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 2"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": number"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Maximum number of parallel jobs."),(0,o.kt)("h2",{id:"metroline_pull_interval"},"METROLINE","_","PULL","_","INTERVAL"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 1"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": number"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"How often (seconds) the runner should pull for jobs. Note that runners are notified when new jobs are available, but this mechanism ensures that jobs are pulled when runners (re)connect. This value should have little impact on how fast jobs are picked up by runners. "),(0,o.kt)("h2",{id:"metroline_server_address"},"METROLINE","_","SERVER","_","ADDRESS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": none"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": string"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Address of the Metroline server. "),(0,o.kt)("h2",{id:"metroline_socket_timeout"},"METROLINE","_","SOCKET","_","TIMEOUT"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": number"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"How much time (seconds) to wait for the server to acknowledge runner registration. After timeout, we log an error but the runner keeps running. Socket.io tries to reconnect regularly."),(0,o.kt)("h2",{id:"metroline_runner_secret"},"METROLINE","_","RUNNER","_","SECRET"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": none"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": string"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Secret to use for communicating with the server."),(0,o.kt)("h2",{id:"metroline_ssl_verify"},"METROLINE","_","SSL","_","VERIFY"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": true"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"When set to false, the runner will not verify the SSL certificate served by the server."),(0,o.kt)("h2",{id:"metroline_docker_options"},"METROLINE","_","DOCKER","_","OPTIONS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": \"{socketPath: '/var/run/docker.sock'}\""),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": string"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Allows you to configure how the runner connects to the Docker daemon. This is a JSON string with a ","[dockerode constructor options]","(// ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/dockerode/index.d.ts#L987"},"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/dockerode/index.d.ts#L987"),"). "),(0,o.kt)("h2",{id:"metroline_job_docker_sock"},"METROLINE","_","JOB","_","DOCKER","_","SOCK"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": null"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": string"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"This variable allows you to provide jobs with a Docker daemon so that they can run commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build"),". It should be the ",(0,o.kt)("strong",{parentName:"p"},"path")," to a Docker daemon. When set, this path is mounted as a volume in jobs, pointing to ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/run/docker.sock"),"."),(0,o.kt)("div",{class:"blockquote","data-props":'{ "mod": "danger" }'},(0,o.kt)("p",null,"Setting this option provides jobs with access to the Docker daemon on your runner's host, and hence can be a security issue. We will be working on ways to improve this in the future with services and Docker-in-docker, but for now this is a decent solution for making it possible to build Docker images in Metroline.  ")))}c.isMDXComponent=!0}}]);