<template>
  <section>
    <div class="container column gap-60">
      <div class="column gap-30">
        <h1>JavaScript</h1>

        <p class="fsz20">
          На этой странице собраны рекомендации по JS.
        </p>
      </div>

      <div class="column gap-30">
        <h2>Наименование переменных</h2>

        <p>
          Одна из самых трудных задач в жизни разработчика, это придумывание названий для переменных.
          Очень важно подбирать хорошие названия. Это позволяет быстрее понимать, что делает код.
          Название должно быть кратким, но в тоже время понятным и не превращаться в "ниндзя код".
        </p>

        <ImageLabel img-src="js/js-1.webp" is-bad/>

        <ImageLabel img-src="js/js-2.webp" />
      </div>

      <div class="column gap-30">
        <h2>Наименование функций</h2>

        <p>
          В названии функции должен быть глагол, который обозначает действие этой функции.
          Желательно чтобы он был на первом месте. Хорошо если название функции не совпадает
          с названиями стандартных методов объектов JS. Это позволяет быстро находить, где используется функция,
          при поиске по проекту.
        </p>

        <p>
          Например, если Вы создадите function <b class="red">find</b>, то при поиске по проекту Вам наверняка будут
          попадаться участки кода, где используется Array.prototype.<b class="red">find</b>(). Если вместо этого создать
          function <b class="green">findById</b>, это добавит уникальности и можно будет быстрее осуществить поиск.
        </p>
      </div>

      <div class="column gap-30">
        <h2>Function Declaration or Arrow</h2>

        <p>
          Рекомендуется использовать Function Declaration, т.к. они более заметны в коде.
          Также их можно вызывать в коде выше объявления. Это позволяет писать код "снизу-вверх".
          При дальнейшем прочтении кода сверху-вниз, если правильно подобраны названия функций,
          становится ясно что они выполняют, и не требуется "лезть под капот" (вниз кода) и смотреть,
          что происходит внутри функций.
        </p>

        <ImageLabel img-src="js/js-6.webp" is-bad />

        <ImageLabel img-src="js/js-5.webp" />
      </div>

      <div class="column gap-30">
        <h2>Arrow Function</h2>

        <p>
          Arrow Function aka Стрелочные функции хорошо использовать для:
        </p>

        <ul class="list">
          <li>однострочных вычислений;</li>
          <li>использовании в качестве коллбэков;</li>
          <li>если необходимо сразу вернуть объект из функции.</li>
        </ul>

        <ImageLabel img-src="js/js-4.webp" is-bad />

        <ImageLabel img-src="js/js-3.webp" />
      </div>

      <div class="column gap-30">
        <h2>Switch</h2>

        <p>
          Если в условии встретилось много <b>if esle</b>,
          возможно стоит воспользоваться конструкцией switch.
          Важно помнить про особенности конструкции и при необходимости использовать break.
        </p>

        <ImageLabel img-src="js/js-7.webp" is-bad />

        <ImageLabel img-src="js/js-8.webp" />
      </div>

      <div class="column gap-30">
        <h2>Loop</h2>

        <p>
          Циклы. Если не требуется проходить по всем элементам массива, предпочтительнее
          использовать цикл <b class="green">for</b> вместо <b class="red">forEach</b>.
          Так как он позволяет прерывать цикл в любой момент (<b class="green">break</b>),
          либо перейти на следующую итерацию (<b class="green">continue</b>).
          Таким образом можно ускорить выполнение кода, особенно если идет итерация по большому
          количеству элементов, со сложными вычислениями.
        </p>

        <ImageLabel
          label="catbear"
          img-src="cat-2.webp"
          is-gray
        />
      </div>

      <div class="column gap-30">
        <h2>?.</h2>

        <p>
          Иногда бывает, что во время выполнения кода, по магическим причинам, в переменной не обнаруживается необходимое
          свойство или значение. Эти моменты нужно предвидеть и учитывать при написании кода. Например можно использовать
          <b class="green">?.</b>
        </p>
      </div>

      <div class="column gap-30">
        <h2>Async</h2>

        <p>
          Во время запросов на сервер обязательно обрабатывайте возможные ошибки.
          Для этого рекомендуется использовать блок <b class="green">try catch</b>.
          Обязательно используйте <b class="green">лоадер/спинер</b>, для показа пользователю,
          что сейчас выполняется ожидание ответа с удаленного источника.
        </p>

        <div class="flex gap-20">
          <ButtonSubmit
            text="GO REQUEST"
            class="button--green"
            :is-loading="isLoading"
            @click="sendRequestWithLoading"
          />

          <ButtonSubmit
            text="GO REQUEST"
            class="button--red"
            @click="sendMockRequest"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ImageLabel from '@/components/Image/ImageLabel'
import ButtonSubmit from '@/components/ui/button/ButtonSubmit'
import { useIsLoading } from '@/use/useIsLoading'
import { useMockRequest } from '@/use/useMockRequest'

const { isLoading, startLoading, finishLoading } = useIsLoading()
const { sendMockRequest } = useMockRequest()

async function sendRequestWithLoading () {
  try {
    startLoading()
    await sendMockRequest()
  } finally {
    finishLoading()
  }
}
</script>
