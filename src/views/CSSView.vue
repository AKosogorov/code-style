<template>
  <section>
    <div class="container column gap-60">
      <div class="column gap-30">
        <h1>CSS</h1>

        <p class="fsz20">
          На этой странице собраны рекомендации при работе с CSS.
        </p>
      </div>

      <div class="column gap-30">
        <h2>БЭМ</h2>

        <p>
          Для именования классов используйте методологию <a class="link red" href="https://ru.bem.info/" target="_blank">БЭМ.</a>
        </p>

        <p>
          Для модификаторов рекомендуется использовать два дефиса '--',
          они сильнее выделяются, по сравнению с одним нижним подчеркиванием '_', и при быстром просмотре кода можно сразу увидеть, где используются модификаторы.
        </p>

        <ImageLabel label="БЭМ с использованием '--'" img-src="css/BEM.webp" />
      </div>

      <div class="column gap-30">
        <h2>Порядок свойств</h2>

        <ul class="list">
          <li>Позиционирование (position, top, right...)</li>
          <li>Блочная модель (display, margin, width...)</li>
          <li>Шрифт (font-style, font-size...)</li>
          <li>Color</li>
          <li>Background</li>
          <li>Все остальные свойства</li>
        </ul>

        <ImageLabel img-src="css/style-1.webp" is-bad />

        <ImageLabel img-src="css/style-2.webp" />
      </div>

      <div class="column gap-30">
        <h2>Каскад</h2>

        <p>
          Рекомендуется отказаться от каскада селекторов, т.к. это влияет на производительность и в будущем может создать проблемы с переопределением стилей.
          С этой задачей прекрасно справляется <a class="link red" href="https://ru.bem.info/" target="_blank">БЭМ.</a>
          Допускается небольшой каскад, например когда необходимо повлиять на другой элемент при активации псевдоклассов
          (<b>:focus, :checked</b> и т.д.).
        </p>

        <ImageLabel img-src="css/style-5.webp" is-bad />

        <ImageLabel img-src="css/style-6.webp" />
      </div>

      <div class="column gap-30">
        <h2>Отступы</h2>

        <p>
          Так так поток DOM элементов идет слева-направо, сверху-вниз, рекомендуется использовать свойства:
        </p>

        <ul class="list">
          <li>
            <b class="green">margin-right</b>
            вместо
            <b class="red">margin-left</b>
          </li>

          <li>
            <b class="green">margin-bottom</b>
            вместо
            <b class="red">margin-top</b>
          </li>
        </ul>

        <p>
          Это позволит избежать некоторых неудобных моментов в будущем. Возможно, если Вам хочется добавить
          <b class="red">margin-left / margin-top</b> стоит обратить внимание на <b class="green">padding</b>
        </p>

        <p>
          Иногда требуется чтобы последний элемент прижился к правому краю или к самому низу контейнера.
          Тогда допускается использование <b class="green">margin-left: auto / margin-top: auto</b>
        </p>

        <p>
          <b>Крайне не рекомендуется</b> добавлять внешние отступы для компонента. Необходимо, чтобы визуальные
          границы компонента совпадали с его фактическими границами. Компонент должен стараться быть "кирпичиком",
          который может быть положен в любом необходимом месте, не сломав верстку.
        </p>

        <p class="fsz20">
          <b>Все внешние отступы рекомендуется задавать с помощью сетки, непосредственно в том контексте, куда помещен компонент.</b>
        </p>

        <ImageLabel
          label="cat"
          img-src="cat-1.webp"
          is-gray
        />
      </div>

      <div class="column gap-30">
        <h2>Gap</h2>

        <p>
          Отличным решением для создания отступов между элементами станет свойство <b class="green">gap</b>.
          Оно определяется для <b class="green">flex</b> или <b class="green">grid</b> контейнеров, и создает
          равные отступы между всеми элементами сетки.
          Можно задавать отдельно <b class="green">горизонтальные</b> и <b class="red">вертикальные</b> отступы
          свойствами <b class="green">row-gap</b> и <b class="red">column-gap</b>.
        </p>
      </div>

      <div class="column gap-30">
        <h2>!IMPORTANT</h2>

        <p>
          Рекомендуется избегать этого ключевого слова, т.к. потом в дальнейшем это может помешать.
          Допускается для переопределения стилей какого-нибудь плагина, если совсем все плохо.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import ImageLabel from '@/components/Image/ImageLabel'
</script>
