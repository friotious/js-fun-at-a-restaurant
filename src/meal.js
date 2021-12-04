function nameMenuItem(item) {
return `Delicious ${item}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
     name: name,
     price: price,
     type: type,
  }
  return menuItem;
}

function addIngredients(topping1, ingredients) {
  for (var i = 0; i < ingredients.length; i++ ) {
   if (ingredients[i] == topping1) {
   return
    }
  }
return ingredients.push(topping1)

}

function formatPrice(price) {
return `$${price}`
}

function decreasePrice(price) {
  return  (.9 * price)
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
  title: title,
  ingredients: ingredients,
  type: menuItemType,
  }
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
