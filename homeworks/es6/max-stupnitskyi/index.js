const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

// удалить товар из корзины
Cart.prototype.remove = function (item) {
    const index = this.getItemIndex(item);
    this.items.splice(index, 1);
}

// очистить корзину
Cart.prototype.clear = function () {
    this.items.length = 0;
}

// изменить количество товара
Cart.prototype.setCount = function (item, count) {
    const index = this.getItemIndex(item);
    this.items[index].count = count;
    if(count <= 0) throw "Count should be greater than zero";
}

// посчитать количество товара
Cart.prototype.toString = function () {
    var sum = 0;
    for (var i = 0; i < this.items.length; i++) {
        sum += this.items[i].count;
    }
    return "In your cart " + sum + " items"
}

module.exports = ShopCart;
