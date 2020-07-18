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
        b-col.box3(v-for="(homeservicedata,index) in homeservicedatas" :key="index" cols="12" sm="4" md="4")
          div {{homeservicedata.index}}
          div {{homeservicedata.title}}
          p {{homeservicedata.des}}
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
      b-carousel#carousel-1(v-model='slide' :interval='4000' controls indicators background='#e7e7e7' img-width='1024' img-height='480'  @sliding-start='onSlideStart' @sliding-end='onSlideEnd')
        b-carousel-slide(v-for="(homecarousel,index) in homecarousels" :key="index")
          p {{homecarousel.title}}
          hr
          p {{homecarousel.doctor}}
          img.carousimg(:src="homecarousel.src" width="200" height="200")
          p {{homecarousel.p1}}
          p {{homecarousel.p2}}
          .btn4 了解更多
      //-homenews-------------------------------------------------------
    div(style="background:#809ec925")
      .container.d-flex.flex-column.align-items-center.mt-5.homenewsback
        div.homenews.text-center
          //- p.m-0 NEWS
          p.thenew 最新消息
        b-card.overflow-hidden(no-body v-for="(homenew,index) in homenews" :key="index" style='max-width: 85%;')
          b-row(no-gutters)
            b-col(md='6')
              b-card-img.homenewsimg(:src='homenew.newssrc')
            b-col(md='6')
              b-card-body.homenewstext(title='').d-flex.flex-column.justify-content-center
                div
                  b-card-text.
                    {{homenew.title}}
                div
                  b-card-text.
                    報名連結:<br>
                    https://www.satier.couseling/paid 匯款<br>
                    https://www.satier.couseling/linepaiding 線上支付
                div.justify-content-end.mt-5
                  b-card-text.d-flex
                    p.d-flex.align-items-center.
                      {{homenew.time}}
                hr
                div.justify-content-between
                  b-card-text.
                    {{homenew.sta}}
                    <a href="#" style="text-decoration:none;color:#003448;">寫一則留言</a>
                  span
                    font-awesome-icon(:icon="['fab', 'gratipay']")
      //- homearticle-------------------------------------------
      .container.d-flex.flex-column.align-items-center.mt-5.homearticleback
        div.homenews.text-center
          span.m-0(style='color: #e9a040;') Posts
          p.thearticle 熱門文章
        div.homearticle
          b-card-group(deck)
            b-card(title='' v-for="(homearticle,index) in homearticles" :key="index" :img-src='homearticle.src' img-top )
              b-card-text.
                {{homearticle.title}}
              template(v-slot:footer)
                span.homearticlefooter
                  font-awesome-icon(:icon="['fas', 'eye']")
                  span {{homearticle.sta}}
                  span 留言
                span
                  font-awesome-icon(:icon="['fab', 'gratipay']")
    //- footer---------------------------------------------------
    .container
      div
        img(src="https://picsum.photos/1920/1080/?random=14" width="271px")
      div
        p 電子信箱
        p 傾心診所(金門縣金湖鎮)
        p 聯絡專線 02-23651675
        p 診所地址 金門縣金湖鎮蓮庵里3鄰東村21號
        b-input
      div

</template>

<script>

export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      homeservicedatas: [
        {
          index: '1',
          title: '憂鬱症',
          des: '憂鬱情緒持續過久使生活受到影響，藉由評估給予心理、藥物治療，能夠改善憂鬱症的影響，並提升生活品質。'
        },
        {
          index: '2',
          title: '壓力與失眠',
          des: '難以入睡、多夢或是睡眠品質不佳，傾心會了解困擾你的是生理或心理因素並提供藥物或正念訓練。'
        },
        {
          index: '3',
          title: '兒童與青少年',
          des: '學習與學業是華人社會的重點，在傾心診所裡的諮商師，將會與家長與學生一起面對這個重大議題。'
        },
        {
          index: '4',
          title: '伴侶及婚姻',
          des: '在伴侶/夫妻之間，因各式各樣的問題發生衝突,伴侶諮商就是要協助雙方打破負向循環，找出核心問題後打造更健康的關係。'
        },
        {
          index: '5',
          title: '心理諮商',
          des: '針對個案的各種困擾，同時提供藥物、心理諮商、團體諮商甚至是卡片探索，結合各種方式，進行恰當精準的心理治療。'
        },
        {
          index: '6',
          title: '多元諮商',
          des: '為因應當今世代已慢慢走向多元社會,考慮有些族群需要心理師的幫助,傾心在此方面也不落人後,建立了相當完善的諮商體系。'
        }
      ],
      homecarousels: [
        {
          title: '傾心診所醫師&心理師',
          doctor: 'xxx心理師醫師',
          src: 'https://picsum.photos/1920/1080/?random=6',
          p1: '主治項目',
          p2: '憂鬱症、兒童與青少年、人際關係與自我成長、生涯探索'
        },
        {
          title: '傾心診所醫師&心理師',
          doctor: 'xxx心理師醫師',
          src: 'https://picsum.photos/1920/1080/?random=7',
          p1: '主治項目',
          p2: '憂鬱症、兒童與青少年、人際關係與自我成長、生涯探索'
        },
        {
          title: '傾心診所醫師&心理師',
          doctor: 'xxx心理師醫師',
          src: 'https://picsum.photos/1920/1080/?random=8',
          p1: '主治項目',
          p2: '憂鬱症、兒童與青少年、人際關係與自我成長、生涯探索'
        },
        {
          title: '傾心診所醫師&心理師',
          doctor: 'xxx心理師醫師',
          src: 'https://picsum.photos/1920/1080/?random=9',
          p1: '主治項目',
          p2: '憂鬱症、兒童與青少年、人際關係與自我成長、生涯探索'
        }
      ],
      homenews: [
        {
          title: '2020/8/7薩提爾模式婚姻伴侶治療',
          time: '2020年7月16日．1分鐘',
          newssrc: 'https://picsum.photos/1920/1080/?random=10',
          sta: '456次瀏覽'
        }
      ],
      homearticles: [
        {
          src: 'https://picsum.photos/1920/1080/?random=11',
          title: '《也許你該找人聊聊》：記得沙特那句「他人即地獄」嗎？有時候自己即地獄',
          sta: '468'
        },
        {
          src: 'https://picsum.photos/1920/1080/?random=12',
          title: '【你是在安慰？還是在「講道理」？--《關係黑洞》】',
          sta: '758'
        },
        {
          src: 'https://picsum.photos/1920/1080/?random=13',
          title: '我就是不想說，因為你不會懂：怎樣應對「逃避依附」的沉默',
          sta: '4825'
        }
      ]
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
