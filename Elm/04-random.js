new Vue({
  el: "#app",
  data: {
    die: 1
  },
  methods: {
    roll: function () {
      this.die = Math.floor(Math.random() * 6) + 1
    }
  }
})
