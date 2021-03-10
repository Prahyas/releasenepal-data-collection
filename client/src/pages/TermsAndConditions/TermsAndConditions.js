import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjThree } from "./Data";

function TermsAndConditions() {
  return (
    <>
      {/* <InfoSection {...homeObjOne} /> */}
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default TermsAndConditions;
