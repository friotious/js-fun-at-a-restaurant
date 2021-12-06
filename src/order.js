function takeOrder(order, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders.length >= 3)
    return
  }
return deliveryOrders.push(order)
}

function refundOrder(orderNum, deliveryOrders) {
 for (var i = 0; i < deliveryOrders.length; i++) {
   if (orderNum == deliveryOrders[i].orderNumber)
    deliveryOrders.splice(i, 1)
 }
return deliveryOrders
}

function listItems(orders) {
  //console.log(orders, 'orders')
  var itemList = []
  for (var i = 0; i < orders.length; i++) {
  //return deliveryOrders[i].item
itemList.push(orders[i].item)
}
return itemList.join(', ')
}

function searchOrder(orders, item) {
for (var i = 0; i < orders.length; i++) {
  if (orders[i].item == item) {
    return true
     }
   }  return false
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
