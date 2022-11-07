import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import FlexView from "react-flexview/lib";
import * as Yup from "yup";
import { UsersContext } from "../contexts/UsersContext";
import { usersList } from "../services/UserServices";
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
  const { isModalDisplayed } = props;
  const { products } = useContext(ProductsContext);
  console.log("productsss", products);
  const formik = useFormik({
    initialValues: {
      name: "",
      product: "",
      expectedUnits: 0,
      expectedPackages: "",
      expectedPallets: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("name is required"),
    }),
    onSubmit: (values) => {},
  });
  return (
    <Modal
      open={true}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <h2 id="parent-modal-title">Get User</h2>
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
                  style={padding}
                  error={Boolean(
                    formik.touched.description && formik.errors.description
                  )}
                  fullWidth
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  label="Description"
                  margin="normal"
                  name="description"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.description}
                  variant="outlined"
                />
              </FlexView>
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
                  style={padding}
                  error={Boolean(
                    formik.touched.description && formik.errors.description
                  )}
                  fullWidth
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  label="Description"
                  margin="normal"
                  name="description"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.description}
                  variant="outlined"
                />
              </FlexView>
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
              </FlexView>

              <FlexView>
                {/* <FormControl fullWidth style={padding}>
                  <InputLabel>Relation Type</InputLabel>
                  <Select
                    style={padding}
                    error={Boolean(
                      formik.touched.relationType && formik.errors.relationType
                    )}
                    fullWidth
                    helperText={
                      formik.touched.relationType && formik.errors.relationType
                    }
                    label="Relation Type"
                    margin="normal"
                    type="text"
                    name="relationType"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.relationType}
                    variant="outlined"
                  >
                    {relationList.map((x, index) => (
                      <MenuItem value={x} key={index}>
                        {x}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
              </FlexView>
            </div>
          </FlexView>
          <Divider />
          <FlexView hAlignContent="right" marginTop={"4%"}>
            <Button
              type="submit"
              value="Submit"
              color="primary"
              variant="contained"
            >
              Add
            </Button>
          </FlexView>
        </form>
      </Box>
    </Modal>
  );
}

export default ProductionFrom;
