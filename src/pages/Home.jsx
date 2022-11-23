import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "60px" }}>
      Home
      <Button
        onClick={() => {
          navigate("/formulaElement");
        }}
      >
        Add Formula Element
      </Button>
      {/* <AddProduct />
      <ProductForm /> */}
    </div>
  );
}
