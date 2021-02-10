import Meal from "./Meal";

const Menu = ({ data, cart, setCart }) => {
  return (
    <>
      <div className="menu-box">
        {data.meals.length ? (
          <>
            {/* On récupère les name du tableau "catégorie" grâce au .map dans App.js */}
            <h2>{data.name}</h2>
            <div className="menu-offer">
              {/* On parcours maintenant le tableau "meals" et on retournera les éléments qui nous intéresse dans le composant Meal.js */}
              {data.meals.map((e, index) => {
                return (
                  <Meal key={e.id} data={e} cart={cart} setCart={setCart} />
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
