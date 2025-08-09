import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "14,999", "1,500", "1,200"];
  let newPrice = ["9,999", "12,499", "1,200", "999"];
  let desciption = [
    "Wireless mouse with ergonomic design",
    "Stylus for iPad with pressure sensitivity",
    "Rechargeable smart card for transit",
    "High-speed USB-C cable for fast charging",
  ];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{desciption[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export { Product };
