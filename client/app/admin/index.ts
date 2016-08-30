'use strict';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('node4dearpiggyApp.admin', [
  'node4dearpiggyApp.auth',
  'ui.router'
])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
