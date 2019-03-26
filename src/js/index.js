import anime from 'animejs'
import tophat from './../svg/tophat'

document.addEventListener('can_embed_loaded', function() {
  const button = document.querySelector('input[name="commit"]')
  let textInputs = document.querySelectorAll([
    'input[type="text"]',
    'input[type="email"]'
  ])

  const focusBorderTemplate = `<span class="focus-border"></span>`

  textInputs.forEach(input => {
    input.outerHTML += focusBorderTemplate;
  })

  button.setAttribute('value', 'Tax the Rich')
})

const hatrack = document.querySelector('.hero__vector')
hatrack.innerHTML = tophat
const hatPath = document.querySelectorAll('.tophat path')

function animeFinish(hatPath) {
  anime({
    targets: hatPath,
    easing: 'easeInOutSine',
    delay: 2800,
    fillOpacity: 1,
    duration: 2000,
  })
}

anime({
  targets: hatPath,
  loop: false,
  opacity: [0, 1],
  easing: 'easeInOutSine',
  strokeDashoffset: [anime.setDashoffset, 10],
  delay: 1000,
  opacity: [0, 1],
  duration: 2200,
  onComplete: animeFinish(hatPath),
})