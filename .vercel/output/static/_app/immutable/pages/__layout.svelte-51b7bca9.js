import{S as J,i as K,s as X,I as G,J as Q,K as W,L as Y,f as N,t as P,M as Z,o as ie,N as D,E as ae,F as le,a as ue,w as oe,O as ce,h as m,c as fe,x as he,b as $,y as de,B as _e,l as M,m as q,n as F,p as V,P as H,Q as me}from"../chunks/index-57f72b05.js";import{s as ee}from"../chunks/stores-4b62de0a.js";import{s as ge}from"../chunks/db-3033293f.js";import{w as b}from"../chunks/index-1c949c0b.js";import"../chunks/preload-helper-4c397a37.js";var x=10,pe=2,ye=10,Te="/api/auth",we=class extends Error{constructor(t,e){super(t),this.errorType=e,this.source="sb_auth_helpers"}toObj(){return{type:this.errorType,message:this.message,source:this.source}}toString(){return JSON.stringify(this.toObj())}},te=class extends we{constructor(t){super(`The request to ${t} failed!`,"callback_url_failed")}};const U={user:null,accessToken:null,isLoading:!1,error:null},se=b(U.user),ke=t=>se.set(t),ne=b(U.accessToken),Ee=t=>ne.set(t),be=b(U.isLoading),T=t=>be.set(t),Ue=b(U.error),L=t=>Ue.set(t);let w=0,v;const Re=async t=>{if(typeof t.json!="function")return String(t);const e=await t.json();return{message:e.msg||e.message||e.error_description||e.error||JSON.stringify(e),status:(t==null?void 0:t.status)||500}},Se=async t=>{const e=await fetch(t,{method:"POST"}).catch(()=>{});return e?e.ok?e.json():{user:null,accessToken:null,error:await Re(e)}:{user:null,accessToken:null,error:"Request failed"}};let k,C,I;const E=async t=>{(!k||!C||!I)&&(k=t.profileUrl,C=t.autoRefreshToken,I=t.supabaseClient);try{w++;const{user:e,accessToken:r,error:n}=await Se(k);if(n){if(n==="Request failed"&&w<ye){v&&clearTimeout(v),v=window.setTimeout(E,pe**w*100);return}L(new Error(n))}if(w=0,r&&(I.auth.setAuth(r),Ee(r)),ke(e),C&&e){let s=2e4;const i=e.exp;if(i){const a=Math.round(Date.now()/1e3),u=i-a,o=u>x?x:.5;s=(u-o)*1e3}setTimeout(E,s)}}catch{const r=new te(k);L(r.toObj())}};var z=Object.prototype.hasOwnProperty;function B(t,e,r){for(r of t.keys())if(d(r,e))return r}function d(t,e){var r,n,s;if(t===e)return!0;if(t&&e&&(r=t.constructor)===e.constructor){if(r===Date)return t.getTime()===e.getTime();if(r===RegExp)return t.toString()===e.toString();if(r===Array){if((n=t.length)===e.length)for(;n--&&d(t[n],e[n]););return n===-1}if(r===Set){if(t.size!==e.size)return!1;for(n of t)if(s=n,s&&typeof s=="object"&&(s=B(e,s),!s)||!e.has(s))return!1;return!0}if(r===Map){if(t.size!==e.size)return!1;for(n of t)if(s=n[0],s&&typeof s=="object"&&(s=B(e,s),!s)||!d(n[1],e.get(s)))return!1;return!0}if(r===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(r===DataView){if((n=t.byteLength)===e.byteLength)for(;n--&&t.getInt8(n)===e.getInt8(n););return n===-1}if(ArrayBuffer.isView(t)){if((n=t.byteLength)===e.byteLength)for(;n--&&t[n]===e[n];);return n===-1}if(!r||typeof t=="object"){n=0;for(r in t)if(z.call(t,r)&&++n&&!z.call(e,r)||!(r in e)||!d(t[r],e[r]))return!1;return Object.keys(e).length===n}}return t!==t&&e!==e}function Ae(t){let e;const r=t[8].default,n=G(r,t,t[7],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,[i]){n&&n.p&&(!e||i&128)&&Q(n,r,s,s[7],e?Y(r,s[7],i,null):W(s[7]),null)},i(s){e||(N(n,s),e=!0)},o(s){P(n,s),e=!1},d(s){n&&n.d(s)}}}function Oe(t,e,r){let n,s,i=ae,a=()=>(i(),i=le(h,l=>r(10,s=l)),h);Z(t,ne,l=>r(9,n=l)),t.$$.on_destroy.push(()=>i());let{$$slots:u={},$$scope:o}=e,{supabaseClient:c}=e,{endpointPrefix:g=Te}=e,{callbackUrl:p=`${g}/callback`}=e,{profileUrl:y=`${g}/user`}=e,{autoRefreshToken:_=!0}=e,{session:h}=e;a();let{onUserUpdate:R=l=>{}}=e;const S=async()=>{(document==null?void 0:document.visibilityState)==="visible"&&(T(!0),await E({profileUrl:y,autoRefreshToken:_,supabaseClient:c}),T(!1))};return ie(()=>{S();let l=!0;se.subscribe(f=>{if(l){l=!1;return}const O=s.user,j=s.accessToken;f===null&&D(h,s={...s,user:null,accessToken:null},s),(f&&!d(O,f)||n&&!d(j,n))&&D(h,s={...s,user:f,accessToken:n},s),R(f)}),_&&(window==null||window.addEventListener("visibilitychange",S));const{data:A}=c.auth.onAuthStateChange(async(f,O)=>{f!=="TOKEN_REFRESHED"&&(T(!0),await fetch(p,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),credentials:"same-origin",body:JSON.stringify({event:f,session:O})}).then(j=>{if(!j.ok){const re=new te(p);L(re)}}),await E({profileUrl:y,autoRefreshToken:_,supabaseClient:c}),T(!1))});return()=>{window==null||window.removeEventListener("visibilitychange",S),A==null||A.unsubscribe()}}),t.$$set=l=>{"supabaseClient"in l&&r(1,c=l.supabaseClient),"endpointPrefix"in l&&r(2,g=l.endpointPrefix),"callbackUrl"in l&&r(3,p=l.callbackUrl),"profileUrl"in l&&r(4,y=l.profileUrl),"autoRefreshToken"in l&&r(5,_=l.autoRefreshToken),"session"in l&&a(r(0,h=l.session)),"onUserUpdate"in l&&r(6,R=l.onUserUpdate),"$$scope"in l&&r(7,o=l.$$scope)},[h,c,g,p,y,_,R,o,u]}class je extends J{constructor(e){super(),K(this,e,Oe,Ae,X,{supabaseClient:1,endpointPrefix:2,callbackUrl:3,profileUrl:4,autoRefreshToken:5,session:0,onUserUpdate:6})}}function ve(t){let e,r,n;const s=t[1].default,i=G(s,t,t[2],null);return{c(){e=M("div"),r=M("main"),i&&i.c(),this.h()},l(a){e=q(a,"DIV",{class:!0});var u=F(e);r=q(u,"MAIN",{class:!0});var o=F(r);i&&i.l(o),o.forEach(m),u.forEach(m),this.h()},h(){var a,u;V(r,"class","columns is-gapless is-fullheight"),V(e,"class","site-wrapper svelte-14o134x"),H(e,"is-logged-in",(u=(a=t[0])==null?void 0:a.user)==null?void 0:u.id)},m(a,u){$(a,e,u),me(e,r),i&&i.m(r,null),n=!0},p(a,u){var o,c;i&&i.p&&(!n||u&4)&&Q(i,s,a,a[2],n?Y(s,a[2],u,null):W(a[2]),null),u&1&&H(e,"is-logged-in",(c=(o=a[0])==null?void 0:o.user)==null?void 0:c.id)},i(a){n||(N(i,a),n=!0)},o(a){P(i,a),n=!1},d(a){a&&m(e),i&&i.d(a)}}}function Ce(t){let e,r,n;return r=new je({props:{supabaseClient:ge,session:ee,$$slots:{default:[ve]},$$scope:{ctx:t}}}),{c(){e=ue(),oe(r.$$.fragment),this.h()},l(s){ce('[data-svelte="svelte-14gll76"]',document.head).forEach(m),e=fe(s),he(r.$$.fragment,s),this.h()},h(){document.title="Waiting List App"},m(s,i){$(s,e,i),de(r,s,i),n=!0},p(s,[i]){const a={};i&5&&(a.$$scope={dirty:i,ctx:s}),r.$set(a)},i(s){n||(N(r.$$.fragment,s),n=!0)},o(s){P(r.$$.fragment,s),n=!1},d(s){s&&m(e),_e(r,s)}}}function Ie(t,e,r){let n;Z(t,ee,a=>r(0,n=a));let{$$slots:s={},$$scope:i}=e;return t.$$set=a=>{"$$scope"in a&&r(2,i=a.$$scope)},[n,s,i]}class qe extends J{constructor(e){super(),K(this,e,Ie,Ce,X,{})}}export{qe as default};