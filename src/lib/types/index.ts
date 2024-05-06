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

export interface Filters {
  minExperience: number | null | undefined;
  companyName: string | null | undefined;
  location: string | null | undefined;
  remoteOrOnsite: string;
  techStack: string[];
  role: string[];
  minBasePay: number | null | undefined;
}

export type OptionsType = string[] | number[];

export interface InputWrapperProps extends BoxProps {
  focused: boolean;
}

export interface InputProp
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  getInputProps?: () =>
    | (React.InputHTMLAttributes<HTMLInputElement> & {
        ref: React.Ref<HTMLInputElement>;
      })
    | undefined;
  variant?: "search" | undefined;
}

export interface InputActionsProps {
  noOptionSelected: boolean;
  focused: boolean;
  popupOpen: boolean;
  getClearProps: () => React.HTMLAttributes<HTMLButtonElement>;
  getPopupIndicatorProps: () => React.HTMLAttributes<HTMLButtonElement>;
}

export type FilterIdType =
  | "role"
  | "tech-stack"
  | "experience"
  | "salary"
  | "company-name"
  | "location"
  | "remote-onsite";
