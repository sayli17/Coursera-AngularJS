(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.buyArray = ShoppingListCheckOffService.getBuyItems();

  buy.transferItem = function (itemIndex) {
    ShoppingListCheckOffService.transferItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.boughtArray = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var buyArray = [
    {
      name : "Apples",
      quantity: 10
    },
    {
      name : "Bananas",
      quantity: 5
    },
    {
      name : "Cookies",
      quantity: 3
    },
    {
      name : "Milk",
      quantity: 5
    },
    {
      name : "Chocolates",
      quantity: 7
    },
    {
      name : "Chips",
      quantity: 15
    }
  ];

  var boughtArray = [];

  service.getBuyItems = function () {
    return buyArray;
  };

  service.getBoughtItems = function () {
    return boughtArray;
  };

  service.transferItem = function (itemIndex) {
    var item = {
      name : buyArray[itemIndex].name,
      quantity : buyArray[itemIndex].quantity
    };
    buyArray.splice(itemIndex, 1);
    boughtArray.push(item);
  };
}

}
)();
