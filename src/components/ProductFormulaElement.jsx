import {
    Button,
    Grid,
    TextField,
    InputLabel,
    Box,
    Stack,
    Avatar,
    Modal,
    Divider,
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


export const ProductFormulaElement = ({ isFormulaElementVisible, hideFormulaElement }) => {
    const { setProductElementFormValues } = useContext(formContext)

    const [formulaElements, setFormulaElements] = useState([]);
    // const [avatarPreview, setAvatarPreview] = useState(
    //     "./assets/user-avatar.jpg"
    // );
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

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            quantity: "",
            avatar: "",
        },
        onSubmit: (values) => {
            handleAddFormulaElement();
            hideFormulaElement();
        },
    });

    const saveFormulaElement = () => {
        hideFormulaElement();
    }

    const handleAddFormulaElement = () => {
        const formulaElement = {
            name: formik.values.name,
            description: formik.values.description,
            quantity: parseInt(formik.values.quantity),
            productID: "4a846d28-e496-406c-b618-63137e377d49"
        }
        setProductElementFormValues(formulaElement)
        setFormulaElements(prev => [...prev, formulaElement]);
        formik.resetForm();
    }


    return (
        <Modal
            open={isFormulaElementVisible}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style }}>
                <h2 id="parent-modal-title">Form</h2>
                <Divider />
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
                                    onClick={saveFormulaElement}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    style={{ margin: "5px" }}
                                    onClick={handleAddFormulaElement}
                                >
                                    Add
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="error"
                                    style={{ margin: "5px" }}
                                    onClick={formik.resetForm}
                                >
                                    Reset
                                </Button>
                            </FlexView>
                        </form>
                    </Card>
                </FlexView>
            </Box>
        </Modal>
    );
};
