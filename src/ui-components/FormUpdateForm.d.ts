/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Form } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormUpdateFormInputValues = {
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
export declare type FormUpdateFormValidationValues = {
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
export declare type FormUpdateFormOverridesProps = {
    FormUpdateFormGrid?: FormProps<GridProps>;
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
export declare type FormUpdateFormProps = React.PropsWithChildren<{
    overrides?: FormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    form?: Form;
    onSubmit?: (fields: FormUpdateFormInputValues) => FormUpdateFormInputValues;
    onSuccess?: (fields: FormUpdateFormInputValues) => void;
    onError?: (fields: FormUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FormUpdateFormInputValues) => FormUpdateFormInputValues;
    onValidate?: FormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FormUpdateForm(props: FormUpdateFormProps): React.ReactElement;
