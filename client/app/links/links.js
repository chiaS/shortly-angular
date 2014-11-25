angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };

  ($scope.getLinks = function(){
    var links = Links.getLinks().then(function (res) {
      $scope.data.links = res.data;
    });
    return $scope.data.links;
  })();

  $scope.addLink = function(link) {
    Links.addLink(link);
  };
});

