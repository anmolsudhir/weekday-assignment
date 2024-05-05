import { JobCardSkeleton } from "@/components";
import { Job } from "@/lib";
import {
  jobsSlice,
  useAppDispatch,
  useAppSelector,
  useGetJobsQuery,
} from "@/redux";
import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import JobCard from "./JobCard";

function Jobs() {
  const LIMIT = 12;
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const dispatch = useAppDispatch();
  const [offset, setCurrentOffset] = useState<number>(0);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetJobsQuery(
    {
      offset,
      limit: LIMIT,
    },
    { refetchOnMountOrArgChange: true },
  );

  const handleIntersection = (e: IntersectionObserverEntry[]) => {
    const { target } = e[0];
    if (
      loadMoreRef.current &&
      target.scrollHeight - target.scrollTop === target.clientHeight
    ) {
      setCurrentOffset((prevOffset) => prevOffset + 1);
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(jobsSlice.actions.setJobs([...jobs, ...data.jdList]));
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (loadMoreRef.current) {
        const observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.25,
        });
        observer.observe(loadMoreRef.current);
        return () => {
          observer.disconnect();
        };
      }
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  if (isLoading)
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
        {jobs.map((jobData: Job, idx: number) => (
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
        <JobCardSkeleton ref={loadMoreRef} nCards={6} />
      </Grid>
    </Box>
  );
}

export default Jobs;
