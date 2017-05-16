new Vue({
  el: "#app",
  data: {
    name: "",
    password: "",
    passwordAgain: ""
  },
  computed: {
    validation: function () {
      if (this.password === this.passwordAgain) {
        return {style: {color: 'green'}, text: "Ok"}
      } else {
        return {style: {color: 'red'}, text: "Passwords do not match"}
      }
    }
  }
})
