import Meal from "./Meal";

const Menu = ({ data }) => {
  return (
    <>
      <div className="menu-title">
        <h2>{data.name}</h2>
        <div className="menu-offer">
          {data.meals.map((e) => {
            return <Meal data={e} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
