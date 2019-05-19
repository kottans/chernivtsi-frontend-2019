function Item(id, title) {
    this.title = title;
    this.id = id;
}
Item.prototype.toString = function(){
    return ['Fooooooo'];
};
module.exports = Item;
