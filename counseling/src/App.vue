<template lang="pug">
#app
  nav#nav.container
      img(src="https://picsum.photos/1920/1080/?random=1" width="84" height="57" @click="redirect" :style="{cursor:'pointer'}")
      b-link(v-for="(link,index) in links" :key="index" :to='link.link') {{ link.text }}
      div
        p 診所專線
        p 02-89416928
  keep-alive
    router-view(:style="{height:'calc(100vh - 90px)'}")
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          link: '/service', text: '服務項目'
        },
        {
          link: '/team', text: '團隊介紹'
        },
        {
          link: '/column', text: '活動&講座'
        },
        {
          link: '/reserve', text: '初診預約'
        }
      ]
    }
  },
  methods: {
    redirect () {
      this.$router.push('/')
    }
  }
}
</script>
