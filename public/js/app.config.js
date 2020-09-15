app.config(($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) => {
  // Configure a dark theme with primary foreground yellow
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('blue')
    .dark();

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'MainCtrl',
      templateUrl: '/templates/home.html',
    })
    .state('restaurant-details', {
      url: '/restaurants/:id',
      controller: 'RestaurantCtrl',
      templateUrl: '/templates/restaurantDetails.html',
    });

  $locationProvider.hashPrefix(''); // by default '!'
  $locationProvider.html5Mode(true);
})