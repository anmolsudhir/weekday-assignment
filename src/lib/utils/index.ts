import React from "react";
import type { Filters, Job } from "../types";

export function capitalizeFirstLetter(
  str: string | null | undefined,
): string | null {
  if (!str) return null;

  const strArray: string[] = str.split(" ");
  const resArray: string[] = [];
  strArray.forEach((strElem: string) => {
    resArray.push(strElem[0].toUpperCase() + strElem.slice(1));
  });

  return resArray.join(" ");
}

export function debounceSearch(
  func: React.ChangeEventHandler<HTMLInputElement>,
  delay: number,
) {
  let timeoutId: number;
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(e), delay);
  };
}

function findSubstring(
  mainStr: string | null,
  subStr: string | null | undefined,
): boolean {
  if (!subStr?.length) return true;
  if (!mainStr?.length) return false;
  if (mainStr.toLowerCase().includes(subStr.toLowerCase())) return true;
  return false;
}

function findRoles(roles: string[], role: string | null): boolean {
  if (!roles.length) return true;
  if (!role) return false;
  roles = roles.map((role) => role.toLowerCase());
  if (roles.includes(role)) return true;
  return false;
}

function findExperience(
  experience: number | null | undefined,
  minExp: number | null,
  maxExp: number | null,
): boolean {
  if (!experience) return true;
  if (!minExp && !maxExp) return false;
  if (minExp && maxExp) return experience >= minExp;
  if (maxExp && experience >= maxExp) return true;
  if (minExp && experience >= minExp) return true;
  return false;
}

function findSalary(
  expSalary: string | null | undefined,
  minJobSalary: number | null,
  maxJobSalary: number | null,
) {
  if (!expSalary) return true;
  if (!minJobSalary && maxJobSalary) return false;
  const intermediate = expSalary.slice(1, -1);
  const expSalaryNum = parseInt(intermediate);
  if (minJobSalary && minJobSalary >= expSalaryNum) return true;
  if (maxJobSalary && maxJobSalary >= expSalaryNum) return true;
  return false;
}

export function getFilteredJobs(jobs: Job[], filters: Filters): Job[] {
  const filteredJobs: Job[] = jobs.filter((job: Job) => {
    if (
      findSubstring(job.companyName, filters.companyName) &&
      (filters.remoteOrOnsite === "Remote"
        ? findSubstring(job.location, "Remote")
        : findSubstring(job.location, filters.location)) &&
      findRoles(filters.role, job.jobRole) &&
      findExperience(filters.minExperience, job.minExp, job.maxExp) &&
      findSalary(filters.minBasePay, job.minJdSalary, job.maxJdSalary)
    )
      return true;
    return false;
  });
  return filteredJobs;
}
