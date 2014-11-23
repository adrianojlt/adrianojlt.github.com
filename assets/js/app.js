
/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.htm", controller: "PageCtrl"})
    // Pages
    .when("/clipx",     {templateUrl: "partials/clipx.htm", controller: "PageCtrl"})
    .when("/service",   {templateUrl: "partials/serviceManager.htm", controller: "PageCtrl"})
    .when("/services",  {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact",   {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/about",     {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // Blog
    .when("/blog",      {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    .when("/acc3menu",  {templateUrl:  "partials/accordionMenu.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404",  {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * 
 */
app.controller('MainController', function ( $scope, $location/*, $http */) {

  //console.log("Main controller");

  $scope.isActive = function (viewLocation) {

     var active = (viewLocation === $location.path());

     //console.log(viewLocation);
     //console.log(active);

     return active;
  };
});

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});