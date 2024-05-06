import { configureStore } from "@reduxjs/toolkit/react";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import jobsApi from "./query";
import jobsSliceReducer from "./features/jobsSlice";
import filtersSliceReducer from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsSliceReducer,
    filters: filtersSliceReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {jobs: JobssState}
export type AppDispatch = typeof store.dispatch;

// Required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
