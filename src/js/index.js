import data from './data.json'
import marth from './components/marth'
import actionnetwork from './components/action-network'
import animations from './components/animations'

import moneybags from './../svg/moneybags'

animations
  .placeSVG('.hero__vector', moneybags)
  .doParallax()
  .runAnimation()

actionnetwork
  .changeSubmitButtonText(data.button)
  .addFocusBorder()

marth.template(data)