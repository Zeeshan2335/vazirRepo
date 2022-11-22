import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams, useLocation } from "react-router";
// import { v4 as uuid4 } from "uuid";
// import { v4 as uuidv4 } from 'uuid';
const Update = () => {
  const location = useLocation().state;
  const [user, setUser] = useState({});
  const [toUpd, setToUpd] = useState(location);
  // const param = useParams();
  console.log(location);
  const userUpdate = async () => {
    const obj = { user };
    console.log(obj);
    const res = await axios.post("http://localhost:5050/update", obj);
    console.log(res);
  };
  return (
    <div>
      <h1>Update</h1>
      <Grid container>
        <Grid item xs={2}>
          <TextField
            value={toUpd.name}
            variant="outlined"
            label="name"
            onChange={(e) => setUser({ name: e.target.value })}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={toUpd.age}
            variant="outlined"
            label="age
            "
            onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={toUpd.city}
            variant="outlined"
            label="city
            "
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={toUpd.mobile}
            variant="outlined"
            label="mobile
            "
            onChange={(e) =>
              setUser({ ...user, mobile: Number(e.target.value) })
            }
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={userUpdate}>
            update
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Update;
