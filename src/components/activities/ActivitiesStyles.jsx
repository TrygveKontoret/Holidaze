import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: 30px;

  h2 {
    margin-top: 30px;
    padding-left: 25px;
    font-size: 35px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    margin-top: 30px;
    width: 100%;

    .card {
      padding: 10px;
      transition: 0.5s;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      border-radius: 5px;
      margin: 25px;

      p {
        padding-top: 10px;
        height: 150px;
        overflow: hidden;
      }

      &:hover {
        transform: scale(1.05);
        transition: 0.5s;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
          rgba(17, 17, 26, 0.05) 0px 8px 32px;
      }
      h4 {
        text-align: center;
        border-top: 1px solid lightgray;
      }

      h3 {
        padding-bottom: 10px;
        height: 50px;
        padding-top: 10px;
      }

      .imgCont {
        height: 300px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  @media (min-width: 1580px) {
    .wrapper {
      display: grid;
      grid-template-columns: repeat(4, minmax(300px, 1fr));
      grid-gap: 1rem;
    }
  }
`;
