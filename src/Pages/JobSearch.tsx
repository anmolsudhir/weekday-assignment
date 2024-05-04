import { Container, Stack } from "@mui/material";
import Jobs from "../components/Jobs";
import Filters from "../components/Filters";

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