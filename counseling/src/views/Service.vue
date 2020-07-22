<template lang="pug">
  #service
    b-container.h-100
    //- Professional ---------------------------------------------
    b-container.professiontop(fluid)(:style="{background:'#809ec925'}")
      b-container.professioncontainer.d-flex.justify-content-center
        b-row.professionrow
          b-col.professioncol1(cols="12")
            img.img1(src="https://picsum.photos/1920/1080/?random=1")
            h1(:style="{color:'#a9a9a9'}") 傾心的專業協助
            p 一般人進入諮商診所後往往因緊張而不知道該如何開口尋求幫助,本診所將會由醫師或是心理師,為您進行第一次會談評估,再建議最適合您的諮商或治療方式。
            p 無論是進行藥物治療、心理會談治療、給兒童的團體訓練課程，我們都有完整的醫療團隊提供。
          b-col.professioncol2(cols="12" sm="4" v-for="(service, index) in services" :key="index")
            img.img2(:src='service.src')
            p {{service.span}}
            p {{service.text}}
    //- -----------------------------------------------------------
    b-container(fluid)(:style="{background:'lightgreen'}")
      b-row
        b-col.servicebox1
          span SERVICES
          span 傾心專業服務
    b-container(:style="{background:'white'}")#service
      b-row.justify-content-center.text-center
        b-col.servicebox2(v-for="(servicedata,index) in servicedatas" :key="index" cols="12" sm="4" md="4")
          div {{servicedata.index}}
          div {{servicedata.title}}
          p {{servicedata.des}}
          a(href="#") 閱讀更多
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          src: 'https://picsum.photos/1920/1080/?random=55',
          span: '評估機制',
          text: '提供完整的評估與治療，只要會談完第一次，後續會為您安排適切的協助模式。'
        },
        {
          src: 'https://picsum.photos/1920/1080/?random=56',
          span: '藥物＆心理諮商',
          text: '提供完整的評估與治療，只要會談完第一次，後續會為您安排適切的協助模式。'
        },
        {
          src: 'https://picsum.photos/1920/1080/?random=57',
          span: '團體課程',
          text: '提供完整的評估與治療，只要會談完第一次，後續會為您安排適切的協助模式。'
        }
      ],
      servicedatas: [
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
      ]
    }
  }
}
</script>
