import { Container, Stack } from "@mui/material";
import { Jobs, Filters, CustomThemeProvider } from "@/components";

function JobSearchPage() {
  return (
    <CustomThemeProvider>
      <Container maxWidth="lg" disableGutters>
        <Stack spacing={2}>
          <Filters />
          <Jobs />
        </Stack>
      </Container>
    </CustomThemeProvider>
  );
}

export default JobSearchPage;
