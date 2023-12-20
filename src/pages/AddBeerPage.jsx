import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const hadleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      image_url: "https://images.punkapi.com/v2/keg.png",
      _id: uuidv4(),
      name: name,
      tagline: tagline,
      first_brewed: first_brewed,
      description: description,
      attenuation_level: attenuation_level,
      brewers_tips: brewers_tips,
      contributed_by: contributed_by,
    };

    const fetchdata = async () => {
      const addNewBeer = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      console.log(addNewBeer);
    };
    fetchdata();

    setName("");
    setTagline("");
    setDescription("");
    setFirst_brewed("");
    setBrewers_tips("");
    setAttenuation_level(0);
    setContributed_by("");
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={hadleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
        />
        <label htmlFor="brewers_tips">Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewers_tips(e.target.value)}
        />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuation_level(e.target.value)}
        />
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributed_by(e.target.value)}
        />
        <button type="submit">Add Beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
