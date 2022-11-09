import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import { useContext } from "react";
import FlexView from "react-flexview/lib";
import * as Yup from "yup";
import { ProductsContext } from "../contexts/ProductContext";
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
  const { isModalDisplayed, handleCreateProduction, setProduction } = props;
  const { products } = useContext(ProductsContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      product: "",
      expectedUnits: 0,
      expectedPackages: 0,
      expectedPallets: 0,
    },
    validationSchema: Yup.object({
      user: Yup.string().required("name is required"),
    }),
    onSubmit: (values) => {
      console.log("valuessss", values);
      setProduction(values);
      handleCreateProduction();
    },
  });
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
                <FormControl fullWidth style={{ marginTop: "20px" }}>
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
              </FlexView>
              <FlexView>
                {" "}
                <TextField
                  style={padding}
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
                <TextField
                  style={padding}
                  error={Boolean(
                    formik.touched.expectedPackages &&
                      formik.errors.expectedPackages
                  )}
                  fullWidth
                  helperText={
                    formik.touched.expectedPackages &&
                    formik.errors.expectedPackages
                  }
                  label="Expected Packages"
                  type="number"
                  name="expectedPackages"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.expectedPackages}
                  variant="outlined"
                />
              </FlexView>
              <FlexView>
                {" "}
                <TextField
                  style={padding}
                  error={Boolean(
                    formik.touched.expectedPallets &&
                      formik.errors.expectedPallets
                  )}
                  fullWidth
                  helperText={
                    formik.touched.expectedPallets &&
                    formik.errors.expectedPallets
                  }
                  label="Expected Pallets"
                  type="number"
                  name="expectedPallets"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.expectedPallets}
                  variant="outlined"
                />
              </FlexView>
            </div>
          </FlexView>
          <Divider />
          <FlexView hAlignContent="right" marginTop={"4%"}>
            <Button
              style={{ margin: "5px" }}
              type="submit"
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
