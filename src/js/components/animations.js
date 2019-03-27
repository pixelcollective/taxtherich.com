import anime from 'animejs'

const animations = (function(document) {
  return {
    placeSVG: function(selector, svg) {
      let canvas = document.querySelector(selector)
      canvas.innerHTML = svg

      return this
    },

    runAnimation: function() {
      this.drawPaths()

      return this
    },

    drawPaths: function() {
      anime({
        targets: document.querySelectorAll('.moneybags path'),
        loop: false,
        opacity: [0, 1],
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 10],
        delay: 1000,
        duration: 2200,
        onComplete: this.finish(),
      })

      return this
    },

    finish: function() {
      anime({
        targets: document.querySelectorAll('.moneybags path.fill'),
        easing: 'easeInOutSine',
        delay: 1800,
        fillOpacity: 1,
        duration: 1000,
      })

      return this
    },
  }
})(document)

export default animations