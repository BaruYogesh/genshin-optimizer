"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[587],{3992:function(e,t,n){var r=n(66934),a=n(57621),i=(0,r.ZP)(a.Z)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.Z=i},71310:function(e,t,n){var r=n(66934),a=n(57621),i=(0,r.ZP)(a.Z)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));t.Z=i},33890:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1413),a=n(29439),i=n(45987),s=n(1235),o=n(24518),c=n(47047),l=n(65117),u=n(72791),d=n(80184),h=["title","children","id"];function f(e){var t=e.title,n=e.children,f=e.id,p=void 0===f?"dropdownbtn":f,g=(0,i.Z)(e,h),v=(0,u.useState)(null),x=(0,a.Z)(v,2),m=x[0],j=x[1],Z=Boolean(m),y=(0,u.useCallback)((function(e){return j(e.currentTarget)}),[j]),b=(0,u.useCallback)((function(){return j(null)}),[j]);return(0,d.jsxs)(u.Suspense,{fallback:(0,d.jsx)(o.Z,(0,r.Z)((0,r.Z)({endIcon:(0,d.jsx)(s.Z,{})},g),{},{children:(0,d.jsx)(c.Z,{width:50})})),children:[(0,d.jsx)(o.Z,(0,r.Z)((0,r.Z)({},g),{},{id:p,"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":Z?"true":void 0,onClick:y,endIcon:(0,d.jsx)(s.Z,{}),children:t})),(0,d.jsx)(l.Z,{id:"basic-menu",anchorEl:m,open:Z,onClose:b,MenuListProps:{"aria-labelledby":p},onClick:b,children:(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(c.Z,{width:"100%",height:"1000"}),children:n})})]})}},25617:function(e,t,n){var r=(0,n(66934).ZP)("span",{name:"SqBadge",slot:"Root"})((function(e){var t,n,r=e.theme,a=e.color,i=void 0===a?"primary":a;return{display:"inline-block",padding:".25em .4em",fontSize:"75%",fontWeight:700,lineHeight:1,textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",borderRadius:".25em",backgroundColor:null===(t=r.palette[i])||void 0===t?void 0:t.main,color:null===(n=r.palette[i])||void 0===n?void 0:n.contrastText}}));t.Z=r},20323:function(e,t,n){function r(){return{tcMode:!1}}n.d(t,{c:function(){return r}})},916:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var r=n(39504),a=n(20890),i=n(94721),s=n(16129),o=n(22020),c=n(76899),l=n(3992),u=n(53174),d=n(54483),h=n(72456),f=n(61889),p=n(24518),g=n(72791),v=n(71310),x=n(56928),m=n(1413),j=n(29439),Z="Genshin Optimizer";var y=n(3608);function b(e){return{format:"GOOD",dbVersion:y.U,source:Z,version:1,characters:e.entries.filter((function(e){return(0,j.Z)(e,1)[0].startsWith("char_")})).map((function(e){var t=(0,j.Z)(e,2),n=(t[0],t[1]),r=JSON.parse(n);return r.buildSettings&&(r.buildSettings.builds=[],r.buildSettings.buildDate=0),r})),artifacts:e.entries.filter((function(e){return(0,j.Z)(e,1)[0].startsWith("artifact_")})).map((function(e){var t=(0,j.Z)(e,2),n=(t[0],t[1]);return JSON.parse(n)})),weapons:e.entries.filter((function(e){return(0,j.Z)(e,1)[0].startsWith("weapon_")})).map((function(e){var t=(0,j.Z)(e,2),n=(t[0],t[1]);return JSON.parse(n)})),states:e.entries.filter((function(e){return(0,j.Z)(e,1)[0].startsWith("state_")})).map((function(e){var t=(0,j.Z)(e,2),n=t[0],r=t[1];return(0,m.Z)((0,m.Z)({},JSON.parse(r)),{},{key:n.split("state_")[1]})}))}}var w=n(80184);function _(){var e=(0,g.useContext)(x.t),t=e.database,n=e.setDatabase,s=(0,o.$)(["settings"]).t,l=t._getCharKeys().length,m=t._getArts().length,j=t._getWeapons().length,Z=Boolean(l||m),y=(0,g.useCallback)((function(){t.storage.clear(),n(new x.M(t.storage))}),[t,n]),_=(0,g.useCallback)((function(){return navigator.clipboard.writeText(JSON.stringify(b(t.storage))).then((function(){return alert("Copied database to clipboard.")})).catch(console.error)}),[t]),C=(0,g.useCallback)((function(){var e=(new Date).toISOString().split(".")[0].replace("T","_").replaceAll(":","-"),n=JSON.stringify(b(t.storage)),r="go-data_".concat(e,".json"),a=document.createElement("a");a.download=r,a.href="data:".concat("application/json;charset=utf-8",",").concat(encodeURIComponent(n)),a.target="_blank",document.body.appendChild(a),a.click(),document.body.removeChild(a)}),[t]);return(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(r.Z,{sx:{py:1},children:(0,w.jsx)(a.Z,{variant:"subtitle1",children:(0,w.jsx)(c.c,{t:s,i18nKey:"downloadCard.databaseDownload"})})}),(0,w.jsx)(i.Z,{}),(0,w.jsx)(r.Z,{children:(0,w.jsxs)(f.ZP,{container:!0,mb:2,spacing:2,children:[(0,w.jsx)(f.ZP,{item:!0,xs:6,md:4,children:(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(c.c,{t:s,i18nKey:"count.chars"})," ",l]})}),(0,w.jsx)(f.ZP,{item:!0,xs:6,md:4,children:(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(c.c,{t:s,i18nKey:"count.arts"})," ",m]})}),(0,w.jsx)(f.ZP,{item:!0,xs:6,md:4,children:(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(c.c,{t:s,i18nKey:"count.weapons"})," ",j]})})]})}),(0,w.jsx)(i.Z,{}),(0,w.jsx)(r.Z,{sx:{py:1},children:(0,w.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,w.jsx)(f.ZP,{item:!0,children:(0,w.jsx)(p.Z,{disabled:!Z,onClick:C,startIcon:(0,w.jsx)(h.Z,{}),children:(0,w.jsx)(c.c,{t:s,i18nKey:"downloadCard.button.download"})})}),(0,w.jsx)(f.ZP,{item:!0,flexGrow:1,children:(0,w.jsx)(p.Z,{disabled:!Z,color:"info",onClick:_,startIcon:(0,w.jsx)(d.G,{icon:u.Yjj}),children:(0,w.jsx)(c.c,{t:s,i18nKey:"downloadCard.button.copy"})})}),(0,w.jsx)(f.ZP,{item:!0,children:(0,w.jsx)(p.Z,{disabled:!Z,color:"error",onClick:y,startIcon:(0,w.jsx)(d.G,{icon:u.I7k}),children:(0,w.jsx)(c.c,{t:s,i18nKey:"downloadCard.button.delete"})})})]})})]})}var C=n(23786),S=n(33890),k=n(25617),O=n(91449);function P(){var e=(0,o.$)().t;return(0,w.jsxs)(v.Z,{children:[(0,w.jsxs)(r.Z,{sx:{py:1},children:[e("settings:languageCard.selectLanguage")," ",(0,w.jsx)(k.Z,{color:"warning",children:e("ui:underConstruction")})]}),(0,w.jsx)(i.Z,{}),(0,w.jsx)(r.Z,{children:(0,w.jsx)(W,{})})]})}var D={chs:"\u4e2d\u6587 \u6b63\u4f53\u5b57",cht:"\u4e2d\u6587 \u7e41\u9ad4\u5b57",de:"Deutsch",en:"English",es:"espa\xf1ol",fr:"fran\xe7ais",id:"Bahasa Indonesia",ja:"\u65e5\u672c\u8a9e",ko:"\ud55c\uad6d\uc5b4",pt:"Portugu\xeas",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",vi:"Ti\u1ebfng Vi\u1ec7t"};function W(){var e=(0,o.$)(["ui","settings"]),t=e.t,n=e.i18n,r=function(e){return function(){return n.changeLanguage(e)}},a=n.languages[0];return(0,w.jsx)(S.Z,{fullWidth:!0,title:t("settings:languageCard.languageFormat",{language:t("languages:".concat(a))}),children:O.C.map((function(e){return(0,w.jsxs)(C.Z,{selected:a===e,disabled:a===e,onClick:r(e),children:[(0,w.jsx)(c.c,{i18nKey:"languages:".concat(e)}),e!==a?" (".concat(D[e],")"):""]},e)}))})}var K=n(72247),M=n(9912),B=n(20323),F=n(17278);function G(){var e=(0,F.Z)("GlobalSettings",B.c),t=(0,j.Z)(e,2),n=t[0].tcMode,i=t[1];return(0,w.jsx)(v.Z,{children:(0,w.jsxs)(r.Z,{children:[(0,w.jsx)(a.Z,{gutterBottom:!0,color:"warning.main",children:"Enabling this toggle will show some features that might be too complex for the average user."}),(0,w.jsx)(p.Z,{fullWidth:!0,onClick:function(){return i({tcMode:!n})},color:n?"success":"primary",startIcon:n?(0,w.jsx)(K.Z,{}):(0,w.jsx)(M.Z,{}),children:"Theorycrafting Mode"})]})})}var T=n(15861),E=n(87757),H=n.n(E),z=(0,n(76189).Z)((0,w.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload"),I=n(66934),A=n(68870),N=n(45987),R=n(23741),J=n(52164),V=n(93433),$=n(37762);var L=n(45748),U=["key"];function Y(e,t){if(1===e.version)return function(e,t){var n=function(e){var t=e.source,n=new R.N,r={type:"GOOD",storage:n,source:t};if(e.artifacts){r.artifacts={total:0,invalid:[],new:[],updated:[],unchanged:[],removed:[]};var a=r.artifacts;a.total=e.artifacts.length,e.artifacts.forEach((function(e,t){(0,L.R$)(e)?n.set("artifact_".concat(t),e):a.invalid.push(e)}))}if(e.weapons){r.weapons={total:0,invalid:[],new:[],updated:[],unchanged:[],removed:[]};var i=r.weapons;i.total=e.weapons.length,e.weapons.forEach((function(e,t){var r=(0,L.S0)(e);return r?n.set("weapon_".concat(t),e):i.invalid.push(e),r?[r]:[]})),r.weapons=i}if(e.characters){r.characters={total:0,invalid:[],new:[],updated:[],unchanged:[],removed:[]};var s=r.characters;s.total=e.characters.length,e.characters.forEach((function(e){(0,L.J0)(e)||s.invalid.push(e),e.buildSettings&&(e.buildSettings.builds=[],e.buildSettings.buildDate=0),n.set("char_".concat(e.key),e)}))}if(t===Z){var o=e,c=o.dbVersion,l=o.states;if(c<8)return;(0,J.W)(n,c),l&&l.forEach((function(e){var t=e,r=t.key,a=(0,N.Z)(t,U);r&&n.set("state_".concat(r),a)}))}else(0,J.W)(n,8);return r}(e);if(!n)return;return(0,y.T)(n.storage),function(e,t){var n=e.artifacts,r=e.weapons,a=e.characters,i=e.storage;if(n?function(){var e,r=i.entries.filter((function(e){return(0,j.Z)(e,1)[0].startsWith("artifact_")})).map((function(e){var t=(0,j.Z)(e,2),n=t[0],r=t[1];return[n,JSON.parse(r)]})),a=new Set(t._getArts().map((function(e){return e.id}))),s=r.some((function(e){return e[1].location})),o=(0,$.Z)(r);try{for(o.s();!(e=o.n()).done;){var c,l=(0,j.Z)(e.value,2),u=l[0],d=l[1],h=t.findDuplicates(d),f=h.duplicated,p=h.upgraded;f=f.filter((function(e){return a.has(e.id)})),p=p.filter((function(e){return a.has(e.id)}));var g=null!==(c=f[0])&&void 0!==c?c:p[0];if(g){for(var v in a.delete(g.id),g)v in d||"location"===v||(d[v]=g[v]);s||(d.location=g.location)}f.length?n.unchanged.push(d):p.length?n.updated.push(d):n.new.push(d),i.set(u,d)}}catch(x){o.e(x)}finally{o.f()}n.removed=(0,V.Z)(a).map((function(e){return t._getArt(e)}))}():t._getArts().forEach((function(e,t){return i.set("artifact_".concat(t),e)})),r?function(){var e,n=i.entries.filter((function(e){return(0,j.Z)(e,1)[0].startsWith("weapon_")})).map((function(e){var t=(0,j.Z)(e,2),n=t[0],r=t[1];return[n,JSON.parse(r)]})),a=new Set(t._getWeapons().map((function(e){return e.id}))),s=n.some((function(e){return e[1].location})),o=(0,$.Z)(n);try{for(o.s();!(e=o.n()).done;){var c,l=(0,j.Z)(e.value,2),u=l[0],d=l[1],h=t.findDuplicateWeapons(d),f=h.duplicated,p=h.upgraded;f=f.filter((function(e){return a.has(e.id)})),p=p.filter((function(e){return a.has(e.id)}));var g=null!==(c=f[0])&&void 0!==c?c:p[0];if(g){for(var v in a.delete(g.id),g)v in d||"location"===v||(d[v]=g[v]);s||(d.location=g.location)}f.length?r.unchanged.push(d):p.length?r.updated.push(d):r.new.push(d),i.set(u,d)}}catch(x){o.e(x)}finally{o.f()}r.removed=(0,V.Z)(a).map((function(e){return t._getWeapon(e)}))}():t._getWeapons().forEach((function(e,t){return i.set("weapon_".concat(t),e)})),a){var s=i.entries.filter((function(e){return(0,j.Z)(e,1)[0].startsWith("char_")})).map((function(e){var t=(0,j.Z)(e,2),n=t[0],r=t[1];return[n.slice(5),JSON.parse(r)]})),o=new Set(s.map((function(e){return(0,j.Z)(e,1)[0]}))),c=new Set(t._getCharKeys());a.updated=[],a.new=[];var l,u=s.some((function(e){var t=(0,j.Z)(e,2);return t[0],t[1].team.some((function(e){return e}))})),d=(0,$.Z)(s);try{for(d.s();!(l=d.n()).done;){var h=(0,j.Z)(l.value,2),f=h[0],p=h[1],g=t._getChar(f);if(g){for(var v in a.updated.push(p),g)v in p||(p[v]=g[v]);u||(p.team=g.team),i.set("char_".concat(f),p)}else a.new.push(p)}}catch(b){d.e(b)}finally{d.f()}a.removed=(0,V.Z)(c).filter((function(e){var t=(0,j.Z)(e,1)[0];return o.has(t)})).map((function(e){return t._getChar(e)})),a.unchanged=[]}else t._getCharKeys().forEach((function(e){return i.set("char_".concat(e),t._getChar(e))}));var x,m=new Set(i.keys),Z=(0,$.Z)(t.storage.keys);try{for(Z.s();!(x=Z.n()).done;){var y=x.value;m.has(y)||y.startsWith("artifact_")||y.startsWith("weapon_")||y.startsWith("char_")||i.setString(y,t.storage.getString(y))}}catch(b){Z.e(b)}finally{Z.f()}}(n,t),n}(e,t)}var q={1:function(e){var t=[];for(var n in e)if(n in Q){var r,a=(0,$.Z)(e[n]);try{for(a.s();!(r=a.n()).done;){var i=r.value,s=i.setName,o=i.star,c=i.level,l=i.position,u=i.mainTag,d={setKey:X[s],rarity:o,level:c,slotKey:Q[l],mainStatKey:ee[u.name],substats:i.normalTags.map((function(e){var t=e.name,n=e.value,r=te[t];return{key:r,value:null!==r&&void 0!==r&&r.endsWith("_")?Math.round(1e3*n)/10:n}}))};t.push(d)}}catch(h){a.e(h)}finally{a.f()}}return{artifacts:t}}};var Q={flower:"flower",feather:"plume",sand:"sands",cup:"goblet",head:"circlet"},X={adventurer:"Adventurer",archaicPetra:"ArchaicPetra",berserker:"Berserker",blizzardStrayer:"BlizzardStrayer",bloodstainedChivalry:"BloodstainedChivalry",braveHeart:"BraveHeart",crimsonWitch:"CrimsonWitchOfFlames",defenderWill:"DefendersWill",gambler:"Gambler",gladiatorFinale:"GladiatorsFinale",heartOfDepth:"HeartOfDepth",instructor:"Instructor",lavaWalker:"Lavawalker",luckyDog:"LuckyDog",maidenBeloved:"MaidenBeloved",martialArtist:"MartialArtist",noblesseOblige:"NoblesseOblige",prayersForDestiny:"PrayersForDestiny",prayersForIllumination:"PrayersForIllumination",prayersForWisdom:"PrayersForWisdom",prayersToSpringtime:"PrayersToSpringtime",resolutionOfSojourner:"ResolutionOfSojourner",retracingBolide:"RetracingBolide",scholar:"Scholar",exile:"TheExile",thunderingFury:"ThunderingFury",thunderSmoother:"Thundersoother",tinyMiracle:"TinyMiracle",travelingDoctor:"TravelingDoctor",viridescentVenerer:"ViridescentVenerer",wandererTroupe:"WanderersTroupe",tenacityOfTheMillelith:"TenacityOfTheMillelith",paleFlame:"PaleFlame",emblemOfSeveredFate:"EmblemOfSeveredFate",shimenawaReminiscence:"ShimenawasReminiscence",huskOfOpulentDreams:"HuskOfOpulentDreams",oceanHuedClam:"OceanHuedClam",EchoesOfAnOffering:"EchoesOfAnOffering",VermillionHereafter:"VermillionHereafter"},ee={cureEffect:"heal_",lifeStatic:"hp",lifePercentage:"hp_",attackStatic:"atk",attackPercentage:"atk_",defendPercentage:"def_",critical:"critRate_",criticalDamage:"critDMG_",elementalMastery:"eleMas",recharge:"enerRech_",thunderBonus:"electro_dmg_",fireBonus:"pyro_dmg_",waterBonus:"hydro_dmg_",iceBonus:"cryo_dmg_",windBonus:"anemo_dmg_",rockBonus:"geo_dmg_",physicalBonus:"physical_dmg_"},te={lifeStatic:"hp",lifePercentage:"hp_",attackStatic:"atk",attackPercentage:"atk_",defendStatic:"def",defendPercentage:"def_",critical:"critRate_",criticalDamage:"critDMG_",elementalMastery:"eleMas",recharge:"enerRech_"},ne=(0,I.ZP)("input")({display:"none"});function re(){var e,t=(0,g.useContext)(x.t).database,n=(0,o.$)("settings").t,i=(0,g.useState)(""),s=(0,j.Z)(i,2),h=s[0],m=s[1],Z=(0,g.useState)(""),y=(0,j.Z)(Z,2),b=y[0],_=y[1],C=(0,g.useState)(""),S=(0,j.Z)(C,2),k=S[0],O=S[1],P=(0,g.useMemo)((function(){if(h){var e;try{if("object"!==typeof(e=JSON.parse(h)))return void O("uploadCard.error.jsonParse")}catch(a){return void O("uploadCard.error.jsonParse")}if("1"===e.version&&["flower","feather","sand","cup","head"].some((function(t){return Object.keys(e).includes(t)}))){var n=function(e,t){var n,r,a=null!==(n=e.version)&&void 0!==n?n:"1",i=null===(r=q[a])||void 0===r?void 0:r.call(q,e);if(i)return Y({format:"GOOD",source:"mona-uranai",version:1,artifacts:i.artifacts},t)}(e,t);return n||void O("uploadCard.error.monaInvalid")}if("GOOD"===e.format){var r=Y(e,t);return r||void O("uploadCard.error.goInvalid")}O("uploadCard.error.unknown")}}),[h,t]),D=function(){var e=(0,T.Z)(H().mark((function e(t){var n,r;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.files[0],t.target.value=null,n&&_(n.name),(r=new FileReader).onload=function(){return m(r.result)},r.readAsText(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(r.Z,{sx:{py:1},children:(0,w.jsx)(c.c,{t:n,i18nKey:"settings:uploadCard.title"})}),(0,w.jsxs)(r.Z,{children:[(0,w.jsxs)(f.ZP,{container:!0,spacing:2,sx:{mb:1},children:[(0,w.jsx)(f.ZP,{item:!0,children:(0,w.jsxs)("label",{htmlFor:"icon-button-file",children:[(0,w.jsx)(ne,{accept:".json",id:"icon-button-file",type:"file",onChange:D}),(0,w.jsx)(p.Z,{component:"span",startIcon:(0,w.jsx)(z,{}),children:"Upload"})]})}),(0,w.jsx)(f.ZP,{item:!0,flexGrow:1,children:(0,w.jsx)(l.Z,{sx:{px:2,py:1},children:(0,w.jsx)(a.Z,{children:b?(0,w.jsxs)("span",{children:[(0,w.jsx)(d.G,{icon:u.w49})," ",b]}):(0,w.jsxs)("span",{children:[(0,w.jsx)(d.G,{icon:u.acZ})," ",(0,w.jsx)(c.c,{t:n,i18nKey:"settings:uploadCard.hint"})]})})})})]}),(0,w.jsx)(a.Z,{gutterBottom:!0,variant:"caption",children:(0,w.jsx)(c.c,{t:n,i18nKey:"settings:uploadCard.hintPaste"})}),(0,w.jsx)(A.Z,{component:"textarea",sx:{width:"100%",fontFamily:"monospace",minHeight:"10em",mb:2,resize:"vertical"},value:h,onChange:function(e){return m(e.target.value)}}),null!==(e=ae(P))&&void 0!==e?e:k]}),ie(P,(function(){m(""),_("")}))]})}function ae(e){if("GOOD"===(null===e||void 0===e?void 0:e.type))return(0,w.jsx)(se,{data:e})}function ie(e,t){if("GOOD"===(null===e||void 0===e?void 0:e.type))return(0,w.jsx)(ce,{data:e,reset:t})}function se(e){var t=e.data,n=t.source,s=t.artifacts,u=t.characters,d=t.weapons,h=(e.data,(0,o.$)("settings").t);return(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(r.Z,{sx:{py:1},children:(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(c.c,{t:h,i18nKey:"uploadCard.dbSource"}),(0,w.jsxs)("strong",{children:[" ",n]})]})}),(0,w.jsx)(i.Z,{}),(0,w.jsx)(r.Z,{children:(0,w.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,w.jsx)(f.ZP,{item:!0,flexGrow:1,children:(0,w.jsx)(oe,{result:s,type:"arts"})}),(0,w.jsx)(f.ZP,{item:!0,flexGrow:1,children:(0,w.jsx)(oe,{result:d,type:"weapons"})}),(0,w.jsx)(f.ZP,{item:!0,flexGrow:1,children:(0,w.jsx)(oe,{result:u,type:"chars"})})]})})]})}function oe(e){var t,n,s=e.result,l=e.type,u=(0,o.$)("settings").t;return s?(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(r.Z,{sx:{py:1},children:(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(c.c,{t:u,i18nKey:"count.".concat(l)})," ",null!==(t=s.total)&&void 0!==t?t:0]})}),(0,w.jsx)(i.Z,{}),(0,w.jsxs)(r.Z,{children:[(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(c.c,{t:u,i18nKey:"count.new"})," ",(0,w.jsx)("strong",{children:s.new.length})," / ",s.total]}),(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(c.c,{t:u,i18nKey:"count.updated"})," ",(0,w.jsx)("strong",{children:s.updated.length})," / ",s.total]}),(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(c.c,{t:u,i18nKey:"count.unchanged"})," ",(0,w.jsx)("strong",{children:s.unchanged.length})," / ",s.total]}),(0,w.jsxs)(a.Z,{color:"warning.main",children:[(0,w.jsx)(c.c,{t:u,i18nKey:"count.removed"})," ",(0,w.jsx)("strong",{children:s.removed.length})]}),!(null===(n=s.invalid)||void 0===n||!n.length)&&(0,w.jsxs)("div",{children:[(0,w.jsxs)(a.Z,{color:"error.main",children:[(0,w.jsx)(c.c,{t:u,i18nKey:"count.invalid"})," ",(0,w.jsx)("strong",{children:s.invalid.length})," / ",s.total]}),(0,w.jsx)(A.Z,{component:"textarea",sx:{width:"100%",fontFamily:"monospace",minHeight:"10em",resize:"vertical"},value:JSON.stringify(s.invalid,void 0,2),disabled:!0})]})]})]}):null}function ce(e){var t,n,a,s=e.data.storage,l=e.data,h=e.reset,f=(0,g.useContext)(x.t),v=f.database,m=f.setDatabase,j=(0,o.$)("settings").t,Z=(null===(t=l.characters)||void 0===t?void 0:t.total)||(null===(n=l.artifacts)||void 0===n?void 0:n.total)||(null===(a=l.weapons)||void 0===a?void 0:a.total);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i.Z,{}),(0,w.jsx)(r.Z,{sx:{py:1},children:(0,w.jsx)(p.Z,{color:Z?"success":"error",disabled:!Z,onClick:function(){v.storage.clear(),v.storage.copyFrom(s),m(new x.M(v.storage,!0)),h()},startIcon:(0,w.jsx)(d.G,{icon:u.Y9i}),children:(0,w.jsx)(c.c,{t:j,i18nKey:"settings:uploadCard.replaceDatabase"})})})]})}function le(){var e=(0,o.$)(["settings"]).t;return s.ZP.pageview("/setting"),(0,w.jsxs)(l.Z,{sx:{my:1},children:[(0,w.jsx)(r.Z,{sx:{py:1},children:(0,w.jsx)(a.Z,{variant:"subtitle1",children:(0,w.jsx)(c.c,{t:e,i18nKey:"title"})})}),(0,w.jsx)(i.Z,{}),(0,w.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,w.jsx)(P,{}),(0,w.jsx)(_,{}),(0,w.jsx)(re,{}),(0,w.jsx)(G,{})]})]})}},17278:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(29439),a=n(72791),i=n(56928);function s(e,t){var n=(0,a.useContext)(i.t).database,s=(0,a.useState)(n._getState(e,t)),o=(0,r.Z)(s,2),c=o[0],l=o[1];return(0,a.useEffect)((function(){return l(n._getState(e,t))}),[n,e,t]),(0,a.useEffect)((function(){return e?n.followState(e,l):void 0}),[e,l,n]),[c,(0,a.useCallback)((function(t){return n.updateState(e,t)}),[n,e])]}},72247:function(e,t,n){var r=n(76189),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox")},9912:function(e,t,n){var r=n(76189),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank")},72456:function(e,t,n){var r=n(76189),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")},15861:function(e,t,n){function r(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function o(e){r(s,a,i,o,c,"next",e)}function c(e){r(s,a,i,o,c,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=587.3347a863.chunk.js.map