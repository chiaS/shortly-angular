angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };
  $scope.getLinks = function(){
    // var data = Links.getLinks();
    // return $scope.data.links;
  };
  $scope.addLink = function(link) {
    var data = Links.addLink(link);
    console.log(data);
    $scope.data.links.push(data);
  };
});

