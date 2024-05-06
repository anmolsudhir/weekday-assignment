import { Box } from "@mui/material";
import AutoComplete from "./AutoComplete";
import { useAppSelector } from "@/redux";
import { useEffect } from "react";
import {
  minExperience,
  roleList,
  techStack,
  minSalary,
  remoteOrOnsite,
  filterId,
} from "@/config/siteConfig";
import { Input } from "@mui/base/Input";

function Filters() {
  const filters = useAppSelector((state) => state.filters);

  useEffect(() => {
    console.log(filters);
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
    </Box>
  );
}

export default Filters;
