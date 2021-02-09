// On initialise au clic l'ajout d'un meal au panier
// On check aussi si un meal est déjà dans le panier. Si oui, alors on incrémente juste le counter de +1

const Meal = ({ data, cart, setCart }) => {
  return (
    <div
      className="meal"
      onClick={() => {
        // On trouve l'item s'il existe et on renvoit son index
        const itemIndex = cart.findIndex((e) => e.id === data.id);
        // Si différent -1 donc s'il existe déjà
        if (itemIndex !== -1) {
          let cartCopy = [...cart];
          // Modification de la quantité de l'item existant
          //  en utilisant l'index récupéré auparavant
          cartCopy[itemIndex].counter++;
          // On met en place le nouveau state
          setCart(cartCopy);
        } else {
          // Sinon on push un nouvel objet
          const newItem = {
            id: data.id,
            title: data.title,
            price: data.price,
            counter: 1,
          };
          let cartCopy = [...cart];
          cartCopy.push(newItem);
          setCart(cartCopy);
        }
      }}
    >
      <div className="meal-desc">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <span>{data.price} €</span>
      </div>
      <div className="meal-pic">
        {data.picture ? <img src={data.picture}></img> : null}
      </div>
    </div>
  );
};

export default Meal;
