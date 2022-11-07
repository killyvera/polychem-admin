import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import FlexView from "react-flexview";
import FormModal from "./FormModal";
import { ProductForm } from "./ProductForm";
import { ProductFormulaElement } from "./ProductFormulaElement";

export const CreateForm = () => {
  // const { setProductElementFormValues } = useContext(formContext)
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const handleModalDisplayed = () => {
    setIsModalDisplayed((prev) => !prev);
  };
  return (
    <>
      <FlexView column hAlignContent="center" marginTop={"10%"}>
        <Card style={{ width: "60%" }}>
          <form>
            <CardContent>
              <FlexView column style={{ margin: "10px" }}>
                <Button
                  onClick={handleModalDisplayed}
                  variant="outlined"
                  size="small"
                >
                  <AddCircleOutlineIcon />
                  Create Form
                </Button>
              </FlexView>
            </CardContent>
          </form>
        </Card>
      </FlexView>
      {isModalDisplayed && <FormModal isModalDisplayed={isModalDisplayed} />}
      {/* {isModalDisplayed && <ProductFormulaElement />} */}
      {/* {isModalDisplayed && <ProductForm />} */}
    </>
  );
};
