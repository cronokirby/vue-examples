Vue.component('my-button', {
  data: function () {
    return {
      checked: false
    }
  },
  methods: {
    toggle: function () {
      this.checked = !this.checked
      this.$emit('toggle')
    }
  },
  template:
    `<button v-on:click="toggle">
      {{ checked ? "On" : "Off" }}
    </button>`
})

new Vue({
  el: "#app",
  data: {
    clicks: 0
  }
})