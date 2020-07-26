<template lang="pug">
  #column
    b-container.h-100.d-flex.justify-content-center.align-items-center
      b-row
        b-col.columntop.d-flex.flex-column
          span.text-center(:style="{color:'#FFFFFF'}") EVENTS & CLASSES
          span.text-center(:style="{color:'#ef8c52',fontweight:'bolder'}") 傾心活動＆講座
    b-container.test.mt-5
      b-row
        b-col(cols="4" v-for="(column,index) in columns" :key="index").pb-5
          .box.m-auto
            img(:src="column.src")
            .text
              h5 {{ column.title }}
              .end
                .item1
                  font-awesome-icon(:icon="['fas', 'eye']").mr-2
                  p.mr-5 {{ column.num }}
                  p {{ column.leavemessage }}
                font-awesome-icon(:icon="['fab', 'gratipay']")
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '456',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '25',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '887',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '471',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '782',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '374',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '546',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '397',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '985',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '564',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '374',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '568',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '255',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '131',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '687',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '575',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '332',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '874',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '331',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '465',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '321',
          leavemessage: '留言'

        }
      ],
      footers: [
        {
          logoimg: '/img/logo.svg',
          imgsrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7080213475365!2d121.41715431500656!3d25.043980983967728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1591237554076!5m2!1szh-TW!2stw'
        }
      ]
    }
  }
}
</script>
