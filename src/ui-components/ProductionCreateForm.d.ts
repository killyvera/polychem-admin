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
export declare type ProductionCreateFormInputValues = {
    name?: string;
    expectedUnits?: number;
    expectedPackages?: number;
    expectedPallets?: number;
    standard?: boolean;
    extraUnits?: number;
    notes?: string;
};
export declare type ProductionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    expectedUnits?: ValidationFunction<number>;
    expectedPackages?: ValidationFunction<number>;
    expectedPallets?: ValidationFunction<number>;
    standard?: ValidationFunction<boolean>;
    extraUnits?: ValidationFunction<number>;
    notes?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductionCreateFormOverridesProps = {
    ProductionCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    expectedUnits?: FormProps<TextFieldProps>;
    expectedPackages?: FormProps<TextFieldProps>;
    expectedPallets?: FormProps<TextFieldProps>;
    standard?: FormProps<SwitchFieldProps>;
    extraUnits?: FormProps<TextFieldProps>;
    notes?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductionCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductionCreateFormInputValues) => ProductionCreateFormInputValues;
    onSuccess?: (fields: ProductionCreateFormInputValues) => void;
    onError?: (fields: ProductionCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductionCreateFormInputValues) => ProductionCreateFormInputValues;
    onValidate?: ProductionCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductionCreateForm(props: ProductionCreateFormProps): React.ReactElement;
