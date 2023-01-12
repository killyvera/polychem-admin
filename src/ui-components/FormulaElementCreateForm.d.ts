/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormulaElementCreateFormInputValues = {
    name?: string;
    description?: string;
    quantity?: string;
};
export declare type FormulaElementCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    quantity?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormulaElementCreateFormOverridesProps = {
    FormulaElementCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormulaElementCreateFormProps = React.PropsWithChildren<{
    overrides?: FormulaElementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormulaElementCreateFormInputValues) => FormulaElementCreateFormInputValues;
    onSuccess?: (fields: FormulaElementCreateFormInputValues) => void;
    onError?: (fields: FormulaElementCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FormulaElementCreateFormInputValues) => FormulaElementCreateFormInputValues;
    onValidate?: FormulaElementCreateFormValidationValues;
} & React.CSSProperties>;
export default function FormulaElementCreateForm(props: FormulaElementCreateFormProps): React.ReactElement;
