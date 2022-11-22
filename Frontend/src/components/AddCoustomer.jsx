import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
// import { v4 as uuidv4 } from 'uuid';
const AddCoustomer = () => {
  const [user, setUser] = useState({});

  const userAdd = async () => {
    const obj = { custId: uuid4(), ...user };
    console.log(obj);
    const res = await axios.post("http://localhost:5050/add", obj);
    console.log(res);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="name
            "
            onChange={(e) => setUser({ name: e.target.value })}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="age
            "
            onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="city
            "
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="mobile
            "
            onChange={(e) =>
              setUser({ ...user, mobile: Number(e.target.value) })
            }
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={userAdd}>
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCoustomer;
