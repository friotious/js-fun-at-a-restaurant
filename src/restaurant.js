function createRestaurant(nameOfRestaurant) {
  var restaurant = {
    name: nameOfRestaurant,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant
}

//
//
//
// I had a ton of help with the following code, and while I understand whats going
// on, I'm not 100% and it would be difficult for me to repeat it, but I was trying to get a grasp
// of the last concepts!
//
//
//

function addMenuItem(typeOfRest, dish) {
  //typeOfRest.menus[dish.type].push(dish)
  //for (var i = 0; i < typeOfRest.menus.lunch.length; i++)
  if ("lunch" === dish.type && typeOfRest.menus.lunch.includes(dish) === false) {
     typeOfRest.menus.lunch.push(dish)
  } if ("breakfast" === dish.type && typeOfRest.menus.breakfast.includes(dish) === false) {
     typeOfRest.menus.breakfast.push(dish)
  } if ("dinner" === dish.type && typeOfRest.menus.dinner.includes(dish) === false) {
    typeOfRest.menus.dinner.push(dish)
  }
  return typeOfRest
}


function removeMenuItem(typeOfRest, dish, type) {
  for ( var i = 0; i < typeOfRest.menus[type].length; i++)
   if (typeOfRest.menus[type][i].name == dish) {
     return `No one is eating our ${dish} - it has been removed from the ${type} menu!`;
     typeOfRest.menus[type].splice(i, 1)
   }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
