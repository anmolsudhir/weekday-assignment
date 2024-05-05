import { Container, Stack } from "@mui/material";
import { Jobs, Filters, CustomThemeProvider } from "@/components";
import '@fontsource/lexend/300.css'
import '@fontsource/lexend/400.css'
import '@fontsource/lexend/500.css'
import '@fontsource/lexend/700.css'

function JobSearchPage() {
  return (
    <CustomThemeProvider>
      <Container maxWidth='lg' disableGutters>
        <Stack spacing={2}>
          <Filters />
          <Jobs />
        </Stack>
      </Container>
    </CustomThemeProvider>
  )
}

export default JobSearchPage;
