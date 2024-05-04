import { Avatar, Box, Button, Card, CardContent, Paper, Stack, Typography } from "@mui/material"

function JobCard() {
  return (
    <Card elevation={1} sx={{
      borderRadius: '20px',
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px',
      padding: '8px'
    }}>
      <CardContent>
        <JobCardChip />
        <JobCardHeader />
        <JobCardBody />
        <JobCardActions />
      </CardContent>
    </Card>
  )
}

function JobCardChip() {
  return (
    <Paper elevation={1} sx={{
      borderRadius: '20px',
      boxShadow: 'rgba(6, 6, 6, 0.05) 0px 2px 6px 0px',
      border: '1px solid rgb(230, 230, 230)',
      width: 'fit-content',
      padding: '4px 6px',
      marginBottom: '12px'
    }}>
      <Typography variant="body1" sx={{ fontSize: 10 }} color="text.secondary">
        ⏳ Posted 25 days ago
      </Typography>
    </Paper>
  )
}

function JobCardHeader() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "start" }}>
      <Avatar variant="rounded" src="" alt="" sizes="" />
      <Stack spacing={0.25}>
        <Typography variant="h3" sx={{ fontSize: 13, letterSpacing: "1px" }} color="text.secondary">
          Company Name
        </Typography>
        <Typography variant="body2">
          Role
        </Typography>
        <Typography variant="caption">
          India
        </Typography>
      </Stack>
    </Box>
  )
}

function JobCardBody() {
  return (
    <>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Estimated Salary: ₹30 - 50 LPA ✅
      </Typography>
      <Typography variant="h5">
        About Comapny:
      </Typography>
      <Box
        position={'relative'}
        height={'250px'}
      >
        <Box
          sx={{
            background: 'linear-gradient(to top, white 0%, transparent 100%);',
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
            paddingBottom: '0.5rem'
          }}
        >
          <Typography sx={{ color: "#4d47db" }}>
            View Job
          </Typography>
        </Box>
        <Stack>
          <Typography variant="body1">About Us</Typography>
          <Typography variant="body2">
            Firefly is a Cloud Asset Management solution that enables DevOps, SRE, and Cloud Platform teams to rediscover their entire cloud footprint, understand which parts of it are codified vs unmanaged, detect drifts to prevent service failures, classify assets using Policy-as-Code, and manage a single inventory of all their cloud resources across Multi-Cloud, and Kubernetes clusters.
          </Typography>
        </Stack>
      </Box>
      <Box sx={{
        margin: "12px 0",
      }}>
        <Typography variant="h3" sx={{ fontSize: 13, letterSpacing: "1px" }} color="text.secondary">
          Minimum Experience
        </Typography>
        <Typography variant="body1">
          3 Years
        </Typography>
      </Box>
    </>
  )
}

function JobCardActions() {
  return (
    <Box gap={1} display={'flex'} flexDirection={'column'} margin={0} padding={0} marginTop={1}>
      <Button
        sx={{
          borderRadius: "8px",
          backgroundColor: "rgb(85, 239, 196)",
          color: "black",
          fontSize: '16px',
          boxShadow: "none"
        }}
        size="large"
        variant="contained"
        fullWidth
      >
        ⚡&nbsp;Easy Apply
      </Button>
      <Button
        sx={{
          borderRadius: "8px",
          backgroundColor: "rgb(73, 67, 218)",
          fontWeight: 200,
          boxShadow: "none"
        }}
        size="large"
        variant="contained"
        fullWidth
      >
        Unlock Referals Asks
      </Button>
    </Box>
  )
}

export default JobCard