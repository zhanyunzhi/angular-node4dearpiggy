'use strict';
import {UtilService} from './util.service';

export default angular.module('node4dearpiggyApp.util', [])
  .factory('Util', UtilService)
  .name;
