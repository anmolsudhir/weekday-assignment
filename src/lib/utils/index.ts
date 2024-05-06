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

export function getFilteredJobs(jobs: Job[], filters: Filters): Job[] {
  jobs.filter((job: Job) => {});
  return jobs;
}
