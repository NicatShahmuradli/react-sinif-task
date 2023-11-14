import { films } from "../data.js";

function Card() {
  let sortedData =  films.sort((a,b)=>a.rating.rate - b.rating.rate)
  let maxRating = sortedData[0].rating.rate


  return (
    <div className="card">
        <h1>
            {sortedData[0].title}
        </h1>

        <h3>
            Max Rating : {maxRating}
        </h3>
    </div>
   
  );
}

export default Card;
