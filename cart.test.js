const cart = require('./cart');
const cars = require('./data/cars.js');

describe('Cart Properties: ', () => {
  test('Empty Cart', () => {
    expect(Array.isArray(cart.cart)).toEqual(true)
    expect(cart.cart.length).toEqual(0)
  });

  test('Total default 0', () => {
    expect(cart.total).toEqual(0)
  });
});

describe('Cart Methods: ', () => {
  afterEach(() => {
    cart.cart = [];
    cart.total = 0;
  });

  test('addToCart method check length: ', () => {
    cart.addToCart( cars[0] )
    cart.addToCart( cars[1] )

    expect(cart.cart.length).toEqual(2)
    expect( cart.cart[0]).toEqual( cars[0] )
    expect( cart.cart[1]).toEqual( cars[1] )
  });

  test('addToCart changes length: ', () => {
    cart.addToCart( cars[0] )
    cart.addToCart( cars[7] )
    cart.addToCart( cars[4] )

    expect(cart.total).toEqual( cars[0].price + cars[7].price + cars[4].price)
  });

  test('removeFromCart removes: ', () => {
    cart.addToCart( cars[0] )
    cart.addToCart( cars[7] )
    cart.addToCart( cars[4] )

    cart.removeFromCart(1, cars[7].price);

    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[0]).toEqual(cars[0]);
    expect(cart.cart[1]).toEqual(cars[4])
  });

  test('remove from cart test: ', () => {
    cart.addToCart( cars[0] )
    cart.addToCart( cars[7] )
    cart.addToCart( cars[4] )

    cart.removeFromCart(1, cars[7].price);
    cart.removeFromCart(1, cars[4].price);

    expect(cart.total).toEqual(cars[0].price);
  });

  test('checkout: ', () => {
    cart.addToCart( cars[0] )
    cart.addToCart( cars[7] )
    cart.addToCart( cars[4] )

    cart.checkout();

    expect(cart.cart.length).toEqual(0);
    expect(cart.total).toEqual(0)
  });
});