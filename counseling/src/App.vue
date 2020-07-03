<template lang="pug">
#app
  b-navbar(toggleable='lg' type='light' variant='info')
    b-navbar-brand(to='/service') NavBar
    b-navbar-toggle(target='nav-collapse')
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav.ml-auto
        b-nav-item(to='/service') 服務介紹
        b-nav-item(to='/team') 團隊介紹
        b-nav-item(to='/column') 專欄介紹
        b-nav-item(to='/reserve') 我要預約
        b-nav-form
          b-form-input.mr-sm-2(size='sm' placeholder='Search')
          b-button.my-2.my-sm-0(size='sm' type='submit') Search
  keep-alive
    router-view
</template>
<style lang="scss">
</style>
