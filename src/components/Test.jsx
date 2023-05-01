import React, { useState } from "react";
import { Typography, TextField,FormGroup,FormControlLabel,Checkbox  } from "@mui/material";
import { Button } from "@mui/material";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleCahnge = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form style={{display:'flex', flexDirection:"column"}} onSubmit={handleSubmit}>
        <TextField
          name="name"
          sx={{
            marginRight: "10px",
          }}
          value={inputs.name}
          type="text"
          onChange={handleCahnge}
          placeholder="Name"
          variant="outlined"
        />

        <TextField
          name="email"
          value={inputs.email}
          onChange={handleCahnge}
          placeholder="Email"
          type="email"
          variant="filled"
          sx={{
            marginRight: "10px",
          }}
        />

        <TextField
          name="password"
          value={inputs.password}
          onChange={handleCahnge}
          sx={{
            marginRight: "10px",
          }}
          type="password"
          placeholder="Password"
          variant="standard"
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Test;
