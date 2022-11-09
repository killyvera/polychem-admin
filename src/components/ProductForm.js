import {
  Button,
  Grid,
  TextField,
  InputLabel,
  Box,
  Stack,
  Avatar,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import FlexView from "react-flexview";
import { Input } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import formContext from "../contexts/form/formContext";
import { saveProduct } from "../services/FormServices";
import { ProductFormulaElement } from "./ProductFormulaElement";
import { RawMateriallist } from "./RawMaterialList";

export const ProductForm = () => {
  const { productElementForm } = useContext(formContext)

  const [isFormulaElementVisible, setIsFormulaElementVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      productCode: "",
      unitsPerPackage: "",
      packagePerPallet: "",
      avatar: "",
    },
    onSubmit: (values) => {
      const updatedValues = {
        ...values,
        formulaElements: productElementForm
      }
      console.log({ values, updatedValues });
      saveProduct(updatedValues)
      formik.resetForm();
    },
  });

  const showFormulaElement = () => {
    setIsFormulaElementVisible(true);
  }


  const hideFormulaElement = () => {
    setIsFormulaElementVisible(false);
  }

  return (
    <FlexView column hAlignContent="center" marginTop={"10%"}>

      {isFormulaElementVisible && (< ProductFormulaElement isFormulaElementVisible={isFormulaElementVisible} hideFormulaElement={hideFormulaElement} />)}

      <Card style={{ width: "60%" }}>
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <FlexView column style={{ margin: "10px" }}>
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Name"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.name}
                variant="outlined"
              />
            </FlexView>
            <FlexView column style={{ margin: "10px" }}>
              <TextField
                error={Boolean(
                  formik.touched.description && formik.errors.description
                )}
                fullWidth
                helperText={
                  formik.touched.description && formik.errors.description
                }
                label="Description"
                name="description"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.description}
                variant="outlined"
              />
            </FlexView>
            <FlexView column style={{ margin: "10px" }}>
              <TextField
                error={Boolean(
                  formik.touched.productCode && formik.errors.productCode
                )}
                fullWidth
                helperText={
                  formik.touched.productCode && formik.errors.productCode
                }
                label="Product Code"
                name="productCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.productCode}
                variant="outlined"
              />
            </FlexView>
            <FlexView column style={{ margin: "10px" }}>
              <TextField
                error={Boolean(
                  formik.touched.unitsPerPackage &&
                  formik.errors.unitsPerPackage
                )}
                fullWidth
                helperText={
                  formik.touched.unitsPerPackage &&
                  formik.errors.unitsPerPackage
                }
                label="Units Per Package"
                name="unitsPerPackage"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.unitsPerPackage}
                variant="outlined"
              />
            </FlexView>

            <FlexView column style={{ margin: "10px" }}>
              {" "}
              <TextField
                error={Boolean(
                  formik.touched.packagePerPallet &&
                  formik.errors.packagePerPallet
                )}
                fullWidth
                helperText={
                  formik.touched.packagePerPallet &&
                  formik.errors.packagePerPallet
                }
                label="Package Per Pallet"
                name="packagePerPallet"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                required
                value={formik.values.packagePerPallet}
                variant="outlined"
              />
            </FlexView>
            <FlexView column style={{ margin: "10px" }}>
              {/* <Avatar
                  size="md"
                  src={
                    formik.values.avatar !== ""
                      ? formik.values.avatar
                      : avatarPreview
                  }
                /> */}
              {/* <AddCircleOutlineIcon fontSize="large" /> */}
              <TextField
                name="avatar"
                accept="image/*"
                id="contained-button-file"
                type="file"
                hidden
                onChange={(e) => {
                  const fileReader = new FileReader();
                  fileReader.onload = () => {
                    if (fileReader.readyState === 2) {
                      formik.setFieldValue("avatar", fileReader.result);
                    }
                  };
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
              />
            </FlexView>
            <FlexView column style={{ margin: "10px" }}>
              <Button variant="outlined" size="small" onClick={showFormulaElement}>
                <AddCircleOutlineIcon />
                Add Raw Materials
              </Button>
            </FlexView>
            <FlexView hAlignContent="center" column style={{ margin: "10px" }}>
              <RawMateriallist rawMaterials={productElementForm} />
            </FlexView>
          </CardContent>
          <FlexView hAlignContent="right">
            {" "}
            <Button
              variant="outlined"
              size="small"
              style={{ margin: "5px" }}
              type="submit"
            >
              Save
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="error"
              style={{ margin: "5px" }}
              onClick={formik.resetForm}
            >
              Cancel
            </Button>
          </FlexView>
        </form>
      </Card>
    </FlexView>
  );
};
