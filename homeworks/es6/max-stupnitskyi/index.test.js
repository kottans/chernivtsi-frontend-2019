const ShopCart = require('./index');
const Item = require('./Item');

describe('ES6 Recap Home Work', () => {
    test('We can add item to cart', () => {
        const cart = new ShopCart();
        const Foo = new Item(1, 'Foo');
        const Bar = new Item(2, 'Bar');
        cart.add(Foo, 3);
        cart.add(Bar, 2);
        expect(cart.items.length).toBe(2);
        cart.add(Foo, 7);
        expect(cart.items[0].count).toBe(10);
        expect(cart.items[1].count).toBe(2);
    });
    test('We can remove item from cart', () => {
        const cart = new ShopCart();
        const Foo = new Item(1, 'Foo');
        const Bar = new Item(2, 'Bar');
        cart.add(Foo, 3);
        cart.add(Bar, 2);
        cart.remove(Foo);
        expect(cart.items.length).toBe(1);
    });
    test('We can change quantity items in cart', () => {
        const cart = new ShopCart();
        const Foo = new Item(1, 'Foo');
        const Bar = new Item(2, 'Bar');
        cart.add(Foo, 3);
        cart.add(Bar, 2);
        cart.setCount(Bar, 20);
        expect(cart.items.length).toBe(2);
        expect(cart.items[0].count).toBe(3);
        expect(cart.items[1].count).toBe(20);
    });
    test('We can`t set negative amount', () => {
        const cart = new ShopCart();
        const Foo = new Item(1, 'Foo');
        const Bar = new Item(2, 'Bar');
        cart.add(Foo, 3);
        cart.add(Bar, 2);
        expect(() => cart.setCount(Bar, 0)).toThrow('Count should be greater than zero');
        expect(() => cart.setCount(Bar, -2)).toThrow('Count should be greater than zero');
    });
    test('We can convert Cart Object to String', () => {
        const cart = new ShopCart();
        const Foo = new Item(1, 'Foo');
        const Bar = new Item(2, 'Bar');
        cart.add(Foo, 10);
        cart.add(Bar, 22);
        expect(cart.toString()).toBe('In your cart 32 items');
    });
    test('We can clear our cart', () => {
        const cart = new ShopCart();
        const Foo = new Item(1, 'Foo');
        const Bar = new Item(2, 'Bar');
        cart.add(Foo, 10);
        cart.add(Bar, 22);
        cart.clear();
        expect(cart.items.length).toBe(0);
    });
    
});
