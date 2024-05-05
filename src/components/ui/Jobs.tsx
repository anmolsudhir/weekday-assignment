import { Box, Grid } from "@mui/material"
import JobCard from "./JobCard"
import { type JobCardPropType } from "@/lib/types"
import { useEffect, useRef, useState } from "react"
import { JobCardSkeleton } from "@/components"

function Jobs() {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<JobCardPropType[]>([])
  const [offset, setCurrentOffset] = useState<number>(0)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const fetchJobs = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 12,
      "offset": offset * 12
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.json())
      .then((result: { jdList: JobCardPropType[] }) => {
        setData([...data, ...result.jdList])
        setLoading(false)
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchJobs()
    return () => { }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  useEffect(() => {
    setTimeout(() => {
      if (loadMoreRef.current) {
        const observer = new IntersectionObserver((e) => {
          const { target } = e[0]
          if (
            loadMoreRef.current &&
            target.scrollHeight - target.scrollTop === target.clientHeight
          ) {
            setCurrentOffset((prevOffset) => prevOffset + 1)
          }
        }, {
          threshold: 0.25
        });
        observer.observe(loadMoreRef.current);

        return () => {
          observer.disconnect()
        };
      }
    }, 1000)

    return () => { }
  }, []);

  if (loading)
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <JobCardSkeleton nCards={12} />
        </Grid>
      </Box>
    )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {
          data.map((jobData: JobCardPropType, idx: number) => (
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
              key={jobData.jdUid + `${idx}`}
              item
              xs={12}
              md={6}
              lg={4}>
              <JobCard {...jobData} />
            </Grid>
          ))
        }
        <JobCardSkeleton ref={loadMoreRef} nCards={3} />
      </Grid>
    </Box>
  )
}

export default Jobs