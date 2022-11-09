import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import FlexView from "react-flexview";
import { Router } from "react-router-dom";
import FormModal from "./FormModal";
import { ProductForm } from "./ProductForm";
import { ProductFormulaElement } from "./ProductFormulaElement";
import { Link } from "react-router-dom";

export const CreateForm = (props) => {
  // const { setProductElementFormValues } = useContext(formContext)
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const handleModalDisplayed = () => {
    setIsModalDisplayed((prev) => !prev);
  };
  return (
    <>
      <FlexView column hAlignContent="center" marginTop={"10%"}>
        <form>

          <FlexView column>
            <ul style={{ listStyle: "none" }}>
              <li >
                <Link to="/createForm">
                  <Button>
                    <AddCircleOutlineIcon />
                    Create Form
                  </Button>
                </Link>
              </li>
            </ul>
          </FlexView>
        </form>
      </FlexView>
      {isModalDisplayed && <FormModal isModalDisplayed={isModalDisplayed} />}
      {/* {isModalDisplayed && <ProductFormulaElement />} */}
      {/* {isModalDisplayed && <ProductForm />} */}
    </>
  );
};
