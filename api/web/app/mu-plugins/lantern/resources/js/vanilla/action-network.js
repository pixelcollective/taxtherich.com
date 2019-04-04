/**
 * {
  "identifiers": [
    "free_petitions:2"
  ],
  "comments" : "Stop doing the thing",
  "person" : {
    "family_name" : "Smith",
    "given_name" : "John",
    "postal_addresses" : [ { "postal_code" : "20009" }],
    "email_addresses" : [ { "address" : "jsmith@mail.com" }]
  },
  "add_tags": [
    "volunteer",
    "member"
  ],
  "triggers": {
    "autoresponse": {
      "enabled": true
    }
  }
}
 */

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