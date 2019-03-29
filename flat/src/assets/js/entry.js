"use strict";

import Utils from './utils'
import App from './App'

const routes = {
    '/'           : App
  , ''            : App
};

const router = async () => {
  let request = Utils.parseRequestURL()
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  console.log(page.render())
  console.log(page.afterRender());
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
