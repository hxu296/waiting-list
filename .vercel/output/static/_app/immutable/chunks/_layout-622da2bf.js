import{S as K,i as M,s as P,I as L,l as k,a as w,r as y,m as g,n as $,h as c,c as z,u as E,p as D,b as m,Q,J as N,K as S,L as V,f as W,t as q,M as j,v as A}from"./index-57f72b05.js";import{s as B}from"./stores-4b62de0a.js";const F=l=>({}),C=l=>({});function G(l){let s;return{c(){s=y("Dashboard")},l(t){s=E(t,"Dashboard")},m(t,a){m(t,s,a)},d(t){t&&c(s)}}}function J(l){var a,p;let s=((p=(a=l[0])==null?void 0:a.user)==null?void 0:p.fullName)+"",t;return{c(){t=y(s)},l(f){t=E(f,s)},m(f,i){m(f,t,i)},p(f,i){var u,d;i&1&&s!==(s=((d=(u=f[0])==null?void 0:u.user)==null?void 0:d.fullName)+"")&&A(t,s)},d(f){f&&c(t)}}}function H(l){let s,t,a,p,f,i,u;const d=l[2]["page-title"],b=L(d,l,l[1],C),r=b||G();let o=l[0].user&&J(l);const h=l[2].default,_=L(h,l,l[1],null);return{c(){s=k("div"),r&&r.c(),t=w(),a=k("p"),p=y("Welcome back "),o&&o.c(),f=w(),i=k("div"),_&&_.c(),this.h()},l(e){s=g(e,"DIV",{class:!0});var n=$(s);r&&r.l(n),n.forEach(c),t=z(e),a=g(e,"P",{class:!0});var v=$(a);p=E(v,"Welcome back "),o&&o.l(v),v.forEach(c),f=z(e),i=g(e,"DIV",{class:!0});var I=$(i);_&&_.l(I),I.forEach(c),this.h()},h(){D(s,"class","menu-label px-4 py-4 has-background-dark has-text-white is-size-6"),D(a,"class","px-6 py-1 is-size-5 has-text-weight-medium"),D(i,"class","p-6")},m(e,n){m(e,s,n),r&&r.m(s,null),m(e,t,n),m(e,a,n),Q(a,p),o&&o.m(a,null),m(e,f,n),m(e,i,n),_&&_.m(i,null),u=!0},p(e,[n]){b&&b.p&&(!u||n&2)&&N(b,d,e,e[1],u?V(d,e[1],n,F):S(e[1]),C),e[0].user?o?o.p(e,n):(o=J(e),o.c(),o.m(a,null)):o&&(o.d(1),o=null),_&&_.p&&(!u||n&2)&&N(_,h,e,e[1],u?V(h,e[1],n,null):S(e[1]),null)},i(e){u||(W(r,e),W(_,e),u=!0)},o(e){q(r,e),q(_,e),u=!1},d(e){e&&c(s),r&&r.d(e),e&&c(t),e&&c(a),o&&o.d(),e&&c(f),e&&c(i),_&&_.d(e)}}}function O(l,s,t){let a;j(l,B,i=>t(0,a=i));let{$$slots:p={},$$scope:f}=s;return l.$$set=i=>{"$$scope"in i&&t(1,f=i.$$scope)},[a,f,p]}class U extends K{constructor(s){super(),M(this,s,O,H,P,{})}}export{U as L};