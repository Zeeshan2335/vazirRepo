import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Showcoustomer = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const getApi = async () => {
    const result = await axios.get("http://localhost:5050");
    setData(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleRoute = () => {};

  const handleUpdate = (item) => {
    Navigate("/update", { state: item });
  };

  return (
    <Grid container spacing={2}>
      {data.map((item) => {
        return (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h1>{item.name}</h1>
                <h2>{item.age}</h2>
                <h3>{item.city}</h3>
                <h4>{item.mobile}</h4>
                {/* <Link to={`${"/update/"}${item.custId}`}> */}
                <Button variant="contained" onClick={() => handleUpdate(item)}>
                  Update
                </Button>
                {/* </Link>{" "} */}
                <br /> <br />
                <Button variant="contained">Delete</Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Showcoustomer;
