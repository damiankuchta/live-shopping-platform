/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LiveStreamCreateFormInputValues = {
    name?: string;
    ivs_url?: string;
    start_date?: string;
};
export declare type LiveStreamCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    ivs_url?: ValidationFunction<string>;
    start_date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LiveStreamCreateFormOverridesProps = {
    LiveStreamCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    ivs_url?: PrimitiveOverrideProps<TextFieldProps>;
    start_date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LiveStreamCreateFormProps = React.PropsWithChildren<{
    overrides?: LiveStreamCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LiveStreamCreateFormInputValues) => LiveStreamCreateFormInputValues;
    onSuccess?: (fields: LiveStreamCreateFormInputValues) => void;
    onError?: (fields: LiveStreamCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LiveStreamCreateFormInputValues) => LiveStreamCreateFormInputValues;
    onValidate?: LiveStreamCreateFormValidationValues;
} & React.CSSProperties>;
export default function LiveStreamCreateForm(props: LiveStreamCreateFormProps): React.ReactElement;
