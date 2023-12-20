import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RandomBeersPage() {
  const [beerDetails, setBeerDetails] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeerDetails(data);
    };
    fetchdata();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
        }}
      >
        <img style={{ width: "100px" }} src={beerDetails.image_url} alt="" />
        <h1>{beerDetails.name}</h1>
        <h2>{beerDetails.tagline}</h2>
        <h3>{beerDetails.attenuation_level}</h3>
        <h3>{beerDetails.first_brewed}</h3>
        <p>{beerDetails.description}</p>
        <h5>{beerDetails.contributed_by}</h5>
      </div>
    </>
  );
}

export default RandomBeersPage;
