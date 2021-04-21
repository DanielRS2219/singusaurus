(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Highlight",(function(){return s})),r.d(t,"default",(function(){return g}));var a=r(3),n=r(7),o=(r(0),r(247)),i={title:"Classes in JavaScript - II",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["classes","objects","project","frameworks"]},l={permalink:"/singusaurus/blog/2021/01/15/clases-2",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-01-15-clases-2.mdx",source:"@site/blog\\2021-01-15-clases-2.mdx",description:"borderRadius: '2px',",date:"2021-01-15T00:00:00.000Z",tags:[{label:"classes",permalink:"/singusaurus/blog/tags/classes"},{label:"objects",permalink:"/singusaurus/blog/tags/objects"},{label:"project",permalink:"/singusaurus/blog/tags/project"},{label:"frameworks",permalink:"/singusaurus/blog/tags/frameworks"}],title:"Classes in JavaScript - II",truncated:!1,prevItem:{title:"JavaScript static methods and Vue events",permalink:"/singusaurus/blog/2021/01/18/static-clases-vue-events"},nextItem:{title:"Classes in JavaScript",permalink:"/singusaurus/blog/2021/01/14/clases"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Daily Highlights</Highlight></strong>',id:"highlight-colorff8000daily-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do the next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-the-next-classhighlight",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},u={toc:c,Highlight:s};function g(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Class exercises"),Object(o.b)("li",{parentName:"ul"},"Introduction to Vue"),Object(o.b)("li",{parentName:"ul"},"Braintstorming about our app - part 2")),Object(o.b)("h2",{id:"highlight-colorff8000daily-highlightshighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(s,{color:"#ff8000",mdxType:"Highlight"},"Daily Highlights"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"5 hour tutorial to build a landing page in HTML/SCSS/JavaScript ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.freecodecamp.org/news/how-to-make-a-landing-page-using-html-scss-and-javascript/"}),"Link")),Object(o.b)("li",{parentName:"ul"},"How to build a todo-app using some JavaScript frameworks . ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://todomvc.com/"}),"TodoMVC"))),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-the-next-classhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do the next class?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"More exercises about JavaScript classes and objects"),Object(o.b)("li",{parentName:"ul"},"More directives and uses of Vue")))}g.isMDXComponent=!0},247:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(r),p=a,b=g["".concat(i,".").concat(p)]||g[p]||h[p]||o;return r?n.a.createElement(b,l(l({ref:t},s),{},{components:r})):n.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);