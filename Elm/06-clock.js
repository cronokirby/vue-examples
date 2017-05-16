new Vue({
    el: "#app",
    data: {
      angle: 0
    },
    computed: {
      handX: function () {
        return 50 + 40 * Math.cos(this.angle)
      },
      handY: function () {
        return 50 + 40 * Math.sin(this.angle)
      }
    },
    created: function () {
      var vm = this
      var tween = new TWEEN.Tween({x: 0})
        .to({x: 60}, 60000) 
        .onUpdate(function() {
          // second => degree => radians
          vm.angle = Math.floor(this.x) * Math.PI / 30 
        })
        .repeat(Infinity)
        .start()

      function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate)
    }
})