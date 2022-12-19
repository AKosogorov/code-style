<template>
  <section>
    <div class="container column gap-60">
      <div class="column gap-30">
        <h1>
          VUEX - стэйт менеджер
          <span class="green">Vue.js</span>
        </h1>

        <p class="fsz20">
          На этой странице несколько рекомендаций по работе с главным стэйт менеджером для <span class="green">Vue.js</span>.
        </p>
      </div>

      <div class="column gap-30">
        <h2>
          Namespaced
        </h2>

        <p>
          При создании модулей для Вашего <b>store</b> крайне рекомендуется использовать
          <span class="green">namespaced</span>. Это создаст отдельное пространство
          имен, и можно будет не беспокоится, что совпадут имена методов и переменных.
        </p>

        <ImageLabel
          label="namespaced"
          img-src="about-app/store-namespaced.webp"
        />
      </div>

      <div class="column gap-30">
        <h2>
          Getters
        </h2>

        <p>
          Рекомендуется создавать геттеры, в которых происходит какое-либо вычисление из переменных
          <b>state</b>. По этому вопросу есть два лагеря и другие рекомендуют на каждую переменную <b>state</b>,
          создавать геттер, который просто возвращает эту переменную.
        </p>

        <ImageLabel img-src="about-app/store-getters.webp" is-bad />

        <ImageLabel img-src="about-app/store-getters-3.webp" />

        <p>
          Если создавать на каждую переменную геттер, то получается дублирование кода.
          Все переменные <b>state</b> реактивны и чтобы эту реактивность увидеть на странице, геттер не нужен.
          К <b>state</b> можно получить доступ напрямую, либо через <b class="yellow">...mapState</b>
        </p>

        <ImageLabel
          label="Обращение к state напрямую"
          img-src="about-app/store-getters-3.webp"
        />
      </div>

      <div class="column gap-30">
        <h2>
          Modules
        </h2>

        <p>
          Модули могут содержать другие модули. Если какие то модули можно сгруппировать по смыслу,
          рекомендуется сделать их модулями одного общего модуля. Когда модули сгруппированы таким
          образом, с ними очень удобно работать через <b class="green">Vue.js devtools</b>
        </p>

        <ImageLabel
          label="Модули не сгруппированы"
          img-src="about-app/devtools-vuex-1.webp"
          is-bad
        />

        <ImageLabel
          label="Модули сгруппированы"
          img-src="about-app/devtools-vuex-2.webp"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ImageLabel from '@/components/Image/ImageLabel'
</script>
