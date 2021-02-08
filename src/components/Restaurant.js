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
