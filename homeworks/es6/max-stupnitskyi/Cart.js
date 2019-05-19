function Cart() {
    this.items = [];
}
Cart.prototype.add = function (item, count = 1) {
    const index = this.getItemIndex(item);
    if (index === null) {
        this.items.push({
            item: item,
            count: count
        });
    } else {
        this.items[index] = {
            item: item,
            count: this.items[index].count + count
        };
    }
}
Cart.prototype.remove = function (item) {
    return null;
}
Cart.prototype.clear = function () {
    return null;
}
Cart.prototype.setCount = function () {
    return null;
}
Cart.prototype.getItemIndex = function(item) {
    return this.items.reduce((i, el, index) => {
        if (el.item.id === item.id) i = index;
        return i;
    }, null);
}


module.exports = Cart;
