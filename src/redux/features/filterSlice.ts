import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  minExperience: number | null | undefined;
  companyName: string | null | undefined;
  location: string | null | undefined;
  remoteOrOnsite: string;
  techStack: string[];
  role: string[];
  minBasePay: number | null | undefined;
}

const initialState: FilterState = {
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
