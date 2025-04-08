"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{927:(e,t,n)=>{n.d(t,{n:()=>c});var r=n(1044),o=n(4715),a=n(2184),l=n(6144),i=n(1048),s="focusScope.autoFocusOnMount",u="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},c=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:c=!1,onMountAutoFocus:h,onUnmountAutoFocus:g,...y}=e,[x,b]=r.useState(null),w=(0,l.c)(h),E=(0,l.c)(g),N=r.useRef(null),j=(0,o.s)(t,e=>b(e)),k=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(c){let e=function(e){if(k.paused||!x)return;let t=e.target;x.contains(t)?N.current=t:m(N.current,{select:!0})},t=function(e){if(k.paused||!x)return;let t=e.relatedTarget;null===t||x.contains(t)||m(N.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(x)});return x&&n.observe(x,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[c,x,k.paused]),r.useEffect(()=>{if(x){v.add(k);let e=document.activeElement;if(!x.contains(e)){let t=new CustomEvent(s,d);x.addEventListener(s,w),x.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(f(x).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(x))}return()=>{x.removeEventListener(s,w),setTimeout(()=>{let t=new CustomEvent(u,d);x.addEventListener(u,E),x.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),x.removeEventListener(u,E),v.remove(k)},0)}}},[x,w,E,k]);let A=r.useCallback(e=>{if(!n&&!c||k.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,a]=function(e){let t=f(e);return[p(t,e),p(t.reverse(),e)]}(t);o&&a?e.shiftKey||r!==a?e.shiftKey&&r===o&&(e.preventDefault(),n&&m(a,{select:!0})):(e.preventDefault(),n&&m(o,{select:!0})):r===t&&e.preventDefault()}},[n,c,k.paused]);return(0,i.jsx)(a.sG.div,{tabIndex:-1,...y,ref:j,onKeyDown:A})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}c.displayName="FocusScope";var v=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=h(e,t)).unshift(t)},remove(t){var n;null===(n=(e=h(e,t))[0])||void 0===n||n.resume()}}}();function h(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},1667:(e,t,n)=>{n.r(t),n.d(t,{default:()=>em});var r,o=n(1048),a=n(6403);n(4134);var l=n(1044),i=n(3694),s=n(536),u=n(8275),d=n(5552);let c=(0,d.A)("hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]),f=(0,d.A)("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),p=(0,d.A)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var m=n(7935),v=n(8941),h=n(316),g=n(2247),y=n(493),x=n(4715),b=n(8895),w=n(6428),E=n(1160),N=n(8255),j=n(927),k=(n(9115),n(4087)),A=n(2184),C=n(6027),D=n(755),R=n(6093),I=n(7590),F="Dialog",[M,S]=(0,b.A)(F),[O,_]=M(F),L=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:i,modal:s=!0}=e,u=l.useRef(null),d=l.useRef(null),[c=!1,f]=(0,E.i)({prop:r,defaultProp:a,onChange:i});return(0,o.jsx)(O,{scope:t,triggerRef:u,contentRef:d,contentId:(0,w.B)(),titleId:(0,w.B)(),descriptionId:(0,w.B)(),open:c,onOpenChange:f,onOpenToggle:l.useCallback(()=>f(e=>!e),[f]),modal:s,children:n})};L.displayName=F;var P="DialogTrigger";l.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=_(P,n),l=(0,x.s)(t,a.triggerRef);return(0,o.jsx)(A.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":X(a.open),...r,ref:l,onClick:(0,y.m)(e.onClick,a.onOpenToggle)})}).displayName=P;var[T,z]=M("DialogPortal",{forceMount:void 0}),W="DialogOverlay",q=l.forwardRef((e,t)=>{let n=z(W,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,l=_(W,e.__scopeDialog);return l.modal?(0,o.jsx)(k.C,{present:r||l.open,children:(0,o.jsx)(H,{...a,ref:t})}):null});q.displayName=W;var H=l.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=_(W,n);return(0,o.jsx)(D.A,{as:I.DX,allowPinchZoom:!0,shards:[a.contentRef],children:(0,o.jsx)(A.sG.div,{"data-state":X(a.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),K="DialogContent",Q=l.forwardRef((e,t)=>{let n=z(K,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,l=_(K,e.__scopeDialog);return(0,o.jsx)(k.C,{present:r||l.open,children:l.modal?(0,o.jsx)(U,{...a,ref:t}):(0,o.jsx)(B,{...a,ref:t})})});Q.displayName=K;var U=l.forwardRef((e,t)=>{let n=_(K,e.__scopeDialog),r=l.useRef(null),a=(0,x.s)(t,n.contentRef,r);return l.useEffect(()=>{let e=r.current;if(e)return(0,R.Eq)(e)},[]),(0,o.jsx)(G,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,y.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,y.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,y.m)(e.onFocusOutside,e=>e.preventDefault())})}),B=l.forwardRef((e,t)=>{let n=_(K,e.__scopeDialog),r=l.useRef(!1),a=l.useRef(!1);return(0,o.jsx)(G,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,l;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(l=n.triggerRef.current)||void 0===l||l.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{var o,l;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let i=t.target;(null===(l=n.triggerRef.current)||void 0===l?void 0:l.contains(i))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),G=l.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:i,...s}=e,u=_(K,n),d=l.useRef(null),c=(0,x.s)(t,d);return(0,C.Oh)(),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.n,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:i,children:(0,o.jsx)(N.qW,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":X(u.open),...s,ref:c,onDismiss:()=>u.onOpenChange(!1)})}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(en,{titleId:u.titleId}),(0,o.jsx)(er,{contentRef:d,descriptionId:u.descriptionId})]})]})}),Z="DialogTitle",V=l.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=_(Z,n);return(0,o.jsx)(A.sG.h2,{id:a.titleId,...r,ref:t})});V.displayName=Z;var $="DialogDescription";l.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=_($,n);return(0,o.jsx)(A.sG.p,{id:a.descriptionId,...r,ref:t})}).displayName=$;var J="DialogClose";function X(e){return e?"open":"closed"}l.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=_(J,n);return(0,o.jsx)(A.sG.button,{type:"button",...r,ref:t,onClick:(0,y.m)(e.onClick,()=>a.onOpenChange(!1))})}).displayName=J;var Y="DialogTitleWarning",[ee,et]=(0,b.q)(Y,{contentName:K,titleName:Z,docsSlug:"dialog"}),en=e=>{let{titleId:t}=e,n=et(Y),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return l.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},er=e=>{let{contentRef:t,descriptionId:n}=e,r=et("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return l.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},eo=n(3484),ea=n(2254),el=n(5305);function ei(e){let{open:t,onOpenChange:n,footer:r,links:a=[],search:i,onSearchChange:u,isLoading:d,...c}=e,{text:f}=(0,s.s9)(),p=(0,l.useMemo)(()=>a.map(e=>{let[t,n]=e;return{type:"page",id:t,content:t,url:n}}),[a]);return(0,o.jsxs)(L,{open:t,onOpenChange:n,children:[(0,o.jsx)(q,{className:"fixed inset-0 z-50 bg-black/30 backdrop-blur-sm data-[state=closed]:animate-fd-fade-out data-[state=open]:animate-fd-fade-in"}),(0,o.jsxs)(Q,{"aria-describedby":void 0,className:"fixed left-1/2 top-[10vh] z-50 w-[98vw] max-w-screen-sm -translate-x-1/2 rounded-lg border bg-fd-popover text-fd-popover-foreground shadow-lg data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in",children:[(0,o.jsx)(V,{className:"hidden",children:f.search}),(0,o.jsxs)("div",{className:"flex flex-row items-center gap-2 px-3",children:[(0,o.jsx)(ed,{isLoading:null!=d&&d}),(0,o.jsx)("input",{value:i,onChange:e=>{u(e.target.value)},placeholder:f.search,className:"w-0 flex-1 bg-transparent py-3 text-base placeholder:text-fd-muted-foreground focus-visible:outline-none"}),(0,o.jsx)("button",{type:"button","aria-label":"Close Search",onClick:()=>n(!1),className:(0,v.QP)((0,g.r)({color:"outline",className:"text-xs p-1.5"})),children:"Esc"})]}),"empty"!==c.results||p.length>0?(0,o.jsx)(eu,{items:"empty"===c.results?p:c.results,onSelect:()=>n(!1)}):null,r?(0,o.jsx)("div",{className:"mt-auto flex flex-col border-t p-3",children:r}):null]})]})}let es={text:(0,o.jsx)(u.A,{className:"size-4 text-fd-muted-foreground"}),heading:(0,o.jsx)(c,{className:"size-4 text-fd-muted-foreground"}),page:(0,o.jsx)(f,{className:"size-4 text-fd-muted-foreground"})};function eu(e){let{items:t,onSelect:n,...r}=e,[a,i]=(0,l.useState)(),{text:u}=(0,s.s9)(),d=(0,el.rd)(),c=(0,h.c)();t.length>0&&(!a||t.every(e=>e.id!==a))&&i(t[0].id);let f=e=>{var t;let{external:r,url:o}=e;r?null===(t=window.open(o,"_blank"))||void 0===t||t.focus():d.push(o),null==n||n(o),c.setOpen(!1)},p=(0,ea.J)(e=>{if(("ArrowDown"===e.key||"ArrowUp"==e.key)&&(i(n=>{var r,o;let a=t.findIndex(e=>e.id===n);return -1===a?null===(r=t.at(0))||void 0===r?void 0:r.id:null===(o=t.at(("ArrowDown"===e.key?a+1:a-1)%t.length))||void 0===o?void 0:o.id}),e.preventDefault()),"Enter"===e.key){let n=t.find(e=>e.id===a);n&&f(n),e.preventDefault()}});return(0,l.useEffect)(()=>(window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}),[p]),(0,o.jsxs)("div",{...r,className:(0,v.QP)("flex max-h-[460px] flex-col overflow-y-auto border-t p-2",r.className),children:[0===t.length?(0,o.jsx)("div",{className:"py-12 text-center text-sm",children:u.searchNoResult}):null,t.map(e=>(0,o.jsxs)(ec,{value:e.id,active:a,onActiveChange:i,onClick:()=>{f(e)},children:["page"!==e.type?(0,o.jsx)("div",{role:"none",className:"ms-2 h-full min-h-10 w-px bg-fd-border"}):null,es[e.type],(0,o.jsx)("p",{className:"w-0 flex-1 truncate",children:e.content})]},e.id))]})}function ed(e){let{isLoading:t}=e;return(0,o.jsxs)("div",{className:"relative size-4",children:[(0,o.jsx)(p,{className:(0,v.QP)("absolute size-full animate-spin text-fd-primary transition-opacity",!t&&"opacity-0")}),(0,o.jsx)(m.A,{className:(0,v.QP)("absolute size-full text-fd-muted-foreground transition-opacity",t&&"opacity-0")})]})}function ec(e){let{active:t,onActiveChange:n,value:r,...a}=e;return(0,o.jsx)("button",{ref:(0,l.useCallback)(e=>{t===r&&e&&e.scrollIntoView({block:"nearest"})},[t,r]),type:"button","aria-selected":t===r,onPointerMove:()=>n(r),...a,className:(0,v.QP)("flex min-h-10 select-none flex-row items-center gap-2.5 rounded-lg px-2 text-start text-sm",t===r&&"bg-fd-accent text-fd-accent-foreground",a.className),children:a.children})}let ef=(0,eo.F)("rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors",{variants:{active:{true:"bg-fd-accent text-fd-accent-foreground"}}});function ep(e){let{tag:t,onTagChange:n,items:r,allowClear:a,...l}=e;return(0,o.jsxs)("div",{...l,className:(0,v.QP)("flex flex-row items-center gap-1 flex-wrap",l.className),children:[r.map(e=>{var r;return(0,o.jsx)("button",{type:"button","data-active":t===e.value,className:(0,v.QP)(ef({active:t===e.value}),null===(r=e.props)||void 0===r?void 0:r.className),onClick:()=>{t===e.value&&a?n(void 0):n(e.value)},tabIndex:-1,...e.props,children:e.name},e.value)}),l.children]})}function em(e){var t;let{defaultTag:u,tags:d,api:c,delayMs:f,type:p="fetch",allowClear:m=!1,...v}=e,{locale:h}=(0,s.s9)(),[g,y]=(0,l.useState)(u),{search:x,setSearch:b,query:w}=function(e,t,o,i=100,s=!1,u){let[d,c]=(0,l.useState)(""),[f,p]=(0,l.useState)("empty"),[m,v]=(0,l.useState)(),[h,g]=(0,l.useState)(!1),y=function(e,t=1e3){let[n,r]=(0,l.useState)(e),o=(0,l.useRef)(void 0);if(0===t)return e;if(e!==n&&o.current?.value!==e){o.current&&clearTimeout(o.current.handler);let n=window.setTimeout(()=>{r(e)},t);o.current={value:e,handler:n}}return n}(d,i),x=(0,l.useRef)(void 0);return(0,a.T)((void 0)??[e,y,t,o],()=>{x.current&&(x.current(),x.current=void 0),g(!0);let a=!1;x.current=()=>{a=!0},(async function(){if(0===y.length&&!s)return"empty";if("fetch"===e.type){let{fetchDocs:r}=await n.e(655).then(n.bind(n,3655));return r(y,t,o,e)}if("algolia"===e.type){let{index:t,type:r,...a}=e,{searchDocs:l}=await n.e(487).then(n.bind(n,6487));return l(t,y,o,a)}if("orama-cloud"===e.type){let{searchDocs:t}=await n.e(785).then(n.bind(n,1785));return t(y,o,e)}let{createStaticClient:a}=await n.e(984).then(n.bind(n,6984));return r||(r=a(e)),r.search(y,t,o)})().then(e=>{a||(v(void 0),p(e))}).catch(e=>{v(e)}).finally(()=>{g(!1)})}),{search:d,setSearch:c,query:{isLoading:h,data:f,error:m}}}("fetch"===p?{type:"fetch",api:c}:{type:"static",from:c},h,g,f);return(0,i.T)(u,e=>{y(e)}),(0,o.jsx)(ei,{search:x,onSearchChange:b,isLoading:w.isLoading,results:null!==(t=w.data)&&void 0!==t?t:[],...v,footer:d?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ep,{tag:g,onTagChange:y,items:d,allowClear:m}),v.footer]}):v.footer})}},2247:(e,t,n)=>{n.d(t,{r:()=>r});let r=(0,n(3484).F)("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50",{variants:{color:{primary:"bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",outline:"border hover:bg-fd-accent hover:text-fd-accent-foreground",ghost:"hover:bg-fd-accent hover:text-fd-accent-foreground",secondary:"border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"},size:{sm:"gap-1 p-0.5 text-xs",icon:"p-1.5 [&_svg]:size-5","icon-sm":"p-1.5 [&_svg]:size-4.5"}}})},5552:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(1044);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),l=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:u="",children:d,iconNode:c,...f}=e;return(0,r.createElement)("svg",{ref:t,...s,width:o,height:o,stroke:n,strokeWidth:l?24*Number(a)/Number(o):a,className:i("lucide",u),...f},[...c.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(d)?d:[d]])}),d=(e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:s,...d}=n;return(0,r.createElement)(u,{ref:a,iconNode:t,className:i("lucide-".concat(o(l(e))),"lucide-".concat(e),s),...d})});return n.displayName=l(e),n}},6027:(e,t,n)=>{n.d(t,{Oh:()=>a});var r=n(1044),o=0;function a(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:l()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:l()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function l(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},6093:(e,t,n)=>{n.d(t,{Eq:()=>d});var r=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},o=new WeakMap,a=new WeakMap,l={},i=0,s=function(e){return e&&(e.host||s(e.parentNode))},u=function(e,t,n,r){var u=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=s(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});l[n]||(l[n]=new WeakMap);var d=l[n],c=[],f=new Set,p=new Set(u),m=function(e){!(!e||f.has(e))&&(f.add(e),m(e.parentNode))};u.forEach(m);var v=function(e){!(!e||p.has(e))&&Array.prototype.forEach.call(e.children,function(e){if(f.has(e))v(e);else try{var t=e.getAttribute(r),l=null!==t&&"false"!==t,i=(o.get(e)||0)+1,s=(d.get(e)||0)+1;o.set(e,i),d.set(e,s),c.push(e),1===i&&l&&a.set(e,!0),1===s&&e.setAttribute(n,"true"),l||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return v(t),f.clear(),i++,function(){c.forEach(function(e){var t=o.get(e)-1,l=d.get(e)-1;o.set(e,t),d.set(e,l),t||(a.has(e)||e.removeAttribute(r),a.delete(e)),l||e.removeAttribute(n)}),--i||(o=new WeakMap,o=new WeakMap,a=new WeakMap,l={})}},d=function(e,t,n){void 0===n&&(n="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),a=t||r(e);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),u(o,a,n,"aria-hidden")):function(){return null}}},7935:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(5552).A)("search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},8275:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(5552).A)("text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]])}}]);