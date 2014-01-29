/*
  Image plugin
  Adapted from Miller Medeiros requirejs-plugins
  https://github.com/millermedeiros/requirejs-plugins/blob/master/src/image.js
*/
module.exports = function(name, address, fetch, callback, errback) {    
  img = new Image();
  img.onerror = errback;
  img.onload = function(evt) {
    setTimeout(function() {
      callback('module.exports = new Image();\nmodule.exports.src = "' + address + '";');
      try {
        delete img.onload; //release memory - suggested by John Hann
      } catch(err) {
        img.onload = function() {}; // IE7 :(
      }
    }, 7);
  }
  img.src = address;
}
