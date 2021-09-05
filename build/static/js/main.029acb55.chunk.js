(this["webpackJsonpmelon-reservations"]=this["webpackJsonpmelon-reservations"]||[]).push([[0],{223:function(e,t,n){},224:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(27),c=n.n(i),o=n(101),s=(n(223),n(8)),j=(n(224),n(25)),l=n(353),u=n(354),h=n(339),d=n(250),b=n(95),m=n(89),O=n(169),f=n(336),v=n(182),x=n.n(v),p=n(181),g=n.n(p),w=n(340),k=n(126),y=n(1);function C(e){var t=e.reservations,n=e.setReservations;var r=[{field:"reservationTime",headerName:"Reservation Info",width:400},{field:"cancelReservation",headerName:"Cancel Reservation",width:400,renderCell:function(e){var t=e.id;return Object(y.jsx)(b.a,{variant:"contained",color:"primary",size:"small",onClick:function(e){return function(e){n((function(t){return t.filter((function(t){return t.reservation_id!==e}))})),fetch("/api/reservations/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}(t)},children:"Cancel Reservation"})}}],a=t.map((function(e){return{id:e.reservation_id,reservationTime:new Date(e.start_time).toLocaleString(),cancelReservation:e.reservation_id}}));return Object(y.jsx)("div",{style:{width:"100%"},children:Object(y.jsx)(k.a,{autoHeight:!0,rows:a,columns:r,isRowSelectable:!1})})}function S(e){var t=e.username,n=Object(j.f)(),a=Object(r.useState)([]),i=Object(s.a)(a,2),c=i[0],o=i[1];return t||n.push("/login"),Object(r.useEffect)((function(){fetch("/api/user/".concat(t,"/reservations/")).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[t]),Object(y.jsx)(w.a,{component:"main",maxWidth:"md",children:0===c.length?Object(y.jsx)(d.a,{component:"h1",variant:"h5",children:"No reservations yet. Make one!"}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(d.a,{component:"h1",variant:"h5",children:"Your reservations:"}),Object(y.jsx)(C,{reservations:c,setReservations:o})]})})}var N=n(157);function T(e){var t=Object(j.f)(),n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],c=a[1];return Object(y.jsx)(w.a,{component:"main",maxWidth:"xs",children:Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(y.jsxs)("form",{noValidate:!0,children:[Object(y.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,onChange:function(e){return c(e.target.value)},value:i}),Object(y.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(n){n.preventDefault(),e.setUsername(i),t.push("/")},children:"Log In"})]})]})})}var R=n(149),D=n(72),E=n(342),I=n(357),B=n(352),W=n(359),_=n(367),L=n(356),M=n(341),P=n(355);function J(e){var t=e.reservations,n=e.username,r=e.setError,a=Object(j.f)();var i=[{field:"reservationInfo",headerName:"Reservation Info",width:400},{field:"schedule",headerName:"Make Reservation",width:400,renderCell:function(e){return Object(y.jsx)(b.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return function(e){var t=JSON.stringify({startTime:e,username:n});fetch("/api/reservations/book",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){e.success?a.push("/current_reservations"):r(e.error)})).catch((function(e){r(e)}))}(e.value)},children:"Make Reservation"})}}],c=t.map((function(e){return{id:Number(e),reservationInfo:e.toLocaleString(),schedule:e}}));return Object(y.jsx)("div",{style:{width:"100%"},children:Object(y.jsx)(k.a,{autoHeight:!0,rows:c,columns:i,isRowSelectable:!1})})}function F(e){var t=e.username,n=Object(r.useState)(new Date),a=Object(s.a)(n,2),i=a[0],c=a[1],o=Object(r.useState)(new Date),l=Object(s.a)(o,2),u=l[0],h=l[1],d=Object(r.useState)(null),m=Object(s.a)(d,2),f=m[0],v=m[1],x=Object(r.useState)([]),p=Object(s.a)(x,2),g=p[0],k=p[1];var C=Object(O.a)((function(e){return{label:{justifyContent:"left"},submitBtn:{marginBottom:"10px",backgroundColor:"#00745d",color:"white","&:hover":{backgroundColor:"#015041",borderColor:"#54ffde",boxShadow:"none"}}}}))(),S=Object(j.f)();return t||S.push("/login"),Object(y.jsx)(w.a,{maxWidth:"lg",children:Object(y.jsxs)(M.b,{dateAdapter:L.a,children:[Object(y.jsxs)(E.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:4,children:[Object(y.jsx)(E.a,{item:!0,className:C.label,htmlFor:"date-picker-dialog",children:"Pick a date for your reservation:"}),Object(y.jsxs)(E.a,{container:!0,direction:"row",spacing:3,justifyContent:"center",children:[Object(y.jsx)(E.a,{item:!0,children:Object(y.jsx)(P.a,{renderInput:function(e){return Object(y.jsx)(I.a,Object(R.a)({},e))},label:"DateTimePicker",value:i,onChange:function(e){return c(e)},minDate:Object(D.a)(new Date)})}),Object(y.jsx)(E.a,{item:!0,children:Object(y.jsx)(P.a,{renderInput:function(e){return Object(y.jsx)(I.a,Object(R.a)({},e))},label:"DateTimePicker",value:u,onChange:function(e){return h(e)},minDate:Object(D.a)(new Date)})})]}),Object(y.jsx)(E.a,{item:!0,children:Object(y.jsx)(b.a,{variant:"contained",className:C.submitBtn,onClick:function(){v(null);var e=JSON.stringify({startTime:i,endTime:u});fetch("/api/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){k(e.map((function(e){return new Date(e)})))})).catch((function(e){console.error("Error:",e)}))},children:"Search for reservations"})})]}),f&&Object(y.jsx)(B.a,{sx:{width:"100%",marginBottom:"10px"},spacing:4,children:Object(y.jsxs)(W.a,{severity:"error",children:[Object(y.jsx)(_.a,{children:"Error"}),f]})}),g.length>0&&Object(y.jsx)(J,{reservations:g,username:t,setError:v})]})})}function U(e){var t=e.username,n=Object(j.f)();return t||n.push("/login"),Object(y.jsx)(w.a,{maxWidth:"md",children:Object(y.jsxs)(d.a,{variant:"h3",children:["Welcome, ",t,"!"]})})}var z=Object(m.b)({palette:{primary:{main:"#ffa177"},secondary:{main:g.a.A100}}});var A=function(){var e=Object(j.f)(),t=Object(r.useState)(),n=Object(s.a)(t,2),a=n[0],i=n[1],c=Object(O.a)((function(e){return{appBar:{marginBottom:e.spacing(2)},icon:{marginRight:e.spacing(2)},title:{flexGrow:1,textDecoration:"none"}}}))();return Object(r.useEffect)((function(){a||e.push("/login")}),[a]),Object(y.jsxs)(f.a,{theme:z,children:[Object(y.jsx)(l.a,{}),Object(y.jsx)(u.a,{position:"static",className:c.appBar,children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(x.a,{className:c.icon}),Object(y.jsx)(d.a,{variant:"h6",color:"inherit",noWrap:!0,className:c.title,to:"/",component:o.b,children:"Melon Tasting Scheduler"}),Object(y.jsx)(b.a,{to:"/schedule",component:o.b,color:"inherit",children:"Schedule Tasting"}),Object(y.jsx)(b.a,{to:"/current_reservations",component:o.b,color:"inherit",children:"Current Reservations"}),a&&Object(y.jsx)(b.a,{color:"inherit",onClick:function(){return i(null)},children:"Log out"})]})}),Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/schedule",children:Object(y.jsx)(F,{username:a})}),Object(y.jsx)(j.a,{path:"/current_reservations",children:Object(y.jsx)(S,{username:a})}),Object(y.jsx)(j.a,{path:"/login",children:Object(y.jsx)(T,{setUsername:i})}),Object(y.jsx)(j.a,{path:"/",children:Object(y.jsx)(U,{username:a})})]})]})};c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(o.a,{children:Object(y.jsx)(A,{})})}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.029acb55.chunk.js.map