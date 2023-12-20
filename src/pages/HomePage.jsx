import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <>
      <Link to="/beers">
        <img src={beersImg} alt="beersImg" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum non
          expedita repudiandae. Voluptates, magnam libero! Dolor temporibus eos
          architecto delectus, quisquam consequatur voluptatibus. Vero quas
          mollitia ipsum libero quod quae.
        </p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="randomBeerImg" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum non
          expedita repudiandae. Voluptates, magnam libero! Dolor temporibus eos
          architecto delectus, quisquam consequatur voluptatibus. Vero quas
          mollitia ipsum libero quod quae.
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerImg} alt="newBeerImg" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum non
          expedita repudiandae. Voluptates, magnam libero! Dolor temporibus eos
          architecto delectus, quisquam consequatur voluptatibus. Vero quas
          mollitia ipsum libero quod quae.
        </p>
      </Link>
    </>
  );
}

export default HomePage;
