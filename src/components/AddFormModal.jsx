import React, { useState, useEffect, useCallback, useContext } from "react";
import { DataStore } from "@aws-amplify/datastore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import { Form } from "../models";
import { AppContext } from "../contexts/AppContext";

const ModalContent = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  boxShadow: 24,
  borderRadius: "0.25rem",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  width: 600,
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const initialFormData = (data) => ({
  formName: data?.name || "",
  description: data?.description || "",
  quantity: data?.planned,
  schedule: data?.schedule || "",
  sent: data?.sent,
  expire: data?.expire,
  expirationDate: data?.expirationDate || "",
  active: data?.active,
  sheduledID: data?.sheduledID || "",
  formProductionId: data?.formProductionId || "",
  leadProduction: data?.leadProduction || "",
});

export default function AddFormModal(props) {
  const { modalStatus, toggleModalStatus } = props;

  const { users, productionsList } = useContext(AppContext);

  const [formData, updateFormData] = useState(initialFormData());
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    updateFormData({ ...formData, [name]: value });
  };

  const updateModalData = useCallback(() => {
    if (!!modalStatus.data) {
      updateFormData(initialFormData(modalStatus.data));
    }
  }, [modalStatus]);

  const handleSaveData = async () => {
    setIsLoading(true);
    try {
      if (!!modalStatus.data) {
        const original = await DataStore.query(Form, modalStatus.data.id);
        await DataStore.save(
          Form.copyOf(original, (updated) => {
            updated.name = formData.formName;
            updated.description = formData.description;
            updated.quantity = formData.quantity;
            updated.schedule = formData.schedule;
            updated.sent = formData.sent;
            updated.expire = formData.expire;
            updated.expirationDate = formData.expirationDate;
            updated.active = formData.active;
            updated.sheduledID = formData.sheduledID;
            updated.formProductionId = formData.formProductionId;
            updated.leadProduction = formData.leadProduction;
          })
        );
      } else {
        await DataStore.save(
          new Form({
            name: formData.formName,
            description: formData.description,
            quantity: formData.quantity,
            schedule: formData.schedule,
            sent: formData.sent,
            expire: formData.expire,
            expirationDate: formData.expirationDate,
            active: formData.active,
            sheduledID: formData.sheduledID,
            formProductionId: formData.formProductionId,
            leadProduction: formData.leadProduction,
          })
        );
      }
      setIsLoading(false);
      toggleModalStatus(false);
    } catch (error) {
      console.log("Form Save Error: ", error);
      setIsLoading(false);
      toggleModalStatus(false);
    }
  };

  useEffect(() => {
    updateModalData();
  }, [updateModalData]);

  return (
    <Modal open={modalStatus.isOpen}>
      <ModalContent>
        <IconButton
          onClick={() => toggleModalStatus(false)}
          style={{ alignSelf: "flex-end" }}
          disabled={isLoading}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" component="h5" fontWeight="bold">
          {!!modalStatus.data ? "Edit" : "Add New"} Form
        </Typography>
        <Box marginTop={2}>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="form-name">Form Name</InputLabel>
            <FilledInput
              id="form-name"
              name="formName"
              value={formData.formName}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="form-description">Form Description</InputLabel>
            <FilledInput
              id="form-description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              disabled={isLoading}
            />
          </FormControl>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="1rem"
          >
            <Box flex={1}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.expire}
                    onChange={(ev) => {
                      handleInputChange({
                        target: { name: "expire", value: ev.target.checked },
                      });
                    }}
                  />
                }
                label="have expiration?"
                labelPlacement="start"
              />
            </Box>
            {formData.expire && (
              <Box flex={1}>
                <FormControl fullWidth variant="filled" focused>
                  <InputLabel htmlFor="expirationDate">
                    Expiration Date
                  </InputLabel>
                  <FilledInput
                    id="expirationDate"
                    value={formData.expirationDate}
                    name="expirationDate"
                    type="date"
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                </FormControl>
              </Box>
            )}
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="1rem"
          >
            <Box flex={1}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.planned}
                    onChange={(ev) => {
                      handleInputChange({
                        target: { name: "planned", value: ev.target.checked },
                      });
                    }}
                  />
                }
                label="is planned?"
                labelPlacement="start"
              />
            </Box>
            {formData.planned && (
              <Box flex={1}>
                <FormControl fullWidth variant="filled" focused>
                  <InputLabel htmlFor="schedule">Schedule Date</InputLabel>
                  <FilledInput
                    id="schedule"
                    value={formData.schedule}
                    name="schedule"
                    type="date"
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                </FormControl>
              </Box>
            )}
          </Box>
          <Box display="flex" alignItems="center" marginTop="1rem">
            <FormControlLabel
              control={
                <Switch
                  checked={formData.active}
                  onChange={(ev) => {
                    handleInputChange({
                      target: { name: "active", value: ev.target.checked },
                    });
                  }}
                />
              }
              label="is active?"
              labelPlacement="start"
            />
          </Box>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="formProductionId">Production Form</InputLabel>
            <Select
              id="form-production-id"
              name="formProductionId"
              value={formData.formProductionId}
              onChange={handleInputChange}
            >
              {productionsList.map((production, i) => (
                <MenuItem key={`production_${i}`} value={production.id}>
                  {production.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="leadProduction">Lead Production</InputLabel>
            <Select
              id="lead-production-id"
              name="leadProduction"
              value={formData.leadProduction}
              onChange={handleInputChange}
            >
              {users.map((user, i) => (
                <MenuItem key={`user_${i}`} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          disabled={isLoading}
          onClick={handleSaveData}
          style={{ marginTop: "1rem" }}
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </ModalContent>
    </Modal>
  );
}
