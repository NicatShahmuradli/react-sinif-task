import { films } from "../data.js";

function Table() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rate</th>
            <th>Count</th>
          </tr>
        </thead>

        <tbody>
            {films.map((film, idx) => {
              return (
                <tr key={idx}>
                  <td>{film.id}</td>
                  <td>{film.title}</td>
                  <td>{film.price}</td>
                  <td>{film.category}</td>
                  <td>{film.rating.rate}</td>
                  <td>{film.rating.count}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
