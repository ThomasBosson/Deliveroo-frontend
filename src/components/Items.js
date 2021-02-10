import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Items = ({ cart, setCart }) => {
  return cart.map((e, index) => {
    return (
      <div className="item-box" key={e.id}>
        <div className="counter">
          <FontAwesomeIcon
            icon="minus"
            style={{ color: "#03cdbd", fontSize: 14, cursor: "pointer" }}
            onClick={() => {}}
          />
          <span style={{ color: "#868a8a", padding: "0 5px", fontSize: 20 }}>
            {e.counter}
          </span>
          <FontAwesomeIcon
            icon="plus"
            style={{ color: "#03cdbd", fontSize: 14, cursor: "pointer" }}
            onClick={() => {}}
          />
        </div>
        <div className="items-name">
          <span>{e.title}</span>
        </div>
        <div className="items-amount">
          <span>{(e.price * e.counter).toFixed(2)} €</span>
        </div>
      </div>
    );
  });
};

export default Items;
