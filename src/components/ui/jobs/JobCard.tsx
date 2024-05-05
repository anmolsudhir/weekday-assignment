import { JobCardPropType } from "@/lib/types";
import { Card, CardContent } from "@mui/material";
import JobCardChip from "./JobCardChip";
import JobCardBody from "./JobCardBody";
import JobCardHeader from "./JobCardHeader";
import JobCardActions from "./JobCardActions";

function JobCard(jobData: JobCardPropType) {
  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
        padding: "4px",
        maxWidth: "480px",
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
  );
}

export default JobCard;
