import styled from "styled-components";

export const StyledDetails = styled.main`
  margin: 80px 0;
  display: flex;
  .carouselCont {
    max-width: 50%;
    padding-left: 30px;
  }
  .hotelDesc {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 20px;

    .stars {
      margin: 10px 0;
    }

    .ratings {
      display: flex;
      margin: 10px 0;

      p {
        margin-right: 10px;
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
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .carouselCont {
      max-width: 90%;
      padding: 0;
    }
    .hotelDesc {
      width: 90%;
    }
  }
`;
