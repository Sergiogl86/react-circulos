import Circulo from "./Circulos";

function NumeroCirculos() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ul>
      {numbers.map((number) => (
        <Circulo key={number} />
      ))}
    </ul>
  );
}

export default NumeroCirculos;
