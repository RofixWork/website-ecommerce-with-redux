const initState = {
  products: [
    {
      id: 1,
      title: "Modern Shell Chair",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-classic-chair-300x372.jpg",
      price: 200,
      discount: 3,
      discountPrice: 200 - (3 / 100) * 200,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 2,
      title: "Pendant Lamp",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-pendant-lamp-450x558.jpg",
      price: 80,
      discount: 4,
      discountPrice: 80 - (4 / 100) * 80,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 3,
      title: "Lighthouse Lantern",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-lighthouse-lantern-2-450x558.jpg",
      price: 85,
      discount: 4,
      discountPrice: 85 - (4 / 100) * 85,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 4,
      title: "Wall Clock",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-wall-clock-2-450x558.jpg",
      price: 70,
      discount: 2,
      discountPrice: 70 - (2 / 100) * 70,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 5,
      title: "Hans Backpack",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-hans-backpack-2-450x558.jpg",
      price: 74,
      discount: 3,
      discountPrice: 74 - (3 / 100) * 74,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 6,
      title: "Specs Sunglasses",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-specs-sunglasses-450x558.jpg",
      price: 90,
      discount: 3,
      discountPrice: 90 - (3 / 100) * 90,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 7,
      title: "Press Coffee Maker",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-press-coffee-maker-450x558.jpg",
      price: 94,
      discount: 6,
      discountPrice: 94 - (6 / 100) * 94,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 8,
      title: "Door Bumper",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-door-bumper-300x372.jpg",
      price: 120,
      discount: 4,
      discountPrice: 120 - (4 / 100) * 120,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 9,
      title: "Laptop Bag",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-laptop-bag-450x558.jpg",
      price: 150,
      discount: 4,
      discountPrice: 150 - (4 / 100) * 150,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 10,
      title: "Plain Glass Bottle",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-plain-glassbottle-450x558.jpg",
      price: 80,
      discount: 2,
      discountPrice: 80 - (2 / 100) * 80,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 11,
      title: "Ceramic Tealight Holder",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-ceramic-tealight-holder-300x372.jpg",
      price: 40,
      discount: 2,
      discountPrice: 40 - (2 / 100) * 40,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 12,
      title: "Canvas Basket",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-canvas-basket-300x372.jpg",
      price: 30,
      discount: 1,
      discountPrice: 30 - (1 / 100) * 30,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 13,
      title: "Amber Body Lotion",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-lily-body-lotion-450x558.jpg",
      price: 60,
      discount: 2,
      discountPrice: 60 - (2 / 100) * 60,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 14,
      title: "Havana Sunglasses",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-havana-sunglasses-450x558.jpg",
      price: 70,
      discount: 2,
      discountPrice: 70 - (2 / 100) * 70,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 15,
      title: "Henry Backpack",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-henry-backpack-450x558.jpg",
      price: 90,
      discount: 4,
      discountPrice: 90 - (4 / 100) * 90,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 16,
      title: "Striped Canvas Bag",
      img:
        "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-striped-canvas-bag-450x558.jpg",
      price: 60,
      discount: 2,
      discountPrice: 60 - (2 / 100) * 60,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 17,
      title: "Ceramic Watch",
      img:
        "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-ceramic-watch-2-450x558.jpg",
      price: 50,
      discount: 2,
      discountPrice: 50 - (2 / 100) * 50,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 18,
      title: "Magazine Basket",
      img:
        "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-magazine-basket-450x558.jpg",
      price: 30,
      discount: 4,
      discountPrice: 30 - (4 / 100) * 30,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 19,
      title: "Thermo Flask",
      img:
        "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-thermo-flask-2-450x558.jpg",
      price: 80,
      discount: 2,
      discountPrice: 80 - (2 / 100) * 80,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
    {
      id: 20,
      title: "Stained Glass Vase",
      img:
        "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-stained-glass-vase-450x558.jpg",
      price: 55,
      discount: 3,
      discountPrice: 55 - (3 / 100) * 55,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum non quos illo quasi eius, cum labore veniam iure ab magnam sapiente nostrum pariatur autem deserunt incidunt deleniti possimus tempore debitis neque ad placeat adipisci maiores quas! Expedita, at minima!",
    },
  ],
  product: {},
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      const findProduct = state.products.find(
        (pr) => pr.id === parseInt(action.payload)
      );
      return { ...state, product: findProduct };
    default:
      return state;
  }
};
export default ProductsReducer;
