<template lang="pug">
  #reserve
    b-container.h-100.d-flex.justify-content-center.align-items-center
      b-row
        b-col.teamtop.d-flex.flex-column
          span.text-center(:style="{color:'#e9a040'}") RESERVATION
          span.text-center(:style="{color:'#4b7fc9',fontweight:'bolder'}") 初診線上預約
    //- explain--------------------------------------------------------------------------------
    b-container.explain
      b-row.justify-content-center
        b-col(cols="12" md="8" lg="6")
          strong 傾心初診線上預約，請填以下表格
          div
            span 健保初診
            span 費用為500元，20-30分鐘，自費心理諮商初診 1000元。
          div
            span 醫師將初步了解您的狀況。
            span (費用說明)
          p *請注意未滿20歲，建議由家長陪同看診，或是持家長同意書。
    //----form---------------------------------------------------------------------------------
    div
      b-form(@submit='onSubmit' @reset='onReset' v-if='show')
        b-form-group#input-group-1(label='Email address:' label-for='input-1' description='We\'ll never share your email with anyone else.')
          b-form-input#input-1(v-model='form.email' type='email' required placeholder='Enter email')
        b-form-group#input-group-2(label='Your Name:' label-for='input-2')
          b-form-input#input-2(v-model='form.name' required placeholder='Enter name')
        b-form-group#input-group-3(label='Food:' label-for='input-3')
          b-form-select#input-3(v-model='form.food' :options='foods' required)
        b-form-group#input-group-4
          b-form-checkbox-group#checkboxes-4(v-model='form.checked')
            b-form-checkbox(value='me') Check me out
            b-form-checkbox(value='that') Check that out
        b-button(type='submit' variant='primary') Submit
        b-button(type='reset' variant='danger') Reset
        b-card.mt-3(header='Form Data Result')
          pre.m-0 {{ form }}
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
