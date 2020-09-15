app.factory('Restaurant', function () {
  const restaurants = [
    {
      id: 1,
      name: "Rajasthan Heritage",
      ownerName: "Surendra Kumar Goyal",
      contact: "8290462483",
      location: {
        address: "SH-25, Alwar By-pass road",
        city: "Tapukara",
        state: "Rajasthan",
        pincode: "301707"
      },
      cuisines: [
        { name: "Chinese", priority: 1 },
        { name: "North Indian", priority: 2 }
      ],
      menu: [
        {
          cuisine: 'Chinese',
          priority: 1,
          dishes: [
            {
              name: "Dim Sums",
              price: 80,
              description: 'Small bite-sized rounds stuffed with veggies or meat. Dimsums are perfect steamed snack to delight those evening cravings.'
            },
            {
              name: 'Haka Noodles',
              price: '160',
              description: 'Boiled noodles are stir fried with sauces and vegetables or meats.'
            }
          ]
        },
        {
          cuisine: 'North Indian',
          priority: 2,
          dishes: [
            {
              name: 'Chole bhature',
              price: '160',
              description: 'Main course with Chick peas, assorted spices, wheat flour and bhatura yeast.'
            },
            {
              name: 'Daal baati churma',
              price: '320',
              description: 'a Rajasthani specialty'
            }
          ]
        }
      ]

    },
    {
      id: 2,
      name: "Haldirams",
      ownerName: "Hemant Goyal",
      contact: "9351974895",
      location: {
        address: "V Square Mall, SH-25, Alwar By-pass road",
        city: "Bhiwadi",
        state: "Rajasthan",
        pincode: "301019"
      }

    }
  ]

  function getRestaurants() {
    return restaurants;
  }

  function getRestaurantById(id) {
    return restaurants.find(res => res.id == id);
  }

  function createOrUpdateRestaurant(data) {
    if (data.id) {
      let restaurant = getRestaurantById(data.id)
      restaurant = { ...data };
      console.log(restaurants);
    } else {
      data.id = restaurants.length + 1;
      restaurants.push(data);
      console.log(restaurants)
    }
  }

  return {
    getRestaurants: getRestaurants,
    createOrUpdateRestaurant,
    getRestaurantById
  }
});