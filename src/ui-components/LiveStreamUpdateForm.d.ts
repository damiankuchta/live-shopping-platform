/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LiveStream } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LiveStreamUpdateFormInputValues = {
    name?: string;
    ivs_url?: string;
    start_date?: string;
};
export declare type LiveStreamUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    ivs_url?: ValidationFunction<string>;
    start_date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LiveStreamUpdateFormOverridesProps = {
    LiveStreamUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    ivs_url?: PrimitiveOverrideProps<TextFieldProps>;
    start_date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LiveStreamUpdateFormProps = React.PropsWithChildren<{
    overrides?: LiveStreamUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    liveStream?: LiveStream;
    onSubmit?: (fields: LiveStreamUpdateFormInputValues) => LiveStreamUpdateFormInputValues;
    onSuccess?: (fields: LiveStreamUpdateFormInputValues) => void;
    onError?: (fields: LiveStreamUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LiveStreamUpdateFormInputValues) => LiveStreamUpdateFormInputValues;
    onValidate?: LiveStreamUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LiveStreamUpdateForm(props: LiveStreamUpdateFormProps): React.ReactElement;
