import { films } from "../data.js";

function List() {
  return (
    <>
      <ul className="list">
        {films
        .sort((a,b)=>a.price - b.price)
        .map((film, idx) => {
          return (
            <li key={idx}>
              {film.title} ,,,, {film.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
