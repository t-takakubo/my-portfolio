import React from "react";
import Header from "../components/Header/Header";
import BasicInfo from "../components/Profile/BasicInfo";
import Skill from "../components/Profile/Skill";
import Career from "../components/Profile/Career";
import Internship from "../Internship";
import Hackathon from "../components/Profile/Hackathon";

const Profile = () => {
  return (
    <div>
      <Header />
      <BasicInfo />
      <Skill />
      <Career />
      <Internship />
      <Hackathon />
    </div>
  );
};

export default Profile;
