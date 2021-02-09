// Récupérer les données du restaurant - Partie Hero de la page
// 1ère colonne : h1 + p
// 2ème colonne : img

const Restaurant = ({ data }) => {
  return (
    <>
      <div className="col-1">
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <div className="col-2">
        <img src={data.restaurant.picture} alt="restaurant's pic" />
      </div>
    </>
  );
};

export default Restaurant;
