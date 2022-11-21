/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Production } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductionUpdateFormInputValues = {
    name?: string;
    expectedUnits?: number;
    expectedPackages?: number;
    expectedPallets?: number;
    standard?: boolean;
    extraUnits?: number;
    notes?: string;
};
export declare type ProductionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    expectedUnits?: ValidationFunction<number>;
    expectedPackages?: ValidationFunction<number>;
    expectedPallets?: ValidationFunction<number>;
    standard?: ValidationFunction<boolean>;
    extraUnits?: ValidationFunction<number>;
    notes?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductionUpdateFormOverridesProps = {
    ProductionUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    expectedUnits?: FormProps<TextFieldProps>;
    expectedPackages?: FormProps<TextFieldProps>;
    expectedPallets?: FormProps<TextFieldProps>;
    standard?: FormProps<SwitchFieldProps>;
    extraUnits?: FormProps<TextFieldProps>;
    notes?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductionUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    production?: Production;
    onSubmit?: (fields: ProductionUpdateFormInputValues) => ProductionUpdateFormInputValues;
    onSuccess?: (fields: ProductionUpdateFormInputValues) => void;
    onError?: (fields: ProductionUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductionUpdateFormInputValues) => ProductionUpdateFormInputValues;
    onValidate?: ProductionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductionUpdateForm(props: ProductionUpdateFormProps): React.ReactElement;
