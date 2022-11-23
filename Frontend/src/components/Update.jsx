import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
const Update = () => {
  const reciveData = useLocation().state;
  const routeToShowCust = useNavigate();
  console.log(reciveData);

  const [userUpdated, setUserUpdated] = useState({});
  console.log(userUpdated);
  const userUpdate = async () => {
    const payload = { custId: reciveData, ...userUpdated };
    console.log("payload==>", payload);

    const result = await axios.post("http://localhost:5050/update", payload);
    routeToShowCust("/show");
  };

  return (
    <div>
      <h1>Update</h1>
      <Grid container>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="name"
            onChange={(e) => setUserUpdated({ name: e.target.value })}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="age
            "
            onChange={(e) =>
              setUserUpdated({ ...userUpdated, age: Number(e.target.value) })
            }
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="city
            "
            onChange={(e) =>
              setUserUpdated({ ...userUpdated, city: e.target.value })
            }
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="mobile
            "
            onChange={(e) =>
              setUserUpdated({ ...userUpdated, mobile: Number(e.target.value) })
            }
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={userUpdate}>
            User update
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Update;
