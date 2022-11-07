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
import { useState } from "react";
import FlexView from "react-flexview";
import { Input } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const ProductFormulaElement = () => {
  // const { setProductElementFormValues } = useContext(formContext)

  const [avatarPreview, setAvatarPreview] = useState(
    "./assets/user-avatar.jpg"
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      quantity: "",
      avatar: "",
    },
    onSubmit: (values) => {
      console.log({ values });
      const name = values.name;
      const description = values.description;
      const quantity = values.quantity;
      const image = values.avatar;
      formik.resetForm();
    },
  });
  return (
    // <Box
    //   sx={{
    //     "& .MuiTextField-root": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    //   style={{
    //     position: "absolute",
    //     top: "50%",
    //     left: "50%",
    //     transform: "translate(-50%, -50%)",
    //     width: 400,
    //     bgcolor: "background.paper",
    //     borderRadius: "7px",
    //     boxShadow: 24,
    //     p: 4,
    //   }}
    // >
    //   <div>
    //     <form onSubmit={formik.handleSubmit}>
    //       <Stack>
    //         <label htmlFor="name">Name</label>
    //         <input
    //           id="name"
    //           name="name"
    //           type="name"
    //           onChange={formik.handleChange}
    //           value={formik.values.name}
    //         />

    //         <label htmlFor="puesto">Description</label>
    //         <input
    //           id="description"
    //           name="description"
    //           type="description"
    //           onChange={formik.handleChange}
    //           value={formik.values.description}
    //         />

    //         <label htmlFor="email">Quantity</label>
    //         <input
    //           id="quantity"
    //           name="quantity"
    //           type="quantity"
    //           onChange={formik.handleChange}
    //           value={formik.values.quantity}
    //         />

    //         <Box
    //           display="flex"
    //           textAlign="center"
    //           justifyContent="center"
    //           flexDirection="column"
    //         >
    //           <Avatar
    //             size="md"
    //             src={
    //               formik.values.avatar !== ""
    //                 ? formik.values.avatar
    //                 : avatarPreview
    //             }
    //           />

    //           <Button variant="contained" component="label">
    //             Add Image
    //             <Input
    //               name="avatar"
    //               accept="image/*"
    //               id="contained-button-file"
    //               type="file"
    //               hidden
    //               onChange={(e) => {
    //                 const fileReader = new FileReader();
    //                 fileReader.onload = () => {
    //                   if (fileReader.readyState === 2) {
    //                     formik.setFieldValue("avatar", fileReader.result);
    //                   }
    //                 };
    //                 fileReader.readAsDataURL(e.target.files[0]);
    //               }}
    //             />
    //           </Button>
    //         </Box>

    //         <Button
    //           style={{ marginTop: "10px" }}
    //           variant="contained"
    //           type="submit"
    //         >
    //           Submit
    //         </Button>
    //         <Button
    //           style={{ marginTop: "10px" }}
    //           onClick={formik.resetForm}
    //           variant="outlined"
    //         >
    //           Reset
    //         </Button>
    //       </Stack>
    //     </form>
    //   </div>
    // </Box>

    <FlexView column hAlignContent="center" marginTop={"10%"}>
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
              {" "}
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
              {" "}
              <TextField
                error={Boolean(
                  formik.touched.quantity && formik.errors.quantity
                )}
                fullWidth
                helperText={formik.touched.quantity && formik.errors.quantity}
                label="Quantity"
                name="quantity"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                required
                value={formik.values.quantity}
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
