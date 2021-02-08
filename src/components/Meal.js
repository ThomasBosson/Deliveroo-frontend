const Meal = ({ data }) => {
  return (
    <div className="meal">
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
