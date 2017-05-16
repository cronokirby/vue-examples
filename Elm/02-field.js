new Vue({
  el: "#app",
  data: {
    input: ""
  },
  computed: {
    reversed: function () {
      return this.input.split('').reverse().join('')
    }
  }
})
