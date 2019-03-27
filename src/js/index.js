import template from './config.json'
import marth from './components/marth'
import actionnetwork from './components/action-network'
import animations from './components/animations'

import moneybags from './../svg/moneybags'

animations
  .placeSVG('.hero__vector', moneybags)
  .runAnimation()

actionnetwork
  .changeSubmitButtonText(template.button)
  .addFocusBorder()

marth.template(template)