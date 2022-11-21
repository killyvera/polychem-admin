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
export declare type TeamMemberCreateFormInputValues = {
    cognitoId?: string;
    shift?: string;
};
export declare type TeamMemberCreateFormValidationValues = {
    cognitoId?: ValidationFunction<string>;
    shift?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamMemberCreateFormOverridesProps = {
    TeamMemberCreateFormGrid?: FormProps<GridProps>;
    cognitoId?: FormProps<TextFieldProps>;
    shift?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamMemberCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamMemberCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamMemberCreateFormInputValues) => TeamMemberCreateFormInputValues;
    onSuccess?: (fields: TeamMemberCreateFormInputValues) => void;
    onError?: (fields: TeamMemberCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TeamMemberCreateFormInputValues) => TeamMemberCreateFormInputValues;
    onValidate?: TeamMemberCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamMemberCreateForm(props: TeamMemberCreateFormProps): React.ReactElement;
