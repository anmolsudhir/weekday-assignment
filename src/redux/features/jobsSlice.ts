import { Job } from "@/lib";
import { createSlice } from "@reduxjs/toolkit";

interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
}

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setFilteredJobs: (state, action) => {
      state.filteredJobs = action.payload;
    },
  },
});

export const { setJobs, setFilteredJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
