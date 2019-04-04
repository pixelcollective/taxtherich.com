import anime from 'animejs'
import Parallax from 'parallax-js'

const animations = (function(document) {
  return {
    placeSVG: function(selector, svg) {
      let canvas = document.querySelector(selector)
      canvas.innerHTML = svg

      return this
    },

    doParallax: function() {
      let scene = document.querySelector('[data-parallax]')
      new Parallax(scene, {
        relativeInput: true,
      })

      return this
    },

    runAnimation: function() {
      this.drawPaths()

      return this
    },

    drawPaths: function() {
      const animationTarget = document.querySelectorAll('.moneybags')

      anime({
        targets: animationTarget,
        translateX: 0,
        duration: 0,
        onComplete: this.moveRight(animationTarget),
      })

      anime({
        targets: document.querySelectorAll('.moneybags path'),
        loop: false,
        opacity: [0, 1],
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 10],
        delay: 1000,
        duration: 1200,
        onComplete: this.finish(),
      })

      return this
    },

    moveRight: function(animationTarget) {
      anime({
        targets: animationTarget,
        duration: 2000,
        translateX: [-1000, 0],
      })
    },

    finish: function() {
      anime({
        targets: document.querySelectorAll('.moneybags path.fill'),
        easing: 'easeInOutSine',
        delay: 800,
        fillOpacity: 1,
        color: '#006400',
        duration: 1000,
      })

      return this
    },
  }
})(document)

export default animations