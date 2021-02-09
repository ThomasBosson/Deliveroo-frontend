import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Items = ({ cart, setCart }) => {
  return cart.map((e) => {
    return (
      <div className="items" key={e.id}>
        <div className="counter">
          <FontAwesomeIcon
            icon="minus"
            style={{ color: "#03cdbd", fontSize: 14, cursor: "pointer" }}
            onClick={() => {}}
          />
        </div>
      </div>
    );
  });
};

export default Items;
