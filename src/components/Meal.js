// On initialise au clic l'ajout d'un meal au panier
// On check aussi si un meal est déjà dans le panier. Si oui, alors on incrémente juste le counter de +1

const Meal = ({ data, cart, setCart }) => {
  return (
    <div
      className="meal"
      onClick={() => {
        // Pour chaque élément tu me retournes l'id de l'élément sur lequel je clique
        const existItem = cart.findIndex((e) => e.id === data.id);
        // Si l'item existe déjà dans le cart
        if (existItem !== -1) {
          let newCart = [...cart];
          // Modification de la quantité de l'item existant
          // en utilisant l'index récupéré auparavant
          newCart[existItem].counter++;
          // On met en place le nouveau state
          setCart(newCart);
        } else {
          // Sinon on push un nouvel objet
          const newItem = {
            id: data.id,
            title: data.title,
            price: data.price,
            counter: 1,
          };
          let newCart = [...cart];
          newCart.push(newItem);
          setCart(newCart);
        }
      }}
    >
      <div className="meal-description">
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
