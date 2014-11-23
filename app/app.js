/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {

  var base = 'views/partials/';

  $routeProvider
  
    // Home
    .when("/",          {templateUrl: base + "home.htm", controller: "PageCtrl"})

    // Pages
    .when("/clipx",     {templateUrl: base + "clipx.htm", controller: "PageCtrl"})
    .when("/service",   {templateUrl: base + "serviceManager.htm", controller: "PageCtrl"})
    .when("/services",  {templateUrl: base + "services.html", controller: "PageCtrl"})
    .when("/contact",   {templateUrl: base + "contact.htm", controller: "PageCtrl"})
    .when("/about",     {templateUrl: base + "about.htm", controller: "PageCtrl"})

    // Blog
    .when("/blog",      {templateUrl: base + "blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: base + "blog_item.html", controller: "BlogCtrl"})
    .when("/acc3menu",  {templateUrl: base + "accordionMenu.htm", controller: "BlogCtrl"})

    // else 404
    .otherwise("/404",  {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

