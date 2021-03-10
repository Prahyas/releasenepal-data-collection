import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";

function PrivacyPolicy() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}
    </>
  );
}

export default PrivacyPolicy;
