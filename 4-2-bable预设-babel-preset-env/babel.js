"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var a = function a() {
  console.log('abck');
};

new Promise(function (resolve, reject) {
  resolve({
    'data': 'data'
  });
});
