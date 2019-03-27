const actionnetwork = (function(document) {
  const attributes = {
    focusBorderTemplate: String,
    button: Object,
    textInputs: Object,
  }

  document.addEventListener('can_embed_loaded', () => {
    attributes.focusBorderTemplate = `<span class="focus-border"></span>`
    attributes.button = document.querySelector('input[name="commit"]')
    attributes.textInputs = document.querySelectorAll([
      'input[type="text"]',
      'input[type="email"]'
    ])
  })

  return {
    changeSubmitButtonText: function(value) {
      document.addEventListener('can_embed_loaded', function() {
        attributes.button.setAttribute('value', value)
      })

      return this
    },

    addFocusBorder: function() {
      document.addEventListener('can_embed_loaded', function() {
        attributes.textInputs.forEach(input => {
          input.outerHTML += attributes.focusBorderTemplate;
        })
      })

      return this
    },

  }
})(document)

export default actionnetwork