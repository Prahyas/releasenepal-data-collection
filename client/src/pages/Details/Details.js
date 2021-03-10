import React from "react";
import { Button } from "../../globalStyles";
import {
  Form,
  FormInput,
  FormContainer,
  FormLabel,
  FormSubHeading,
  FormSubText,
  FormDisplayRow,
  FormInputSmall,
  FormInputSelect,
  FormInputOption,
  FormSubTextFiles,
} from "./Data";

function Details() {
  return (
    <FormContainer>
      <FormLabel>
        <FormSubHeading>
          Your information is stored on our secure database.
        </FormSubHeading>
        <FormSubText>PLease fill the form.</FormSubText>
        <Form>
          <FormDisplayRow>
            <FormInputSmall
              name="fullName"
              type="text"
              placeholder="Your Full Name"
            />
            <FormInputSmall
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </FormDisplayRow>
          <FormDisplayRow>
            <FormInputSmall
              name="address"
              type="text"
              placeholder="Your Address"
            />
            <FormInputSmall
              name="phoneNumber"
              type="number"
              placeholder="Your Contact"
            />
          </FormDisplayRow>
          <FormInput
            name="tiktokId"
            type="text"
            placeholder="Your TikTok Username"
          />

          <FormInput
            name="facebookUrl"
            type="text"
            placeholder="Your Facebook Url"
          />
          <FormInput
            name="instagramUrl"
            type="text"
            placeholder="Your Instagram Url"
          />
          <FormInput
            name="youtubeUrl"
            type="text"
            placeholder="Your Youtube Url"
          />
          <FormDisplayRow>
            <FormInputSelect name="type" type="select">
              <FormInputOption selected disabled>
                Your Organization
              </FormInputOption>
              <FormInputOption>News/Media</FormInputOption>
              <FormInputOption>Sports</FormInputOption>
              <FormInputOption>Government/Politics</FormInputOption>
              <FormInputOption>Music</FormInputOption>
              <FormInputOption>Fashion</FormInputOption>
              <FormInputOption>Entertainment</FormInputOption>
              <FormInputOption>Blogger/Influencer</FormInputOption>
              <FormInputOption>Business/Brand/Organization</FormInputOption>
              <FormInputOption>Other</FormInputOption>
            </FormInputSelect>
            <FormInputSelect name="type" type="select">
              <FormInputOption selected disabled>
                Your Type
              </FormInputOption>
              <FormInputOption>Organizational/Business</FormInputOption>
              <FormInputOption>Individual/Perosn</FormInputOption>
            </FormInputSelect>
          </FormDisplayRow>
          <FormSubTextFiles>Your document.</FormSubTextFiles>
          <FormInput
            name="photoLabel"
            type="file"
            placeholder="Your Document"
          />
          <FormSubTextFiles>Your digital signature.</FormSubTextFiles>

          <FormInput
            name="digitalSignature"
            type="file"
            placeholder="Your Digital Signature"
          />
          <FormSubTextFiles>
            Government-issued company or corporate registration.
          </FormSubTextFiles>
          <FormInput
            name="photoLabel"
            type="file"
            placeholder="Your Document"
          />
          <FormSubTextFiles>Company tax revenue document.</FormSubTextFiles>
          <FormInput
            name="digitalSignature"
            type="file"
            placeholder="Government Issued Document"
          />
          <FormSubTextFiles>
            Official articles of incorporation or association.
          </FormSubTextFiles>
          <FormInput
            name="digitalSignature"
            type="file"
            placeholder="Company tax revenue document"
          />

          <Button fontBig>Submit</Button>
        </Form>
      </FormLabel>
    </FormContainer>
  );
}

export default Details;
