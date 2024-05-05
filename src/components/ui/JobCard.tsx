import { JobCardPropType } from "@/lib/types"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  Typography,
  useTheme
} from "@mui/material"
import { capitalizeFirstLetter } from "@/lib"


function JobCard(jobData: JobCardPropType) {
  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px',
        padding: '8px',
        maxWidth: '480px',
        height: '97.5%'
      }}
    >
      <CardContent>
        <JobCardChip />
        <JobCardHeader
          companyName={jobData.companyName}
          logoUrl={jobData.logoUrl}
          jobRole={jobData.jobRole}
          location={jobData.location}
        />
        <JobCardBody
          jobDetailsFromCompany={jobData.jobDetailsFromCompany}
          minJdSalary={jobData.minJdSalary}
          maxJdSalary={jobData.maxJdSalary}
          minExp={jobData.minExp}
          salaryCurrencyCode={jobData.salaryCurrencyCode}
        />
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

function JobCardHeader({
  companyName,
  logoUrl,
  jobRole,
  location
}: Partial<JobCardPropType>) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "start" }}>
      <Avatar variant="rounded" src={logoUrl as string} alt={companyName as string} >
        {companyName?.charAt(0)?.toUpperCase() || 'C'}
      </Avatar>
      <Stack spacing={0.25}>
        <Typography variant="h3" sx={{ fontSize: 13, letterSpacing: "1px" }} color="text.secondary">
          {companyName}
        </Typography>
        <Typography variant="body2">
          {capitalizeFirstLetter(jobRole)}
        </Typography>
        <Typography variant="caption">
          {capitalizeFirstLetter(location)}
        </Typography>
      </Stack>
    </Box>
  )
}

function JobCardBody({
  jobDetailsFromCompany,
  minJdSalary,
  maxJdSalary,
  minExp,
  salaryCurrencyCode
}: Partial<JobCardPropType>
) {
  return (
    <Box>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        {
          `Estimated Salary: ${salaryCurrencyCode === 'USD'
            ? '$'
            : '₹'
          }
          ${minJdSalary} - ${maxJdSalary}
          ${salaryCurrencyCode === 'USD'
            ? 'K'
            : 'LPA'
          } ✅`
        }
      </Typography>
      <Typography variant="h6">
        About Comapny:
      </Typography>
      <Box
        position={'relative'}
        height={'fit-content'}
        maxHeight={'250px'}
        overflow={'hidden'}
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
            {jobDetailsFromCompany}
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
          {minExp
            ? `${minExp} Years`
            : 'Not provided'
          }
        </Typography>
      </Box>
    </Box>
  )
}

function JobCardActions() {
  const theme = useTheme()
  return (
    <Stack spacing={1}>
      <Button
        sx={{
          "&:hover": {
            backgroundColor: theme.palette.primary.main
          }
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
            backgroundColor: theme.palette.secondary.main
          }
        }}
        size="large"
        variant="contained"
        color="secondary"
        fullWidth
      >
        Unlock Referals Asks
      </Button>
    </Stack>
  )
}

export default JobCard
