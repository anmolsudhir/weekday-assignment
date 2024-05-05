import { Box, CircularProgress, Grid } from "@mui/material"
import JobCard from "./JobCard"
import { type JobCardPropType } from "./JobCard"
import { useEffect, useState } from "react"

function Jobs() {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<JobCardPropType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        "limit": 9,
        "offset": 0
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setData(result.jdList)
          setLoading(false)
        })
        .catch((error) => console.error(error));
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading)
    return <CircularProgress />

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {
          data.map((jobData: JobCardPropType) => (
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
              key={jobData.jdUid}
              item
              xs={12}
              md={6}
              lg={4}>
              <JobCard {...jobData} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Jobs