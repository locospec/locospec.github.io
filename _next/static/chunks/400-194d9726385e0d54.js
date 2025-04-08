"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{178:(e,t,r)=>{r.d(t,{AM:()=>K,hl:()=>B,Wv:()=>Q});var n=r(1048),o=r(1044),a=r(493),l=r(4715),i=r(8895),s=r(8255),d=r(6027),u=r(927),c=r(6428),f=r(3025),p=r(9115),v=r(4087),m=r(2184),h=r(7590),g=r(1160),x=r(6093),y=r(755),b="Popover",[k,E]=(0,i.A)(b,[f.Bk]),A=(0,f.Bk)(),[j,N]=k(b),C=e=>{let{__scopePopover:t,children:r,open:a,defaultOpen:l,onOpenChange:i,modal:s=!1}=e,d=A(t),u=o.useRef(null),[p,v]=o.useState(!1),[m=!1,h]=(0,g.i)({prop:a,defaultProp:l,onChange:i});return(0,n.jsx)(f.bL,{...d,children:(0,n.jsx)(j,{scope:t,contentId:(0,c.B)(),triggerRef:u,open:m,onOpenChange:h,onOpenToggle:o.useCallback(()=>h(e=>!e),[h]),hasCustomAnchor:p,onCustomAnchorAdd:o.useCallback(()=>v(!0),[]),onCustomAnchorRemove:o.useCallback(()=>v(!1),[]),modal:s,children:r})})};C.displayName=b;var w="PopoverAnchor";o.forwardRef((e,t)=>{let{__scopePopover:r,...a}=e,l=N(w,r),i=A(r),{onCustomAnchorAdd:s,onCustomAnchorRemove:d}=l;return o.useEffect(()=>(s(),()=>d()),[s,d]),(0,n.jsx)(f.Mz,{...i,...a,ref:t})}).displayName=w;var P="PopoverTrigger",F=o.forwardRef((e,t)=>{let{__scopePopover:r,...o}=e,i=N(P,r),s=A(r),d=(0,l.s)(t,i.triggerRef),u=(0,n.jsx)(m.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":z(i.open),...o,ref:d,onClick:(0,a.m)(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?u:(0,n.jsx)(f.Mz,{asChild:!0,...s,children:u})});F.displayName=P;var R="PopoverPortal",[M,T]=k(R,{forceMount:void 0}),L=e=>{let{__scopePopover:t,forceMount:r,children:o,container:a}=e,l=N(R,t);return(0,n.jsx)(M,{scope:t,forceMount:r,children:(0,n.jsx)(v.C,{present:r||l.open,children:(0,n.jsx)(p.Z,{asChild:!0,container:a,children:o})})})};L.displayName=R;var O="PopoverContent",S=o.forwardRef((e,t)=>{let r=T(O,e.__scopePopover),{forceMount:o=r.forceMount,...a}=e,l=N(O,e.__scopePopover);return(0,n.jsx)(v.C,{present:o||l.open,children:l.modal?(0,n.jsx)(D,{...a,ref:t}):(0,n.jsx)(I,{...a,ref:t})})});S.displayName=O;var D=o.forwardRef((e,t)=>{let r=N(O,e.__scopePopover),i=o.useRef(null),s=(0,l.s)(t,i),d=o.useRef(!1);return o.useEffect(()=>{let e=i.current;if(e)return(0,x.Eq)(e)},[]),(0,n.jsx)(y.A,{as:h.DX,allowPinchZoom:!0,children:(0,n.jsx)(_,{...e,ref:s,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),d.current||null===(t=r.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,a.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey;d.current=2===t.button||r},{checkForDefaultPrevented:!1}),onFocusOutside:(0,a.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),I=o.forwardRef((e,t)=>{let r=N(O,e.__scopePopover),a=o.useRef(!1),l=o.useRef(!1);return(0,n.jsx)(_,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var n,o;null===(n=e.onCloseAutoFocus)||void 0===n||n.call(e,t),t.defaultPrevented||(a.current||null===(o=r.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),a.current=!1,l.current=!1},onInteractOutside:t=>{var n,o;null===(n=e.onInteractOutside)||void 0===n||n.call(e,t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(l.current=!0));let i=t.target;(null===(o=r.triggerRef.current)||void 0===o?void 0:o.contains(i))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&l.current&&t.preventDefault()}})}),_=o.forwardRef((e,t)=>{let{__scopePopover:r,trapFocus:o,onOpenAutoFocus:a,onCloseAutoFocus:l,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:p,onFocusOutside:v,onInteractOutside:m,...h}=e,g=N(O,r),x=A(r);return(0,d.Oh)(),(0,n.jsx)(u.n,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:a,onUnmountAutoFocus:l,children:(0,n.jsx)(s.qW,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:m,onEscapeKeyDown:c,onPointerDownOutside:p,onFocusOutside:v,onDismiss:()=>g.onOpenChange(!1),children:(0,n.jsx)(f.UC,{"data-state":z(g.open),role:"dialog",id:g.contentId,...x,...h,ref:t,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),q="PopoverClose";function z(e){return e?"open":"closed"}o.forwardRef((e,t)=>{let{__scopePopover:r,...o}=e,l=N(q,r);return(0,n.jsx)(m.sG.button,{type:"button",...o,ref:t,onClick:(0,a.m)(e.onClick,()=>l.onOpenChange(!1))})}).displayName=q,o.forwardRef((e,t)=>{let{__scopePopover:r,...o}=e,a=A(r);return(0,n.jsx)(f.i3,{...a,...o,ref:t})}).displayName="PopoverArrow";var W=r(8941);let K=C,Q=F,B=o.forwardRef((e,t)=>{let{className:r,align:o="center",sideOffset:a=4,...l}=e;return(0,n.jsx)(L,{children:(0,n.jsx)(S,{ref:t,align:o,sideOffset:a,side:"bottom",className:(0,W.QP)("z-50 min-w-[220px] max-w-[98vw] rounded-lg border bg-fd-popover p-2 text-sm text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in",r),...l})})});B.displayName=S.displayName},250:(e,t,r)=>{r.d(t,{LargeSearchToggle:()=>u,SearchToggle:()=>d});var n=r(1048),o=r(7935),a=r(9664),l=r(536),i=r(8941),s=r(2247);function d(e){let{hideIfDisabled:t,size:r="icon",color:l="ghost",...d}=e,{setOpenSearch:u,enabled:c}=(0,a.$A)();return t&&!c?null:(0,n.jsx)("button",{type:"button",className:(0,i.QP)((0,s.r)({size:r,color:l}),d.className),"data-search":"","aria-label":"Open Search",onClick:()=>{u(!0)},children:(0,n.jsx)(o.A,{})})}function u(e){let{hideIfDisabled:t,...r}=e,{enabled:s,hotKey:d,setOpenSearch:u}=(0,a.$A)(),{text:c}=(0,l.s9)();return t&&!s?null:(0,n.jsxs)("button",{type:"button","data-search-full":"",...r,className:(0,i.QP)("inline-flex items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",r.className),onClick:()=>{u(!0)},children:[(0,n.jsx)(o.A,{className:"ms-1 size-4"}),c.search,(0,n.jsx)("div",{className:"ms-auto inline-flex gap-0.5",children:d.map((e,t)=>(0,n.jsx)("kbd",{className:"rounded-md border bg-fd-background px-1.5",children:e.display},t))})]})}},927:(e,t,r)=>{r.d(t,{n:()=>c});var n=r(1044),o=r(4715),a=r(2184),l=r(6144),i=r(1048),s="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",u={bubbles:!1,cancelable:!0},c=n.forwardRef((e,t)=>{let{loop:r=!1,trapped:c=!1,onMountAutoFocus:h,onUnmountAutoFocus:g,...x}=e,[y,b]=n.useState(null),k=(0,l.c)(h),E=(0,l.c)(g),A=n.useRef(null),j=(0,o.s)(t,e=>b(e)),N=n.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;n.useEffect(()=>{if(c){let e=function(e){if(N.paused||!y)return;let t=e.target;y.contains(t)?A.current=t:v(A.current,{select:!0})},t=function(e){if(N.paused||!y)return;let t=e.relatedTarget;null===t||y.contains(t)||v(A.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let r=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&v(y)});return y&&r.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),r.disconnect()}}},[c,y,N.paused]),n.useEffect(()=>{if(y){m.add(N);let e=document.activeElement;if(!y.contains(e)){let t=new CustomEvent(s,u);y.addEventListener(s,k),y.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=document.activeElement;for(let n of e)if(v(n,{select:t}),document.activeElement!==r)return}(f(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&v(y))}return()=>{y.removeEventListener(s,k),setTimeout(()=>{let t=new CustomEvent(d,u);y.addEventListener(d,E),y.dispatchEvent(t),t.defaultPrevented||v(null!=e?e:document.body,{select:!0}),y.removeEventListener(d,E),m.remove(N)},0)}}},[y,k,E,N]);let C=n.useCallback(e=>{if(!r&&!c||N.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,n=document.activeElement;if(t&&n){let t=e.currentTarget,[o,a]=function(e){let t=f(e);return[p(t,e),p(t.reverse(),e)]}(t);o&&a?e.shiftKey||n!==a?e.shiftKey&&n===o&&(e.preventDefault(),r&&v(a,{select:!0})):(e.preventDefault(),r&&v(o,{select:!0})):n===t&&e.preventDefault()}},[r,c,N.paused]);return(0,i.jsx)(a.sG.div,{tabIndex:-1,...x,ref:j,onKeyDown:C})});function f(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function p(e,t){for(let r of e)if(!function(e,t){let{upTo:r}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===r||e!==r);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(r,{upTo:t}))return r}function v(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var r;let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&(r=e)instanceof HTMLInputElement&&"select"in r&&t&&e.select()}}c.displayName="FocusScope";var m=function(){let e=[];return{add(t){let r=e[0];t!==r&&(null==r||r.pause()),(e=h(e,t)).unshift(t)},remove(t){var r;null===(r=(e=h(e,t))[0])||void 0===r||r.resume()}}}();function h(e,t){let r=[...e],n=r.indexOf(t);return -1!==n&&r.splice(n,1),r}},2247:(e,t,r)=>{r.d(t,{r:()=>n});let n=(0,r(3484).F)("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50",{variants:{color:{primary:"bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",outline:"border hover:bg-fd-accent hover:text-fd-accent-foreground",ghost:"hover:bg-fd-accent hover:text-fd-accent-foreground",secondary:"border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"},size:{sm:"gap-1 p-0.5 text-xs",icon:"p-1.5 [&_svg]:size-5","icon-sm":"p-1.5 [&_svg]:size-4.5"}}})},3778:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(5552).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},3792:(e,t,r)=>{r.d(t,{ThemeToggle:()=>v});var n=r(1048),o=r(3484),a=r(5552);let l=(0,a.A)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),i=(0,a.A)("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),s=(0,a.A)("airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);var d=r(7135),u=r(1044),c=r(8941);let f=(0,o.F)("size-6.5 rounded-full p-1.5 text-fd-muted-foreground",{variants:{active:{true:"bg-fd-accent text-fd-accent-foreground",false:"text-fd-muted-foreground"}}}),p=[["light",l],["dark",i],["system",s]];function v(e){let{className:t,mode:r="light-dark",...o}=e,{setTheme:a,theme:l,resolvedTheme:i}=(0,d.D)(),[s,v]=(0,u.useState)(!1);(0,u.useLayoutEffect)(()=>{v(!0)},[]);let m=(0,c.QP)("inline-flex items-center rounded-full border p-1",t);if("light-dark"===r){let e=s?i:null;return(0,n.jsx)("button",{className:m,"aria-label":"Toggle Theme",onClick:()=>a("light"===e?"dark":"light"),"data-theme-toggle":"",...o,children:p.map(t=>{let[r,o]=t;if("system"!==r)return(0,n.jsx)(o,{fill:"currentColor",className:(0,c.QP)(f({active:e===r}))},r)})})}let h=s?l:null;return(0,n.jsx)("div",{className:m,"data-theme-toggle":"",...o,children:p.map(e=>{let[t,r]=e;return(0,n.jsx)("button",{"aria-label":t,className:(0,c.QP)(f({active:h===t})),onClick:()=>a(t),children:(0,n.jsx)(r,{className:"size-full",fill:"currentColor"})},t)})})}},6027:(e,t,r)=>{r.d(t,{Oh:()=>a});var n=r(1044),o=0;function a(){n.useEffect(()=>{var e,t;let r=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=r[0])&&void 0!==e?e:l()),document.body.insertAdjacentElement("beforeend",null!==(t=r[1])&&void 0!==t?t:l()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function l(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},6093:(e,t,r)=>{r.d(t,{Eq:()=>u});var n=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},o=new WeakMap,a=new WeakMap,l={},i=0,s=function(e){return e&&(e.host||s(e.parentNode))},d=function(e,t,r,n){var d=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var r=s(e);return r&&t.contains(r)?r:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});l[r]||(l[r]=new WeakMap);var u=l[r],c=[],f=new Set,p=new Set(d),v=function(e){!(!e||f.has(e))&&(f.add(e),v(e.parentNode))};d.forEach(v);var m=function(e){!(!e||p.has(e))&&Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(n),l=null!==t&&"false"!==t,i=(o.get(e)||0)+1,s=(u.get(e)||0)+1;o.set(e,i),u.set(e,s),c.push(e),1===i&&l&&a.set(e,!0),1===s&&e.setAttribute(r,"true"),l||e.setAttribute(n,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),i++,function(){c.forEach(function(e){var t=o.get(e)-1,l=u.get(e)-1;o.set(e,t),u.set(e,l),t||(a.has(e)||e.removeAttribute(n),a.delete(e)),l||e.removeAttribute(r)}),--i||(o=new WeakMap,o=new WeakMap,a=new WeakMap,l={})}},u=function(e,t,r){void 0===r&&(r="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),a=t||n(e);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),d(o,a,r,"aria-hidden")):function(){return null}}},7935:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(5552).A)("search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},8712:(e,t,r)=>{r.d(t,{LanguageToggle:()=>s,LanguageToggleText:()=>d});var n=r(1048),o=r(536),a=r(178),l=r(8941),i=r(2247);function s(e){let t=(0,o.s9)();if(!t.locales)throw Error("Missing `<I18nProvider />`");return(0,n.jsxs)(a.AM,{children:[(0,n.jsx)(a.Wv,{"aria-label":t.text.chooseLanguage,...e,className:(0,l.QP)((0,i.r)({color:"ghost",className:"gap-1.5 p-1.5"}),e.className),children:e.children}),(0,n.jsxs)(a.hl,{className:"flex flex-col overflow-hidden p-0",children:[(0,n.jsx)("p",{className:"mb-1 p-2 text-xs font-medium text-fd-muted-foreground",children:t.text.chooseLanguage}),t.locales.map(e=>(0,n.jsx)("button",{type:"button",className:(0,l.QP)("p-2 text-start text-sm",e.locale===t.locale?"bg-fd-primary/10 font-medium text-fd-primary":"hover:bg-fd-accent hover:text-fd-accent-foreground"),onClick:()=>{var r;null===(r=t.onChange)||void 0===r||r.call(t,e.locale)},children:e.name},e.locale))]})]})}function d(e){var t,r;let a=(0,o.s9)(),l=null===(r=a.locales)||void 0===r?void 0:null===(t=r.find(e=>e.locale===a.locale))||void 0===t?void 0:t.name;return(0,n.jsx)("span",{...e,children:l})}},9380:(e,t,r)=>{r.r(t),r.d(t,{BaseLinkItem:()=>s});var n=r(1048),o=r(1231),a=r(5305),l=r(1044),i=r(4982);let s=(0,l.forwardRef)((e,t)=>{var r;let{item:l,...s}=e,d=(0,a.a8)(),u=null!==(r=l.active)&&void 0!==r?r:"url",c="none"!==u&&(0,i.$)(l.url,d,"nested-url"===u);return(0,n.jsx)(o.default,{ref:t,href:l.url,external:l.external,...s,"data-active":c,children:s.children})});s.displayName="BaseLinkItem"}}]);