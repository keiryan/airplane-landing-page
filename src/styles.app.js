import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
`;

export const Half = styled(Base)`
  flex: 1;
  height: 100%;
`;

export const RightHalf = styled(Half)`
  align-items: center;
  justify-content: center;
  background-color: inherit;
  padding: 20px;
`;

export const LeftHalf = styled(Half)`
  background-color: #f55c79;
  background: url("https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  background-size: cover;
  background-position: center;
  @media (max-width: 900px) {
    display: none;
  }
`;
