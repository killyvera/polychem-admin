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
import { useContext, useState } from "react";
import FlexView from "react-flexview/lib";
import * as Yup from "yup";
import { AdminFormContext } from "../contexts/AdminFormContext";
import AddLeaderProduction from "./addLeaderProduction";
import ProductionFrom from "./ProductionFrom";
import { padding, style } from "./Styles";
import { v4 as uuidv4 } from "uuid";

function FormModal(props) {
  const {
    dateRange,
    production,
    leaderProduction,
    setDateRange,
    setProduction,
    submitForm,
  } = useContext(AdminFormContext);

  const [isAddLeaderProduction, setIsLeaderProduction] = useState(false);
  const [isCreateProduction, setIsCreateProduction] = useState(false);
  const submitProductionForm = (values) => {
    setProduction(values);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      isPlanned: false,
      hasItBeenUrgent: false,
      haveExpiration: false,
      expiryDate: new Date(),
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Name is required"),
      description: Yup.string().max(255).required("Description is required"),
    }),
    onSubmit: (values) => {
      const { name, description, isPlanned, expiryDate } = values;
      const formData = {
        name: name,
        description: description,
        planned: isPlanned,
        schedule: "",
        sent: true,
        expire: false,
        expirationDate: expiryDate,
        active: true,
        Production: production,
        ProductionLeader: leaderProduction,
        sheduledID: uuidv4(),
      };
      submitForm(formData);
      console.log("values in form", formData);
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
                  name="description"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
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
                      value={dateRange}
                      onChange={(newValue) => {
                        setDateRange(newValue);
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

              {/* <FlexView column style={{ margin: "20px" }}>
              <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={leaderProduction.image ? leaderProduction.image : Images.UserAvatar} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={leaderProduction.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {leaderProduction.role}
                                        </Typography>

                                        {leaderProduction.shift}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
              </FlexView> */}
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
          submitProductionForm={submitProductionForm}
        />
      )}
    </>
  );
}

export default FormModal;
