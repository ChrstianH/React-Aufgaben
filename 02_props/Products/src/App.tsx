import Product from "./components/Product";

const products = [
  {
    img_src:
      "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
    name: "CocoOil",
    price: 30,
  },
  {
    img_src:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Irgendwas",
    price: 60,
  },
  {
    img_src:
      "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
    name: "Was was",
    price: 20,
  },
];

function App() {
  return (
    <div className="products">
      {products.map(({ img_src, name, price }) => (
        <Product key={name} img_src={img_src} name={name} price={price} />
      ))}
    </div>
  );
}

export default App;
