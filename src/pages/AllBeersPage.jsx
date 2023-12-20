import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    try {
      const fetchdata = async () => {
        const { data } = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeers(data);
      };
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {beers.map((one) => {
        return (
          <>
            <Link to={`/beers/${one._id}`}>
              <div
                key={one._id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div>
                  <img style={{ width: "50px" }} src={one.image_url} alt="" />
                </div>
                <div>
                  <h2>{one.name}</h2>
                  <h3>{one.tagline}</h3>
                  <h5>{one.contributed_by}</h5>
                </div>
              </div>
              <hr />
            </Link>
          </>
        );
      })}
    </>
  );
}

export default AllBeersPage;
