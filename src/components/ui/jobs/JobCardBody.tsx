import { Job } from "@/lib";
import { Box, Stack, Typography, useTheme } from "@mui/material";

function JobCardBody({
  jobDetailsFromCompany,
  minJdSalary,
  maxJdSalary,
  minExp,
  salaryCurrencyCode,
}: Partial<Job>) {
  const getSalaryDetail = (
    min: number | null | undefined,
    max: number | null | undefined,
    currencyCode: string | null | undefined,
  ): string => {
    if (min && max) {
      if (currencyCode === "USD") return `$${min}K - ${max}K ✅`;
      return `₹${min} - ${max} LPA ✅`;
    }

    if (!(min || max)) return "Not Disclosed";
    if (min) {
      if (currencyCode === "USD") return `$${min}K ✅`;
      return `₹${min} LPA ✅`;
    }
    if (max) {
      if (currencyCode === "USD") return `$${max}K ✅`;
      return `₹${max} LPA ✅`;
    }

    return "Not Disclosed";
  };

  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="body2"
        fontWeight={200}
        color="text.secondary"
        gutterBottom
        margin={"4px 0 12px 0"}
      >
        {"Estimated Salary: " +
          getSalaryDetail(minJdSalary, maxJdSalary, salaryCurrencyCode)}
      </Typography>
      <Typography variant="body1" fontWeight={400}>
        About Comapny:
      </Typography>
      <Box
        position={"relative"}
        height={"fit-content"}
        maxHeight={"250px"}
        overflow={"hidden"}
      >
        <Box
          sx={{
            background: "linear-gradient(to top, white 0%, transparent 100%);",
            position: "absolute",
            width: "100%",
            height: "100%",
            bottom: "-4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
            paddingBottom: "0.5rem",
          }}
        >
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={200}
            variant="body2"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            View Job
          </Typography>
        </Box>
        <Stack>
          <Typography variant="body2" fontWeight={600}>
            About Us
          </Typography>
          <Typography variant="body2" fontWeight={200}>
            {jobDetailsFromCompany}
          </Typography>
        </Stack>
      </Box>
      <Stack margin={"12px 0"} spacing={0.75}>
        <Typography
          variant="h3"
          fontSize={13}
          letterSpacing={"1px"}
          color="text.secondary"
        >
          Minimum Experience
        </Typography>
        <Typography variant="body2" fontWeight={200}>
          {minExp ? `${minExp} Years` : "Not provided"}
        </Typography>
      </Stack>
    </Box>
  );
}

export default JobCardBody;
