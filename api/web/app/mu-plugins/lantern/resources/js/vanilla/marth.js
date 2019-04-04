const EMPTY_STRING = '',
      EMPTY_ARRAY  = [],
      EMPTY_OBJECT = {}

export function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ')
}

export function addClass(elem, className) {
  if (!hasClass(elem, className))
    elem.className += ' ' + className
}

export function removeClass (elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' '
  if (hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
          newClass = newClass.replace(' ' + className + ' ', ' ')
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}

export function toggleClass (elem, className) {
  if (hasClass(elem, className))
      removeClass(elem, className)
  else
      addClass(elem, className)
}

const marth = (function(document) {
  return {
    template: function(config) {
      this.templateNodes(config)
          .templateLists(config)
          .templateColumns(config)
    },
    templateNodes: function(config) {
      for (let templateNode of document.querySelectorAll('[data-node]')) {
        templateNode.innerHTML = config[templateNode.getAttribute('data-node')]
      }

      return this
    },
    templateLists: function(config) {
      let listContents = EMPTY_STRING
      for (let templateList of document.querySelectorAll('[data-list]')) {
        for(let item of config[templateList.getAttribute('data-list')]) {
          listContents += `<li>${item}</li>`
        }
        templateList.innerHTML = `<ul>${listContents}</ul>`
      }

      return this
    },
    templateColumns: function(config) {
      let columnContents = EMPTY_STRING
      for (let templateColumns of document.querySelectorAll('[data-columns]')) {
        for(let item of config[templateColumns.getAttribute('data-columns')]) {
          columnContents += `<div class="column">${item}</div>`
        }
        templateColumns.innerHTML = `<div class="columns">${columnContents}</div>`
      }

      return this
    }
  }
})(document)

export default marth
