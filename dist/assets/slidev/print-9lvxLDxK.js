import{d as _,a4 as p,z as u,f as s,g as t,t as o,T as c,F as h,aj as f,o as a,i as g,e as v,ad as x}from"../modules/vue-a-ZG5QjA.js";import{a as b,u as y,x as r}from"../index-B7NdEJpk.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-B24_gdsA.js";import"../modules/shiki-BSV5HcrO.js";const k={id:"page-root"},T={class:"m-4"},w={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-main mb-8"},E=_({__name:"print",setup(C){const{slides:d,total:m}=b();p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${r.title}`});const i=u(()=>d.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==""));return(e,D)=>(a(),s("div",k,[t("div",T,[t("div",w,[t("h1",L,o(c(r).title),1),t("div",V,o(new Date().toLocaleString()),1)]),(a(!0),s(h,null,f(i.value,(l,n)=>(a(),s("div",{key:n,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",H,[t("div",S,o(l?.no)+"/"+o(c(m)),1),x(" "+o(l?.title)+" ",1),j])]),v(N,{"note-html":l.noteHTML,class:"max-w-full"},null,8,["note-html"])]),n<i.value.length-1?(a(),s("hr",z)):g("",!0)]))),128))])]))}});export{E as default};
