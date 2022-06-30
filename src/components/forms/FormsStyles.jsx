import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid #293070;
  border-radius: 5px;
  width: 50%;
  margin: 30px auto;
  transition: 0.5s;

  .cross {
    display: flex;
    justify-content: end;
    width: 100%;
    padding-right: 30px;
    cursor: pointer;
  }

  .success {
    color: green;
    font-size: 25px;
  }

  label {
    display: flex;
    justify-content: flex-start;
    width: 250px;
    margin: 10px 0 3px 0;
    font-size: 23px;
  }
  h2 {
    width: 250px;
  }

  input,
  textarea,
  select {
    width: 250px;
    padding: 5px;
  }

  span {
    color: red;
    font-weight: bold;
  }

  .featured {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    label {
      width: 100%;
    }
    input {
      font-size: 10px;
    }
  }

  button {
    width: 30%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #86cd82;
    color: black;
    font-size: 18px;
    margin: 15px 0;
    cursor: pointer;

    /* &:hover {
      cursor: pointer;
    } */
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  transition: 0.5s;
`;
