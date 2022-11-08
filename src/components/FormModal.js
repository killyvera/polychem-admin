import Switch from "@material-ui/core/Switch";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useFormik } from "formik";
import * as React from "react";
import { useState } from "react";
import FlexView from "react-flexview/lib";
import * as Yup from "yup";
import AddLeaderProduction from "./addLeaderProduction";
import ProductionFrom from "./ProductionFrom";
import { padding, style } from "./Styles";

function FormModal(props) {
  const [value, setValue] = React.useState([]);
  const [isAddLeaderProduction, setIsLeaderProduction] = useState(false);
  const [isCreateProduction, setIsCreateProduction] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      isPlanned: false,
      plannedDate: {},
      hasItBeenUrgent: false,
      haveExpiration: false,
      expiryDate: new Date(),
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
  const handleAddLeader = () => {
    setIsLeaderProduction((prev) => !prev);
  };
  const handleCreateProduction = () => {
    setIsCreateProduction((prev) => !prev);
  };
  return (
    <>
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
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={{ start: "Start", end: "End" }}
                  >
                    <DateRangePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
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
              </FlexView>
              <FlexView column style={{ margin: "20px" }}>
                <Button
                  onClick={handleAddLeader}
                  variant="outlined"
                  size="small"
                >
                  <AddCircleOutlineIcon />
                  Add Leader Prodcution
                </Button>
              </FlexView>
            </div>
          </FlexView>
          <FlexView>
            <div style={{ width: "50%" }}>
              <Typography id="modal-modal-title" variant="subtitle2">
                have expiration ?
              </Typography>
              <Switch
                checked={formik.values.haveExpiration}
                onChange={formik.handleChange}
                name="haveExpiration"
                value={formik.values.haveExpiration}
                color="primary"
              />
            </div>
            <div style={{ width: "50%" }}>
              {formik.values.haveExpiration && (
                <TextField
                  style={padding}
                  error={Boolean(
                    formik.touched.expiryDate && formik.errors.expiryDate
                  )}
                  fullWidth
                  helperText={
                    formik.touched.expiryDate && formik.errors.expiryDate
                  }
                  label="Expiry Date"
                  name="expiryDate"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="date"
                  value={formik.values.expiryDate}
                  variant="outlined"
                />
              )}
            </div>
          </FlexView>
          <FlexView column style={{ margin: "20px" }}>
            <Button
              onClick={handleCreateProduction}
              variant="outlined"
              size="small"
            >
              <AddCircleOutlineIcon />
              Create Production
            </Button>
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
      {isAddLeaderProduction && (
        <AddLeaderProduction
          isModalDisplayed={isAddLeaderProduction}
          handleAddLeader={handleAddLeader}
        />
      )}
      {isCreateProduction && (
        <ProductionFrom
          isModalDisplayed={isCreateProduction}
          handleCreateProduction={handleCreateProduction}
        />
      )}
    </>
  );
}

export default FormModal;
