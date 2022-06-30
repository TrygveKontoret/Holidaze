import styled from "styled-components";

export const StyledWrapper = styled.div`
  h1 {
    margin-top: 30px;
    padding-left: 25px;
  }

  h2 {
    margin-top: 30px;
    padding-left: 25px;
    font-size: 25px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;

    .card {
      padding: 10px;
      transition: 0.5s;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      border-radius: 5px;
      margin: 25px;

      &:hover {
        transform: scale(1.05);
        transition: 0.5s;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
          rgba(17, 17, 26, 0.05) 0px 8px 32px;
      }

      h3 {
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

      .stars {
        margin-top: 10px;
      }

      .rating {
        display: flex;
        p {
          margin-right: 5px;
        }
      }
    }
  }
  @media (min-width: 431px) {
    h1 {
      display: none;
    }
  }
`;
