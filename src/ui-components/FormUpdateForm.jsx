/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Form } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function FormUpdateForm(props) {
  const {
    id,
    form,
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
    description: undefined,
    planned: false,
    schedule: undefined,
    sent: false,
    expire: false,
    expirationDate: undefined,
    active: false,
    leadProduction: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [planned, setPlanned] = React.useState(initialValues.planned);
  const [schedule, setSchedule] = React.useState(initialValues.schedule);
  const [sent, setSent] = React.useState(initialValues.sent);
  const [expire, setExpire] = React.useState(initialValues.expire);
  const [expirationDate, setExpirationDate] = React.useState(
    initialValues.expirationDate
  );
  const [active, setActive] = React.useState(initialValues.active);
  const [leadProduction, setLeadProduction] = React.useState(
    initialValues.leadProduction
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...formRecord };
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setPlanned(cleanValues.planned);
    setSchedule(cleanValues.schedule);
    setSent(cleanValues.sent);
    setExpire(cleanValues.expire);
    setExpirationDate(cleanValues.expirationDate);
    setActive(cleanValues.active);
    setLeadProduction(cleanValues.leadProduction);
    setErrors({});
  };
  const [formRecord, setFormRecord] = React.useState(form);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Form, id) : form;
      setFormRecord(record);
    };
    queryData();
  }, [id, form]);
  React.useEffect(resetStateValues, [formRecord]);
  const validations = {
    name: [],
    description: [],
    planned: [],
    schedule: [],
    sent: [],
    expire: [],
    expirationDate: [],
    active: [],
    leadProduction: [],
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
          description,
          planned,
          schedule,
          sent,
          expire,
          expirationDate,
          active,
          leadProduction,
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
          const original = await DataStore.query(Form, id);
          await DataStore.save(
            Form.copyOf(original, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "FormUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              planned,
              schedule,
              sent,
              expire,
              expirationDate,
              active,
              leadProduction,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              planned,
              schedule,
              sent,
              expire,
              expirationDate,
              active,
              leadProduction,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SwitchField
        label="Planned"
        defaultChecked={false}
        isDisabled={false}
        isChecked={planned}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              planned: value,
              schedule,
              sent,
              expire,
              expirationDate,
              active,
              leadProduction,
            };
            const result = onChange(modelFields);
            value = result?.planned ?? value;
          }
          if (errors.planned?.hasError) {
            runValidationTasks("planned", value);
          }
          setPlanned(value);
        }}
        onBlur={() => runValidationTasks("planned", planned)}
        errorMessage={errors.planned?.errorMessage}
        hasError={errors.planned?.hasError}
        {...getOverrideProps(overrides, "planned")}
      ></SwitchField>
      <TextField
        label="Schedule"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={schedule}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              planned,
              schedule: value,
              sent,
              expire,
              expirationDate,
              active,
              leadProduction,
            };
            const result = onChange(modelFields);
            value = result?.schedule ?? value;
          }
          if (errors.schedule?.hasError) {
            runValidationTasks("schedule", value);
          }
          setSchedule(value);
        }}
        onBlur={() => runValidationTasks("schedule", schedule)}
        errorMessage={errors.schedule?.errorMessage}
        hasError={errors.schedule?.hasError}
        {...getOverrideProps(overrides, "schedule")}
      ></TextField>
      <SwitchField
        label="Sent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              planned,
              schedule,
              sent: value,
              expire,
              expirationDate,
              active,
              leadProduction,
            };
            const result = onChange(modelFields);
            value = result?.sent ?? value;
          }
          if (errors.sent?.hasError) {
            runValidationTasks("sent", value);
          }
          setSent(value);
        }}
        onBlur={() => runValidationTasks("sent", sent)}
        errorMessage={errors.sent?.errorMessage}
        hasError={errors.sent?.hasError}
        {...getOverrideProps(overrides, "sent")}
      ></SwitchField>
      <SwitchField
        label="Expire"
        defaultChecked={false}
        isDisabled={false}
        isChecked={expire}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              planned,
              schedule,
              sent,
              expire: value,
              expirationDate,
              active,
              leadProduction,
            };
            const result = onChange(modelFields);
            value = result?.expire ?? value;
          }
          if (errors.expire?.hasError) {
            runValidationTasks("expire", value);
          }
          setExpire(value);
        }}
        onBlur={() => runValidationTasks("expire", expire)}
        errorMessage={errors.expire?.errorMessage}
        hasError={errors.expire?.hasError}
        {...getOverrideProps(overrides, "expire")}
      ></SwitchField>
      <TextField
        label="Expiration date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={expirationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              planned,
              schedule,
              sent,
              expire,
              expirationDate: value,
              active,
              leadProduction,
            };
            const result = onChange(modelFields);
            value = result?.expirationDate ?? value;
          }
          if (errors.expirationDate?.hasError) {
            runValidationTasks("expirationDate", value);
          }
          setExpirationDate(value);
        }}
        onBlur={() => runValidationTasks("expirationDate", expirationDate)}
        errorMessage={errors.expirationDate?.errorMessage}
        hasError={errors.expirationDate?.hasError}
        {...getOverrideProps(overrides, "expirationDate")}
      ></TextField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              planned,
              schedule,
              sent,
              expire,
              expirationDate,
              active: value,
              leadProduction,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <TextField
        label="Lead production"
        isRequired={false}
        isReadOnly={false}
        defaultValue={leadProduction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              planned,
              schedule,
              sent,
              expire,
              expirationDate,
              active,
              leadProduction: value,
            };
            const result = onChange(modelFields);
            value = result?.leadProduction ?? value;
          }
          if (errors.leadProduction?.hasError) {
            runValidationTasks("leadProduction", value);
          }
          setLeadProduction(value);
        }}
        onBlur={() => runValidationTasks("leadProduction", leadProduction)}
        errorMessage={errors.leadProduction?.errorMessage}
        hasError={errors.leadProduction?.hasError}
        {...getOverrideProps(overrides, "leadProduction")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
