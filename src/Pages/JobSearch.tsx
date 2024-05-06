import { Container, Stack } from "@mui/material";
import { Jobs, Filters } from "@/components";

function JobSearchPage() {
  return (
    <Container maxWidth="lg" disableGutters>
      <Stack spacing={6}>
        <Filters />
        <Jobs />
      </Stack>
    </Container>
  );
}

export default JobSearchPage;
