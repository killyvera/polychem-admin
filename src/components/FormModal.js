import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import FlexView from "react-flexview/lib";
import * as Yup from "yup";
import Switch from "@material-ui/core/Switch";
import Typography from "@mui/material/Typography";

import { DateRangePicker } from "materialui-daterange-picker";

import React from "react";
const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  //   height: "60%",
  bgcolor: "white",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  borderRadius: "5px",
  pt: 2,
  px: 4,
  pb: 3,
};
const padding = {
  padding: "5px",
};
function FormModal(props) {
  const { isModalDisplayed } = props;
  const relationList = ["Personal", "Father", "Mother", "Son", "Daugher"];
  const genderList = ["Male", "Female"];
  const [dateRange, setDateRange] = React.useState({});
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      isPlanned: false,
      plannedDate: {},
      hasItBeenUrgent: false,
      haveExpiration: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      name: Yup.string().max(255).required("First name is required"),
      contactNumber: Yup.string()
        .max(255)
        .required("Contact Number is required"),
      whatsAppNumber: Yup.string()
        .max(255)
        .required("WhatsApp Number is required"),
      gender: Yup.string().max(255).required("Gender is required"),
      relationType: Yup.string().max(255).required("Role is required"),
    }),
    onSubmit: (values) => {
      //   setIsLoading(true);
      //   AddPatient(values);
      //   handleModalDisplay();
    },
  });
  console.log(formik.values);
  return (
    <Modal
      open={isModalDisplayed}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <h2 id="parent-modal-title">Form</h2>
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
                <div style={{ width: "50%" }}>
                  <Typography id="modal-modal-title" variant="subtitle2">
                    is Planned
                  </Typography>
                  <Switch
                    checked={formik.values.isPlanned}
                    onChange={formik.handleChange}
                    name="isPlanned"
                    value={formik.values.isPlanned}
                    color="primary"
                  />
                </div>
                {formik.values.isPlanned && (
                  <DateRangePicker
                    open={formik.values.isPlanned}
                    toggle={() => !formik.values.isPlanned}
                    name="plannedDate"
                    onChange={(range) => setDateRange(range)}
                    closeOnClickOutside={true}
                    // closeOnClickOutside={true}
                  />
                )}
              </FlexView>
              <FlexView>
                <div style={{ width: "50%" }}>
                  <Typography id="modal-modal-title" variant="subtitle2">
                    has it been Urgent
                  </Typography>
                  <Switch
                    checked={formik.values.hasItBeenUrgent}
                    onChange={formik.handleChange}
                    name="hasItBeenUrgent"
                    value={formik.values.hasItBeenUrgent}
                    color="primary"
                  />
                </div>

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

export default FormModal;
