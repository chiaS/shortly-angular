angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $timeout) {
  // Your code here
  $scope.data = {
    links: [],
    hello: 'hello, Silvia!'
  };
  var push = function(data) {
    return function() {
      $scope.data.links.push(data);
    };
  };
  $timeout(function() {
    $scope.getLinks();
  }, 400);

  //$scope.data.links = res.data;
  ($scope.getLinks = function(){
    var links = Links.getLinks().then(function (res) {
      res.data.forEach(function(link, delay){
        $timeout(push(link), delay*175);
      });
    });
    return $scope.data.links;
  })();

  $scope.addLink = function(link) {
    Links.addLink(link);
  };
});

