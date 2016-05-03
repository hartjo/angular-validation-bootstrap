(function() {
  'use strict';

  /* global _ */

  /**
   * @ngdoc directive
   * @name ngValidationBootstrap.directive:ngValidationBootstrap
   * @description
   * Validation for bootstrap framwork
   * @author Jan Rainier Llarenas <llarenasjanrainier@gmail.com>
   */
  angular.module('ngValidationBootstrap', [])


  .directive('ngvbIsempty', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ctrl,$scope) {
        ctrl.$viewChangeListeners.push(function() {
          scope.$eval(attr.ngChange);
          var valid = [{ngvbIsfor: attr.ngvbIsfor}]
          var msgshow = [{ngvbIsmsg: attr.ngvbIsmsg}]
          if(ctrl.$viewValue == ''){
            scope[valid[0].ngvbIsfor] = 'has-error';
            scope[msgshow[0].ngvbIsmsg] = true;
          }
          else{
            scope[valid[0].ngvbIsfor] = '';
            scope[msgshow[0].ngvbIsmsg] = false;
          }
          
        });
      }
    };
  })

})();
    
