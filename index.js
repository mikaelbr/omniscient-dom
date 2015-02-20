'use strict';

var React = require('react');
var omit = require('lodash.omit');
var assign = require('lodash.assign');

var elements = require('./elements');

function createComponents(omniscient){
  var components = {};

  elements.forEach(function(element){
    components[element] = omniscient(element, function(props, statics){
      var allProps = assign({}, omit(props, 'statics'), statics);
      return React.createElement(element, allProps);
    });
  });

  return components;
}

module.exports = createComponents;
