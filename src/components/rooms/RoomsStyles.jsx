import styled from "styled-components";

export const StyledRoom = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 30px;
  }

  h2 {
    padding-left: 30px;
  }

  @media (max-width: 450px) {
    .wrapper {
      padding: 10px;
    }
    h2 {
      padding-left: 10px;
    }
  }
`;
