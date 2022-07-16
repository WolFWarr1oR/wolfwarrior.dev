<style>
.Navbar{
  font-size: 16px;
  line-height: 1.4;
}
.Navbar .Navbar--desktop .Navbar__items,
.Navbar .Navbar--desktop .Navbar__items .Navbar__item{
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
}
.Navbar .Navbar--desktop .Navbar__items .Navbar__item .Navbar__label {
  display: inline-block;
  line-height: 60px;
  height: 60px;
}

.Navbar .Navbar--desktop .Navbar__item:hover, .Navbar .Navbar--desktop .Navbar__item:focus {
    color: #fff;
    background: transparent;
}


@media screen and (min-width: 768px) {
  .Navbar{
    /* background-color: #0b0d12; */
    background-color: #171717;
  }
}
  
@media screen and (min-width:960px) {
  .Navbar .Navbar--desktop{
    padding: 0 40px;
  }
  .Navbar .Navbar--desktop .Navbar__items .Navbar__item{
    margin-right: 30px;
  }
}

@media screen and (min-width:1200px){
  .Navbar .Navbar--desktop .Navbar__item{
    font-size: 20px;
  }
}
</style>

<template>
  <nav 
  class="
    Navbar
    box-border
    relative
    z-1
    font-sans
    font-normal
    text-white/70
  ">
    <div class="Navbar-container relative max-w-[1600px] my-0 mx-auto">
      <div class="Navbar--desktop relative h-[60px] py-0 px-[30px] whitespace-nowrap">
        <NuxtLink to="/">
          <!-- <svg viewbox="0 0 20 20"></svg> -->
        </NuxtLink>
        <div class="Navbar__items">
          <NuxtLink to="/" class="Navbar__item">
            <div class="Navbar__label">Обо мне</div>
          </NuxtLink>
          <!-- <NuxtLink to="//google.com" class="Navbar__item">
            <div class="Navbar__label">Портфолио</div>
          </NuxtLink> -->
          <NuxtLink to="/features" class="Navbar__item">
            <div class="Navbar__label">Блог</div>
          </NuxtLink>
          <NuxtLink to="/" class="Navbar__item">
            <div class="Navbar__label">Проекты</div>
          </NuxtLink>
          <NuxtLink to="/" class="Navbar__item">
            <div class="Navbar__label">Контакты</div>
          </NuxtLink>
          <NuxtLink to="/" class="Navbar__item">
            <div class="Navbar__label">Поддержать</div>
          </NuxtLink>
          <NuxtLink to="//google.com" class="Navbar__item">
            <div class="Navbar__label">Github</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>