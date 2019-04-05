import actionnetwork from './vanilla/action-network'
import animations from './vanilla/animations'
import moneybags from './vanilla/moneybags'
import CMS from 'netlify-cms'

CMS.registerPreviewTemplate('my-template', MyTemplate)

actionnetwork
    .changeSubmitButtonText('Let \'er rip!')
    .addFocusBorder()

animations
    .placeSVG('.hero__vector', moneybags)
    .doParallax()
    .runAnimation()

doEmoji