"use strict";(self["webpackChunkcode_style"]=self["webpackChunkcode_style"]||[]).push([[432],{1432:function(l,s,m){m.r(s),m.d(s,{default:function(){return O}});var i=m(3396),c=m(4870),a=m(1119);const n={class:"container column gap-60"},e=(0,i._)("div",{class:"column gap-30"},[(0,i._)("h1",null,"HTML"),(0,i._)("p",{class:"fsz20"}," На этой странице представлены рекомендации при работе с шаблонами HTML, которые делают код более читаемым. ")],-1),u={class:"column gap-30"},p=(0,i._)("h2",null,"Отступы между тегами",-1),t=(0,i._)("p",null," Между родительским и дочерним тегом не должно быть пустой строки. ",-1),h=(0,i._)("p",null," Между тегами одного уровня должна быть пустая строка. ",-1),_={class:"column gap-30"},g=(0,i.uE)('<h2>Порядок атрибутов компонента</h2><ul class="list"><li>Цикл (v-for, key)</li><li>Условие показа компонента (v-if)</li><li>Лейбл по которому можно понять назначение компонента</li><li>v-model, если есть</li><li>ID, class и другие стандартные атрибуты</li><li>Пропсы значение которых строки</li><li>Пропсы, которые необходимо bind&#39;ить (:propsName=)</li><li>Пропсы c Boolean значениями</li><li>Слушатели событий (@click=)</li></ul><p> Также хорошо группировать пропсы по смыслу, например пропсы которые относятся к валидации можно расположить рядом друг с другом. </p>',3),r={class:"column gap-30"},b=(0,i._)("h2",null,"Расположение атрибутов",-1),d=(0,i._)("p",null," Если у компонента больше 2 атрибутов, то необходимо записывать их в столбик. При этом на строке с тегом не должен оставаться первый атрибут. Если количество атрибутов 2 и они занимают большую ширину, их также следует записать в столбик. ",-1),o={class:"column gap-30"},v=(0,i._)("h2",null,"Содержимое тега",-1),w=(0,i._)("p",null," Если содержимое тега вместе с атрибутами имеет небольшую длину, то допускается запись в строку. Если содержимое занимает большую ширину, необходимо перенести начало содержимого на новую строку. ",-1),U={class:"column gap-30"},S=(0,i._)("h2",null,"Закрывающий тег",-1),W=(0,i._)("p",null," Если у тега нет содержимого, он должен быть самозакрывающимся. ",-1),Z={class:"column gap-30"},k=(0,i._)("h2",null,"Открывающий и закрывающий теги",-1),f=(0,i._)("p",null," Открывающий и закрывающий теги должны быть на одном вертикальном уровне, при этом начало и конец открывающего тега также должны быть на одном уровне. ",-1),y={class:"column gap-30"},M=(0,i._)("h2",null,"Количество тегов",-1),D=(0,i._)("p",null," Не используйте большое количество вложенных тегов. Сложная структура DOM элементов замедляет рендеринг, а также затрудняет читаемость кода. ",-1),H=(0,i._)("div",{class:"column gap-30"},[(0,i._)("h2",null,"Семантика"),(0,i._)("p",null,[(0,i.Uk)(' Даже если Вы верстаете не "лэндос", старайтесь не делать "div\'ную" верстку. Используйте теги подходящие по смыслу. Например если необходима кнопка, то не стоит верстать ее через '),(0,i._)("b",{class:"red"},"div"),(0,i.Uk)(", для этого есть тег "),(0,i._)("b",{class:"green"},"button"),(0,i.Uk)("! Для заголовков хорошо подходят теги "),(0,i._)("b",{class:"green"},"h1, h2, h3"),(0,i.Uk)(" и т.д. ")]),(0,i._)("p",null," Такие элементарные правила улучшать читаемость кода и при беглом взгляде будет сразу видно, где у Вас кнопка, а где заголовок. ")],-1),L={class:"column gap-30"},T=(0,i._)("h2",null,"SVG",-1),C=(0,i._)("p",null,' "Не очень" когда в верстке попадается svg код. Занимает много места и к тому же не ясно, что он изображает. Полный атас, если при просмотре кода попадается svg, внутри которого много тегов. ',-1),V=(0,i._)("p",null," Выносите все svg в отдельный компонент, в котором по пропсу можно будет понять, что за изображение внутри. Также можно использовать svg спрайты. ",-1),z={class:"column gap-30"},B=(0,i._)("h2",null,"Атрибут style",-1),E=(0,i._)("p",null,[(0,i._)("b",{class:"red"},"Крайне не рекомендуется"),(0,i.Uk)(" писать стили через атрибут style. Такие стили имеют самый большой вес и если потребуется их переопределить, придется изловчиться. Также очень сильно снижается читаемость html-кода, если таким образом прописано много стилей. ")],-1),G=(0,i._)("p",null," Допускается использование данного атрибута в следующих ситуациях: Вам нужны вычисляемые параметры в стилях; Если Вы уверены, что к данному участку кода Вы никогда не вернетесь и в случае правок будут страдать другие разрабы. ",-1);var I={__name:"HTMLView",setup(l){return(l,s)=>((0,i.wg)(),(0,i.iD)("section",null,[(0,i._)("div",n,[e,(0,i._)("div",u,[p,t,(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/html-9.webp","is-bad":""}),(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/html-1.webp"}),h,(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/html-2.webp","is-bad":""}),(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/html-3.webp"})]),(0,i._)("div",_,[g,(0,i.Wm)((0,c.SU)(a.Z),{label:"Порядок свойств","img-src":"html/html-13.webp"})]),(0,i._)("div",r,[b,d,(0,i.Wm)((0,c.SU)(a.Z),{label:"Первый компонент написан верно","img-src":"html/html-4.webp"})]),(0,i._)("div",o,[v,w,(0,i.Wm)((0,c.SU)(a.Z),{label:"Первые 2 тега позволяют запись в 1 строку","img-src":"html/html-5.webp"})]),(0,i._)("div",U,[S,W,(0,i.Wm)((0,c.SU)(a.Z),{label:"2й тег router-view","img-src":"html/html-10.webp"})]),(0,i._)("div",Z,[k,f,(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/html-11.webp","is-bad":""}),(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/html-12.webp"})]),(0,i._)("div",y,[M,D,(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/html-7.webp","is-bad":""}),(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/html-8.webp"})]),H,(0,i._)("div",L,[T,C,V,(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/svg-1.webp","is-bad":""}),(0,i.Wm)((0,c.SU)(a.Z),{"img-src":"html/svg-2.webp"})]),(0,i._)("div",z,[B,E,G,(0,i.Wm)((0,c.SU)(a.Z),{label:"catbear","img-src":"cat-3.webp","is-gray":""})])])]))}};const N=I;var O=N}}]);
//# sourceMappingURL=432.8edf974a.js.map