/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pallet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PalletUpdateFormInputValues = {
    name?: string;
    code?: string;
    units?: string;
};
export declare type PalletUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    units?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PalletUpdateFormOverridesProps = {
    PalletUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    code?: FormProps<TextFieldProps>;
    units?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PalletUpdateFormProps = React.PropsWithChildren<{
    overrides?: PalletUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pallet?: Pallet;
    onSubmit?: (fields: PalletUpdateFormInputValues) => PalletUpdateFormInputValues;
    onSuccess?: (fields: PalletUpdateFormInputValues) => void;
    onError?: (fields: PalletUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PalletUpdateFormInputValues) => PalletUpdateFormInputValues;
    onValidate?: PalletUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PalletUpdateForm(props: PalletUpdateFormProps): React.ReactElement;
