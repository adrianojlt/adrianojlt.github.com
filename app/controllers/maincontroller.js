
app.controller('MainController', function ( $scope, $location/*, $http */) {

  //console.log("Main controller");

  $scope.isActive = function (viewLocation) {

     var active = (viewLocation === $location.path());

     //console.log(viewLocation);
     //console.log(active);

     return active;
  };
});


app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  
  console.log("Blog Controller reporting for duty.");
});


app.controller('PageCtrl', function (/* $scope, $location, $http */) {

  console.log("Page Controller reporting for duty.");
});