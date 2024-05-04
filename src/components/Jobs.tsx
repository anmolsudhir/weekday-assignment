import { Grid } from "@mui/material"
import JobCard from "./JobCard"

function Jobs() {
  return (
    <Grid container spacing={{ xs: 3 }}>
      <Grid item xs={12} md={6} lg={4}>
        <JobCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <JobCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <JobCard />
      </Grid>
    </Grid>
  )
}

export default Jobs