import { capitalizeFirstLetter } from "@/lib";
import { JobCardPropType } from "@/lib/types";
import { Avatar, Box, Stack, Typography } from "@mui/material";

function JobCardHeader({
  companyName,
  logoUrl,
  jobRole,
  location,
}: Partial<JobCardPropType>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        alignItems: "start",
      }}
    >
      <Avatar
        variant="rounded"
        src={logoUrl as string}
        alt={companyName as string}
      >
        {companyName?.charAt(0)?.toUpperCase() || "C"}
      </Avatar>
      <Stack spacing={0.25}>
        <Typography
          variant="h3"
          fontSize={14}
          letterSpacing={"1px"}
          color="text.secondary"
        >
          {companyName}
        </Typography>
        <Typography variant="body2" fontWeight={300}>
          {capitalizeFirstLetter(jobRole) || "-"}
        </Typography>
        <Typography variant="caption" fontWeight={400}>
          {capitalizeFirstLetter(location) || "-"}
        </Typography>
      </Stack>
    </Box>
  );
}

export default JobCardHeader;
