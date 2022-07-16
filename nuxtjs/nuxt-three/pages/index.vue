<template>
  <!-- <div class="container mx-auto bg-gray-300 p-8 index">
    <h1 class="font-bold text-gray-600 text-lg">Hello, Tailwind 3!</h1>
  </div> -->
  <section id="site">
    <section class="header">
      <img src="" alt="" class="desktop">
      <img src="" alt="" class="mobile">
      <div class="inner Container Container--wide">
        <h1 class="title">WOLFWARRIOR</h1>
      </div>
    </section>
    <section class="featured featured--no-logo featured--reverse">
      <div class="featuredBg featuredBg--desktop"></div>
      <div class="featuredBg featuredBg--mobile"></div>
      <div class="featuredContent Container Container--wide">
        <div class="featuredDetails">
          <header class="featuredHeader">
            <h1 class="featuredHeading">Подготовьте снаряжение к выходу Overwatch 2 с комплектом «Пост наблюдения»</h1>
            <h2 class="featuredSubheading" style="color:#51658e;">4 — 25 февраля 2021 г.</h2>
          </header>
          <p class="featuredDescription">Отпразднуйте наступление года Быка, получая праздничные предметы, зарабатывая еженедельные награды и участвуя в новой потасовке для вольных стрелков: «Охота за головами»!</p>
          <NuxtLink class="btn featuredCta" to="/">Подробнее</NuxtLink>
        </div>
      </div>
    </section>
    <section class="message">
      <div class="Container">
        <div class="messageInner">
          <div class="messageText">
            <h1 class="messageTitle">Скидка на покупку Overwatch</h1>
            <p class="messageDescription">
              <span>Фантастические герои. Потрясающие моменты.</span>
              <span></span>
              <span>Только Overwatch.</span>
              <br>
              <span>Не промахнитесь с выбором. Скидка на Overwatch до 66% ПРЯМО СЕЙЧАС!*</span>
            </p>
            <em class="messageDisclaimer">Только Overwatch.</em>
            <NuxtLink class="btn messageCta btn--secondary" to="/">Подробнее</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="news">
      <h1>NEWS</h1>
    </section>
    <section class="heroes">
      <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  title: 'Главная'
})
</script>

<style>
  section#site{
    min-height: calc(100vh - 60px);
  }
</style>