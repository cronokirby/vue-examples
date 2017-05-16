new Vue({
  el: "#app",
  data: {
    topic: "cats",
    gif: ""
  },
  methods: {
    newgif: function () {
      var url = "https://api.giphy.com/v1/gifs/random?"
              + "api_key=dc6zaTOxFJmzC&tag="
              + this.topic
      axios.get(url)
        .then(response => {
          this.gif = response["data"].data.image_url
        })
    }
  },
  created: function() {
    this.newgif()
  }
})
