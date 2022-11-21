/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FormulaElement } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormulaElementUpdateFormInputValues = {
    name?: string;
    description?: string;
    quantity?: string;
};
export declare type FormulaElementUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    quantity?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormulaElementUpdateFormOverridesProps = {
    FormulaElementUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormulaElementUpdateFormProps = React.PropsWithChildren<{
    overrides?: FormulaElementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    formulaElement?: FormulaElement;
    onSubmit?: (fields: FormulaElementUpdateFormInputValues) => FormulaElementUpdateFormInputValues;
    onSuccess?: (fields: FormulaElementUpdateFormInputValues) => void;
    onError?: (fields: FormulaElementUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FormulaElementUpdateFormInputValues) => FormulaElementUpdateFormInputValues;
    onValidate?: FormulaElementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FormulaElementUpdateForm(props: FormulaElementUpdateFormProps): React.ReactElement;
