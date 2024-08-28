import{u as O,a as $,aa as _,d as e,e as n,h as a,C as D,T as r,B,f as E,af as G,am as V,R as q,M as Q,bN as l,W as Y,i as A,k as U,bI as X,r as u,aY as J,bP as Z,l as K,m as ee,cU as te,b as ae,D as ne,S as N,bV as M,aP as ie,Q as oe,bQ as se,p as re,q as le,v as ce,bS as de,cV as he,y as pe,cW as xe,cq as T,ch as F,Y as ue,cX as ge}from"./index-BlPrrQNT.js";import{u as me,c as S,h as k}from"./useTeamChar-BYj2huPZ.js";import{T as be}from"./TeamDelModal-BygVcph2.js";function De({teamId:t,onClick:c,bgt:d}){const i=O(t),{name:o,description:s,loadoutData:x}=i,g=$(),[m,p,v]=_();return e(A,{bgt:d,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[n(a,{sx:{display:"flex",flexDirection:"row"},children:[e(D,{onClick:()=>c(),sx:{p:1},children:n(r,{sx:{display:"flex",gap:1},variant:"h6",children:[e("span",{children:o})," ",s&&e(B,{title:e(r,{children:s}),children:e(E,{})})]})}),e(be,{teamId:t,show:m,onHide:v,onDel:function(){}}),e(G,{onClick:p,color:"error",children:e(V,{})})]}),e(a,{sx:{marginTop:"auto"},children:x.map((b,I)=>{var f;const w=b==null?void 0:b.teamCharId,h=w&&((f=g.teamChars.get(w))==null?void 0:f.key);return n(q.Fragment,{children:[e(Q,{}),h?e(D,{onClick:()=>c(h),children:e(fe,{characterKey:h,teamId:t,teamCharId:w})}):e(D,{onClick:()=>c(),sx:{height:120,position:"relative"},children:e(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120,backgroundColor:"neutral600.main"},children:e(a,{component:l?l:"img",src:Y.team[`team${I+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})]},I)})})]})})}const y={banner:0,bannerFilter:1,characterIcon:2,darkDRop:3,other:4};function fe({characterKey:t,teamId:c,teamCharId:d}){var H;const i=$(),o=U(t),{gender:s}=X(),{silly:x}=u.useContext(J),g=Z(t),{name:m}=me(d),p=i.teams.getLoadoutDatum(c,d),v=i.teams.getActiveBuildName(p),b=u.useMemo(()=>i.teams.getLoadoutWeapon(p),[p,i]),I=(()=>{const{buildType:C,buildTcId:P}=p;return C==="tc"&&P?K(i.buildTcs.get(P)):Object.values(i.teams.getLoadoutArtifacts(p)).filter(L=>L)})(),w=u.useMemo(()=>i.teams.getLoadoutArtifactData(p),[i,p]),h=ee(t,void 0,I,b),f=(H=h==null?void 0:h[t])==null?void 0:H.target,W=u.useMemo(()=>o&&{character:o},[o]),z=u.useMemo(()=>f&&h&&{data:f,teamData:h},[f,h]),j=te(t,"banner",s),R=ae(t);return!W||!z?null:e(ce.Provider,{value:W,children:e(ne.Provider,{value:z,children:e(u.Suspense,{fallback:e(N,{variant:"rectangular",width:"100%",height:300}),children:n(a,{className:j?void 0:`grad-${g.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${j})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:y.banner}},children:[e(a,{sx:C=>({position:"absolute",width:"100%",height:"100%",zIndex:y.bannerFilter,backdropFilter:"blur(3px)",background:`linear-gradient(to right, ${S(k(C.palette.neutral600.main),.8)}, ${S(k(C.palette.neutral600.main),.4)} 100% )`})}),e(a,{sx:C=>({position:"absolute",width:"100%",height:"100%",zIndex:y.darkDRop,background:`linear-gradient(to top, ${S(k(C.palette.neutral600.main),.9)}, rgba(0,0,0,0) 25% )`})}),n(a,{sx:{height:120,width:120,position:"absolute",zIndex:y.other},children:[o&&e(r,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black"},children:M(o.level,o.ascension)}),o&&n(r,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black"},children:["C",o.constellation]}),t.startsWith("Traveler")&&e(r,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black"},children:e(ie,{color:R,children:e(oe,{ele:R})})})]}),e(a,{component:l?l:"img",src:se(t,s,x),sx:{height:120,width:120,zIndex:y.characterIcon}}),n(a,{sx:{pr:.5,pl:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:y.other},children:[n(r,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(re,{}),e("span",{children:m})]}),n(r,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(le,{}),e("span",{children:v})]}),n(a,{sx:{display:"flex",mb:.5,gap:1},children:[e(Ce,{weapon:b}),e(ye,{artifactData:w})]})]})]})})})})}function Ce({weapon:t}){return n(A,{bgt:"neutral600",sx:{height:"100%",display:"flex",flexDirection:"horizontal",boxShadow:"0 0 10px rgba(0,0,0,0.4)"},children:[e(a,{component:l?l:"img",src:de(t.key,t.ascension>=2),maxWidth:"100%",maxHeight:"50px",sx:{mt:"auto"}}),n(a,{sx:{pr:1,display:"flex",flexDirection:"column",justifyContent:"space-evenly",color:"neutral200.main"},children:[e(r,{sx:{},children:M(t.level,t.ascension)}),he(t.key)&&n(r,{children:["R",t.refinement]})]})]})}function ye({artifactData:t}){const{setNum:c={},mains:d={}}=t,{t:i}=pe("statKey_gen"),o=Object.entries(c).filter(([,s])=>s===2||s===4);return n(A,{bgt:"neutral600",sx:{height:"100%",maxHeight:"50px",display:"flex",flexDirection:"horizontal",boxShadow:"0 0 10px rgba(0,0,0,0.4)",flexGrow:1},children:[e(a,{sx:{Width:"50px",minWidth:"50px",height:"50px",position:"relative"},children:o.length===2?e(Se,{sets:o.map(([s])=>s)}):o.length===1?e(ke,{set:o[0][0],num:o[0][1]}):!1}),e(a,{sx:{display:"flex",flexGrow:1,position:"relative",justifyContent:"space-around",alignItems:"center"},children:Object.entries(d).filter(([,s])=>s).map(([s,x])=>{const g=e(ue,{slotKey:s,iconProps:{sx:{fontSize:"inherit"}}}),m=e(ge,{statKey:x,iconProps:{sx:{fontSize:"inherit"}}});return e(B,{title:e(a,{children:n(u.Suspense,{fallback:e(N,{variant:"text"}),children:[n(r,{sx:{display:"flex",gap:1,alignItems:"center"},children:[g,e(xe,{slotKey:s})]}),n(r,{sx:{display:"flex",gap:1,alignItems:"center"},children:[m,i(x)]})]})}),children:n(r,{sx:{lineHeight:0},children:[g,m]})},s+x)})})]})}function Se({sets:t}){const c=t[0],d=t[1];return n(F,{children:[e(a,{component:l?l:"img",sx:{position:"absolute",top:0,left:0,Width:"50px",height:"50px",clipPath:"polygon(0 0, 0 100%, 100% 0)"},src:T(c,"flower")}),e(a,{component:l?l:"img",sx:{position:"absolute",top:0,left:0,Width:"50px",height:"50px",clipPath:"polygon(100% 100%, 0 100%, 100% 0)"},src:T(d,"flower")}),e(a,{className:"botright",sx:i=>({position:"absolute",bottom:0,right:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:S(k(i.palette.primary.main),.4),borderRadius:"100%"}),children:"2"}),e(a,{sx:i=>({position:"absolute",top:0,left:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:S(k(i.palette.primary.main),.4),borderRadius:"100%"}),children:"2"})]})}function ke({set:t,num:c}){return n(F,{children:[e(a,{sx:d=>({position:"absolute",bottom:0,right:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:S(k(d.palette.primary.main),.4),borderRadius:"100%"}),children:c}),e(a,{component:l?l:"img",src:T(t,"flower"),sx:{Width:"50px",height:"50px"}})]})}export{De as T};
