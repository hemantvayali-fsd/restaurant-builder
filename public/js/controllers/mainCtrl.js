app.controller('MainCtrl', function ($scope, $state, $mdSidenav, Restaurant) {
  $scope.restaurants = Restaurant.getRestaurants();


  $scope.saveRestaurant = function (data) {
    Restaurant.createOrUpdateRestaurant(data);
    $scope.restaurant = {};
    $scope.close();
  };

  $scope.editRestaurant = function (resId) {
    if (resId === 'new') {
      $scope.restaurant = null;
    } else {
      $scope.restaurant = Restaurant.getRestaurantById(resId);
    }
    $scope.toggleRight();
  }

  $scope.toggleRight = buildToggler('sidebar');
  $scope.isOpenRight = function () {
    return $mdSidenav('sidebar').isOpen();
  };

  /**
   * redirect to restaurant details page
   * @param {*} resId - restaurant id
   */
  $scope.fetchDetails = function (resId) {
    $state.go('restaurant-details', { id: resId });
  }

  $scope.close = function () {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('sidebar').close();
  };

  function buildToggler(navID) {
    return function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID).toggle();
    };
  }

});