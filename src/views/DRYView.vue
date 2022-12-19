<template>
  <section>
    <div class="container column gap-60">
      <div class="column gap-30">
        <h1>DRY</h1>

        <p class="fsz20">
          Don’t repeat yourself &ndash; не повторяйся.
        </p>

        <p>
          Одно из самых важных умений для программиста &ndash; это умение замечать, когда начинается дублирование кода.
          В таком случае необходимо незамедлительно вынести этот код в отдельную функцию/компонент и т.п.
        </p>

        <p>
          Если этого не сделать и Ваш код в какой то момент потребует вноса каких-либо правок, придется вносить эти правки
          в 5-10-20 и т.д. участках кода. От такого может закружиться голова и Вам не захочется работать.
        </p>
      </div>

      <div class="column gap-30">
        <h2>CSS</h2>

        <p>
          Часто на проекте встречаются элементы с одинаковыми стилями.
          В таком случае стоит создать новый селектор класса, чтобы не дублировать
          стили.
        </p>

        <p>
          Scoped стили. Встречается, когда их просто дублируют из компонента в компонент.
          Нужно выносить одинаковые стили в общий CSS.
        </p>

        <ImageLabel
          label="25 повторов"
          img-src="dry/repeat-style.webp"
          is-bad
        />
      </div>

      <div class="column gap-30">
        <h2>Component</h2>

        <p>
          При использовании компонентов в верстке, окружающие теги могут дублируются.
          В таком случае можно создать новый компонент, который будет содержать в себе
          верстку + компонент. Во <b class="green">Vue.js</b> с этим могут помочь слоты.
        </p>

        <ImageLabel
          label="8 повторов"
          img-src="dry/repeat-component.webp"
          is-bad
        />
      </div>

      <div class="column gap-30">
        <h2>Function, Mixin</h2>

        <p>
          Бывает что у разных компонентов, есть одинаковая логика и пропсы.
          Чтобы решить этот вопрос можно вынести общий код в отдельные функции
          и импортировать в компонент. Во <b class="green">Vue.js</b> с этим могут помочь mixins.
        </p>

        <ImageLabel
          label="16 повторов"
          img-src="dry/repeat-mixin.webp"
          is-bad
        />

        <ImageLabel
          label="cat"
          img-src="cat-4.webp"
          is-gray
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ImageLabel from '@/components/Image/ImageLabel'
</script>
