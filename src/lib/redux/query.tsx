import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "@/lib";

const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weekday.technology/adhoc",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query<Job[], { offset?: number; limit: number }>({
      query: ({ offset = 0, limit }) => ({
        url: "/getSampleJdJSON",
        method: "POST",
        body: JSON.stringify({
          limit: limit,
          offset: offset * limit,
        }),
      }),
      transformResponse: (response: { jdList: Job[] }) => response.jdList,
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;

export default jobsApi;
