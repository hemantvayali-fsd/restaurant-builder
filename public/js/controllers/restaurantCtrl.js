app.controller('RestaurantCtrl', function ($scope, $mdSidenav, $stateParams, Restaurant) {

  // restaurant id
  const restId = $stateParams.id;

  // restaurant instance for corresponding id
  $scope.restaurant = Restaurant.getRestaurantById(restId);

  // Opens the add cuisine modal and initialises the cuisine object
  $scope.showCuisineModal = function () {
    $('#cuisineModal').modal('show')
  }

  $scope.addToMenu = function () {
    $scope.cuisine = null;
    $scope.dish = null;
    $scope.selectedCuisine = null;
    $scope.toggleRight();
  }

  $scope.addNewCuisine = function (cuisine) {
    $scope.restaurant.cuisines.push(cuisine);
    $scope.restaurant.menu.push({ cuisine: cuisine.name, priority: cuisine.priority, dishes: [] });
    console.log($scope.restaurant)
    $scope.cuisine = null;
  }

  $scope.addNewDish = function (dish, dishCuisine) {
    const menuItem = $scope.restaurant.menu.find(x => x.cuisine === dishCuisine);
    menuItem.dishes.push(dish);
    $scope.dish = null;
    $scope.dishCuisine = null;
    $scope.closeSidebar();
  }

  $scope.toggleRight = buildToggler('sidebar');
  $scope.closeSidebar = function () {
    $mdSidenav('sidebar').close();
  };
  function buildToggler(navID) {
    return function () {
      $mdSidenav(navID).toggle();
    };
  }

});