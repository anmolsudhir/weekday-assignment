import { Container, Stack } from "@mui/material";
import Jobs from "../components/Jobs";
import Filters from "../components/Filters";
import '@fontsource/lexend/300.css'
import '@fontsource/lexend/400.css'
import '@fontsource/lexend/500.css'
import '@fontsource/lexend/700.css'

function JobSearchPage() {

  return (
    <Container maxWidth='lg' disableGutters>
      <Stack spacing={2}>
        <Filters />
        <Jobs />
      </Stack>
    </Container>
  )
}

export default JobSearchPage;