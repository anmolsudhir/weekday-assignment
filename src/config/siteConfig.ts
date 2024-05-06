import { FilterIdType } from "@/lib";
import {
  setCompanyName,
  setLocation,
  setMinBasePay,
  setMinExperience,
  setRemoteOrOnsite,
  setRole,
  setTechStack,
} from "@/redux";

export const roleList: string[] = [
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
];

export const techStack: string[] = [
  "Python",
  "Java",
  "GoLang",
  "Ruby/Rails",
  "C++",
  "Kotlin",
  "Django",
  "C#",
  "GraphQL",
  "Flask",
  "Typescript",
  "AWS",
  "Javascript",
  "Rust",
  "NodeJS",
  "React",
];

export const minExperience: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const minSalary: string[] = [
  "10L",
  "20L",
  "30L",
  "40L",
  "50L",
  "60L",
  "70L",
];

export const remoteOrOnsite: string[] = ["Remote", "On-Site"];

export const filterId = {
  role: "role" as FilterIdType,
  techStack: "tech-stack" as FilterIdType,
  experience: "experience" as FilterIdType,
  salary: "salary" as FilterIdType,
  companyName: "company-name" as FilterIdType,
  location: "location" as FilterIdType,
  remoteOnsite: "remote-onsite" as FilterIdType,
};

export const filterIdToReducerMapping = {
  role: setRole,
  "tech-stack": setTechStack,
  experience: setMinExperience,
  salary: setMinBasePay,
  "company-name": setCompanyName,
  location: setLocation,
  "remote-onsite": setRemoteOrOnsite,
};
