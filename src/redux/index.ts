import {
  setCompanyName,
  setLocation,
  setMinBasePay,
  setMinExperience,
  setRemoteOrOnsite,
  setRole,
  setTechStack,
} from "./features/filterSlice";
import {
  jobsSlice,
  setJobs,
  setFilteredJobs,
  setJobsLoading,
} from "./features/jobsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useGetJobsQuery } from "./query";
import { store } from "./store";

export {
  jobsSlice,
  setCompanyName,
  setJobs,
  setFilteredJobs,
  setJobsLoading,
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
