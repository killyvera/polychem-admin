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
export declare type PalletCreateFormInputValues = {
    name?: string;
    code?: string;
    units?: string;
};
export declare type PalletCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    units?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PalletCreateFormOverridesProps = {
    PalletCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    code?: FormProps<TextFieldProps>;
    units?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PalletCreateFormProps = React.PropsWithChildren<{
    overrides?: PalletCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PalletCreateFormInputValues) => PalletCreateFormInputValues;
    onSuccess?: (fields: PalletCreateFormInputValues) => void;
    onError?: (fields: PalletCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PalletCreateFormInputValues) => PalletCreateFormInputValues;
    onValidate?: PalletCreateFormValidationValues;
} & React.CSSProperties>;
export default function PalletCreateForm(props: PalletCreateFormProps): React.ReactElement;
