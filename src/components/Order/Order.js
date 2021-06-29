import { useState, useEffect } from "react";

export const Order = ({ data }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let x = 0;
    if (data.length > 0) {
      data.forEach((i, k) => {
        x += parseInt(i["price"]);
        console.log(i["price"]);
      });
      setPrice(x);
    }
  }, [data]);

  return (
    <div className="order">
      <div className="order_title">
        <h2>RESUMEN DE LA ORDEN</h2>
      </div>
      {data.map((item, key) => {
        return (
          <div className="order_body" key={key}>
            <img src={item.image} alt="" />
            <span className="description">{item.name}</span>
            <span>{item.price}</span>
          </div>
        );
      })}
      <div className="order_edit-btn">
        <button>Editar</button>
      </div>
      <div className="order_subtotal">
        <div className="st-price">
          <h3>SUBTOTAL</h3>
          <span>{price}</span>
        </div>
        <div className="shipping-cost">
          <h3>ENVÍO</h3>
          <span>A calcular</span>
        </div>
      </div>
      <div className="order_total">
        <h3>TOTAL</h3>
        <span>{price}</span>
      </div>
    </div>
  );
};
