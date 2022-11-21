/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sheduled } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SheduledUpdateFormInputValues = {};
export declare type SheduledUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SheduledUpdateFormOverridesProps = {
    SheduledUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type SheduledUpdateFormProps = React.PropsWithChildren<{
    overrides?: SheduledUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sheduled?: Sheduled;
    onSubmit?: (fields: SheduledUpdateFormInputValues) => SheduledUpdateFormInputValues;
    onSuccess?: (fields: SheduledUpdateFormInputValues) => void;
    onError?: (fields: SheduledUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SheduledUpdateFormInputValues) => SheduledUpdateFormInputValues;
    onValidate?: SheduledUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SheduledUpdateForm(props: SheduledUpdateFormProps): React.ReactElement;
