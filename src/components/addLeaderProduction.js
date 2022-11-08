import { Button, Divider } from "@mui/material";
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
const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  //   height: "60%",
  bgcolor: "white",
  borderRadius: "5px",
  pt: 2,
  px: 4,
  pb: 3,
};
const padding = {
  padding: "5px",
};
function AddLeaderProduction(props) {
  const { isModalDisplayed, handleAddLeader } = props;
  const { users } = useContext(UsersContext);

  const formik = useFormik({
    initialValues: {
      user: {},
    },
    validationSchema: Yup.object({
      user: Yup.object().required("user is required"),
    }),
    onSubmit: (values) => {},
  });
  return (
    <Modal
      open={isModalDisplayed}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <h2 id="parent-modal-title">Get User</h2>
        <Divider />
        <form onSubmit={formik.handleSubmit}>
          <FlexView>
            <FormControl fullWidth style={padding}>
              <InputLabel>Users List</InputLabel>
              <Select
                style={padding}
                error={Boolean(formik.touched.user && formik.errors.user)}
                fullWidth
                // helperText={formik.touched.user && formik.errors.user}
                label="Users"
                type="select"
                name="user"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.user}
                variant="outlined"
              >
                {users?.map((x, index) => (
                  <MenuItem value={x.Attributes[1].Value} key={index}>
                    {x.Attributes[1].Value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FlexView>
          <Divider />
          <FlexView hAlignContent="right" marginTop={"4%"}>
            <Button
              style={{ margin: "5px" }}
              type="submit"
              value="Submit"
              color="primary"
              variant="contained"
            >
              Add
            </Button>
            <Button
              style={{ margin: "5px" }}
              type="submit"
              value="Submit"
              color="error"
              variant="contained"
              onClick={handleAddLeader}
            >
              Cancel
            </Button>
          </FlexView>
        </form>
      </Box>
    </Modal>
  );
}

export default AddLeaderProduction;
