import{e as d,s as l,z as r,K as f,j as v,L as p,f as m,M as g,N as h}from"./Cc6jgwR_.js";import{u as _}from"./BLjOLmW0.js";import{_ as y}from"./LzXGs3JV.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=f(i),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await _(`content-navigation-${g(n.value)}`,()=>h(n.value));return{navigation:o}},render(i){const t=l(),{navigation:n}=i,o=e=>r(y,{to:e._path},()=>e.title),a=(e,u)=>r("ul",u?{"data-level":u}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,u+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),j=C;export{j as default};
