import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import FlexView from "react-flexview/lib";
import * as Yup from "yup";
import { ProductsContext } from "../contexts/ProductContext";
import formContext from "../contexts/form/formContext";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  //   height: "60%",
  bgcolor: "white",
  borderRadius: "5px white",
  pt: 2,
  px: 4,
  pb: 3,
};
const padding = {
  padding: "5px",
};
function ProductionFrom(props) {
  const { isModalDisplayed, handleCreateProduction } = props;
  const { products } = useContext(ProductsContext);
  const { setProduction, isProductionEditable, production } =
    useContext(formContext);

  const [expectedPackages, setExpectedPackages] = useState(0);
  const [expectedPallets, setExpectedPallets] = useState();
  console.log("isProductionEditable", isProductionEditable);
  const calculateExpectedPackages = () => {};
  console.log("production", production);
  const formik = useFormik({
    initialValues: {
      name: isProductionEditable == true ? production?.name : "",
      product: isProductionEditable == true ? production?.product : "",
      expectedUnits:
        isProductionEditable == true ? production?.expectedUnits : 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      product: Yup.string().required("name is required"),
      expectedUnits: Yup.number().required("Expected Units are required"),
    }),
    onSubmit: (values) => {
      const data = { ...values, expectedPackages, expectedPallets };
      setProduction(data);
      handleCreateProduction();
    },
  });
  console.log("expectedPallets", expectedPallets);
  console.log("expectedPackages", expectedPackages);
  useEffect(() => {
    const { expectedUnits, product } = formik.values;
    if (expectedUnits && product) {
      const actualproduct = products.find((x) => x.name === product);
      console.log("Actual Product", actualproduct);
      console.log("expectedUnits", expectedUnits);
      setExpectedPackages(
        parseInt(expectedUnits / actualproduct?.unitsPerPackage)
      );
      setExpectedPallets(
        parseInt(expectedUnits / actualproduct?.packagesPerPallets)
      );
    }
  }, [formik.values.product]);
  return (
    <Modal
      open={isModalDisplayed}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <h2 id="parent-modal-title">Production Form</h2>
        <Divider />
        <form onSubmit={formik.handleSubmit}>
          <FlexView>
            <div style={{ width: "100%" }}>
              <FlexView>
                {" "}
                <TextField
                  style={padding}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  type="text"
                  margin="normal"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  variant="outlined"
                />
                <TextField
                  style={{ padding: "5px", marginTop: "15px" }}
                  error={Boolean(
                    formik.touched.expectedUnits && formik.errors.expectedUnits
                  )}
                  fullWidth
                  helperText={
                    formik.touched.expectedUnits && formik.errors.expectedUnits
                  }
                  label="Expected Units"
                  type="number"
                  name="expectedUnits"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.expectedUnits}
                  variant="outlined"
                />
              </FlexView>
              <FlexView>
                {" "}
                <FormControl fullWidth style={{ marginTop: "5px" }}>
                  <InputLabel>Products</InputLabel>
                  <Select
                    error={Boolean(
                      formik.touched.user && formik.errors.product
                    )}
                    fullWidth
                    // helperText={formik.touched.user && formik.errors.user}
                    label="product"
                    type="select"
                    name="product"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.product}
                    variant="outlined"
                  >
                    {products?.map((x, index) => (
                      <MenuItem value={x.name} key={index}>
                        {x.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  style={padding}
                  disabled={true}
                  fullWidth
                  label="Expected Packages"
                  type="number"
                  value={expectedPackages}
                  variant="outlined"
                />
              </FlexView>
              <FlexView>
                {" "}
                <TextField
                  style={padding}
                  disabled={true}
                  fullWidth
                  label="Expected Pallets"
                  type="number"
                  value={expectedPallets}
                  variant="outlined"
                />
              </FlexView>
            </div>
          </FlexView>
          <Divider />
          <FlexView hAlignContent="right">
            <Button
              style={{ margin: "5px" }}
              type="submit"
              value="submit"
              color="primary"
              variant="contained"
            >
              Add
            </Button>
            <Button
              style={{ margin: "5px" }}
              color="error"
              variant="contained"
              onClick={handleCreateProduction}
            >
              Cancel
            </Button>
          </FlexView>
        </form>
      </Box>
    </Modal>
  );
}

export default ProductionFrom;
