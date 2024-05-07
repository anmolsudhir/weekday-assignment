import { JobCardSkeleton } from "@/components";
import { Job, getFilteredJobs } from "@/lib";
import {
  setFilteredJobs,
  setJobs,
  useAppDispatch,
  useAppSelector,
  useGetJobsQuery,
} from "@/redux";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import JobCard from "./JobCard";

function Jobs() {
  const LIMIT = 12;
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const filters = useAppSelector((state) => state.filters);
  const filteredJobs = useAppSelector((state) => state.jobs.filteredJobs);
  const isJobsLoading = useAppSelector((state) => state.jobs.isJobsLoading);
  const dispatch = useAppDispatch();
  const [offset, setCurrentOffset] = useState<number>(0);
  const { ref, inView, entry } = useInView({});
  const { data, isLoading } = useGetJobsQuery(
    {
      offset,
      limit: LIMIT,
    },
    { refetchOnMountOrArgChange: true },
  );

  useEffect(() => {
    async function runJobManagementTask() {
      if (data) {
        const newFilteredJobs = getFilteredJobs(data.jdList, filters);
        if (
          !newFilteredJobs?.length ||
          (inView &&
            newFilteredJobs?.length < 6 &&
            offset * LIMIT < (data?.total || 960))
        ) {
          setCurrentOffset((offset) => offset + 1);
        }
        const filteredJobs = getFilteredJobs(
          [...jobs, ...data.jdList],
          filters,
        );
        dispatch(setJobs([...jobs, ...data.jdList]));
        dispatch(setFilteredJobs(filteredJobs));
      }
    }

    runJobManagementTask();
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    if (inView && entry?.isIntersecting)
      setCurrentOffset((prevOffset) => prevOffset + 1);
  }, [inView, entry]);

  if (isLoading || isJobsLoading)
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <JobCardSkeleton nCards={12} />
        </Grid>
      </Box>
    );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {filteredJobs.map((jobData: Job, idx: number) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={jobData.jdUid + `${idx}`}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <JobCard {...jobData} />
          </Grid>
        ))}
        {offset * LIMIT < (data?.total || 960) ? (
          <JobCardSkeleton ref={ref} nCards={6} />
        ) : null}
      </Grid>
    </Box>
  );
}

export default Jobs;
