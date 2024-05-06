import {
  filterId,
  minExperience,
  minSalary,
  remoteOrOnsite,
  roleList,
  techStack,
} from "@/config/siteConfig";
import { Job, getFilteredJobs } from "@/lib";
import {
  setFilteredJobs,
  setJobsLoading,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { Box } from "@mui/material";
import { useEffect } from "react";
import AutoComplete from "./AutoComplete";
import SearchInput from "./SearchInput";

function Filters() {
  const filters = useAppSelector((state) => state.filters);
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setJobsLoading(true));
    const filteredJobs: Job[] = getFilteredJobs(jobs, filters);
    dispatch(setJobsLoading(false));
    dispatch(setFilteredJobs(filteredJobs));
    console.log(filters);
    // eslint-disable-next-line
  }, [filters]);

  return (
    <Box display={"flex"} gap={1} flexDirection={"row"} flexWrap={"wrap"}>
      <AutoComplete
        filterId={filterId.role}
        options={roleList}
        lable="Role"
        multiple
      />
      <AutoComplete
        filterId={filterId.techStack}
        options={techStack}
        lable="Tech Stack"
        multiple
      />
      <AutoComplete
        filterId={filterId.experience}
        options={minExperience}
        lable="Experience"
      />
      <AutoComplete
        filterId={filterId.salary}
        options={minSalary}
        lable="Minimum Base Salary"
      />
      <AutoComplete
        filterId={filterId.remoteOnsite}
        options={remoteOrOnsite}
        lable="Remote/On-Site"
      />
      <SearchInput lable="Company" filterId={filterId.companyName} />
      <SearchInput lable="Location" filterId={filterId.location} />
    </Box>
  );
}

export default Filters;
