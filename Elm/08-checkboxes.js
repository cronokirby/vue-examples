Vue.component('labeled-checkbox', {
  props: ['name'],
  data: function () {
    return {
      checked: false
    }
  },
  template: 
    `<div>
      <input type="checkbox" v-bind:id="name" v-model="checked">
      <label v-bind:for="name">{{ name }}</label>
    </div>
     `
})

new Vue({
  el: "#app"
})