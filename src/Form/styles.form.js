import styled from "styled-components";

export const FormContainer = styled.div``;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormHeader = styled.h1``;

export const TermsAndConditions = styled.div``;

export const StyleBase = styled.div`
  padding: 10px;
  background-color: #fff;
  border: 1px solid #efeff1;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 10px 0;
  position: relative;
`;

export const StyledInputContainer = styled(StyleBase)`
  padding: 10px;
  background-color: #fff;
  border: 1px solid #efeff1;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 10px 0;
  position: relative;
`;

export const StyledButton = styled(StyleBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const Or = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);;
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

export const Span = styled.span`
  background-color: #fff;
  padding: 0 10px;
  color: #000;
`;

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 0;
`;

export const DualInputContainer = styled.div``;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  font-size: 14px;
  color: #000;
  width: 100%;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 6px;
`;
