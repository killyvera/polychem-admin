import { AddProduct } from "../components/ProductSelect";
import { ProductForm } from "../components/ProductForm";

function FormulaElement() {
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <AddProduct />
        <ProductForm />
      </div>
    </>
  );
}

export default FormulaElement;
