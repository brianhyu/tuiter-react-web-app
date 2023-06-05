import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits.tuits);
  console.log(tuits)
  // if (!Array.isArray(tuits)) {
  //   return <p>No tuits found.</p>;
  // }

  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};

export default TuitList;
