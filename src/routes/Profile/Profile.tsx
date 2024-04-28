import React from "react";
import { BasicInfo } from "./components/BasicInfo";
import { Skill } from "./components/Skill";
import { Career } from "./components/Career";
import { Internship } from "./components/Internship";
import { Hackathon } from "./components/Hackathon";

export const ProfilePage = () => {
  return (
    <div>
      <BasicInfo />
      <Skill />
      <Career />
      <Internship />
      <Hackathon />
    </div>
  );
};
