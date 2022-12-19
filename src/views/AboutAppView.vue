<template>
  <section>
    <div class="container column gap-60">
      <div class="column gap-30">
        <h1>About App</h1>

        <p class="fsz20">
          На этой странице описан пример построения структуры приложения.
        </p>
      </div>

      <div class="column gap-30">
        <h2>REST API</h2>

        <p>
          Для HTTP запросов рекомендуется создавать отдельную папку в корне приложения.
          Название для папки <b class="green">api</b> или <b class="green">http</b>
        </p>

        <ImageLabel
          label="Папка api"
          img-src="about-app/api-schema.webp"
        />

        <p>
          Начинается все с <b class="green">index.js</b>. Здесь создается базовый скелет HTTP запроса.
          Устанавливается базовый URL и токен.
        </p>

        <ImageLabel
          label="Пример index.js"
          img-src="about-app/api-index.webp"
        />

        <p>
          Создаем файл <b class="green">base.js</b>. Здесь будут находится функции для стандартных запросов веб-приложения:
          создать, прочитать, редактировать, удалить (CRUD). Можно добавить и другие методы. В примере ниже были добавлены функции для
          загрузки и удаления файлов на сервер. Во всех методах используется базовый запрос из <b class="green">index.js</b>.
        </p>

        <ImageLabel
          label="Пример base.js"
          img-src="about-app/api-base-1.webp"
        />

        <p>
          Как-то организовать работу с этими методами?
          Есть как минимум 3 варианта:
        </p>

        <ul class="list">
          <li>Импортировать каждый метод по отдельности</li>
          <li>Классы</li>
          <li>Композиция</li>
        </ul>

        <p>
          Рекомендуется использовать импорты + что то одно: классы или композиция.
          В примерах ниже используется композиция, т.к. она позволяет создавать более гибкие объекты.
        </p>

        <p>
          Создадим функцию <b class="yellow">createBaseApi</b>.
          Она будет принимать один параметр - <b class="green">url</b>.
          Функция будет возвращать объект с базовыми запросами CRUD по переданному url.
        </p>

        <p>
          Создадим функцию <b class="yellow">createFilesApi</b> для загрузки и удаления файлов с сервера.
        </p>

        <ImageLabel
          label="createBaseApi и createFilesApi"
          img-src="about-app/api-base-2.webp"
        />

        <p>
          Теперь, когда есть база для создания HTTP запросов, можно начинать работу с моделью приложения.
          На каждую модель создается отдельный файл. Название файла с заглавной буквы, название модели
          в единственном числе + Api в конце. В этом файле должен быть экспорт обычного объекта
          или класса для работы с этой моделью.
        </p>

        <p>
          Разберем на примере модели пользователя. Создадим <b class="green">UserApi.js</b>.
          В нем определим <b class="red">USER_URL</b> - базовая часть URL для запроса к модели пользователя.
          Экспортируем объект по дефолту. В него через spread оператор распаковываем объект, который нам возвращает
          функция <b class="yellow">createBaseApi</b>. Передаем в функцию <b class="red">USER_URL</b>, он будет подставляться при запросах.
        </p>

        <p>
          Теперь у нас есть объект с методами CRUD к модели пользователя. Если у модели есть какие-то специфичные только ей запросы,
          мы можем добавить их на этом этапе. Здесь мы добавили два метода <b class="yellow">login</b> и <b class="yellow">deactivate</b>.
        </p>

        <ImageLabel
          label="UserApi.js"
          img-src="about-app/api-UserApi.webp"
        />
      </div>

      <div class="column gap-30">
        <h2>Controller</h2>

        <p>
          При работе с HTTP запросами обязательно нужно обрабатывать возможные ошибки.
          Для этого рекомендуется создавать отдельную папку в корне приложения.
          Название для папки <b class="green">controllers</b>. Здесь будет отдельный слой
          для обработки ошибок при работе с REST API.
        </p>

        <ImageLabel
          label="Папка controllers"
          img-src="about-app/controller-schema.webp"
        />

        <p>
          Создаем файл <b class="green">base.js</b>. Здесь на каждый базовый API из <b class="green">api/base.js</b> нужно создать контроллер.
          В <b class="green">createBaseController</b> передается два аргумента: <b class="green">api</b> - объект с методами для работы с моделью,
          <b class="green">errors</b> - объект с ошибками.
        </p>

        <p>
          На каждый метод <b class="green">api</b> создается одноименный метод, в котором идет вызов метода <b class="green">api</b>, обернутый
          в <b class="red">try catch</b>. В catch вызывается функция, которая отвечает за показ ошибок в приложении. В нее передается аргумент
          с сообщением ошибки из объекта <b class="green">errors</b>, в котором ключи названы так же как методы <b class="green">api</b>.
        </p>

        <ImageLabel
          label="base.js"
          img-src="about-app/controller-base.webp"
        />

        <p>
          На каждый API из папки <b class="green">api</b> создается Controller. Название файла делаем аналогично.
        </p>

        <p>
          Разберем пример <b class="green">UserController</b>.
          В нем определим <b class="red">USER_ERRORS</b> - объект с текстами для ошибок на каждый метод.
          Экспортируем объект по дефолту. В него через spread оператор распаковываем объект, который нам возвращает
          функция <b class="yellow">createBaseController</b>. Передаем в функцию <b class="red">UserApi</b> и <b class="red">USER_ERRORS</b>.
        </p>

        <p>
          Нас не устроил метод <b class="yellow">getById</b>, который создает <b class="yellow">createBaseController</b>
          и мы его просто переопределили ниже. Также добавили методы, которые нужны для обработки ошибок при работе с
          <b class="red">UserApi</b>, но которые не создает <b class="yellow">createBaseController</b>.
        </p>

        <ImageLabel
          label="UserController"
          img-src="about-app/controller-UserController.webp"
        />

        <ImageLabel
          label="createBaseResponseErrors"
          img-src="about-app/responseErrors.webp"
        />
      </div>

      <div class="column gap-30">
        <h2>use Controller</h2>

        <p>
          На скриншоте ниже показан пример использования созданных controllers
        </p>

        <ImageLabel
          label="OrderController"
          img-src="about-app/useController.webp"
        />
      </div>

      <div class="column gap-30">
        <h2>Styles</h2>

        <p>
          Пример работы со стилями в приложении с использованием SCSS.
          Отдельная папка <b class="green">styles</b> в корне приложения.
          В ней 4 папки:
        </p>

        <ul class="list">
          <li><b class="red">block</b> - для блоков БЭМ</li>
          <li><b class="red">components</b> - для стилей компонентов</li>
          <li><b class="red">page/view</b> - для стилей, которые специфичны какой то определенной странице</li>
          <li><b class="red">system</b> - для сброса, переменных, шрифтов и прочих базовых вещей.</li>
        </ul>

        <p>
          В каждой папке есть <b class="green">index.scss</b>, в который импортируются все файлы со стилями из папки.
          В <b class="green">main.scss</b> импортируется все <b class="green">index.scss</b>.
        </p>

        <ImageLabel
          label="Пример папки styles"
          img-src="about-app/styles-schema.webp"
        />

        <ImageLabel
          label="Пример main.scss"
          img-src="about-app/styles-main.webp"
        />

        <h2>Scoped</h2>

        <p>
          <b>Не рекомендуется</b> использовать <b>scoped</b> стили, т.к. если Вам понадобится переиграть их, могут возникнуть неудобства.
          К тому же ходит <b class="red">страшный миф</b> о том, что scoped стили через data атрибуты снижают производительность.
        </p>

        <ImageLabel
          label="cat"
          img-src="cat-scary.webp"
          is-bad
          is-gray
        />
      </div>

      <div class="column gap-30">
        <h2>Utils</h2>

        <p>
          Для импортируемых функций рекомендуется создавать отдельную папку
          <b class="green">utils</b> в корне приложения. Рекомендуется разделить
          функции по группам и разложить эти группы по папкам и разным файлам.
        </p>

        <ImageLabel
          label="Папка utils"
          img-src="about-app/utils-schema.webp"
        />

        <p>
          В примере создана папка <b class="green">array</b> для работы с массивами и
          папка <b class="green">router</b> для работы с навигацией в приложении.
        </p>

        <ImageLabel
          label="array/find.js"
          img-src="about-app/utils-arrayFind.webp"
        />

        <ImageLabel
          label="router/index.js"
          img-src="about-app/utils-router.webp"
        />
      </div>

      <div class="column gap-30">
        <h2>Константы</h2>

        <p>
          Для констант приложения рекомендуется создавать отдельную папку
          <b class="green">data / const</b> в корне приложения.
        </p>

        <ImageLabel
          label="Папка data"
          img-src="about-app/data-schema.webp"
        />

        <ImageLabel
          label="validation/index.js"
          img-src="about-app/data-validation.webp"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ImageLabel from '@/components/Image/ImageLabel'
</script>
