<template lang="pug">
  #home
    b-container.h-100
      b-row.align-items-center.h-100
        b-col.box.d-flex.flex-column(cols="12" sm="6")
          img(src="https://picsum.photos/1920/1080/?random=2")
          p 傾心諮商，讓你的煩惱與憂愁得以安放。
          b-col.p-0.d-flex.justify-content-center.justify-content-sm-start
            .btn.mr-2 傾心服務
            .btn 線上預約
        b-col(cols="0" sm="6")
    b-container
      b-row
        b-col.box2.d-flex.flex-column.align-items-center
          span OUR SERVICES
          span 傾心專業服務
          span.text-center 溫柔的傾聽,讓你接受真正的自己，<br>並擁有接受不完美的勇氣
    b-container
      b-row.flex-column.justify-content-center.align-items-center
        b-col(cols="4" sm="6") 憂鬱症
        b-col(cols="4" sm="6") 失眠
        b-col(cols="4" sm="6") 兒童與青少年
        b-col(cols="4" sm="6") 伴侶及婚姻
        b-col(cols="4" sm="6") 多元議題
        b-col(cols="4" sm="6") 心理諮商
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
