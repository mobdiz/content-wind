import{d,$ as l,J as f,m as v,V as p,a0 as m,X as g,a1 as h,N as r,G as y}from"./entry.df8e5761.js";import{u as _}from"./asyncData.ef585074.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=l(u),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await _(`content-navigation-${m(n.value)}`,()=>h(n.value));return{navigation:o}},render(u){const t=g(),{navigation:n}=u,o=e=>r(y,{to:e._path},()=>e.title),a=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,i+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),$=C;export{$ as default};
