import { Job } from "@/lib";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface JobsState {
  jobs: Job[];
}

const initialState: JobsState = {
  jobs: [],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { setJobs } = jobsSlice.actions;

export const selectCount = (state: RootState) => state.jobs.jobs;

export default jobsSlice.reducer;
