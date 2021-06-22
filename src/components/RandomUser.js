import React, { useEffect, useState } from "react";
import axios from "axios";

const randomData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      console.log(data);
      return JSON.stringify(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const RandomUser = () => {
  const [random, setRandom] = useState("");
  useEffect(() => {});

  return (
    <div>
      <button onClick={() => randomData()}>Fetch Random Data</button>
    </div>
  );
};

export default RandomUser;
