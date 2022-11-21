/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormCreateFormInputValues = {
    name?: string;
    description?: string;
    planned?: boolean;
    schedule?: string;
    sent?: boolean;
    expire?: boolean;
    expirationDate?: string;
    active?: boolean;
    leadProduction?: string;
};
export declare type FormCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    planned?: ValidationFunction<boolean>;
    schedule?: ValidationFunction<string>;
    sent?: ValidationFunction<boolean>;
    expire?: ValidationFunction<boolean>;
    expirationDate?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
    leadProduction?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormCreateFormOverridesProps = {
    FormCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    planned?: FormProps<SwitchFieldProps>;
    schedule?: FormProps<TextFieldProps>;
    sent?: FormProps<SwitchFieldProps>;
    expire?: FormProps<SwitchFieldProps>;
    expirationDate?: FormProps<TextFieldProps>;
    active?: FormProps<SwitchFieldProps>;
    leadProduction?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormCreateFormProps = React.PropsWithChildren<{
    overrides?: FormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormCreateFormInputValues) => FormCreateFormInputValues;
    onSuccess?: (fields: FormCreateFormInputValues) => void;
    onError?: (fields: FormCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FormCreateFormInputValues) => FormCreateFormInputValues;
    onValidate?: FormCreateFormValidationValues;
} & React.CSSProperties>;
export default function FormCreateForm(props: FormCreateFormProps): React.ReactElement;
