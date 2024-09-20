interface ProductProps {
  img_src: string;
  name: string;
  price: number;
}

function Product(props: ProductProps) {
  return (
    <div className="product">
      <img src={props.img_src} alt={props.name} />
      <div className="bold">{props.name}</div>
      <div>${props.price}</div>
      <button>BUY NOW</button>
    </div>
  );
}

export default Product;
