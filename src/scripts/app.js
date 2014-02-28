var Vue = require('vue')

new Vue({
  el: "#v-app",
  methods: {
    tick: function() {
      var now    = new Date(),
          diff   = this.then - now

      this.days = Math.floor(diff/this.day)
      this.hours = Math.floor( (diff/this.hour) % 24)
      this.minutes = Math.floor( (diff/this.minute) % 60)
      this.seconds = Math.floor( (diff/this.second) % 60)
    }
  },
  created: function() {
    var self = this

    this.then = new Date('April 20, 2014')
    this.second = 1000
    this.minute = 1000 * 60
    this.hour   = 1000 * 60 * 60
    this.day    = 1000 * 60 * 60 * 24
    
    this.tick()
    
    this.interval = setInterval(function () {
      self.tick();
    }, 1000)
  }
})
