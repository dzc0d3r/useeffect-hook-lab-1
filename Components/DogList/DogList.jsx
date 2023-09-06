

export default function ShoppingList({ dogsList = [] }) {
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs
        <span role="img">
          🐶
        </span>
      </h3>
      {dogsList.map((dog) => (
        <img key={dog} src={dog} alt="" />
      ))}
    </div>
  );
}
