import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { BoxProps } from "@mui/material";

export interface Job {
  jdUid: string | null;
  jdLink: string | null;
  jobDetailsFromCompany: string | null;
  maxJdSalary: number | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string | null;
  location: string | null;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string | null;
  companyName: string | null;
  logoUrl: string | null;
}

export interface OptionsType {
  label: string;
}

export interface InputWrapperProps extends BoxProps {
  focused: boolean;
}

export interface InputProp
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  getInputProps: () => React.InputHTMLAttributes<HTMLInputElement> & {
    ref: React.Ref<HTMLInputElement>;
  };
}

export interface InputActionsProps {
  noOptionSelected: boolean;
  focused: boolean;
  popupOpen: boolean;
  getClearProps: () => React.HTMLAttributes<HTMLButtonElement>;
  getPopupIndicatorProps: () => React.HTMLAttributes<HTMLButtonElement>;
}
