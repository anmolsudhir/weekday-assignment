import { Job } from "@/lib";
import { Card, CardContent } from "@mui/material";
import JobCardChip from "./JobCardChip";
import JobCardBody from "./JobCardBody";
import JobCardHeader from "./JobCardHeader";
import JobCardActions from "./JobCardActions";

function JobCard(jobData: Job) {
  return (
    <Card elevation={1}>
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
