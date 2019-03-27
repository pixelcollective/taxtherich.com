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
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    template: function(config) {
      for (let templateNode of document.querySelectorAll('[data-app]')) {
        templateNode.innerHTML = config[templateNode.getAttribute('data-app')]
      }
    }
  }
})(document)

export default marth
