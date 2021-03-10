import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #101522;
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-bottom: 24px;
  color: #fff;
`;

export const FormSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FormSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;

  @media screen and (max-width: 820px) {
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 100%;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
export const FormInputSmall = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 50%;
  &:nth-child(1) {
    margin-right: 20px;
  }

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FormDisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const FormInputSelect = styled.select`
  padding: 10px 20px;
  border-radius: 2px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 100%;
  &:nth-child(1) {
    margin-right: 20px;
  }

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
export const FormInputOption = styled.option`
  padding: 10px 20px;
  border-radius: 2px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 100%;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
export const FormSubTextFiles = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
`;
