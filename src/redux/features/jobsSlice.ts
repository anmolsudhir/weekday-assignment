import { Job } from "@/lib";
import { createSlice } from "@reduxjs/toolkit";

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

export default jobsSlice.reducer;
