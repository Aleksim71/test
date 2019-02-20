const $ = require('jquery');
const str = require('./constant');

const App = function () {
  console.log(str);
  $('body').html(str);
};

const app = new App();
