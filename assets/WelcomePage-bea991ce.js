import{r as S,l as Js,P as Me,m as bi,n as $s,o as Ai,L as Ti,p as me,q as j,s as I,t as B,v as Z,R as wi,w as ee,x as _s,b as R,j as v,y as tr,z as ne,A as er}from"./index-fe9dec3b.js";import{b as hn}from"./bg_img_bubbles-c11f2eb9.js";const qt=S.createContext({}),Pi=S.createContext({strict:!1}),ke=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),nr="framerAppearId",Si="data-"+ke(nr),ir={skipAnimations:!1,useManualTiming:!1},{schedule:je,cancel:iu}=Js(queueMicrotask,!1);function sr(t,e,n,i){const{visualElement:s}=S.useContext(qt),o=S.useContext(Pi),r=S.useContext(Me),a=S.useContext(bi).reducedMotion,l=S.useRef();i=i||o.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:s,props:n,presenceContext:r,blockInitialAnimation:r?r.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;S.useInsertionEffect(()=>{c&&c.update(n,r)});const u=S.useRef(!!(n[Si]&&!window.HandoffComplete));return $s(()=>{c&&(je.postRender(c.render),u.current&&c.animationState&&c.animationState.animateChanges())}),S.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function dt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function rr(t,e,n){return S.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):dt(n)&&(n.current=i))},[e])}function St(t){return typeof t=="string"||Array.isArray(t)}function Qt(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Be=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Le=["initial",...Be];function Zt(t){return Qt(t.animate)||Le.some(e=>St(t[e]))}function Vi(t){return!!(Zt(t)||t.variants)}function or(t,e){if(Zt(t)){const{initial:n,animate:i}=t;return{initial:n===!1||St(n)?n:void 0,animate:St(i)?i:void 0}}return t.inherit!==!1?e:{}}function ar(t){const{initial:e,animate:n}=or(t,S.useContext(qt));return S.useMemo(()=>({initial:e,animate:n}),[dn(e),dn(n)])}function dn(t){return Array.isArray(t)?t.join(" "):t}const fn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vt={};for(const t in fn)Vt[t]={isEnabled:e=>fn[t].some(n=>!!e[n])};function lr(t){for(const e in t)Vt[e]={...Vt[e],...t[e]}}const Ci=S.createContext({}),cr=Symbol.for("motionComponentSymbol");function ur({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:s}){t&&lr(t);function o(a,l){let c;const u={...S.useContext(bi),...a,layoutId:hr(a)},{isStatic:h}=u,d=ar(a),f=i(a,h);if(!h&&Ai){d.visualElement=sr(s,f,u,e);const m=S.useContext(Ci),p=S.useContext(Pi).strict;d.visualElement&&(c=d.visualElement.loadFeatures(u,p,t,m))}return S.createElement(qt.Provider,{value:d},c&&d.visualElement?S.createElement(c,{visualElement:d.visualElement,...u}):null,n(s,a,rr(f,d.visualElement,l),f,h,d.visualElement))}const r=S.forwardRef(o);return r[cr]=s,r}function hr({layoutId:t}){const e=S.useContext(Ti).id;return e&&t!==void 0?e+"-"+t:t}function dr(t){function e(i,s={}){return ur(t(i,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const fr=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fe(t){return typeof t!="string"||t.includes("-")?!1:!!(fr.indexOf(t)>-1||/[A-Z]/u.test(t))}const Kt={};function pr(t){Object.assign(Kt,t)}const Rt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ct=new Set(Rt);function Di(t,{layout:e,layoutId:n}){return ct.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Kt[t]||t==="opacity")}const k=t=>!!(t&&t.getVelocity),mr={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gr=Rt.length;function yr(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,s){let o="";for(let r=0;r<gr;r++){const a=Rt[r];if(t[a]!==void 0){const l=mr[a]||a;o+=`${l}(${t[a]}) `}}return e&&!t.z&&(o+="translateZ(0)"),o=o.trim(),s?o=s(t,i?"":o):n&&i&&(o="none"),o}const Ri=t=>e=>typeof e=="string"&&e.startsWith(t),Ei=Ri("--"),xr=Ri("var(--"),Ie=t=>xr(t)?vr.test(t.split("/*")[0].trim()):!1,vr=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,br=(t,e)=>e&&typeof t=="number"?e.transform(t):t,et=(t,e,n)=>n>e?e:n<t?t:n,xt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},At={...xt,transform:t=>et(0,1,t)},Lt={...xt,default:1},Tt=t=>Math.round(t*1e5)/1e5,Oe=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,Ar=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Tr=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function Et(t){return typeof t=="string"}const Mt=t=>({test:e=>Et(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),$=Mt("deg"),X=Mt("%"),A=Mt("px"),wr=Mt("vh"),Pr=Mt("vw"),pn={...X,parse:t=>X.parse(t)/100,transform:t=>X.transform(t*100)},mn={...xt,transform:Math.round},Mi={borderWidth:A,borderTopWidth:A,borderRightWidth:A,borderBottomWidth:A,borderLeftWidth:A,borderRadius:A,radius:A,borderTopLeftRadius:A,borderTopRightRadius:A,borderBottomRightRadius:A,borderBottomLeftRadius:A,width:A,maxWidth:A,height:A,maxHeight:A,size:A,top:A,right:A,bottom:A,left:A,padding:A,paddingTop:A,paddingRight:A,paddingBottom:A,paddingLeft:A,margin:A,marginTop:A,marginRight:A,marginBottom:A,marginLeft:A,rotate:$,rotateX:$,rotateY:$,rotateZ:$,scale:Lt,scaleX:Lt,scaleY:Lt,scaleZ:Lt,skew:$,skewX:$,skewY:$,distance:A,translateX:A,translateY:A,translateZ:A,x:A,y:A,z:A,perspective:A,transformPerspective:A,opacity:At,originX:pn,originY:pn,originZ:A,zIndex:mn,backgroundPositionX:A,backgroundPositionY:A,fillOpacity:At,strokeOpacity:At,numOctaves:mn};function We(t,e,n,i){const{style:s,vars:o,transform:r,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const h in e){const d=e[h];if(Ei(h)){o[h]=d;continue}const f=Mi[h],m=br(d,f);if(ct.has(h)){if(l=!0,r[h]=m,!u)continue;d!==(f.default||0)&&(u=!1)}else h.startsWith("origin")?(c=!0,a[h]=m):s[h]=m}if(e.transform||(l||i?s.transform=yr(t.transform,n,u,i):s.transform&&(s.transform="none")),c){const{originX:h="50%",originY:d="50%",originZ:f=0}=a;s.transformOrigin=`${h} ${d} ${f}`}}const Ue=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ki(t,e,n){for(const i in e)!k(e[i])&&!Di(i,n)&&(t[i]=e[i])}function Sr({transformTemplate:t},e,n){return S.useMemo(()=>{const i=Ue();return We(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function Vr(t,e,n){const i=t.style||{},s={};return ki(s,i,t),Object.assign(s,Sr(t,e,n)),s}function Cr(t,e,n){const i={},s=Vr(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=s,i}const Dr=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Nt(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Dr.has(t)}let ji=t=>!Nt(t);function Rr(t){t&&(ji=e=>e.startsWith("on")?!Nt(e):t(e))}try{Rr(require("@emotion/is-prop-valid").default)}catch{}function Er(t,e,n){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(ji(s)||n===!0&&Nt(s)||!e&&!Nt(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function gn(t,e,n){return typeof t=="string"?t:A.transform(e+n*t)}function Mr(t,e,n){const i=gn(e,t.x,t.width),s=gn(n,t.y,t.height);return`${i} ${s}`}const kr={offset:"stroke-dashoffset",array:"stroke-dasharray"},jr={offset:"strokeDashoffset",array:"strokeDasharray"};function Br(t,e,n=1,i=0,s=!0){t.pathLength=1;const o=s?kr:jr;t[o.offset]=A.transform(-i);const r=A.transform(e),a=A.transform(n);t[o.array]=`${r} ${a}`}function Ke(t,{attrX:e,attrY:n,attrScale:i,originX:s,originY:o,pathLength:r,pathSpacing:a=1,pathOffset:l=0,...c},u,h,d){if(We(t,c,u,d),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:m,dimensions:p}=t;f.transform&&(p&&(m.transform=f.transform),delete f.transform),p&&(s!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=Mr(p,s!==void 0?s:.5,o!==void 0?o:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&Br(f,r,a,l,!1)}const Bi=()=>({...Ue(),attrs:{}}),Ne=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Lr(t,e,n,i){const s=S.useMemo(()=>{const o=Bi();return Ke(o,e,{enableHardwareAcceleration:!1},Ne(i),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};ki(o,t.style,t),s.style={...o,...s.style}}return s}function Fr(t=!1){return(n,i,s,{latestValues:o},r)=>{const l=(Fe(n)?Lr:Cr)(i,o,r,n),c=Er(i,typeof n=="string",t),u=n!==S.Fragment?{...c,...l,ref:s}:{},{children:h}=i,d=S.useMemo(()=>k(h)?h.get():h,[h]);return S.createElement(n,{...u,children:d})}}function Li(t,{style:e,vars:n},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const o in n)t.style.setProperty(o,n[o])}const Fi=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ii(t,e,n,i){Li(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(Fi.has(s)?s:ke(s),e.attrs[s])}function ze(t,e,n){var i;const{style:s}=t,o={};for(const r in s)(k(s[r])||e.style&&k(e.style[r])||Di(r,t)||((i=n==null?void 0:n.getValue(r))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(o[r]=s[r]);return o}function Oi(t,e,n){const i=ze(t,e,n);for(const s in t)if(k(t[s])||k(e[s])){const o=Rt.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[o]=t[s]}return i}function Xe(t,e,n,i={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),e}const ge=t=>Array.isArray(t),Ir=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Or=t=>ge(t)?t[t.length-1]||0:t;function Ot(t){const e=k(t)?t.get():t;return Ir(e)?e.toValue():e}function Wr({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,s,o){const r={latestValues:Ur(i,s,o,t),renderState:e()};return n&&(r.mount=a=>n(i,a,r)),r}const Wi=t=>(e,n)=>{const i=S.useContext(qt),s=S.useContext(Me),o=()=>Wr(t,e,i,s);return n?o():me(o)};function Ur(t,e,n,i){const s={},o=i(t,{});for(const d in o)s[d]=Ot(o[d]);let{initial:r,animate:a}=t;const l=Zt(t),c=Vi(t);e&&c&&!l&&t.inherit!==!1&&(r===void 0&&(r=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||r===!1;const h=u?a:r;return h&&typeof h!="boolean"&&!Qt(h)&&(Array.isArray(h)?h:[h]).forEach(f=>{const m=Xe(t,f);if(!m)return;const{transitionEnd:p,transition:y,...x}=m;for(const b in x){let g=x[b];if(Array.isArray(g)){const w=u?g.length-1:0;g=g[w]}g!==null&&(s[b]=g)}for(const b in p)s[b]=p[b]}),s}const Kr={useVisualState:Wi({scrapeMotionValuesFromProps:Oi,createRenderState:Bi,onMount:(t,e,{renderState:n,latestValues:i})=>{j.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),j.render(()=>{Ke(n,i,{enableHardwareAcceleration:!1},Ne(e.tagName),t.transformTemplate),Ii(e,n)})}})},Nr={useVisualState:Wi({scrapeMotionValuesFromProps:ze,createRenderState:Ue})};function zr(t,{forwardMotionProps:e=!1},n,i){return{...Fe(t)?Kr:Nr,preloadedFeatures:n,useRender:Fr(e),createVisualElement:i,Component:t}}function Y(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Ui=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Jt(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Xr=t=>e=>Ui(e)&&t(e,Jt(e));function q(t,e,n,i){return Y(t,e,Xr(n),i)}const Gr=(t,e)=>n=>e(t(n)),Q=(...t)=>t.reduce(Gr);function Ki(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const yn=Ki("dragHorizontal"),xn=Ki("dragVertical");function Ni(t){let e=!1;if(t==="y")e=xn();else if(t==="x")e=yn();else{const n=yn(),i=xn();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function zi(){const t=Ni(!0);return t?(t(),!1):!0}class it{constructor(e){this.isMounted=!1,this.node=e}update(){}}function vn(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),s=(o,r)=>{if(o.pointerType==="touch"||zi())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&a[i](o,r)};return q(t.current,n,s,{passive:!t.getProps()[i]})}class Hr extends it{mount(){this.unmount=Q(vn(this.node,!0),vn(this.node,!1))}unmount(){}}class Yr extends it{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Q(Y(this.node.current,"focus",()=>this.onFocus()),Y(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Xi=(t,e)=>e?t===e?!0:Xi(t,e.parentElement):!1;function ie(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Jt(n))}class qr extends it{constructor(){super(...arguments),this.removeStartListeners=I,this.removeEndListeners=I,this.removeAccessibleListeners=I,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),o=q(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:h}=this.node.getProps();!h&&!Xi(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)},{passive:!(i.onTap||i.onPointerUp)}),r=q(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Q(o,r),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=o=>{if(o.key!=="Enter"||this.isPressing)return;const r=a=>{a.key!=="Enter"||!this.checkPressEnd()||ie("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&u(l,c)})};this.removeEndListeners(),this.removeEndListeners=Y(this.node.current,"keyup",r),ie("down",(a,l)=>{this.startPress(a,l)})},n=Y(this.node.current,"keydown",e),i=()=>{this.isPressing&&ie("cancel",(o,r)=>this.cancelPress(o,r))},s=Y(this.node.current,"blur",i);this.removeAccessibleListeners=Q(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&i(e,n)}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!zi()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&i(e,n)}mount(){const e=this.node.getProps(),n=q(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Y(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Q(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ye=new WeakMap,se=new WeakMap,Qr=t=>{const e=ye.get(t.target);e&&e(t)},Zr=t=>{t.forEach(Qr)};function Jr({root:t,...e}){const n=t||document;se.has(n)||se.set(n,{});const i=se.get(n),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(Zr,{root:t,...e})),i[s]}function $r(t,e,n){const i=Jr(e);return ye.set(t,n),i.observe(t),()=>{ye.delete(t),i.unobserve(t)}}const _r={some:0,all:1};class to extends it{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:o}=e,r={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:_r[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return $r(this.node.current,r,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(eo(e,n))&&this.startObserver()}unmount(){}}function eo({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const no={inView:{Feature:to},tap:{Feature:qr},focus:{Feature:Yr},hover:{Feature:Hr}};function Gi(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function io(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function so(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function $t(t,e,n){const i=t.getProps();return Xe(i,e,n!==void 0?n:i.custom,io(t),so(t))}const G=t=>t*1e3,H=t=>t/1e3,ro={type:"spring",stiffness:500,damping:25,restSpeed:10},oo=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),ao={type:"keyframes",duration:.8},lo={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},co=(t,{keyframes:e})=>e.length>2?ao:ct.has(t)?t.startsWith("scale")?oo(e[1]):ro:lo;function uo({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:o,repeatType:r,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function Ge(t,e){return t[e]||t.default||t}const ho=t=>t!==null;function _t(t,{repeat:e,repeatType:n="loop"},i){const s=t.filter(ho),o=e&&n!=="loop"&&e%2===1?0:s.length-1;return!o||i===void 0?s[o]:i}let Wt;function fo(){Wt=void 0}const tt={now:()=>(Wt===void 0&&tt.set(B.isProcessing||ir.useManualTiming?B.timestamp:performance.now()),Wt),set:t=>{Wt=t,queueMicrotask(fo)}},Hi=t=>/^0[^.\s]+$/u.test(t);function po(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Hi(t):!0}let mo=I,He=I;const Yi=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),go=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yo(t){const e=go.exec(t);if(!e)return[,];const[,n,i,s]=e;return[`--${n??i}`,s]}function qi(t,e,n=1){const[i,s]=yo(t);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const r=o.trim();return Yi(r)?parseFloat(r):r}return Ie(s)?qi(s,e,n+1):s}const xo=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),bn=t=>t===xt||t===A,An=(t,e)=>parseFloat(t.split(", ")[e]),Tn=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return An(s[1],e);{const o=i.match(/^matrix\((.+)\)$/u);return o?An(o[1],t):0}},vo=new Set(["x","y","z"]),bo=Rt.filter(t=>!vo.has(t));function wn(t){const e=[];return bo.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const gt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Tn(4,13),y:Tn(5,14)};gt.translateX=gt.x;gt.translateY=gt.y;const Qi=t=>e=>e.test(t),Ao={test:t=>t==="auto",parse:t=>t},Zi=[xt,A,X,$,Pr,wr,Ao],Pn=t=>Zi.find(Qi(t)),lt=new Set;let xe=!1,ve=!1;function Ji(){if(ve){const t=Array.from(lt).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{wn(i).length&&(n.set(i,wn(i)),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render()}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}ve=!1,xe=!1,lt.forEach(t=>t.complete()),lt.clear()}function $i(){lt.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ve=!0)})}function To(){$i(),Ji()}class Ye{constructor(e,n,i,s,o,r=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=s,this.element=o,this.isAsync=r}scheduleResolve(){this.isScheduled=!0,this.isAsync?(lt.add(this),xe||(xe=!0,j.read($i),j.resolveKeyframes(Ji))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:s}=this;for(let o=0;o<e.length;o++)if(e[o]===null)if(o===0){const r=s==null?void 0:s.get(),a=e[e.length-1];if(r!==void 0)e[0]=r;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),s&&r===void 0&&s.set(e[0])}else e[o]=e[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),lt.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,lt.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const qe=(t,e)=>n=>!!(Et(n)&&Tr.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),_i=(t,e,n)=>i=>{if(!Et(i))return i;const[s,o,r,a]=i.match(Oe);return{[t]:parseFloat(s),[e]:parseFloat(o),[n]:parseFloat(r),alpha:a!==void 0?parseFloat(a):1}},wo=t=>et(0,255,t),re={...xt,transform:t=>Math.round(wo(t))},at={test:qe("rgb","red"),parse:_i("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+re.transform(t)+", "+re.transform(e)+", "+re.transform(n)+", "+Tt(At.transform(i))+")"};function Po(t){let e="",n="",i="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const be={test:qe("#"),parse:Po,transform:at.transform},ft={test:qe("hsl","hue"),parse:_i("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+X.transform(Tt(e))+", "+X.transform(Tt(n))+", "+Tt(At.transform(i))+")"},F={test:t=>at.test(t)||be.test(t)||ft.test(t),parse:t=>at.test(t)?at.parse(t):ft.test(t)?ft.parse(t):be.parse(t),transform:t=>Et(t)?t:t.hasOwnProperty("red")?at.transform(t):ft.transform(t)};function So(t){var e,n;return isNaN(t)&&Et(t)&&(((e=t.match(Oe))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Ar))===null||n===void 0?void 0:n.length)||0)>0}const ts="number",es="color",Vo="var",Co="var(",Sn="${}",Do=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function zt(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},s=[];let o=0;const a=e.replace(Do,l=>(F.test(l)?(i.color.push(o),s.push(es),n.push(F.parse(l))):l.startsWith(Co)?(i.var.push(o),s.push(Vo),n.push(l)):(i.number.push(o),s.push(ts),n.push(parseFloat(l))),++o,Sn)).split(Sn);return{values:n,split:a,indexes:i,types:s}}function ns(t){return zt(t).values}function is(t){const{split:e,types:n}=zt(t),i=e.length;return s=>{let o="";for(let r=0;r<i;r++)if(o+=e[r],s[r]!==void 0){const a=n[r];a===ts?o+=Tt(s[r]):a===es?o+=F.transform(s[r]):o+=s[r]}return o}}const Ro=t=>typeof t=="number"?0:t;function Eo(t){const e=ns(t);return is(t)(e.map(Ro))}const nt={test:So,parse:ns,createTransformer:is,getAnimatableNone:Eo},Mo=new Set(["brightness","contrast","saturate","opacity"]);function ko(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Oe)||[];if(!i)return t;const s=n.replace(i,"");let o=Mo.has(e)?1:0;return i!==n&&(o*=100),e+"("+o+s+")"}const jo=/\b([a-z-]*)\(.*?\)/gu,Ae={...nt,getAnimatableNone:t=>{const e=t.match(jo);return e?e.map(ko).join(" "):t}},Bo={...Mi,color:F,backgroundColor:F,outlineColor:F,fill:F,stroke:F,borderColor:F,borderTopColor:F,borderRightColor:F,borderBottomColor:F,borderLeftColor:F,filter:Ae,WebkitFilter:Ae},Qe=t=>Bo[t];function ss(t,e){let n=Qe(t);return n!==Ae&&(n=nt),n.getAnimatableNone?n.getAnimatableNone(e):void 0}function Lo(t,e,n){let i=0,s;for(;i<t.length&&!s;)typeof t[i]=="string"&&t[i]!=="none"&&t[i]!=="0"&&(s=t[i]),i++;if(s&&n)for(const o of e)t[o]=ss(n,s)}class rs extends Ye{constructor(e,n,i,s){super(e,n,i,s,s==null?void 0:s.owner,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){const c=e[l];if(typeof c=="string"&&Ie(c)){const u=qi(c,n.current);u!==void 0&&(e[l]=u)}}if(!xo.has(i)||e.length!==2)return this.resolveNoneKeyframes();const[s,o]=e,r=Pn(s),a=Pn(o);if(r!==a)if(bn(r)&&bn(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let s=0;s<e.length;s++)po(e[s])&&i.push(s);i.length&&Lo(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=gt[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:s}=this;if(!n.current)return;const o=n.getValue(i);o&&o.jump(this.measuredOrigin,!1);const r=s.length-1,a=s[r];s[r]=gt[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function os(t){let e;return()=>(e===void 0&&(e=t()),e)}const Vn=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(nt.test(t)||t==="0")&&!t.startsWith("url("));function Fo(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Io(t,e,n,i){const s=t[0];if(s===null)return!1;const o=t[t.length-1],r=Vn(s,e),a=Vn(o,e);return!r||!a?!1:Fo(t)||n==="spring"&&i}class as{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:r="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:e,delay:n,type:i,repeat:s,repeatDelay:o,repeatType:r,...a},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&To(),this._resolved}onKeyframesResolved(e,n){this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:o,delay:r,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Io(e,i,s,o))if(r)this.options.duration=0;else{l==null||l(_t(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function ls(t,e){return e?t*(1e3/e):0}const Oo=5;function cs(t,e,n){const i=Math.max(e-Oo,0);return ls(n-t(i),e-i)}const oe=.001,Wo=.01,Cn=10,Uo=.05,Ko=1;function No({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let s,o;mo(t<=G(Cn));let r=1-e;r=et(Uo,Ko,r),t=et(Wo,Cn,H(t)),r<1?(s=c=>{const u=c*r,h=u*t,d=u-n,f=Te(c,r),m=Math.exp(-h);return oe-d/f*m},o=c=>{const h=c*r*t,d=h*n+n,f=Math.pow(r,2)*Math.pow(c,2)*t,m=Math.exp(-h),p=Te(Math.pow(c,2),r);return(-s(c)+oe>0?-1:1)*((d-f)*m)/p}):(s=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-oe+u*h},o=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=Xo(s,o,a);if(t=G(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:r*2*Math.sqrt(i*c),duration:t}}}const zo=12;function Xo(t,e,n){let i=n;for(let s=1;s<zo;s++)i=i-t(i)/e(i);return i}function Te(t,e){return t*Math.sqrt(1-e*e)}const Go=["duration","bounce"],Ho=["stiffness","damping","mass"];function Dn(t,e){return e.some(n=>t[n]!==void 0)}function Yo(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Dn(t,Ho)&&Dn(t,Go)){const n=No(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Ze({keyframes:t,restDelta:e,restSpeed:n,...i}){const s=t[0],o=t[t.length-1],r={done:!1,value:s},{stiffness:a,damping:l,mass:c,duration:u,velocity:h,isResolvedFromDuration:d}=Yo({...i,velocity:-H(i.velocity||0)}),f=h||0,m=l/(2*Math.sqrt(a*c)),p=o-s,y=H(Math.sqrt(a/c)),x=Math.abs(p)<5;n||(n=x?.01:2),e||(e=x?.005:.5);let b;if(m<1){const g=Te(y,m);b=w=>{const P=Math.exp(-m*y*w);return o-P*((f+m*y*p)/g*Math.sin(g*w)+p*Math.cos(g*w))}}else if(m===1)b=g=>o-Math.exp(-y*g)*(p+(f+y*p)*g);else{const g=y*Math.sqrt(m*m-1);b=w=>{const P=Math.exp(-m*y*w),C=Math.min(g*w,300);return o-P*((f+m*y*p)*Math.sinh(C)+g*p*Math.cosh(C))/g}}return{calculatedDuration:d&&u||null,next:g=>{const w=b(g);if(d)r.done=g>=u;else{let P=f;g!==0&&(m<1?P=cs(b,g,w):P=0);const C=Math.abs(P)<=n,O=Math.abs(o-w)<=e;r.done=C&&O}return r.value=r.done?o:w,r}}}function Rn({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:o=500,modifyTarget:r,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},f=T=>a!==void 0&&T<a||l!==void 0&&T>l,m=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let p=n*e;const y=h+p,x=r===void 0?y:r(y);x!==y&&(p=x-h);const b=T=>-p*Math.exp(-T/i),g=T=>x+b(T),w=T=>{const L=b(T),E=g(T);d.done=Math.abs(L)<=c,d.value=d.done?x:E};let P,C;const O=T=>{f(d.value)&&(P=T,C=Ze({keyframes:[d.value,m(d.value)],velocity:cs(g,T,d.value),damping:s,stiffness:o,restDelta:c,restSpeed:u}))};return O(0),{calculatedDuration:null,next:T=>{let L=!1;return!C&&P===void 0&&(L=!0,w(T),O(T)),P!==void 0&&T>=P?C.next(T-P):(!L&&w(T),d)}}}const us=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,qo=1e-7,Qo=12;function Zo(t,e,n,i,s){let o,r,a=0;do r=e+(n-e)/2,o=us(r,i,s)-t,o>0?n=r:e=r;while(Math.abs(o)>qo&&++a<Qo);return r}function kt(t,e,n,i){if(t===e&&n===i)return I;const s=o=>Zo(o,0,1,t,n);return o=>o===0||o===1?o:us(s(o),e,i)}const Jo=kt(.42,0,1,1),$o=kt(0,0,.58,1),hs=kt(.42,0,.58,1),ds=t=>Array.isArray(t)&&typeof t[0]!="number",fs=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ps=t=>e=>1-t(1-e),Je=t=>1-Math.sin(Math.acos(t)),ms=ps(Je),_o=fs(Je),gs=kt(.33,1.53,.69,.99),$e=ps(gs),ta=fs($e),ea=t=>(t*=2)<1?.5*$e(t):.5*(2-Math.pow(2,-10*(t-1))),na={linear:I,easeIn:Jo,easeInOut:hs,easeOut:$o,circIn:Je,circInOut:_o,circOut:ms,backIn:$e,backInOut:ta,backOut:gs,anticipate:ea},En=t=>{if(Array.isArray(t)){He(t.length===4);const[e,n,i,s]=t;return kt(e,n,i,s)}else if(typeof t=="string")return na[t];return t},yt=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},V=(t,e,n)=>t+(e-t)*n;function ae(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ia({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let s=0,o=0,r=0;if(!e)s=o=r=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;s=ae(l,a,t+1/3),o=ae(l,a,t),r=ae(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(o*255),blue:Math.round(r*255),alpha:i}}const le=(t,e,n)=>{const i=t*t,s=n*(e*e-i)+i;return s<0?0:Math.sqrt(s)},sa=[be,at,ft],ra=t=>sa.find(e=>e.test(t));function Mn(t){const e=ra(t);let n=e.parse(t);return e===ft&&(n=ia(n)),n}const kn=(t,e)=>{const n=Mn(t),i=Mn(e),s={...n};return o=>(s.red=le(n.red,i.red,o),s.green=le(n.green,i.green,o),s.blue=le(n.blue,i.blue,o),s.alpha=V(n.alpha,i.alpha,o),at.transform(s))};function we(t,e){return n=>n>0?e:t}function oa(t,e){return n=>V(t,e,n)}function _e(t){return typeof t=="number"?oa:typeof t=="string"?Ie(t)?we:F.test(t)?kn:ca:Array.isArray(t)?ys:typeof t=="object"?F.test(t)?kn:aa:we}function ys(t,e){const n=[...t],i=n.length,s=t.map((o,r)=>_e(o)(o,e[r]));return o=>{for(let r=0;r<i;r++)n[r]=s[r](o);return n}}function aa(t,e){const n={...t,...e},i={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(i[s]=_e(t[s])(t[s],e[s]));return s=>{for(const o in i)n[o]=i[o](s);return n}}function la(t,e){var n;const i=[],s={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const r=e.types[o],a=t.indexes[r][s[r]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[o]=l,s[r]++}return i}const ca=(t,e)=>{const n=nt.createTransformer(e),i=zt(t),s=zt(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Q(ys(la(i,s),s.values),n):we(t,e)};function xs(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?V(t,e,n):_e(t)(t,e)}function ua(t,e,n){const i=[],s=n||xs,o=t.length-1;for(let r=0;r<o;r++){let a=s(t[r],t[r+1]);if(e){const l=Array.isArray(e)?e[r]||I:e;a=Q(l,a)}i.push(a)}return i}function ha(t,e,{clamp:n=!0,ease:i,mixer:s}={}){const o=t.length;if(He(o===e.length),o===1)return()=>e[0];if(o===2&&t[0]===t[1])return()=>e[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const r=ua(e,i,s),a=r.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const h=yt(t[u],t[u+1],c);return r[u](h)};return n?c=>l(et(t[0],t[o-1],c)):l}function vs(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=yt(0,e,i);t.push(V(n,1,s))}}function bs(t){const e=[0];return vs(e,t.length-1),e}function da(t,e){return t.map(n=>n*e)}function fa(t,e){return t.map(()=>e||hs).splice(0,t.length-1)}function Xt({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const s=ds(i)?i.map(En):En(i),o={done:!1,value:e[0]},r=da(n&&n.length===e.length?n:bs(e),t),a=ha(r,e,{ease:Array.isArray(s)?s:fa(e,s)});return{calculatedDuration:t,next:l=>(o.value=a(l),o.done=l>=t,o)}}const Pe=2e4;function As(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Pe;)e+=n,i=t.next(e);return e>=Pe?1/0:e}const pa=t=>{const e=({timestamp:n})=>t(n);return{start:()=>j.update(e,!0),stop:()=>Z(e),now:()=>B.isProcessing?B.timestamp:tt.now()}},ma={decay:Rn,inertia:Rn,tween:Xt,keyframes:Xt,spring:Ze},ga=t=>t/100;class tn extends as{constructor({KeyframeResolver:e=Ye,...n}){super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle";const{name:i,motionValue:s,keyframes:o}=this.options,r=(a,l)=>this.onKeyframesResolved(a,l);i&&s&&s.owner?this.resolver=s.owner.resolveKeyframes(o,r,i,s):this.resolver=new e(o,r,i,s),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o,velocity:r=0}=this.options,a=ma[n]||Xt;let l,c;a!==Xt&&typeof e[0]!="number"&&(l=Q(ga,xs(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});o==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-r})),u.calculatedDuration===null&&(u.calculatedDuration=As(u));const{calculatedDuration:h}=u,d=h+s,f=d*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:f}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:s,generator:o,mirroredGenerator:r,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return o.next(0);const{delay:d,repeat:f,repeatType:m,repeatDelay:p,onUpdate:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-d*(this.speed>=0?1:-1),b=this.speed>=0?x<0:x>u;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let g=this.currentTime,w=o;if(f){const T=Math.min(this.currentTime,u)/h;let L=Math.floor(T),E=T%1;!E&&T>=1&&(E=1),E===1&&L--,L=Math.min(L,f+1),!!(L%2)&&(m==="reverse"?(E=1-E,p&&(E-=p/h)):m==="mirror"&&(w=r)),g=et(0,1,E)*h}const P=b?{done:!1,value:l[0]}:w.next(g);a&&(P.value=a(P.value));let{done:C}=P;!b&&c!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return O&&s!==void 0&&(P.value=_t(l,this.options,s)),y&&y(P.value),O&&this.finish(),P}get duration(){const{resolved:e}=this;return e?H(e.calculatedDuration):0}get time(){return H(this.currentTime)}set time(e){e=G(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=H(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=pa,onPlay:n}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:(!this.startTime||this.state==="finished")&&(this.startTime=i),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:e}=this.options;e&&e()}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Ts=t=>Array.isArray(t)&&typeof t[0]=="number";function ws(t){return!!(!t||typeof t=="string"&&Ps[t]||Ts(t)||Array.isArray(t)&&t.every(ws))}const bt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Ps={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bt([0,.65,.55,1]),circOut:bt([.55,0,1,.45]),backIn:bt([.31,.01,.66,-.59]),backOut:bt([.33,1.53,.69,.99])};function Ss(t){if(t)return Ts(t)?bt(t):Array.isArray(t)?t.map(Ss):Ps[t]}function ya(t,e,n,{delay:i=0,duration:s=300,repeat:o=0,repeatType:r="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Ss(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:r==="reverse"?"alternate":"normal"})}const xa=os(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),va=new Set(["opacity","clipPath","filter","transform"]),Gt=10,ba=2e4;function Aa(t){return t.type==="spring"||t.name==="backgroundColor"||!ws(t.ease)}function Ta(t,e){const n=new tn({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const s=[];let o=0;for(;!i.done&&o<ba;)i=n.sample(o),s.push(i.value),o+=Gt;return{times:void 0,keyframes:s,duration:o-Gt,ease:"linear"}}class jn extends as{constructor(e){super(e);const{name:n,motionValue:i,keyframes:s}=this.options;this.resolver=new rs(s,(o,r)=>this.onKeyframesResolved(o,r),n,i),this.resolver.scheduleResolve()}initPlayback(e,n){var i;let{duration:s=300,times:o,ease:r,type:a,motionValue:l,name:c}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(Aa(this.options)){const{onComplete:h,onUpdate:d,motionValue:f,...m}=this.options,p=Ta(e,m);e=p.keyframes,e.length===1&&(e[1]=e[0]),s=p.duration,o=p.times,r=p.ease,a="keyframes"}const u=ya(l.owner.current,c,e,{...this.options,duration:s,times:o,ease:r});return u.startTime=tt.now(),this.pendingTimeline?(u.timeline=this.pendingTimeline,this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:h}=this.options;l.set(_t(e,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:s,times:o,type:a,ease:r,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return H(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return H(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=G(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return I;const{animation:i}=n;i.timeline=e,i.onfinish=null}return I}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:s,type:o,ease:r,times:a}=e;if(!(n.playState==="idle"||n.playState==="finished")){if(this.time){const{motionValue:l,onUpdate:c,onComplete:u,...h}=this.options,d=new tn({...h,keyframes:i,duration:s,type:o,ease:r,times:a,isGenerator:!0}),f=G(this.time);l.setWithVelocity(d.sample(f-Gt).value,d.sample(f).value,Gt)}this.cancel()}}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:s,repeatType:o,damping:r,type:a}=e;return xa()&&i&&va.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!s&&o!=="mirror"&&r!==0&&a!=="inertia"}}const en=(t,e,n,i={},s,o)=>r=>{const a=Ge(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-G(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{r(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:s};uo(a)||(u={...u,...co(t,u)}),u.duration&&(u.duration=G(u.duration)),u.repeatDelay&&(u.repeatDelay=G(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if(u.type===!1&&(u.duration=0,u.delay===0&&(h=!0)),h&&!o&&e.get()!==void 0){const d=_t(u.keyframes,a);if(d!==void 0){j.update(()=>{u.onUpdate(d),u.onComplete()});return}}return!o&&jn.supports(u)?new jn(u):new tn(u)};function Ht(t){return!!(k(t)&&t.add)}function nn(t,e){t.indexOf(e)===-1&&t.push(e)}function te(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class sn{constructor(){this.subscriptions=[]}add(e){return nn(this.subscriptions,e),()=>te(this.subscriptions,e)}notify(e,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,i);else for(let o=0;o<s;o++){const r=this.subscriptions[o];r&&r(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bn=30,wa=t=>!isNaN(parseFloat(t));class Pa{constructor(e,n={}){this.version="11.0.24",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{const o=tt.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=wa(this.current),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=tt.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new sn);const i=this.events[e].add(n);return e==="change"?()=>{i(),j.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=tt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Bn)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Bn);return ls(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ct(t,e){return new Pa(t,e)}function Sa(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ct(n))}function Va(t,e){const n=$t(t,e);let{transitionEnd:i={},transition:s={},...o}=n||{};o={...o,...i};for(const r in o){const a=Or(o[r]);Sa(t,r,a)}}function Ca({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function rn(t,e,{delay:n=0,transitionOverride:i,type:s}={}){var o;let{transition:r=t.getDefaultTransition(),transitionEnd:a,...l}=e;const c=t.getValue("willChange");i&&(r=i);const u=[],h=s&&t.animationState&&t.animationState.getState()[s];for(const d in l){const f=t.getValue(d,(o=t.latestValues[d])!==null&&o!==void 0?o:null),m=l[d];if(m===void 0||h&&Ca(h,d))continue;const p={delay:n,elapsed:0,...Ge(r||{},d)};let y=!1;if(window.HandoffAppearAnimations){const b=t.getProps()[Si];if(b){const g=window.HandoffAppearAnimations(b,d);g!==null&&(p.elapsed=g,y=!0)}}f.start(en(d,f,m,t.shouldReduceMotion&&ct.has(d)?{type:!1}:p,t,y));const x=f.animation;x&&(Ht(c)&&(c.add(d),x.then(()=>c.remove(d))),u.push(x))}return a&&Promise.all(u).then(()=>{j.update(()=>{a&&Va(t,a)})}),u}function Se(t,e,n={}){var i;const s=$t(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const r=s?()=>Promise.all(rn(t,s,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=o;return Da(t,e,u+c,h,d,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,u]=l==="beforeChildren"?[r,a]:[a,r];return c().then(()=>u())}else return Promise.all([r(),a(n.delay)])}function Da(t,e,n=0,i=0,s=1,o){const r=[],a=(t.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(Ra).forEach((c,u)=>{c.notify("AnimationStart",e),r.push(Se(c,e,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(r)}function Ra(t,e){return t.sortNodePosition(e)}function Ea(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(o=>Se(t,o,n));i=Promise.all(s)}else if(typeof e=="string")i=Se(t,e,n);else{const s=typeof e=="function"?$t(t,e,n.custom):e;i=Promise.all(rn(t,s,n))}return i.then(()=>{j.postRender(()=>{t.notify("AnimationComplete",e)})})}const Ma=[...Be].reverse(),ka=Be.length;function ja(t){return e=>Promise.all(e.map(({animation:n,options:i})=>Ea(t,n,i)))}function Ba(t){let e=ja(t);const n=Fa();let i=!0;const s=l=>(c,u)=>{var h;const d=$t(t,u,l==="exit"?(h=t.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:f,transitionEnd:m,...p}=d;c={...c,...p,...m}}return c};function o(l){e=l(t)}function r(l){const c=t.getProps(),u=t.getVariantContext(!0)||{},h=[],d=new Set;let f={},m=1/0;for(let y=0;y<ka;y++){const x=Ma[y],b=n[x],g=c[x]!==void 0?c[x]:u[x],w=St(g),P=x===l?b.isActive:null;P===!1&&(m=y);let C=g===u[x]&&g!==c[x]&&w;if(C&&i&&t.manuallyAnimateOnMount&&(C=!1),b.protectedKeys={...f},!b.isActive&&P===null||!g&&!b.prevProp||Qt(g)||typeof g=="boolean")continue;let T=La(b.prevProp,g)||x===l&&b.isActive&&!C&&w||y>m&&w,L=!1;const E=Array.isArray(g)?g:[g];let J=E.reduce(s(x),{});P===!1&&(J={});const{prevResolvedValues:jt={}}=b,Bt={...jt,...J},U=M=>{T=!0,d.has(M)&&(L=!0,d.delete(M)),b.needsAnimating[M]=!0;const K=t.getValue(M);K&&(K.liveStyle=!1)};for(const M in Bt){const K=J[M],ut=jt[M];if(f.hasOwnProperty(M))continue;let ht=!1;ge(K)&&ge(ut)?ht=!Gi(K,ut):ht=K!==ut,ht?K!=null?U(M):d.add(M):K!==void 0&&d.has(M)?U(M):b.protectedKeys[M]=!0}b.prevProp=g,b.prevResolvedValues=J,b.isActive&&(f={...f,...J}),i&&t.blockInitialAnimation&&(T=!1),T&&(!C||L)&&h.push(...E.map(M=>({animation:M,options:{type:x}})))}if(d.size){const y={};d.forEach(x=>{const b=t.getBaseTarget(x),g=t.getValue(x);g&&(g.liveStyle=!0),y[x]=b===void 0?null:b}),h.push({animation:y})}let p=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(p=!1),i=!1,p?e(h):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var f;return(f=d.animationState)===null||f===void 0?void 0:f.setActive(l,c)}),n[l].isActive=c;const h=r(l);for(const d in n)n[d].protectedKeys={};return h}return{animateChanges:r,setActive:a,setAnimateFunction:o,getState:()=>n}}function La(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Gi(e,t):!1}function st(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fa(){return{animate:st(!0),whileInView:st(),whileHover:st(),whileTap:st(),whileDrag:st(),whileFocus:st(),exit:st()}}class Ia extends it{constructor(e){super(e),e.animationState||(e.animationState=Ba(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Qt(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Oa=0;class Wa extends it{constructor(){super(...arguments),this.id=Oa++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Ua={animation:{Feature:Ia},exit:{Feature:Wa}},Ln=(t,e)=>Math.abs(t-e);function Ka(t,e){const n=Ln(t.x,e.x),i=Ln(t.y,e.y);return Math.sqrt(n**2+i**2)}class Vs{constructor(e,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=ue(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,f=Ka(h.offset,{x:0,y:0})>=3;if(!d&&!f)return;const{point:m}=h,{timestamp:p}=B;this.history.push({...m,timestamp:p});const{onStart:y,onMove:x}=this.handlers;d||(y&&y(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=ce(d,this.transformPagePoint),j.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:f,onSessionEnd:m,resumeAnimation:p}=this.handlers;if(this.dragSnapToOrigin&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=ue(h.type==="pointercancel"?this.lastMoveEventInfo:ce(d,this.transformPagePoint),this.history);this.startEvent&&f&&f(h,y),m&&m(h,y)},!Ui(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const r=Jt(e),a=ce(r,this.transformPagePoint),{point:l}=a,{timestamp:c}=B;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,ue(a,this.history)),this.removeListeners=Q(q(this.contextWindow,"pointermove",this.handlePointerMove),q(this.contextWindow,"pointerup",this.handlePointerUp),q(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Z(this.updatePoint)}}function ce(t,e){return e?{point:e(t.point)}:t}function Fn(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ue({point:t},e){return{point:t,delta:Fn(t,Cs(e)),offset:Fn(t,Na(e)),velocity:za(e,.1)}}function Na(t){return t[0]}function Cs(t){return t[t.length-1]}function za(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const s=Cs(t);for(;n>=0&&(i=t[n],!(s.timestamp-i.timestamp>G(e)));)n--;if(!i)return{x:0,y:0};const o=H(s.timestamp-i.timestamp);if(o===0)return{x:0,y:0};const r={x:(s.x-i.x)/o,y:(s.y-i.y)/o};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function W(t){return t.max-t.min}function Ve(t,e=0,n=.01){return Math.abs(t-e)<=n}function In(t,e,n,i=.5){t.origin=i,t.originPoint=V(e.min,e.max,t.origin),t.scale=W(n)/W(e),(Ve(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=V(n.min,n.max,t.origin)-t.originPoint,(Ve(t.translate)||isNaN(t.translate))&&(t.translate=0)}function wt(t,e,n,i){In(t.x,e.x,n.x,i?i.originX:void 0),In(t.y,e.y,n.y,i?i.originY:void 0)}function On(t,e,n){t.min=n.min+e.min,t.max=t.min+W(e)}function Xa(t,e,n){On(t.x,e.x,n.x),On(t.y,e.y,n.y)}function Wn(t,e,n){t.min=e.min-n.min,t.max=t.min+W(e)}function Pt(t,e,n){Wn(t.x,e.x,n.x),Wn(t.y,e.y,n.y)}function Ga(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?V(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?V(n,t,i.max):Math.min(t,n)),t}function Un(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Ha(t,{top:e,left:n,bottom:i,right:s}){return{x:Un(t.x,n,s),y:Un(t.y,e,i)}}function Kn(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Ya(t,e){return{x:Kn(t.x,e.x),y:Kn(t.y,e.y)}}function qa(t,e){let n=.5;const i=W(t),s=W(e);return s>i?n=yt(e.min,e.max-i,t.min):i>s&&(n=yt(t.min,t.max-s,e.min)),et(0,1,n)}function Qa(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ce=.35;function Za(t=Ce){return t===!1?t=0:t===!0&&(t=Ce),{x:Nn(t,"left","right"),y:Nn(t,"top","bottom")}}function Nn(t,e,n){return{min:zn(t,e),max:zn(t,n)}}function zn(t,e){return typeof t=="number"?t:t[e]||0}const Xn=()=>({translate:0,scale:1,origin:0,originPoint:0}),pt=()=>({x:Xn(),y:Xn()}),Gn=()=>({min:0,max:0}),D=()=>({x:Gn(),y:Gn()});function z(t){return[t("x"),t("y")]}function Ds({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Ja({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function $a(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function he(t){return t===void 0||t===1}function De({scale:t,scaleX:e,scaleY:n}){return!he(t)||!he(e)||!he(n)}function rt(t){return De(t)||Rs(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Rs(t){return Hn(t.x)||Hn(t.y)}function Hn(t){return t&&t!=="0%"}function Yt(t,e,n){const i=t-n,s=e*i;return n+s}function Yn(t,e,n,i,s){return s!==void 0&&(t=Yt(t,s,i)),Yt(t,n,i)+e}function Re(t,e=0,n=1,i,s){t.min=Yn(t.min,e,n,i,s),t.max=Yn(t.max,e,n,i,s)}function Es(t,{x:e,y:n}){Re(t.x,e.translate,e.scale,e.originPoint),Re(t.y,n.translate,n.scale,n.originPoint)}function _a(t,e,n,i=!1){const s=n.length;if(!s)return;e.x=e.y=1;let o,r;for(let a=0;a<s;a++){o=n[a],r=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&mt(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,Es(t,r)),i&&rt(o.latestValues)&&mt(t,o.latestValues))}e.x=qn(e.x),e.y=qn(e.y)}function qn(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function _(t,e){t.min=t.min+e,t.max=t.max+e}function Qn(t,e,[n,i,s]){const o=e[s]!==void 0?e[s]:.5,r=V(t.min,t.max,o);Re(t,e[n],e[i],r,e.scale)}const tl=["x","scaleX","originX"],el=["y","scaleY","originY"];function mt(t,e){Qn(t.x,e,tl),Qn(t.y,e,el)}function Ms(t,e){return Ds($a(t.getBoundingClientRect(),e))}function nl(t,e,n){const i=Ms(t,n),{scroll:s}=e;return s&&(_(i.x,s.offset.x),_(i.y,s.offset.y)),i}const ks=({current:t})=>t?t.ownerDocument.defaultView:null,il=new WeakMap;class sl{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=D(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Jt(u,"page").point)},o=(u,h)=>{const{drag:d,dragPropagation:f,onDragStart:m}=this.getProps();if(d&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ni(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),z(y=>{let x=this.getAxisMotionValue(y).get()||0;if(X.test(x)){const{projection:b}=this.visualElement;if(b&&b.layout){const g=b.layout.layoutBox[y];g&&(x=W(g)*(parseFloat(x)/100))}}this.originPoint[y]=x}),m&&m(u,h);const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},r=(u,h)=>{const{dragPropagation:d,dragDirectionLock:f,onDirectionLock:m,onDrag:p}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:y}=h;if(f&&this.currentDirection===null){this.currentDirection=rl(y),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",h.point,y),this.updateAxis("y",h.point,y),this.visualElement.render(),p&&p(u,h)},a=(u,h)=>this.stop(u,h),l=()=>z(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Vs(e,{onSessionStart:s,onStart:o,onMove:r,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:ks(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:o}=this.getProps();o&&o(e,n)}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:s}=this.getProps();if(!i||!Ft(e,s,this.currentDirection))return;const o=this.getAxisMotionValue(e);let r=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(r=Ga(r,this.constraints[e],this.elastic[e])),o.set(r)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,o=this.constraints;n&&dt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=Ha(s.layoutBox,n):this.constraints=!1,this.elastic=Za(i),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&z(r=>{this.getAxisMotionValue(r)&&(this.constraints[r]=Qa(s.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!dt(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const o=nl(i,s.root,this.visualElement.getTransformPagePoint());let r=Ya(s.layout.layoutBox,o);if(n){const a=n(Ja(r));this.hasMutatedConstraints=!!a,a&&(r=Ds(a))}return r}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:o,dragSnapToOrigin:r,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=z(u=>{if(!Ft(u,n,this.currentDirection))return;let h=l&&l[u]||{};r&&(h={min:0,max:0});const d=s?200:1e6,f=s?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(en(e,i,0,n,this.visualElement))}stopAnimation(){z(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){z(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){z(n=>{const{drag:i}=this.getProps();if(!Ft(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,o=this.getAxisMotionValue(n);if(s&&s.layout){const{min:r,max:a}=s.layout.layoutBox[n];o.set(e[n]-V(r,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!dt(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};z(r=>{const a=this.getAxisMotionValue(r);if(a){const l=a.get();s[r]=qa({min:l,max:l},this.constraints[r])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),z(r=>{if(!Ft(r,e,null))return;const a=this.getAxisMotionValue(r),{min:l,max:c}=this.constraints[r];a.set(V(l,c,s[r]))})}addListeners(){if(!this.visualElement.current)return;il.set(this.visualElement,this);const e=this.visualElement.current,n=q(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();dt(l)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const r=Y(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(z(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{r(),n(),o(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:o=!1,dragElastic:r=Ce,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:o,dragElastic:r,dragMomentum:a}}}function Ft(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function rl(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class ol extends it{constructor(e){super(e),this.removeGroupControls=I,this.removeListeners=I,this.controls=new sl(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||I}unmount(){this.removeGroupControls(),this.removeListeners()}}const Zn=t=>(e,n)=>{t&&t(e,n)};class al extends it{constructor(){super(...arguments),this.removePointerDownListener=I}onPointerDown(e){this.session=new Vs(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ks(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Zn(e),onStart:Zn(n),onMove:i,onEnd:(o,r)=>{delete this.session,s&&s(o,r)}}}mount(){this.removePointerDownListener=q(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function ll(){const t=S.useContext(Me);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,s=S.useId();return S.useEffect(()=>i(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const Ut={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Jn(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const vt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(A.test(t))t=parseFloat(t);else return t;const n=Jn(t,e.target.x),i=Jn(t,e.target.y);return`${n}% ${i}%`}},cl={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,s=nt.parse(t);if(s.length>5)return i;const o=nt.createTransformer(t),r=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;s[0+r]/=a,s[1+r]/=l;const c=V(a,l,.5);return typeof s[2+r]=="number"&&(s[2+r]/=c),typeof s[3+r]=="number"&&(s[3+r]/=c),o(s)}};class ul extends wi.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:o}=e;pr(hl),o&&(n.group&&n.group.add(o),i&&i.register&&s&&i.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Ut.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:s,isPresent:o}=this.props,r=i.projection;return r&&(r.isPresent=o,s||e.layoutDependency!==n||n===void 0?r.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?r.promote():r.relegate()||j.postRender(()=>{const a=r.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),je.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function js(t){const[e,n]=ll(),i=S.useContext(Ti);return wi.createElement(ul,{...t,layoutGroup:i,switchLayoutGroup:S.useContext(Ci),isPresent:e,safeToRemove:n})}const hl={borderRadius:{...vt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vt,borderTopRightRadius:vt,borderBottomLeftRadius:vt,borderBottomRightRadius:vt,boxShadow:cl},Bs=["TopLeft","TopRight","BottomLeft","BottomRight"],dl=Bs.length,$n=t=>typeof t=="string"?parseFloat(t):t,_n=t=>typeof t=="number"||A.test(t);function fl(t,e,n,i,s,o){s?(t.opacity=V(0,n.opacity!==void 0?n.opacity:1,pl(i)),t.opacityExit=V(e.opacity!==void 0?e.opacity:1,0,ml(i))):o&&(t.opacity=V(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let r=0;r<dl;r++){const a=`border${Bs[r]}Radius`;let l=ti(e,a),c=ti(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||_n(l)===_n(c)?(t[a]=Math.max(V($n(l),$n(c),i),0),(X.test(c)||X.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=V(e.rotate||0,n.rotate||0,i))}function ti(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const pl=Ls(0,.5,ms),ml=Ls(.5,.95,I);function Ls(t,e,n){return i=>i<t?0:i>e?1:n(yt(t,e,i))}function ei(t,e){t.min=e.min,t.max=e.max}function N(t,e){ei(t.x,e.x),ei(t.y,e.y)}function ni(t,e,n,i,s){return t-=e,t=Yt(t,1/n,i),s!==void 0&&(t=Yt(t,1/s,i)),t}function gl(t,e=0,n=1,i=.5,s,o=t,r=t){if(X.test(e)&&(e=parseFloat(e),e=V(r.min,r.max,e/100)-r.min),typeof e!="number")return;let a=V(o.min,o.max,i);t===o&&(a-=e),t.min=ni(t.min,e,n,a,s),t.max=ni(t.max,e,n,a,s)}function ii(t,e,[n,i,s],o,r){gl(t,e[n],e[i],e[s],e.scale,o,r)}const yl=["x","scaleX","originX"],xl=["y","scaleY","originY"];function si(t,e,n,i){ii(t.x,e,yl,n?n.x:void 0,i?i.x:void 0),ii(t.y,e,xl,n?n.y:void 0,i?i.y:void 0)}function ri(t){return t.translate===0&&t.scale===1}function Fs(t){return ri(t.x)&&ri(t.y)}function vl(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Is(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function oi(t){return W(t.x)/W(t.y)}class bl{constructor(){this.members=[]}add(e){nn(this.members,e),e.scheduleRender()}remove(e){if(te(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const o=this.members[s];if(o.isPresent!==!1){i=o;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ai(t,e,n){let i="";const s=t.x.translate/e.x,o=t.y.translate/e.y,r=(n==null?void 0:n.z)||0;if((s||o||r)&&(i=`translate3d(${s}px, ${o}px, ${r}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:c,rotateX:u,rotateY:h,skewX:d,skewY:f}=n;c&&(i+=`rotate(${c}deg) `),u&&(i+=`rotateX(${u}deg) `),h&&(i+=`rotateY(${h}deg) `),d&&(i+=`skewX(${d}deg) `),f&&(i+=`skewY(${f}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Al=(t,e)=>t.depth-e.depth;class Tl{constructor(){this.children=[],this.isDirty=!1}add(e){nn(this.children,e),this.isDirty=!0}remove(e){te(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Al),this.isDirty=!1,this.children.forEach(e)}}function wl(t,e){const n=tt.now(),i=({timestamp:s})=>{const o=s-n;o>=e&&(Z(i),t(o-e))};return j.read(i,!0),()=>Z(i)}function Pl(t){window.MotionDebug&&window.MotionDebug.record(t)}function Os(t){return t instanceof SVGElement&&t.tagName!=="svg"}function on(t,e,n){const i=k(t)?t:Ct(t);return i.start(en("",i,e,n)),i.animation}const de=["","X","Y","Z"],Sl={visibility:"hidden"},li=1e3;let Vl=0;const ot={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function fe(t,e,n,i){const{latestValues:s}=e;s[t]&&(n[t]=s[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Ws({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(r={},a=e==null?void 0:e()){this.id=Vl++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ot.totalNodes=ot.resolvedTargetDeltas=ot.recalculatedProjection=0,this.nodes.forEach(Rl),this.nodes.forEach(Bl),this.nodes.forEach(Ll),this.nodes.forEach(El),Pl(ot)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Tl)}addEventListener(r,a){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new sn),this.eventHandlers.get(r).add(a)}notifyListeners(r,...a){const l=this.eventHandlers.get(r);l&&l.notify(...a)}hasListeners(r){return this.eventHandlers.has(r)}mount(r,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Os(r),this.instance=r;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const d=()=>this.root.updateBlockedByResize=!1;t(r,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=wl(d,250),Ut.hasAnimatedSinceResize&&(Ut.hasAnimatedSinceResize=!1,this.nodes.forEach(ui))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:f,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||u.getDefaultTransition()||Ul,{onLayoutAnimationStart:y,onLayoutAnimationComplete:x}=u.getProps(),b=!this.targetLayout||!Is(this.targetLayout,m)||f,g=!d&&f;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||d&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,g);const w={...Ge(p,"layout"),onPlay:y,onComplete:x};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else d||ui(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Z(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Fl),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ci);return}this.isUpdating||this.nodes.forEach(kl),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(jl),this.nodes.forEach(Cl),this.nodes.forEach(Dl),this.clearAllSnapshots();const a=tt.now();B.delta=et(0,1e3/60,a-B.timestamp),B.timestamp=a,B.isProcessing=!0,ee.update.process(B),ee.preRender.process(B),ee.render.process(B),B.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,je.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Ml),this.sharedNodes.forEach(Il)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,j.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){j.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutCorrected=D(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:r,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const r=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Fs(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;r&&(a||rt(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return r&&(l=this.removeTransform(l)),Kl(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:r}=this.options;if(!r)return D();const a=r.measureViewportBox(),{scroll:l}=this.root;return l&&(_(a.x,l.offset.x),_(a.y,l.offset.y)),a}removeElementScroll(r){const a=D();N(a,r);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:h}=c;if(c!==this.root&&u&&h.layoutScroll){if(u.isRoot){N(a,r);const{scroll:d}=this.root;d&&(_(a.x,-d.offset.x),_(a.y,-d.offset.y))}_(a.x,u.offset.x),_(a.y,u.offset.y)}}return a}applyTransform(r,a=!1){const l=D();N(l,r);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&mt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),rt(u.latestValues)&&mt(l,u.latestValues)}return rt(this.latestValues)&&mt(l,this.latestValues),l}removeTransform(r){const a=D();N(a,r);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!rt(c.latestValues))continue;De(c.latestValues)&&c.updateSnapshot();const u=D(),h=c.measurePageBox();N(u,h),si(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return rt(this.latestValues)&&si(a,this.latestValues),a}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==B.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(r||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=B.timestamp,!this.targetDelta&&!this.relativeTarget){const f=this.getClosestProjectingParent();f&&f.layout&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=D(),this.relativeTargetOrigin=D(),Pt(this.relativeTargetOrigin,this.layout.layoutBox,f.layout.layoutBox),N(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=D(),this.targetWithTransforms=D()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Xa(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):N(this.target,this.layout.layoutBox),Es(this.target,this.targetDelta)):N(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const f=this.getClosestProjectingParent();f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=D(),this.relativeTargetOrigin=D(),Pt(this.relativeTargetOrigin,this.target,f.target),N(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ot.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||De(this.parent.latestValues)||Rs(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var r;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((r=this.parent)===null||r===void 0)&&r.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===B.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;N(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;_a(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=D());const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=pt(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=pt(),this.projectionDeltaWithTransform=pt());const p=this.projectionTransform;wt(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=ai(this.projectionDelta,this.treeScale),(this.projectionTransform!==p||this.treeScale.x!==d||this.treeScale.y!==f)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),ot.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),r){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(r,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=pt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=D(),f=l?l.source:void 0,m=this.layout?this.layout.source:void 0,p=f!==m,y=this.getStack(),x=!y||y.members.length<=1,b=!!(p&&!x&&this.options.crossfade===!0&&!this.path.some(Wl));this.animationProgress=0;let g;this.mixTargetDelta=w=>{const P=w/1e3;hi(h.x,r.x,P),hi(h.y,r.y,P),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pt(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ol(this.relativeTarget,this.relativeTargetOrigin,d,P),g&&vl(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=D()),N(g,this.relativeTarget)),p&&(this.animationValues=u,fl(u,c,this.latestValues,P,b,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Z(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=j.update(()=>{Ut.hasAnimatedSinceResize=!0,this.currentAnimation=on(0,li,{...r,onUpdate:a=>{this.mixTargetDelta(a),r.onUpdate&&r.onUpdate(a)},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(li),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=r;if(!(!a||!l||!c)){if(this!==r&&this.layout&&c&&Us(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||D();const h=W(this.layout.layoutBox.x);l.x.min=r.target.x.min,l.x.max=l.x.min+h;const d=W(this.layout.layoutBox.y);l.y.min=r.target.y.min,l.y.max=l.y.min+d}N(a,l),mt(a,u),wt(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(r,a){this.sharedNodes.has(r)||this.sharedNodes.set(r,new bl),this.sharedNodes.get(r).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){var r;const{layoutId:a}=this.options;return a?((r=this.getStack())===null||r===void 0?void 0:r.lead)||this:this}getPrevLead(){var r;const{layoutId:a}=this.options;return a?(r=this.getStack())===null||r===void 0?void 0:r.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),r&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetSkewAndRotation(){const{visualElement:r}=this.options;if(!r)return;let a=!1;const{latestValues:l}=r;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&fe("z",r,c,this.animationValues);for(let u=0;u<de.length;u++)fe(`rotate${de[u]}`,r,c,this.animationValues),fe(`skew${de[u]}`,r,c,this.animationValues);r.render();for(const u in c)r.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);r.scheduleRender()}getProjectionStyles(r){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Sl;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Ot(r==null?void 0:r.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=Ot(r==null?void 0:r.pointerEvents)||""),this.hasProjected&&!rt(this.latestValues)&&(p.transform=u?u({},""):"none",this.hasProjected=!1),p}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=ai(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:f,y:m}=this.projectionDelta;c.transformOrigin=`${f.origin*100}% ${m.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const p in Kt){if(d[p]===void 0)continue;const{correct:y,applyTo:x}=Kt[p],b=c.transform==="none"?d[p]:y(d[p],h);if(x){const g=x.length;for(let w=0;w<g;w++)c[x[w]]=b}else c[p]=b}return this.options.layoutId&&(c.pointerEvents=h===this?Ot(r==null?void 0:r.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>{var a;return(a=r.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(ci),this.root.sharedNodes.clear()}}}function Cl(t){t.updateLayout()}function Dl(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:o}=t.options,r=n.source!==t.layout.source;o==="size"?z(h=>{const d=r?n.measuredBox[h]:n.layoutBox[h],f=W(d);d.min=i[h].min,d.max=d.min+f}):Us(o,n.layoutBox,i)&&z(h=>{const d=r?n.measuredBox[h]:n.layoutBox[h],f=W(i[h]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+f)});const a=pt();wt(a,i,n.layoutBox);const l=pt();r?wt(l,t.applyTransform(s,!0),n.measuredBox):wt(l,i,n.layoutBox);const c=!Fs(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:f}=h;if(d&&f){const m=D();Pt(m,n.layoutBox,d.layoutBox);const p=D();Pt(p,i,f.layoutBox),Is(m,p)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=p,t.relativeTargetOrigin=m,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function Rl(t){ot.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function El(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Ml(t){t.clearSnapshot()}function ci(t){t.clearMeasurements()}function kl(t){t.isLayoutDirty=!1}function jl(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function ui(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Bl(t){t.resolveTargetDelta()}function Ll(t){t.calcProjection()}function Fl(t){t.resetSkewAndRotation()}function Il(t){t.removeLeadSnapshot()}function hi(t,e,n){t.translate=V(e.translate,0,n),t.scale=V(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function di(t,e,n,i){t.min=V(e.min,n.min,i),t.max=V(e.max,n.max,i)}function Ol(t,e,n,i){di(t.x,e.x,n.x,i),di(t.y,e.y,n.y,i)}function Wl(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Ul={duration:.45,ease:[.4,0,.1,1]},fi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),pi=fi("applewebkit/")&&!fi("chrome/")?Math.round:I;function mi(t){t.min=pi(t.min),t.max=pi(t.max)}function Kl(t){mi(t.x),mi(t.y)}function Us(t,e,n){return t==="position"||t==="preserve-aspect"&&!Ve(oi(e),oi(n),.2)}const Nl=Ws({attachResizeListener:(t,e)=>Y(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),pe={current:void 0},Ks=Ws({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!pe.current){const t=new Nl({});t.mount(window),t.setOptions({layoutScroll:!0}),pe.current=t}return pe.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),zl={pan:{Feature:al},drag:{Feature:ol,ProjectionNode:Ks,MeasureLayout:js}},Ee={current:null},Ns={current:!1};function Xl(){if(Ns.current=!0,!!Ai)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ee.current=t.matches;t.addListener(e),e()}else Ee.current=!1}function Gl(t,e,n){const{willChange:i}=e;for(const s in e){const o=e[s],r=n[s];if(k(o))t.addValue(s,o),Ht(i)&&i.add(s);else if(k(r))t.addValue(s,Ct(o,{owner:t})),Ht(i)&&i.remove(s);else if(r!==o)if(t.hasValue(s)){const a=t.getValue(s);a.liveStyle===!0?a.jump(o):a.hasAnimated||a.set(o)}else{const a=t.getStaticValue(s);t.addValue(s,Ct(a!==void 0?a:o,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Dt=new WeakMap,Hl=[...Zi,F,nt],Yl=t=>Hl.find(Qi(t)),zs=Object.keys(Vt),ql=zs.length,gi=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Ql=Le.length;class Zl{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:o,visualState:r},a={}){this.resolveKeyframes=(d,f,m,p)=>new this.KeyframeResolver(d,f,m,p,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ye,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>j.render(this.render,!1,!0);const{latestValues:l,renderState:c}=r;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Zt(n),this.isVariantNode=Vi(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const d in h){const f=h[d];l[d]!==void 0&&k(f)&&(f.set(l[d],!1),Ht(u)&&u.add(d))}}scrapeMotionValuesFromProps(e,n,i){return{}}mount(e){this.current=e,Dt.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Ns.current||Xl(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ee.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Dt.delete(this.current),this.projection&&this.projection.unmount(),Z(this.notifyUpdate),Z(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=ct.has(e),s=n.on("change",r=>{this.latestValues[e]=r,this.props.onUpdate&&j.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,s,o){let r,a;for(let l=0;l<ql;l++){const c=zs[l],{isEnabled:u,Feature:h,ProjectionNode:d,MeasureLayout:f}=Vt[c];d&&(r=d),u(n)&&(!this.features[c]&&h&&(this.features[c]=new h(this)),f&&(a=f))}if((this.type==="html"||this.type==="svg")&&!this.projection&&r){this.projection=new r(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:h,layoutScroll:d,layoutRoot:f}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||h&&dt(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:d,layoutRoot:f})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):D()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<gi.length;i++){const s=gi[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const o=e["on"+s];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=Gl(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Ql;i++){const s=Le[i],o=this.props[s];(St(o)||o===!1)&&(n[s]=o)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ct(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Yi(s)||Hi(s))?s=parseFloat(s):!Yl(s)&&nt.test(n)&&(s=ss(e,n)),this.setBaseTarget(e,k(s)?s.get():s)),k(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n,i;const{initial:s}=this.props,o=typeof s=="string"||typeof s=="object"?(i=Xe(this.props,s,(n=this.presenceContext)===null||n===void 0?void 0:n.custom))===null||i===void 0?void 0:i[e]:void 0;if(s&&o!==void 0)return o;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!k(r)?r:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new sn),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Xs extends Zl{constructor(){super(...arguments),this.KeyframeResolver=rs}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}}function Jl(t){return window.getComputedStyle(t)}class Gs extends Xs{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ct.has(n)){const i=Qe(n);return i&&i.default||0}else{const i=Jl(e),s=(Ei(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Ms(e,n)}build(e,n,i,s){We(e,n,i,s.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return ze(e,n,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;k(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,s){Li(e,n,i,s)}}class Hs extends Xs{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ct.has(n)){const i=Qe(n);return i&&i.default||0}return n=Fi.has(n)?n:ke(n),e.getAttribute(n)}measureInstanceViewportBox(){return D()}scrapeMotionValuesFromProps(e,n){return Oi(e,n,this)}build(e,n,i,s){Ke(e,n,i,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,i,s){Ii(e,n,i,s)}mount(e){this.isSVGTag=Ne(e.tagName),super.mount(e)}}const $l=(t,e)=>Fe(t)?new Hs(e,{enableHardwareAcceleration:!1}):new Gs(e,{enableHardwareAcceleration:!0}),_l={layout:{ProjectionNode:Ks,MeasureLayout:js}},tc={...Ua,...no,...zl,..._l},It=dr((t,e)=>zr(t,e,tc,$l));function Ys(t,e,n){var i;if(typeof t=="string"){let s=document;e&&(He(!!e.current),s=e.current),n?((i=n[t])!==null&&i!==void 0||(n[t]=s.querySelectorAll(t)),t=n[t]):t=s.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function ec(t,e){let n;const i=()=>{const{currentTime:s}=e,r=(s===null?0:s.value)/100;n!==r&&t(r),n=r};return j.update(i,!0),()=>Z(i)}const nc=os(()=>window.ScrollTimeline!==void 0);class qs{constructor(e){this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e){const n=this.animations.map(i=>{if(nc()&&i.attachTimeline)i.attachTimeline(e);else return i.pause(),ec(s=>{i.time=i.duration*s},e)});return()=>{n.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function ic(t){return typeof t=="object"&&!Array.isArray(t)}function sc(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Os(t)?new Hs(e,{enableHardwareAcceleration:!1}):new Gs(e,{enableHardwareAcceleration:!0});n.mount(t),Dt.set(t,n)}function rc(t,e=100){const n=Ze({keyframes:[0,e],...t}),i=Math.min(As(n),Pe);return{type:"keyframes",ease:s=>n.next(i*s).value/e,duration:H(i)}}function yi(t,e,n,i){var s;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(s=i.get(e))!==null&&s!==void 0?s:t}const oc=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function ac(t,e){return ds(t)?t[oc(0,t.length,e)]:t}function lc(t,e,n){for(let i=0;i<t.length;i++){const s=t[i];s.at>e&&s.at<n&&(te(t,s),i--)}}function cc(t,e,n,i,s,o){lc(t,s,o);for(let r=0;r<e.length;r++)t.push({value:e[r],at:V(s,o,i[r]),easing:ac(n,r)})}function uc(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const hc="easeInOut";function dc(t,{defaultTransition:e={},...n}={},i){const s=e.duration||.3,o=new Map,r=new Map,a={},l=new Map;let c=0,u=0,h=0;for(let d=0;d<t.length;d++){const f=t[d];if(typeof f=="string"){l.set(f,u);continue}else if(!Array.isArray(f)){l.set(f.name,yi(u,f.at,c,l));continue}let[m,p,y={}]=f;y.at!==void 0&&(u=yi(u,y.at,c,l));let x=0;const b=(g,w,P,C=0,O=0)=>{const T=fc(g),{delay:L=0,times:E=bs(T),type:J="keyframes",...jt}=w;let{ease:Bt=e.ease||"easeOut",duration:U}=w;const M=typeof L=="function"?L(C,O):L,K=T.length;if(K<=2&&J==="spring"){let ln=100;if(K===2&&gc(T)){const Zs=T[1]-T[0];ln=Math.abs(Zs)}const cn={...jt};U!==void 0&&(cn.duration=G(U));const un=rc(cn,ln);Bt=un.ease,U=un.duration}U??(U=s);const ut=u+M,ht=ut+U;E.length===1&&E[0]===0&&(E[1]=1);const an=E.length-T.length;an>0&&vs(E,an),T.length===1&&T.unshift(null),cc(P,T,Bt,E,ut,ht),x=Math.max(M+U,x),h=Math.max(ht,h)};if(k(m)){const g=xi(m,r);b(p,y,vi("default",g))}else{const g=Ys(m,i,a),w=g.length;for(let P=0;P<w;P++){p=p,y=y;const C=g[P],O=xi(C,r);for(const T in p)b(p[T],pc(y,T),vi(T,O),P,w)}}c=u,u+=x}return r.forEach((d,f)=>{for(const m in d){const p=d[m];p.sort(uc);const y=[],x=[],b=[];for(let w=0;w<p.length;w++){const{at:P,value:C,easing:O}=p[w];y.push(C),x.push(yt(0,h,P)),b.push(O||"easeOut")}x[0]!==0&&(x.unshift(0),y.unshift(y[0]),b.unshift(hc)),x[x.length-1]!==1&&(x.push(1),y.push(null)),o.has(f)||o.set(f,{keyframes:{},transition:{}});const g=o.get(f);g.keyframes[m]=y,g.transition[m]={...e,duration:h,ease:b,times:x,...n}}}),o}function xi(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function vi(t,e){return e[t]||(e[t]=[]),e[t]}function fc(t){return Array.isArray(t)?t:[t]}function pc(t,e){return t[e]?{...t,...t[e]}:{...t}}const mc=t=>typeof t=="number",gc=t=>t.every(mc);function Qs(t,e,n,i){const s=Ys(t,i),o=s.length,r=[];for(let a=0;a<o;a++){const l=s[a];Dt.has(l)||sc(l);const c=Dt.get(l),u={...n};typeof u.delay=="function"&&(u.delay=u.delay(a,o)),r.push(...rn(c,{...e,transition:u},{}))}return new qs(r)}const yc=t=>Array.isArray(t)&&Array.isArray(t[0]);function xc(t,e,n){const i=[];return dc(t,e,n).forEach(({keyframes:o,transition:r},a)=>{let l;k(a)?l=on(a,o.default,r.default):l=Qs(a,o,r),i.push(l)}),new qs(i)}const vc=t=>{function e(n,i,s){let o;return yc(n)?o=xc(n,i,t):ic(i)?o=Qs(n,i,s,t):o=on(n,i,s),t&&t.animations.push(o),o}return e};function bc(){const t=me(()=>({current:null,animations:[]})),e=me(()=>vc(t));return _s(()=>{t.animations.forEach(n=>n.stop())}),[t,e]}const Ac=R.div`
  position: absolute;
  display: block;
  width: 374px;
  /* height: 278px; */
  height: 100vh;
  bottom: 30px;
  right: 5%;
  z-index: -1;
  overflow: hidden;
`,Tc="/WaterTrackerFrontend/assets/bottle-146696e4.png",wc="/WaterTrackerFrontend/assets/splash-b94fa0f6.png",Pc="data:image/png;base64,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",Sc="data:image/png;base64,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",Vc=()=>{const[t,e]=bc();return S.useEffect(()=>{(async()=>{const i={duration:5,ease:"easeInOut"},s={bottle:{y:[-2e3,400,-20,15,0],rotateZ:[45,0,-45,15,-5,0]}};await e(t.current,s.bottle,i),e(t.current,{rotateZ:[0,5,0,-10,0],y:[0,-5,5,10,5,0,-5,-10,-4,0]},{duration:10,repeat:1/0,ease:"easeInOut"})})()}),v.jsx(v.Fragment,{children:v.jsxs(Ac,{children:[v.jsx(It.img,{initial:{y:-2e3,rotateZ:-90},ref:t,src:Tc,alt:"",height:"240px",width:"108px",style:{position:"absolute",bottom:"6px",right:"135.5px",zIndex:"3"}}),v.jsx(It.img,{initial:{opacity:0},animate:{opacity:[0,.5,1,0]},transition:{duration:2.5,delay:.3,ease:"easeInOut"},src:wc,width:"254.15px",height:"83.93px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"3"}}),v.jsx(It.img,{initial:{opacity:0},animate:{opacity:[0,.5,1,0]},transition:{duration:2.5,delay:.4,ease:"easeInOut"},src:Pc,width:"169.54px",height:"103.54px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"3"}}),v.jsx(It.img,{initial:{width:"100px"},animate:{width:["100px","0px","254px","90px"]},transition:{duration:5,delay:0,ease:"easeInOut"},src:Sc,width:"254px",style:{position:"absolute",bottom:"6px",right:"50%",transform:"translateX(50%)",zIndex:"2"}})]})})},Cc=R.h1`
  display: none;
`,Dc=R.h2`
  font-weight: 700;
  font-size: 28px;
  color: #2f2f2f;
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and(min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`,Rc=R.p`
  font-size: 24px;
  color: #2f2f2f;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and(min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Ec=R.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
  }
`,Mc=R.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,kc=R.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`,jc=R.h3`
  font-weight: 500;
  font-size: 18px;
  color: #2f2f2f;
  line-height: 20px;
  margin-bottom: 12px;
`,Bc=R.button`
  width: 100%;
  padding: 8px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: #407bff;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`,Lc=R.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and(min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,Fc=()=>{const t=tr(),e=[{text:"Habit drive",id:`${ne}#calendar`},{text:"View statistics",id:`${ne}#presentation-chart-bar`},{text:"Personal rate setting",id:`${ne}#wrench-screwdriver`}];function n(){t("/signup")}return v.jsxs(kc,{children:[v.jsx(Cc,{children:"Hidden"}),v.jsx(Dc,{children:"Water consumption tracker"}),v.jsx(Rc,{children:"Record daily water intake and track"}),v.jsx(jc,{children:"Tracker Benefits"}),v.jsx(Ec,{children:e.map(({id:i,text:s},o)=>v.jsxs(Mc,{children:[v.jsx(Lc,{children:v.jsx("use",{href:i})}),s]},o))}),v.jsx(Bc,{type:"button",onClick:n,children:"Try tracker"})]})},Ic=R.h2`
  font-weight: 600;
  font-size: 18px;
  color: #2f2f2f;
  margin-bottom: 12px;
`,Oc=R.li`
  font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #407bff;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    list-style-position: inside;
  }
`,Wc=R.div`
  display: block;

  margin: 0;
`,Uc=R.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 280px;

  padding: 24px 16px;
  background-color: #ecf2ff;
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`,Kc=R.ul`
  list-style-type: none;
  padding-left: 0;
`,Nc=()=>{const t=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return v.jsx(Wc,{children:v.jsxs(Uc,{children:[v.jsx(Ic,{children:"Why drink water"}),v.jsx(Kc,{children:t.map((e,n)=>v.jsx(Oc,{children:e},n))})]})})},zc=R.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    gap: 60px;
    align-items: stretch;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* flex-wrap: nowrap; */
    margin-top: 80px;
    gap: 81px;
  }
`,Xc=()=>v.jsxs(zc,{children:[v.jsx(Fc,{}),v.jsx(Nc,{})]}),Gc="/WaterTrackerFrontend/assets/bg_mob-45e67b01.png",Hc="/WaterTrackerFrontend/assets/bg_tab-1f797613.png",Yc="/WaterTrackerFrontend/assets/bg_img-f981bb04.png",qc=R.div`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;

  // мобіл
  background-image: url(${Gc});

  // табл
  @media screen and (min-width: 768px) {
    background-image: url(${Hc});
    min-height: 100vh;
  }

  // деск
  @media screen and (min-width: 1440px) {
    background-image: url(${Yc});
    min-height: 100vh;
  }
`,Qc=R.div`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  // padding-bottom: 40px;
  min-height: calc(100vh - 40px);

  // табл
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    // padding-bottom: 50px;
    min-height: calc(100vh - 50px);

    background-image: url(${hn});
  }

  // деск
  @media screen and (min-width: 1440px) {
    padding-top: 49px;
    // padding-bottom: 109px;

    background-image: url(${hn});
    min-height: calc(100vh - 109px);
  }
`,Zc=R.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  border-radius: 25px 25px 0 0;
  bottom: 0;
  right: 4px;
  padding: 12px;
  margin: 0;
  background-color: var(--secondary-sky-blue);
  border: 2px solid var(--primary-blue);
  color: var(--primary-blue);
  font-family: 'Roboto-Bold';
  font-size: 18px;
  text-align: center;
  z-index: 50;
  cursor: pointer;
  transition: height 0.3s ease-in-out;

  &:hover {
    height: 100px;
  }
  @media screen and (max-width: 767px) {
    border-radius: 25px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 80px;
    font-size: 20px;

    &:hover {
      height: 120px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 160px;
    height: 80px;
    font-size: 24px;
  }
`,Jc=R.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 288px;
  z-index: -5;

  .parallax > use {
    -webkit-animation: moveForever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
      infinite;
    animation: moveForever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  .parallax > use:nth-child(1) {
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
    -webkit-animation-duration: 7s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(2) {
    -webkit-animation-delay: -3s;
    animation-delay: -3s;
    -webkit-animation-duration: 10s;
    animation-duration: 15s;
  }

  @-webkit-keyframes moveForever {
    0% {
      -webkit-transform: translate3d(-90px, 0, 0);
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(85px, 0, 0);
      transform: translate3d(85px, 0, 0);
    }
  }

  @keyframes moveForever {
    0% {
      -webkit-transform: translate3d(-90px, 0, 0);
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(85px, 0, 0);
      transform: translate3d(85px, 0, 0);
    }
  }

  @media screen and (min-width: 768px) {
    height: 464px;
  }

  @media screen and (min-width: 1440px) {
    height: 288px;
  }
`,$c=()=>v.jsxs(v.Fragment,{children:[" ",v.jsxs(Jc,{viewBox:"0 24 150 28",children:[v.jsx("defs",{children:v.jsx("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})}),v.jsxs("g",{className:"parallax",children:[v.jsx("use",{href:"#gentle-wave",x:"50",y:"0",fill:"rgba(158, 187, 255,1)"}),v.jsx("use",{href:"#gentle-wave",x:"50",y:"5",fill:"rgba(236,242,255,0.5)"})]})]})]}),_c=R.div`
  position: fixed;
  display: block;
  width: 327.22px;
  height: 841.7px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  .bubble {
    position: absolute;
    border-radius: 50%;
  }

  .bubble:nth-child(1) {
    width: 32px;
    height: 32px;
    top: 782.34px;
    left: 260.96px;
    background: transparent;
    border: 2px solid rgba(158, 187, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(2) {
    width: 26px;
    height: 26px;
    top: 815.7px;
    left: 137.75px;
    gap: 0px;
    opacity: 0px;
    background: rgba(198, 215, 255, 1);
    border: none;
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(3) {
    width: 38px;
    height: 38px;
    top: 672.17px;
    left: 0;
    gap: 0px;
    opacity: 0.7px;
    background: transparent;
    border: 2px solid rgba(158, 187, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(4) {
    width: 24px;
    height: 24px;
    top: 572.1px;
    left: 286.63px;
    gap: 0px;
    opacity: 0px;
    background: rgba(198, 215, 255, 1);
    border: none;
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(5) {
    width: 32px;
    height: 32px;
    top: 388.14px;
    left: 36.79px;
    gap: 0px;
    opacity: 0.7px;
    background: rgba(198, 215, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(6) {
    width: 16px;
    height: 16px;
    top: 121.29px;
    left: 212.19px;
    gap: 0px;
    opacity: 0px;
    background: transparent;
    border: 2px solid rgba(236, 242, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(7) {
    width: 24px;
    height: 24px;
    top: 39.42px;
    left: 12.83px;
    gap: 0px;
    opacity: 0px;
    background: transparent;
    border: 2px solid rgba(236, 242, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(8) {
    width: 24px;
    height: 24px;
    top: 251.68px;
    left: 265.24px;
    gap: 0px;
    opacity: 0px;
    background: rgba(198, 215, 255, 1);
    border: none;
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(9) {
    width: 50px;
    height: 50px;
    left: 277.22px;
    gap: 0px;
    opacity: 0.7px;
    background: transparent;
    border: 2px solid rgba(198, 215, 255, 1);
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(10) {
    display: none;
    animation: moveUp 15s linear 0s infinite;
  }

  .bubble:nth-child(11) {
    display: none;
    animation: moveUp 15s linear 0s infinite;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 680px;

    .bubble:nth-child(1) {
      width: 44px;
      height: 44px;
      top: 231px;
      left: 740px;
      background: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(2) {
      width: 28px;
      height: 28px;
      top: 335px;
      left: 585px;
      background: rgba(198, 215, 255, 1);
      border: none;
    }

    .bubble:nth-child(3) {
      width: 50px;
      height: 50px;
      top: 90px;
      left: 563px;

      background: transparent;
      border: 2px solid rgba(198, 215, 255, 1);
    }

    .bubble:nth-child(4) {
      width: 28px;
      height: 28px;
      top: 216px;
      left: 350px;

      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }

    .bubble:nth-child(5) {
      width: 30px;
      height: 30px;
      top: 369px;
      left: 12px;
      background: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(6) {
      width: 18px;
      height: 18px;
      top: 235px;
      left: -6px;
      gap: 0px;
      opacity: 0px;
      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }

    .bubble:nth-child(7) {
      width: 28px;
      height: 28px;
      top: 539px;
      left: -20px;
      gap: 0px;
      opacity: 0px;
      background: transparent;
      border: 2px solid rgba(198, 215, 255, 1);
    }

    .bubble:nth-child(8) {
      display: none;
    }

    .bubble:nth-child(9) {
      display: none;
    }

    .bubble:nth-child(10) {
      display: none;
    }

    .bubble:nth-child(11) {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1404px;
    height: 582px;

    .bubble:nth-child(1) {
      width: 44px;
      height: 44px;
      top: 305px;
      left: 1360px;
      background-color: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(2) {
      width: 50px;
      height: 50px;
      top: 303px;
      left: 645px;
      background: transparent;
      border: 2px solid rgba(198, 215, 255, 1);
    }

    .bubble:nth-child(3) {
      width: 38px;
      height: 38px;
      top: 544px;
      background: transparent;
      border: 2px solid rgba(198, 215, 255, 1);
    }

    .bubble:nth-child(4) {
      width: 30px;
      height: 30px;
      top: 137px;
      left: 195px;
      background: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(5) {
      width: 38px;
      height: 38px;
      top: 83px;
      left: 695px;
      background: transparent;
      border: 2px solid rgba(158, 187, 255, 1);
    }

    .bubble:nth-child(6) {
      width: 28px;
      height: 28px;
      top: 494px;
      left: 1341px;
      background: rgba(198, 215, 255, 1);
      border: none;
    }

    .bubble:nth-child(7) {
      width: 28px;
      height: 28px;
      top: 507px;
      left: 712px;
      background: rgba(198, 215, 255, 1);
      border: none;
    }

    .bubble:nth-child(8) {
      width: 28px;
      height: 28px;
      top: 319px;
      left: 75px;
      background: rgba(198, 215, 255, 1);
      border: none;
    }

    .bubble:nth-child(9) {
      width: 18px;
      height: 18px;
      top: 119px;
      left: 48px;
      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }

    .bubble:nth-child(10) {
      width: 28px;
      height: 28px;
      top: 19px;
      left: 574px;
      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }

    .bubble:nth-child(11) {
      width: 28px;
      height: 28px;
      left: 1313px;
      background: transparent;
      border: 2px solid rgba(236, 242, 255, 1);
    }
  }

  @keyframes moveUp {
    from {
      transform: translateY(1000%);
    }
    to {
      transform: translateY(-1500%);
    }
  }
`,tu=()=>v.jsxs(_c,{children:[v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"}),v.jsx("span",{className:"bubble"})]}),ru=()=>{const[t,e]=S.useState(!0),n=()=>{e(!t)};return v.jsxs(v.Fragment,{children:[t?v.jsxs(v.Fragment,{children:[v.jsx(Vc,{}),v.jsx($c,{}),v.jsx(tu,{})]}):v.jsx(qc,{children:v.jsx(Qc,{})}),v.jsxs(er,{children:[v.jsx(Xc,{}),v.jsx(Zc,{onClick:n,children:t?"Turn off animation":"Turn on animation"})]})]})};export{ru as default};
