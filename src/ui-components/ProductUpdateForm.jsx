/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Product } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProductUpdateForm(props) {
  const {
    id,
    product,
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
    unitsPerPackage: undefined,
    packagesPerPallets: undefined,
    code: undefined,
    image: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [unitsPerPackage, setUnitsPerPackage] = React.useState(
    initialValues.unitsPerPackage
  );
  const [packagesPerPallets, setPackagesPerPallets] = React.useState(
    initialValues.packagesPerPallets
  );
  const [code, setCode] = React.useState(initialValues.code);
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...productRecord };
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setUnitsPerPackage(cleanValues.unitsPerPackage);
    setPackagesPerPallets(cleanValues.packagesPerPallets);
    setCode(cleanValues.code);
    setImage(cleanValues.image);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(product);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Product, id) : product;
      setProductRecord(record);
    };
    queryData();
  }, [id, product]);
  React.useEffect(resetStateValues, [productRecord]);
  const validations = {
    name: [],
    description: [],
    unitsPerPackage: [],
    packagesPerPallets: [],
    code: [],
    image: [],
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
          unitsPerPackage,
          packagesPerPallets,
          code,
          image,
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
          const original = await DataStore.query(Product, id);
          await DataStore.save(
            Product.copyOf(original, (updated) => {
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
      {...getOverrideProps(overrides, "ProductUpdateForm")}
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
              unitsPerPackage,
              packagesPerPallets,
              code,
              image,
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
              unitsPerPackage,
              packagesPerPallets,
              code,
              image,
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
      <TextField
        label="Units per package"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={unitsPerPackage}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              unitsPerPackage: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              description,
              unitsPerPackage: value,
              packagesPerPallets,
              code,
              image,
            };
            const result = onChange(modelFields);
            value = result?.unitsPerPackage ?? value;
          }
          if (errors.unitsPerPackage?.hasError) {
            runValidationTasks("unitsPerPackage", value);
          }
          setUnitsPerPackage(value);
        }}
        onBlur={() => runValidationTasks("unitsPerPackage", unitsPerPackage)}
        errorMessage={errors.unitsPerPackage?.errorMessage}
        hasError={errors.unitsPerPackage?.hasError}
        {...getOverrideProps(overrides, "unitsPerPackage")}
      ></TextField>
      <TextField
        label="Packages per pallets"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={packagesPerPallets}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              packagesPerPallets: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              description,
              unitsPerPackage,
              packagesPerPallets: value,
              code,
              image,
            };
            const result = onChange(modelFields);
            value = result?.packagesPerPallets ?? value;
          }
          if (errors.packagesPerPallets?.hasError) {
            runValidationTasks("packagesPerPallets", value);
          }
          setPackagesPerPallets(value);
        }}
        onBlur={() =>
          runValidationTasks("packagesPerPallets", packagesPerPallets)
        }
        errorMessage={errors.packagesPerPallets?.errorMessage}
        hasError={errors.packagesPerPallets?.hasError}
        {...getOverrideProps(overrides, "packagesPerPallets")}
      ></TextField>
      <TextField
        label="Code"
        isRequired={false}
        isReadOnly={false}
        defaultValue={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              unitsPerPackage,
              packagesPerPallets,
              code: value,
              image,
            };
            const result = onChange(modelFields);
            value = result?.code ?? value;
          }
          if (errors.code?.hasError) {
            runValidationTasks("code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("code", code)}
        errorMessage={errors.code?.errorMessage}
        hasError={errors.code?.hasError}
        {...getOverrideProps(overrides, "code")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        defaultValue={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              unitsPerPackage,
              packagesPerPallets,
              code,
              image: value,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
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
