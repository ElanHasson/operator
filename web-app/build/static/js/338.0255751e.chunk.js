"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[338],{75578:function(e,t,n){var r=n(1413),a=n(72791),i=n(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function n(n){return(0,i.jsx)(a.Suspense,{fallback:t,children:(0,i.jsx)(e,(0,r.Z)({},n))})}return n}},57338:function(e,t,n){n.r(t);var r=n(93433),a=n(29439),i=n(1413),l=n(72791),s=n(75952),o=n(11135),c=n(25787),d=n(61889),u=n(27391),v=n(63466),m=n(26181),f=n.n(m),h=n(78243),p=n(23814),x=n(45248),Z=n(81207),b=n(42695),j=n(75578),y=n(74794),g=n(47974),k=n(80184),S=(0,j.Z)(l.lazy((function(){return n.e(644).then(n.bind(n,45644))}))),D=(0,j.Z)(l.lazy((function(){return n.e(297).then(n.bind(n,89297))})));t.default=(0,c.Z)((function(e){return(0,o.Z)((0,i.Z)((0,i.Z)((0,i.Z)({tableWrapper:{height:"calc(100vh - 275px)"},linkItem:{display:"default",color:e.palette.info.main,textDecoration:"none","&:hover":{textDecoration:"underline",color:"#000"}}},p.OR),p.qg),p.Bz))}))((function(e){var t=e.classes,n=(0,l.useState)([]),o=(0,a.Z)(n,2),c=o[0],m=o[1],p=(0,l.useState)(""),j=(0,a.Z)(p,2),F=j[0],C=j[1],z=(0,l.useState)([]),K=(0,a.Z)(z,2),P=K[0],V=K[1],A=(0,l.useState)(!0),N=(0,a.Z)(A,2),L=N[0],I=N[1],w=(0,l.useState)(!1),W=(0,a.Z)(w,2),E=W[0],M=W[1],O=(0,l.useState)(!1),R=(0,a.Z)(O,2),T=R[0],_=R[1],G=(0,l.useState)([]),q=(0,a.Z)(G,2),B=q[0],H=q[1],U=(0,l.useState)(!1),X=(0,a.Z)(U,2),J=X[0],Q=X[1],Y=(0,l.useState)([]),$=(0,a.Z)(Y,2),ee=$[0],te=$[1],ne=(0,l.useState)(!0),re=(0,a.Z)(ne,2),ae=re[0],ie=re[1];(0,l.useEffect)((function(){L&&Z.Z.invoke("GET","/api/v1/directpv/drives").then((function(e){var t=f()(e,"drives",[]);t||(t=[]),(t=t.map((function(e){var t=(0,i.Z)({},e);return t.joinName="".concat(t.node,":").concat(t.drive),t}))).sort((function(e,t){return e.drive>t.drive?1:e.drive<t.drive?-1:0})),m(t),I(!1),ie(!1)})).catch((function(e){I(!1),ie(!0)}))}),[L,ae]);var le=[{type:"format",onClick:function(e){te([e]),_(!1),M(!0)},sendOnlyId:!0}],se=c.filter((function(e){return e.drive.includes(F)}));return(0,k.jsxs)(l.Fragment,{children:[E&&(0,k.jsx)(S,{closeFormatModalAndRefresh:function(e,t){M(!1),e&&(t&&t.length>0&&(H(t),Q(!0)),I(!0),V([]))},deleteOpen:E,allDrives:T,drivesToFormat:ee}),J&&(0,k.jsx)(D,{errorsList:B,open:J,onCloseFormatErrorsList:function(){Q(!1)}}),(0,k.jsx)(g.Z,{label:"Local Drives"}),(0,k.jsxs)(y.Z,{children:[(0,k.jsxs)(d.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,k.jsx)(u.Z,{placeholder:"Search Drives",className:t.searchField,id:"search-resource",label:"",InputProps:{disableUnderline:!0,startAdornment:(0,k.jsx)(v.Z,{position:"start",children:(0,k.jsx)(s.W1M,{})})},onChange:function(e){C(e.target.value)},disabled:ae,variant:"standard"}),(0,k.jsx)(s.zxk,{id:"refresh-directpv-list",color:"primary","aria-label":"Refresh DirectPV List",onClick:function(){I(!0)},disabled:ae,icon:(0,k.jsx)(s.DuK,{})}),(0,k.jsx)(s.zxk,{id:"format-selected-drives",variant:"callAction",disabled:P.length<=0||ae,onClick:function(){P.length>0&&(te(P),_(!1),M(!0))},label:"Format Selected Drives",icon:(0,k.jsx)(h.Z,{})}),(0,k.jsx)(s.zxk,{id:"format-all-drives",variant:"callAction",label:"Format All Drives",onClick:function(){var e=c.map((function(e){return"".concat(e.node,":").concat(e.drive)}));_(!0),te(e),M(!0)},disabled:ae,icon:(0,k.jsx)(s.dtP,{})})]}),(0,k.jsx)(d.ZP,{item:!0,xs:12,children:ae&&!L?(0,k.jsx)(s.KfX,{title:"Leverage locally attached drives",iconComponent:(0,k.jsx)(s.idV,{}),help:(0,k.jsxs)(l.Fragment,{children:["We can automatically provision persistent volumes (PVs) on top locally attached drives on your Kubernetes nodes by leveraging DirectPV.",(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),"For more information"," ",(0,k.jsx)("a",{href:"https://github.com/minio/directpv",rel:"noopener",target:"_blank",className:t.linkItem,children:"Visit DirectPV Documentation"})]})}):(0,k.jsx)(b.Z,{itemActions:le,columns:[{label:"Drive",elementKey:"drive"},{label:"Capacity",elementKey:"capacity",renderFunction:x.ae},{label:"Allocated",elementKey:"allocated",renderFunction:x.ae},{label:"Volumes",elementKey:"volumes"},{label:"Node",elementKey:"node"},{label:"Status",elementKey:"status"}],onSelect:function(e){var t=e.target,n=t.value,a=t.checked,i=(0,r.Z)(P);return a?i.push(n):i=i.filter((function(e){return e!==n})),V(i),i},selectedItems:P,isLoading:L,records:se,customPaperHeight:t.tableWrapper,entityName:"Drives",idField:"joinName"})})]})]})}))},78243:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),i=n(80184),l=(0,a.default)((0,i.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"Group");t.Z=l}}]);
//# sourceMappingURL=338.0255751e.chunk.js.map