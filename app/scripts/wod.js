/* globals angular */
var mod = angular.module('wod', []);

mod.config(['$interpolateProvider', function(interpolateProvider){
  interpolateProvider.startSymbol('{[').endSymbol(']}');
}]);

mod.run([
  '$rootScope',
  function (rootScope) {
  'use strict';

  function broadcast(event) {
    return function (e) {
      rootScope.$broadcast(e.srcElement.id + '.' + event, e);
    };
  }

  function addListener(event) {
    document.addEventListener(event, broadcast(event));
  }

  addListener('paper-open');
  addListener('paper-close');
  addListener('iron-activate');
}]);

mod.controller('backgroundCtrl', ['$scope', function (scope) {
  scope.isVirtueOpened = false;

  function openVirtue(e) {
    scope.$evalAsync(function () {
      scope.isVirtueOpened = true;
    });
  }

  function closeVirtue() {
    scope.$evalAsync(function () {
      scope.isVirtueOpened = false;
    });
  }

  scope.$on('virtue.paper-open', openVirtue);
  scope.$on('virtue.paper-close', closeVirtue);
  scope.$on('virtue.iron-activate', closeVirtue);
}]);
