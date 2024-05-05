import { Stack, useTheme, Button } from "@mui/material";

function JobCardActions() {
  const theme = useTheme();
  return (
    <Stack spacing={1}>
      <Button
        sx={{
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        }}
        size="large"
        variant="contained"
        color="primary"
        fullWidth
      >
        ⚡&nbsp;Easy Apply
      </Button>
      <Button
        sx={{
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
        size="large"
        variant="contained"
        color="secondary"
        fullWidth
      >
        Unlock Referals Asks
      </Button>
    </Stack>
  );
}

export default JobCardActions;
