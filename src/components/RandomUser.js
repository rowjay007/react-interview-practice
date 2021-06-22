import React from "react";
import axios from "axios";

axios.get("https://randomuser.me/api").then((response) => {
  console.log(response);
});

const RandomUser = () => {
  return (
    <div>
      <button>Fetch Random Data</button>
    </div>
  );
};

export default RandomUser;
