import axios from 'axios'

const EMPTY_ARRAY  = [],
      EMPTY_STRING = '',
      EMPTY_OBJECT = {}

const state = {
  fail: false,
  success: false,
  submitted: false,
  messages: EMPTY_ARRAY,
}

const osdi = {
  state,
  props: {
    request: {
      base: EMPTY_STRING,
      endpoint: EMPTY_STRING,
    },
    form: {
      selector: EMPTY_STRING,
      obj: EMPTY_OBJECT,
    },
    person: {
      given_name: EMPTY_STRING,
      family_name: EMPTY_STRING,
      email_addresses: {
        'address': EMPTY_STRING,
      },
      street: EMPTY_STRING,
      locality: EMPTY_STRING,
      region: EMPTY_STRING,
      postal_code: EMPTY_STRING,
      country: EMPTY_STRING,
      phone_number: EMPTY_STRING,
    },
    tags: EMPTY_ARRAY,
    triggers: EMPTY_ARRAY,
  },

  init: function() {
    this.props.form.selector = 'osdi-form'
    let domObj = this.props.form.selector ? document.querySelector(this.props.form.selector) : null
    this.props.form.obj = domObj ? domObj : null
    if(this.props.form.obj) {
      let messages = document.createElement('div')
          messages.setAttribute('data-osdi', null)
          messages.setAttribute('data-osdi-messages', null)
          messages.classList.add(['osdi','message'])

      this.props.form.obj.prepend(messages)
      this.bindFields()
      this.props.request.endpoint = domObj.getAttribute('[data-osdi-id]')
    }
    return this
  },

  enableAutoresponder: function() {
    this.props.triggers.enableAutoresponder = TRUE
  },

  addTags: function(tags) {
    for(let tag of tags) {
      this.tags.push(tag)
    }
    return this
  },

  submit: function() {
    this.state.submitted = TRUE
    if(this.validateForm()) {
      this.post()
      return this
    }
    this.fail(this.validateForm())
    return this
  },

  validateForm: function() {
    return (this.person.email_addresses.address &&
       this.props.request.base &&
       this.props.request.endpoint) ? true : false
  },

  bindFields: function() {
    for(let field of document.querySelector(this.form.selector +' [data-osdi-field]')) {
      let fieldSelector = field.getAttribute('data-osdi-value')
      field.addEventListener('change', function(e) {
        this.props.person[fieldSelector] = e.target.value()
      })
    }
    return this
  },

  post: function() {
    try {
      axios.post(this.props.selector.endpoint, {
        person: this.props.person,
        add_tags: this.props.tags,
      })
      return this
    } catch (error) {
      this.fail(error)
      return this
    }
  },

  done: function() {
    return this
  },

  fail: function(error) {
    this.state.fail = TRUE,
    this.state.messages.push(error)
    return this
  },

  success: function() {
    return this
  },

  always: function() {
    return this
  },
}

export default osdi