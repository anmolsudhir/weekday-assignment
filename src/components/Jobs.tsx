import { Box, Grid } from "@mui/material"
import JobCard from "./JobCard"

function Jobs() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {
          Array.from({ length: 12 }).map((elem) => (
            <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} item xs={12} md={6} lg={4}>
              <JobCard />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Jobs