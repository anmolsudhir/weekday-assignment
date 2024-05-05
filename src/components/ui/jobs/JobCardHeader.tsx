import { capitalizeFirstLetter } from "@/lib";
import { Job } from "@/lib";
import { Avatar, Box, Stack, Typography, Link } from "@mui/material";

function JobCardHeader({
  companyName,
  logoUrl,
  jobRole,
  location,
  jdLink,
}: Partial<Job>) {
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
        <Link
          href={jdLink || "#"}
          color="text.secondary"
          sx={{
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography
            variant="h3"
            fontSize={14}
            letterSpacing={"1px"}
            color="text.secondary"
          >
            {companyName}
          </Typography>
        </Link>
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
