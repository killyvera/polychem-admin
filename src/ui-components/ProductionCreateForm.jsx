/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Production } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProductionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    expectedUnits: undefined,
    expectedPackages: undefined,
    expectedPallets: undefined,
    standard: false,
    extraUnits: undefined,
    notes: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [expectedUnits, setExpectedUnits] = React.useState(
    initialValues.expectedUnits
  );
  const [expectedPackages, setExpectedPackages] = React.useState(
    initialValues.expectedPackages
  );
  const [expectedPallets, setExpectedPallets] = React.useState(
    initialValues.expectedPallets
  );
  const [standard, setStandard] = React.useState(initialValues.standard);
  const [extraUnits, setExtraUnits] = React.useState(initialValues.extraUnits);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setExpectedUnits(initialValues.expectedUnits);
    setExpectedPackages(initialValues.expectedPackages);
    setExpectedPallets(initialValues.expectedPallets);
    setStandard(initialValues.standard);
    setExtraUnits(initialValues.extraUnits);
    setNotes(initialValues.notes);
    setErrors({});
  };
  const validations = {
    name: [],
    expectedUnits: [],
    expectedPackages: [],
    expectedPallets: [],
    standard: [],
    extraUnits: [],
    notes: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          expectedUnits,
          expectedPackages,
          expectedPallets,
          standard,
          extraUnits,
          notes,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Production(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ProductionCreateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              expectedUnits,
              expectedPackages,
              expectedPallets,
              standard,
              extraUnits,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Expected units"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              expectedUnits: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              expectedUnits: value,
              expectedPackages,
              expectedPallets,
              standard,
              extraUnits,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.expectedUnits ?? value;
          }
          if (errors.expectedUnits?.hasError) {
            runValidationTasks("expectedUnits", value);
          }
          setExpectedUnits(value);
        }}
        onBlur={() => runValidationTasks("expectedUnits", expectedUnits)}
        errorMessage={errors.expectedUnits?.errorMessage}
        hasError={errors.expectedUnits?.hasError}
        {...getOverrideProps(overrides, "expectedUnits")}
      ></TextField>
      <TextField
        label="Expected packages"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              expectedPackages: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              expectedUnits,
              expectedPackages: value,
              expectedPallets,
              standard,
              extraUnits,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.expectedPackages ?? value;
          }
          if (errors.expectedPackages?.hasError) {
            runValidationTasks("expectedPackages", value);
          }
          setExpectedPackages(value);
        }}
        onBlur={() => runValidationTasks("expectedPackages", expectedPackages)}
        errorMessage={errors.expectedPackages?.errorMessage}
        hasError={errors.expectedPackages?.hasError}
        {...getOverrideProps(overrides, "expectedPackages")}
      ></TextField>
      <TextField
        label="Expected pallets"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              expectedPallets: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              expectedUnits,
              expectedPackages,
              expectedPallets: value,
              standard,
              extraUnits,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.expectedPallets ?? value;
          }
          if (errors.expectedPallets?.hasError) {
            runValidationTasks("expectedPallets", value);
          }
          setExpectedPallets(value);
        }}
        onBlur={() => runValidationTasks("expectedPallets", expectedPallets)}
        errorMessage={errors.expectedPallets?.errorMessage}
        hasError={errors.expectedPallets?.hasError}
        {...getOverrideProps(overrides, "expectedPallets")}
      ></TextField>
      <SwitchField
        label="Standard"
        defaultChecked={false}
        isDisabled={false}
        isChecked={standard}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              expectedUnits,
              expectedPackages,
              expectedPallets,
              standard: value,
              extraUnits,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.standard ?? value;
          }
          if (errors.standard?.hasError) {
            runValidationTasks("standard", value);
          }
          setStandard(value);
        }}
        onBlur={() => runValidationTasks("standard", standard)}
        errorMessage={errors.standard?.errorMessage}
        hasError={errors.standard?.hasError}
        {...getOverrideProps(overrides, "standard")}
      ></SwitchField>
      <TextField
        label="Extra units"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              extraUnits: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              expectedUnits,
              expectedPackages,
              expectedPallets,
              standard,
              extraUnits: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.extraUnits ?? value;
          }
          if (errors.extraUnits?.hasError) {
            runValidationTasks("extraUnits", value);
          }
          setExtraUnits(value);
        }}
        onBlur={() => runValidationTasks("extraUnits", extraUnits)}
        errorMessage={errors.extraUnits?.errorMessage}
        hasError={errors.extraUnits?.hasError}
        {...getOverrideProps(overrides, "extraUnits")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              expectedUnits,
              expectedPackages,
              expectedPallets,
              standard,
              extraUnits,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
