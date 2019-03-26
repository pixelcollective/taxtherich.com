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