import{m as l,P as r,e as c,Q as b,R as C}from"./entry.8c71bdde.js";const f=()=>{var n;const e=l(),t=r(),s=t.value?`Bearer ${t.value}`:void 0,{supabase:{url:u,key:o,client:a}}=c().public,i=s?b(a,{global:{headers:{Authorization:s}}}):a,p=((n=e._supabaseClient)==null?void 0:n.headers.Authorization)!==s;return(!e._supabaseClient||p)&&(e._supabaseClient=C(u,o,i)),e._supabaseClient};export{f as u};