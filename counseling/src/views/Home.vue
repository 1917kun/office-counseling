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
    b-container#homeservice
      b-row.justify-content-center.text-center
        b-col.box3(cols="12" sm="4" md="4")
          div 1
          div 憂鬱症
          p 憂鬱情緒持續過久使生活受到影響，藉由評估給予心理、藥物治療，能夠改善憂鬱症的影響，並提升生活品質。
        b-col.box3(cols="12" sm="4" md="4")
          div 2
          div 壓力與失眠
          p 難以入睡、多夢或是睡眠品質不佳，傾心會了解困擾你的是生理或心理因素並提供藥物或正念訓練。
        b-col.box3(cols="12" sm="4" md="4")
          div 3
          div 兒童與青少年
          p 學習與學業是華人社會的重點，在傾心診所裡的諮商師，將會與家長與學生一起面對這個重大議題。
        b-col.box3(cols="12" sm="4" md="4")
          div 4
          div 伴侶及婚姻
          p 在伴侶/夫妻之間，因各式各樣的問題發生衝突,伴侶諮商就是要協助雙方打破負向循環，找出核心問題後打造更健康的關係。
        b-col.box3(cols="12" sm="4" md="4")
          div 5
          div 心理諮商
          p 針對個案的各種困擾，同時提供藥物、心理諮商、團體諮商甚至是卡片探索，結合各種方式，進行恰當精準的心理治療。
        b-col.box3(cols="12" sm="4" md="4")
          div 6
          div 多元諮商
          p 為因應當今世代已慢慢走向多元社會,考慮有些族群需要心理師的幫助,傾心在此方面也不落人後,建立了相當完善的諮商體系。
    b-container
      b-row.b2
        b-col.d-flex.justify-content-center.w-100
          .btn2 了解更多
          .btn2 線上預約
    //-about----------------------------------------------------------------
    b-container.about(fluid).p-o
      b-row.aboutrow
        b-col(cols="12" lg="6").aboutimg
        b-col(cols="12" lg="6").abouttext
          span ABOUT US
          span 關於傾心
          div
            p 每個人內心都是一個小小孩,在面對這洶湧湍急的社會,往往不知所措。長輩、家人、朋友、情人、等各種在你身邊的人,有時卻沒有一個能在夜深人靜的時刻裡,靜靜聽你訴說你的苦,而傾心,能給予你最剛好的照顧,照顧你/妳那徬徨不安的心。
            p 無論是進行心理諮商治療、藥物治療、伴侶與婚姻等的團體課程，我們都能以最適合您的方式來幫助您，還請您仔細閱讀我們的網站，如有需要請在頁面預約我們的團隊。
          .btn3 了解更多
    //- carousel-------------------------------------------------------------
    .container
      b-carousel#carousel-1(v-model='slide' :interval='0' controls indicators background='#e7e7e7' img-width='1024' img-height='480'  @sliding-start='onSlideStart' @sliding-end='onSlideEnd')
        b-carousel-slide
          p 傾心診所醫師&心理師
          hr
          p xxx心理師醫師
          img.carousimg(src="https://picsum.photos/1902/1080/?random=4" width="200" height="200")
          p 主治項目
          p 憂鬱症、兒童與青少年、人際關係與自我成長、生涯探索
          .btn4 了解更多
        b-carousel-slide
          p 傾心診所醫師&心理師
          hr
          p xxx心理師醫師
          img(src="https://picsum.photos/1902/1080/?random=5" width="200" height="200")
          p 主治項目
          p 憂鬱症、兒童與青少年、人際關係與自我成長、生涯探索
          .btn4 了解更多
        b-carousel-slide
          p 傾心診所醫師&心理師
          hr
          p xxx心理師醫師
          img(src="https://picsum.photos/1902/1080/?random=6" width="200" height="200")
          p 主治項目
          p 憂鬱症、兒童與青少年、人際關係與自我成長、生涯探索
          .btn4 了解更多
        b-carousel-slide
          p 傾心診所醫師&心理師
          hr
          p xxx心理師醫師
          img(src="https://picsum.photos/1902/1080/?random=7" width="200" height="200")
          p 主治項目
          p 憂鬱症、兒童與青少年、人際關係與自我成長、生涯探索
          .btn4 了解更多
    //-homenews-------------------------------------------------------
    //- b-container
    //-   b-row.m-0
    //-     b-col.homenewsimg(cols="12" sm="6")
    //-     b-col(cols="12" sm="6")
    //-       div 傾心<br>2020年7月16日．1分鐘
    //-       div 2020/8/7薩提爾模式伴侶及婚姻治療
    //-       div 報名連結 <br>http://localhost:8080/#/column'
    //-       div 456次瀏覽 寫一則留言
          //----------------------------------------------------------
    .container
      p 456545456465446
      p 456545456465446
      p 456545456465446
      p 456545456465446
      p 456545456465446
</template>

<script>

export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

</style>
