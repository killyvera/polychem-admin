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


export const CreatePalletFormModal = ({ isFormulaElementVisible }) => {



    const style = {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70%",
        bgcolor: "white",
        borderRadius: "5px",
        pt: 2,
        px: 4,
        pb: 3,
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            production: "",
            packageUnits: "",
        },
        onSubmit: (values) => {

        },
    });




    return (
        <Modal
            open={isFormulaElementVisible}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style }}>
                <h2 id="parent-modal-title">Pallet Form</h2>
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
                                            formik.touched.production && formik.errors.production
                                        )}
                                        fullWidth
                                        helperText={
                                            formik.touched.production && formik.errors.production
                                        }
                                        label="PRODUCTION"
                                        name="production"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        required
                                        value={formik.values.production}
                                        variant="outlined"
                                    />
                                </FlexView>

                                <FlexView column style={{ margin: "10px" }}>
                                    {" "}
                                    <TextField
                                        error={Boolean(
                                            formik.touched.packageUnits && formik.errors.packageUnits
                                        )}
                                        fullWidth
                                        helperText={formik.touched.packageUnits && formik.errors.packageUnits}
                                        label="packageUnits"
                                        name="packageUnits"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        required
                                        value={formik.values.packageUnits}
                                        variant="outlined"
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
                                    Create Package
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
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="error"
                                    style={{ margin: "5px" }}
                                // onClick={formik.resetForm}
                                >
                                    Cancel
                                </Button>
                            </FlexView>
                        </form>
                    </Card>
                </FlexView>
            </Box>
        </Modal>
    );
};
