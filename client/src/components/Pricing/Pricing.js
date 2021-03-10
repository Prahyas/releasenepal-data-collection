import React from "react";
import { Button } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiTiktok />
                </PricingCardIcon>
                <PricingCardPlan>Verify Tiktok</PricingCardPlan>
                <PricingCardCost>Rs 000</PricingCardCost>
                <PricingCardLength>only</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Lorem Ipsum</PricingCardFeature>
                  <PricingCardFeature>10,000 Lorem Ipsum</PricingCardFeature>
                  <PricingCardFeature>Lorem Ipsum</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaFacebook />
                </PricingCardIcon>
                <PricingCardPlan>Verify Facebook</PricingCardPlan>
                <PricingCardCost>Rs 000</PricingCardCost>
                <PricingCardLength>only</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Lorem Ipsum</PricingCardFeature>
                  <PricingCardFeature>10,000 Lorem Ipsum</PricingCardFeature>
                  <PricingCardFeature>Lorem Ipsum</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaInstagram />
                </PricingCardIcon>
                <PricingCardPlan>Verify Instagram</PricingCardPlan>
                <PricingCardCost>Rs 000</PricingCardCost>
                <PricingCardLength>only</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Lorem Ipsum</PricingCardFeature>
                  <PricingCardFeature>10,000 Lorem Ipsum</PricingCardFeature>
                  <PricingCardFeature>Lorem Ipsum</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
