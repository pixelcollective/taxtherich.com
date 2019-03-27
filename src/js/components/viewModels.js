import ko from 'knockout'
import data from './../data/data.json'

const appModel = function () {
  var self = this;

  self.title = ko.observable(data.title);
  self.subtitle = ko.observable(data.subtitle);
  self.subtitle("I am a subtitle written purely from the Knockout-side!");
}

export default appModel