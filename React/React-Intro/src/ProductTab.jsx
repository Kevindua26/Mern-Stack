import { Product } from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "start",
  }
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil Pro 2" idx={1} />
      <Product title="Suica Card" idx={2} />
      <Product title="Portronics 140w Type-C Cable" idx={3} />
    </div>
  );
}

export { ProductTab };
