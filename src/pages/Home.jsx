import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "60px" }}>
      Home
      <Button
        onClick={() => {
          navigate("/formula-elements");
        }}
      >
        Add Formula Element
      </Button>
    </div>
  );
}
