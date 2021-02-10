import Items from "./Items";

const Cart = ({ cart, setCart }) => {
  let subtotal = 0;
  let delivery = 2.5;

  return (
    <div className="cart">
      <button className={cart.length > 0 ? "button" : "button disabled"}>
        Valider mon panier
      </button>
      <div className="items">
        <Items cart={cart} setCart={setCart} />
      </div>
      {cart.length > 0 ? (
        <>
          <div className="operation">
            <div>
              <span>Sous-total</span>
              {cart.map((e) => {
                subtotal += Number(e.price) * e.counter;
              })}
              <span>{subtotal.toFixed(2)} €</span>
            </div>

            <div>
              <span>Frais de livraison</span>
              <span>{delivery.toFixed(2)} €</span>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{(subtotal + delivery).toFixed(2)} €</span>
          </div>
        </>
      ) : (
        <div className="empty">Votre panier est vide</div>
      )}
    </div>
  );
};

export default Cart;
