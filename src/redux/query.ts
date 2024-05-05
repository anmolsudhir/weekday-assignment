import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "@/lib";

interface JobResponse {
  jdList: Job[];
  total: number;
}

const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weekday.technology/adhoc",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query<JobResponse, { offset: number; limit: number }>({
      query: ({ offset, limit }) => ({
        url: "/getSampleJdJSON",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: limit,
          offset: offset * limit,
        }),
      }),
      transformResponse: (response: JobResponse) => response,
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;

export default jobsApi;
