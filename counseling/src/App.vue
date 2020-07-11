<template lang="pug">
#app
  nav
    #nav.container
      img(src="../public/img/heart.jpg" width="84" height="57")
      a(to="/home") 服務項目
      p 心理師團隊
      p 活動&講座
      p 初診預約
      p 診所專線 02-89416928

  .p-0.homeimg
    div
      img(src="../public/img/homemainimg.jpg" width="351")
      p 傾心諮商，讓你的煩惱與憂愁得以安放。
      button.btn.btn-primary.btn-lg(type='button') 傾心服務
      button.btn.btn-secondary.btn-lg.ml-lg-5(type='button') 線上預約
  section.about
    h2 OUR SERVICE
    p 傾心服務項目
    p 接受真正的自己，<br>擁有接受不完美的勇氣
    div#homeserviceitem.container
      div.col-6.col-lg-4
        span 憂鬱症
        p lfdsafdsafdsafdsafdsafdsafdsafds
      div.col-6.col-lg-4
        span 憂鬱症
        p lfdsafdsafdsafdsafdsafdsafdsafds
      div.col-6.col-lg-4
        span 憂鬱症
        p lfdsafdsafdsafdsafdsafdsafdsafds
      div.col-6.col-lg-4
        span 憂鬱症
        p lfdsafdsafdsafdsafdsafdsafdsafds
      div.col-6.col-lg-4
        span 憂鬱症
        p lfdsafdsafdsafdsafdsafdsafdsafds
      div.col-6.col-lg-4
        span 憂鬱症
        p lfdsafdsafdsafdsafdsafdsafdsafds
    //- div
    //-   button.btn.btn-outline-dark(type='button') 了解更多
    //-   button.btn.btn-outline-dark(type='button') 線上預約
    div#homeservicebtn.container.d-flex.justify-content-center.align-items-center
      div.border-primary
        a(href="#") 了解更多
      div.border-primary
        a(href="#") 線上預約
    .p-0.homeimg2
      div
      div
          span fjdsalf;jdsaf
          h3 fdsafdsafdsafds
          p dsfsdafdsfsdfdsafdsaffdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsa
          p fdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsa
          button.btn.btn-primary.btn-lg(type='button') 傾心服務
  keep-alive
    router-view
</template>

<script>
export default {
}
</script>

button.btn.btn-outline-dark(type='button') Dark
