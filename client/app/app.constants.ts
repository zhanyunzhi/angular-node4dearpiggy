'use strict';
const angular = require('angular');

export default angular.module('node4dearpiggyApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
