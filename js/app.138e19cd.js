(function(){var t={6088:function(t,e,n){"use strict";var a=n(5130),r=n(6768),i=n(4232);const s={class:"app-container"},o={class:"navbar"},c={class:"nav-item"},l={class:"nav-item"},u={class:"nav-item"},d={class:"main-content"};function f(t,e,n,a,f,h){const p=(0,r.g2)("router-link"),b=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.Lk)("nav",o,[(0,r.Lk)("div",{class:"hamburger",onClick:e[0]||(e[0]=(...t)=>h.toggleNavbar&&h.toggleNavbar(...t))},e[1]||(e[1]=[(0,r.Lk)("div",{class:"bar"},null,-1),(0,r.Lk)("div",{class:"bar"},null,-1),(0,r.Lk)("div",{class:"bar"},null,-1)])),(0,r.Lk)("ul",{class:(0,i.C4)(["navbar-nav",{active:f.isNavbarVisible}])},[(0,r.Lk)("li",c,[(0,r.bF)(p,{to:"/",class:"nav-link","active-class":"active",exact:"",title:"Home"},{default:(0,r.k6)((()=>e[2]||(e[2]=[(0,r.Lk)("i",{class:"fas fa-home"},null,-1)]))),_:1})]),(0,r.Lk)("li",l,[(0,r.bF)(p,{to:"/projects",class:"nav-link","active-class":"active",exact:"",title:"Projects"},{default:(0,r.k6)((()=>e[3]||(e[3]=[(0,r.Lk)("i",{class:"fas fa-file-code"},null,-1)]))),_:1})]),(0,r.Lk)("li",u,[(0,r.bF)(p,{to:"/blog",class:"nav-link","active-class":"active",exact:"",title:"Blog"},{default:(0,r.k6)((()=>e[4]||(e[4]=[(0,r.Lk)("i",{class:"fas fa-pencil-alt"},null,-1)]))),_:1})])],2)]),(0,r.Lk)("main",d,[(0,r.bF)(b)])])}var h={data(){return{isNavbarVisible:!1}},methods:{toggleNavbar(){this.isNavbarVisible=!this.isNavbarVisible}}},p=n(1241);const b=(0,p.A)(h,[["render",f],["__scopeId","data-v-65df4616"]]);var v=b,g=n(1387);const k={class:"home-container"},m={class:"content"};function L(t,e,n,a,s,o){return(0,r.uX)(),(0,r.CE)("div",k,[(0,r.Lk)("div",m,[(0,r.Lk)("h1",null,(0,i.v_)(s.name),1),e[0]||(e[0]=(0,r.Lk)("p",{class:"tagline"},"Full-Stack Developer",-1)),e[1]||(e[1]=(0,r.Lk)("div",{class:"contact-info"},[(0,r.Lk)("a",{href:"mailto:shanbhxg@gmail.com",target:"_blank",exact:"",title:"Email"},[(0,r.Lk)("i",{class:"fas fa-envelope"})]),(0,r.Lk)("a",{href:"https://linkedin.com/in/deeptishanbhag",target:"_blank",exact:"",title:"LinkedIn"},[(0,r.Lk)("i",{class:"fab fa-linkedin"})]),(0,r.Lk)("a",{href:"https://github.com/shanbhxg",target:"_blank",exact:"",title:"GitHub"},[(0,r.Lk)("i",{class:"fab fa-github"})]),(0,r.Lk)("a",{href:"https://medium.com/@shanbhxg",target:"_blank",exact:"",title:"Medium"},[(0,r.Lk)("i",{class:"fab fa-medium"})]),(0,r.Lk)("a",{href:"",target:"_blank",exact:"",title:"Resume"},[(0,r.Lk)("i",{class:"fas fa-address-card"})])],-1))]),e[2]||(e[2]=(0,r.Lk)("div",{class:"mesh-background"},null,-1))])}var y={data(){return{name:"Deepti Shanbhag"}}};const w=(0,p.A)(y,[["render",L],["__scopeId","data-v-4ede8b20"]]);var j=w;const x={class:"projects-container"},_={class:"content"},E={class:"projects-grid"},C={class:"project-details"},O={class:"description"},A={class:"project-links"},P=["href"],M=["href"];function N(t,e,n,a,s,o){return(0,r.uX)(),(0,r.CE)("div",x,[(0,r.Lk)("div",_,[e[1]||(e[1]=(0,r.Lk)("h1",null,"My Projects",-1)),(0,r.Lk)("div",E,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.projects,(t=>((0,r.uX)(),(0,r.CE)("div",{key:t.id,class:"project-item"},[(0,r.Lk)("div",C,[(0,r.Lk)("h2",null,(0,i.v_)(t.title),1),(0,r.Lk)("p",O,(0,i.v_)(t.description),1),(0,r.Lk)("div",A,[(0,r.Lk)("a",{href:t.link,target:"_blank",class:"project-link"}," View Project ",8,P),(0,r.Lk)("a",{href:t.github,target:"_blank",class:"github-link"},e[0]||(e[0]=[(0,r.Lk)("i",{class:"fab fa-github"},null,-1)]),8,M)])])])))),128))])])])}var F={data(){return{projects:[{id:1,title:"CROSSWRD",description:"VueJS website that generates crossword puzzles with clues fetched from an API.",link:"https://crosswrd.vercel.app",github:"https://github.com/shanbhxg/crossword-generator"},{id:2,title:"APIDAE",description:"Personalised job recommendation system using modified swarm optimization algorithm (ABC).",link:"https://apidae-jobrecsys.anvil.app/",github:"https://www.springer.com/series/15179"},{id:3,title:"AMALGAM",description:"Nostalgic single player video game archive coded using MERN Stack.",link:"https://github.com/shanbhxg/amalgam",github:"hhttps://github.com/shanbhxg/amalgam"},{id:4,title:"CHRONOSPHERE",description:"A BlueSky dashboard",link:"https://github.com/shanbhxg/cains-jawbone",github:"https://github.com/project4"},{id:5,title:"CJ HELPER",description:"A virtual cork-board to help you solve Cain's Jawbone",link:"https://cains-jawbone.vercel.app/",github:"https://github.com/shanbhxg/cains-jawbone"}]}}};const T=(0,p.A)(F,[["render",N],["__scopeId","data-v-7ca7943c"]]);var S=T;const I={class:"blog-post"},X=["innerHTML"];function H(t,e,n,a,i,s){const o=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",I,[(0,r.bF)(o,{to:"/blog",class:"back-link"},{default:(0,r.k6)((()=>e[0]||(e[0]=[(0,r.Lk)("i",{class:"fas fa-arrow-left"},null,-1)]))),_:1}),(0,r.Lk)("div",{innerHTML:i.postContent},null,8,X)])}var R=n(357),D={props:["slug"],data(){return{postContent:""}},async created(){try{const t=await n(5334)(`./${this.slug}.md`),e=t.default;this.postContent=(0,R.xI)(e)}catch(t){console.error(`Error loading blog post: ${t}`)}}};const V=(0,p.A)(D,[["render",H],["__scopeId","data-v-4a545fbe"]]);var B=V;const z={class:"blog-list container my-5"},J={class:"row"},$={class:"card h-100 shadow-sm border-light"},G={class:"card-body"},K={class:"card-title"},U={class:"card-text"};function W(t,e,n,a,s,o){const c=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",z,[e[1]||(e[1]=(0,r.Lk)("h1",{class:"text-center mb-4"},"Blog Posts",-1)),(0,r.Lk)("div",J,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.posts,(t=>((0,r.uX)(),(0,r.CE)("div",{class:"col-md-4 mb-4",key:t.slug},[(0,r.Lk)("div",$,[(0,r.Lk)("div",G,[(0,r.Lk)("h5",K,(0,i.v_)(t.title),1),(0,r.Lk)("p",U,(0,i.v_)(t.excerpt),1),(0,r.bF)(c,{to:"/blog/"+t.slug,class:"blog-link"},{default:(0,r.k6)((()=>e[0]||(e[0]=[(0,r.eW)(" Read More ")]))),_:2},1032,["to"])])])])))),128))])])}var q={data(){return{posts:[]}},async created(){this.loadPosts()},methods:{async loadPosts(){const t=["first"],e=await Promise.all(t.map((async t=>{const e=await n(5334)(`./${t}.md`),a=e.default,r=(0,R.xI)(a),i=document.createElement("div");i.innerHTML=r;const s=i.textContent||i.innerText||"",o=s.replace(/^.*\n/,""),c=this.getTitleFromMarkdown(a);return{slug:t,title:c,excerpt:o}})));this.posts=e},getTitleFromMarkdown(t){const e=t.split("\n")[0];return e.replace(/^#\s/,"")}}};const Q=(0,p.A)(q,[["render",W],["__scopeId","data-v-671f179a"]]);var Y=Q;const Z=[{path:"/",name:"home",component:j},{path:"/projects",name:"projects",component:S},{path:"/blog/:slug",name:"blogpost",component:B,props:!0},{path:"/blog",name:"blog",component:Y}],tt=(0,g.aE)({history:(0,g.LA)(),routes:Z});var et=tt;const nt=(0,a.Ef)(v);nt.use(et),nt.mount("#app")},5334:function(t,e,n){var a={"./first.md":[9113,113]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=5334,t.exports=r}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],i=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,i<s&&(s=i));if(o){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".2f471e5a.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shanbhxg:";n.l=function(a,r,i,s){if(t[a])t[a].push(r);else{var o,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+i){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+i),o.src=a),t[a]=[r];var f=function(e,n){o.onerror=o.onload=null,clearTimeout(h);var r=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={524:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var i=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=i);var s=n.p+n.u(e),o=new Error,c=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,r[1](o)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,s=a[0],o=a[1],c=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var u=c(n)}for(e&&e(a);l<s.length;l++)i=s[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},a=self["webpackChunkshanbhxg"]=self["webpackChunkshanbhxg"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(6088)}));a=n.O(a)})();
//# sourceMappingURL=app.138e19cd.js.map