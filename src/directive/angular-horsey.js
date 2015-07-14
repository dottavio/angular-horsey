'use strict';

/**
 * @ngdoc directive
 * @name angular-horsey
 * @restrict A
 */
angular
  .module('angular-horsey')
  .directive('angularHorsey', function(){
    var link = function(scope, element, attrs){

      // let's wait for the suggestions
      var stopWatch = scope.$watch(function(scope){
        return scope[attrs.suggestions];
      }, function(theSuggestions){
        if(angular.isDefined(theSuggestions) && angular.isArray(theSuggestions)){
          stopWatch();
          var pluginconfig = angular.extend({
            suggestions: theSuggestions,
          }, scope[attrs.pluginConf]);
          scope.$parent[attrs.expose] = horsey(element[0], pluginconfig);
        }
      });

    };

    return {
      scope: true,
      restrict: 'A',
      link: link
    };
  });

