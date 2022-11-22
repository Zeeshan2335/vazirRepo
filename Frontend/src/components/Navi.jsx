import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <div>
      <Link to="/add">
        <Button variant="contained">add</Button>
      </Link>
      <Link to="/show">
        <Button variant="contained">Show</Button>
      </Link>
    </div>
  );
};

export default Navi;
