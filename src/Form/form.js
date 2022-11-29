import {
  FormContainer,
  StyledForm,
  StyledInput,
  InputAndLabelContainer,
  FormRow,
  StyledLabel,
  StyledInputContainer,
  FormHeader,
  StyledButton,
  Or,
  Span
} from "./styles.form";

export default function Form() {
  return (
    <FormContainer>
      <StyledForm>
        <FormHeader>Sign Up</FormHeader>
        <FormRow>
          <InputAndLabelContainer>
            <StyledLabel>First Name</StyledLabel>
            <StyledInputContainer>
              <StyledInput
                name="firstName"
                type="text"
                placeholder="First Name"
              />
            </StyledInputContainer>
          </InputAndLabelContainer>
          <InputAndLabelContainer>
            <StyledLabel>Last Name</StyledLabel>
            <StyledInputContainer>
              <StyledInput
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </StyledInputContainer>
          </InputAndLabelContainer>
        </FormRow>

        <FormRow>
          <InputAndLabelContainer>
            <StyledLabel>Email</StyledLabel>

            <StyledInputContainer>
              <StyledInput name="email" type="text" placeholder="Email" />
            </StyledInputContainer>
          </InputAndLabelContainer>
        </FormRow>

        <FormRow>
          <InputAndLabelContainer>
            <StyledLabel>Password</StyledLabel>
            <StyledInputContainer>
              <StyledInput
                name="password"
                type="password"
                placeholder="Password"
              />
            </StyledInputContainer>
          </InputAndLabelContainer>
        </FormRow>

        <Or>
          <Span>OR</Span>
        </Or>

        <StyledButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            />
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            />
          </svg>
          Facebook
        </StyledButton>

        <StyledButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          Google
        </StyledButton>

        <StyledButton>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="24px"
            height="24px"
          >
            <path d="M44.529,34.75c-1.081,2.393-1.598,3.464-2.986,5.579c-1.94,2.954-4.678,6.64-8.064,6.665c-3.012,0.025-3.789-1.965-7.876-1.932c-4.087,0.02-4.939,1.969-7.954,1.938c-3.386-0.031-5.978-3.352-7.92-6.3C4.3,32.429,3.727,22.736,7.082,17.579c2.374-3.657,6.13-5.805,9.657-5.805c3.592,0,5.85,1.974,8.82,1.974c2.882,0,4.637-1.979,8.791-1.979c3.142,0,6.464,1.712,8.838,4.666C35.422,20.69,36.684,31.782,44.529,34.75z M31.197,8.468c1.511-1.94,2.657-4.677,2.242-7.468c-2.466,0.168-5.349,1.743-7.034,3.782c-1.526,1.857-2.791,4.615-2.298,7.283C26.797,12.152,29.581,10.548,31.197,8.468z" />
          </svg>
          Apple
        </StyledButton>
      </StyledForm>
    </FormContainer>
  );
}
