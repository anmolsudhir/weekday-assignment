import {
  setCompanyName,
  setLocation,
  setMinBasePay,
  setMinExperience,
  setRemoteOrOnsite,
  setRole,
  setTechStack,
} from "./features/filterSlice";
import { jobsSlice, setJobs } from "./features/jobsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useGetJobsQuery } from "./query";
import { store } from "./store";

export {
  jobsSlice,
  setCompanyName,
  setJobs,
  setLocation,
  setMinBasePay,
  setMinExperience,
  setRemoteOrOnsite,
  setRole,
  setTechStack,
  store,
  useAppDispatch,
  useAppSelector,
  useGetJobsQuery,
};
