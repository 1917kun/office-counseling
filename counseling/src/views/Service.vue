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
          b-col.professioncol2(cols="12" sm="4" v-for="(homeservice, index) in homeservices" :key="index")
            img.img2(:src='homeservice.src')
            p {{homeservice.span}}
            p {{homeservice.text}}
    //- -----------------------------------------------------------
    b-container(fluid)(:style="{background:'white',height:'80vh'}")
</template>

<script>
export default {
  data () {
    return {
      homeservices: [
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
      ]
    }
  }
}
</script>
