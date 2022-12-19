"use strict";(self["webpackChunkcode_style"]=self["webpackChunkcode_style"]||[]).push([[199],{5199:function(s,l,e){e.r(l),e.d(l,{default:function(){return I}});var a=e(3396),r=e(4870),b=e(1119);const p={class:"container column gap-60"},c=(0,a._)("div",{class:"column gap-30"},[(0,a._)("h1",null,"About App"),(0,a._)("p",{class:"fsz20"}," На этой странице описан пример построения структуры приложения. ")],-1),n={class:"column gap-30"},i=(0,a._)("h2",null,"REST API",-1),o=(0,a._)("p",null,[(0,a.Uk)(" Для HTTP запросов рекомендуется создавать отдельную папку в корне приложения. Название для папки "),(0,a._)("b",{class:"green"},"api"),(0,a.Uk)(" или "),(0,a._)("b",{class:"green"},"http")],-1),t=(0,a._)("p",null,[(0,a.Uk)(" Начинается все с "),(0,a._)("b",{class:"green"},"index.js"),(0,a.Uk)(". Здесь создается базовый скелет HTTP запроса. Устанавливается базовый URL и токен. ")],-1),u=(0,a._)("p",null,[(0,a.Uk)(" Создаем файл "),(0,a._)("b",{class:"green"},"base.js"),(0,a.Uk)(". Здесь будут находится функции для стандартных запросов веб-приложения: создать, прочитать, редактировать, удалить (CRUD). Можно добавить и другие методы. В примере ниже были добавлены функции для загрузки и удаления файлов на сервер. Во всех методах используется базовый запрос из "),(0,a._)("b",{class:"green"},"index.js"),(0,a.Uk)(". ")],-1),g=(0,a.uE)('<p> Как-то организовать работу с этими методами? Есть как минимум 3 варианта: </p><ul class="list"><li>Импортировать каждый метод по отдельности</li><li>Классы</li><li>Композиция</li></ul><p> Рекомендуется использовать импорты + что то одно: классы или композиция. В примерах ниже используется композиция, т.к. она позволяет создавать более гибкие объекты. </p><p> Создадим функцию <b class="yellow">createBaseApi</b>. Она будет принимать один параметр - <b class="green">url</b>. Функция будет возвращать объект с базовыми запросами CRUD по переданному url. </p><p> Создадим функцию <b class="yellow">createFilesApi</b> для загрузки и удаления файлов с сервера. </p>',5),U=(0,a.uE)('<p> Теперь, когда есть база для создания HTTP запросов, можно начинать работу с моделью приложения. На каждую модель создается отдельный файл. Название файла с заглавной буквы, название модели в единственном числе + Api в конце. В этом файле должен быть экспорт обычного объекта или класса для работы с этой моделью. </p><p> Разберем на примере модели пользователя. Создадим <b class="green">UserApi.js</b>. В нем определим <b class="red">USER_URL</b> - базовая часть URL для запроса к модели пользователя. Экспортируем объект по дефолту. В него через spread оператор распаковываем объект, который нам возвращает функция <b class="yellow">createBaseApi</b>. Передаем в функцию <b class="red">USER_URL</b>, он будет подставляться при запросах. </p><p> Теперь у нас есть объект с методами CRUD к модели пользователя. Если у модели есть какие-то специфичные только ей запросы, мы можем добавить их на этом этапе. Здесь мы добавили два метода <b class="yellow">login</b> и <b class="yellow">deactivate</b>. </p>',3),m={class:"column gap-30"},d=(0,a._)("h2",null,"Controller",-1),_=(0,a._)("p",null,[(0,a.Uk)(" При работе с HTTP запросами обязательно нужно обрабатывать возможные ошибки. Для этого рекомендуется создавать отдельную папку в корне приложения. Название для папки "),(0,a._)("b",{class:"green"},"controllers"),(0,a.Uk)(". Здесь будет отдельный слой для обработки ошибок при работе с REST API. ")],-1),w=(0,a.uE)('<p> Создаем файл <b class="green">base.js</b>. Здесь на каждый базовый API из <b class="green">api/base.js</b> нужно создать контроллер. В <b class="green">createBaseController</b> передается два аргумента: <b class="green">api</b> - объект с методами для работы с моделью, <b class="green">errors</b> - объект с ошибками. </p><p> На каждый метод <b class="green">api</b> создается одноименный метод, в котором идет вызов метода <b class="green">api</b>, обернутый в <b class="red">try catch</b>. В catch вызывается функция, которая отвечает за показ ошибок в приложении. В нее передается аргумент с сообщением ошибки из объекта <b class="green">errors</b>, в котором ключи названы так же как методы <b class="green">api</b>. </p>',2),S=(0,a.uE)('<p> На каждый API из папки <b class="green">api</b> создается Controller. Название файла делаем аналогично. </p><p> Разберем пример <b class="green">UserController</b>. В нем определим <b class="red">USER_ERRORS</b> - объект с текстами для ошибок на каждый метод. Экспортируем объект по дефолту. В него через spread оператор распаковываем объект, который нам возвращает функция <b class="yellow">createBaseController</b>. Передаем в функцию <b class="red">UserApi</b> и <b class="red">USER_ERRORS</b>. </p><p> Нас не устроил метод <b class="yellow">getById</b>, который создает <b class="yellow">createBaseController</b> и мы его просто переопределили ниже. Также добавили методы, которые нужны для обработки ошибок при работе с <b class="red">UserApi</b>, но которые не создает <b class="yellow">createBaseController</b>. </p>',3),k={class:"column gap-30"},y=(0,a._)("h2",null,"use Controller",-1),h=(0,a._)("p",null," На скриншоте ниже показан пример использования созданных controllers ",-1),R={class:"column gap-30"},A=(0,a.uE)('<h2>Styles</h2><p> Пример работы со стилями в приложении с использованием SCSS. Отдельная папка <b class="green">styles</b> в корне приложения. В ней 4 папки: </p><ul class="list"><li><b class="red">block</b> - для блоков БЭМ</li><li><b class="red">components</b> - для стилей компонентов</li><li><b class="red">page/view</b> - для стилей, которые специфичны какой то определенной странице</li><li><b class="red">system</b> - для сброса, переменных, шрифтов и прочих базовых вещей.</li></ul><p> В каждой папке есть <b class="green">index.scss</b>, в который импортируются все файлы со стилями из папки. В <b class="green">main.scss</b> импортируется все <b class="green">index.scss</b>. </p>',4),C=(0,a._)("h2",null,"Scoped",-1),W=(0,a._)("p",null,[(0,a._)("b",null,"Не рекомендуется"),(0,a.Uk)(" использовать "),(0,a._)("b",null,"scoped"),(0,a.Uk)(" стили, т.к. если Вам понадобится переиграть их, могут возникнуть неудобства. К тому же ходит "),(0,a._)("b",{class:"red"},"страшный миф"),(0,a.Uk)(" о том, что scoped стили через data атрибуты снижают производительность. ")],-1),Z={class:"column gap-30"},v=(0,a._)("h2",null,"Utils",-1),E=(0,a._)("p",null,[(0,a.Uk)(" Для импортируемых функций рекомендуется создавать отдельную папку "),(0,a._)("b",{class:"green"},"utils"),(0,a.Uk)(" в корне приложения. Рекомендуется разделить функции по группам и разложить эти группы по папкам и разным файлам. ")],-1),j=(0,a._)("p",null,[(0,a.Uk)(" В примере создана папка "),(0,a._)("b",{class:"green"},"array"),(0,a.Uk)(" для работы с массивами и папка "),(0,a._)("b",{class:"green"},"router"),(0,a.Uk)(" для работы с навигацией в приложении. ")],-1),T={class:"column gap-30"},B=(0,a._)("h2",null,"Константы",-1),x=(0,a._)("p",null,[(0,a.Uk)(" Для констант приложения рекомендуется создавать отдельную папку "),(0,a._)("b",{class:"green"},"data / const"),(0,a.Uk)(" в корне приложения. ")],-1);var P={__name:"AboutAppView",setup(s){return(s,l)=>((0,a.wg)(),(0,a.iD)("section",null,[(0,a._)("div",p,[c,(0,a._)("div",n,[i,o,(0,a.Wm)((0,r.SU)(b.Z),{label:"Папка api","img-src":"about-app/api-schema.webp"}),t,(0,a.Wm)((0,r.SU)(b.Z),{label:"Пример index.js","img-src":"about-app/api-index.webp"}),u,(0,a.Wm)((0,r.SU)(b.Z),{label:"Пример base.js","img-src":"about-app/api-base-1.webp"}),g,(0,a.Wm)((0,r.SU)(b.Z),{label:"createBaseApi и createFilesApi","img-src":"about-app/api-base-2.webp"}),U,(0,a.Wm)((0,r.SU)(b.Z),{label:"UserApi.js","img-src":"about-app/api-UserApi.webp"})]),(0,a._)("div",m,[d,_,(0,a.Wm)((0,r.SU)(b.Z),{label:"Папка controllers","img-src":"about-app/controller-schema.webp"}),w,(0,a.Wm)((0,r.SU)(b.Z),{label:"base.js","img-src":"about-app/controller-base.webp"}),S,(0,a.Wm)((0,r.SU)(b.Z),{label:"UserController","img-src":"about-app/controller-UserController.webp"}),(0,a.Wm)((0,r.SU)(b.Z),{label:"createBaseResponseErrors","img-src":"about-app/responseErrors.webp"})]),(0,a._)("div",k,[y,h,(0,a.Wm)((0,r.SU)(b.Z),{label:"OrderController","img-src":"about-app/useController.webp"})]),(0,a._)("div",R,[A,(0,a.Wm)((0,r.SU)(b.Z),{label:"Пример папки styles","img-src":"about-app/styles-schema.webp"}),(0,a.Wm)((0,r.SU)(b.Z),{label:"Пример main.scss","img-src":"about-app/styles-main.webp"}),C,W,(0,a.Wm)((0,r.SU)(b.Z),{label:"cat","img-src":"cat-scary.webp","is-bad":"","is-gray":""})]),(0,a._)("div",Z,[v,E,(0,a.Wm)((0,r.SU)(b.Z),{label:"Папка utils","img-src":"about-app/utils-schema.webp"}),j,(0,a.Wm)((0,r.SU)(b.Z),{label:"array/find.js","img-src":"about-app/utils-arrayFind.webp"}),(0,a.Wm)((0,r.SU)(b.Z),{label:"router/index.js","img-src":"about-app/utils-router.webp"})]),(0,a._)("div",T,[B,x,(0,a.Wm)((0,r.SU)(b.Z),{label:"Папка data","img-src":"about-app/data-schema.webp"}),(0,a.Wm)((0,r.SU)(b.Z),{label:"validation/index.js","img-src":"about-app/data-validation.webp"})])])]))}};const f=P;var I=f}}]);
//# sourceMappingURL=199.948ca9e3.js.map