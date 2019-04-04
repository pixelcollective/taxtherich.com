import axios from 'axios'

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
  // Make a request for a user with a given ID


  return {
    template: function() {
      axios.get('https://wp-stasis-tax-the-rich.sfo2.cdn.digitaloceanspaces.com/wp-stasis-tax-the-richstaging-auto-draft.json')
        .then(function (response) {
          let remoteData = {
            'title': response.data.advocacy_form_title,
            'subtitle': response.data.advocacy_form_subtitle,
            'disclaimer': response.data.advocacy_form_disclaimer,
            'petition_intro': response.data.context_heading,
            'petition_demands': [
              response.data.context_list_1_list_item,
              response.data.context_list_1_list_item,
              response.data.context_list_1_list_item,
            ],
            'petition_content': response.data.context_body,
            'provisions_intro': response.data.details_heading,
            'act_provisions': [
              "<span class=\"lead-sentence\">Restore the Top Income Tax Rate to 70 Percent on Incomes Over $10 million.</span> Proposed by Rep. Alexandria Ocasio-Cortez, this would return the income tax to it previous progressivity under Republican President Dwight Eisenhower.",
              "<span class=\"lead-sentence\">Levy an Annual Wealth Tax on the Super-Rich.</span> Senator Warren’s proposal is to levy an annual wealth tax of 2 percent on wealth over $50 million, with a 3 percent rate on wealth over $1 billion. This tax would put a brake on accumulated wealth and generate $3 trillion in revenue over the next decade.",
              "<span class=\"lead-sentence\">Strengthen the Estate Tax to Prevent Wealth Dynasties.</span> The estate tax is our nation’s only levy on the inherited wealth of multi-millionaires and billionaires. Senator Sanders closes loopholes in the current estate tax and adds a graduated rate, with a 77 percent rate on estates over $1 billion."
            ]
          }
          console.log(remoteData)
          this.templateNodes(remoteData)
              .templateLists(remoteData)
              .templateColumns(remoteData)
        })
        .catch(function (error) {
          console.log(error);
        });

        return this;
    },
    templateNodes: function(data) {
      for (let templateNode of document.querySelectorAll('[data-node]')) {
        if(data[templateNode.getAttribute('data-node')])
          templateNode.innerHTML = data[templateNode.getAttribute('data-node')]
      }

      return this
    },
    templateLists: function(config) {
      let listContents = EMPTY_STRING
      for (let templateList of document.querySelectorAll('[data-list]')) {
        for(let item of config[templateList.getAttribute('data-list')]) {
          if(item)
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
          if(item)
            columnContents += `<div class="column">${item}</div>`
        }
        templateColumns.innerHTML = `<div class="columns">${columnContents}</div>`
      }

      return this
    }
  }
})(document)

export default marth
