import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Button } from "@mui/material";

const Test = ({ inputs, setInputs }) => {
  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          sx={{
            marginRight: "10px",
          }}
          value={inputs.name}
          type="text"
          onChange={handleChange}
          placeholder="Name"
          variant="outlined"
        />

        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
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
          onChange={handleChange}
          sx={{
            marginRight: "10px",
          }}
          type="password"
          placeholder="Password"
          variant="standard"
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={inputs.subscribed}
                onChange={() => {
                  setInputs((prev) => ({
                    ...prev,
                    subscribed: !inputs.subscribed,
                  }));
                }}
              />
            }
            label="Subscribed To Newsletter"
          />
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" onChange={handleChange}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </form>
    </div>
  );
};

export default Test;
