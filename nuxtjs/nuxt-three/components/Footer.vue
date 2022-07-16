<template>
  <div class="footerContainer" id="PageFooter">
    <div class="footer">
      <div class="footerOverlay"></div>
      <div class="footerSelector">
        <div class="footerSelectorToggle">
          <div class="footerIcon footerSelectorToggleIcon"></div>
          <label class="footerSelectorToggleLabel">Русский</label>
          <div class="footerIcon footerSelectorToggleArrow"></div>
        </div>
      </div>
      <div class="footerSelectorDropdown" role="listbox">
        <div class="footerSelectorDropdownContainer">
          <div class="footerSelectorCloser">
            <div class="footerSelectorCloserAnchor">
              <div class="footerIcon"></div>
            </div>
          </div>
          <div class="footerSelectorDropdown">
            <div class="footerSelectorDropdownContainer">
              <div class="footerSelectorCloser">
                <div class="footerSelectorCloserAnchor">
                  <div class="footerIcon"></div>
                </div>
              </div>
              <div class="footerSelectorLocales footerSelectorSection">
                <div class="footerSelectorSectionBlock">
                  <NuxtLink to="/" class="footerSelectorLocale footerSelectorOption">
                    <div class="footerSelectorOptionLabel">English</div>
                  </NuxtLink>
                  <NuxtLink to="/" class="footerSelectorLocale footerSelectorOption">
                    <div class="footerSelectorOptionLabel">Русский</div>
                  </NuxtLink>
                  <NuxtLink to="/" class="footerSelectorLocale footerSelectorOption">
                    <div class="footerSelectorOptionLabel">Українська</div>
                  </NuxtLink>
                  <NuxtLink to="/" class="footerSelectorLocale footerSelectorOption">
                    <div class="footerSelectorOptionLabel">Молдовеняскэ</div>
                  </NuxtLink>
                  <NuxtLink to="/" class="footerSelectorLocale footerSelectorOption">
                    <div class="footerSelectorOptionLabel">Română</div>
                  </NuxtLink>
                  <NuxtLink to="/" class="footerSelectorLocale footerSelectorOption">
                    <div class="footerSelectorOptionLabel">Deutsch</div>
                  </NuxtLink>
                  <NuxtLink to="/" class="footerSelectorLocale footerSelectorOption">
                    <div class="footerSelectorOptionLabel">Add language</div>
                  </NuxtLink>
                </div>
              </div>
              <div class="footerSelectorTick"></div>
            </div>
          </div>
          <div class="footerSelectorTick" style="left: 246.25px"></div>
        </div>
      </div>
      <div class="footerLogoContainer">
        <NuxtLink to="/" class="footerLogo">
          <h1>LOGO</h1>
        </NuxtLink>
      </div>
      <nav class="footerLinks footerLinks--main">
        <div class="footerLinks">
          <div class="footerLink footerLink--main">
            <NuxtLink to="/about" class="footerAnchor">Обо мне</NuxtLink>
          </div>
          <div class="footerLink footerLink--main">
            <NuxtLink to="/github" class="footerAnchor">Github</NuxtLink>
          </div>
          <div class="footerLink footerLink--main">
            <NuxtLink to="/blog" class="footerAnchor">Блог</NuxtLink>
          </div>
          <div class="footerLink footerLink--main">
            <NuxtLink to="/contacts" class="footerAnchor">Контакты</NuxtLink>
          </div>
          <div class="footerLink footerLink--main">
            <NuxtLink to="/donate" class="footerAnchor">Поддержать</NuxtLink>
          </div>
        </div>
      </nav>
      <div class="footerCopyright">&copy; WolFWarrioR & Co, {{curDate.getFullYear()}}</div>
      <div class="footerTrademarks">
        Все упомянутые <NuxtLink to="/">товарные знаки</NuxtLink> являются собственностью соответсвющих владельцев.
      </div>
      <div class="footerMsg">Made with &#60;3 by WolFWarrioR</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        curDate: new Date,
      }
    }
  }
</script>

<style>
[theme="dark"]{
  /* bg-white-50 text-gray-800 antialiased transition-colors duration-300 */
  --footer-bg: #171717;
  --footer-color: #fff;
  --footer-links-color: hsla(0,0%,100%,0.7);
  --footer-trd-mrk-color: hsla(0,0%,100%,0.5);
}

[theme="light"]{
  --footer-bg: #f0edf2;
  --footer-color: #000;
  --footer-links-color: rgba(0,0,0,0.7);;
  --footer-trd-mrk-color: rgba(0,0,0,0.5);;
}

.footer a, .footer div, .footer img, .footer nav, .footer svg {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: baseline;
}

.footerContainer{
  background-color: var(--footer-bg);
  color: var(--footer-color);
}

.footerContainer > .footer {
  margin-top: 0;
  padding: 20px 0;
}

.footer {
  position: relative;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  z-index: 0;
}

.footer .footerOverlay {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.footer .footerSelector{
  position: relative;
  text-align: center;
}

.footer .footerSelectorToggle{
  display: inline-block;
}

.footer .footerSelectorToggleLabel{
  color: var(--footer-links-color);
  display: inline-block;
  line-height: 24px;
  height: 24px;
  /* text-align: center; */
  vertical-align: middle;
  padding: 0 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.footer .footerLogoContainer{
  margin: 30px 0;
  height: 66px;
}

.footer .footerLinks--main{
  margin: 15px 0;
}

@media (min-width: 1280px) {
  .footer .footerLinks{
    display: inline-block;
  }
}

@media (min-width: 1280px){
  .footer .footerLink {
    font-size: 17px;
  }
}

.footer .footerLink{
  display: inline-block;
  font-size: 15px;
  white-space: nowrap;
}

.footer .footerAnchor{
  text-transform: uppercase;
}

.footer .footerAnchor, .footer .footerAnchor:visited{
  color: var(--footer-links-color);
  text-decoration: none;
  background-color: transparent;
}

.footer .footerLink:nth-child(n+2):before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 1px;
    background-color: hsla(0,0%,100%,0.3);
    margin: 0 15px;
    pointer-events: none;
}

.footer .footerSelectorDropdown{
  display: none;
}

.footer .footerCopyright, .footer .footerTrademark {
    color: hsla(0,0%,100%,.8);
}

.footer .footerTrademarks a {
  color: #f06414;
  white-space: normal;
  text-decoration: none;
  font-weight: 400;
}
















</style>
