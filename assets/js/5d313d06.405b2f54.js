"use strict";(self.webpackChunkmetroline_docs_2=self.webpackChunkmetroline_docs_2||[]).push([[4725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"Conditional jobs",excerpt:""},i="Conditional jobs",s={unversionedId:"ci-configuration/conditional-jobs",id:"ci-configuration/conditional-jobs",title:"Conditional jobs",description:"Sometimes, you want to execute a job conditionally. You can use the when job property for this.",source:"@site/docs/20-ci-configuration/20-conditional-jobs.md",sourceDirName:"20-ci-configuration",slug:"/ci-configuration/conditional-jobs",permalink:"/docs/ci-configuration/conditional-jobs",draft:!1,editUrl:"https://github.com/metroline/metroline-docs/tree/main/docs/20-ci-configuration/20-conditional-jobs.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Conditional jobs",excerpt:""},sidebar:"main",previous:{title:"Basic CI configuration",permalink:"/docs/ci-configuration/basics"},next:{title:"Environment",permalink:"/docs/ci-configuration/environment"}},c={},l=[{value:"branch",id:"branch",level:2},{value:"status",id:"status",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conditional-jobs"},"Conditional jobs"),(0,a.kt)("p",null,"Sometimes, you want to execute a job conditionally. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"when")," job property for this. "),(0,a.kt)("h2",{id:"branch"},"branch"),(0,a.kt)("p",null,"You can limit job execution to specific branch by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"when.branch")," to an array of ",(0,a.kt)("strong",{parentName:"p"},"regular expressions"),"."),(0,a.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'job:\n  test:\n    when:\n      branch:\n        - master\n        - feat/.*\n    image: alpine\n    script:\n      - echo "test"\n'))),(0,a.kt)("p",null,"or use ",(0,a.kt)("inlineCode",{parentName:"p"},"include")," (same behavior as above):"),(0,a.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'job:\n  test:\n    when:\n      branch:\n        include:\n          - master\n    image: alpine\n    script:\n      - echo "test"\n'))),(0,a.kt)("p",null,"When you ",(0,a.kt)("strong",{parentName:"p"},"do not")," want a job to be executed on a specific branch, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"branch.exclude"),":"),(0,a.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'job:\n  test:\n    when:\n      branch:\n        exclude:\n          - master\n    image: alpine\n    script:\n      - echo "test"\n'))),(0,a.kt)("p",null,"By default, when a job is skipped, we do not prevent downstream jobs to be executed. To force downstream jobs to be skipped as well, set ",(0,a.kt)("inlineCode",{parentName:"p"},"when.propagate")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'job:\n  test:\n    when:\n      propagate: true\n      branch:\n        exclude:\n          - master\n    image: alpine\n    script:\n      - echo "test"\n'))),(0,a.kt)("h2",{id:"status"},"status"),(0,a.kt)("p",null,"You can limit job execution based on the ",(0,a.kt)("strong",{parentName:"p"},"upstream status"),", which is the status computed for jobs ",(0,a.kt)("strong",{parentName:"p"},"upstream")," (parents + parents of parents + ...) of the given job."),(0,a.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'job:\n  test:\n    when:\n      status:\n        - success\n        - failure\n    image: alpine\n    script:\n      - echo "test"\n'))),(0,a.kt)("p",null,"or use ",(0,a.kt)("inlineCode",{parentName:"p"},"include")," (same behavior as above):"),(0,a.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'job:\n  test:\n    when:\n      status:\n        include:\n          - success\n          - failure\n    image: alpine\n    script:\n      - echo "test"\n'))),(0,a.kt)("p",null,"When you ",(0,a.kt)("strong",{parentName:"p"},"do not")," want a job to be executed on a specific branch, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"branch.exclude"),":"),(0,a.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'job:\n  test:\n    when:\n      status:\n        exclude:\n          - failure\n    image: alpine\n    script:\n      - echo "test"\n'))),(0,a.kt)("p",null,"possible values are:"),(0,a.kt)("div",{class:"code-group","data-props":'{ "lineNumbers": ["true"] }'},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"success # all jobs succeeded\nfailure # one or more jobs failed\npartial # one ore more jobs with allowFailure:true failed\nskipped # all jobs were skipped\n"))))}u.isMDXComponent=!0}}]);