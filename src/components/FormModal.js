import { padding, style } from "./Styles";
import Switch from "@material-ui/core/Switch";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Button,
  Divider,
  TextField,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
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
import formContext from "../contexts/form/formContext";
import { UsersContext } from "../contexts/UsersContext";
import AddLeaderProduction from "./addLeaderProduction";
import ProductionFrom from "./ProductionFrom";
import { v4 as uuidv4 } from "uuid";
import Images from "../constants/Images";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
function FormModal(props) {
  const { production, leaderProduction, submitForm, submitProductionForm } =
    useContext(formContext);
  const { giveMeUser, user } = useContext(UsersContext);
  console.log("leaderProduction", leaderProduction);
  const [isAddLeaderProduction, setIsLeaderProduction] = useState(false);
  const [isCreateProduction, setIsCreateProduction] = useState(false);
  const navigate = useNavigate();
  const isLeaderSelected = leaderProduction ? true : false;
  const isProductionEntered = Object.keys(production).length > 0;

  React.useEffect(() => {
    getUserDetails();
  }, [leaderProduction]);

  const getUserDetails = async () => {
    giveMeUser(leaderProduction?.Username);
  };
  console.log("giveMeUser user", user);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      isPlanned: false,
      hasItBeenUrgent: false,
      haveExpiration: false,
      expiryDate: new Date(),
      plannedDate: new Date(),
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Name is required"),
      description: Yup.string().max(255).required("Description is required"),
    }),
    onSubmit: (values) => {
      const {
        name,
        description,
        isPlanned,
        expiryDate,
        haveExpiration,
        plannedDate,
      } = values;
      const formData = {
        name: name,
        description: description,
        planned: isPlanned,
        schedule: plannedDate,
        sent: true,
        expire: haveExpiration,
        expirationDate: expiryDate,
        active: true,
        Production: production,
        ProductionLeader: leaderProduction,
        sheduledID: uuidv4(),
      };
      submitForm(formData);
      submitProductionForm(production);
      navigate("/forms");
      console.log("form", formData);
      console.log("production", production);
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
      <Box sx={{ ...style, top: "50%" }}>
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
                  // <LocalizationProvider
                  //   dateAdapter={AdapterDayjs}
                  //   localeText={{ start: "Start", end: "End" }}
                  // >
                  //   <DateRangePicker
                  //     value={dateRange}
                  //     onChange={(newValue) => {
                  //       setDateRange(newValue);
                  //     }}
                  //     renderInput={(startProps, endProps) => (
                  //       <React.Fragment>
                  //         <TextField {...startProps} />
                  //         <Box sx={{ mx: 2 }}> to </Box>
                  //         <TextField {...endProps} />
                  //       </React.Fragment>
                  //     )}
                  //   />
                  // </LocalizationProvider>
                  <TextField
                    style={padding}
                    error={Boolean(
                      formik.touched.expiryDate && formik.errors.plannedDate
                    )}
                    fullWidth
                    helperText={
                      formik.touched.expiryDate && formik.errors.plannedDate
                    }
                    label="Planned Date"
                    name="plannedDate"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="date"
                    value={formik.values.plannedDate}
                    variant="outlined"
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

              <FlexView column style={{ margin: "20px" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    {isLeaderSelected && (
                      <Avatar
                        alt="Remy Sharp"
                        src={
                          leaderProduction.image
                            ? leaderProduction.image
                            : Images.UserAvatar
                        }
                      />
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    // primary={leaderProduction?.Attributes[1]?.Value}
                    primary={""}
                    secondary={
                      <>
                        <FlexView className="my-class-name" height={60}>
                          <FlexView>
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {/* {leaderProduction && (
                            <div>Role: {leaderProduction.role}</div>
                          )} */}
                              </Typography>
                              {/* {leaderProduction && (
                          <div>shift: {leaderProduction.shift}</div>
                        )} */}
                            </React.Fragment>{" "}
                          </FlexView>
                          <FlexView
                            marginLeft="auto"
                            vAlignContent="top"
                            hAlignContent="center"
                          >
                            {" "}
                            {isLeaderSelected ? (
                              <Button
                                variant="outlined"
                                onClick={handleAddLeader}
                              >
                                Edit
                              </Button>
                            ) : (
                              ""
                            )}
                          </FlexView>
                        </FlexView>
                      </>
                    }
                  />
                </ListItem>
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
          <FlexView column style={{ margin: "20px" }}>
            {
              isProductionEntered ? (
                // production.map((item) => (
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={production.name}
                    secondary={
                      <FlexView className="my-class-name">
                        <FlexView marginTop="auto">
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                              // style={{ whiteSpace: "pre-line" }}
                            >
                              {`                
                             ${production.product ? production.product : ""}
                             ${
                               production.expectedUnits
                                 ? production.expectedUnits
                                 : ""
                             }
                           
                              `}
                            </Typography>
                          </React.Fragment>
                        </FlexView>
                        <FlexView marginLeft="auto">
                          {" "}
                          {isProductionEntered ? (
                            <Button variant="contained">Edit</Button>
                          ) : (
                            ""
                          )}
                        </FlexView>
                      </FlexView>
                    }
                  />
                </ListItem>
              ) : (
                <></>
              )
              // ))
            }
          </FlexView>
          <Divider />
          <FlexView hAlignContent="right">
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
