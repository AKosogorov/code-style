"use strict";(self["webpackChunkcode_style"]=self["webpackChunkcode_style"]||[]).push([[768],{7768:function(t,e,s){s.r(e),s.d(e,{default:function(){return j}});var o=s(3396),l=s(4870),n=s(8013);function a(){const t=(0,l.iH)(!1),e=()=>{t.value=!0,(0,n.Q)()},s=()=>{t.value=!1,(0,n.z)()};return{showModal:t,openModal:e,closeModal:s}}var c=s(7139),r=s(9242);const i=["onMousedown"],u={class:"modal__content"},d={key:0,class:"modal__title"};var _={__name:"BaseModal",props:{title:{type:String,required:!1,default:""}},emits:["close"],setup(t,{emit:e}){const s=(0,l.iH)("");(0,o.bv)((()=>{s.value="modal--active"})),(0,o.Ah)((()=>{s.value=""}));const n=()=>e("close");return(e,l)=>((0,o.wg)(),(0,o.j4)(o.lR,{to:"body"},[(0,o._)("div",{id:"modal",class:(0,c.C_)(["modal",s.value])},[(0,o._)("div",{class:"modal__wrap",onMousedown:(0,r.iM)(n,["self"])},[(0,o._)("div",u,[(0,o._)("button",{class:"btn-cross btn-cross--modal reset",onClick:n}),t.title?((0,o.wg)(),(0,o.iD)("h3",d,(0,c.zw)(t.title),1)):(0,o.kq)("",!0),(0,o.WI)(e.$slots,"default")])],40,i)],2)]))}};const b=_;var p=b,f={__name:"ModalConfirm",props:{title:{type:String,required:!1,default:"Вы уверены?"}},emits:["close","agree","reject"],setup(t,{emit:e}){const s=()=>e("close");function n(){s(),e("agree")}function a(){s(),e("reject")}return(e,c)=>((0,o.wg)(),(0,o.j4)((0,l.SU)(p),{title:t.title,onClose:s},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default"),(0,o._)("div",{class:"center gap-20"},[(0,o._)("button",{class:"button button--green reset",onClick:n}," Да "),(0,o._)("button",{class:"button button--red reset",onClick:a}," Нет ")])])),_:3},8,["title"]))}};const v=f;var w=v,m=s(65),g=s(7630);const k={class:"container"},C=(0,o._)("h1",{class:"mb-30"},"Test",-1),M=(0,o._)("p",{class:"fsz20 mb-20"}," Если Вы просмотрели всю информацию, то можете пройти небольшой тест. ",-1),h={class:"flex gap-30"},S=(0,o._)("p",{class:"mb-30",style:{"text-align":"center"}},[(0,o.Uk)(" В этом веб-приложении бродят "),(0,o._)("b",{class:"red",style:{"white-space":"nowrap"}}," коты-медведи "),(0,o.Uk)(" ? ")],-1);var y={__name:"TestView",setup(t){const{showModal:e,openModal:s,closeModal:n}=a(),c=(0,m.oR)();function r(){c.dispatch("alert/setAlertSuccess","Поздравляем, Вы прошли тест!")}function i(){c.dispatch("alert/setAlertError","Вам следует быть внимательнее!")}return(t,a)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("section",null,[(0,o._)("div",k,[C,M,(0,o._)("div",h,[(0,o._)("button",{class:"button button--green reset",onClick:a[0]||(a[0]=(...t)=>(0,l.SU)(s)&&(0,l.SU)(s)(...t))}," GO TEST "),(0,o._)("button",{class:"button button--yellow reset",onClick:a[1]||(a[1]=t=>(0,l.SU)(g.I)("HTML"))}," Еще не время ")])])]),(0,l.SU)(e)?((0,o.wg)(),(0,o.j4)((0,l.SU)(w),{key:0,title:"ТЕСТ",onClose:(0,l.SU)(n),onAgree:r,onReject:i},{default:(0,o.w5)((()=>[S])),_:1},8,["onClose"])):(0,o.kq)("",!0)],64))}};const U=y;var j=U}}]);
//# sourceMappingURL=768.d5ad7c3c.js.map