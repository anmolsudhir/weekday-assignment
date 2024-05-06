import { Job } from "@/lib";
import { createSlice } from "@reduxjs/toolkit";

interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
  isJobsLoading: boolean;
}

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
  isJobsLoading: false,
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
    setJobsLoading: (state, action) => {
      state.isJobsLoading = action.payload;
    },
  },
});

export const { setJobs, setFilteredJobs, setJobsLoading } = jobsSlice.actions;

export default jobsSlice.reducer;
