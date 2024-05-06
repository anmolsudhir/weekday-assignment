import { createSlice } from "@reduxjs/toolkit";
import { type Filters } from "@/lib";

const initialState: Filters = {
  minExperience: null,
  companyName: null,
  location: null,
  remoteOrOnsite: "",
  techStack: [],
  role: [],
  minBasePay: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMinExperience: (state, action) => {
      state.minExperience = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setRemoteOrOnsite: (state, action) => {
      state.remoteOrOnsite = action.payload;
    },
    setTechStack: (state, action) => {
      state.techStack = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },
  },
});

export const {
  setMinExperience,
  setCompanyName,
  setLocation,
  setRemoteOrOnsite,
  setTechStack,
  setRole,
  setMinBasePay,
} = filtersSlice.actions;

export default filtersSlice.reducer;
