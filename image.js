/*
  Image plugin
  Adapted from Miller Medeiros requirejs-plugins
  https://github.com/millermedeiros/requirejs-plugins/blob/master/src/image.js
*/
module.exports = function(name, address, fetch, callback, errback) {
  img = new Image();
  img.onerror = errback;
  img.onload = function(evt) {
    window.__imagePluginStore.push(img);
    callback('module.exports = window.__imagePluginStore[' + window.__imagePluginStore.length - 1 + '];');
    try {
      delete img.onload; //release memory - suggested by John Hann
    } catch(err) {
      img.onload = function() {}; // IE7 :(
    }
  }
  img.src = address;
}
window.__imagePluginStore = [];
