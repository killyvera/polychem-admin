/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SheduledCreateFormInputValues = {};
export declare type SheduledCreateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SheduledCreateFormOverridesProps = {
    SheduledCreateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type SheduledCreateFormProps = React.PropsWithChildren<{
    overrides?: SheduledCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SheduledCreateFormInputValues) => SheduledCreateFormInputValues;
    onSuccess?: (fields: SheduledCreateFormInputValues) => void;
    onError?: (fields: SheduledCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SheduledCreateFormInputValues) => SheduledCreateFormInputValues;
    onValidate?: SheduledCreateFormValidationValues;
} & React.CSSProperties>;
export default function SheduledCreateForm(props: SheduledCreateFormProps): React.ReactElement;
