/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TeamMember } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamMemberUpdateFormInputValues = {
    cognitoId?: string;
    shift?: string;
};
export declare type TeamMemberUpdateFormValidationValues = {
    cognitoId?: ValidationFunction<string>;
    shift?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamMemberUpdateFormOverridesProps = {
    TeamMemberUpdateFormGrid?: FormProps<GridProps>;
    cognitoId?: FormProps<TextFieldProps>;
    shift?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamMemberUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamMemberUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teamMember?: TeamMember;
    onSubmit?: (fields: TeamMemberUpdateFormInputValues) => TeamMemberUpdateFormInputValues;
    onSuccess?: (fields: TeamMemberUpdateFormInputValues) => void;
    onError?: (fields: TeamMemberUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TeamMemberUpdateFormInputValues) => TeamMemberUpdateFormInputValues;
    onValidate?: TeamMemberUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamMemberUpdateForm(props: TeamMemberUpdateFormProps): React.ReactElement;
