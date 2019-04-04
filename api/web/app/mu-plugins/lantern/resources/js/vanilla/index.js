import marth from './components/marth'
import actionnetwork from './components/action-network'
import animations from './components/animations'
import moneybags from './../svg/moneybags'
import axios from 'axios';

axios
  .get('https://wp-stasis-tax-the-rich.sfo2.cdn.digitaloceanspaces.com/app-tax-the-rich.json')
  .then(response => {
    const displayData = response.data;
    actionnetwork
      .addFocusBorder()
    marth.template(displayData)
  }).then(response => {
    animations.placeSVG('.hero__vector', moneybags)
      .doParallax()
      .runAnimation()
  })
  .catch(error => data = error);
