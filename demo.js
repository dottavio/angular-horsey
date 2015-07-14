
angular
  .module('app', ['angular-horsey'])
  .controller('demo', ['$scope', '$timeout',
  function($scope, $timeout){

    // you can put the suggestion on the scope,
    // as in example 1
    $scope.suggestions = ['banana1', 'apple', 'orange'];

    // or emulate a Ajax call timeout, check example 2
    $timeout(function () {
      $scope.suggestions2 = ['banana', 'apple', 'orange'];
    }, 2000);

    // let's use 'key value pairs' on example 3
    $scope.suggestions3 = [
      { value: 'banana', text: 'Bananas from Amazon Rainforest' },
      { value: 'apple', text: 'Red apples from New Zealand' },
      { value: 'orange', text: 'Oranges from Moscow' },
      { value: 'lemon', text: 'Juicy lemons from Amalfitan Coast' }
    ];

    $scope.suggestions4 = angular.copy($scope.suggestions3);
    // let's define a config for example 4
    $scope.configExample4 = {
      render: function (li, suggestion) {
        var image = '<img class="autofruit" src="http://bevacqua.github.io/horsey/example/fruits/' + suggestion.value + '.png" /> ';
        li.innerHTML = image + suggestion.text;
      }
    };

    $scope.suggestions5 = [
      { value: 'banana', text: 'Bananas from Amazon Rainforest' },
      { value: 'banana-boat', text: 'Banana Boat' },
      { value: 'apple', text: 'Red apples from New Zealand' },
      { value: 'apple-cider', text: 'Red apple cider beer' },
      { value: 'orange', text: 'Oranges from Moscow' },
      { value: 'orange-vodka', text: 'Classic orange vodka cocktail' },
      { value: 'lemon', text: 'Juicy lemons from Amalfitan Coast' }
    ];
    // and another custom config for example 5
    $scope.configExample5 = {
      limit: 2
    };

    // finally we have an example on a textarea
    $scope.suggestions6 = [
      { value: '@michael', text: 'Michael Jackson' },
      { value: '@jack', text: 'Jack Johnson' },
      { value: '@ozzy', text: 'Ozzy Osbourne' },
    ];
    // and another custom config for example 5
    $scope.configExample6 = {
      anchor: '@'
    };


    $scope.suggestions5 = angular.copy($scope.suggestions);
    $scope.suggestions6 = angular.copy($scope.suggestions);
    $scope.suggestions7 = angular.copy($scope.suggestions);
    $scope.suggestions8 = angular.copy($scope.suggestions);
    // Horsey API for example
    $scope.hy2API = null;

    // Let's use the API to add a random item
    $scope.addRandomItem = function(){
      var r = Math.floor(Math.random() * 100) + 1  ;
      $scope.hy2API.add('Banana random '+r );
    };

  }]);
