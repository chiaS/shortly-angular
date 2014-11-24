angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };
  $scope.getLinks = function(links){
    return $scope.data.links;
  };
  $scope.addLink = function(link) {
    $scope.data.links.push(link);
  };
});

