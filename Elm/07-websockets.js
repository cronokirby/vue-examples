new Vue({
  el: "#app",
  data: {
    input: "",
    messages: []
  },
  methods: {
    send: function () {
      this.socket.send(this.input)
      this.input = ""
    }
  },
  created: function () {
    this.socket = new WebSocket("ws://echo.websocket.org")
    this.socket.onmessage = msg => this.messages.unshift(msg.data)
  }
})