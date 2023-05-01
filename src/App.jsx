import { useState } from "react";
import Test from "./components/Test";
import { Button } from "@mui/material";

function App() {
  const [inputs1, setInputs1] = useState({
    name: "",
    email: "",
    password: "",
    subscribed: false,
    age: "",
    gender: "",
  });

  const [inputs2, setInputs2] = useState({
    name: "",
    email: "",
    password: "",
    subscribed: false,
    age: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs1, inputs2);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Test inputs={inputs1} setInputs={setInputs1} />
      <Test inputs={inputs2} setInputs={setInputs2} />
      <Button
        sx={{ padding: "5px", backgroundColor: "red", color: "yellow" }}
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
